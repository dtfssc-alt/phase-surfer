PHASE SURFER v39 — CARD LEGIBILITY LAB

v38を基準に、SLOTの情報設計だけを整理。

- ファイル名は一行ellipsisを廃止し、可能な限り折り返して全文表示
- state card名そのものも生成時に省略しない
- 各occupied SLOTに大きな HOME 値を追加
  - BPM既知: xx.xx BPM
  - BPM不明: x.xxx×
- state cardは保存されたHOMEを表示
- 通常cardはその原盤のHOME = SOURCE BPM / 1.000×を表示
- SOURCE BPM / P30 / 操作ヒントは小さな補助情報へ
- SLOT番号の横の色は従来通りfamily identity

音声・D&D・deck/SLOT double・NEXT・INTERCHANGE・fast touchはv38から変更なし。
