import type { ComponentType } from 'react';
import type { DocProductId, DocSectionId, Localized } from '../types';

export type { DocProductId };
import IntroductionZh from './mdx/introduction.zh.mdx';
import IntroductionEn from './mdx/introduction.en.mdx';
import MentalModelZh from './mdx/mental-model.zh.mdx';
import MentalModelEn from './mdx/mental-model.en.mdx';
import QuickstartZh from './mdx/quickstart.zh.mdx';
import QuickstartEn from './mdx/quickstart.en.mdx';
import KenseWorkZh from './mdx/kense-work.zh.mdx';
import KenseWorkEn from './mdx/kense-work.en.mdx';
import KenseOsZh from './mdx/kense-os.zh.mdx';
import KenseOsEn from './mdx/kense-os.en.mdx';
import DurableExecutionZh from './mdx/durable-execution.zh.mdx';
import DurableExecutionEn from './mdx/durable-execution.en.mdx';
import SecurityZh from './mdx/security.zh.mdx';
import SecurityEn from './mdx/security.en.mdx';
import DeployZh from './mdx/deploy.zh.mdx';
import DeployEn from './mdx/deploy.en.mdx';

export type DocHeading = {
  id: string;
  depth: 2 | 3;
  title: Localized<string>;
};

export type DocEntry = {
  slug: string;
  section: DocSectionId;
  product: DocProductId;
  order: number;
  updated: string;
  title: Localized<string>;
  description: Localized<string>;
  headings: DocHeading[];
  Content: Localized<ComponentType>;
};

export type DocProduct = {
  id: DocProductId;
  entrySlug: string;
  sections: DocSectionId[];
};

export const DOC_SECTION_ORDER: DocSectionId[] = ['start', 'work', 'os', 'platform'];

export const DOC_PRODUCTS: DocProduct[] = [
  { id: 'overview', entrySlug: 'introduction', sections: ['start'] },
  { id: 'work', entrySlug: 'kense-work', sections: ['work'] },
  { id: 'os', entrySlug: 'kense-os', sections: ['os'] },
  { id: 'platform', entrySlug: 'security', sections: ['platform'] },
];

