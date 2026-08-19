class PhaseSurferRecorderProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.recording = false;
    this.chunkFrames = 16384;
    this.left = new Float32Array(this.chunkFrames);
    this.right = new Float32Array(this.chunkFrames);
    this.writePos = 0;
    this.totalFrames = 0;

    this.port.onmessage = (event) => {
      const data = event.data || {};
      if (data.type === 'start') {
        this.recording = true;
        this.writePos = 0;
        this.totalFrames = 0;
      } else if (data.type === 'stop') {
        this.recording = false;
        this.flush();
        this.port.postMessage({ type: 'stopped', totalFrames: this.totalFrames });
      }
    };
  }

  flush() {
    if (!this.writePos) return;
    const frames = this.writePos;
    const left = this.left.slice(0, frames);
    const right = this.right.slice(0, frames);
    this.port.postMessage(
      { type: 'chunk', left: left.buffer, right: right.buffer, frames },
      [left.buffer, right.buffer]
    );
    this.left = new Float32Array(this.chunkFrames);
    this.right = new Float32Array(this.chunkFrames);
    this.writePos = 0;
  }

  process(inputs, outputs) {
    const input = inputs[0] || [];
    const output = outputs[0] || [];
    const leftIn = input[0];
    const rightIn = input[1] || leftIn;

    // The recorder branch ends in a zero-gain node, but copy through so the
    // AudioWorklet remains an ordinary active processing node on all engines.
    if (leftIn) {
      for (let ch = 0; ch < output.length; ch++) {
        const src = input[ch] || leftIn;
        if (src) output[ch].set(src);
      }
    }

    if (!this.recording || !leftIn) return true;

    let srcPos = 0;
    const frames = leftIn.length;
    while (srcPos < frames) {
      const room = this.chunkFrames - this.writePos;
      const take = Math.min(room, frames - srcPos);
      this.left.set(leftIn.subarray(srcPos, srcPos + take), this.writePos);
      this.right.set(rightIn.subarray(srcPos, srcPos + take), this.writePos);
      this.writePos += take;
      this.totalFrames += take;
      srcPos += take;
      if (this.writePos >= this.chunkFrames) this.flush();
    }
    return true;
  }
}

registerProcessor('phase-surfer-recorder', PhaseSurferRecorderProcessor);
