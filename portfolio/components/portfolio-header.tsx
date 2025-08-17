import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code, Shield } from "lucide-react"
import { Navigation } from "@/components/navigation"

export function PortfolioHeader() {
  return (
    <header className="relative py-12 px-4 border-b border-gray-200" style={{ backgroundColor: "#F5F8FB" }}>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="relative inline-block mb-6">
            <div className="w-36 h-36 bg-gray-200 rounded-full p-1 shadow-lg shadow-primary/10">
              <div className="w-full h-full bg-background rounded-full p-1">
                <img
                  src="/professional-headshot.png"
                  alt="Gracziela Sewodo"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-2" style={{ color: "#193E9A" }}>
            Gracziela Sewodo
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code className="h-5 w-5" style={{ color: "rgb(22, 94, 252)" }} />
            <span className="text-lg font-medium text-muted-foreground">
              Software engineer | Cybersecurity Enthusiast
            </span>
          
            <Shield className="h-5 w-5" style={{ color: "rgb(22, 94, 252)" }} />
            
              
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent text-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <a
                href="https://www.linkedin.com/in/gracziela-sewodo-733142265/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent text-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <a
                href="https://github.com/Gsewodo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <Navigation />
      </div>
    </header>
  )
}
