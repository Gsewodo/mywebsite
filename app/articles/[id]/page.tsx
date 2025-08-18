"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PortfolioHeader } from "@/components/portfolio-header"
import { PortfolioFooter } from "@/components/portfolio-footer"
import articlesData from "@/data/articles.json"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { use } from "react"

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { id } = use(params) // ✅ Unwrap la Promise params
  const article = articlesData.find((a) => a.id === id)
  const articleContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (articleContentRef.current) {
      articleContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [])

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-foreground mb-4">Article non trouvé</h1>
          <p className="text-muted-foreground">L'article demandé n'existe pas.</p>
          <Button className="mt-4" onClick={() => router.push("/")}>
            Retour
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />

      <div className="w-full">
        {/* Header with return button */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Button
            variant="outline"
            className="mb-6 bg-transparent border-blue-300 hover:bg-blue-900 hover:text-white hover:border-blue-600 text-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux articles
          </Button>
        </div>

        {/* Article Content */}
        <div ref={articleContentRef} className="max-w-4xl mx-auto px-4 py-8">
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img
              src={article.image || "/placeholder.svg?height=300&width=600"}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary">
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
            <h1 className="text-3xl leading-tight text-foreground mb-4">{article.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{article.description}</p>
          </div>

          

          <div className="prose prose-slate max-w-none">
            <div className="whitespace-pre-line text-foreground leading-relaxed space-y-4">
              {article.content.split("\n").map((line, index) => {
                if (line.startsWith("# ")) {
                  return (
                    <h1 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                      {line.slice(2)}
                    </h1>
                  )
                }
                if (line.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
                      {line.slice(3)}
                    </h2>
                  )
                }
                if (line.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-lg font-medium mt-4 mb-2 text-foreground">
                      {line.slice(4)}
                    </h3>
                  )
                }
                if (line.startsWith("- ")) {
                  return (
                    <li key={index} className="ml-4 text-muted-foreground">
                      {line.slice(2)}
                    </li>
                  )
                }
                if (line.trim() === "") {
                  return <br key={index} />
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <PortfolioFooter />
    </div>
  )
}