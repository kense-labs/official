import type { Messages } from './types';

export const zh: Messages = {
  meta: {
    homeTitle: 'Kense — Work 与 OS',
    pricingTitle: '定价 — Kense',
    blogTitle: '博客 — Kense',
    docsTitle: '文档 — Kense',
    cloudTitle: 'Kense OS — 耐久执行与控制面',
    loginTitle: '登录 — Kense',
    signupTitle: '注册 — Kense',
    description:
      'Kense Work 提供 local-first 工作入口；Kense OS 提供编排、记忆与治理能力。',
    cloudDescription:
      'Kense OS 提供耐久执行、强一致状态、可靠调用与可控发布。',
  },
  nav: {
    home: '首页',
    features: '功能',
    work: 'Work',
    cloud: 'OS',
    pricing: '定价',
    customers: '客户',
    docs: '文档',
    blog: '博客',
    solutions: '解决方案',
    login: '登录',
    demo: '预约演示',
    start: '免费开始',
  },
  lang: {
    zh: '中文',
    en: 'EN',
    switchTo: '切换语言',
  },
  a11y: {
    backToTop: '回到顶部',
  },
  solutions: {
    panelAria: '解决方案菜单',
    listLabel: '方案',
    learnMore: '了解详情',
    items: [
      {
        id: 'monitor',
        name: 'Kense Monitor',
        tagline: '面向经营与交易决策的外部态势感知',
        description:
          '接入冲突、制裁、航运与宏观信号，支持问询、订阅，并集成到制定计划与风险边界的系统中。',
        cover: '/site/monitor-illust-cover.png',
        to: '/solutions/monitor',
      },
      {
        id: 'finance',
        name: 'Kense Finance',
        tagline: '投研与交易共用的统一市场数据层',
        description:
          '一次接入股票、宏观、衍生品与资讯；经 Python、研究工作台、MCP 与 REST 提供同一套规范化数据。',
        cover: '/site/finance-hero.svg',
        to: '/solutions/finance',
      },
      {
        id: 'science',
        name: 'Kense Science',
        tagline: '可复现的本地科研工作台',
        description:
          '文献、Notebook、科学连接器与助手集中在同一工作区，产物带版本与可回放的执行轨迹。',
        cover: '/site/science-hero.svg',
        to: '/solutions/science',
      },
      {
        id: 'insight',
        name: 'Kense Insight',
        tagline: '面向 BI、产品与自动化的指标语义层',
        description:
          '以代码定义指标、关联与访问策略；经 SQL、REST、GraphQL 与 MCP 对外，并提供缓存与预聚合。',
        cover: '/site/insight-hero.svg',
        to: '/solutions/insight',
      },
    ],
    monitor: {
      documentTitle: 'Kense Monitor — Kense',
      stake: '外部条件变化快于内部系统更新时，计划与风险限额将失去可靠性。',
      lead: '将冲突、制裁、航运与宏观信号沉淀为可共享的态势层，支持问询、订阅，并接入现有工具。',
      problem: {
        title: '业务系统掌握内部状态，却缺少外部条件',
        body: 'ERP、交易与排产系统跟踪库存、订单与持仓。真正重置交期与风险的外部事件，仍主要来自新闻、即时通讯与非正式同步。',
        points: [
          {
            title: '感知滞后',
            body: '港口关闭、制裁落地等事件往往先出现在公开来源。待录入业务系统时，决策窗口通常已经关闭。',
          },
          {
            title: '口径不一致',
            body: '研究、风控与运营对同一事件的描述不同，缺少可共同引用的态势记录。',
          },
          {
            title: '可审计性不足',
            body: '决策依据散落在邮件与聊天中。失误难以归因，有效应对也难以复用。',
          },
        ],
      },
      cost: {
        title: '态势滞后转化为损益、敞口与治理风险',
        body: '外部事实已变、系统仍按既有假设运行时，损失体现为业绩波动、风险暴露，以及对计划可信度的侵蚀。',
      },
      capabilities: {
        title: '问询 · 订阅 · 集成',
        items: [
          {
            title: '问询',
            body: '以自然语言检索当前态势，并将影响映射到相关标的、站点或对象。',
          },
          {
            title: '订阅',
            body: '定时摘要、关键事件告警，以及可供下游系统消费的事件流。',
          },
          {
            title: '集成',
            body: '通过 Widget、MCP 与 API 对外暴露，使现有工作台可将态势作为结构化输入使用。',
          },
        ],
      },
      architecture: {
        title: '只读证据，任务入口在 Work，写回经 OS 受控发布',
        body: 'Kense Monitor 提供态势证据。团队在 Kense Work 发起任务。Kense OS 负责 Bot、策略检查与发布。Monitor 不直接写入业务系统。',
        points: [
          {
            title: '统一接入',
            body: '市场与宏观、冲突与制裁、海事与航空、火情、央行与贸易信号等，均以只读方式接入。',
          },
          {
            title: '使用策略',
            body: '使用前确认可用性；缺失不得视为零风险；权限拒绝不静默重试；全程只读。',
          },
          {
            title: '写回边界',
            body: '任何写回均走受控发布通道，并具备 ACL 与审批。Bot 不得直接向生产系统下发指令。',
          },
        ],
      },
      loop: {
        title: '从外部信号到可追责的变更',
        body: 'Monitor 提供证据。研判与发布在 OS 层执行，并受 Box 与 Sentry 约束。',
        steps: [
          {
            title: '信号接入',
            body: '事件携带新鲜度元数据与来源证据链接进入系统。',
          },
          {
            title: '任务发起',
            body: '人员在 Work 中明确目标；模型、文件与技能在同一工作区可用。',
          },
          {
            title: '领域研判',
            body: '订阅激活物流、合规或成本 Bot；结论写入组织记忆。',
          },
          {
            title: '审批与发布',
            body: 'Sentry 阻断高风险动作；高算力求解在 Box 内执行；写回须经审批。',
          },
        ],
      },
      cases: {
        title: '交易研究与生产计划',
        subtitle: '同一态势源，支撑两类运作模式',
        items: [
          {
            kicker: '交易研究',
            title: '将全球事件转化为研究假设',
            points: [
              '关键冲击带上来源归因出现在研究台',
              '摘要与告警支撑开平仓决策',
              '历史应对可供对照',
              '策略参数保留支撑证据的链接',
            ],
            accept: '验收标准：研究流程完整、信号时效达标、决策可解释',
          },
          {
            kicker: '生产计划',
            title: '将态势风险纳入交期与缓冲',
            points: [
              '航运、制裁与原料集中度进入 APS 输入',
              '事件激活物流、合规与成本 Bot',
              '求解在 Box 内执行；Sentry 可否决不安全动作',
              '发布前完成对账；写回须经审批',
            ],
            accept: '验收标准：OTD、恢复率、变更溯源完整',
          },
        ],
      },
      trust: {
        title: '不可信计算隔离执行；危险写回在内核层管控',
        items: [
          {
            title: 'Kense Box',
            body: '硬件隔离 MicroVM，支持 OCI 镜像，冷启动约 200ms。边界显式，不会静默回退至宿主机执行。',
          },
          {
            title: 'Kense Sentry',
            body: '规则评估、模型辅助研判与升级调查。无需改写 Agent 代码即可观察；在内核层阻断，并提供可审计的风险分级。',
          },
          {
            title: '发布通道',
            body: '写回仅限发布通道，具备 ACL、必要的双人审批、集中密钥管理，以及每次发布附带的证据。',
          },
        ],
      },
      path: {
        title: '先建立可映射范围，验证后再扩展',
        body: '从对象映射与只读接入开始。确认新鲜度、决策可追溯与写回边界后，再扩大订阅规模。',
        riskTitle: '实施约束',
        riskBody:
          '对象映射完成前，不引入外部冲击。噪声信号采用双门限。高峰唤醒受订阅与配额限制；变更差异须标明主要驱动因子。',
      },
      ctaTitle: '使经营计划与实时外部条件对齐',
      ctaBody: '免费开始，或预约演示，完整走通一次端到端决策流程。',
    },
    finance: {
      documentTitle: 'Kense Finance — Kense',
      stake: '消除投研与交易台重复建设的市场数据管道。',
      lead: '一次规范化公有、授权与自有数据源。分析师、量化与自动化消费方读取同一套契约。',
      problem: {
        title: '各团队维护碎片化的数据栈',
        body: '研究依赖一套终端，量化另接爬虫或源，自动化再连第三套 API。口径不一致，历史不完整，访问控制也难以统一。',
        points: [
          {
            title: '数据孤岛',
            body: '股票、宏观、期权与资讯相互分离，跨域分析依赖人工拼接。',
          },
          {
            title: '接口不一致',
            body: 'Python、Excel、仪表盘与工具链各自使用不同的 schema 与权限模型。',
          },
          {
            title: '证据不足',
            body: '自动生成的叙述仍需要可核验的行情、披露与来源归因。',
          },
        ],
      },
      cost: {
        title: '基础设施事务挤占研究产能',
        body: '骨干人力消耗在供应商运维、字段清洗与复权处理上，研究交付等待数据就绪。',
      },
      capabilities: {
        title: '资产覆盖',
        items: [
          {
            title: '股票',
            body: '行情、基本面、估值、持股、做空与公司画像，服务研究与回测。',
          },
          {
            title: 'ETF / 指数',
            body: '持仓、成分与表现，支持基准与因子分析。',
          },
          {
            title: '加密资产 / 外汇',
            body: '即期、交叉盘与流动性快照，统一查询接口。',
          },
          {
            title: '衍生品',
            body: '期权链、期货与希腊值，支持波动分析与对冲。',
          },
          {
            title: '宏观',
            body: 'GDP、CPI、利率、央行序列与经济日历，可与资产价格对齐。',
          },
          {
            title: '固定收益',
            body: '国债与信用收益率、利差与曲线。',
          },
          {
            title: '商品',
            body: '现货与期货价格，支撑宏观到产业链的影响分析。',
          },
          {
            title: '资讯与披露',
            body: '市场新闻与监管披露，含时间戳与来源链接。',
          },
          {
            title: '源扩展',
            body: '公有、授权与内部源可插拔接入，一次规范化、多端复用。',
          },
        ],
      },
      architecture: {
        title: '一次接入，多端消费',
        body: 'Kense Finance 负责规范化与缓存。Python/SDK、研究工作台、MCP 与 REST 共享同一契约。',
        points: [
          {
            title: '数据平面',
            body: '按资产域组织；对数据包进行规范化、缓存，并标注来源溯源信息。',
          },
          {
            title: '统一契约',
            body: '量化使用 SDK，分析师使用工作台，工具使用 MCP，应用使用 REST。',
          },
          {
            title: '与 Work / OS 协同',
            body: '在 Work 发起研究任务；OS Bot 可订阅 Finance 证据。写操作仍须审批。',
          },
        ],
      },
      loop: {
        title: '从源接入到可核验输出',
        body: 'Finance 管理数据质量与访问。Work 是任务界面。OS 约束可对外发布的内容。',
        steps: [
          {
            title: '连接数据源',
            body: '将公有、授权与内部源映射至股票、宏观、资讯等相关域。',
          },
          {
            title: '规范化',
            body: '统一 schema、时区处理、复权与 ACL，形成一致数据包。',
          },
          {
            title: '消费',
            body: '在工作台组件旁问询，或经 MCP / REST 获取同一批字段。',
          },
          {
            title: '受控行动',
            body: 'Bot 结论进入组织记忆；回测在 Box 中执行；Sentry 可阻断不安全动作。',
          },
        ],
      },
      cases: {
        title: '研究与量化流程',
        subtitle: '共享数据源，不同运作节奏',
        items: [
          {
            kicker: '研究',
            title: '在同一工作区组合股票、资讯与披露',
            points: [
              '价格走势与披露并排审阅',
              '以宏观日历驱动主题研究',
              '导出时保留来源归因',
              '驱动因素在市场之外时，与 Monitor 协同使用',
            ],
            accept: '验收标准：跨域时延、字段完整率、来源链接完整性',
          },
          {
            kicker: '量化与自动化',
            title: 'SDK 与 MCP 共用同一契约',
            points: [
              '在 Python 中加载历史与基本面进行回测',
              '经 MCP 获取期权链与资讯摘要',
              '按租户实施配额与 ACL',
              '下单与外联路径置于 Sentry 之后',
            ],
            accept: '验收标准：回测可复现、自动调用可举证、无权限提升',
          },
        ],
      },
      trust: {
        title: '市场数据需要溯源与访问控制',
        items: [
          {
            title: '溯源',
            body: '每条序列保留 provider、抓取时间与转换历史，结论可回放。',
          },
          {
            title: 'Kense Box / Sentry',
            body: '回测与自定义脚本在 MicroVM 中运行；敏感读取与外联遵循内核策略。',
          },
          {
            title: 'ACL 与发布',
            body: '查询默认只读。交易或主数据写入须经受控发布与审批。',
          },
        ],
      },
      path: {
        title: '优先建设股票与资讯',
        body: '从一个授权源起步，验证 SDK、工作台与 MCP 在同一字段集上的一致性。基线稳定后再扩展衍生品与宏观。',
        riskTitle: '商务与运维约束',
        riskBody:
          '授权与商标遵循合同条款。数据准确性不构成投资建议。高峰负载通过配额与缓存管理；敏感字段默认脱敏。',
      },
      ctaTitle: '在投研与交易间统一市场数据',
      ctaBody: '免费开始，或预约演示，接入首批股票与资讯源。',
    },
    science: {
      documentTitle: 'Kense Science — Kense',
      stake: '缺少可执行上下文的科研产出，难以可靠审阅与复用。',
      lead: '将文献、Python/R Notebook、科学连接器与助手纳入同一本地工作区，产物带版本与可回放的执行轨迹。',
      problem: {
        title: '科研流程仍分散在多种工具中',
        body: '文献、Notebook、助手对话与图表分属不同环境。审阅者无法重建结果的生成路径。',
        points: [
          {
            title: '工具碎片化',
            body: '聊天、脚本、PDF 与数据库缺少统一的项目上下文与审批边界。',
          },
          {
            title: '执行不透明',
            body: '助手可起草分析，但工具调用、内核活动与连接器参数事后难以审计。',
          },
          {
            title: '产物脱节',
            body: '报告与图表脱离生成它们的代码、输入、环境与对话。',
          },
        ],
      },
      cost: {
        title: '不可复现带来返工与审阅风险',
        body: '团队产能消耗在复原既有工作上。合规审阅停滞。受控课题中，自动化协助难以被信任。',
      },
      capabilities: {
        title: '工作台范围',
        items: [
          {
            title: '项目与会话',
            body: '置顶会话、消息分支、侧边对话，以及携带文件、Notebook 与核验记录的便携包。',
          },
          {
            title: '辅助流程',
            body: '明确研究目标；流式展示工具活动；支持审批、停止、搜索与中断恢复。',
          },
          {
            title: '模型与运行时',
            body: '接入自选提供商与网关。按会话选择运行时与推理配置。',
          },
          {
            title: '专家助手',
            body: '能力范围受限的助手、包导入导出，以及保留上下文的会话交接。',
          },
          {
            title: 'Python / R / HPC',
            body: '持久内核、托管或自建解释器、SSH 主机、Slurm 作业，以及保留执行轨迹的后台运行。',
          },
          {
            title: '文献',
            body: '按 DOI、PMID 或 arXiv 导入；检索开放全文；从 PDF 抽取图表；格式化引用。',
          },
          {
            title: '文件与预览',
            body: '大文件上传、`@` 路径引用，以及 PDF、Office、图像、分子与 Notebook 历史的内联预览。',
          },
          {
            title: '版本与轨迹',
            body: '校验和版本，包含生产代码、运行历史、输入、环境清单与审阅备注。',
          },
          {
            title: '技能与连接器',
            body: '内置研究技能与连接器，以及权限管控下的自定义 MCP。',
          },
          {
            title: '隐私与核验',
            body: '默认本地优先存储；审批档位；凭据保管；可选审阅循环；可回放核验。',
          },
        ],
      },
      architecture: {
        title: '本地工作区、可检视执行，出域由 OS 管控',
        body: 'Kense Science 将科研活动保留在本机。Work 为入口。产出离开工作区时，由 OS 施加 Box 与 Sentry 控制。',
        points: [
          {
            title: '本地优先存储',
            body: '项目、缓存与凭据保留在磁盘。对外调用仅指向已配置或已批准的服务。',
          },
          {
            title: '可检视运行',
            body: '工具活动、内核执行与连接器参数，与报告、表格、图表一并可见。',
          },
          {
            title: 'OS 协同',
            body: '专家与 OS Bot 可在 Box / Sentry 下复用 Science 证据。写回仍须受控发布。',
          },
        ],
      },
      loop: {
        title: '从研究问题到可回放产出',
        body: 'Science 将问题、执行与产物一并保留。结果离开工作区时再施加策略。',
        steps: [
          {
            title: '定义任务',
            body: '明确目标、输入、方法、产出与验收标准。附加文件或 `@` 项目产物。',
          },
          {
            title: '执行',
            body: '在所选审批档位下使用技能、连接器、检索与 Notebook。',
          },
          {
            title: '就地审阅',
            body: '在会话旁检视报告与图表。打开任意版本的执行轨迹。',
          },
          {
            title: '核验与发布',
            body: '必要时隔离回放。Box / Sentry 管控高风险外联与发布。',
          },
        ],
      },
      cases: {
        title: '复现与文献综述',
        subtitle: '同一工作台上的两类常见流程',
        items: [
          {
            kicker: '复现',
            title: '复现已发表的差异表达研究',
            points: [
              '附加论文、数据集与验收阈值',
              '运行可见工具活动的 Notebook',
              '在会话内比对再生表格与图表',
              '保留带执行轨迹的版本化产出供审阅',
            ],
            accept: '验收标准：配方可回放、表/字节校验、审阅备注可查',
          },
          {
            kicker: '文献综述',
            title: '在权限约束下使用科学连接器开展综述',
            points: [
              '将 DOI / PMID / arXiv 导入共享文库',
              '检索开放全文并从 PDF 抽取内容',
              '仅在授权时调用生命科学连接器',
              '导出可在其他机器导入的数据包',
            ],
            accept: '验收标准：引用完整、连接器 ACL 合规、包导入成功',
          },
        ],
      },
      trust: {
        title: '允许协助，不允许伪造证据',
        items: [
          {
            title: '明确缺口',
            body: '不可用证据标注为不可用。版本保持校验和，并限定在会话作用域内。',
          },
          {
            title: 'Kense Box / Sentry',
            body: '不可信求解与远程作业隔离运行。高风险网络与写回路径遵循内核策略。',
          },
          {
            title: '研究者责任',
            body: '询问 / 自动编辑 / 完全访问档位、按连接器授权，以及可选审阅循环。方法、解释与科学有效性仍由研究者负责。',
          },
        ],
      },
      path: {
        title: '从一个项目、一个运行时与有限连接器集起步',
        body: '先验证执行轨迹与审批机制，再引入 HPC 与专家包。',
        riskTitle: '范围边界',
        riskBody:
          '方法、解释、隐私与科学有效性由研究者负责。标识符不得进入提示词与公开日志。连接器授权遵循上游条款。',
      },
      ctaTitle: '将科研产出与执行上下文保留在一起',
      ctaBody: '免费开始，或预约演示，走通一次从问题到回放的分析流程。',
    },
    insight: {
      documentTitle: 'Kense Insight — Kense',
      stake: '当各系统分别重定义同一 KPI，报表与自动化无法保持一致。',
      lead: '以代码定义指标、关联与访问规则；经 SQL、REST、GraphQL 与 MCP 对外提供，并以缓存与预聚合控制数仓负载。',
      problem: {
        title: '同一 KPI 解析出相互冲突的数值',
        body: '仪表盘、产品界面与自动化各自重做关联与粒度。数字分歧、数仓成本上升，行级规则也难以一致。',
        points: [
          {
            title: '指标漂移',
            body: 'BI 中的收入与产品中的收入不一致，直接读取原始表的消费方还会引入第三套定义。',
          },
          {
            title: '逻辑锁定在单一 BI',
            body: '嵌入单一 BI 平台的语义模型，难以平滑迁移至 API、嵌入页或 MCP 工具。',
          },
          {
            title: '临时 SQL 成本',
            body: '缺少缓存与预聚合时，交互流量与追问查询对数仓形成持续压力。',
          },
        ],
      },
      cost: {
        title: '错误指标比时延更快摧毁信任',
        body: '团队争论哪张图具权威性，同时自动化放大错误 SQL。治理失效往往先于性能问题显现。',
      },
      capabilities: {
        title: '平台范围',
        items: [
          {
            title: '建模',
            body: '以代码定义指标、维度、关联、层级与时间粒度，并可在环境间迁移。',
          },
          {
            title: '访问控制',
            body: '将身份映射为行级与租户策略，并在数仓 SQL 执行前生效。',
          },
          {
            title: '数据源',
            body: '经统一 SQL 接入云数仓、查询引擎与应用数据库。',
          },
          {
            title: '内存缓存',
            body: '相同并发查询共享缓冲，降低交互负载下的源库冲击。',
          },
          {
            title: '预聚合',
            body: '声明后台刷新的 rollup；匹配查询路由至缓存层。',
          },
          {
            title: 'SQL API',
            body: '兼容 Postgres，并提供语义扩展，使 BI 与工具查询已定义指标而非底表。',
          },
          {
            title: 'REST 与 GraphQL',
            body: '面向应用与嵌入分析的 JSON / GraphQL 接口。',
          },
          {
            title: 'Meta API',
            body: '枚举可查询度量与维度，使客户端发现模型，而非推断 schema。',
          },
          {
            title: 'MCP',
            body: '经 MCP 向工具暴露同一套指标——选择已定义度量，而非对原始表生成 SQL。',
          },
          {
            title: '无头交付',
            body: '不强制 UI。可在共享指标基础上承载内部 BI、产品分析或自动化。',
          },
        ],
      },
      architecture: {
        title: '一次定义，缓存，多端服务',
        body: 'Kense Insight 负责指标定义与查询性能。Work 发起问题。当答案驱动行动时，OS 施加 Box / Sentry 控制。',
        points: [
          {
            title: '语义运行时',
            body: '对照模型校验、应用策略，再编译为源 SQL 或命中匹配的预聚合。',
          },
          {
            title: '一模型多 API',
            body: 'SQL、REST、GraphQL、Meta 与 MCP 共享同一套定义。',
          },
          {
            title: 'OS 协同',
            body: 'Work 与 OS Bot 从 Insight 获取数值。写回与外联仍须审批。',
          },
        ],
      },
      loop: {
        title: '从指标定义到一致消费',
        body: 'Insight 维护指标字典与缓存。Work 与 OS 决定后续行动。',
        steps: [
          {
            title: '建模',
            body: '编码度量、维度、关联与租户规则。',
          },
          {
            title: '缓存',
            body: '配置刷新键与预聚合，以获得可预期的交互性能。',
          },
          {
            title: '对外服务',
            body: 'BI、嵌入、REST/GraphQL 应用与 MCP 工具消费同一套定义。',
          },
          {
            title: '行动',
            body: '人员与 Bot 使用结果；Box 隔离重计算；Sentry 可阻断不安全发布路径。',
          },
        ],
      },
      cases: {
        title: '内部 BI 与产品嵌入',
        subtitle: '跨表面共享同一指标字典',
        items: [
          {
            kicker: 'BI 与产品',
            title: '使仪表盘与产品界面共享定义',
            points: [
              '分析师通过 SQL 探索',
              '产品经 REST / GraphQL 嵌入同一度量',
              '按租户与角色实施行级规则',
              '以预聚合稳定交互时延',
            ],
            accept: '验收标准：指标一致、策略覆盖、缓存命中率',
          },
          {
            kicker: '自动化',
            title: '工具查询已定义指标，而非原始表',
            points: [
              'Meta API 列出可用度量',
              'MCP 与语义 SQL 选择已定义指标',
              '数仓执行前应用 ACL',
              '追问流量由缓存与预聚合吸收',
            ],
            accept: '验收标准：工具无裸表 SQL、ACL 可审计、查询成本有界',
          },
        ],
      },
      trust: {
        title: '没有正确的定义，性能提升没有意义',
        items: [
          {
            title: '运行时策略',
            body: '访问规则在查询编译时生效。改写提示词无法绕过行过滤。',
          },
          {
            title: 'Kense Box / Sentry',
            body: '基于 Insight 结果的自动化，仍受隔离与内核否决约束。',
          },
          {
            title: '运维边界',
            body: '开发模式鉴权仅限本地。生产环境需要密钥、JWT 与最小权限数仓凭据。',
          },
        ],
      },
      path: {
        title: '从一个主题域、一个数仓与 SQL + REST 消费端起步',
        body: '验证指标一致与预聚合命中率。指标字典稳定后再引入 MCP 客户端。',
        riskTitle: '实施约束',
        riskBody:
          '指标模型即代码，须经评审。部分预聚合模式需要数仓写权限，遵循源端策略。开发模式实例不得暴露至公网。',
      },
      ctaTitle: '在分析与 API 间统一指标定义',
      ctaBody: '免费开始，或预约演示，完成首个主题域建模。',
    },
  },
  hero: {
    title: '在本地完成工作，在组织中沉淀能力',
    subtitle:
      'Kense Work 在本地组合模型、文件与工具；Kense OS 负责流程编排、组织记忆与权限治理。',
    ctaPrimary: '免费开始',
    ctaSecondary: '预约演示',
    discover: '了解产品',
    workPreview: {
      newTask: '新建任务',
      projects: '项目',
      projectsEmpty: '暂无项目',
      tasks: '任务',
      tasksEmpty: '暂无任务',
      more: '更多',
      user: 'roylin',
      greeting: '文档专家，我帮你',
      selectProject: '选择项目',
      placeholder: '今天想完成什么？ @ 文件，/ 技能，# 插件…',
      modelStatus: '未连接模型',
      executeAuto: '执行 自动',
      workspaceWritable: '工作区可写',
      docs: [
        { name: 'Word', kind: 'word' },
        { name: 'Excel', kind: 'excel' },
        { name: 'PPT', kind: 'ppt' },
        { name: 'PDF', kind: 'pdf' },
        { name: 'Markdown', kind: 'md' },
      ],
    },
    workContacts: {
      user: 'roylin',
      search: '搜索',
      plugins: '插件',
      chats: [
        {
          id: 'docs',
          name: '文档专家',
          preview: '周五全员会的稿，需要你点个头',
          time: '7:34',
          unread: true,
        },
        {
          id: 'code',
          name: '代码专家',
          preview: '结账崩溃已复现，说明写进工单了',
          time: '昨天',
        },
        {
          id: 'science',
          name: '科研专家',
          preview: '实验组数据对上了，3 个问题已关',
          time: '11:18',
        },
        {
          id: 'finance',
          name: '金融专家',
          preview: '14 张发票已入账，还差周二那笔',
          time: '9:04',
        },
      ],
    },
  },
  logos: {
    label: '已有团队选择 Kense',
    names: [
      'Northwind',
      'Lumen',
      'Orbit',
      'Cascade',
      'Vertex',
      'Harbor',
      'Pulse',
      'Alloy',
    ],
  },
  work: {
    brand: 'Kense Work',
    title: 'Kense Work',
    description:
      'Local-first 工作入口。按任务组合人员、模型、数据与工具，并在宿主策略与最小权限下执行。',
    items: [
      {
        title: '理解上下文',
        description: '从目标、约束与本地文件中识别真正要解决的问题。',
      },
      {
        title: '按需组合',
        description: '为当前任务选择模型、工具与数据，形成可追溯的工作会话。',
      },
      {
        title: '边界内验证',
        description: '在明确授权与隔离执行下完成试错，结果可回写评估。',
      },
    ],
    quote: {
      text: '真实数据与 Agent 可以在同一工作环境中协作，同时保持清晰边界。',
      author: '林澈',
      role: '产品负责人 · Cascade',
    },
    bot: {
      aria: '数字员工：文档、编码、科研、金融',
      eyebrow: '数字员工',
      title: '数字员工',
      caption: '面向不同工作场景的专家角色。',
      squad: [
        { id: 'docs', name: 'DOCS EXPERT', role: '撰写 · 排版 · 知识' },
        { id: 'code', name: 'CODE EXPERT', role: '应用 · 交付' },
        { id: 'science', name: 'SCIENCE EXPERT', role: '实验 · 分析' },
        { id: 'finance', name: 'FINANCE EXPERT', role: '风控 · 报告' },
      ],
    },
  },
  cloud: {
    title: 'Kense OS',
    description:
      '控制面编排意图与策略；Operations / Flow 耐久协调；Workload 经 Fleet、Runtime、Box 收敛到节点。',
    items: [
      {
        title: '统一 Gateway',
        description: 'Agent、Workflow、Function、Inference 共用一个受治理的公网入口。',
      },
      {
        title: 'Operations · Flow',
        description: '期望状态与日记账分离：中断后按序重放，已完成步骤不再执行。',
      },
      {
        title: 'Runtime · Box',
        description: '隔离执行与节点供给下沉；Power 以普通 Service 承接推理。',
      },
    ],
    quote: {
      text: '模型可以替换，团队沉淀的判断仍然可用。',
      author: '陈予安',
      role: '平台工程 · Orbit',
    },
  },
  integrations: {
    title: '稳定接入，可替换 Provider',
    description: '通过统一接口连接模型与工具；更换 Provider 无需重建整条链路。',
    apps: [
      'Slack',
      'Discord',
      'GitHub',
      'Notion',
      'Linear',
      'Figma',
      'Stripe',
      'Salesforce',
      'Zapier',
      'Email',
    ],
  },
  security: {
    title: '权限、隔离与审计',
    description: '每次操作具备边界、授权与记录。敏感数据可保留在本地。',
    items: [
      {
        title: '组织级策略',
        description: '模型、工具与数据的使用范围由组织统一配置。',
      },
      {
        title: '沙箱执行',
        description: '代码与网络访问在隔离环境中运行，降低生产风险。',
      },
      {
        title: '可审计证据',
        description: '运行、评估与异常均有记录；发布与回滚设有明确门槛。',
      },
    ],
    quote: {
      text: '边界、责任与日志足够清晰，才适合进入生产环境。',
      author: '周宁',
      role: '安全负责人 · Harbor',
    },
  },
  devices: {
    title: '从单机起步，按需扩展',
    description: '先在本地完成工作，再按需要接入记忆、流程与团队治理。',
    items: [
      {
        title: 'Local-first',
        description: '数据与权限默认留在本地边界，能力按需求逐步接入。',
      },
      {
        title: '可替换 Provider',
        description: '按成本、性能与合规要求选择模型及运行环境。',
      },
      {
        title: '端云一致契约',
        description: 'Work 与 OS 之间的会话与状态保持对齐。',
      },
    ],
    quote: {
      text: '从个人 CLI 起步，三周后同一套能力已在三个团队投入使用。',
      author: '赵晴',
      role: '工程经理 · Vertex',
    },
  },
  teams: {
    title: '个人贡献，团队复用',
    description: '经验连同上下文被记录，经评审后沉淀为技能、知识或流程。',
    items: [
      {
        title: '可交接的经验',
        description: '关键判断完整记录，便于后续承接、修订与复用。',
      },
      {
        title: '跨团队复用',
        description: '一次沉淀可供多个应用与 Agent 组合调用。',
      },
      {
        title: '可交接的运营',
        description: '队列、恢复与审计作为默认能力，减少人工值守。',
      },
    ],
    quote: {
      text: '我们需要的是可增长、可治理、可传承的团队能力资产。',
      author: '苏白',
      role: 'COO · Alloy',
    },
  },
  scale: {
    title: '面向生产规模设计',
    description: '从个人会话到组织控制面，运行、记忆、编排与治理遵循统一契约。',
    stats: [
      { value: '30m+', label: '已执行会话与工作流' },
      { value: '186+', label: '覆盖国家与地区' },
      { value: '1,500+', label: '使用中的团队' },
      { value: '>99.9%', label: '控制面可用性' },
    ],
  },
  compliance: {
    title: '合规能力内建',
    description: '策略、隔离与审计能力开箱可用。',
    cta: '联系销售',
    badges: ['GDPR', 'CCPA', 'SOC 2'],
  },
  cta: {
    title: '从一次实际工作开始',
    description: '可免费开通，也可预约产品演示。',
    primary: '免费开始',
    secondary: '预约演示',
  },
  footer: {
    product: '产品',
    company: '公司',
    resources: '资源',
    legal: '法律',
    tagline: '为Agent时代构建的AI Native操作系统',
    links: {
      work: 'Kense Work',
      cloud: 'Kense OS',
      pricing: '定价',
      blog: '博客',
      docs: '文档',
      about: '关于',
      careers: '招聘',
      privacy: '隐私',
      terms: '条款',
      openSource: '开源',
    },
    copyright: '© Kense Labs. All rights reserved.',
  },
  site: {
    tocLabel: '本页目录',
    about: {
      documentTitle: '关于 — Kense',
      kicker: '公司',
      title: '为 Agent 时代构建 AI Native 操作系统',
      lead:
        'Kense Labs 打造 Kense Work 与 Kense OS：让团队在本地完成工作，在组织中沉淀可复用的能力与治理。',
      missionTitle: '我们在做什么',
      missionBody:
        '智能体与工作流正在成为软件的新运行单元。Kense 提供 local-first 的工作入口，以及可恢复、可审计、可治理的系统侧编排与记忆能力，帮助组织把一次性会话沉淀成可运营的能力。',
      pillars: [
        {
          title: 'Local-first 工作',
          body: '模型、文件与工具先在本地组合，敏感上下文默认留在边界内。',
        },
        {
          title: '耐久编排',
          body: '流程可恢复、可重放，跨会话与跨角色保持一致状态。',
        },
        {
          title: '组织记忆与权限',
          body: '能力、策略与审计同层设计，便于在真实组织中落地。',
        },
      ],
      ctaTitle: '一起把工作做成系统',
      ctaBody: '免费试用，或预约演示了解适合你团队的落地路径。',
      ctaPrimary: '免费开始',
      ctaSecondary: '预约演示',
    },
    careers: {
      documentTitle: '招聘 — Kense',
      kicker: '招聘',
      title: '和我们一起做 AI Native 基础设施',
      lead:
        '我们需要关心产品细节、系统正确性与用户真实工作流的人。远程友好，默认异步协作。',
      culture: [
        {
          title: '写清楚再说',
          body: '设计文档、RFC 与可运行原型优先于冗长会议。',
        },
        {
          title: '以真实任务为证',
          body: '功能以能否完成一次完整工作来验收，而不是演示幻灯片。',
        },
        {
          title: '小团队、高杠杆',
          body: '每个人都能直接影响产品方向与工程质量。',
        },
      ],
      openingsTitle: '开放职位',
      openingsEmpty: '当前没有公开职位。欢迎把简历与你做过的相关项目发给我们。',
      openings: [
        {
          title: '全栈工程师',
          location: '远程 / 上海',
          type: '全职',
          summary: '负责 Work 与 OS 控制面的产品界面、API 与可靠性体验。',
        },
        {
          title: '分布式系统工程师',
          location: '远程 / 上海',
          type: '全职',
          summary: '设计耐久执行、状态一致性、可恢复工作流与可观测性。',
        },
      ],
      howTitle: '如何申请',
      howSteps: [
        '准备一份简短介绍：你做过什么、为什么对 Kense 感兴趣。',
        '附上简历或 GitHub / 作品链接。',
        '通过「预约演示」联系我们，主题请注明「招聘 + 职位」。',
      ],
      applyCta: '联系招聘',
    },
    privacy: {
      documentTitle: '隐私政策 — Kense',
      kicker: '法律',
      title: '隐私政策',
      updated: '最近更新：2026 年 9 月 16 日',
      lead:
        '本政策说明 Kense Labs（「我们」）如何收集、使用与保护你在使用 Kense 网站与产品时提供的信息。使用我们的服务即表示你理解本政策。',
      sections: [
        {
          id: 'who',
          title: '1. 我们是谁',
          paragraphs: [
            'Kense Labs 提供 Kense Work、Kense OS 及相关网站、文档与演示服务。如对本政策有疑问，请通过网站「预约演示」与我们联系，并注明「隐私咨询」。',
          ],
        },
        {
          id: 'collect',
          title: '2. 我们收集哪些信息',
          paragraphs: [
            '我们仅收集为提供与改进服务所必需的信息，可能包括：',
          ],
          bullets: [
            '账户信息：姓名、工作邮箱、组织名称等你主动提供的内容。',
            '使用信息：产品功能使用情况、设备与浏览器类型、大致地区、诊断日志。',
            '沟通信息：你在演示预约、支持请求或邮件中提供的内容。',
            'Cookie 与类似技术：用于登录态、偏好（如语言）与基础分析。',
          ],
        },
        {
          id: 'use',
          title: '3. 我们如何使用信息',
          paragraphs: ['我们使用上述信息用于：'],
          bullets: [
            '提供、维护与改进产品与网站。',
            '处理账户、安全认证与客户支持。',
            '发送与服务相关的通知（如安全或重大变更）；营销沟通仅在你同意或法律允许时进行。',
            '防止滥用、排查故障并满足合规义务。',
          ],
        },
        {
          id: 'share',
          title: '4. 我们如何共享信息',
          paragraphs: [
            '我们不会出售你的个人信息。仅在以下情形共享：',
          ],
          bullets: [
            '服务提供商：在合同约束下为我们提供托管、邮件、分析等必要处理。',
            '法律要求：在法律、监管或有效法律程序要求时。',
            '业务变更：合并、收购或资产转让时，按适用法律通知或征得同意。',
          ],
        },
        {
          id: 'retention',
          title: '5. 保存与安全',
          paragraphs: [
            '我们在实现本政策所述目的所需的期限内保留信息，并在之后删除或匿名化，除非法律要求更长保存期。',
            '我们采取合理的技术与组织措施保护数据，但任何互联网传输或存储都无法保证绝对安全。',
          ],
        },
        {
          id: 'rights',
          title: '6. 你的权利',
          paragraphs: [
            '视你所在地区适用法律，你可能有权访问、更正、删除、限制处理或导出你的个人信息，并有权撤回同意（不影响撤回前基于同意的处理）。',
            '如需行使上述权利，请通过「预约演示」联系我们并注明「隐私权利」。我们将在合理期限内回复。',
          ],
        },
        {
          id: 'cookies',
          title: '7. Cookie',
          paragraphs: [
            '我们使用必要 Cookie 以维持会话与语言偏好，并可能使用分析 Cookie 了解站点使用情况。你可在浏览器中管理 Cookie；禁用部分 Cookie 可能影响功能。',
          ],
        },
        {
          id: 'intl',
          title: '8. 国际传输',
          paragraphs: [
            '我们的基础设施与服务提供商可能位于你所在国家/地区之外。在发生跨境传输时，我们将采取适当保障措施以符合适用法律。',
          ],
        },
        {
          id: 'children',
          title: '9. 儿童',
          paragraphs: [
            '我们的服务面向组织与专业用户，不面向 16 岁以下儿童。若发现误收集儿童信息，我们将尽快删除。',
          ],
        },
        {
          id: 'changes',
          title: '10. 政策更新',
          paragraphs: [
            '我们可能不时更新本政策。重大变更将在本页更新「最近更新」日期，并在适当时通过产品或邮件提示。继续使用服务即表示接受更新后的政策。',
          ],
        },
      ],
    },
    terms: {
      documentTitle: '服务条款 — Kense',
      kicker: '法律',
      title: '服务条款',
      updated: '最近更新：2026 年 9 月 16 日',
      lead:
        '本条款约束你访问与使用 Kense Labs 网站、产品与相关服务（统称「服务」）。使用服务即表示你同意本条款。若不同意，请勿使用。',
      sections: [
        {
          id: 'accept',
          title: '1. 接受条款',
          paragraphs: [
            '你确认有权代表自己或你的组织接受本条款。若代表组织使用服务，则你声明有权使该组织受本条款约束。',
          ],
        },
        {
          id: 'account',
          title: '2. 账户与准入',
          paragraphs: [
            '你须提供准确信息并妥善保管凭据。你对账户下的活动负责。我们可在合理怀疑滥用、安全风险或违反本条款时暂停或终止访问。',
          ],
        },
        {
          id: 'license',
          title: '3. 许可与知识产权',
          paragraphs: [
            '在遵守本条款的前提下，我们授予你有限的、非独占、不可转让、可撤销的许可，以按文档使用服务。',
            '服务及相关软件、品牌、文档的知识产权归 Kense Labs 或其许可方所有。本条款不转让所有权。',
            '你保留你提交到服务中的内容的权利；你授予我们为提供服务所必需的处理许可。',
          ],
        },
        {
          id: 'acceptable',
          title: '4. 可接受使用',
          paragraphs: ['你不得：'],
          bullets: [
            '违反适用法律或侵犯他人权利。',
            '试图未经授权访问系统、数据或他人账户。',
            '干扰服务完整性、可用性或安全（包括滥用自动化或绕过限制）。',
            '上传恶意软件，或将服务用于诈骗、骚扰或明显有害用途。',
          ],
        },
        {
          id: 'beta',
          title: '5. 预览与变更',
          paragraphs: [
            '部分功能可能以预览、测试或免费额度提供，可能随时变更、限制或撤回。我们可能更新服务；若变更对你有重大不利影响，我们将在合理范围内提前告知。',
          ],
        },
        {
          id: 'fees',
          title: '6. 费用',
          paragraphs: [
            '付费方案的价格、计费周期与包含内容以订购时展示或订单约定为准。除非另有书面约定，已支付费用通常不可退还。拖欠款项可能导致服务中止。',
          ],
        },
        {
          id: 'disclaimer',
          title: '7. 免责声明',
          paragraphs: [
            '在法律允许的最大范围内，服务按「现状」和「可用」提供，不提供适销性、特定用途适用性或不侵权等明示或默示保证。我们不保证服务不中断、无错误或完全满足你的特定需求。',
          ],
        },
        {
          id: 'liability',
          title: '8. 责任限制',
          paragraphs: [
            '在法律允许的最大范围内，Kense Labs 及其关联方不对间接、附带、特殊、后果性或惩罚性损害承担责任，也不对利润、收入、数据或商誉损失承担责任。',
            '我们对与本条款或服务相关的累计责任，不超过你在索赔前十二个月内就相关服务向我们支付的金额；若为免费使用，则以适用法律允许的最低金额为限。',
          ],
        },
        {
          id: 'termination',
          title: '9. 终止',
          paragraphs: [
            '你可随时停止使用服务并关闭账户。我们可因违反本条款或服务下线等原因终止或暂停服务。终止后，本条款中依其性质应继续有效的条款仍然有效。',
          ],
        },
        {
          id: 'law',
          title: '10. 适用法律',
          paragraphs: [
            '在不与强制性消费者保护法冲突的前提下，本条款适用中华人民共和国法律（不含冲突法规则）。争议应首先友好协商；协商不成的，由 Kense Labs 所在地有管辖权的法院解决，法律另有强制规定的除外。',
          ],
        },
        {
          id: 'contact',
          title: '11. 联系我们',
          paragraphs: [
            '有关本条款的问题，请通过网站「预约演示」联系我们，并注明「服务条款」。',
          ],
        },
      ],
    },
  },
  pricing: {
    title: '随团队规模扩展的方案',
    description: '免费开始，无需信用卡。按席位扩展，无隐藏费用。',
    billingMonthly: '按月',
    billingAnnual: '按年',
    billedMonthly: '按月计费',
    billedAnnual: '按年计费',
    saveBadge: '省约 20%',
    includedLabel: '包含',
    plans: [
      {
        name: 'Free',
        priceMonthly: '¥0',
        priceAnnual: '¥0',
        period: '',
        audience: '适合个人试用',
        description: '在实际项目中完成首次本地工作会话。',
        features: [
          '1 个 Work 席位',
          '本地上下文与权限边界',
          '基础会话与任务',
          '社区支持',
        ],
        includes: ['Work 基础'],
        cta: '免费开始',
      },
      {
        name: 'Builder',
        priceMonthly: '¥249',
        priceAnnual: '¥199',
        period: '/席位/月',
        meter: 'OS 按用量计费',
        audience: '适合早期团队与独立开发者',
        description: '将高频工作沉淀为可复用能力，并接入 OS。',
        features: [
          '完整 Kense Work',
          '记忆写入与检索',
          '耐久工作流基础',
          'API / Webhooks',
          '邮件支持',
        ],
        includes: ['Work', 'OS 起步'],
        cta: '免费开始',
      },
      {
        name: 'Team',
        priceMonthly: '¥499',
        priceAnnual: '¥399',
        period: '/席位/月',
        meter: 'OS 按用量计费',
        audience: '适合多团队协作',
        description: '支持能力共享、策略发布与流程自动化。',
        features: [
          '团队共享与版本',
          '策略与发布治理',
          '工作流自动化',
          '优先支持',
          '20 个协作者席位',
        ],
        includes: ['Work', 'OS', '治理'],
        cta: '开始试用',
        highlighted: true,
      },
      {
        name: 'Enterprise',
        priceMonthly: '定制',
        priceAnnual: '定制',
        period: '',
        audience: '适合大型组织与受监管环境',
        description: '支持自托管控制面、身份集成与合规要求。',
        features: [
          '专属 / 自托管',
          'SSO / SCIM',
          '自定义管理员角色',
          'SLA 与专属支持',
          '50 个协作者席位',
        ],
        includes: ['控制面', '合规'],
        cta: '预约演示',
        custom: true,
      },
    ],
    program: {
      eyebrow: 'Startup Program',
      title: '早期团队优惠计划',
      description: '成立未满 2 年且少于 6 人的团队，可申请 Team 能力与额外 OS 额度。',
      bullets: [
        '成立未满 2 年',
        '团队少于 6 人',
        '解锁 Team 核心能力',
      ],
      cta: '申请加入',
      secondary: '了解详情',
    },
    compare: {
      title: '功能与方案对比',
      description: 'Work 与 OS 在同一订阅中按阶段扩展。',
      categories: [
        {
          name: 'Work',
          rows: [
            {
              feature: '席位',
              values: ['1', '按需', '按需', '按需'],
            },
            {
              feature: '本地会话',
              values: ['✓', '✓', '✓', '✓'],
            },
            {
              feature: '权限与沙箱',
              values: ['基础', '✓', '✓', '高级'],
            },
            {
              feature: '工具组合',
              values: ['基础', '✓', '✓', '✓'],
            },
          ],
        },
        {
          name: 'OS',
          rows: [
            {
              feature: '记忆与检索',
              values: ['—', '✓', '✓', '✓'],
            },
            {
              feature: '耐久工作流',
              values: ['—', '基础', '✓', '✓'],
            },
            {
              feature: '版本与复用',
              values: ['—', '个人', '团队', '组织'],
            },
            {
              feature: '发布与治理',
              values: ['—', '—', '✓', '✓'],
            },
          ],
        },
        {
          name: '安全与支持',
          rows: [
            {
              feature: 'SSO / SCIM',
              values: ['—', '—', '—', '✓'],
            },
            {
              feature: '自托管 / 专属部署',
              values: ['—', '—', '—', '✓'],
            },
            {
              feature: 'SLA',
              values: ['—', '—', '优先', '定制'],
            },
            {
              feature: '支持',
              values: ['社区', '邮件', '优先', '专属'],
            },
          ],
        },
      ],
    },
    faq: {
      title: '常见问题',
      subtitle: '如需进一步沟通，欢迎预约演示。',
      items: [
        {
          q: 'Work 与 OS 是否需要分别购买？',
          a: '不需要。同一订阅按阶段解锁：Free 从 Work 起步，Builder 起接入 OS，Team / Enterprise 覆盖治理与控制面。',
        },
        {
          q: '什么算付费席位？',
          a: '需要使用 Work，或管理 OS 流程与策略的成员。只读协作者使用方案内含席位。',
        },
        {
          q: 'OS 用量如何计费？',
          a: 'Builder / Team 对耐久编排按用量计费，可在控制台查看明细。Enterprise 可协商打包额度或自托管。',
        },
        {
          q: '是否提供试用？',
          a: '提供。免费开始无需信用卡；付费方案含试用期。',
        },
        {
          q: '是否支持自托管？',
          a: 'Enterprise 支持专属或自托管控制面，以及 SSO / SCIM、审计与定制 SLA。',
        },
        {
          q: '早期团队是否有折扣？',
          a: '有。符合条件的团队可申请 Startup Program。',
        },
      ],
    },
    bottomCta: {
      title: '从一次完整任务开始',
      description: '先在本地完成，需要时再接入 OS。',
      primary: '免费开始',
      secondary: '预约演示',
    },
  },
  blog: {
    title: '博客',
    description: '产品与工程实践：运行时、工作方式，以及如何把个人会话变成组织能力。',
    minuteRead: '分钟阅读',
    readArticle: '阅读全文',
    related: '相关文章',
    notFound: {
      title: '未找到文章',
      description: '链接可能已变更。请从博客列表继续。',
      back: '返回博客',
    },
  },
  docs: {
    title: '文档',
    description: '从心智模型到第一次任务：Work 负责本地完成工作，OS 负责编排、记忆与治理。',
    startCta: '从简介开始',
    contents: '目录',
    onThisPage: '本页目录',
    updated: '更新于',
    prev: '上一篇',
    next: '下一篇',
    productSwitch: {
      label: '产品文档',
    },
    products: {
      overview: { name: '概览', blurb: '心智模型与快速开始' },
      work: { name: 'Kense Work', blurb: '本地优先工作站' },
      os: { name: 'Kense OS', blurb: '控制面与耐久运行时' },
      platform: { name: '平台', blurb: '安全、部署与方案' },
    },
    sections: {
      start: '开始使用',
      work: 'Kense Work',
      os: 'Kense OS',
      platform: '平台',
    },
    notFound: {
      title: '未找到文档',
      description: '该页不存在或已移动。请从文档首页进入。',
      back: '返回文档',
    },
  },
  auth: {
    backHome: '返回首页',
    eyebrow: '账户',
    oauthGroup: '第三方登录',
    orEmail: '或使用邮箱',
    orSocial: '或使用以下方式继续',
    connecting: '连接中…',
    oauthSoon: '第三方授权即将接入。当前为界面预览。',
    emailSoon: '邮箱登录即将接入。当前为界面预览。',
    forgot: '忘记密码？',
    showPassword: '显示',
    hidePassword: '隐藏',
    agreePrefix: '我已阅读并同意',
    agreeAnd: '与',
    providers: {
      github: '使用 GitHub 继续',
      wechat: '使用微信继续',
    },
    fields: {
      name: '姓名',
      namePlaceholder: '你的名字',
      email: '工作邮箱',
      emailPlaceholder: 'you@company.com',
      password: '密码',
      passwordPlaceholder: '至少 8 位',
    },
    aside: {
      title: '使用 Kense 组建你的AI Native 团队',
    },
    login: {
      documentTitle: '登录 — Kense',
      title: '登录 Kense',
      subtitle: '使用你已有的开发者身份，或工作邮箱继续。',
      submit: '登录',
      switchPrompt: '还没有账户？',
      switchAction: '免费注册',
    },
    signup: {
      documentTitle: '注册 — Kense',
      title: '创建 Kense 账户',
      subtitle: '几分钟开通，从一次真实任务开始。',
      submit: '创建账户',
      switchPrompt: '已有账户？',
      switchAction: '直接登录',
    },
  },
  demoModal: {
    title: '预约产品演示',
    subtitle: '留下称呼与邮箱，我们会尽快与你联系。',
    name: '称呼',
    namePlaceholder: '怎么称呼你',
    email: '邮箱',
    emailPlaceholder: 'you@company.com',
    submit: '提交预约',
    submitting: '提交中…',
    close: '关闭',
    successTitle: '已收到你的预约',
    successBody: '感谢关注 Kense。平台团队将尽快联系你，请留意邮箱。',
    successDone: '好的',
  },
  cloudPage: {
    brand: 'Kense OS',
    title: '控制面编排，节点执行',
    subtitle:
      'AaaS / WaaS / FaaS / Durable Cell 共用一套控制面；Gateway 是唯一公网入口。',
    ctaPrimary: '免费开始',
    ctaSecondary: '查看架构',
    marquee: [
      'Unified Gateway',
      'Operations · Flow',
      'Workloads · Fleet',
      'Runtime · Box',
      'Inference · Power',
      'AaaS',
      'WaaS',
      'FaaS',
      'Durable Cell',
      'Identity · Grants',
    ],
    console: {
      search: '搜索 Run、Claim、Route、Unit…',
      navLabel: '控制面',
      nav: ['Gateway', 'Operations', 'Workloads', 'Fleet', 'Inference'],
      status: 'edge snapshot · complete',
      title: 'agent-onboard · wr_7c21',
      meta: 'WaaS · recovering · Flow seq 14',
      path: ['Gateway', 'Identity', 'Operations · Flow', 'Workloads', 'Box'],
      stages: [
        { id: 'ht_04', name: 'HumanTask · approve', state: 'completed' },
        { id: 'svc_12', name: 'Agent Service · warm', state: 'running' },
        { id: 'inf_03', name: 'Inference route', state: 'pending' },
      ],
      journalLabel: 'Operations · Flow journal',
      journal: [
        { step: 'desired state applied', detail: 'revision pin · digest ok' },
        { step: 'outbox → Flow append', detail: 'expected-seq 14 · receipt' },
        { step: 'HumanTask claimed', detail: 'FormReleaseRef · granted' },
        { step: 'Workload claim fenced', detail: 'Fleet · node-a3 · Box' },
      ],
      asideTitle: '栈健康',
      plane: [
        { label: 'Gateway routes', value: '4 applied' },
        { label: 'Fleet claims', value: '3 / 3 fenced' },
        { label: 'Box isolation', value: 'MicroVM' },
        { label: 'Inference', value: '2 healthy' },
      ],
    },
    durable: {
      eyebrow: 'Durable Execution',
      title: '每一步入账，崩溃从断点继续',
      description:
        '调用、副作用、定时器与结果写入 journal。发生中断后执行重放：已完成步骤跳过，未完成步骤继续。',
      steps: [
        {
          title: '调用进入',
          description: '一次 invocation 跟踪到完成，exactly-once。',
        },
        {
          title: '步骤入账',
          description: 'side-effect、RPC、sleep、状态写入都记下来。',
        },
        {
          title: '失败恢复',
          description: '重试跳过已完成步骤，避免重复副作用。',
        },
        {
          title: '可回放',
          description: '执行轨迹可查，方便排障。',
        },
      ],
      covers: [
        {
          title: '基础设施故障',
          description: '节点重启后，进行中的执行在新实例续跑。',
        },
        {
          title: 'API 超时',
          description: '指数退避重试，策略可按服务调。',
        },
        {
          title: '重复请求',
          description: '幂等键去重，重复请求返回同一结果。',
        },
        {
          title: '网络分区',
          description: '无法写回 journal 时停止执行，由控制面在其他实例重试。',
        },
      ],
      flow: {
        label: 'Durable path',
        stages: [
          { title: 'Invoke', detail: '请求进入' },
          { title: 'Journal', detail: '步骤入账' },
          { title: 'Recover', detail: '断点续跑' },
          { title: 'Complete', detail: 'exactly-once' },
        ],
      },
    },
    services: {
      eyebrow: 'Service Types',
      title: '三种形态',
      description: '像写普通函数一样写 handler，按一致性需求选型。',
      items: [
        {
          name: 'Service',
          tagline: '无状态耐久 handler',
          bestFor: 'ETL、saga、并行任务、后台作业',
          bullets: [
            '无限并行',
            '耐久执行与可靠调用',
            '请求间无共享状态',
            '适合水平扩展',
          ],
        },
        {
          name: 'Virtual Object',
          tagline: '按 key 的有状态实体',
          bestFor: '账户、购物车、会话、状态机',
          bullets: [
            '内置 K/V，按对象隔离',
            '每 key 至多一个写者',
            '共享 handler 可并发只读',
            '跨 key 水平扩展',
          ],
        },
        {
          name: 'Workflow',
          tagline: '多步骤，按 ID 执行一次',
          bestFor: '审批、入职、长流程',
          bullets: [
            'run 按 workflow ID 恰好一次',
            '可等事件、人工信号与 promise',
            '共享 handler 可查询或推进',
            '内置生命周期 API',
          ],
        },
      ],
    },
    state: {
      eyebrow: 'Consistent State',
      title: '状态与执行同账',
      description: '内嵌键值存储。状态更新和执行步骤一起入账，不会漂移。',
      items: [
        {
          title: '按实体隔离',
          description: '每个对象 / 工作流实例状态独立。',
        },
        {
          title: '单写者',
          description: '同时只有一个 handler 可写，无竞态。',
        },
        {
          title: '服务可无状态部署',
          description: '状态在控制面；业务服务可水平扩展，也可跑 Serverless。',
        },
        {
          title: '会话落点',
          description: '上下文、工具结果与版本可作为实体状态保存。',
        },
      ],
    },
    communication: {
      eyebrow: 'Reliable Communication',
      title: '调用有保证',
      description: '服务间通信由 OS 代理：自动重试、不重复执行、链路可查。',
      items: [
        {
          title: '自动重试',
          description: '失败调用持续重试直至成功，无需自建队列。',
        },
        {
          title: 'Exactly-once',
          description: '同一调用不执行两次。',
        },
        {
          title: '调用链可见',
          description: '依赖链在控制面可查。',
        },
        {
          title: '多入口',
          description: 'HTTP、事件与程序调用同一套语义。',
        },
      ],
    },
    time: {
      eyebrow: 'Time & Signals',
      title: '等待也耐久',
      description: 'durable sleep、定时唤醒，以及 webhook、审批等信号。',
      items: [
        {
          title: '耐久定时器',
          description: 'sleep / schedule 入账，重启不丢时间线。',
        },
        {
          title: '人工与 webhook',
          description: '挂起等待回调，再从断点继续。',
        },
        {
          title: 'FaaS 友好',
          description: '等待可不占执行时间。',
        },
        {
          title: '长会话',
          description: '多轮工具调用与跨天流程用同一时间模型。',
        },
      ],
    },
    flow: {
      eyebrow: 'Flow Control',
      title: '按范围限并发',
      description: '控成本、护下游、调度更公平。',
      items: [
        {
          title: '成本上限',
          description: '限制昂贵调用的并发。',
        },
        {
          title: '下游保护',
          description: '突发流量冲不垮数据库或第三方 API。',
        },
        {
          title: '公平调度',
          description: '同分区任务更均匀占容量。',
        },
        {
          title: '按需开启',
          description: '可选能力，按服务配置。',
        },
      ],
    },
    agents: {
      eyebrow: 'AI Agents',
      title: '有状态 Agent',
      description: '做成 Virtual Object 或 Workflow：工具调用可续跑，记忆一致。',
      items: [
        {
          title: '工具调用入账',
          description: '结果进 journal，重试不重复副作用。',
        },
        {
          title: '会话即实体',
          description: '按用户 / 线程 key 保持上下文。',
        },
        {
          title: '多 Agent 编排',
          description: '可靠 RPC 串联，调用链可追踪。',
        },
        {
          title: '可发布复用',
          description: '跑通的策略与流程可版本化给团队用。',
        },
      ],
    },
    architecture: {
      eyebrow: 'Architecture',
      title: '控制面编排，执行下沉到节点',
      description:
        '意图与策略在 OS；耐久协调走 Operations / Flow；Workload 经 Fleet、Runtime、Box 收敛。Gateway 是唯一公网入口。',
      parts: [
        {
          title: '四类一等服务',
          description: 'AaaS、WaaS、FaaS 与 Durable Cell 共用同一套控制面与执行栈。',
        },
        {
          title: 'Kense OS 控制面',
          description: '租户意图、授权、期望状态、Operations / Flow，以及 Edge 完整快照。',
        },
        {
          title: 'Runtime · Box · Inference',
          description: '节点侧执行与隔离；Power 以普通 Runtime Service 承接推理。',
        },
      ],
      diagram: {
        sourcesLabel: '产品意图',
        planeLabel: 'Control Plane',
        planeBrand: 'Kense OS',
        outputsLabel: '执行与供给',
        toolsLabel: '管理面',
        observeLabel: '证据与观测',
        core: 'Operations · Flow',
        sources: [
          { title: 'AaaS · Agents', tags: ['会话', '审批', 'Checkpoint'] },
          { title: 'WaaS · Workflow', tags: ['Plan', 'HumanTask', 'Replay'] },
          { title: 'FaaS · Functions', tags: ['Task', 'Service', 'MCP'] },
          { title: 'Durable Cell', tags: ['共享状态', '告警', '围栏'] },
        ],
        ingress: ['Unified Gateway', 'Identity · Grants'],
        egress: ['Workloads', 'Fleet · Claims', 'Runtime · Box', 'Inference'],
        outputs: [
          { title: '隔离负载', tags: ['Box', 'OCI', 'Sandbox'] },
          { title: 'Power 推理', tags: ['GPU', 'Health', 'Route'] },
          { title: '你的 Handlers', tags: ['SDK', 'Service', 'Connector'] },
          { title: '制品与供给', tags: ['OCI', 'Use', 'Weights'] },
        ],
        tools: ['ACL', 'CLI', 'SDK', 'MCP'],
        observe: ['Audit', 'Traces', 'Replay', 'Metrics'],
      },
    },
    deploy: {
      eyebrow: 'Deploy',
      title: '托管、BYOC 或自托管',
      description: '落地方式可选，语义不变。',
      options: [
        {
          name: 'Managed OS',
          description: 'Kense 托管控制面。',
          points: ['分钟级开通', '托管升级与观测', '适合快速上线'],
        },
        {
          name: 'BYOC',
          description: '控制面跑在你的云账号与 VPC。',
          points: ['数据本地化', '运维更少', '贴合企业网络策略'],
        },
        {
          name: 'Self-hosted',
          description: '部署、安全与升级全自管。',
          points: ['私有化', '自定义合规', '对接现有平台工程'],
        },
      ],
    },
    bottomCta: {
      title: '从一条耐久流程开始',
      description: '先完成一次工作流或会话，再按需扩展治理与复用。',
      primary: '免费开始',
      secondary: '预约演示',
    },
  },
};
