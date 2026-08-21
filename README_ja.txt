PHASE SURFER v31 — RECORD ROUTING LAB

v30を基準に、音響エンジンとWAV P30→FULL 8ms handoffを維持したまま、
レコードの取り回しだけを拡張した実験版です。

主な変更
- FRONTをダブルタップ/ダブルクリック：現在BPMを保ったままHEADへ強制再スタート。
- BACKをダブルタップ/ダブルクリック：BACKをFRONTへし、現在BPMを橋渡ししてHEADへ。
  FRONTだったレコードはBACKへ移る。
- SLOTの既存操作は維持：1回=SLOT↔BACK、2回=SLOT↔FRONT（HEAD / 1.000x）。
- 同じファイル名は同じID色。音声内容のハッシュや解析はしない。
- desktopではSLOT同士、およびSLOT↔BACKをD&Dで直接交換可能。
- FinderからSLOTへの外部ファイルD&Dも維持。
- WAV P30 preview、full decode、8ms crossfade handoffはv30と同じ。

注意
- D&Dで位置交換できるのはSLOTとBACKです。FRONTはD&D対象にしていません。
- MP3は従来どおりfull decode後に使用できます。WAV P30先行cacheはWAV専用です。
- .nojekyll はGitHubのブラウザUIで弾かれる場合は無視して構いません。
