import { PortfolioHeader } from "@/components/portfolio-header"
import { PortfolioFooter } from "@/components/portfolio-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Globe, Download } from "lucide-react"

export default function CVPage() {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-slate-800 to-slate-700">
      <PortfolioHeader />

      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Gracziela Sewodo</h1>
            <p className="text-slate-300">Cybersecurity Enthusiast - Développeuse Full-Stack</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="space-y-6">
                 <Card className="bg-gradient from-gray-800 via-gray-900 to-blackbackdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Mail className="h-4 w-4 text-cyan-200" />
                   Gsewodo@proton.me
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <MapPin className="h-4 w-4 text-cyan-200" />
                    Bruxelles, Belgique
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Globe className="h-4 w-4 text-cyan-200" />
                    <a
                      href="https://www.linkedin.com/in/gracziela-sewodo-733142265/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-200 hover:text-cyan-100 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
              

               <Card className="bg-gradient from-gray-800 via-gray-900 to-blackbackdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Compétences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 text-cyan-200">Langages de programmation</h4>
                      <div className="flex flex-wrap gap-1">
                       <Badge className="bg-slate-700  border-cyan-200/20">Python</Badge>
                       <Badge className="bg-slate-700  border-cyan-200/20">Bash</Badge>
                       <Badge className="bg-slate-700  border-cyan-200/20">C</Badge>
                       <Badge className="bg-slate-700  border-cyan-200/20">C++</Badge>
                       <Badge className="bg-slate-700 border-cyan-200/20">C#</Badge>
                       <Badge className="bg-slate-700  border-cyan-200/20">Java</Badge>
                       <Badge className="bg-slate-700  border-cyan-200/20">JavaScript</Badge>
                       <Badge className="bg-slate-700  border-cyan-200/20">PHP</Badge>
                       <Badge className="bg-slate-700  border-cyan-200/20">Kotlin</Badge>
                      </div>
                    </div>
                   
                    <div>
                      <h4 className="font-medium mb-2 text-cyan-200">Bases de données</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge className="bg-slate-700  border-cyan-200/20">SQL</Badge>
                        <Badge className="bg-slate-700  border-cyan-200/20">MySQL</Badge>
                        <Badge className="bg-slate-700  border-cyan-200/20">SQLite</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-cyan-200">Analyse</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge className="bg-slate-700  border-cyan-200/20">UML</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-cyan-200">Outils de développement</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge className="bg-slate-700  border-cyan-200/20">Linux</Badge>
                        <Badge className="bg-slate-700  border-cyan-200/20">Git</Badge>
                        <Badge className="bg-slate-700  border-cyan-200/20">VM / VirtualBox</Badge>
                        <Badge className="bg-slate-700  border-cyan-200/20">Docker</Badge>
                        <Badge className="bg-slate-700  border-cyan-200/20">Makefile</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient from-gray-800 via-gray-900 to-blackbackdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Langues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm font-medium mb-2 text-slate-300">
                    <p>• Français : C2</p>
                    <p>• Anglais : B2</p>
                    <p>• Néerlandais : A1</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
                <Card className="bg-gradient from-gray-800 via-gray-900 to-blackbackdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Expérience Professionnelle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-white">Développeur Full-Stack</h3>
                    <p className="text-cyan-200 font-medium">DAIHITI | Bruxelles | Stage • 2024 - 6 mois</p>
                    <ul className="mt-2 text-sm text-slate-300 space-y-1">
                      <li>• Développement de nouvelles fonctionnalités en .NET</li>
                      <li>• Méthodologie Agile</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Job étudiant</h3>
                    <p className="text-cyan-200 font-medium">Lidl | Bruxelles | CDD • 2017 - 2024</p>
                  </div>
                </CardContent>
              </Card>

               <Card className="bg-gradient from-gray-800 via-gray-900 to-blackbackdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Formation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white">Cyber Security Trainee</h3>
                    <p className="text-cyan-200 font-medium">Interface3 • En cours</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white">Bachelier en Informatique, orientation Développeur d'applications</h3>
                    <p className="text-cyan-200 font-medium">ESI - École Supérieure d'Informatique, Bruxelles • 2020 - 2024</p>
                  </div>
                </CardContent>
              </Card>

             <Card className="bg-gradient from-gray-800 via-gray-900 to-blackbackdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <h3 className="font-semibold text-white">
                      eJPT (Junior Penetration Tester)
                    </h3>
                    <p className="text-cyan-200 font-medium">INE Security • En préparation</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient from-gray-800 via-gray-900 to-blackbackdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Centres d'intérêt</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm font-medium mb-2 text-slate-300">
                    <p>• Basketball</p>
                    <p>• Voyages : Togo, Portugal, Espagne, France</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <PortfolioFooter />
    </div>
  )
}