# Kense Labs

端云一体的 **AI 操作系统**。

- **Kense Work**（端侧）：类似 WorkBuddy 的 AI 工作站，自然语言下达任务并真正执行
- **Kense OS**（系统侧）：类似 Restate 的耐久运行时，让智能体与工作流可恢复、可持久

## Stack

- React + React Router
- Rsbuild（通过 **Bun** 运行）
- ahooks · Tailwind CSS v4 · Valtio
- 中英文 i18n（默认中文）

视觉系统按 [`DESIGN.md`](./DESIGN.md)（Featurebase Feature Stack：深色、Inter、`#0b0c11` / `#5942e8`、1440 容器）。

## Scripts

```bash
bun install
bun run dev
bun run build
bun run preview
```

## Deploy

Push to `main` deploys to GitHub Pages via Actions:

https://kense-labs.github.io/official/
