# PHASE SURFER v18 — GitHub Pages seed

PHASE SURFER v18 RECORD / HARVEST LAB を GitHub Pages でそのまま公開・実機検証するための最小構成です。

## 目的
- Netlify の production deploy 枠に依存せず、iPad / Mac から HTTPS で実機テストする
- GitHub を仕様・履歴・バージョンの基準点にする
- PHASE SURFER 本体は静的 HTML / JavaScript / Web Audio のまま維持する

## 中身
- `index.html` — PHASE SURFER v18 本体
- `audio-data.js` — 内蔵テスト素材
- `.nojekyll` — GitHub Pages でそのまま静的配信するための空ファイル

## GitHub Pages 公開手順
1. GitHub で新しい **Public repository** を作る（例: `phase-surfer`）。
2. このフォルダ内の3ファイルをリポジトリのルートへアップロードして commit。
3. リポジトリの **Settings → Pages** を開く。
4. **Build and deployment → Source: Deploy from a branch** を選ぶ。
5. Branch を **main / (root)** にして Save。
6. 数分待つと `https://<username>.github.io/<repository-name>/` で公開される。
7. iPad でその URL を Safari / Chrome から開いて実機検証する。

## 更新運用
- 次版を作ったら `index.html`（必要なら `audio-data.js`）を差し替えて commit。
- GitHub Pages が同じ URL を更新する。
- PHASE SURFER の仕様・README・復活の呪文なども同じ repo に置けば、履歴を Git で追える。

## 重要
GitHub Pages で公開したファイルはインターネットから閲覧できます。この seed にはユーザー制作の内蔵テスト素材が `audio-data.js` に含まれています。公開してよい素材だけを置いてください。

現時点ではライセンスファイルを付けていません。公開されてソースが読めることと、オープンソースとして再利用権を与えることは別です。
