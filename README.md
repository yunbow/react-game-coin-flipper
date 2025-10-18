# コインフリッパー (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたコイン投げアプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-game-coin-flipper/demo/

## 主要機能

### コインフリップ
- リアルタイムの3Dコインアニメーション
- ランダムな結果生成（表/裏）
- アニメーション中の操作無効化
- キーボードショートカット対応

### 統計・履歴
- 表/裏の出現回数をリアルタイム集計
- 最新10件の履歴表示（時刻付き）
- 統計・履歴のリセット機能

### 操作方法
- **スペースキー**: コインを投げる
- **Rキー**: 統計と履歴をリセット
- **マウス**: ボタンクリックでも操作可能

## 技術スタック
- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── coin-flipper/           # コインフリップ機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── Coin/           # コインコンポーネント
│       │   ├── CoinDisplay/    # コイン表示エリア
│       │   ├── ButtonGroup/    # ボタングループ
│       │   ├── Stats/          # 統計表示
│       │   └── History/        # 履歴表示
│       ├── CoinFlipperApp/     # 機能ルートコンポーネント
│       ├── useCoinFlip.ts      # コインフリップ管理フック
│       └── types.ts            # 機能固有の型定義
├── components/                 # 共通UIコンポーネント
│   ├── Button/                 # 操作ボタン
│   └── Text/                   # テキスト表示
├── stories/                    # Storybook用ストーリー
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License