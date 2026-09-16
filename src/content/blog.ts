import type { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'agents-need-a-runtime',
    cover: '/blog/cover-agents-need-a-runtime-v2.png',
    banner: '/blog/banner-agents-need-a-runtime-v2.png',
    date: '2026-03-12',
    readingMinutes: 7,
    category: { zh: '运行时', en: 'Runtime' },
    author: {
      name: 'Kense Labs',
      role: { zh: '工程', en: 'Engineering' },
    },
    title: {
      zh: 'Agent 需要可靠运行时，而不只是对话界面',
      en: 'Agents need a reliable runtime, not only a chat interface',
    },
    excerpt: {
      zh: '一次回答不够；关键的是可持续执行、可恢复与可复用。',
      en: 'A single answer is not enough — what matters is durable execution, recovery, and reuse.',
    },
    body: {
      zh: [
        {
          type: 'p',
          text: '过去两年，Agent 被做成了更好看的对话框。演示很漂亮：它会说话、会选工具、偶尔能改一个文件。真正进入团队之后，问题立刻换了形态——进程被杀掉、网关超时、人还没批、同一次付款被打了两遍。',
        },
        {
          type: 'p',
          text: '这些不是提示词写得不够聪明。这是运行时缺失。操作系统早就知道：不可靠的用户态程序必须被调度、被记账、被限制。智能体没有豁免权。',
        },
        { type: 'h2', id: 'chat-is-io', text: '对话只是 I/O' },
        {
          type: 'p',
          text: '聊天是表达意图的界面，不是系统本身。把状态放在上下文窗口里，等于把文件系统放进剪贴板：方便，但不构成事实。窗口满了、模型换了、标签页关了，工作就蒸发。',
        },
        { type: 'h2', id: 'side-effects', text: '副作用需要记账' },
        {
          type: 'p',
          text: 'Agent 一旦能发邮件、改仓库、调支付，每次工具调用都是事务。失败重试如果没有 journal，就会把“可能成功”变成“重复成功”。可靠运行时的第一条规则：已完成步骤不再执行。',
        },
        { type: 'h2', id: 'wait', text: '等待是一等公民' },
        {
          type: 'p',
          text: '真实工作充满等待。审批、构建、第三方 SLA、隔夜批量。如果等待必须占着一个热进程，成本会把 Agent 限制在玩具规模。耐久 sleep 与信号唤醒，是把 Agent 从演示推进生产的分界。',
        },
        { type: 'h2', id: 'kense', text: 'Kense 的取舍' },
        {
          type: 'p',
          text: '我们把执行放回 Work 的本机环境，把编排、记忆与治理放进 Kense OS。模型可以替换；团队沉淀的判断应留在控制面。界面可以进化，运行时语义不应每季度重写一遍。',
        },
        {
          type: 'callout',
          text: '评估 Agent 产品时，先问中断之后会发生什么，再问它会不会说话。',
        },
      ],
      en: [
        {
          type: 'p',
          text: 'For two years, agents have been prettier dialogs. Demos sparkle: they talk, pick tools, sometimes edit a file. Inside a team the failure mode changes — the process dies, the gateway times out, a human has not approved, a payment is sent twice.',
        },
        {
          type: 'p',
          text: 'That is not an unclever prompt. It is a missing runtime. Operating systems already know: unreliable user-space must be scheduled, journaled, and constrained. Agents do not get a waiver.',
        },
        { type: 'h2', id: 'chat-is-io', text: 'Chat is I/O' },
        {
          type: 'p',
          text: 'Chat expresses intent. It is not the system. State in a context window is a filesystem in the clipboard: convenient, not factual. The window fills, the model changes, the tab closes — the work evaporates.',
        },
        { type: 'h2', id: 'side-effects', text: 'Side effects need a ledger' },
        {
          type: 'p',
          text: 'The moment an agent can mail, patch, or pay, every tool call is a transaction. Retry without a journal turns “maybe succeeded” into “succeeded twice”. Rule one of a reliable runtime: completed steps do not run again.',
        },
        { type: 'h2', id: 'wait', text: 'Waiting is first-class' },
        {
          type: 'p',
          text: 'Real work waits. Approvals, builds, vendor SLAs, overnight batches. If waiting requires a hot process, cost keeps agents at toy scale. Durable sleep and signal wake-ups are the line between demo and production.',
        },
        { type: 'h2', id: 'kense', text: 'The Kense bet' },
        {
          type: 'p',
          text: 'We keep execution in Work, on the machine. Orchestration, memory, and governance live in Kense OS. Models are replaceable; the team’s judgment should remain in the control plane. The UI can evolve. Runtime semantics should not be rewritten every quarter.',
        },
        {
          type: 'callout',
          text: 'When you evaluate an agent product, ask what happens after interruption before you ask whether it can talk.',
        },
      ],
    },
  },
  {
    slug: 'explore-then-crystallize',
    cover: '/blog/cover-explore-then-crystallize-v2.png',
    banner: '/blog/banner-explore-then-crystallize-v2.png',
    date: '2026-02-28',
    readingMinutes: 6,
    category: { zh: '工作方式', en: 'Practice' },
    author: {
      name: 'Kense Labs',
      role: { zh: '产品', en: 'Product' },
    },
    title: {
      zh: '先探索，再固化',
      en: 'Explore first, then consolidate',
    },
    excerpt: {
      zh: '在明确边界内验证方案，跑通后再沉淀为团队资产。',
      en: 'Validate approaches within defined boundaries; promote what works to team assets.',
    },
    body: {
      zh: [
        {
          type: 'p',
          text: '组织引入 Agent 时有两种失败：管得太死，谁都不敢试；放得太开，一次探索变成不可逆的生产变更。正确的顺序是先探索、再固化——而且两段要用不同的系统保证。',
        },
        { type: 'h2', id: 'explore', text: '探索发生在边界内' },
        {
          type: 'p',
          text: '探索不是没有规则。它是在最小权限里快速试错：一份目录、一个仓库、一组只读工具。Work 适合这个阶段，因为失败是局部的，证据也在本机。',
        },
        { type: 'h2', id: 'crystallize', text: '固化是一次发布' },
        {
          type: 'p',
          text: '跑通的提示、工具图和流程如果只留在某个人的会话里，组织没有变强。固化意味着版本、评审、权限与回滚。那是 OS 的工作：把个人判断提升为可复用能力。',
        },
        { type: 'h2', id: 'anti', text: '反模式' },
        {
          type: 'ul',
          items: [
            '没跑通就上共享工作流，把噪声写成制度',
            '永远不发布，每个席位重复发明同一套步骤',
            '用更大模型代替更清晰的边界与验收',
          ],
        },
        {
          type: 'callout',
          text: '探索的输出是证据；固化的输出是版本。不要用聊天记录冒充发布。',
        },
      ],
      en: [
        {
          type: 'p',
          text: 'Teams fail with agents in two ways: they clamp down until nobody tries, or they open the gates until an experiment becomes an irreversible production change. The order is explore, then consolidate — and the two phases need different guarantees.',
        },
        { type: 'h2', id: 'explore', text: 'Explore inside a boundary' },
        {
          type: 'p',
          text: 'Exploration is not the absence of rules. It is fast failure under least privilege: one directory, one repo, a read-only tool set. Work fits this phase because failure is local and evidence stays on the machine.',
        },
        { type: 'h2', id: 'crystallize', text: 'Consolidation is a publish' },
        {
          type: 'p',
          text: 'A working prompt, tool graph, and flow that lives in one person’s session does not make the organization stronger. Consolidation means version, review, permission, and rollback. That is OS work: lifting personal judgment into reusable capability.',
        },
        { type: 'h2', id: 'anti', text: 'Anti-patterns' },
        {
          type: 'ul',
          items: [
            'Sharing a workflow before it works, turning noise into process',
            'Never publishing, so every seat rediscovers the same steps',
            'Buying a larger model instead of a clearer boundary and acceptance test',
          ],
        },
        {
          type: 'callout',
          text: 'Exploration yields evidence. Consolidation yields a version. A chat log is not a release.',
        },
      ],
    },
  },
  {
    slug: 'from-session-to-reuse',
    cover: '/blog/cover-from-session-to-reuse-v2.png',
    banner: '/blog/banner-from-session-to-reuse-v2.png',
    date: '2026-02-10',
    readingMinutes: 6,
    category: { zh: '组织', en: 'Organization' },
    author: {
      name: 'Kense Labs',
      role: { zh: '平台', en: 'Platform' },
    },
    title: {
      zh: '从个人会话到团队复用',
      en: 'From personal session to team reuse',
    },
    excerpt: {
      zh: '以本地工作起步，再按约定接入记忆、流程与治理。',
      en: 'Start with local work; add memory, flows, and governance by contract.',
    },
    body: {
      zh: [
        {
          type: 'p',
          text: '个人生产力工具可以止于会话。组织工具必须回答：别人能否接着做、能否证明做过、能否收回权限。Kense 把这条路径设计成契约，而不是一次“同步到云端”的按钮。',
        },
        { type: 'h2', id: 'contract', text: 'Work–OS 契约' },
        {
          type: 'p',
          text: '会话与状态在两端应对齐：同一身份、同一对象、同一授权语义。如果本地叫“文件”，云上叫另一套 ID，治理就会在翻译层崩溃。统一契约比统一界面更重要。',
        },
        { type: 'h2', id: 'memory', text: '记忆不是日志 dump' },
        {
          type: 'p',
          text: '组织记忆是经过选择的：哪些结论可检索、哪些工具结果可引用、哪些策略有效。把全部聊天丢进向量库，只是把噪音存得更贵。发布与版本才是记忆的边界。',
        },
        { type: 'h2', id: 'governance', text: '治理跟在复用后面' },
        {
          type: 'p',
          text: '没有复用，治理是空转；没有治理，复用是事故。Team 方案把共享、策略与自动化放在同一阶段，是因为这三件事会同时出现。更早或更晚引入，都会让 Agent 停在个人爱好。',
        },
        {
          type: 'p',
          text: '从一次完整任务开始。先在本地完成，需要时再接入 OS。团队变强的标志，不是会话更长，而是有人能在你不在时把同一流程跑完。',
        },
      ],
      en: [
        {
          type: 'p',
          text: 'A personal productivity tool can stop at the session. An organizational tool must answer: can someone else continue, prove what ran, and revoke access. Kense treats that path as a contract, not a “sync to cloud” button.',
        },
        { type: 'h2', id: 'contract', text: 'The Work–OS contract' },
        {
          type: 'p',
          text: 'Sessions and state should align: same identity, same objects, same grant semantics. If local work says “file” and the control plane says another ID, governance dies in translation. A uniform contract matters more than a uniform UI.',
        },
        { type: 'h2', id: 'memory', text: 'Memory is not a log dump' },
        {
          type: 'p',
          text: 'Organizational memory is selected: which conclusions are searchable, which tool results are citable, which policies are in force. Pouring every chat into a vector store is expensive noise. Publish and version are the boundary of memory.',
        },
        { type: 'h2', id: 'governance', text: 'Governance follows reuse' },
        {
          type: 'p',
          text: 'Without reuse, governance is idle. Without governance, reuse is an incident. Team puts sharing, policy, and automation in the same stage because they arrive together. Introduce them much earlier or later and agents stay a personal hobby.',
        },
        {
          type: 'p',
          text: 'Start with one complete task. Finish it locally; add OS when needed. A team is stronger not when sessions get longer, but when someone else can finish the same flow while you are away.',
        },
      ],
    },
  },
];

export function postsSorted(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function relatedPosts(slug: string, limit = 2): BlogPost[] {
  return postsSorted()
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
}
