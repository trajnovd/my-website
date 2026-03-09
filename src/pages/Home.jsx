import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Linkedin,
  Instagram,
  Facebook,
  Github,
} from 'lucide-react'
import Hero3D from '../components/Hero3D'
import GradientText from '../components/GradientText'
import { asset } from '../utils'
import AnimatedSection from '../components/AnimatedSection'
import SpotlightCard from '../components/SpotlightCard'
import { projects } from '../data/projects'
import { skillCategories } from '../data/skills'

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Hero3D />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 w-full">
          <div className="max-w-2xl">
            <AnimatedSection delay={0.1}>
              <p className="text-cyan-400 font-heading font-medium mb-3 text-lg tracking-wide">
                Hi, I'm
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold mb-5 leading-tight">
                <GradientText>Darko</GradientText>
                <br />
                <GradientText>Trajanov</GradientText>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed">
                Full-Stack Developer &{' '}
                <span className="text-violet-400">AI Enthusiast</span>
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/projects"
                  className="group px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl font-heading font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer flex items-center gap-2"
                >
                  View Projects
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="mailto:dare.trajanov@gmail.com"
                  className="px-7 py-3.5 border border-white/15 rounded-xl font-heading font-semibold text-slate-300 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                >
                  Contact Me
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <div className="flex gap-3">
                {[
                  {
                    icon: Linkedin,
                    href: 'https://www.linkedin.com/in/darko-trajanov-a761b825b/',
                  },
                  {
                    icon: Github,
                    href: 'https://github.com/trajnovd',
                  },
                  {
                    icon: Instagram,
                    href: 'https://www.instagram.com/_darko.t/',
                  },
                  {
                    icon: Facebook,
                    href: 'https://www.facebook.com/darko.trajanov.94/',
                  },
                ].map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all cursor-pointer"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-xs text-slate-500 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-slate-600 flex justify-center pt-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-3xl blur-2xl" />
              <img
                src={asset('images/Picture2.png')}
                alt="Darko Trajanov"
                className="relative rounded-2xl border border-white/10 w-full max-w-md"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.15}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              <GradientText>About Me</GradientText>
            </h2>
            <p className="text-slate-400 mb-4 leading-relaxed">
              I'm a passionate developer specializing in React, Python, and
              AI-powered solutions. Currently pursuing my Master's at the Faculty
              of Computer Science (FINKI) at Ss. Cyril and Methodius University
              in Skopje.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              With multiple hackathon victories and a drive for innovation, I
              build products that solve real-world problems — from AI-powered
              compliance platforms to emergency drone systems.
            </p>
            <Link
              to="/about"
              className="group text-cyan-400 hover:text-cyan-300 font-heading font-medium flex items-center gap-2 cursor-pointer"
            >
              Learn more about me
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                <GradientText>Featured Projects</GradientText>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A selection of my most impactful work spanning AI, fintech, and
                healthcare.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.1}>
                <SpotlightCard className="p-0 h-full flex flex-col">
                  <div className="h-48 overflow-hidden rounded-t-2xl bg-dark-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-xl font-semibold mb-2 text-slate-100">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((t) => (
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

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-14">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-heading font-medium cursor-pointer"
              >
                View all projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SKILLS OVERVIEW ===== */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                <GradientText>Tech Stack</GradientText>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Technologies I work with daily to build production-grade
                applications.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skillCategories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.05}>
                <SpotlightCard
                  className="p-5 text-center"
                  spotlightColor={
                    cat.color === 'cyan'
                      ? 'rgba(6, 182, 212, 0.12)'
                      : 'rgba(139, 92, 246, 0.12)'
                  }
                >
                  <cat.icon
                    size={28}
                    className={`mx-auto mb-3 ${
                      cat.color === 'cyan'
                        ? 'text-cyan-400'
                        : 'text-violet-400'
                    }`}
                  />
                  <p className="text-xs font-heading font-medium text-slate-300 leading-tight">
                    {cat.title}
                  </p>
                </SpotlightCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-14">
              <Link
                to="/skills"
                className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-heading font-medium cursor-pointer"
              >
                View all skills
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
