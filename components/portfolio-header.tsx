import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code, Shield } from "lucide-react"
import { Navigation } from "@/components/navigation"

export function PortfolioHeader() {
  return (
    <header className="relative py-12 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-left">
            <div className="mb-6">
              <p className="text-cyan-200 text-sm mb-4 font-medium">
                Salut ! Je suis
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Gracziela Sewodo
              </h1>
              <div className="flex items-center gap-2 mb-8">
                <Code className="h-5 w-5 text-cyan-200" />
                <span className="text-lg text-slate-300 font-medium">
                  Software engineer | Cybersecurity Enthusiast
                </span>
                <Shield className="h-5 w-5 text-cyan-200" />
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                Développeuse passionnée de cybersécurité, j'explore et partage mes projets, mes expériences et mes découvertes.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-cyan-200 bg-slate-800/80 text-cyan-200 hover:bg-cyan-200 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200/20"
                  >
                    <a
                      href="https://www.linkedin.com/in/gracziela-sewodo-733142265/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-cyan-200 bg-slate-800/80 text-cyan-200 hover:bg-cyan-200 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200/20"
                  >
                    <a
                      href="https://github.com/Gsewodo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right content - Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-cyan-300/20 rounded-full p-1 shadow-lg shadow-cyan-200/10">
                <div className="w-full h-full bg-slate-800 rounded-full p-1">
                  <img
                    src="/professional-headshot.png"
                    alt="Gracziela Sewodo"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-cyan-300 rounded-full blur-2xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
        
        {/* Navigation at bottom */}
        <div className="mt-8 flex justify-center">
          <Navigation />
        </div>
      </div>
    </header>
  )
}