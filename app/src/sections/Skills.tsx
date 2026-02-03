import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Brain,
  Cloud,
  Database,
  Code2,
  Layers,
  Cpu,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    icon: <Brain className="w-5 h-5" />,
    skills: [
      'LangGraph',
      'LangChain',
      'LLMs',
      'RAG',
      'Fine-tuning',
      'Vector Embeddings',
      'NLP',
      'Transformers',
      'Deep Agents',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      'AWS Bedrock',
      'Azure',
      'GCP',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Terraform',
    ],
  },
  {
    title: 'Data & Databases',
    icon: <Database className="w-5 h-5" />,
    skills: [
      'Python',
      'SQL',
      'Vector DBs',
      'Knowledge Graphs',
      'Neo4j',
      'Pinecone',
      'ChromaDB',
      'ETL Pipelines',
    ],
  },
  {
    title: 'Frameworks & Tools',
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      'FastAPI',
      'Streamlit',
      'Angular',
      'Spring Boot',
      'Git',
      'JIRA',
      'Agile',
    ],
  },
  {
    title: 'Data Engineering',
    icon: <Layers className="w-5 h-5" />,
    skills: [
      'Talend ETL',
      'Apache Spark',
      'Data Modeling',
      'Tableau',
      'Data Visualization',
    ],
  },
  {
    title: 'Core Concepts',
    icon: <Cpu className="w-5 h-5" />,
    skills: [
      'System Design',
      'Microservices',
      'REST APIs',
      'GraphQL',
      'Event-Driven Architecture',
    ],
  },
];

function SkillCategoryCard({
  category,
  index,
  isRevealed,
}: {
  category: SkillCategory;
  index: number;
  isRevealed: boolean;
}) {
  return (
    <div
      className={`p-6 glass rounded-2xl card-hover group transition-all duration-600 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index + 1) * 80}ms` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div 
          className="p-2.5 rounded-xl transition-all duration-300 group-hover:bg-[var(--accent-blue)]"
          style={{ 
            backgroundColor: 'rgba(0, 113, 227, 0.1)',
            color: 'var(--accent-blue)'
          }}
        >
          {category.icon}
        </div>
        <h3 
          className="text-base font-semibold"
          style={{ color: 'var(--text-primary)' }}
        >
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-full text-sm border skill-tag"
            style={{ 
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)',
              animationDelay: `${skillIndex * 30}ms`
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="skills"
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
              Skills
            </span>
            <div className="w-8 h-[2px] bg-[var(--accent-blue)]" />
          </div>

          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p 
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            A comprehensive toolkit spanning AI/ML, cloud infrastructure, and 
            software engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              index={index}
              isRevealed={isRevealed}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
