import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  techStack: string[];
  metric?: string;
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: 'AI Resume Optimizer',
    subtitle: 'ATS Resume LLM App',
    description:
      'Advanced resume optimization using OpenAI APIs with intelligent keyword analysis and formatting suggestions. Achieves significant improvement in ATS match rates through AI-powered content enhancement.',
    image: '/project-resume.jpg',
    techStack: ['OpenAI APIs', 'Python', 'AWS', 'Google Gemini Pro'],
    metric: '50% improvement in ATS match rates',
    githubUrl: 'https://github.com/MayurJadhav-1998',
    liveUrl: '#',
  },
  {
    title: 'Shopify Customer Service AI',
    subtitle: 'Multi-Agent Support System',
    description:
      'Multi-agent LLM architecture for intelligent customer support with DAG-structured workflows, authentication, context retrieval, and audio transcription capabilities.',
    image: '/project-customer-service.jpg',
    techStack: ['LangChain', 'RAG', 'OpenAI Whisper', 'Streamlit'],
    features: ['Multi-agent Architecture', 'Audio Transcription'],
    githubUrl: 'https://github.com/MayurJadhav-1998',
    liveUrl: '#',
  },
];

function ProjectCard({
  project,
  index,
  isRevealed,
}: {
  project: Project;
  index: number;
  isRevealed: boolean;
}) {
  return (
    <div
      className={`group relative transition-all duration-600 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${(index + 1) * 150}ms` }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-[#3d3d3d] bg-[#0a0a0a] card-hover">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

          {/* Metric Badge */}
          {(project.metric || project.features) && (
            <div className="absolute top-4 left-4">
              {project.metric ? (
                <span className="px-4 py-2 bg-[#ff5a65] rounded-full text-sm font-medium text-white">
                  {project.metric}
                </span>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.features?.map(feature => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 bg-[#0a0a0a]/80 backdrop-blur-sm rounded-full text-xs text-[#e2e2e2] border border-[#3d3d3d]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Hover Actions */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#0a0a0a]/80 backdrop-blur-sm rounded-lg text-[#e2e2e2] hover:text-[#ff5a65] hover:bg-[#0a0a0a] transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#0a0a0a]/80 backdrop-blur-sm rounded-lg text-[#e2e2e2] hover:text-[#ff5a65] hover:bg-[#0a0a0a] transition-all"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="text-sm text-[#ff5a65] font-medium">
                {project.subtitle}
              </span>
              <h3 className="mt-1 text-xl font-semibold text-[#e2e2e2] group-hover:text-[#ff5a65] transition-colors">
                {project.title}
              </h3>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#5a5a5a] group-hover:text-[#ff5a65] transition-colors" />
          </div>

          <p className="text-sm text-[#909090] leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#222222] rounded-full text-xs text-[#e2e2e2] border border-[#3d3d3d] skill-tag"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();
  const { ref: headerRef, isRevealed: headerRevealed } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-600 ${
            headerRevealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#ff5a65]" />
            <span className="text-sm font-medium text-[#ff5a65] uppercase tracking-wider">
              Projects
            </span>
            <div className="w-12 h-[2px] bg-[#ff5a65]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#e2e2e2]">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="mt-4 text-[#909090] max-w-2xl mx-auto">
            Showcasing innovative AI solutions that solve real-world problems
            and push the boundaries of technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isRevealed={isRevealed}
            />
          ))}
        </div>

        {/* View All Projects CTA */}
        <div
          className={`mt-12 text-center transition-all duration-600 ${
            isRevealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <a
            href="https://github.com/MayurJadhav-1998"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#222222] rounded-full text-[#e2e2e2] font-medium hover:bg-[#2a2a2a] transition-colors"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
