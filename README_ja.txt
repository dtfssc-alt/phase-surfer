PHASE SURFER v35 — SILENCE REENTRY LAB

母体: v34 BPM STATE CARD LAB

新機構: STOPPED + SLOT double = HEAD / PLAY
- 再生停止中でも、任意のoccupied SLOTをダブルタップ/ダブルクリックすると、その札がFRONTへ交換され、そのままHEADから再生開始します。
- BACKは従来どおり触りません。
- ordinary cardは従来どおりnative 1.000x / HEAD。
- BPM STATE CARDは保存されたBPM/rateをRECALLしてHEADから開始。
- STARTボタンのentry SURPRISEは発生させません。SLOT doubleは明示的な「この札から再開」命令です。
- 強制HEAD境界なので、v33のFX resetを通り、前のINTERCHANGE delay stateを持ち越しません。
- iPadではsecond tapの物理gesture内でAudioContextをprime/resumeしてからasync準備へ進みます。

意図
- STOP後の無音時間を演奏者が自由に伸ばし、「終わったのか、まだ続くのか」を自分で決める。
- 長い休符の後、同じ曲でも全然別の曲でもSLOT double一発で再入場できる。
- STARTボタンへ戻らず、カルタの札そのものが再開トリガーになる。

v34から維持
- FRONT→EMPTY SLOT BPM STATE CARD copy
- 同じSLOT doubleによるA⇄B BPM/ピッチstate往復
- FRONT/BACK double HEAD
- SLOT single ↔ BACK
- SLOT↔SLOT / SLOT↔BACK D&D
- same source family = same color
- COLLATZ CARD
- INTERCHANGE / SURPRISE / STOP / NEXT
- WAV P30 → FULL 8ms handoff
- forced-head FX reset
