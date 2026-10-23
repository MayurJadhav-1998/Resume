import { useEffect, useRef, useState, type ReactNode } from 'react';
import './portfolio.css';

const EMAIL = 'mayurjadhav1998@gmail.com';
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

function Label({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="mono flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-[var(--mute)]">
      <span className="text-[var(--volt)]">{n}</span>
      <span className="h-px w-10 bg-[var(--line)]" />
      {children}
    </div>
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
  const links = [['Impact', '#impact'], ['Work', '#work'], ['Career', '#career'], ['Stack', '#stack'], ['Contact', '#contact']];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--ink)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        <a href="#top" className="mono text-sm font-medium tracking-tight">mayur<span className="text-[var(--volt)]">.</span>jadhav</a>
        <nav className="mono hidden items-center gap-8 text-[12px] uppercase tracking-widest text-[var(--mute)] md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="transition-colors hover:text-[var(--volt)]">{l}</a>
          ))}
        </nav>
        <a href={TEL} className="btn-volt mono rounded-full px-4 py-2 text-[12px] font-medium uppercase tracking-wider">Call me</a>
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
            from schema-agnostic data layers at AT&amp;T to LLM apps that cut task time by 60%.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={`mailto:${EMAIL}`} className="btn-volt rounded-full px-7 py-4 text-[15px] font-semibold">Let’s talk →</a>
            <a href={RESUME} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-7 py-4 text-[15px] font-semibold transition-colors hover:border-[var(--bone)]">Résumé (PDF)</a>
          </div>
        </div>
        <Reveal delay={150}><AgentTrace /></Reveal>
      </div>
    </section>
  );
}

const STACK = ['LangGraph', 'LangChain', 'Deep Agents', 'RAG', 'Knowledge Graphs', 'AWS Bedrock', 'Neo4j', 'Pinecone', 'ChromaDB', 'FastAPI', 'Kubernetes', 'Terraform', 'Fine-tuning', 'Vector Embeddings'];

function Marquee() {
  const items = [...STACK, ...STACK];
  return (
    <div className="overflow-hidden border-y border-[var(--line)] py-5" aria-hidden>
      <div className="marquee mono gap-12 text-[13px] uppercase tracking-[0.2em] text-[var(--mute)]">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-12">{s}<span className="text-[var(--volt)]">✦</span></span>
        ))}
      </div>
    </div>
  );
}

const IMPACT = [
  { v: '60%', l: 'faster task completion with LLMs in enterprise apps', s: 'Infosys' },
  { v: '150%', l: 'ETL throughput gain after pipeline optimization', s: 'Xoriant' },
  { v: '25%', l: 'accuracy lift from RAG + advanced prompting', s: 'Infosys' },
  { v: '1 / 250', l: 'teams: first place at Datathon 2023', s: 'UT Arlington' },
];

