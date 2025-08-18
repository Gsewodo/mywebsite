import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PortfolioFooter() {
  return (
    <footer className="py-12 px-4 border-t border-gray-200" style={{ backgroundColor: "#F5F8FB" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4"></h3>
       

        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            asChild
            className="border-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 bg-transparent text-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
          >
            <a href="mailto:gsewodo@proton.me">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="border-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 bg-transparent text-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
          >
            <a href="https://www.linkedin.com/in/gracziela-sewodo-733142265/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="border-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 bg-transparent text-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
          >
            <a href="https://github.com/Gsewodo" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500">© 2025 Portfolio Personnel | Développé avec passion</p>
        </div>
      </div>
    </footer>
  )
}
