import { ExternalLink, Github } from 'lucide-react'
import GradientText from '../components/GradientText'
import AnimatedSection from '../components/AnimatedSection'
import SpotlightCard from '../components/SpotlightCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <main className="pt-24">
      {/* ===== HERO ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              <GradientText>My Projects</GradientText>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              From AI-powered platforms to IoT devices — here's everything I've
              built.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PROJECT GRID ===== */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Featured projects - larger cards */}
          <AnimatedSection>
            <h2 className="font-heading text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-8">
              Featured
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            {projects
              .filter((p) => p.featured)
              .map((project, i) => (
                <AnimatedSection key={project.id} delay={i * 0.1}>
                  <SpotlightCard className="h-full flex flex-col">
                    <div className="h-52 overflow-hidden rounded-t-2xl bg-dark-200 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-dark/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                        <span className="text-xs font-heading font-medium text-slate-500 uppercase tracking-wider">
                          Featured
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-semibold mb-3 text-slate-100">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-5 flex-1 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="tech-badge tech-badge-cyan">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </AnimatedSection>
              ))}
          </div>

          {/* All other projects */}
          <AnimatedSection>
            <h2 className="font-heading text-sm font-semibold text-violet-400 uppercase tracking-widest mb-8">
              All Projects
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, i) => (
                <AnimatedSection key={project.id} delay={i * 0.08}>
                  <SpotlightCard
                    className="h-full flex flex-col"
                    spotlightColor="rgba(139, 92, 246, 0.10)"
                  >
                    <div className="h-44 overflow-hidden rounded-t-2xl bg-dark-200 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-dark/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-heading text-lg font-semibold mb-2 text-slate-100">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="tech-badge tech-badge-violet"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