function Impact() {
  return (
    <section id="impact" className="mx-auto max-w-[1280px] px-6 py-28">
      <Reveal><Label n="01">Receipts, not adjectives</Label></Reveal>
      <div className="mt-10 grid border-l border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
        {IMPACT.map((m, i) => (
          <Reveal key={m.v} delay={i * 90} className="row border-b border-r border-[var(--line)] p-7 pb-10">
            <div className="display text-[clamp(2.8rem,5vw,4.6rem)] font-extrabold text-[var(--volt)]">{m.v}</div>
            <p className="mt-5 text-[15px] leading-snug text-[#cfccc3]">{m.l}</p>
            <div className="mono mt-6 text-[11px] uppercase tracking-widest text-[var(--mute)]">{m.s}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const WORK = [
  {
    title: 'Shopify Customer Service AI',
    tag: 'Multi-agent support system',
    img: 'project-customer-service.jpg',
    body: 'A DAG-structured multi-agent LLM architecture that authenticates users, retrieves context and handles voice via Whisper transcription.',
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
      <Reveal><Label n="02">Selected work</Label></Reveal>
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

const CAREER = [
  {
    role: 'Gen AI Engineer', org: 'AT&T', when: '2025 — Now', where: 'Dallas, TX', now: true,
    pts: ['Architecting a schema-agnostic AI platform that connects diverse data sources', 'Building knowledge graphs with automated schema discovery and mapping', 'Shipping Deep Agents and executor bundles for unified queries across heterogeneous databases'],
  },
  {
    role: 'Senior Analyst, Data Science', org: 'Infosys', when: '2024 — 2025', where: 'Richardson, TX', now: false,
    pts: ['LLM integration into enterprise apps: 60% faster task completion', 'RAG with advanced prompting: +25% accuracy', 'AWS Bedrock infrastructure with auto-scaling and CI/CD'],
  },
  {
    role: 'Graduate Research & Teaching Assistant', org: 'UT Arlington', when: '2023 — 2024', where: 'Texas', now: false,
    pts: ['LLMs in university enterprise systems: +35% productivity', 'Fine-tuning and RAG across legal, financial and technical domains'],
  },
  {
    role: 'Software Engineer', org: 'Xoriant', when: '2020 — 2022', where: 'California', now: false,
    pts: ['Angular + Spring Boot + AWS portal: 40% shorter wait times', 'Talend ETL optimization: 150% higher throughput'],
  },
];

function Career() {
  return (
    <section id="career" className="mx-auto max-w-[1280px] px-6 py-28">
      <Reveal><Label n="03">Career log</Label></Reveal>
      <div className="mt-10 border-t border-[var(--line)]">
        {CAREER.map((c, i) => (
          <Reveal key={c.org} delay={i * 70}>
            <div className="row grid gap-6 border-b border-[var(--line)] px-2 py-10 md:grid-cols-[200px_1fr_1.3fr]">
              <div className="mono text-[13px] text-[var(--mute)]">
                <div className={c.now ? 'text-[var(--volt)]' : ''}>{c.when}</div>
                <div className="mt-1">{c.where}</div>
              </div>
              <div>
                <h3 className="display text-4xl font-extrabold md:text-5xl">{c.org}</h3>
                <div className="mt-3 text-[#b9b6ad]">{c.role}</div>
              </div>
              <ul className="space-y-3 text-[15px] leading-snug text-[#cfccc3]">
                {c.pts.map((p) => (
                  <li key={p} className="flex gap-3"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-[var(--volt)]" />{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const GROUPS = [
  ['AI / ML', 'LangGraph · LangChain · LLMs · RAG · Fine-tuning · Embeddings · NLP · Transformers · Deep Agents'],
  ['Cloud', 'AWS Bedrock · Azure · GCP · Docker · Kubernetes · Terraform · CI/CD'],
  ['Data', 'Python · SQL · Neo4j · Pinecone · ChromaDB · Knowledge Graphs · ETL'],
  ['Build', 'FastAPI · Streamlit · Angular · Spring Boot · Git · Agile'],
];
const CREDS = [
  ['M.S. Information Systems', 'UT Arlington · GPA 3.89'],
  ['B.E. Computer Science', 'University of Pune · GPA 3.60'],
  ['Infosys Certified Applied GenAI Professional', '2025'],
  ['AI Agents in LangGraph', 'Certification · 2024'],
  ['First place, Datathon 2023', '250 teams'],
];

function Stack() {
  return (
    <section id="stack" className="mx-auto grid max-w-[1280px] gap-16 px-6 py-20 lg:grid-cols-2">
      <div>
        <Reveal><Label n="04">Toolbox</Label></Reveal>
        <div className="mt-10 space-y-8">
          {GROUPS.map(([g, items], i) => (
            <Reveal key={g} delay={i * 80}>
              <div className="mono text-[11px] uppercase tracking-widest text-[var(--volt)]">{g}</div>
              <p className="mt-2 text-lg leading-relaxed text-[#cfccc3]">{items}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <div>
        <Reveal><Label n="05">Credentials</Label></Reveal>
        <div className="mt-10 border-t border-[var(--line)]">
          {CREDS.map(([a, b], i) => (
            <Reveal key={a} delay={i * 60}>
              <div className="row flex items-baseline justify-between gap-6 border-b border-[var(--line)] px-2 py-5">
                <span className="text-lg font-semibold">{a}</span>
                <span className="mono shrink-0 text-[12px] text-[var(--mute)]">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const cards = [
    ['Call', PHONE, TEL],
    ['Email', EMAIL, `mailto:${EMAIL}`],
    ['LinkedIn', 'in/mayurjv', LINKEDIN],
  ];
  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-6 pb-16 pt-28">
      <div className="rounded-3xl bg-[var(--volt)] p-8 text-[var(--ink)] md:p-16">
        <div className="mono text-[12px] uppercase tracking-[0.2em]">Hiring for Gen AI / agents / platform?</div>
        <h2 className="display mt-6 text-[clamp(3rem,9vw,8rem)] font-extrabold">Let’s build<br />something real.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map(([k, v, h]) => (
            <a key={k} href={h} target={k === 'LinkedIn' ? '_blank' : undefined} rel="noreferrer" className="group rounded-2xl border-2 border-[var(--ink)] p-6 transition-colors hover:bg-[var(--ink)] hover:text-[var(--volt)]">
              <div className="mono text-[11px] uppercase tracking-widest opacity-70">{k}</div>
              <div className="mt-2 break-all text-xl font-semibold">{v} <span className="inline-block transition-transform group-hover:translate-x-1">→</span></div>
            </a>
          ))}
        </div>
      </div>
      <footer className="mono mt-10 flex flex-wrap justify-between gap-4 text-[12px] text-[var(--mute)]">
        <span>© {new Date().getFullYear()} Mayur Jadhav</span>
        <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-[var(--volt)]">GitHub ↗</a>
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <div className="pf">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Impact />
        <Work />
        <Career />
        <Stack />
        <Contact />
      </main>
    </div>
  );
}
