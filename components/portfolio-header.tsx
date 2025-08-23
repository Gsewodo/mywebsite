"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code, Shield } from "lucide-react"
import { Navigation } from "@/components/navigation"

export function PortfolioHeader() {
  return (
    <header className="relative py-12 px-4 bg-[#F3F2EF] border-b border-[#D1D9E0]">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">

          {/* Left content */}
          <div className="text-left">
            <div className="mb-6">
              <p className="text-sm mb-4 font-medium text-[#0A66C2]">
                Salut ! Je suis
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#1D2226]">
                Gracziela Sewodo
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <Code className="h-5 w-5 text-[#0A66C2]" />
                <span className="text-lg font-medium text-[#5E6D77]">
                  Software engineer | Cybersecurity Enthusiast
                </span>
                <Shield className="h-5 w-5 text-[#0A66C2]" />
              </div>

              <p className="text-lg leading-relaxed mb-8 font-light text-[#5E6D77]">
                Développeuse passionnée de cybersécurité, j'explore et partage mes projets, mes expériences et mes découvertes.
              </p>

              {/* Social buttons */}
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-[#D1D9E0] bg-white text-[#1D2226] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-[#0A66C2]/15"
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
                  className="border-[#D1D9E0] bg-white text-[#1D2226] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-[#0A66C2]/15"
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

          {/* Right content - Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="w-64 h-64 rounded-full p-1 shadow-md bg-white border-2 border-[#D1D9E0] transition-all duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-full p-1 bg-white">
                  <img
                    src="/professional-headshot.png"
                    alt="Gracziela Sewodo"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full blur-xl opacity-5 -z-10 bg-[#0A66C2] transition-all duration-500 group-hover:opacity-10"></div>
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
