PHASE SURFER v32 — COLLATZ CARD LAB
2026-08-22

v31 RECORD ROUTING LAB を固定母体に、音声系を変更せず
「COLLATZ CARD ?」だけを追加した小さな実験版です。

■ COLLATZ CARD
中央上部の「?」をダブルタップ / ダブルクリックすると、
現在の COLLATZ N を1手だけ進め、場に存在するファイル名の一族を1つ読みます。

- single tap = 何もしない
- double tap = Collatzを1手進めて1 familyをREAD
- 読んでも音は鳴らさない
- FRONT/BACK/SLOTを動かさない
- ファイルを複製しない
- ファイルを読み込まない
- 同じファイル名が3枚あっても候補としては1 family
- カードにはそのfamilyの既存色とファイル名を表示
- 同じfamilyが連続で読まれることもある（anti-repeatなし）

候補は FRONT + BACK + SLOT 1–6 に現在存在するrecordから作ります。
EMPTYは候補になりません。
配置をD&Dで変えても読まれるfamilyの並び自体は変わらないよう、
位置ではなく色ID/filename keyで安定順序化しています。

重要：このカードはSURPRISE / INTERCHANGEと同じ、画面に見えている
COLLATZ Nを使います。隠し乱数や別シードはありません。
カードを読むとNが進むため、次の新しいSURPRISE/INTERCHANGEにもそのNが効きます。
現在ラッチ中のCOMBOは壊しません。

■ それ以外
v31の挙動を維持：
- FRONT/BACK double HEAD + BPM carry
- SLOT single = SLOT↔BACK
- SLOT double = SLOT↔FRONT / HEAD / 1.000x
- SLOT↔SLOT / SLOT↔BACK D&D
- same filename = same color
- WAV P30 preview + 8ms full handoff
- MP3従来対応

Creative Commons等の外部素材取得はこの版では未実装です。
まず「読み札だけ」で演奏上の意味が出るかを確認する版です。
