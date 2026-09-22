# Kense Labs

端云一体的 **AI 操作系统**。

- **Kense Work**（端侧）：local-first 工作站；可配置 **一把** OS Capability Key 调用已开通能力；其它智能体 / IDE 同契约接入。
- **Kense OS**（系统侧）：控制面与耐久运行时（Gateway · Identity · Flow · Inference · Marketplace · Fleet）；**不是**行业业务系统。

架构权威：主仓 [`apps/web/docs/console/ARCHITECTURE.md`](../web/docs/console/ARCHITECTURE.md)（若本仓库独立检出，见 OS 主仓同路径）。  
**账户体系（法定）：** 本站登录/注册 = **Member（前台）**；Console（`@kense/web`）= **User（后台）**。见 [`IDENTITY.md`](../web/docs/console/IDENTITY.md)。产品叙述见本站 `kense-os` / `kense-work` 文档。

## Stack

- React + React Router
- Rsbuild（通过 **Bun** 运行）
- ahooks · Tailwind CSS v4 · Valtio
- 中英文 i18n（默认中文）

视觉系统按 [`DESIGN.md`](./DESIGN.md)（Featurebase Feature Stack：仅暗色、Inter、`#0b0c11` / `#4e60ff`、1440 容器）。

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
