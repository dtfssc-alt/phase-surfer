PHASE SURFER v30 — COLOR / WAV PREVIEW / DIRECT FRONT LAB

v29のiPad landscape fitとtransportを土台に、SLOTの身体感を固める実験版。

追加:
- FRONT / BACK / SLOTの各「レコード個体」を8色（白を含む）で追跡
- 同じファイルを複数SLOTへ置いても別レコード扱い・別色
- SLOT main 1回 = SLOT ↔ BACK
- SLOT main 2回 = SLOT ↔ FRONT（BACKは保持）
- DIRECT FRONTは必ず HEAD / 1.000×。BPM BRIDGEは使わない
- WAVはSLOT投入時に先頭最大30秒をpreview cache
- BACKへ来たらfull decode開始。previewがあればNEXTを待たせない
- preview再生中にfull decode完了時は同位置へ8ms crossfadeでhandoff
- 30秒以下の対応WAVはpreview自体が全尺なので追加full decode不要
- MP3は従来どおりfull decode方式。速度変更は引き続き可能

不変:
- FRONT / BACKの2 deck構造
- DEBUG NEXT = FRONT ↔ BACK
- BPM BRIDGE（known → known）
- EXTREME RATE 0.03125×〜8×
- STOP/THROW, SURPRISE, INTERCHANGE, SHADOW
- audio-data.js

確認したいこと:
1. 8色でL1/L2や素材の居場所を追いやすいか
2. SLOT 1回→BACK / 2回→FRONT の身体感
3. DIRECT FRONTで「正しい速度の頭へ戻る」開放感があるか
4. 長いWAVでP30→FULLの切替に違和感/クリックがないか
5. Mac / iPadでSTART→STOP, NEXT往復が引き続き正常か
