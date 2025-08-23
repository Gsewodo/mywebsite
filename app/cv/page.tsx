import { PortfolioHeader } from "@/components/portfolio-header"
import { PortfolioFooter } from "@/components/portfolio-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Globe, Download } from "lucide-react"

export default function CVPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F3F2EF' }}>
      <PortfolioHeader />

      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2" style={{ color: '#1D2226' }}>Gracziela Sewodo</h1>
            <p style={{ color: '#5E6D77' }}>Cybersecurity Enthusiast - Développeuse Full-Stack</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="space-y-6">
              <Card className="bg-white border shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: '#D1D9E0' }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: '#1D2226' }}>Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#5E6D77' }}>
                    <Mail className="h-4 w-4" style={{ color: '#0A66C2' }} />
                    Gsewodo@proton.me
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#5E6D77' }}>
                    <MapPin className="h-4 w-4" style={{ color: '#0A66C2' }} />
                    Bruxelles, Belgique
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#5E6D77' }}>
                    <Globe className="h-4 w-4" style={{ color: '#0A66C2' }} />
                    <a
                      href="https://www.linkedin.com/in/gracziela-sewodo-733142265/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                   
                    >
                      LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: '#D1D9E0' }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: '#1D2226' }}>Compétences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#0A66C2' }}>Langages de programmation</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>Python</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>Bash</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>C</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>C++</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>C#</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>Java</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>JavaScript</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>PHP</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>Kotlin</Badge>
                      </div>
                    </div>
                   
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#0A66C2' }}>Bases de données</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>SQL</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>MySQL</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>SQLite</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#0A66C2' }}>Analyse</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>UML</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2" style={{ color: '#0A66C2' }}>Outils de développement</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>Linux</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>Git</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>VM / VirtualBox</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>Docker</Badge>
                        <Badge className="border hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F3F2EF', color: '#0A66C2', borderColor: '#D1D9E0' }}>Makefile</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: '#D1D9E0' }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: '#1D2226' }}>Langues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm font-medium mb-2" style={{ color: '#5E6D77' }}>
                    <p>• Français : C2</p>
                    <p>• Anglais : B2</p>
                    <p>• Néerlandais : A1</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-white border shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: '#D1D9E0' }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: '#1D2226' }}>Expérience Professionnelle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold" style={{ color: '#1D2226' }}>Développeur Full-Stack</h3>
                    <p className="font-medium" style={{ color: '#0A66C2' }}>DAIHITI | Bruxelles | Stage • 2024 - 6 mois</p>
                    <ul className="mt-2 text-sm space-y-1" style={{ color: '#5E6D77' }}>
                      <li>• Développement de nouvelles fonctionnalités en .NET</li>
                      <li>• Méthodologie Agile</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold" style={{ color: '#1D2226' }}>Job étudiant</h3>
                    <p className="font-medium" style={{ color: '#0A66C2' }}>Lidl | Bruxelles | CDD • 2017 - 2024</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: '#D1D9E0' }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: '#1D2226' }}>Formation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold" style={{ color: '#1D2226' }}>Cyber Security Trainee</h3>
                    <p className="font-medium" style={{ color: '#0A66C2' }}>Interface3 • En cours</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold" style={{ color: '#1D2226' }}>Bachelier en Informatique, orientation Développeur d'applications</h3>
                    <p className="font-medium" style={{ color: '#0A66C2' }}>ESI - École Supérieure d'Informatique, Bruxelles • 2020 - 2024</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: '#D1D9E0' }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: '#1D2226' }}>Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <h3 className="font-semibold" style={{ color: '#1D2226' }}>
                      eJPT (Junior Penetration Tester)
                    </h3>
                    <p className="font-medium" style={{ color: '#0A66C2' }}>INE Security • En préparation</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: '#D1D9E0' }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: '#1D2226' }}>Centres d'intérêt</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm font-medium mb-2" style={{ color: '#5E6D77' }}>
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