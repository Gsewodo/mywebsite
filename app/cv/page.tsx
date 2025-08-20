import { PortfolioHeader } from "@/components/portfolio-header"
import { PortfolioFooter } from "@/components/portfolio-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Globe,Download  } from "lucide-react"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />

      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Gracziela Sewodo</h1>
            <p className="text-muted-foreground">Cybersecurity Enthusiast - Développeuse Full-Stack</p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="space-y-6">
              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                   Gsewodo@proton.me
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    Bruxelles, Belgique
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/gracziela-sewodo-733142265/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-blue-700"
                    >
                      LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
              

              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Compétences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Langages de programmation</h4>
                      <div className="flex flex-wrap gap-1">
                       <Badge variant="secondary">Python</Badge>
      <Badge variant="secondary">Bash</Badge>
     
      <Badge variant="secondary">C</Badge>
      <Badge variant="secondary">C++</Badge>
      <Badge variant="secondary">C#</Badge>
       <Badge variant="secondary">Java</Badge>
      <Badge variant="secondary">JavaScript</Badge>
      <Badge variant="secondary">PHP</Badge>
      <Badge variant="secondary">Kotlin</Badge>

                      </div>
                    </div>
                   
                    <div>
                      <h4 className="font-medium mb-2">Bases de données</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary">SQL</Badge>
                        <Badge variant="secondary">MySQL</Badge>
                        <Badge variant="secondary">SQLite</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Analyse </h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary">UML</Badge>
      
                   
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Outils de développement</h4>
                      <div className="flex flex-wrap gap-1">
                             <Badge variant="secondary">Linux</Badge>
                     <Badge variant="secondary">Git </Badge>
                      <Badge variant="secondary">VM / VirtualBox</Badge>
                      <Badge variant="secondary">Docker</Badge>
                       <Badge variant="secondary">Makefile</Badge>
                          
             
                      </div>
                    </div>
            
                  </div>
                </CardContent>
              </Card>



                  <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Langues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm font-medium mb-2">
                    <p>• Français : C2</p>
                    <p>• Anglais : B2</p>
                    <p>• Néerlandais : A1</p>
                  </div>
                </CardContent>
              </Card>
              
  
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Expérience Professionnelle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground">Développeur Full-Stack</h3>
                    <p className="text-primary font-medium">DAIHITI | Bruxelles | Stage • 2024 - 6 mois </p>
                    <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                      <li>• Développement de nouvelles fonctionnalités en .NET</li>
                      <li>• Méthodologie Agile </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">Job étudiant</h3>
                    <p className="text-primary font-medium">Lidl | Bruxelles | CDD • 2017 - 2024</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Formation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                                         <div>
                    <h3 className="font-semibold text-foreground"> Cyber Security Trainee</h3>
                    <p className="text-primary font-medium">Interface3 • En cours</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground">Bachelier en Informatique, orientation Développeur d'applications</h3>
                    <p className="text-primary font-medium">ESI - École Supérieure d'Informatique, Bruxelles • 2020 - 2024</p>
                  </div>

                </CardContent>
              </Card>
       <Card className="bg-white border border-gray-200">
    <CardHeader>
      <CardTitle className="text-lg">Certifications</CardTitle>
    </CardHeader>
    <CardContent className="space-y-3 text-sm">
      <div>
        <h3 className="font-semibold text-foreground">
          eJPT (Junior Penetration Tester)
        </h3>
        <p className="text-primary font-medium">INE Security • En préparation</p>
      </div>
    </CardContent>
  </Card>
              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Centres d'intérêt</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm font-medium mb-2">
                    <p>• Basketball</p>
                    <p>• Voyages : Togo, Portugal, Espagne, France</p>
                  </div>
                </CardContent>
              </Card>

          

      









            </div>
          </div>
        </div>
      </main>
<div className="text-center mb-8">


</div>

      <PortfolioFooter />
    </div>
  )
}
