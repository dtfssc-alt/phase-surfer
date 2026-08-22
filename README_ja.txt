PHASE SURFER v34 — BPM STATE CARD LAB

母体: v33 FORCED HEAD FX RESET FIX

新機構: FRONT → SLOT BPM STATE CARD
- FRONTをEMPTY SLOTへD&Dすると、現在のFRONTを「演奏状態カード」として複製します。
- FRONTの再生、位置、BPM、エフェクト状態には触れません。D&DはCOPY-onlyです。
- SOURCE BPMが分かる素材は、複製時のPLAY BPMをカード名末尾へ追記します。
  例: TestLoop1__104.00BPM
- SOURCE BPM不明素材は、BPMを捏造せず captured rate (例: __0.918x) を追記します。
- 音声ファイルを新規レンダリング/コピーしません。同じFile/AudioBuffer/previewを共有する軽量カードです。
- 色は追加後の表示名ではなく元のsource filename familyを継承します。
  同じ原盤の通常札/BPM札は同色で、COLLATZ CARDでも同じfamilyとして扱います。
- occupied SLOTへのFRONT dropは安全のため上書きせず `SLOT n OCCUPIED` で拒否します。

同じSLOTをdoubleしてA⇄B
- 通常札のSLOT doubleは従来どおり HEAD / native 1.000x。
- BPM STATE CARDのSLOT doubleは、保存されたBPM/rateをHEADからRECALLします。
- state cardとFRONTを交換する時、追い出されるFRONTの現在BPM/rateもその場で記憶します。
- そのため同じSLOTをdoubleし続けるだけで、2つの速度/ピッチ状態を往復できます。
- state card側をFRONTで微調整してから戻した場合、BPM suffixも新しい記憶値へ更新します。

既存仕様は維持
- FRONT/BACK double HEAD
- SLOT single ↔ BACK
- ordinary SLOT double ↔ FRONT / native HOME
- SLOT↔SLOT / SLOT↔BACK D&D
- same source family = same color
- COLLATZ CARD
- INTERCHANGE / SURPRISE / STOP / NEXT
- WAV P30 → FULL 8ms handoff
- v33 forced-head FX reset

検証
- inline JS: node --check 通過
- headless Chromiumで状態遷移を検証:
  * 104 BPMでFRONTをSLOTへcopy → FRONTは104 BPMのまま継続
  * FRONTを111 BPMへ変更 → 同じSLOT doubleで C1=104 BPM / L1=MEM 111 BPM
  * 再doubleで L1=111 BPM / C1=CAP 104 BPM に帰還
  * captured cardを106 BPMへ変更して戻すとsuffixも106.00BPMへ更新
  * ordinary SLOT doubleは従来どおり94 BPM HOME
  * occupied SLOTへのFRONT copyは上書きしない
  * sourceとstate cardのcolor RGB一致
  * START→STOP完走 / playing NEXT L1→L2 通過
  * playing中のFRONT→SLOT copyでPLAYING状態が変化しない
- audio-data.js SHA-256はv33と完全一致