export const docs: DocEntry[] = [
  {
    slug: 'introduction',
    section: 'start',
    product: 'overview',
    order: 1,
    updated: '2026-09-16',
    title: { zh: 'Kense 是什么', en: 'What Kense is' },
    description: {
      zh: 'Kense 是端云一体的 AI 操作系统：Work 负责本地完成工作，OS 负责组织级编排、记忆与治理。',
      en: 'Kense is an end-to-edge AI operating system: Work completes jobs locally; OS handles orchestration, memory, and governance.',
    },
    headings: [
      {
        id: 'two-layers',
        depth: 2,
        title: { zh: '两层，而不是两个产品孤岛', en: 'Two layers, not two silos' },
      },
      { id: 'for-whom', depth: 2, title: { zh: '谁该从这里开始', en: 'Who this is for' } },
      { id: 'next', depth: 2, title: { zh: '下一步', en: 'What to read next' } },
    ],
    Content: { zh: IntroductionZh, en: IntroductionEn },
  },
  {
    slug: 'mental-model',
    section: 'start',
    product: 'overview',
    order: 2,
    updated: '2026-09-16',
    title: { zh: '心智模型', en: 'Mental model' },
    description: {
      zh: '用“意图、边界、状态、发布”四件事理解 Kense，避免把 Work 当成 IDE、把 OS 当成聊天后端。',
      en: 'Understand Kense as intent, boundary, state, and publish — not as an IDE plus a chat backend.',
    },
    headings: [
      { id: 'intent', depth: 2, title: { zh: '意图', en: 'Intent' } },
      { id: 'boundary', depth: 2, title: { zh: '边界', en: 'Boundary' } },
      { id: 'state', depth: 2, title: { zh: '状态', en: 'State' } },
      { id: 'publish', depth: 2, title: { zh: '发布', en: 'Publish' } },
    ],
    Content: { zh: MentalModelZh, en: MentalModelEn },
  },
  {
    slug: 'quickstart',
    section: 'start',
    product: 'overview',
    order: 3,
    updated: '2026-09-16',
    title: { zh: '快速开始', en: 'Quickstart' },
    description: {
      zh: '用一次完整任务验证路径：本地执行 → 查看步骤 → 需要时再接入 OS。',
      en: 'Prove the path with one complete task: run locally, inspect steps, connect OS only when needed.',
    },
    headings: [
      { id: 'step-1', depth: 2, title: { zh: '1. 选定一个真实任务', en: '1. Pick one real task' } },
      { id: 'step-2', depth: 2, title: { zh: '2. 在 Work 里圈定权限', en: '2. Bound permission in Work' } },
      { id: 'step-3', depth: 2, title: { zh: '3. 跑通并留下证据', en: '3. Run and keep evidence' } },
      { id: 'step-4', depth: 2, title: { zh: '4. 仅在需要时接入 OS', en: '4. Connect OS only when needed' } },
    ],
    Content: { zh: QuickstartZh, en: QuickstartEn },
  },
  {
    slug: 'kense-work',
    section: 'work',
    product: 'work',
    order: 4,
    updated: '2026-09-16',
    title: { zh: 'Kense Work', en: 'Kense Work' },
    description: {
      zh: 'Work 是 local-first 工作站：在本机组合模型、文件与工具，并把结果变成可审阅的产物。',
      en: 'Work is the local-first workstation: compose models, files, and tools on your machine, and leave reviewable artifacts.',
    },
    headings: [
      {
        id: 'compose',
        depth: 2,
        title: { zh: '组合，而不是绑定单一模型', en: 'Compose, do not bind one model' },
      },
      { id: 'sandbox', depth: 2, title: { zh: '沙箱与产物', en: 'Sandbox and artifacts' } },
      { id: 'handoff', depth: 2, title: { zh: '向 OS 交托', en: 'Hand off to OS' } },
    ],
    Content: { zh: KenseWorkZh, en: KenseWorkEn },
  },
  {
    slug: 'kense-os',
    section: 'os',
    product: 'os',
    order: 5,
    updated: '2026-09-16',
    title: { zh: 'Kense OS', en: 'Kense OS' },
    description: {
      zh: 'OS 是控制面与耐久运行时：编排意图、保持状态、代理可靠调用，并把执行下沉到节点。',
      en: 'OS is the control plane and durable runtime: orchestrate intent, keep state, proxy reliable calls, and land execution on nodes.',
    },
    headings: [
      { id: 'plane', depth: 2, title: { zh: '控制面做什么', en: 'What the control plane does' } },
      { id: 'services', depth: 2, title: { zh: '一等服务', en: 'First-class services' } },
      { id: 'when', depth: 2, title: { zh: '何时使用 OS', en: 'When to use OS' } },
    ],
    Content: { zh: KenseOsZh, en: KenseOsEn },
  },
  {
    slug: 'durable-execution',
    section: 'os',
    product: 'os',
    order: 6,
    updated: '2026-09-16',
    title: { zh: '耐久执行', en: 'Durable execution' },
    description: {
      zh: '中断不是失败。期望状态与 journal 分离，已完成步骤不再执行。',
      en: 'Interruption is not failure. Desired state and the journal stay separate; completed steps do not run again.',
    },
    headings: [
      { id: 'journal', depth: 2, title: { zh: 'Journal 与重放', en: 'Journal and replay' } },
      { id: 'wait', depth: 2, title: { zh: '等待也耐久', en: 'Waiting is durable too' } },
      { id: 'rpc', depth: 2, title: { zh: '可靠调用', en: 'Reliable calls' } },
    ],
    Content: { zh: DurableExecutionZh, en: DurableExecutionEn },
  },
  {
    slug: 'security',
    section: 'platform',
    product: 'platform',
    order: 7,
    updated: '2026-09-16',
    title: { zh: '权限、隔离与审计', en: 'Permission, isolation, and audit' },
    description: {
      zh: '每次操作具备边界、授权与记录。敏感数据可以保留在本地。',
      en: 'Every action has a boundary, a grant, and a record. Sensitive data can remain local.',
    },
    headings: [
      { id: 'grants', depth: 2, title: { zh: '组织级策略', en: 'Organization policy' } },
      { id: 'isolation', depth: 2, title: { zh: '隔离执行', en: 'Isolated execution' } },
      { id: 'evidence', depth: 2, title: { zh: '证据', en: 'Evidence' } },
    ],
    Content: { zh: SecurityZh, en: SecurityEn },
  },
  {
    slug: 'deploy',
    section: 'platform',
    product: 'platform',
    order: 8,
    updated: '2026-09-16',
    title: { zh: '部署与方案', en: 'Deploy and plans' },
    description: {
      zh: '托管、BYOC 或自托管，语义不变。订阅按阶段解锁 Work 与 OS。',
      en: 'Managed, BYOC, or self-hosted — semantics stay the same. One subscription unlocks Work and OS by stage.',
    },
    headings: [
      { id: 'modes', depth: 2, title: { zh: '三种落地', en: 'Three landings' } },
      { id: 'plans', depth: 2, title: { zh: '订阅如何展开', en: 'How the subscription unfolds' } },
    ],
    Content: { zh: DeployZh, en: DeployEn },
  },
];

export function docsSorted(): DocEntry[] {
  return [...docs].sort((a, b) => a.order - b.order);
}

export function docsBySection(section: DocSectionId): DocEntry[] {
  return docsSorted().filter((doc) => doc.section === section);
}

export function docsByProduct(product: DocProductId): DocEntry[] {
  return docsSorted().filter((doc) => doc.product === product);
}

export function getDoc(slug: string): DocEntry | undefined {
  return docs.find((doc) => doc.slug === slug);
}

export function getDocProduct(id: DocProductId): DocProduct {
  return DOC_PRODUCTS.find((product) => product.id === id) ?? DOC_PRODUCTS[0]!;
}

export function productForSlug(slug?: string): DocProductId {
  if (!slug) return 'overview';
  return getDoc(slug)?.product ?? 'overview';
}

export function adjacentDocs(slug: string): { prev?: DocEntry; next?: DocEntry } {
  const current = getDoc(slug);
  const list = current ? docsByProduct(current.product) : docsSorted();
  const index = list.findIndex((doc) => doc.slug === slug);
  if (index < 0) return {};
  return { prev: list[index - 1], next: list[index + 1] };
}
