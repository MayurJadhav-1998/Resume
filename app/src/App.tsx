import { useEffect, useRef, useState, type ReactNode } from 'react';
import './portfolio.css';

const EMAIL = 'mayurjadhavsm@gmail.com';
const PHONE = '+1 (682) 374-5375';
const TEL = `tel:${PHONE.replace(/[^+\d]/g, '')}`;
const BASE = import.meta.env.BASE_URL;
const RESUME = `${BASE}Mayur_Jadhav_Gen_AI_2026.pdf`;
const LINKEDIN = 'https://linkedin.com/in/mayurjv';
const GITHUB = 'https://github.com/MayurJadhav-1998';

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`rise ${on ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="mono text-[12px] uppercase tracking-[0.18em] text-[var(--mute)]">{children}</div>;
}

function GitHubIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

/* ---------- Agent trace: code-native hero visual ---------- */
const TRACE: { t: string; c: string }[] = [
  { t: '$ run mayur.agent --env production', c: 'text-[var(--bone)]' },
  { t: '› planner     parsing intent · 3 sub-goals', c: 'text-[var(--mute)]' },
  { t: '› graph       schema discovered · entities mapped', c: 'text-[var(--mute)]' },
  { t: '› retriever   hybrid search · vector + knowledge graph', c: 'text-[var(--mute)]' },
  { t: '› executor    query bundle → heterogeneous DBs', c: 'text-[var(--mute)]' },
  { t: '› guardrails  policy check passed', c: 'text-[var(--mute)]' },
  { t: '✓ answer grounded · hired.', c: 'text-[var(--volt)]' },
];

function AgentTrace() {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= TRACE.length) {
      const r = setTimeout(() => setN(0), 4500);
      return () => clearTimeout(r);
    }
    const id = setTimeout(() => setN(n + 1), n === 0 ? 700 : 650);
    return () => clearTimeout(id);
  }, [n]);
  return (
    <div className="mono overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--panel)] text-[13px] shadow-[0_30px_80px_-30px_rgba(212,255,58,.25)]">
      <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3 text-[11px] text-[var(--mute)]">
        <span className="flex items-center gap-2"><i className="live" /> agent.trace</span>
        <span>langgraph · deep-agents</span>
      </div>
      <div className="min-h-[250px] space-y-2.5 p-5 leading-relaxed">
        {TRACE.slice(0, n).map((l, i) => (
          <div key={i} className={l.c}>{l.t}</div>
        ))}
        {n < TRACE.length && <span className="caret" />}
      </div>
    </div>
  );
}

function Nav() {
  const links = [['Story', '#story'], ['Work', '#work'], ['Career', '#career'], ['Toolbox', '#toolbox'], ['Contact', '#contact']];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--ink)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        <a href="#top" className="mono text-sm font-medium tracking-tight">mayur<span className="text-[var(--volt)]">.</span>jadhav</a>
        <nav className="mono hidden items-center gap-8 text-[12px] uppercase tracking-widest text-[var(--mute)] md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="quiet">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="quiet hidden text-[var(--mute)] sm:block"><GitHubIcon size={20} /></a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="quiet hidden text-[var(--mute)] sm:block"><LinkedInIcon size={20} /></a>
          <a href={TEL} className="btn-volt mono rounded-full px-4 py-2 text-[12px] font-medium uppercase tracking-wider">Call me</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1280px] px-6 pb-20 pt-36 md:pt-44">
      <div className="mono mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.18em] text-[var(--mute)]">
        <span className="flex items-center gap-2 text-[var(--bone)]"><i className="live" /> Open to new roles</span>
        <span>Dallas, TX</span>
        <span>Gen AI Engineer @ AT&amp;T</span>
      </div>
      <div className="grid items-end gap-14 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h1 className="display text-[clamp(3.2rem,8.6vw,8rem)] font-extrabold">
            I ship AI
            <br />
            <span className="text-[var(--volt)]">that survives</span>
            <br />
            production.
          </h1>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-[#b9b6ad]">
            Gen AI engineer building agentic platforms, RAG systems and knowledge graphs for enterprises:
            from secure, MCP-connected agents at AT&amp;T to a hybrid RAG platform that cut query latency by 23% at Infosys.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-volt inline-block rounded-full px-7 py-4 text-[15px] font-semibold">Let’s talk →</a>
            <a href={RESUME} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-7 py-4 text-[15px] font-semibold transition-colors hover:border-[var(--bone)]">Résumé (PDF)</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={GITHUB} target="_blank" rel="noreferrer" className="mono inline-flex items-center gap-2.5 rounded-full border border-[var(--line)] px-4 py-2.5 text-[12px] uppercase tracking-widest transition-colors hover:border-[var(--volt)] hover:text-[var(--volt)]"><GitHubIcon size={16} />GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="mono inline-flex items-center gap-2.5 rounded-full border border-[var(--line)] px-4 py-2.5 text-[12px] uppercase tracking-widest transition-colors hover:border-[var(--volt)] hover:text-[var(--volt)]"><LinkedInIcon size={16} />LinkedIn</a>
          </div>
        </div>
        <Reveal delay={150}><AgentTrace /></Reveal>
      </div>
    </section>
  );
}

/* ---------- Story: the numbers, told as sentences ---------- */
// [text, isNumber]; numbers are the figures worth remembering
const STORY: [string, boolean][] = [
  ['At AT&T I build agents that learn how people query: analytics productivity', false],
  ['up 42%,', true],
  ['query accuracy', false],
  ['up 28%,', true],
  ['plus a browser agent that cut manual data collection by', false],
  ['40%.', true],
  ['At Infosys, a hybrid RAG platform across GCP and Azure answered queries', false],
  ['23% faster,', true],
  ['and few-shot prompting with re-ranking lifted search relevance', false],
  ['28%.', true],
  ['Before that I led an internal portal at Xoriant on Angular, Spring Boot and AWS. In 2023 my team took', false],
  ['first place out of 250', true],
  ['at Datathon.', false],
];

const STORY_WORDS = STORY.flatMap(([text, num]) =>
  text.split(' ').filter(Boolean).map((w) => ({ w, num })),
);

function Story() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setLit(STORY_WORDS.length);
      return;
    }
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // starts as the paragraph enters the lower third, finishes as its end reaches mid-screen
      const p = (vh * 0.8 - r.top) / (r.height + vh * 0.8 - vh * 0.45);
      setLit(Math.round(Math.min(1, Math.max(0, p)) * STORY_WORDS.length));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section id="story" className="mx-auto max-w-[1100px] px-6 py-32">
      <Eyebrow>The short version</Eyebrow>
      <p ref={ref} className="serif mt-8 text-[clamp(1.7rem,3.5vw,3.1rem)] leading-[1.22]">
        {STORY_WORDS.map(({ w, num }, i) => (
          <span key={i} className={`sw ${num ? 'num' : ''} ${i < lit ? 'lit' : ''}`}>{w}{' '}</span>
        ))}
      </p>
    </section>
  );
}

const WORK = [
  {
    title: 'Shopify Customer Service AI',
    tag: 'Multi-agent support system',
    img: 'project-customer-service.jpg',
    body: 'Multi-agent LLM architecture for intelligent customer support with DAG-structured workflows, authentication, context retrieval, and audio transcription capabilities.',
    stack: ['LangChain', 'RAG', 'OpenAI Whisper', 'Streamlit'],
  },
  {
    title: 'AI Resume Optimizer',
    tag: 'ATS-aware LLM app',
    img: 'project-resume.jpg',
    body: 'Keyword analysis and rewrite suggestions with OpenAI and Gemini Pro, lifting ATS match rates by 50%.',
    stack: ['OpenAI', 'Gemini Pro', 'Python', 'AWS'],
  },
];

function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1280px] px-6 py-20">
      <Reveal><Eyebrow>Selected work</Eyebrow></Reveal>
      <Reveal>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2.4rem,5.5vw,5rem)] font-extrabold">Things I built, end to end.</h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {WORK.map((w, i) => (
          <Reveal key={w.title} delay={i * 120}>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)] transition-colors hover:border-[var(--volt)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={`${BASE}${w.img}`} alt={w.title} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)] to-transparent" />
              </div>
              <div className="p-7">
                <div className="mono text-[11px] uppercase tracking-widest text-[var(--volt)]">{w.tag}</div>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-3xl font-semibold tracking-tight">{w.title}</h3>
                  <span className="text-2xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                </div>
                <p className="mt-4 leading-relaxed text-[#b9b6ad]">{w.body}</p>
                <div className="mono mt-6 flex flex-wrap gap-2 text-[11px] text-[var(--mute)]">
                  {w.stack.map((s) => (
                    <span key={s} className="rounded-full border border-[var(--line)] px-3 py-1">{s}</span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Career: one open at a time ---------- */
const CAREER = [
  {
    role: 'Gen AI Engineer', org: 'AT&T', when: 'Sep 2025 – now', where: 'Dallas, TX',
    pts: ['Secured Model Context Protocol integration with LangGraph: authentication, rate limiting and encrypted channels, 100% compliant with enterprise security standards across 15+ tools', 'Deep Agents with autonomous decision-making and adaptive pipelines: +42% analytics productivity, +28% query accuracy', 'Playwright browser agent for form filling, scraping and report downloads: 40% less manual data collection'],
  },
  {
    role: 'Gen AI Engineer', org: 'Infosys', when: 'Jun 2024 – Sep 2025', where: 'Richardson, TX',
    pts: ['Hybrid RAG platform on GCP BigQuery and Azure AI Search: 23% lower query latency', 'Dynamic few-shot prompting with HyDE, MMR and LLM re-ranking: +12% insight accuracy, +28% search relevance', 'AI agents for report generation and data analysis: 15% less processing time'],
  },
  {
    role: 'Software Developer', org: 'Xoriant', when: 'Nov 2020 – Jul 2022', where: 'Remote',
    pts: ['Led an internal portal for ACCORD Group on Angular, Spring Boot, AWS, MySQL and REST APIs', 'Ran on AWS EC2, EMR, DynamoDB and S3 for scalable, highly available deployments'],
  },
  {
    role: 'Web Developer', org: 'Webster Solutions', when: 'Jan 2020 – Aug 2020', where: 'Maharashtra, IN',
    pts: ['Built websites for clients, managing code with Git'],
  },
];

function Career() {
  const [open, setOpen] = useState(0);
  return (
    <section id="career" className="mx-auto max-w-[1280px] px-6 py-28">
      <Reveal>
        <Eyebrow>Where I’ve worked</Eyebrow>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2.4rem,5.5vw,5rem)] font-extrabold">Four jobs, one thread: make data answer back.</h2>
      </Reveal>
      <div className="mt-14 border-t border-[var(--line)]">
        {CAREER.map((c, i) => {
          const isOpen = open === i;
          return (
            <div key={c.org} className={`job border-b border-[var(--line)] ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`job-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-7 text-left"
              >
                <span className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <span className="org display text-[clamp(2.2rem,6vw,5.2rem)] font-extrabold">{c.org}</span>
                  {i === 0 && <span className="hand -rotate-3 text-2xl text-[var(--volt)]">← where I am now</span>}
                </span>
                <span className="mono hidden shrink-0 text-right text-[12px] leading-relaxed text-[var(--mute)] sm:block">
                  {c.role}<br />{c.when}
                </span>
                <span className="plus mono text-3xl text-[var(--mute)]" aria-hidden>+</span>
              </button>
              <div id={`job-${i}`} role="region" className={`panel ${isOpen ? 'open' : ''}`}>
                <div>
                  <div className="grid gap-6 pb-10 md:grid-cols-[1fr_1.4fr]">
                    <div className="mono text-[12px] leading-relaxed text-[var(--mute)] sm:hidden">{c.role} · {c.when}</div>
                    <div className="mono hidden text-[12px] text-[var(--mute)] md:block">{c.where}</div>
                    <ul className="space-y-3 text-[17px] leading-snug text-[#cfccc3]">
                      {c.pts.map((p) => (
                        <li key={p} className="flex gap-3"><span className="mt-[9px] h-px w-4 shrink-0 bg-[var(--volt)]" />{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Toolbox: the stack as the path a request takes ---------- */
interface Layer {
  name: string;
  line: string;
  tools: string[];
  proof: { where: string; text: ReactNode }[];
}

const LAYERS: Layer[] = [
  {
    name: 'Orchestrate',
    line: 'Decide what happens next, safely.',
    tools: ['LangGraph', 'LangChain', 'Deep Agents', 'Model Context Protocol'],
    proof: [
      { where: 'AT&T', text: <>Secured MCP server connections for LangGraph workflows with authentication, rate limiting and encrypted channels: <em>100%</em> compliance with enterprise security standards across <em>15+</em> external tools and services.</> },
    ],
  },
  {
    name: 'Act',
    line: 'Let agents do the work, not just talk about it.',
    tools: ['Deep Agents', 'Playwright', 'Browser Use agent', 'Adaptive pipelines'],
    proof: [
      { where: 'AT&T', text: <>Deep Agents that learn from how people query: <em>+42%</em> cross-functional analytics productivity and <em>+28%</em> query accuracy on domain-specific requests.</> },
      { where: 'AT&T', text: <>A Playwright browser agent on LangGraph that fills forms, scrapes and downloads reports, cutting manual data collection by <em>40%</em>.</> },
      { where: 'Infosys', text: <>Report-generation agents that cut processing time by <em>15%</em>.</> },
    ],
  },
  {
    name: 'Retrieve',
    line: 'Find the right context before the model speaks.',
    tools: ['Hybrid RAG', 'HyDE', 'MMR', 'LLM re-ranking', 'Dynamic few-shot', 'Azure AI Search', 'Knowledge graphs', 'Neo4j', 'Pinecone', 'ChromaDB'],
    proof: [
      { where: 'Infosys', text: <>A hybrid RAG platform across GCP and Azure, using BigQuery and Azure AI Search: <em>23%</em> lower query latency.</> },
      { where: 'Infosys', text: <>Dynamic few-shot prompting with HyDE, MMR and LLM re-ranking: <em>+12%</em> accuracy in generated insights and <em>+28%</em> search relevance.</> },
    ],
  },
  {
    name: 'Run',
    line: 'Keep it up, keep it affordable.',
    tools: ['GCP', 'BigQuery', 'Azure', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Python', 'FastAPI', 'Streamlit'],
    proof: [
      { where: 'Infosys → Xoriant', text: <>Multi-cloud in practice: GCP and Azure for the RAG platform, and AWS (EC2, EMR, DynamoDB, S3) for high-availability application deployment.</> },
    ],
  },
  {
    name: 'Build',
    line: 'Where I started, and why the boring parts matter.',
    tools: ['Angular', 'Spring Boot', 'REST APIs', 'MySQL', 'AWS', 'Git'],
    proof: [
      { where: 'Xoriant', text: <>Led an internal portal for ACCORD Group, from Angular front end to Spring Boot services and MySQL, handling client and policy management with secure, cloud-based data.</> },
    ],
  },
];

const SCHOOL: [string, string][] = [
  ['M.S. Information Systems, UT Arlington', '3.89 GPA · 2024'],
  ['B.E. Computer Science, University of Pune', '3.60 GPA · 2020'],
  ['Infosys Certified Applied Generative AI Professional', 'May 2025'],
  ['AI Agents in LangGraph', 'Jul 2024'],
  ['First place, Datathon 2023', '250 teams'],
  ['Star Employee Award, from the client', 'Oct 2022'],
];

function Toolbox() {
  const [active, setActive] = useState(0);
  const layer = LAYERS[active];
  return (
    <section id="toolbox" className="mx-auto max-w-[1280px] px-6 py-28">
      <Reveal>
        <Eyebrow>Toolbox</Eyebrow>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2.4rem,5.5vw,5rem)] font-extrabold">Follow a request through my stack.</h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#b9b6ad]">
          Every layer below is something I’ve shipped, with the result that came out of it. Pick one.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.3fr]">
        <Reveal>
          <ol className="relative" role="tablist" aria-label="Stack layers">
            <span className="absolute bottom-6 left-[7px] top-6 w-px bg-[var(--line)]" aria-hidden />
            {LAYERS.map((l, i) => {
              const on = i === active;
              return (
                <li key={l.name} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-controls="layer-panel"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group relative flex w-full items-start gap-6 py-4 text-left"
                  >
                    <span className={`relative z-10 mt-[14px] h-[15px] w-[15px] shrink-0 rounded-full border transition-all duration-300 ${on ? 'scale-125 border-[var(--volt)] bg-[var(--volt)]' : 'border-[var(--mute)] bg-[var(--ink)] group-hover:border-[var(--bone)]'}`} />
                    <span>
                      <span className={`display block text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold transition-colors duration-300 ${on ? 'text-[var(--volt)]' : 'text-[#55555b] group-hover:text-[var(--bone)]'}`}>{l.name}</span>
                      <span className={`mt-1 block text-[15px] transition-all duration-300 ${on ? 'max-h-10 text-[var(--mute)] opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>{l.line}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <Reveal delay={120}>
          <div id="layer-panel" role="tabpanel" className="sticky top-24 rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-7 md:p-10">
            <div key={layer.name} className="swap">
              <div className="mono flex flex-wrap gap-2 text-[12px]">
                {layer.tools.map((t) => (
                  <span key={t} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[#cfccc3]">{t}</span>
                ))}
              </div>
              <div className="mt-10 space-y-8">
                {layer.proof.map((p, i) => (
                  <div key={i}>
                    <div className="mono text-[11px] uppercase tracking-widest text-[var(--mute)]">At {p.where}</div>
                    <p className="serif mt-2 text-[clamp(1.25rem,2vw,1.7rem)] leading-snug text-[#a9a69f] [&_em]:not-italic [&_em]:text-[var(--volt)]">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-24 border-t border-[var(--line)] pt-10">
          <Eyebrow>School and proof</Eyebrow>
          <dl className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {SCHOOL.map(([a, b]) => (
              <div key={a}>
                <dt className="text-[15px] text-[#cfccc3]">{a}</dt>
                <dd className="mono mt-0.5 text-[12px] text-[var(--mute)]">{b}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };
  return (
    <section id="contact" className="border-t border-[var(--line)] px-6 pb-12 pt-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <p className="serif max-w-2xl text-[clamp(1.5rem,2.6vw,2.2rem)] leading-snug text-[#8d8a83]">
            Hiring for Gen AI, agent or data-platform work? <span className="text-[var(--bone)]">Call me.</span>
          </p>
          <a href={TEL} className="callme display mt-10 inline-block text-[clamp(2.6rem,9.5vw,9rem)] font-extrabold">{PHONE}</a>
          <div className="hand mt-2 -rotate-1 text-2xl text-[var(--volt)]">↑ yes, that’s my real number</div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-20 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--line)] pt-10">
            <span className="mono text-[12px] uppercase tracking-widest text-[var(--mute)]">Or email</span>
            <a href={`mailto:${EMAIL}`} className="callme text-[clamp(1.4rem,3.2vw,2.6rem)] font-semibold tracking-tight">{EMAIL}</a>
            <button type="button" onClick={copyEmail} className="mono rounded-full border border-[var(--line)] px-4 py-2 text-[12px] uppercase tracking-widest transition-colors hover:border-[var(--volt)] hover:text-[var(--volt)]" aria-live="polite">
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { name: 'LinkedIn', handle: 'in/mayurjv', href: LINKEDIN, icon: <LinkedInIcon /> },
              { name: 'GitHub', handle: 'MayurJadhav-1998', href: GITHUB, icon: <GitHubIcon /> },
            ].map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="group flex items-center gap-5 rounded-2xl border border-[var(--line)] p-6 transition-colors hover:border-[var(--volt)] hover:bg-[var(--panel)]">
                <span className="text-[var(--bone)] transition-colors group-hover:text-[var(--volt)]">{s.icon}</span>
                <span>
                  <span className="block text-2xl font-semibold tracking-tight">{s.name}</span>
                  <span className="mono mt-1 block text-[12px] text-[var(--mute)]">{s.handle}</span>
                </span>
                <span className="ml-auto text-2xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mono mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] uppercase tracking-widest text-[var(--mute)]">
          <a href={RESUME} target="_blank" rel="noreferrer" className="quiet">Résumé (PDF) ↗</a>
          <span className="ml-auto normal-case tracking-normal">Designed and coded by me · {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="pf">
      <Nav />
      <main>
        <Hero />
        <Story />
        <Work />
        <Career />
        <Toolbox />
        <Contact />
      </main>
    </div>
  );
}
