import { Linkedin, Instagram, Facebook, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold gradient-text mb-4">
              Darko Trajanov
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full-Stack Developer & AI Enthusiast building innovative solutions
              that solve real-world problems.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-slate-200">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <a
                href="mailto:dare.trajanov@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                <Mail size={16} />
                dare.trajanov@gmail.com
              </a>
              <a
                href="tel:+38971257275"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                <Phone size={16} />
                +389 71 257 275
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-slate-200">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/darko-trajanov-a761b825b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all cursor-pointer"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/_darko.t/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all cursor-pointer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/darko.trajanov.94/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all cursor-pointer"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 text-center text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Darko Trajanov. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
