// Engineering and technical-leadership content shared by the portfolio pages.

export const LINKS = {
  linkedin: "https://linkedin.com/in/neer4j",
  github: "https://github.com/NEER4J",
  x: "https://x.com/NEER4J__",
  docsiv: "https://docsiv.com",
  govgrant: "https://govgrant.ca",
  habiv: "https://habiv.com",
  speediq: "https://app.speediq.ai/",
  resume: "/Neeraj_Sharma_Full_Stack_Engineering_Resume.pdf",
};

export const PROFILE = {
  name: "Neeraj Sharma",
  role: "Full-Stack Engineer & Technical Lead",
  headline: "I build AI and SaaS products, and lead the engineering that makes them work.",
  summary:
    "Full-stack engineer with 5+ years building AI and SaaS products across frontend, backend, data, and integrations. I stay hands-on while owning technical direction, architecture, and delivery from the first version through production.",
};

export const INTRO = {
  name: PROFILE.name,
  role: "a full-stack engineer and hands-on technical lead",
  before:
    "For 5+ years, I've designed, built, and shipped AI-enabled SaaS across frontend, backend, data, and integrations. I stay close to the code while setting technical direction and helping teams deliver.",
};

export const METRICS = [
  { value: "5 years", label: "building products" },
  { value: "2,000+", label: "users served" },
  { value: "100k+", label: "messages delivered" },
  { value: "40%", label: "support workload reduced" },
];

