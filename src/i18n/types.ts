export type Locale = 'zh' | 'en';

export type FeatureTrio = {
  brand?: string;
  title: string;
  description: string;
  items: Array<{ title: string; description: string }>;
  quote: {
    text: string;
    author: string;
    role: string;
  };
};

export type Messages = {
  meta: {
    homeTitle: string;
    pricingTitle: string;
    blogTitle: string;
    cloudTitle: string;
    description: string;
    cloudDescription: string;
  };
  nav: {
    home: string;
    features: string;
    work: string;
    cloud: string;
    pricing: string;
    customers: string;
    docs: string;
    blog: string;
    login: string;
    demo: string;
    start: string;
  };
  lang: {
    zh: string;
    en: string;
    switchTo: string;
  };
  a11y: {
    backToTop: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    discover: string;
    workPreview: {
      newTask: string;
      projects: string;
      projectsEmpty: string;
      tasks: string;
      tasksEmpty: string;
      more: string;
      user: string;
      greeting: string;
      selectProject: string;
      placeholder: string;
      modelStatus: string;
      executeAuto: string;
      workspaceWritable: string;
      docs: Array<{ name: string; kind: 'word' | 'excel' | 'ppt' | 'pdf' | 'md' }>;
    };
  };
  logos: {
    label: string;
    names: string[];
  };
  work: FeatureTrio & {
    bot: {
      aria: string;
      eyebrow: string;
      title: string;
      caption: string;
      squad: Array<{ id: string; name: string; role: string }>;
    };
  };
  cloud: FeatureTrio;
  integrations: {
    title: string;
    description: string;
    apps: string[];
  };
  security: FeatureTrio;
  devices: FeatureTrio;
  teams: FeatureTrio;
  scale: {
    title: string;
    description: string;
    stats: Array<{ value: string; label: string }>;
  };
  compliance: {
    title: string;
    description: string;
    cta: string;
    badges: string[];
  };
  cta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
  footer: {
    product: string;
    company: string;
    resources: string;
    legal: string;
    tagline: string;
    links: {
      work: string;
      cloud: string;
      pricing: string;
      blog: string;
      docs: string;
      about: string;
      careers: string;
      privacy: string;
      terms: string;
      security: string;
    };
    copyright: string;
  };
  pricing: {
    title: string;
    description: string;
    billingMonthly: string;
    billingAnnual: string;
    billedMonthly: string;
    billedAnnual: string;
    saveBadge: string;
    includedLabel: string;
    plans: Array<{
      name: string;
      priceMonthly: string;
      priceAnnual: string;
      period: string;
      meter?: string;
      audience: string;
      description: string;
      features: string[];
      includes?: string[];
      cta: string;
      highlighted?: boolean;
      custom?: boolean;
    }>;
    program: {
      eyebrow: string;
      title: string;
      description: string;
      bullets: string[];
      cta: string;
      secondary: string;
    };
    compare: {
      title: string;
      description: string;
      categories: Array<{
        name: string;
        rows: Array<{
          feature: string;
          values: [string, string, string, string];
        }>;
      }>;
    };
    faq: {
      title: string;
      subtitle: string;
      items: Array<{ q: string; a: string }>;
    };
    bottomCta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
  };
  blog: {
    title: string;
    description: string;
    posts: Array<{ title: string; excerpt: string; date: string }>;
  };
  cloudPage: {
    brand: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    marquee: string[];
    console: {
      search: string;
      navLabel: string;
      nav: string[];
      status: string;
      title: string;
      meta: string;
      path: string[];
      stages: Array<{ id: string; name: string; state: string }>;
      journalLabel: string;
      journal: Array<{ step: string; detail: string }>;
      asideTitle: string;
      plane: Array<{ label: string; value: string }>;
    };
    durable: {
      eyebrow: string;
      title: string;
      description: string;
      steps: Array<{ title: string; description: string }>;
      covers: Array<{ title: string; description: string }>;
      flow: {
        label: string;
        stages: Array<{ title: string; detail: string }>;
      };
    };
    services: {
      eyebrow: string;
      title: string;
      description: string;
      items: Array<{
        name: string;
        tagline: string;
        bestFor: string;
        bullets: string[];
      }>;
    };
    state: {
      eyebrow: string;
      title: string;
      description: string;
      items: Array<{ title: string; description: string }>;
    };
    communication: {
      eyebrow: string;
      title: string;
      description: string;
      items: Array<{ title: string; description: string }>;
    };
    time: {
      eyebrow: string;
      title: string;
      description: string;
      items: Array<{ title: string; description: string }>;
    };
    flow: {
      eyebrow: string;
      title: string;
      description: string;
      items: Array<{ title: string; description: string }>;
    };
    agents: {
      eyebrow: string;
      title: string;
      description: string;
      items: Array<{ title: string; description: string }>;
    };
    architecture: {
      eyebrow: string;
      title: string;
      description: string;
      parts: Array<{ title: string; description: string }>;
      diagram: {
        sourcesLabel: string;
        planeLabel: string;
        planeBrand: string;
        outputsLabel: string;
        toolsLabel: string;
        observeLabel: string;
        core: string;
        sources: Array<{ title: string; tags: string[] }>;
        ingress: string[];
        egress: string[];
        outputs: Array<{ title: string; tags: string[] }>;
        tools: string[];
        observe: string[];
      };
    };
    deploy: {
      eyebrow: string;
      title: string;
      description: string;
      options: Array<{ name: string; description: string; points: string[] }>;
    };
    bottomCta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
  };
};
