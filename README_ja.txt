PHASE SURFER v24 — RATE DOMAIN TEST

目的:
- v23 BPM BRIDGEを維持
- SOURCE BPMをPHASE SURFER都合の範囲へ書き換えなくてよいようにする
- 24–140を「絶対BPM範囲」ではなく、94 BPM基準で確立した従来の回転範囲として扱う

RATE DOMAIN:
- HOME = 常に 1.000x
- 従来の24–140 / BASE 94と同じ操作幅を、そのままrateへ置換
- 最小rate = 24/94 ≈ 0.255x
- 最大rate = 140/94 ≈ 1.489x
- SOURCE BPM自体にはこの範囲を課さない
- 例: SOURCE 180 BPMならHOMEは180 BPMのまま
  0.918x ≈ 165.24 BPM / 1.204x ≈ 216.72 BPM

BPM BRIDGE:
- 両方にSOURCE BPMがある場合だけPLAY BPMを維持
- 必要rateが約0.255x–1.489x内ならそのまま橋渡し
- rate範囲外だけRATE LIMITで端に止まる
- 片方でもSOURCE BPM不明なら推測せずrelative speedを維持
- pitchはplaybackRateと一緒に変化。key lock / time stretch / quantizeなし

素材側の原則:
- 150 BPM、180 BPM、変拍子、3小節、ポリリズム等でも、制作者が付けたSOURCE BPMをそのまま信用する
- PHASE SURFERの都合でhalf-time表記へ書き換える必要はない

テスト用:
- 内蔵L1/L2はSOURCE BPM = 94
- 外部テスト素材はプログラムに同梱しない。手動LOADする

今回まだやらないこと:
- SOURCE BPMをCollatz seedへ接続
- TWO DECK / WORKBENCH SLOT
- SLOT交換、重複ファイル、空スロット操作
- D&D

audio-data.jsはv23から変更なし。