export type CaseStudy = {
  slug: string;
  name: string;
  label: string;
  year: string;
  url: string;
  image: string;
  metric: string;
  summary: string;
  problem: string;
  research: string[];
  role: string;
  decisions: string[];
  shipped: string[];
  outcomes: string[];
  nextMetrics: string[];
  learning: string;
  demonstrates: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "docsiv",
    name: "Docsiv",
    label: "AI SaaS · technical founder",
    year: "2024-2026",
    url: LINKS.docsiv,
    image: "/projects/docsiv.png?v=2",
    metric: "Live and onboarding early agencies",
    summary:
      "A multi-tenant AI document workspace for agencies, built across editors, brand kits, client portals, collaboration, analytics, signing, and billing.",
    problem:
      "Agencies were producing proposals, reports, contracts, decks, and spreadsheets across disconnected tools. The work was repeatedly copied, reformatted, emailed, and tracked by hand, creating an inconsistent client experience.",
    research: [
      "The workspace needed to support several document types while keeping shared capabilities such as brand context, access, history, and exports consistent.",
      "Agency workspaces and external client portals required clear tenant and permission boundaries, including branded delivery on custom domains.",
      "Collaboration, analytics, signing, and billing had to connect to document creation as part of the same production workflow.",
    ],
    role:
      "As technical founder, I designed and built the full-stack workspace and own its technical direction. I shipped AI-assisted editors, team and client workspaces, brand application, collaboration, document analytics, signing, and credit billing. Docsiv is live, and I continue to improve it using feedback from early agencies.",
    decisions: [
      "Built around agency workspaces, with tenant-aware access and client portals for external delivery.",
      "Used reusable document and brand primitives to support proposals, reports, contracts, decks, sheets, forms, and whiteboards.",
      "Integrated real-time collaboration, comments, and version history so teams can review work in the same workspace.",
      "Connected AI usage to credits and subscription billing, alongside analytics and e-signature workflows.",
    ],
    shipped: [
      "AI-assisted proposals, reports, contracts, decks, sheets, forms, and whiteboards",
      "Brand kits, client portals, custom-domain support, and granular access",
      "Document analytics, collaboration, version history, signing, and billing",
      "A production workspace now used to onboard and learn from early agencies",
    ],
    outcomes: [
      "Shipped a live, multi-tenant platform spanning document creation through client delivery",
      "Launched branded portals and collaboration workflows alongside AI-assisted editing",
      "Built a common workspace foundation that supports several document formats and billing plans",
    ],
    nextMetrics: [
      "Editor load time and save reliability across document types",
      "AI generation latency and output quality by workflow",
      "Workspace access-control and tenant-isolation checks",
      "Client-portal availability and share-to-sign completion",
    ],
    learning:
      "Shared platform primitives make it possible to add document-specific editing without rebuilding identity, brand context, collaboration, and delivery for every format.",
    demonstrates: [
      "Full-stack ownership",
      "Multi-tenant SaaS architecture",
      "AI, collaboration, and billing integrations",
      "Technical leadership from build to launch",
    ],
  },
  {
    slug: "govgrant",
    name: "Govgrant.ca",
    label: "Production RAG platform · lead engineer",
    year: "2025-2026",
    url: LINKS.govgrant,
    image: "/projects/govgrant.png",
    metric: "2,000+ users and 300+ grants refreshed daily",
    summary:
      "A Canadian grant-discovery platform that matches businesses with relevant funding programs using RAG-based recommendations.",
    problem:
      "Canadian businesses had to search fragmented government sources, interpret eligibility criteria, and repeatedly check whether programs were still open. The product needed to make discovery faster without presenting stale or irrelevant opportunities.",
    research: [
      "Matching quality depended on combining business context with current grant data and useful eligibility information.",
      "The ingestion process had to refresh hundreds of grants daily while retaining enough structure for retrieval and administration.",
      "The AI workflow ran inside a subscription product, so authentication, billing, admin controls, and recommendation delivery had to work together.",
    ],
    role:
      "As Lead Engineer, I built the grant-matching experience and core SaaS platform, including RAG recommendations, the automated grant pipeline, authentication, subscriptions, billing, and administration.",
    decisions: [
      "Grounded RAG recommendations in structured grant information and current source content.",
      "Automated grant ingestion and refreshes rather than relying on a manually maintained catalogue.",
      "Included freshness, eligibility context, and admin tooling in the production workflow.",
      "Integrated the matching system with authentication, subscriptions, billing, and the rest of the SaaS platform.",
    ],
    shipped: [
      "RAG-based matching and recommendation workflows",
      "Automated ingestion processing more than 300 grants per day",
      "Authentication, billing, subscriptions, and administration",
      "Production infrastructure supporting more than 2,000 users",
    ],
    outcomes: [
      "Served more than 2,000 users across Canada",
      "Kept the grant catalogue current through a daily automated pipeline",
      "Connected AI recommendations to a usable, monetizable SaaS workflow",
    ],
    nextMetrics: [
      "Grant-ingestion success rate and source freshness",
      "Retrieval quality, recommendation latency, and groundedness",
      "Subscription and billing workflow reliability",
      "Admin error visibility and recovery time",
    ],
    learning:
      "RAG quality depends on the whole data path: source freshness, structured records, retrieval, and operational tools all affect the recommendations users see.",
    demonstrates: [
      "RAG implementation in production",
      "Automated data ingestion",
      "Full-stack SaaS engineering",
      "Technical ownership at scale",
    ],
  },
  {
    slug: "habiv",
    name: "Habiv",
    label: "AI game platform · full-stack engineering",
    year: "2026",
    url: LINKS.habiv,
    image: "/projects/habiv.png?v=2",
    metric: "Live browser-first product",
    summary:
      "A browser-first home for tiny 10–45 second games: discover, play, remix, and share games made by people and AI agents.",
    problem:
      "AI-made games were easy to generate but difficult to experience as a product. They lived in chats, folders, and one-off demos, while players had no focused place to discover short games, creators had no publishing loop, and the platform had to keep untrusted game code away from the main app.",
    research: [
      "Playable game bundles are untrusted code and must remain isolated from the main application and its user session.",
      "Publishing needed a repeatable path from an uploaded bundle or agent output through inspection, conversion, thumbnails, and smoke testing.",
      "The platform combines public browsing and playback with authenticated creator tools and persistent game metadata.",
      "Storage, ingest jobs, analytics, runs, and leaderboards had to support both player and creator workflows.",
    ],
    role:
      "I led full-stack product engineering from the first interface through the creator platform. I built the browse and play surfaces and connected them to identity, catalog data, object storage, ingest and conversion jobs, analytics, leaderboards, and agent publishing.",
    decisions: [
      "Separated the game runtime onto its own origin to isolate playable bundles from Habiv cookies and application context.",
      "Kept the public catalog and playback surface separate from authenticated publishing, account, and creator operations.",
      "Built ingest and conversion steps to inspect uploaded bundles, detect engines, generate thumbnails, and smoke-test builds.",
      "Added an MCP publishing route so agents can submit games into the same processing pipeline as creators.",
    ],
    shipped: [
      "Responsive home feed with featured games, category navigation, search, saved games, history, and a creator profile surface",
      "Watch pages with an embedded player, prompt and version history, comments, leaderboard, and related-game queue",
      "Creator workflows for publishing, editing, visibility, store art, settings, API tokens, and MCP connection details",
      "Platform foundations for Supabase identity and catalog data, R2 game storage, ingest/conversion jobs, analytics, runs, and leaderboards",
    ],
    outcomes: [
      "Shipped a live browser-first game platform at habiv.com with public play and creator publishing workflows",
      "Separated untrusted game execution from the main application context",
      "Connected the marketplace interface to storage, ingest, analytics, runs, and leaderboard systems",
    ],
    nextMetrics: [
      "Bundle validation and conversion success rates",
      "Game startup time and runtime error rates",
      "Isolation checks for game execution and user sessions",
      "Reliability of publishing, analytics, and leaderboard updates",
    ],
    learning:
      "A safe runtime is part of the platform architecture from the start. Separating game code from application sessions shapes storage, publishing, and playback decisions across the system.",
    demonstrates: [
      "Full-stack product engineering",
      "Secure runtime boundaries",
      "Ingest and conversion pipelines",
      "MCP and creator integrations",
    ],
  },
  {
    slug: "speediq",
    name: "SpeedIQ",
    label: "Multi-tenant messaging platform · lead engineer",
    year: "2025-2026",
    url: LINKS.speediq,
    image: "/projects/speediq.png?v=2",
    metric: "100k+ messages delivered",
    summary:
      "A multi-tenant marketing platform for WhatsApp and email campaigns, automation, live chat, and campaign analytics.",
    problem:
      "Marketing teams needed to manage customer conversations, broadcasts, automation, and reporting across channels without stitching together separate tools or losing operational visibility.",
    research: [
      "Campaigns and support conversations needed to share customer, channel, and delivery data across the platform.",
      "The platform had to isolate workspaces while handling asynchronous delivery events and third-party API constraints.",
      "WhatsApp Business onboarding depended on Meta account setup and embedded signup workflows.",
    ],
    role:
      "I led engineering delivery across onboarding, messaging, automation, analytics, and Meta Business API integration for a multi-tenant WhatsApp and email platform.",
    decisions: [
      "Used tenant-aware workspaces for teams, permissions, channel connections, and campaign data.",
      "Integrated Meta embedded signup and Business API flows into the platform onboarding path.",
      "Connected broadcasts, chatbot automation, live chat, webhooks, and analytics to shared customer workflows.",
      "Included campaign delivery visibility so operators could inspect outcomes across channels.",
    ],
    shipped: [
      "WhatsApp and email broadcasts",
      "Chatbot automation and live team inbox",
      "Campaign analytics and delivery visibility",
      "Meta Business API onboarding and multi-tenant controls",
    ],
    outcomes: [
      "Delivered more than 100,000 messages across supported channels",
      "Created one operating surface for campaign execution and customer conversations",
      "Turned a complex third-party API workflow into a team-facing SaaS product",
    ],
    nextMetrics: [
      "Message delivery and webhook processing success rates",
      "Campaign queue latency and retry behavior",
      "Meta connection health and reauthorization recovery",
      "Tenant isolation across teams, contacts, and analytics",
    ],
    learning:
      "Third-party messaging APIs make retries, webhook handling, connection health, and failure visibility core parts of a reliable multi-tenant platform.",
    demonstrates: [
      "Multi-tenant architecture",
      "Meta Business API integration",
      "Messaging and webhook workflows",
      "Technical leadership and delivery",
    ],
  },
];

