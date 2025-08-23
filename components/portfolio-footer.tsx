import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PortfolioFooter() {
  return (
    <footer className="py-12 px-4 bg-[#F3F2EF] border-t border-[#D1D9E0]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Boutons réseaux */}
        <div className="flex justify-center gap-4 mb-8">
         <Button
  variant="outline"
  size="icon"
  asChild
  className="border-[#D1D9E0] bg-white text-[#1D2226] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 hover:shadow-lg hover:shadow-[#0A66C2]/20"
>
  <a href="mailto:gsewodo@proton.me">
    <Mail className="w-5 h-5" />
  </a>
</Button>

<Button
  variant="outline"
  size="icon"
  asChild
  className="border-[#D1D9E0] bg-white  hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 hover:shadow-lg hover:shadow-[#0A66C2]/20"
>
  <a
    href="https://www.linkedin.com/in/gracziela-sewodo-733142265/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-5 h-5" />
  </a>
</Button>

<Button
  variant="outline"
  size="icon"
  asChild
  className="border-[#D1D9E0] bg-white text-[#1D2226] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 hover:shadow-lg hover:shadow-[#0A66C2]/20"
>
  <a
    href="https://github.com/Gsewodo"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="w-5 h-5" />
  </a>
</Button>

        </div>

        {/* Texte bas de page */}
        <div className="border-t border-[#D1D9E0] pt-6">
          <p className="text-sm text-[#5E6D77]">
            © 2025 Gracziela Sewodo | Développé avec passion
          </p>
        </div>
      </div>
    </footer>
  )
}
