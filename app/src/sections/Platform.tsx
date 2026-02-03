import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Network,
  Bot,
  Sparkles,
  Workflow,
} from 'lucide-react';

const features = [
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Dynamic Knowledge Sources',
    description:
      'Auto-discover and map schemas across disparate systems. Our intelligent crawlers analyze database structures, APIs, and file systems to build comprehensive knowledge graphs without manual configuration.',
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: 'Executor Bundles',
    description:
      'Unified query execution engine that translates natural language to optimized queries across SQL, NoSQL, graph databases, and REST APIs. Single interface, infinite possibilities.',
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'Deep Agents',
    description:
      'Autonomous AI agents powered by LangGraph that reason, plan, and execute complex multi-step operations. Agents break down tasks, retrieve relevant data, and synthesize insights with minimal human intervention.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Adaptive Learning',
    description:
      'Self-improving pipelines that optimize based on usage patterns. The system learns from queries, caches frequently accessed data, and continuously refines its understanding of user intent.',
  },
];

const techStack = [
  'LangGraph',
  'Vector DBs',
  'LLMs',
  'Knowledge Graphs',
  'Neo4j',
  'Pinecone',
  'FastAPI',
  'Kubernetes',
];

export default function Platform() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="platform"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{ 
          background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)',
          filter: 'blur(120px)'
        }}
      />

      <div className="relative container-apple">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-600 ${
            isRevealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[var(--accent-blue)]" />
            <span 
              className="text-sm font-medium uppercase tracking-wider"
              style={{ color: 'var(--accent-blue)' }}
            >
              Current Work
            </span>
            <div className="w-8 h-[2px] bg-[var(--accent-blue)]" />
          </div>

          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Schema-Agnostic <span className="text-gradient">AI Platform</span>
          </h2>
          <p 
            className="mt-4 text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            What I'm building at AT&T — a next-generation AI platform that breaks 
            down data silos through intelligent abstraction layers.
          </p>
        </div>

        {/* Platform Visual */}
        <div
          className={`mb-16 transition-all duration-600 ${
            isRevealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div 
            className="relative rounded-3xl overflow-hidden group"
            style={{ border: '1px solid var(--border-color)' }}
          >
            <img
              src="platform-visual.jpg"
              alt="Schema-Agnostic AI Platform"
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 40%)'
              }}
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`p-6 glass rounded-2xl card-hover group transition-all duration-600 ${
                isRevealed
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="p-3 rounded-xl transition-all duration-300 group-hover:bg-[var(--accent-blue)]"
                  style={{ 
                    backgroundColor: 'rgba(0, 113, 227, 0.1)',
                    color: 'var(--accent-blue)'
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 
                    className="text-lg font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div
          className={`text-center transition-all duration-600 ${
            isRevealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p 
            className="text-sm mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            Built with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm border skill-tag"
                style={{ 
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                  animationDelay: `${index * 50}ms`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