// Kept for the shared slider component used on the portfolio homepage.
export type Work = {
  name: string;
  year: string;
  blurb: string;
  href?: string;
  metric?: string;
  image?: string;
};

export const SELECTED_WORK: Work[] = [
  ...CASE_STUDIES.map((study) => ({
    name: study.name,
    year: study.year,
    blurb: study.summary,
    href: `/work/${study.slug}`,
    metric: study.metric,
    image: study.image,
  })),
  {
    name: "Apstic",
    year: "2025",
    blurb:
      "An AI automation studio connecting CRMs, commerce, accounting, and communication workflows.",
    href: "https://apstic.com",
    image: "/projects/apstic.png",
  },
];

export const EXPERIENCE = [
  {
    period: "06/2026-Present",
    title: "Founder and Lead Engineer",
    org: "Docsiv",
    detail: "Build the AI document workspace end to end and lead technical direction across editors, multi-tenant workspaces, branded client portals, collaboration, analytics, and billing.",
  },
  {
    period: "01/2026-Present",
    title: "Lead Engineer, AI Products",
    org: "Virtual Xcellence",
    detail: "Lead engineering across Govgrant.ca and SpeedIQ, including RAG recommendations, data pipelines, multi-tenant systems, messaging integrations, and production SaaS delivery.",
  },
  {
    period: "10/2022-01/2026",
    title: "Full-Stack Developer, Technical Delivery",
    org: "NJ Designpark",
    detail: "Built and shipped SaaS products across education, trades, marketing, and services; delivered production AI workflows that reduced client support workload by 40%.",
  },
  {
    period: "2020-2022",
    title: "Independent Full-Stack Developer",
    org: "Freelance",
    detail: "Built production web products and payment workflows for small businesses while completing a B.Tech in Computer Science.",
  },
];

