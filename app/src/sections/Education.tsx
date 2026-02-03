import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, Calendar, Award, Trophy, Medal, Star } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  focus: string[];
}

interface Achievement {
  title: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

const educations: Education[] = [
  {
    degree: 'Master of Science in Information Systems',
    institution: 'University of Texas at Arlington',
    period: 'Aug 2022 - May 2024',
    gpa: '3.89/4.00',
    focus: ['Data Science', 'Machine Learning', 'AI Systems'],
  },
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'University of Pune',
    period: 'Aug 2016 - May 2020',
    gpa: '3.60/4.00',
    focus: ['Software Engineering', 'Data Structures', 'Algorithms'],
  },
];

const achievements: Achievement[] = [
  {
    title: 'Infosys Certified Applied Generative AI Professional',
    date: 'May 2025',
    description:
      'Advanced certification in applied generative AI technologies and implementations',
    icon: <Award className="w-5 h-5" />,
  },
  {
    title: 'AI Agents in Lang-graph Certification',
    date: 'Jul 2024',
    description:
      'Specialized certification in building AI agents using LangGraph framework',
    icon: <Medal className="w-5 h-5" />,
  },
  {
    title: 'First Place - Datathon 2023',
    date: '2023',
    description:
      'Won first place among 250 teams in competitive machine learning datathon',
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    title: 'Star Employee Award',
    date: 'Oct 2022',
    description:
      'Client recognition for exceptional performance and problem-solving skills',
    icon: <Star className="w-5 h-5" />,
  },
];

function EducationCard({
  education,
  index,
  isRevealed,
}: {
  education: Education;
  index: number;
  isRevealed: boolean;
}) {
  return (
    <div
      className={`p-6 bg-[#0a0a0a] border border-[#3d3d3d] rounded-xl card-hover transition-all duration-600 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${(index + 1) * 150}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-primary rounded-xl">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#e2e2e2]">
            {education.degree}
          </h3>
          <p className="text-[#ff5a65] font-medium">{education.institution}</p>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-[#909090]">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {education.period}
            </div>
            <span className="px-2 py-0.5 bg-[#222222] rounded text-[#e2e2e2]">
              GPA: {education.gpa}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {education.focus.map(item => (
              <span
                key={item}
                className="px-3 py-1 bg-[#222222] rounded-full text-xs text-[#e2e2e2] border border-[#3d3d3d]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AchievementCard({
  achievement,
  index,
  isRevealed,
}: {
  achievement: Achievement;
  index: number;
  isRevealed: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-4 p-4 bg-[#0a0a0a] border border-[#3d3d3d] rounded-xl card-hover transition-all duration-600 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${(index + 1) * 100}ms` }}
    >
      <div className="p-2.5 bg-[#ff5a65]/10 rounded-lg text-[#ff5a65]">
        {achievement.icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-medium text-[#e2e2e2]">{achievement.title}</h4>
          <span className="text-xs text-[#5a5a5a]">{achievement.date}</span>
        </div>
        <p className="mt-1 text-sm text-[#909090]">{achievement.description}</p>
      </div>
    </div>
  );
}

export default function Education() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();
  const { ref: headerRef, isRevealed: headerRevealed } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="education"
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
              Education & Achievements
            </span>
            <div className="w-12 h-[2px] bg-[#ff5a65]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#e2e2e2]">
            Academic <span className="text-gradient">Excellence</span>
          </h2>
          <p className="mt-4 text-[#909090] max-w-2xl mx-auto">
            A strong educational foundation combined with industry-recognized
            certifications and achievements.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h3
              className={`text-xl font-semibold text-[#e2e2e2] mb-6 transition-all duration-600 ${
                isRevealed
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Education
            </h3>
            <div className="space-y-6">
              {educations.map((education, index) => (
                <EducationCard
                  key={education.degree}
                  education={education}
                  index={index}
                  isRevealed={isRevealed}
                />
              ))}
            </div>
          </div>

          {/* Achievements Column */}
          <div>
            <h3
              className={`text-xl font-semibold text-[#e2e2e2] mb-6 transition-all duration-600 ${
                isRevealed
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Certifications & Awards
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.title}
                  achievement={achievement}
                  index={index}
                  isRevealed={isRevealed}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
