import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PortfolioFooter() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-black border-t border-cyan-200/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            asChild
            className="border-cyan-200/30 bg-slate-800/50 text-cyan-200 hover:bg-cyan-200 hover:text-black hover:border-cyan-200 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200/20"
          >
            <a href="mailto:gsewodo@proton.me">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="border-cyan-200/30 bg-slate-800/50 text-cyan-200 hover:bg-cyan-200 hover:text-black hover:border-cyan-200 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200/20"
          >
            <a href="https://www.linkedin.com/in/gracziela-sewodo-733142265/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="border-cyan-200/30 bg-slate-800/50 text-cyan-200 hover:bg-cyan-200 hover:text-black hover:border-cyan-200 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200/20"
          >
            <a href="https://github.com/Gsewodo" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
        </div>

        <div className="border-t border-cyan-200/20 pt-6">
          <p className="text-sm text-slate-400">© 2025 Gracziela Sewodo | Développé avec passion</p>
        </div>
      </div>
    </footer>
  )
}