import { useEffect } from 'react';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';
import { TrendingUp, Zap, Target, GraduationCap } from 'lucide-react';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  isRevealed: boolean;
}

function StatCard({ value, suffix, label, icon, isRevealed }: StatProps) {
  const { count, startAnimation } = useCountUp(value, 2500);

  useEffect(() => {
    if (isRevealed) {
      const timer = setTimeout(startAnimation, 300);
      return () => clearTimeout(timer);
    }
  }, [isRevealed, startAnimation]);

  return (
    <div 
      className="p-6 glass rounded-2xl card-hover group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="p-2.5 rounded-xl transition-all duration-300 group-hover:bg-[var(--accent-blue)]"
          style={{ 
            backgroundColor: 'rgba(0, 113, 227, 0.1)',
            color: 'var(--accent-blue)'
          }}
        >
          {icon}
        </div>
        <span 
          className="text-3xl font-bold"
          style={{ color: 'var(--text-primary)' }}
        >
          {count}
          {suffix}
        </span>
      </div>
      <p style={{ color: 'var(--text-secondary)' }}>{label}</p>
    </div>
  );
}

export default function About() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();

  const stats = [
    {
      value: 60,
      suffix: '%',
      label: 'Faster Task Completion',
      icon: <Zap className="w-5 h-5" />,
    },
    {
      value: 25,
      suffix: '%',
      label: 'Improved Accuracy',
      icon: <Target className="w-5 h-5" />,
    },
    {
      value: 40,
      suffix: '%',
      label: 'Workflow Efficiency',
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  const highlights = [
    'LangGraph',
    'RAG Architecture',
    'Deep Agents',
    'Knowledge Graphs',
    'Cloud-Native AI',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container-apple">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div
            className={`transition-all duration-600 ${
              isRevealed
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[var(--accent-blue)]" />
              <span 
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: 'var(--accent-blue)' }}
              >
                About Me
              </span>
            </div>

            <h2 
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Bridging AI innovation with{' '}
              <span className="text-gradient">business impact</span>
            </h2>

            <div className="mt-8 space-y-5 leading-relaxed">
              <p style={{ color: 'var(--text-secondary)' }}>
                I'm a Gen AI Engineer with a passion for building enterprise-grade 
                AI systems that deliver measurable business impact. With a Master's in 
                Information Systems from UT Arlington (GPA: 3.9/4.0) and hands-on 
                experience across Fortune 500 companies, I bring a unique blend of 
                technical depth and strategic thinking.
              </p>

              <p style={{ color: 'var(--text-secondary)' }}>
                My expertise spans the full AI lifecycle—from architecting RAG pipelines 
                and fine-tuning LLMs to deploying scalable solutions on cloud infrastructure. 
                I've consistently delivered{' '}
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  25-60% performance improvements
                </span>{' '}
                through innovative AI implementations.
              </p>

              <p style={{ color: 'var(--text-secondary)' }}>
                Currently at AT&T, I'm pioneering a schema-agnostic AI platform that 
                breaks down data silos through intelligent abstraction layers, enabling 
                seamless connectivity across diverse enterprise data sources.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((highlight, index) => (
                <span
                  key={highlight}
                  className="px-4 py-2 rounded-full text-sm border skill-tag transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`transition-all duration-600 ${
                  isRevealed
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <StatCard {...stat} isRevealed={isRevealed} />
              </div>
            ))}

            {/* Education Card */}
            <div
              className={`p-6 glass rounded-2xl transition-all duration-600 ${
                isRevealed
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap 
                  className="w-5 h-5"
                  style={{ color: 'var(--accent-blue)' }}
                />
                <h3 
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                <div className="group">
                  <p 
                    className="font-medium transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    MS Information Systems
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    UT Arlington • GPA: 3.9/4.0
                  </p>
                </div>
                <div className="w-full h-px" style={{ backgroundColor: 'var(--border-color)' }} />
                <div className="group">
                  <p 
                    className="font-medium transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    BE Computer Science
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Sinhgad College of Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
