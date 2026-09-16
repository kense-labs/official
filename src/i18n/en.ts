import type { Messages } from './types';

export const en: Messages = {
  meta: {
    homeTitle: 'Kense — Work & OS',
    pricingTitle: 'Pricing — Kense',
    blogTitle: 'Blog — Kense',
    docsTitle: 'Docs — Kense',
    cloudTitle: 'Kense OS — Durable execution & control plane',
    loginTitle: 'Log in — Kense',
    signupTitle: 'Sign up — Kense',
    description:
      'Kense Work provides a local-first workspace; Kense OS provides orchestration, memory, and governance.',
    cloudDescription:
      'Kense OS delivers durable execution, consistent state, reliable calls, and controlled publishing.',
  },
  nav: {
    home: 'Home',
    features: 'Features',
    work: 'Work',
    cloud: 'OS',
    pricing: 'Pricing',
    customers: 'Customers',
    docs: 'Docs',
    blog: 'Blog',
    solutions: 'Solutions',
    login: 'Log in',
    demo: 'Book a demo',
    start: 'Start for free',
  },
  lang: {
    zh: '中文',
    en: 'EN',
    switchTo: 'Switch language',
  },
  a11y: {
    backToTop: 'Back to top',
  },
  solutions: {
    panelAria: 'Solutions menu',
    listLabel: 'Solutions',
    learnMore: 'Learn more',
    items: [
      {
        id: 'monitor',
        name: 'Kense Monitor',
        tagline: 'External situational awareness for operational and trading decisions',
        description:
          'Ingest conflict, sanctions, shipping, and macro signals — query, subscribe, and integrate them into systems that set plans and risk.',
        cover: '/site/monitor-illust-cover.png',
        to: '/solutions/monitor',
      },
      {
        id: 'finance',
        name: 'Kense Finance',
        tagline: 'Unified market data for research and trading',
        description:
          'Connect equity, macro, derivatives, and news once. Deliver the same normalized feeds through Python, research workspaces, MCP, and REST.',
        cover: '/site/finance-hero.svg',
        to: '/solutions/finance',
      },
      {
        id: 'science',
        name: 'Kense Science',
        tagline: 'Local research workbench with reproducible outputs',
        description:
          'Literature, notebooks, scientific connectors, and assistants in one workspace — with versioned artifacts and execution trails you can replay.',
        cover: '/site/science-hero.svg',
        to: '/solutions/science',
      },
      {
        id: 'insight',
        name: 'Kense Insight',
        tagline: 'Semantic metrics layer for BI, products, and automation',
        description:
          'Define metrics, joins, and access policy in code. Serve them via SQL, REST, GraphQL, and MCP with caching and pre-aggregations.',
        cover: '/site/insight-hero.svg',
        to: '/solutions/insight',
      },
    ],
    monitor: {
      documentTitle: 'Kense Monitor — Kense',
      stake: 'When external conditions change faster than internal systems update, plans and risk limits become unreliable.',
      lead: 'Consolidate conflict, sanctions, shipping, and macro signals into a shared situational layer that teams can query, subscribe to, and connect to existing tools.',
      problem: {
        title: 'Operational systems capture internal state, not external conditions',
        body: 'ERP, trading, and scheduling platforms track inventory, orders, and positions. Material external events that reset lead times and risk still arrive through news feeds, chat, and informal briefings.',
        points: [
          {
            title: 'Delayed awareness',
            body: 'Port closures, sanctions, and similar events appear in public sources first. Once they are entered into operational systems, the decision window is often closed.',
          },
          {
            title: 'Inconsistent interpretation',
            body: 'Research, risk, and operations describe the same event differently. There is no shared, citable situational record.',
          },
          {
            title: 'Limited auditability',
            body: 'Decision rationale remains in email and chat. Failures are difficult to attribute; successful responses are difficult to reuse.',
          },
        ],
      },
      cost: {
        title: 'Situational lag becomes P&L, exposure, and governance risk',
        body: 'When external facts have changed and systems continue on prior assumptions, losses appear in performance, risk exposure, and organizational confidence in the plan.',
      },
      capabilities: {
        title: 'Query · Subscribe · Integrate',
        items: [
          {
            title: 'Query',
            body: 'Retrieve current situational context in natural language and map impact to relevant assets, sites, or objects.',
          },
          {
            title: 'Subscribe',
            body: 'Scheduled digests, alerts on material events, and an event stream that downstream systems can consume.',
          },
          {
            title: 'Integrate',
            body: 'Expose situation through widgets, MCP, and APIs so existing workbenches can treat it as structured input.',
          },
        ],
      },
      architecture: {
        title: 'Read-only evidence, task entry in Work, controlled write-back via OS',
        body: 'Kense Monitor provides situational evidence. Teams initiate work in Kense Work. Kense OS coordinates bots, policy checks, and publish. Monitor does not write to business systems directly.',
        points: [
          {
            title: 'Unified intake',
            body: 'Markets and macro, conflict and sanctions, maritime and aviation, fire detection, central-bank and trade signals — ingested as read-only inputs.',
          },
          {
            title: 'Usage policy',
            body: 'Confirm availability before use. Missing values are not treated as zero risk. Permission denials do not retry silently. Access remains read-only.',
          },
          {
            title: 'Write boundary',
            body: 'Any write-back uses a controlled publish path with ACL and approval. Bots do not issue commands directly to production systems.',
          },
        ],
      },
      loop: {
        title: 'From external signal to an accountable change',
        body: 'Monitor supplies evidence. Assessment and publish execute under Box and Sentry controls on the OS layer.',
        steps: [
          {
            title: 'Signal intake',
            body: 'Events arrive with freshness metadata and links to source evidence.',
          },
          {
            title: 'Task initiation',
            body: 'Operators define objectives in Work, with models, files, and skills available in one workspace.',
          },
          {
            title: 'Domain assessment',
            body: 'Subscriptions activate logistics, compliance, or cost bots; findings are retained in organizational memory.',
          },
          {
            title: 'Approval and publish',
            body: 'Sentry blocks high-risk actions; compute-intensive solves run in Box; write-back requires approval.',
          },
        ],
      },
      cases: {
        title: 'Trading research and production planning',
        subtitle: 'One situational feed supporting two operating models',
        items: [
          {
            kicker: 'Trading research',
            title: 'Convert global events into research hypotheses',
            points: [
              'Material shocks surface on the research desk with source attribution',
              'Digests and alerts inform open and close decisions',
              'Historical responses remain available for comparison',
              'Strategy parameters retain links to supporting evidence',
            ],
            accept: 'Acceptance criteria: research workflow completeness, signal freshness, explainability of decisions',
          },
          {
            kicker: 'Production planning',
            title: 'Incorporate situational risk into lead times and buffers',
            points: [
              'Shipping, sanctions, and feedstock concentration feed APS inputs',
              'Events activate logistics, compliance, and cost bots',
              'Solves execute in Box; Sentry can veto unsafe actions',
              'Reconciliation precedes publish; write-back requires approval',
            ],
            accept: 'Acceptance criteria: OTD, recovery rate, complete change provenance',
          },
        ],
      },
      trust: {
        title: 'Isolated execution for untrusted compute; kernel-level controls for dangerous writes',
        items: [
          {
            title: 'Kense Box',
            body: 'Hardware-isolated MicroVM supporting OCI images, with cold start around 200ms. Boundaries are explicit; execution does not silently fall back to the host.',
          },
          {
            title: 'Kense Sentry',
            body: 'Rule evaluation, model-assisted judgment, and escalation for investigation. Observes without modifying agent code; enforces in-kernel with auditable risk classification.',
          },
          {
            title: 'Publish path',
            body: 'Write-back is limited to the publish channel, with ACL, dual approval where required, centralized secrets, and evidence attached to each release.',
          },
        ],
      },
      path: {
        title: 'Establish one mapped scope, validate, then expand',
        body: 'Begin with object mapping and read-only intake. Confirm freshness, decision traceability, and write boundaries before scaling subscriptions.',
        riskTitle: 'Implementation constraints',
        riskBody:
          'Do not introduce external shocks before objects are mapped. Apply dual thresholds for noisy signals. Peak wake-ups remain within subscription and quota limits; change diffs must identify primary drivers.',
      },
      ctaTitle: 'Align operational plans with live external conditions',
      ctaBody: 'Start free, or book a demo to walk through one end-to-end decision workflow.',
    },
    finance: {
      documentTitle: 'Kense Finance — Kense',
      stake: 'Eliminate duplicate market-data pipelines across research and trading desks.',
      lead: 'Normalize public, licensed, and proprietary sources once. Analysts, quants, and automated consumers read from the same contracts.',
      problem: {
        title: 'Each team maintains a fragmented data stack',
        body: 'Research relies on one terminal, quant teams scrape alternative feeds, and automation connects to a third API. Schemas diverge, history is incomplete, and access control remains inconsistent.',
        points: [
          {
            title: 'Data silos',
            body: 'Equity, macro, options, and news remain separated unless joined manually.',
          },
          {
            title: 'Inconsistent interfaces',
            body: 'Python, Excel, dashboards, and tooling each use different schemas and permission models.',
          },
          {
            title: 'Insufficient evidence',
            body: 'Generated commentary still requires prices, filings, and source attribution that can be verified later.',
          },
        ],
      },
      cost: {
        title: 'Infrastructure toil displaces research capacity',
        body: 'Senior staff spend time on vendor operations, field cleaning, and corporate-action handling while research delivery waits on data readiness.',
      },
      capabilities: {
        title: 'Asset coverage',
        items: [
          {
            title: 'Equity',
            body: 'Prices, fundamentals, valuations, ownership, short interest, and company profiles for research and backtesting.',
          },
          {
            title: 'ETF / Index',
            body: 'Holdings, constituents, and performance for benchmarks and factor analysis.',
          },
          {
            title: 'Crypto / FX',
            body: 'Spot rates, crosses, and liquidity snapshots through a consistent query interface.',
          },
          {
            title: 'Derivatives',
            body: 'Options chains, futures, and Greeks for volatility analysis and hedging.',
          },
          {
            title: 'Macro',
            body: 'GDP, CPI, rates, central-bank series, and economic calendars aligned with asset prices.',
          },
          {
            title: 'Fixed income',
            body: 'Sovereign and credit yields, spreads, and curves.',
          },
          {
            title: 'Commodities',
            body: 'Spot and futures prices for macro-to-industry impact analysis.',
          },
          {
            title: 'News & filings',
            body: 'Market news and regulatory filings with timestamps and source links.',
          },
          {
            title: 'Provider extensibility',
            body: 'Public, licensed, and internal sources can be plugged in, normalized once, and reused across consumers.',
          },
        ],
      },
      architecture: {
        title: 'Connect once, consume across clients',
        body: 'Kense Finance normalizes and caches market data. Python/SDK, research workspaces, MCP, and REST share the same contracts.',
        points: [
          {
            title: 'Data plane',
            body: 'Organize by asset domain; normalize, cache, and annotate each packet with source provenance.',
          },
          {
            title: 'Shared contracts',
            body: 'Quants use the SDK, analysts use the workspace, tools use MCP, applications use REST.',
          },
          {
            title: 'Coordination with Work and OS',
            body: 'Initiate research tasks in Work; OS bots may subscribe to Finance evidence. Write operations still require approval.',
          },
        ],
      },
      loop: {
        title: 'From source connection to verifiable outputs',
        body: 'Finance manages data quality and access. Work is the task surface. OS governs what may be published downstream.',
        steps: [
          {
            title: 'Connect sources',
            body: 'Map public, licensed, and internal providers to equity, macro, news, and related domains.',
          },
          {
            title: 'Normalize',
            body: 'Unify schema, timezone handling, corporate actions, and ACL into consistent packets.',
          },
          {
            title: 'Consume',
            body: 'Query beside workspace widgets, or retrieve the same fields through MCP and REST.',
          },
          {
            title: 'Governed action',
            body: 'Bot findings enter organizational memory; backtests run in Box; Sentry can block unsafe actions.',
          },
        ],
      },
      cases: {
        title: 'Research and quantitative workflows',
        subtitle: 'Shared feeds, distinct operating rhythms',
        items: [
          {
            kicker: 'Research',
            title: 'Combine equity, news, and filings in one workspace',
            points: [
              'Review price action and filings side by side',
              'Use macro calendars to drive thematic research',
              'Export without losing source attribution',
              'Pair with Monitor when the driver is external to markets',
            ],
            accept: 'Acceptance criteria: cross-domain latency, field completeness, source-link integrity',
          },
          {
            kicker: 'Quant & automation',
            title: 'SDK and MCP under one contract',
            points: [
              'Load history and fundamentals in Python for backtests',
              'Retrieve options chains and news digests over MCP',
              'Apply tenant-level quotas and ACL',
              'Keep order and egress paths behind Sentry',
            ],
            accept: 'Acceptance criteria: reproducible backtests, evidence on automated calls, no privilege escalation',
          },
        ],
      },
      trust: {
        title: 'Market data requires provenance and access control',
        items: [
          {
            title: 'Provenance',
            body: 'Each series retains provider, fetch time, and transformation history so conclusions can be replayed.',
          },
          {
            title: 'Kense Box / Sentry',
            body: 'Backtests and custom scripts run in MicroVMs; sensitive reads and egress follow in-kernel policy.',
          },
          {
            title: 'ACL & publish',
            body: 'Queries are read-only by default. Trading or master-data writes require controlled publish and approval.',
          },
        ],
      },
      path: {
        title: 'Establish equity and news first',
        body: 'Start with one licensed provider and verify SDK, workspace, and MCP parity on the same fields. Expand to derivatives and macro after that baseline is stable.',
        riskTitle: 'Commercial and operational constraints',
        riskBody:
          'Licenses and marks follow contract terms. Data accuracy does not constitute investment advice. Peak load is managed with quotas and cache; sensitive fields are masked by default.',
      },
      ctaTitle: 'Standardize market data across research and trading',
      ctaBody: 'Start free, or book a demo to connect your first equity and news sources.',
    },
    science: {
      documentTitle: 'Kense Science — Kense',
      stake: 'Research outputs without executable context cannot be reviewed or reused reliably.',
      lead: 'Bring literature, Python/R notebooks, scientific connectors, and assistants into one local workspace — with versioned artifacts and execution trails that can be replayed.',
      problem: {
        title: 'Research workflows remain fragmented across tools',
        body: 'Literature, notebooks, assistant chats, and figures live in separate environments. Reviewers cannot reconstruct how a result was produced.',
        points: [
          {
            title: 'Tool fragmentation',
            body: 'Chats, scripts, PDFs, and databases do not share a common project context or approval boundary.',
          },
          {
            title: 'Opaque execution',
            body: 'Assistants can draft analysis, but tool calls, kernel activity, and connector parameters are difficult to audit afterward.',
          },
          {
            title: 'Detached artifacts',
            body: 'Reports and figures separate from the code, inputs, environment, and conversation that produced them.',
          },
        ],
      },
      cost: {
        title: 'Irreproducibility creates rework and review risk',
        body: 'Teams spend capacity reconstructing prior work. Compliance reviews stall. Automated assistance remains difficult to trust on controlled studies.',
      },
      capabilities: {
        title: 'Workbench scope',
        items: [
          {
            title: 'Projects & sessions',
            body: 'Pinned sessions, message branches, side conversations, and portable packages carrying files, notebooks, and verification records.',
          },
          {
            title: 'Assisted workflow',
            body: 'Define research objectives; stream tool activity; approve, stop, search, and recover after interruption.',
          },
          {
            title: 'Models & runtimes',
            body: 'Connect preferred providers and gateways. Select runtime and reasoning profile per session.',
          },
          {
            title: 'Specialists',
            body: 'Capability-scoped assistants, package import/export, and context-preserving handoff from the primary session.',
          },
          {
            title: 'Python / R / HPC',
            body: 'Persistent kernels, managed or self-hosted interpreters, SSH hosts, Slurm jobs, and background runs that retain execution trails.',
          },
          {
            title: 'Literature',
            body: 'Import by DOI, PMID, or arXiv; search open full text; extract figures and tables from PDFs; format citations.',
          },
          {
            title: 'Files & preview',
            body: 'Large uploads, `@` path references, and inline preview for PDFs, Office files, images, molecules, and notebook history.',
          },
          {
            title: 'Versions & trails',
            body: 'Checksummed versions with producer code, run history, inputs, environment inventory, and reviewer notes.',
          },
          {
            title: 'Skills & connectors',
            body: 'Built-in research skills and connectors, plus custom MCP servers under permission controls.',
          },
          {
            title: 'Privacy & verification',
            body: 'Local-first storage by default; approval profiles; credential vaulting; optional reviewer loops; replayable verification.',
          },
        ],
      },
      architecture: {
        title: 'Local workspace, inspectable execution, OS controls on egress',
        body: 'Kense Science keeps research activity on the local machine. Work is the entry point. When outputs leave the workspace, OS applies Box and Sentry controls.',
        points: [
          {
            title: 'Local-first storage',
            body: 'Projects, caches, and credentials remain on disk. External calls target only configured or approved services.',
          },
          {
            title: 'Inspectable runs',
            body: 'Tool activity, kernel execution, and connector parameters remain visible alongside reports, tables, and figures.',
          },
          {
            title: 'OS coordination',
            body: 'Specialists and OS bots may reuse Science evidence under Box / Sentry. Write-back still requires controlled publish.',
          },
        ],
      },
      loop: {
        title: 'From research question to replayable output',
        body: 'Science retains the question, execution, and artifacts together. Policy enforcement applies when results leave the workspace.',
        steps: [
          {
            title: 'Define the task',
            body: 'Specify objectives, inputs, methods, outputs, and acceptance criteria. Attach files or `@` project artifacts.',
          },
          {
            title: 'Execute',
            body: 'Use skills, connectors, search, and notebooks under the selected approval profile.',
          },
          {
            title: 'Review in place',
            body: 'Inspect reports and figures beside the session. Open the execution trail for any version.',
          },
          {
            title: 'Verify and publish',
            body: 'Replay in isolation when required. Box / Sentry govern high-risk egress and publish.',
          },
        ],
      },
      cases: {
        title: 'Reproduction and literature review',
        subtitle: 'Two common workflows on one workbench',
        items: [
          {
            kicker: 'Reproduction',
            title: 'Reproduce a published differential-expression study',
            points: [
              'Attach paper, datasets, and acceptance thresholds',
              'Run notebooks with visible tool activity',
              'Compare regenerated tables and figures in session',
              'Retain versioned outputs with execution trails for review',
            ],
            accept: 'Acceptance criteria: recipe replay, table/byte checks, recorded reviewer notes',
          },
          {
            kicker: 'Literature review',
            title: 'Conduct a review with permissioned scientific connectors',
            points: [
              'Import DOI / PMID / arXiv into a shared library',
              'Search open full text and extract content from PDFs',
              'Invoke life-science connectors only when authorized',
              'Export a package that another machine can import',
            ],
            accept: 'Acceptance criteria: citation completeness, connector ACL compliance, clean package import',
          },
        ],
      },
      trust: {
        title: 'Assistance is permitted; fabricated evidence is not',
        items: [
          {
            title: 'Explicit gaps',
            body: 'Unavailable evidence is marked unavailable. Versions remain checksummed and session-scoped.',
          },
          {
            title: 'Kense Box / Sentry',
            body: 'Untrusted solves and remote jobs run in isolation. High-risk network and write paths follow in-kernel policy.',
          },
          {
            title: 'Researcher accountability',
            body: 'Ask / auto-edit / full-access profiles, per-connector grants, and optional reviewer loops. Methods, interpretation, and scientific validity remain the researcher’s responsibility.',
          },
        ],
      },
      path: {
        title: 'Start with one project, one runtime, and a limited connector set',
        body: 'Validate execution trails and approvals before introducing HPC and specialist packages.',
        riskTitle: 'Scope boundaries',
        riskBody:
          'Researchers remain responsible for methods, interpretation, privacy, and scientific validity. Keep identifiers out of prompts and public logs. Connector licenses follow upstream terms.',
      },
      ctaTitle: 'Keep research outputs and execution context together',
      ctaBody: 'Start free, or book a demo to walk one analysis from question through replay.',
    },
    insight: {
      documentTitle: 'Kense Insight — Kense',
      stake: 'When every system redefines the same KPI, reporting and automation cannot stay consistent.',
      lead: 'Define metrics, joins, and access rules once in code. Serve them through SQL, REST, GraphQL, and MCP, with caching and pre-aggregations to control warehouse load.',
      problem: {
        title: 'The same KPI resolves to conflicting values',
        body: 'Dashboards, product interfaces, and automation each reinvent joins and grain. Figures diverge, warehouse cost rises, and row-level rules remain inconsistent.',
        points: [
          {
            title: 'Metric drift',
            body: 'Revenue in BI does not match revenue in the product — and consumers of raw tables introduce a third definition.',
          },
          {
            title: 'Vendor lock-in of logic',
            body: 'Semantic models embedded in a single BI platform do not transfer cleanly to APIs, embeds, or MCP tools.',
          },
          {
            title: 'Ad-hoc SQL cost',
            body: 'Without cache and rollups, interactive traffic and follow-up queries place sustained load on the warehouse.',
          },
        ],
      },
      cost: {
        title: 'Incorrect metrics destroy trust faster than latency',
        body: 'Teams debate which chart is authoritative while automation amplifies incorrect SQL. Governance fails before performance becomes the primary issue.',
      },
      capabilities: {
        title: 'Platform scope',
        items: [
          {
            title: 'Modeling',
            body: 'Metrics, dimensions, joins, hierarchies, and time grains defined in code and portable across environments.',
          },
          {
            title: 'Access control',
            body: 'Map identity into row-level and tenant policies applied before warehouse SQL execution.',
          },
          {
            title: 'Data sources',
            body: 'Cloud warehouses, query engines, and application databases through a unified SQL intake.',
          },
          {
            title: 'In-memory cache',
            body: 'Share buffers across identical concurrent queries to reduce source stampede under interactive load.',
          },
          {
            title: 'Pre-aggregations',
            body: 'Declare background-refreshed rollups; matching queries are routed to the cache layer.',
          },
          {
            title: 'SQL API',
            body: 'Postgres-compatible access with semantic extensions so BI and tools query defined metrics rather than base tables.',
          },
          {
            title: 'REST & GraphQL',
            body: 'JSON and GraphQL interfaces for applications and embedded analytics.',
          },
          {
            title: 'Meta API',
            body: 'Enumerate queryable measures and dimensions so clients discover the model instead of inferring schemas.',
          },
          {
            title: 'MCP',
            body: 'Expose the same metrics to tools over MCP — select defined measures rather than generating SQL against raw tables.',
          },
          {
            title: 'Headless delivery',
            body: 'No mandated UI. Support internal BI, product analytics, or automation on a shared metric foundation.',
          },
        ],
      },
      architecture: {
        title: 'Define once, cache, and serve multiple clients',
        body: 'Kense Insight owns metric definitions and query performance. Work initiates questions. When answers drive actions, OS applies Box / Sentry controls.',
        points: [
          {
            title: 'Semantic runtime',
            body: 'Validate against the model, apply policy, then compile to source SQL or a matching pre-aggregation.',
          },
          {
            title: 'One model, multiple APIs',
            body: 'SQL, REST, GraphQL, Meta, and MCP share the same definitions.',
          },
          {
            title: 'OS coordination',
            body: 'Work and OS bots retrieve numbers from Insight. Write-back and egress still require approval.',
          },
        ],
      },
      loop: {
        title: 'From metric definition to consistent consumption',
        body: 'Insight maintains the metric dictionary and cache. Work and OS determine subsequent actions.',
        steps: [
          {
            title: 'Model',
            body: 'Encode measures, dimensions, joins, and tenant rules.',
          },
          {
            title: 'Cache',
            body: 'Configure refresh keys and pre-aggregations for predictable interactive performance.',
          },
          {
            title: 'Serve',
            body: 'BI, embeds, REST/GraphQL applications, and MCP tools consume the same definitions.',
          },
          {
            title: 'Act',
            body: 'Operators and bots use the results; Box isolates heavy compute; Sentry can block unsafe publish paths.',
          },
        ],
      },
      cases: {
        title: 'Internal BI and product embedding',
        subtitle: 'One metric dictionary across surfaces',
        items: [
          {
            kicker: 'BI & product',
            title: 'Align dashboard and product UI on shared definitions',
            points: [
              'Analysts explore through SQL',
              'Product embeds the same measures via REST / GraphQL',
              'Apply row-level rules by tenant and role',
              'Use pre-aggregations to stabilize interactive latency',
            ],
            accept: 'Acceptance criteria: metric parity, policy coverage, cache hit rate',
          },
          {
            kicker: 'Automation',
            title: 'Tools query defined metrics, not raw tables',
            points: [
              'Meta API lists available measures',
              'MCP and semantic SQL select defined metrics',
              'ACL is applied before warehouse execution',
              'Follow-up traffic is absorbed by cache and rollups',
            ],
            accept: 'Acceptance criteria: no raw-table SQL from tools, ACL auditability, bounded query cost',
          },
        ],
      },
      trust: {
        title: 'Performance without correct definitions is not an improvement',
        items: [
          {
            title: 'Runtime policy',
            body: 'Access rules apply at query compilation. Prompt rewriting cannot bypass row filters.',
          },
          {
            title: 'Kense Box / Sentry',
            body: 'Automation acting on Insight results remains subject to isolation and in-kernel veto.',
          },
          {
            title: 'Operational boundaries',
            body: 'Development-mode authentication remains local. Production requires secrets, JWT, and least-privilege warehouse credentials.',
          },
        ],
      },
      path: {
        title: 'Begin with one subject area, one warehouse, and SQL + REST consumers',
        body: 'Validate metric parity and pre-aggregation hit rates. Introduce MCP clients after the dictionary is stable.',
        riskTitle: 'Implementation constraints',
        riskBody:
          'Metric models are code and require review. Some pre-aggregation modes need warehouse write access under source policy. Do not expose development-mode instances publicly.',
      },
      ctaTitle: 'Standardize metrics across analytics and APIs',
      ctaBody: 'Start free, or book a demo to model your first subject area.',
    },
  },
  hero: {
    title: 'Complete work locally. Preserve capability across the organization.',
    subtitle:
      'Kense Work composes models, files, and tools on your machine; Kense OS handles orchestration, organizational memory, and access governance.',
    ctaPrimary: 'Start for free',
    ctaSecondary: 'Book a demo',
    discover: 'Explore the product',
    workPreview: {
      newTask: 'New task',
      projects: 'Projects',
      projectsEmpty: 'No projects yet',
      tasks: 'Tasks',
      tasksEmpty: 'No tasks yet',
      more: 'More',
      user: 'roylin',
      greeting: "Docs Expert — I'm here to help",
      selectProject: 'Select project',
      placeholder:
        'What do you want to finish today? @ files, / skills, # plugins…',
      modelStatus: 'No model connected',
      executeAuto: 'Run · Auto',
      workspaceWritable: 'Workspace writable',
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
      search: 'Search',
      plugins: 'Plugins',
      chats: [
        {
          id: 'docs',
          name: 'Docs Expert',
          preview: 'Need your yes on the Friday all-hands deck.',
          time: '7:34',
          unread: true,
        },
        {
          id: 'code',
          name: 'Code Expert',
          preview: "Repro'd the checkout crash. Write-up's in the ticket.",
          time: 'Yesterday',
        },
        {
          id: 'science',
          name: 'Science Expert',
          preview: "Checkout's clean on staging, 3 bugs closed.",
          time: '11:18',
        },
        {
          id: 'finance',
          name: 'Finance Expert',
          preview: '14 receipts in. Still missing your Uber from Tuesday.',
          time: '9:04',
        },
      ],
    },
  },
  logos: {
    label: 'Teams that choose Kense',
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
      'A local-first workspace that composes people, models, data, and tools per task — under host policy and least privilege.',
    items: [
      {
        title: 'Understand context',
        description:
          'Identify the problem from goals, constraints, and local files.',
      },
      {
        title: 'Compose per task',
        description:
          'Select models, tools, and data for the current task in a traceable session.',
      },
      {
        title: 'Validate within boundaries',
        description:
          'Run experiments under explicit authorization and isolated execution, with results available for evaluation.',
      },
    ],
    quote: {
      text: 'Real data and agents can collaborate in the same workspace — with clear boundaries.',
      author: 'Alex Chen',
      role: 'Head of Product · Cascade',
    },
    bot: {
      aria: 'Digital employees: Docs, Code, Science, Finance',
      eyebrow: 'Digital Employees',
      title: 'Digital Employees',
      caption: 'Specialist roles for distinct work domains.',
      squad: [
        { id: 'docs', name: 'DOCS EXPERT', role: 'Writing · Layout · Knowledge' },
        { id: 'code', name: 'CODE EXPERT', role: 'Apps · Delivery' },
        { id: 'science', name: 'SCIENCE EXPERT', role: 'Experiments · Analysis' },
        { id: 'finance', name: 'FINANCE EXPERT', role: 'Risk · Reports' },
      ],
    },
  },
  cloud: {
    title: 'Kense OS',
    description:
      'The control plane owns intent and policy. Operations / Flow coordinates durably. Workloads converge through Fleet, Runtime, and Box.',
    items: [
      {
        title: 'Unified Gateway',
        description:
          'One governed public ingress for Agents, Workflows, Functions, and Inference.',
      },
      {
        title: 'Operations · Flow',
        description:
          'Desired state stays separate from the journal — replay skips completed steps after interruption.',
      },
      {
        title: 'Runtime · Box',
        description:
          'Isolated execution lands on nodes; Power runs as ordinary Services for inference.',
      },
    ],
    quote: {
      text: 'Models can change; the judgment the team preserved remains available.',
      author: 'Jordan Lee',
      role: 'Platform Engineering · Orbit',
    },
  },
  integrations: {
    title: 'Stable integrations, swappable providers',
    description:
      'Connect models and tools through a unified interface. Change providers without rebuilding the pipeline.',
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
    title: 'Permissions, isolation, and audit',
    description:
      'Every action has a boundary, authorization, and record. Sensitive data can remain local.',
    items: [
      {
        title: 'Organization-wide policy',
        description:
          'Models, tools, and data usage are configured centrally by the organization.',
      },
      {
        title: 'Sandbox execution',
        description:
          'Code and network access run in isolation, reducing production risk.',
      },
      {
        title: 'Auditable evidence',
        description:
          'Runs, evaluations, and anomalies are recorded; publish and rollback have defined gates.',
      },
    ],
    quote: {
      text: 'Clear boundaries, ownership, and logs — that is what production requires.',
      author: 'Sam Rivera',
      role: 'Security Lead · Harbor',
    },
  },
  devices: {
    title: 'Start on one machine, scale as needed',
    description:
      'Complete work locally first, then add memory, flows, and team governance as required.',
    items: [
      {
        title: 'Local-first',
        description:
          'Data and permissions remain within local boundaries by default; add capability as needed.',
      },
      {
        title: 'Swappable providers',
        description:
          'Select models and runtimes by cost, performance, and compliance requirements.',
      },
      {
        title: 'Uniform Work–OS contract',
        description:
          'Sessions and state stay aligned between Work and OS.',
      },
    ],
    quote: {
      text: 'Started from a personal CLI; three weeks later three teams were calling the same capabilities.',
      author: 'Riley Park',
      role: 'Engineering Manager · Vertex',
    },
  },
  teams: {
    title: 'Individual contribution, team reuse',
    description:
      'Experience is recorded with context; after review it becomes skills, knowledge, or workflows.',
    items: [
      {
        title: 'Transferable judgment',
        description:
          'Key decisions are documented for handoff, revision, and reuse.',
      },
      {
        title: 'Reuse across teams',
        description:
          'One asset can be composed by multiple applications and agents.',
      },
      {
        title: 'Operations built for handoff',
        description:
          'Queues, recovery, and audit are defaults — reducing manual oversight.',
      },
    ],
    quote: {
      text: 'We needed a team capability library that grows, can be governed, and can be handed down.',
      author: 'Morgan Ellis',
      role: 'COO · Alloy',
    },
  },
  scale: {
    title: 'Designed for production scale',
    description:
      'From personal sessions to the organizational control plane — runtime, memory, orchestration, and governance on one contract.',
    stats: [
      { value: '30m+', label: 'Sessions & workflows executed' },
      { value: '186+', label: 'Countries & regions' },
      { value: '1,500+', label: 'Teams in production' },
      { value: '>99.9%', label: 'Control-plane availability' },
    ],
  },
  compliance: {
    title: 'Built-in compliance',
    description: 'Policy, isolation, and audit available out of the box.',
    cta: 'Talk to sales',
    badges: ['GDPR', 'CCPA', 'SOC 2'],
  },
  cta: {
    title: 'Start with one real task',
    description: 'Start free, or book a product demo.',
    primary: 'Start for free',
    secondary: 'Book a demo',
  },
  footer: {
    product: 'Product',
    company: 'Company',
    resources: 'Resources',
    legal: 'Legal',
    tagline: 'An AI-native OS built for the Agent era',
    links: {
      work: 'Kense Work',
      cloud: 'Kense OS',
      pricing: 'Pricing',
      blog: 'Blog',
      docs: 'Docs',
      about: 'About',
      careers: 'Careers',
      privacy: 'Privacy',
      terms: 'Terms',
      openSource: 'Open source',
    },
    copyright: '© Kense Labs. All rights reserved.',
  },
  site: {
    tocLabel: 'On this page',
    about: {
      documentTitle: 'About — Kense',
      kicker: 'Company',
      title: 'An AI-native OS for the Agent era',
      lead:
        'Kense Labs builds Kense Work and Kense OS so teams can finish work locally and compound reusable capability across the organization.',
      missionTitle: 'What we are building',
      missionBody:
        'Agents and workflows are becoming a new unit of software. Kense provides a local-first work surface plus recoverable, auditable orchestration and memory on the system side—so one-off sessions become operable capability.',
      pillars: [
        {
          title: 'Local-first work',
          body: 'Compose models, files, and tools locally; keep sensitive context inside the boundary by default.',
        },
        {
          title: 'Durable orchestration',
          body: 'Recoverable, replayable flows with consistent state across sessions and roles.',
        },
        {
          title: 'Org memory & permissions',
          body: 'Capability, policy, and audit designed together so real organizations can ship safely.',
        },
      ],
      ctaTitle: 'Turn work into a system',
      ctaBody: 'Start free, or book a demo to map the right path for your team.',
      ctaPrimary: 'Start for free',
      ctaSecondary: 'Book a demo',
    },
    careers: {
      documentTitle: 'Careers — Kense',
      kicker: 'Careers',
      title: 'Build AI-native infrastructure with us',
      lead:
        'We look for people who care about product detail, system correctness, and real workflows. Remote-friendly, async by default.',
      culture: [
        {
          title: 'Write it down',
          body: 'Design docs, RFCs, and runnable prototypes beat long meetings.',
        },
        {
          title: 'Prove it on real tasks',
          body: 'We ship when a full workflow works—not when the slides look good.',
        },
        {
          title: 'Small team, high leverage',
          body: 'Everyone can move product direction and engineering quality.',
        },
      ],
      openingsTitle: 'Open roles',
      openingsEmpty:
        'No public openings right now. Still interested? Send a short note with relevant work.',
      openings: [
        {
          title: 'Full-stack engineer',
          location: 'Remote / Shanghai',
          type: 'Full-time',
          summary:
            'Own product UI, APIs, and reliability for Work and the OS control plane.',
        },
        {
          title: 'Distributed systems engineer',
          location: 'Remote / Shanghai',
          type: 'Full-time',
          summary:
            'Design durable execution, consistent state, recoverable workflows, and observability.',
        },
      ],
      howTitle: 'How to apply',
      howSteps: [
        'Write a short intro: what you have built and why Kense.',
        'Attach a résumé or links to GitHub / portfolio work.',
        'Use “Book a demo” and set the subject to “Careers + role”.',
      ],
      applyCta: 'Contact hiring',
    },
    privacy: {
      documentTitle: 'Privacy Policy — Kense',
      kicker: 'Legal',
      title: 'Privacy Policy',
      updated: 'Last updated: September 16, 2026',
      lead:
        'This policy explains how Kense Labs (“we”) collects, uses, and protects information when you use Kense websites and products. By using our services, you understand this policy.',
      sections: [
        {
          id: 'who',
          title: '1. Who we are',
          paragraphs: [
            'Kense Labs provides Kense Work, Kense OS, and related websites, docs, and demos. For privacy questions, contact us via “Book a demo” on the site and note “Privacy”.',
          ],
        },
        {
          id: 'collect',
          title: '2. What we collect',
          paragraphs: [
            'We collect only what we need to provide and improve the service, which may include:',
          ],
          bullets: [
            'Account details you provide: name, work email, organization.',
            'Usage data: product usage, device/browser type, coarse location, diagnostics.',
            'Communications: content you send in demo requests, support, or email.',
            'Cookies and similar tech for session, preferences (e.g. language), and basic analytics.',
          ],
        },
        {
          id: 'use',
          title: '3. How we use information',
          paragraphs: ['We use information to:'],
          bullets: [
            'Provide, maintain, and improve products and the website.',
            'Operate accounts, authentication, and customer support.',
            'Send service notices (security or material changes); marketing only with consent or as allowed by law.',
            'Prevent abuse, debug issues, and meet compliance obligations.',
          ],
        },
        {
          id: 'share',
          title: '4. How we share information',
          paragraphs: [
            'We do not sell personal information. We share only when needed:',
          ],
          bullets: [
            'Processors under contract (hosting, email, analytics) bound to protect data.',
            'Legal requirements under law, regulation, or valid legal process.',
            'Business transfers (merger, acquisition) with notice or consent as required.',
          ],
        },
        {
          id: 'retention',
          title: '5. Retention and security',
          paragraphs: [
            'We retain information as long as needed for the purposes in this policy, then delete or anonymize it unless law requires longer retention.',
            'We use reasonable technical and organizational measures, but no internet transmission or storage is perfectly secure.',
          ],
        },
        {
          id: 'rights',
          title: '6. Your rights',
          paragraphs: [
            'Depending on where you live, you may have rights to access, correct, delete, restrict, or export personal data, and to withdraw consent (without affecting prior lawful processing).',
            'To exercise rights, contact us via “Book a demo” and note “Privacy rights”. We will respond within a reasonable time.',
          ],
        },
        {
          id: 'cookies',
          title: '7. Cookies',
          paragraphs: [
            'We use necessary cookies for session and language preferences, and may use analytics cookies to understand site usage. You can control cookies in your browser; disabling some may affect functionality.',
          ],
        },
        {
          id: 'intl',
          title: '8. International transfers',
          paragraphs: [
            'Infrastructure and processors may be outside your country. Where we transfer data internationally, we use appropriate safeguards required by applicable law.',
          ],
        },
        {
          id: 'children',
          title: '9. Children',
          paragraphs: [
            'Services are for organizations and professionals, not children under 16. If we learn we collected a child’s data by mistake, we will delete it promptly.',
          ],
        },
        {
          id: 'changes',
          title: '10. Changes',
          paragraphs: [
            'We may update this policy from time to time. Material changes will refresh the “Last updated” date and may be announced in-product or by email. Continued use means you accept the updated policy.',
          ],
        },
      ],
    },
    terms: {
      documentTitle: 'Terms of Service — Kense',
      kicker: 'Legal',
      title: 'Terms of Service',
      updated: 'Last updated: September 16, 2026',
      lead:
        'These terms govern access to and use of Kense Labs websites, products, and related services (“Services”). By using the Services, you agree to these terms. If you do not agree, do not use them.',
      sections: [
        {
          id: 'accept',
          title: '1. Acceptance',
          paragraphs: [
            'You confirm you can accept these terms for yourself or your organization. If you use the Services on behalf of an organization, you represent you have authority to bind it.',
          ],
        },
        {
          id: 'account',
          title: '2. Accounts and access',
          paragraphs: [
            'Provide accurate information and protect your credentials. You are responsible for activity under your account. We may suspend or terminate access if we reasonably suspect abuse, security risk, or breach of these terms.',
          ],
        },
        {
          id: 'license',
          title: '3. License and IP',
          paragraphs: [
            'Subject to these terms, we grant a limited, non-exclusive, non-transferable, revocable license to use the Services as documented.',
            'IP in the Services, software, brands, and docs remains with Kense Labs or its licensors. These terms do not transfer ownership.',
            'You retain rights in content you submit; you grant us the license needed to process it to provide the Services.',
          ],
        },
        {
          id: 'acceptable',
          title: '4. Acceptable use',
          paragraphs: ['You must not:'],
          bullets: [
            'Violate law or infringe others’ rights.',
            'Attempt unauthorized access to systems, data, or accounts.',
            'Interfere with integrity, availability, or security (including abuse of automation or bypassing limits).',
            'Upload malware, or use the Services for fraud, harassment, or clearly harmful purposes.',
          ],
        },
        {
          id: 'beta',
          title: '5. Previews and changes',
          paragraphs: [
            'Some features may be preview, beta, or free-tier and may change, be limited, or end at any time. We may update the Services; for material adverse changes we will give reasonable notice where practicable.',
          ],
        },
        {
          id: 'fees',
          title: '6. Fees',
          paragraphs: [
            'Paid plan pricing, billing period, and inclusions are as shown at purchase or in an order. Unless stated in writing, fees are generally non-refundable. Non-payment may lead to suspension.',
          ],
        },
        {
          id: 'disclaimer',
          title: '7. Disclaimer',
          paragraphs: [
            'To the maximum extent permitted by law, the Services are provided “as is” and “as available,” without warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant uninterrupted or error-free operation.',
          ],
        },
        {
          id: 'liability',
          title: '8. Limitation of liability',
          paragraphs: [
            'To the maximum extent permitted by law, Kense Labs and affiliates are not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, data, or goodwill.',
            'Our aggregate liability related to these terms or the Services will not exceed amounts you paid us for the relevant Services in the twelve months before the claim; for free use, the minimum amount allowed by law.',
          ],
        },
        {
          id: 'termination',
          title: '9. Termination',
          paragraphs: [
            'You may stop using the Services and close your account at any time. We may terminate or suspend for breach or service wind-down. Provisions that by nature should survive will survive termination.',
          ],
        },
        {
          id: 'law',
          title: '10. Governing law',
          paragraphs: [
            'Except where mandatory consumer law says otherwise, these terms are governed by the laws of the People’s Republic of China (excluding conflict-of-law rules). Disputes should first be negotiated in good faith; failing that, resolved by courts with jurisdiction where Kense Labs is located, unless mandatory law requires otherwise.',
          ],
        },
        {
          id: 'contact',
          title: '11. Contact',
          paragraphs: [
            'For questions about these terms, contact us via “Book a demo” on the site and note “Terms”.',
          ],
        },
      ],
    },
  },
  pricing: {
    title: 'Plans that scale with your team',
    description:
      'Start free — no credit card required. Scale by seat. No hidden fees.',
    billingMonthly: 'Monthly',
    billingAnnual: 'Yearly',
    billedMonthly: 'Billed monthly',
    billedAnnual: 'Billed yearly',
    saveBadge: 'Save ~20%',
    includedLabel: 'Includes',
    plans: [
      {
        name: 'Free',
        priceMonthly: '$0',
        priceAnnual: '$0',
        period: '',
        audience: 'For individual evaluation',
        description: 'Complete your first local work session on a real project.',
        features: [
          '1 Work seat',
          'Local context & permission boundaries',
          'Basic sessions & tasks',
          'Community support',
        ],
        includes: ['Work basics'],
        cta: 'Start for free',
      },
      {
        name: 'Builder',
        priceMonthly: '$37',
        priceAnnual: '$29',
        period: '/seat/mo',
        meter: 'OS usage metered',
        audience: 'For early teams and independent developers',
        description: 'Turn recurring work into reusable capability and connect to OS.',
        features: [
          'Full Kense Work',
          'Memory write & retrieval',
          'Durable workflow basics',
          'API / Webhooks',
          'Email support',
        ],
        includes: ['Work', 'OS starter'],
        cta: 'Start for free',
      },
      {
        name: 'Team',
        priceMonthly: '$75',
        priceAnnual: '$59',
        period: '/seat/mo',
        meter: 'OS usage metered',
        audience: 'For multi-team collaboration',
        description: 'Shared capabilities, policy publishing, and workflow automation.',
        features: [
          'Team sharing & versions',
          'Policy & publish governance',
          'Workflow automation',
          'Priority support',
          '20 collaborator seats',
        ],
        includes: ['Work', 'OS', 'Governance'],
        cta: 'Start trial',
        highlighted: true,
      },
      {
        name: 'Enterprise',
        priceMonthly: 'Custom',
        priceAnnual: 'Custom',
        period: '',
        audience: 'For large organizations and regulated environments',
        description: 'Self-hosted control plane, identity integration, and compliance requirements.',
        features: [
          'Dedicated / self-hosted',
          'SSO / SCIM',
          'Custom admin roles',
          'SLA & dedicated support',
          '50 collaborator seats',
        ],
        includes: ['Control plane', 'Compliance'],
        cta: 'Book a demo',
        custom: true,
      },
    ],
    program: {
      eyebrow: 'Startup Program',
      title: 'Early team discount program',
      description:
        'Teams founded within the last 2 years with fewer than 6 members may apply for Team capabilities and additional OS quota.',
      bullets: [
        'Founded less than 2 years ago',
        'Fewer than 6 people',
        'Unlock Team core capabilities',
      ],
      cta: 'Apply now',
      secondary: 'Learn more',
    },
    compare: {
      title: 'Features and plans',
      description: 'Work and OS expand within one subscription, stage by stage.',
      categories: [
        {
          name: 'Work',
          rows: [
            {
              feature: 'Seats',
              values: ['1', 'As needed', 'As needed', 'As needed'],
            },
            {
              feature: 'Local sessions',
              values: ['✓', '✓', '✓', '✓'],
            },
            {
              feature: 'Permissions & sandbox',
              values: ['Basic', '✓', '✓', 'Advanced'],
            },
            {
              feature: 'Tool composition',
              values: ['Basic', '✓', '✓', '✓'],
            },
          ],
        },
        {
          name: 'OS',
          rows: [
            {
              feature: 'Memory & retrieval',
              values: ['—', '✓', '✓', '✓'],
            },
            {
              feature: 'Durable workflows',
              values: ['—', 'Basic', '✓', '✓'],
            },
            {
              feature: 'Versions & reuse',
              values: ['—', 'Personal', 'Team', 'Org'],
            },
            {
              feature: 'Publish & governance',
              values: ['—', '—', '✓', '✓'],
            },
          ],
        },
        {
          name: 'Security & support',
          rows: [
            {
              feature: 'SSO / SCIM',
              values: ['—', '—', '—', '✓'],
            },
            {
              feature: 'Self-hosted / dedicated',
              values: ['—', '—', '—', '✓'],
            },
            {
              feature: 'SLA',
              values: ['—', '—', 'Priority', 'Custom'],
            },
            {
              feature: 'Support',
              values: ['Community', 'Email', 'Priority', 'Dedicated'],
            },
          ],
        },
      ],
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Book a demo for further questions.',
      items: [
        {
          q: 'Do I purchase Work and OS separately?',
          a: 'No. One subscription unlocks by stage: Free starts with Work, Builder adds OS, and Team and Enterprise add governance and the control plane.',
        },
        {
          q: 'What counts as a paid seat?',
          a: 'Members who use Work or manage OS flows and policies. Read-only collaborators use included seats.',
        },
        {
          q: 'How is OS usage billed?',
          a: 'Builder and Team meter durable orchestration; usage is visible in the console. Enterprise can negotiate bundled quota or self-host.',
        },
        {
          q: 'Is a trial available?',
          a: 'Yes. Start free with no credit card required; paid plans include a trial period.',
        },
        {
          q: 'Do you support self-hosting?',
          a: 'Enterprise supports dedicated or self-hosted control planes, plus SSO / SCIM, audit, and custom SLAs.',
        },
        {
          q: 'Are discounts available for early teams?',
          a: 'Yes. Eligible teams may apply to the Startup Program.',
        },
      ],
    },
    bottomCta: {
      title: 'Start with one end-to-end task',
      description: 'Complete work locally first; add OS when needed.',
      primary: 'Start for free',
      secondary: 'Book a demo',
    },
  },
  blog: {
    title: 'Blog',
    description:
      'Product and engineering practice: runtime, working methods, and how personal sessions become organizational capability.',
    minuteRead: 'min read',
    readArticle: 'Read article',
    related: 'Related',
    notFound: {
      title: 'Article not found',
      description: 'This link may have moved. Continue from the blog index.',
      back: 'Back to blog',
    },
  },
  docs: {
    title: 'Docs',
    description:
      'From mental model to first task: Work completes jobs locally; OS handles orchestration, memory, and governance.',
    startCta: 'Start with the introduction',
    contents: 'Contents',
    onThisPage: 'On this page',
    updated: 'Updated',
    prev: 'Previous',
    next: 'Next',
    productSwitch: {
      label: 'Product docs',
    },
    products: {
      overview: { name: 'Overview', blurb: 'Mental model and quickstart' },
      work: { name: 'Kense Work', blurb: 'Local-first workstation' },
      os: { name: 'Kense OS', blurb: 'Control plane and durable runtime' },
      platform: { name: 'Platform', blurb: 'Security, deploy, and plans' },
    },
    sections: {
      start: 'Get started',
      work: 'Kense Work',
      os: 'Kense OS',
      platform: 'Platform',
    },
    notFound: {
      title: 'Page not found',
      description: 'This page does not exist or has moved. Start from the docs index.',
      back: 'Back to docs',
    },
  },
  auth: {
    backHome: 'Back to home',
    eyebrow: 'Account',
    oauthGroup: 'Social sign-in',
    orEmail: 'or continue with email',
    orSocial: 'Or continue with',
    connecting: 'Connecting…',
    oauthSoon: 'OAuth providers will connect soon. This is a UI preview.',
    emailSoon: 'Email sign-in will connect soon. This is a UI preview.',
    forgot: 'Forgot password?',
    showPassword: 'Show',
    hidePassword: 'Hide',
    agreePrefix: 'I agree to the',
    agreeAnd: 'and',
    providers: {
      github: 'Continue with GitHub',
      wechat: 'Continue with WeChat',
    },
    fields: {
      name: 'Full name',
      namePlaceholder: 'Your name',
      email: 'Work email',
      emailPlaceholder: 'you@company.com',
      password: 'Password',
      passwordPlaceholder: 'At least 8 characters',
    },
    aside: {
      title: 'Build your AI-native team with Kense',
    },
    login: {
      documentTitle: 'Log in — Kense',
      title: 'Log in to Kense',
      subtitle: 'Use an existing developer identity, or continue with work email.',
      submit: 'Log in',
      switchPrompt: 'New here?',
      switchAction: 'Create an account',
    },
    signup: {
      documentTitle: 'Sign up — Kense',
      title: 'Create your Kense account',
      subtitle: 'Get started in minutes with one real task.',
      submit: 'Create account',
      switchPrompt: 'Already have an account?',
      switchAction: 'Log in',
    },
  },
  demoModal: {
    title: 'Book a product demo',
    subtitle: 'Share your name and email — we will reach out soon.',
    name: 'Name',
    namePlaceholder: 'How should we call you',
    email: 'Email',
    emailPlaceholder: 'you@company.com',
    submit: 'Submit request',
    submitting: 'Submitting…',
    close: 'Close',
    successTitle: 'Request received',
    successBody: 'Thanks for your interest in Kense. Our team will contact you shortly — please watch your inbox.',
    successDone: 'Got it',
  },
  cloudPage: {
    brand: 'Kense OS',
    title: 'Control plane orchestrates; nodes execute',
    subtitle:
      'AaaS / WaaS / FaaS / Durable Cell share one control plane. Gateway is the only public ingress.',
    ctaPrimary: 'Start for free',
    ctaSecondary: 'View architecture',
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
      search: 'Search runs, claims, routes, units…',
      navLabel: 'Control plane',
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
      asideTitle: 'Stack health',
      plane: [
        { label: 'Gateway routes', value: '4 applied' },
        { label: 'Fleet claims', value: '3 / 3 fenced' },
        { label: 'Box isolation', value: 'MicroVM' },
        { label: 'Inference', value: '2 healthy' },
      ],
    },
    durable: {
      eyebrow: 'Durable Execution',
      title: 'Every step journaled — recovery resumes from the checkpoint',
      description:
        'Calls, side effects, timers, and results are written to the journal. On failure, replay skips completed steps and continues from the checkpoint.',
      steps: [
        {
          title: 'Invocation in',
          description:
            'Each invocation tracked to completion — exactly-once.',
        },
        {
          title: 'Steps journaled',
          description:
            'Side effects, RPCs, sleeps, and state writes are recorded.',
        },
        {
          title: 'Recover on failure',
          description:
            'Retries skip completed steps — no duplicate side effects.',
        },
        {
          title: 'Replayable',
          description:
            'Execution traces available for debugging.',
        },
      ],
      covers: [
        {
          title: 'Infrastructure failures',
          description:
            'After node restarts, in-flight work continues on new instances.',
        },
        {
          title: 'API timeouts',
          description:
            'Exponential backoff retries; tune policy per service.',
        },
        {
          title: 'Duplicate requests',
          description:
            'Idempotency keys dedupe — duplicates return the same result.',
        },
        {
          title: 'Network partitions',
          description:
            'If journal writes fail, execution stops; the control plane retries elsewhere.',
        },
      ],
      flow: {
        label: 'Durable path',
        stages: [
          { title: 'Invoke', detail: 'Request in' },
          { title: 'Journal', detail: 'Steps recorded' },
          { title: 'Recover', detail: 'Resume from checkpoint' },
          { title: 'Complete', detail: 'Exactly-once' },
        ],
      },
    },
    services: {
      eyebrow: 'Service Types',
      title: 'Three service models',
      description:
        'Write handlers like standard functions. Select the consistency model you need.',
      items: [
        {
          name: 'Service',
          tagline: 'Stateless durable handlers',
          bestFor: 'ETL, sagas, fan-out, background jobs',
          bullets: [
            'Unlimited parallel execution',
            'Durable execution & reliable calls',
            'No shared state between requests',
            'Horizontal scale',
          ],
        },
        {
          name: 'Virtual Object',
          tagline: 'Keyed stateful entities',
          bestFor: 'Accounts, carts, sessions, state machines',
          bullets: [
            'Built-in K/V per object key',
            'At most one writer per key',
            'Shared handlers for concurrent reads',
            'Scale across keys',
          ],
        },
        {
          name: 'Workflow',
          tagline: 'Multi-step, once per ID',
          bestFor: 'Approvals, onboarding, long flows',
          bullets: [
            'run executes exactly once per workflow ID',
            'Wait for events, human signals, and promises',
            'Shared handlers query or advance the flow',
            'Lifecycle APIs built in',
          ],
        },
      ],
    },
    state: {
      eyebrow: 'Consistent State',
      title: 'State and execution on the same ledger',
      description:
        'Embedded key-value store. State updates journal with execution steps — no drift.',
      items: [
        {
          title: 'Scoped per entity',
          description:
            'Each object / workflow instance has isolated state.',
        },
        {
          title: 'Single writer',
          description:
            'Only one handler can write at a time — no races.',
        },
        {
          title: 'Stateless service deploy',
          description:
            'State lives in the control plane; your services scale horizontally, including serverless.',
        },
        {
          title: 'Session home',
          description:
            'Context, tool results, and versions persist as entity state.',
        },
      ],
    },
    communication: {
      eyebrow: 'Reliable Communication',
      title: 'Reliable service calls',
      description:
        'OS proxies service-to-service traffic: automatic retry, no duplicate execution, traceable call chains.',
      items: [
        {
          title: 'Automatic retry',
          description: 'Failures retry until success, without custom queue infrastructure.',
        },
        {
          title: 'Exactly-once',
          description: 'The same call does not run twice.',
        },
        {
          title: 'Visible call chains',
          description:
            'Dependency chains inspectable in the control plane.',
        },
        {
          title: 'Multiple ingresses',
          description:
            'HTTP, events, and programmatic invoke share the same semantics.',
        },
      ],
    },
    time: {
      eyebrow: 'Time & Signals',
      title: 'Durable waits',
      description:
        'Durable sleep, scheduled wakeups, and signals — including webhooks and approvals.',
      items: [
        {
          title: 'Durable timers',
          description:
            'sleep / schedule land in the journal — timelines survive restarts.',
        },
        {
          title: 'Humans & webhooks',
          description:
            'Suspend for callbacks, then resume from the breakpoint.',
        },
        {
          title: 'FaaS-friendly',
          description:
            'Waiting does not consume execution time.',
        },
        {
          title: 'Long sessions',
          description:
            'Multi-turn tool use and multi-day flows share one time model.',
        },
      ],
    },
    flow: {
      eyebrow: 'Flow Control',
      title: 'Limit concurrency by scope',
      description:
        'Control cost, protect downstream services, and keep scheduling fair.',
      items: [
        {
          title: 'Cost ceiling',
          description:
            'Limit concurrent expensive calls.',
        },
        {
          title: 'Downstream protection',
          description:
            'Bursts do not overwhelm databases or third-party APIs.',
        },
        {
          title: 'Fair scheduling',
          description:
            'Tasks in a partition share capacity more evenly.',
        },
        {
          title: 'Optional',
          description: 'Enable per service as needed.',
        },
      ],
    },
    agents: {
      eyebrow: 'AI Agents',
      title: 'Stateful agents',
      description:
        'Implement as Virtual Object or Workflow: tool calls resume after interruption; memory stays consistent.',
      items: [
        {
          title: 'Journaled tool calls',
          description:
            'Results go in the journal — retries do not duplicate side effects.',
        },
        {
          title: 'Session as entity',
          description:
            'Context per user / thread key.',
        },
        {
          title: 'Multi-agent orchestration',
          description:
            'Chain agents with reliable RPC — call chains traceable.',
        },
        {
          title: 'Publish and reuse',
          description:
            'Validated policies and flows are versioned for team use.',
        },
      ],
    },
    architecture: {
      eyebrow: 'Architecture',
      title: 'Control plane orchestrates; nodes execute',
      description:
        'Intent and policy live in OS. Durable coordination runs through Operations / Flow. Workloads converge via Fleet, Runtime, and Box. Gateway is the only public ingress.',
      parts: [
        {
          title: 'Four first-class services',
          description:
            'AaaS, WaaS, FaaS, and Durable Cell share one control plane and execution stack.',
        },
        {
          title: 'Kense OS control plane',
          description:
            'Tenant intent, authorization, desired state, Operations / Flow, and complete Edge snapshots.',
        },
        {
          title: 'Runtime · Box · Inference',
          description:
            'Node-local execution and isolation; Power runs as ordinary Runtime Services for inference.',
        },
      ],
      diagram: {
        sourcesLabel: 'Product intent',
        planeLabel: 'Control Plane',
        planeBrand: 'Kense OS',
        outputsLabel: 'Execution & supply',
        toolsLabel: 'Management',
        observeLabel: 'Evidence',
        core: 'Operations · Flow',
        sources: [
          { title: 'AaaS · Agents', tags: ['Session', 'Approval', 'Checkpoint'] },
          { title: 'WaaS · Workflow', tags: ['Plan', 'HumanTask', 'Replay'] },
          { title: 'FaaS · Functions', tags: ['Task', 'Service', 'MCP'] },
          { title: 'Durable Cell', tags: ['Shared state', 'Alarms', 'Fence'] },
        ],
        ingress: ['Unified Gateway', 'Identity · Grants'],
        egress: ['Workloads', 'Fleet · Claims', 'Runtime · Box', 'Inference'],
        outputs: [
          { title: 'Isolated workloads', tags: ['Box', 'OCI', 'Sandbox'] },
          { title: 'Power inference', tags: ['GPU', 'Health', 'Route'] },
          { title: 'Your handlers', tags: ['SDK', 'Service', 'Connector'] },
          { title: 'Artifacts & supply', tags: ['OCI', 'Use', 'Weights'] },
        ],
        tools: ['ACL', 'CLI', 'SDK', 'MCP'],
        observe: ['Audit', 'Traces', 'Replay', 'Metrics'],
      },
    },
    deploy: {
      eyebrow: 'Deploy',
      title: 'Managed, BYOC, or self-hosted',
      description: 'Choose deployment model — semantics stay consistent.',
      options: [
        {
          name: 'Managed OS',
          description: 'Kense operates the control plane.',
          points: [
            'Provision in minutes',
            'Managed upgrades and observability',
            'Suitable for rapid deployment',
          ],
        },
        {
          name: 'BYOC',
          description:
            'Control plane runs in your cloud account and VPC.',
          points: [
            'Data locality',
            'Reduced operational burden',
            'Aligns with enterprise network policy',
          ],
        },
        {
          name: 'Self-hosted',
          description:
            'You manage deployment, security, and upgrades.',
          points: [
            'Private deployment',
            'Custom compliance requirements',
            'Integrates with existing platform engineering',
          ],
        },
      ],
    },
    bottomCta: {
      title: 'Run one workflow end to end',
      description: 'Start with one durable workflow or session.',
      primary: 'Start for free',
      secondary: 'Book a demo',
    },
  },
};
