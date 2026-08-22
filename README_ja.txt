PHASE SURFER v37 — FRONT→BACK STATE PRINT LAB

母体: v36 DECK HOME / HEAD LAB

新しい演奏技: FRONT → BACK D&D = 現在状態をBACKへ刷る

FRONTをBACKへドラッグして離すと:
- FRONTの演奏は止まらない / 移動しない / 再スタートしない
- 現在聞こえているBPM + pitch状態を新しいBPM STATE CARDとしてBACKへ複製する
- 新カードの表示名に __xx.xxBPM（SOURCE BPM不明ならrate）が付く
- 新カードのHOMEは複製瞬間の状態になる
- 元音源と同じ色familyを継承する
- すでにデコード済みのAudioBuffer / previewを共有するので、コピーのための再decodeはしない
- 以前のBACKは置換される。自動退避はしない。残したい札は先にSLOTへ置く

これにより同じ元音源から、たとえば:
- FRONT double = FRONT札自身のHOME + HEAD + PLAY
- BACK double = BACKへ刷った別BPM/別pitchのHOME + HEAD + PLAY
- NEXT = 現在のPLAY BPMを引き継ぐTRANSITION + effect
という三つの明確に異なる技を使える。

既存のFRONT→EMPTY SLOT:
- 従来どおり現在状態をBPM STATE CARDとして複製
- occupied SLOTは上書きしない

v36から維持:
- FRONT/BACK double = own HOME + HEAD + PLAY
- STOPPED + deck/SLOT double = 即PLAY再入場
- SLOT double A⇄B state memory
- SLOT single ↔ BACK
- SLOT↔SLOT / SLOT↔BACK D&D
- same source family = same color
- COLLATZ CARD
- NEXT BPM BRIDGE + effect
- INTERCHANGE / SURPRISE / STOP
- WAV P30 → FULL 8ms handoff
- forced-head FX reset
