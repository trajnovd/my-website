import { GraduationCap, Code, Trophy, Lightbulb } from 'lucide-react'
import { asset } from '../utils'
import GradientText from '../components/GradientText'
import AnimatedSection from '../components/AnimatedSection'
import SpotlightCard from '../components/SpotlightCard'

const academicTimeline = [
  {
    period: '2024 – Present',
    title: "Master's in Computer Science",
    institution: 'FINKI — Ss. Cyril and Methodius University',
    description:
      'Pursuing advanced studies in AI, machine learning, and software engineering. Focusing on multi-agent systems and AI-powered application development.',
  },
  {
    period: '2020 – 2024',
    title: 'Bachelor in Computer Science',
    institution: 'FINKI — Ss. Cyril and Methodius University',
    description:
      'Completed undergraduate studies with focus on software engineering, algorithms, and data structures. Active participant in hackathons and coding competitions.',
  },
  {
    period: '2011 – 2020',
    title: 'High School & Foundation',
    institution: 'Skopje, North Macedonia',
    description:
      'Developed early interest in programming and technology. Built foundational knowledge in mathematics and computer science.',
  },
]

const experience = [
  {
    icon: Trophy,
    title: 'Hackathon Experience',
    description:
      'Multiple hackathon victories including 1st place nationally and 2nd place at Microsoft Imagine Cup. Proven ability to ideate, build, and present under time constraints.',
    color: 'cyan',
  },
  {
    icon: Code,
    title: 'Project Development',
    description:
      'Built 10+ production-quality projects spanning web, mobile, AI, and IoT. Experience with full product lifecycle from concept to deployment.',
    color: 'violet',
  },
  {
    icon: Lightbulb,
    title: 'Competitions & Awards',
    description:
      'Consistent track record in competitive programming and tech challenges. Awards in national and regional coding competitions from 2022 to 2024.',
    color: 'cyan',
  },
]

export default function Education() {
  return (
    <main className="pt-24">
      {/* ===== HERO ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-2xl blur-xl" />
                <img
                  src={asset('images/Logo_FINKI_UKIM_EN.png')}
                  alt="FINKI UKIM"
                  className="relative w-48 md:w-56 rounded-xl"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                <GradientText>Education</GradientText>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                My academic journey at the Faculty of Computer Science and
                Information Engineering (FINKI) has been shaped by hands-on
                projects, competitions, and a drive to push boundaries.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== ACADEMIC TIMELINE ===== */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              <GradientText>Academic Journey</GradientText>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent" />

            {academicTimeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="relative flex gap-8 mb-12 ml-4 md:ml-8">
                  {/* Dot */}
                  <div className="absolute left-0 -translate-x-1/2 mt-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 glow-cyan" />
                  </div>

                  {/* Content */}
                  <div className="ml-8 glass rounded-2xl p-6 flex-1">
                    <span className="text-xs font-heading font-semibold text-cyan-400 tracking-wider uppercase">
                      {item.period}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-slate-100 mt-2 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-violet-400 font-medium mb-3">
                      {item.institution}
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              <GradientText>Practical Experience</GradientText>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experience.map((exp, i) => (
              <AnimatedSection key={exp.title} delay={i * 0.1}>
                <SpotlightCard
                  className="p-7 h-full"
                  spotlightColor={
                    exp.color === 'cyan'
                      ? 'rgba(6, 182, 212, 0.12)'
                      : 'rgba(139, 92, 246, 0.12)'
                  }
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      exp.color === 'cyan'
                        ? 'bg-cyan-500/10 border border-cyan-500/20'
                        : 'bg-violet-500/10 border border-violet-500/20'
                    }`}
                  >
                    <exp.icon
                      size={24}
                      className={
                        exp.color === 'cyan'
                          ? 'text-cyan-400'
                          : 'text-violet-400'
                      }
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-100 mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </SpotlightCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
