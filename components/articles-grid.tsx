"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import articlesData from "@/data/articles.json"

export function ArticlesGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4"> Projets</h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesData.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
         
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20 hover:scale-105 bg-white border border-gray-200 hover:border-secondary/70 hover:-translate-y-1">
                <div className="aspect-[16/10] overflow-hidden rounded-t-lg">
                  <img
                    src={article.image || "/placeholder.svg?height=300&width=500"}
                    alt={article.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                      {article.title.includes("Sécurité")
                        ? "Security"
                        : article.title.includes("React")
                          ? "Frontend"
                          : article.title.includes("Architecture")
                            ? "Backend"
                            : "Projet perso"}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight hover:text-secondary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">{article.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