export const ENGINEERING_APPROACH = [
  { number: "01", title: "Design for the whole system", text: "Connect interface, APIs, data, integrations, and deployment around the workflow the product needs to support." },
  { number: "02", title: "Keep the architecture practical", text: "Make clear tradeoffs around tenancy, reliability, access, and the systems the team can operate." },
  { number: "03", title: "Lead close to the code", text: "Set technical direction, break down delivery, and stay hands-on through implementation and review." },
  { number: "04", title: "Own what ships", text: "Carry work through release and production, then use real failures and usage to guide the next improvement." },
];

export const SERVICES = [
  "Full-stack SaaS engineering",
  "AI, RAG & agent systems",
  "Backend APIs & integrations",
  "Multi-tenant architecture",
  "Technical direction & delivery",
  "Hands-on team leadership",
];

export const STACK = [
  "Next.js · React · TypeScript · Tailwind",
  "Node.js · Express · Python · Django",
  "PostgreSQL · Supabase · MongoDB · SQL",
  "OpenAI · Claude · Gemini · Vercel AI SDK",
  "RAG · AI agents · n8n · webhooks",
  "Docker · Vercel · Railway · CI/CD",
  "Stripe · ChargeBee · Dodo Payments",
];

export type NowItem = { text: string; live?: boolean; href?: string };
export const NOW: NowItem[] = [
  { text: "Building and improving Docsiv as founder and lead engineer", live: true },
  { text: "Onboarding early agencies to Docsiv", live: true },
  { text: "Leading engineering delivery for Govgrant.ca and SpeedIQ", live: true },
  { text: "Shipping AI, collaboration, and workflow improvements" },
  { text: "Writing engineering case studies", href: "/work/docsiv" },
  { text: "Open to senior full-stack, tech lead, and engineering lead roles" },
  { text: "Living in Bangalore and drinking too much filter coffee ☕" },
];
export const NOW_UPDATED = "Updated September 2026";

export const CONTACT = [
  { label: "Email", href: "mailto:ittsneeraj@gmail.com", handle: "ittsneeraj@gmail.com" },
  { label: "LinkedIn", href: LINKS.linkedin, handle: "in/neer4j" },
  { label: "GitHub", href: LINKS.github, handle: "@NEER4J" },
  { label: "X", href: LINKS.x, handle: "@NEER4J__" },
  { label: "Resume", href: LINKS.resume, handle: "PDF" },
];

export const CALL = "https://cal.com/neeraj-sharma/30min";
export const FOOTER_NOTE = "Still shipping.";
