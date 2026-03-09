import GradientText from '../components/GradientText'
import AnimatedSection from '../components/AnimatedSection'
import SpotlightCard from '../components/SpotlightCard'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <main className="pt-24">
      {/* ===== HERO ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              <GradientText>Technical Skills</GradientText>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              The tools and technologies I use to bring ideas to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SKILLS GRID ===== */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.08}>
              <SpotlightCard
                className="p-7 h-full"
                spotlightColor={
                  cat.color === 'cyan'
                    ? 'rgba(6, 182, 212, 0.12)'
                    : 'rgba(139, 92, 246, 0.12)'
                }
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      cat.color === 'cyan'
                        ? 'bg-cyan-500/10 border border-cyan-500/20'
                        : 'bg-violet-500/10 border border-violet-500/20'
                    }`}
                  >
                    <cat.icon
                      size={22}
                      className={
                        cat.color === 'cyan'
                          ? 'text-cyan-400'
                          : 'text-violet-400'
                      }
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-100">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        skill.main
                          ? cat.color === 'cyan'
                            ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 glow-cyan'
                            : 'bg-violet-500/15 text-violet-300 border border-violet-500/30 glow-violet'
                          : 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/20'
                      }`}
                    >
                      {skill.name}
                      {skill.main && (
                        <span
                          className={`ml-2 text-[10px] font-heading font-bold uppercase tracking-wider ${
                            cat.color === 'cyan'
                              ? 'text-cyan-400'
                              : 'text-violet-400'
                          }`}
                        >
                          Main
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ===== HOW I APPLY ===== */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 md:p-10 text-center">
              <h2 className="font-heading text-2xl font-bold mb-4 text-slate-100">
                How I Apply These Skills
              </h2>
              <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
                I combine my frontend expertise in React with Python-powered AI
                backends to build complete, production-grade applications. From
                multi-agent AI systems for property valuation to compliance
                platforms for food safety, I focus on delivering solutions that
                work at scale and create real value for users.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
