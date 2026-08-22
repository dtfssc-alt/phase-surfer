PHASE SURFER v36 — DECK HOME / HEAD LAB

母体: v35 SILENCE REENTRY LAB

新しい演奏文法: FRONT / BACK double = その札自身の HOME + HEAD + PLAY

FRONT double
- FRONTはそのまま。
- ordinary cardならnative 1.000xへ戻る。
- BPM STATE CARD / stateful cardなら、その札に保存されたBPM/rateへ戻る。
- HEADへ強制頭出しして即PLAY。
- STOPPED中でも即PLAYする。
- BPM BRIDGEしない。
- STARTのentry SURPRISEも発生しない。

BACK double
- FRONT↔BACKを交換し、旧BACKをFRONTへ出す。
- 新FRONT自身のHOMEへ戻す。
- HEADへ強制頭出しして即PLAY。
- STOPPED中でも即PLAYする。
- 現在鳴っていたPLAY BPMは引き継がない。
- forced-head FX resetを通す。

NEXTとの役割分離
- deck double = CUT / DROP: 「この札を、その札本来のHOMEからHEADで出す」
- NEXT = TRANSITION: 現在のPLAY BPMを可能ならBPM BRIDGEで引き継ぎ、BRIDGE +1と新しいeffectからBACKへ渡る
- NEXTを残すことで、同じFRONT↔BACKでもハードカットとトランジションの二種類を演奏者が選べる。

iPad
- FRONT/BACK doubleのsecond tap内でAudioContextをprime/resumeしてからasync準備へ進む。
- したがって長いSTOPPED状態からのdeck double再入場も意図した動作。

v35から維持
- STOPPED + SLOT double = HEAD / PLAY
- FRONT→EMPTY SLOT BPM STATE CARD copy
- 同じSLOT doubleによるA⇄B BPM/ピッチstate往復
- SLOT single ↔ BACK
- SLOT↔SLOT / SLOT↔BACK D&D
- same source family = same color
- COLLATZ CARD
- INTERCHANGE / SURPRISE / STOP / NEXT
- WAV P30 → FULL 8ms handoff
- forced-head FX reset
