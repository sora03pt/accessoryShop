# sample — Next.js + TypeScript

セットアップと公開手順:

1. 依存をインストール

```bash
npm install
```

2. ローカル開発

```bash
npm run dev
```

3. ビルドと静的書き出し (deploy ワークフローと同じ)

```bash
npm run build
npm run export
```

出力先は `out/` フォルダです。GitHub Actionsが `out/` を `gh-pages` ブランチにデプロイします。
