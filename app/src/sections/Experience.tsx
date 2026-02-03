import { useScrollReveal } from '../hooks/useScrollReveal';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  skills: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    role: 'Gen AI Engineer',
    company: 'AT&T',
    period: 'Sept 2025 - Present',
    location: 'Dallas, Texas',
    current: true,
    achievements: [
      'Architecting a schema-agnostic AI platform enabling seamless connectivity across diverse data sources',
      'Building dynamic knowledge graphs with automated schema discovery and mapping',
      'Developing executor bundles for unified query execution across heterogeneous databases',
      'Implementing Deep Agents with autonomous decision-making capabilities for complex data operations',
      'Creating adaptive AI pipelines that learn and optimize from user interactions',
    ],
    skills: [
      'LangGraph',
      'Deep Agents',
      'Knowledge Graphs',
      'Schema Discovery',
      'Vector DBs',
    ],
  },
  {
    role: 'Senior Analyst - Data Science',
    company: 'Infosys',
    period: 'Jul 2024 - Nov 2025',
    location: 'Richardson, Texas',
    achievements: [
      'Pioneered LLM integration into enterprise applications achieving 60% faster task completion',
      'Architected RAG systems with advanced prompting strategies, improving accuracy by 25%',
      'Deployed generative AI models (GPT-3, PaLM, LaMDA) with robust security and ethical guardrails',
      'Built AWS Bedrock infrastructure with auto-scaling and CI/CD pipelines for production AI',
    ],
    skills: ['LLMs', 'RAG', 'AWS Bedrock', 'CI/CD', 'Prompt Engineering'],
  },
  {
    role: 'Graduate Research & Teaching Assistant',
    company: 'University of Texas at Arlington',
    period: 'Aug 2023 - May 2024',
    location: 'Texas',
    achievements: [
      'Integrated LLMs into university enterprise systems, boosting productivity by 35%',
      'Developed custom prompting and fine-tuning strategies for domain-specific use cases',
      'Implemented RAG and transfer learning across legal, financial, and technical domains',
    ],
    skills: ['RAG', 'Fine-tuning', 'Transfer Learning', 'LLM Integration'],
  },
  {
    role: 'Software Engineer',
    company: 'Xoriant',
    period: 'Nov 2020 - Jul 2022',
    location: 'California',
    achievements: [
      'Built internal portal with Angular, Spring Boot, AWS, reducing user wait times by 40%',
      'Optimized ETL pipelines with Talend, improving throughput by 150%',
      'Created dynamic dashboards and data visualization solutions',
    ],
    skills: ['Angular', 'Spring Boot', 'AWS', 'Talend ETL', 'MySQL'],
  },
];

function ExperienceCard({
  experience,
  index,
  isRevealed,
}: {
  experience: ExperienceItem;
  index: number;
  isRevealed: boolean;
}) {
  return (
    <div
      className={`relative transition-all duration-600 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index + 1) * 100}ms` }}
    >
      <div 
        className="p-6 lg:p-8 glass rounded-2xl card-hover group"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            <div 
              className={`p-3 rounded-xl transition-all duration-300 ${
                experience.current 
                  ? 'bg-[var(--accent-blue)]' 
                  : 'group-hover:bg-[var(--accent-blue)]'
              }`}
              style={{ 
                backgroundColor: experience.current ? 'var(--accent-blue)' : 'rgba(0, 113, 227, 0.1)'
              }}
            >
              <Briefcase 
                className={`w-6 h-6 transition-colors ${
                  experience.current ? 'text-white' : 'text-[var(--accent-blue)] group-hover:text-white'
                }`}
              />
            </div>
            <div>
              <h3 
                className="text-xl font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                {experience.role}
              </h3>
              <p 
                className="font-medium"
                style={{ color: 'var(--accent-blue)' }}
              >
                {experience.company}
              </p>
            </div>
          </div>
          {experience.current && (
            <span 
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: 'rgba(0, 113, 227, 0.1)',
                color: 'var(--accent-blue)'
              }}
            >
              Current
            </span>
          )}
        </div>

        {/* Meta */}
        <div 
          className="flex flex-wrap gap-4 mb-6 text-sm"
          style={{ color: 'var(--text-secondary)' }}
        >
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {experience.period}
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            {experience.location}
          </div>
        </div>

        {/* Achievements */}
        <ul className="space-y-3 mb-6">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-3">
              <span 
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: 'var(--accent-blue)' }}
              />
              <span 
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {achievement}
              </span>
            </li>
          ))}
        </ul>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map(skill => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full text-xs border skill-tag"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)'
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container-apple">
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
              Experience
            </span>
            <div className="w-8 h-[2px] bg-[var(--accent-blue)]" />
          </div>

          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p 
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            A track record of delivering impactful AI solutions across Fortune 500 
            companies and innovative startups.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company + experience.period}
              experience={experience}
              index={index}
              isRevealed={isRevealed}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
