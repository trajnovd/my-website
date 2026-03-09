import { Award, Trophy, Medal, Star } from 'lucide-react'
import { asset } from '../utils'
import GradientText from '../components/GradientText'
import AnimatedSection from '../components/AnimatedSection'
import SpotlightCard from '../components/SpotlightCard'

const achievements = [
  {
    icon: Trophy,
    title: '1st Place',
    subtitle: 'Best Hackathon Project 2024',
    color: 'text-yellow-400',
    glow: 'rgba(250, 204, 21, 0.12)',
  },
  {
    icon: Award,
    title: '2nd Place',
    subtitle: 'Microsoft Challenge 2023',
    color: 'text-slate-300',
    glow: 'rgba(203, 213, 225, 0.12)',
  },
  {
    icon: Medal,
    title: '3rd Place',
    subtitle: 'National Competition',
    color: 'text-amber-600',
    glow: 'rgba(217, 119, 6, 0.12)',
  },
  {
    icon: Star,
    title: 'Multiple Awards',
    subtitle: 'Competitions & Challenges',
    color: 'text-cyan-400',
    glow: 'rgba(6, 182, 212, 0.12)',
  },
]

const timeline = [
  {
    year: '2024',
    title: '1st Place — Best Hackathon Project',
    description: 'Won first place for innovative AI-powered solution at national hackathon.',
  },
  {
    year: '2023',
    title: '2nd Place — Microsoft Imagine Cup',
    description: 'Developed LifeDrop drone system for emergency response, recognized by Microsoft.',
  },
  {
    year: '2023',
    title: 'Multiple Hackathon Awards',
    description: 'Participated in and won awards at multiple national and regional hackathons.',
  },
  {
    year: '2022',
    title: 'Started Competitive Programming',
    description: 'Began competing in coding challenges and algorithm competitions.',
  },
  {
    year: '2020',
    title: 'Enrolled at FINKI',
    description: 'Began studies at Faculty of Computer Science and Information Engineering, UKIM.',
  },
]

export default function About() {
  return (
    <main className="pt-24">
      {/* ===== HERO ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative flex justify-center">
              <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/15 to-violet-500/15 rounded-full blur-3xl" />
              <img
                src={asset('images/ProfilePicture.jpeg')}
                alt="Darko Trajanov"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-white/10 shadow-2xl"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              <GradientText>About Me</GradientText>
            </h1>
            <p className="text-slate-400 leading-relaxed mb-4">
              I'm <span className="text-slate-200 font-medium">Darko Trajanov</span>, a
              Full-Stack Developer and AI Enthusiast from Skopje, North Macedonia.
              I specialize in building innovative digital products using React,
              Python, and modern AI technologies.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My passion lies at the intersection of technology and real-world
              impact — from AI-driven compliance platforms to educational apps
              for children with autism. I believe in building solutions that
              genuinely make a difference.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== JOURNEY ===== */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              <GradientText>Background & Journey</GradientText>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass rounded-2xl p-8 md:p-10">
              <p className="text-slate-400 leading-relaxed mb-4">
                My journey into tech started with a curiosity about how software
                can solve everyday problems. That curiosity led me to the Faculty
                of Computer Science and Information Engineering (FINKI) at Ss.
                Cyril and Methodius University, where I'm currently pursuing my
                Master's degree.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                During my studies, I immersed myself in hackathons and coding
                competitions — winning multiple awards including 1st place at the
                national hackathon and 2nd place at the Microsoft Imagine Cup
                challenge. These experiences taught me to build under pressure,
                collaborate effectively, and think creatively.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Today, I focus on building full-stack applications with AI at their
                core — from multi-agent property valuation systems to FSMA
                compliance platforms. I'm driven by the belief that AI should
                empower people, not replace them, and that well-designed software
                can democratize access to expert-level knowledge.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              <GradientText>Achievements</GradientText>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.1}>
                <SpotlightCard
                  className="p-8 text-center h-full"
                  spotlightColor={a.glow}
                >
                  <a.icon size={40} className={`mx-auto mb-4 ${a.color}`} />
                  <h3 className="font-heading text-xl font-bold text-slate-100 mb-1">
                    {a.title}
                  </h3>
                  <p className="text-sm text-slate-400">{a.subtitle}</p>
                </SpotlightCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              <GradientText>Certifications & Awards</GradientText>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-transparent" />

            {timeline.map((item, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.1}
                direction={i % 2 === 0 ? 'left' : 'right'}
              >
                <div
                  className={`relative flex items-start gap-8 mb-10 ${
                    i % 2 === 0
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse md:text-right'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 border-2 border-dark glow-cyan z-10 mt-1.5" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <span className="text-xs font-heading font-semibold text-cyan-400 tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="font-heading font-semibold text-slate-200 mt-1 mb-1">
                      {item.title}
                    </h3>
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
    </main>
  )
}
