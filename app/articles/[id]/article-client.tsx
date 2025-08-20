"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PortfolioHeader } from "@/components/portfolio-header"
import { PortfolioFooter } from "@/components/portfolio-footer"
import { Article } from "@/lib/articles"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

interface ArticlePageClientProps {
  article: Article
}

export function ArticlePageClient({ article }: ArticlePageClientProps) {
  const router = useRouter()
  const articleContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (articleContentRef.current) {
      articleContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [])

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
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200" variant="secondary">
                {article.badge}
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
            <h1 className="text-4xl leading-tight text-foreground mb-4">{article.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{article.description}</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="whitespace-pre-line text-foreground leading-relaxed space-y-4">
              <MarkdownRenderer content={article.content} />
            </div>
          </div>
        </div>
      </div>

      <PortfolioFooter />
    </div>
  )
}

// Composant pour rendre le Markdown
function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let globalKey = 0

  // Fonction pour parser le markdown inline dans un texte
  function parseInlineMarkdown(text: string): React.ReactNode[] {
    const inlineElements: React.ReactNode[] = []
    let lastIndex = 0
    const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|~~(.+?)~~|`(.+?)`|\[([^\]]+)\]\(([^)]+)\))/g
    let match: RegExpExecArray | null

    while ((match = regex.exec(text)) !== null) {
      // Texte avant le match
      if (match.index > lastIndex) {
        inlineElements.push(text.slice(lastIndex, match.index))
      }

      if (match[2]) { // **gras**
        inlineElements.push(<strong key={`strong-${globalKey++}`}>{match[2]}</strong>)
      } else if (match[3]) { // *italique*
        inlineElements.push(<em key={`em-${globalKey++}`}>{match[3]}</em>)
      } else if (match[4]) { // ~~barré~~
        inlineElements.push(<del key={`del-${globalKey++}`}>{match[4]}</del>)
      } else if (match[5]) { // `code inline`
        inlineElements.push(<code key={`code-${globalKey++}`} className="bg-gray-100 px-1 rounded">{match[5]}</code>)
      } else if (match[6] && match[7]) { // [texte](url)
        inlineElements.push(
          <a key={`link-${globalKey++}`} href={match[7]} target="_blank" rel="noopener noreferrer" className="text-blue-800 dark:text-blue-500 hover:font-semibold">
            {match[6]}
          </a>
        )
      }

      lastIndex = regex.lastIndex
    }

    // Texte restant après le dernier match
    if (lastIndex < text.length) {
      inlineElements.push(text.slice(lastIndex))
    }

    return inlineElements
  }

  const linesCopy = [...lines]
  
  while (linesCopy.length > 0) {
    const line = linesCopy.shift()!

    // Code block multilignes
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim()
      const codeLines: string[] = []
      while (linesCopy.length > 0 && !linesCopy[0].startsWith("```")) {
        codeLines.push(linesCopy.shift()!)
      }
      if (linesCopy.length > 0) linesCopy.shift() // retirer le ``` de fermeture
      elements.push(
        <pre key={`code-${globalKey++}`} className="bg-gray-100 text-gray-900 p-4 rounded overflow-x-auto my-4">
          <code>{codeLines.join("\n")}</code>
        </pre>
      )
      continue
    }

    // Titres
    if (line.startsWith("### ")) {
      elements.push(<h3 key={`h3-${globalKey++}`} className="text-lg font-medium mt-6 mb-3">{parseInlineMarkdown(line.slice(4))}</h3>)
      continue
    }
    if (line.startsWith("## ")) {
      elements.push(<h2 key={`h2-${globalKey++}`} className="text-xl font-semibold mt-8 mb-4">{parseInlineMarkdown(line.slice(3))}</h2>)
      continue
    }
    if (line.startsWith("# ")) {
      elements.push(<h1 key={`h1-${globalKey++}`} className="text-2xl font-bold mt-10 mb-5">{parseInlineMarkdown(line.slice(2))}</h1>)
      continue
    }

    // Blockquote
    if (line.startsWith("> ")) {
      elements.push(<blockquote key={`blockquote-${globalKey++}`} className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600">{parseInlineMarkdown(line.slice(2))}</blockquote>)
      continue
    }

    // Listes numérotées
    if (/^\d+\. /.test(line)) {
      const olItems: string[] = [line.replace(/^\d+\. /, "")]
      while (linesCopy.length > 0 && /^\d+\. /.test(linesCopy[0])) {
        olItems.push(linesCopy.shift()!.replace(/^\d+\. /, ""))
      }
      elements.push(
        <ol key={`ol-${globalKey++}`} className="ml-6 list-decimal my-4 space-y-1">
          {olItems.map((item, idx) => <li key={`ol-item-${globalKey}-${idx}`}>{parseInlineMarkdown(item)}</li>)}
        </ol>
      )
      continue
    }

    // Listes simples
    if (line.startsWith("- ")) {
      const ulItems: string[] = [line.slice(2)]
      while (linesCopy.length > 0 && linesCopy[0].startsWith("- ")) {
        ulItems.push(linesCopy.shift()!.slice(2))
      }
      elements.push(
        <ul key={`ul-${globalKey++}`} className="ml-6 list-disc my-4 space-y-1">
          {ulItems.map((item, idx) => <li key={`ul-item-${globalKey}-${idx}`}>{parseInlineMarkdown(item)}</li>)}
        </ul>
      )
      continue
    }

    // Règle horizontale
    if (line.trim() === "---") {
      elements.push(<hr key={`hr-${globalKey++}`} className="my-8 border-gray-300" />)
      continue
    }

    // Ligne vide
    if (line.trim() === "") {
      elements.push(<div key={`space-${globalKey++}`} className="h-4" />)
      continue
    }

    // Images
    if (line.startsWith("![")) {
      const match = line.match(/!\[(.*?)\]\((.*?)\)/)
      if (match) {
        const [, alt, src] = match
        elements.push(<img key={`img-${globalKey++}`} src={src} alt={alt} className="my-4 rounded max-w-full h-auto" />)
        continue
      }
    }

    // URLs simples
    if (line.match(/^https?:\/\/.+$/)) {
      elements.push(
        <p key={`url-${globalKey++}`} className="my-4">
          <a href={line} target="_blank" rel="noopener noreferrer" className="text-blue-800 dark:text-blue-500 hover:underline break-all">
            {line}
          </a>
        </p>
      )
      continue
    }

    // Texte normal avec parsing inline
    elements.push(<p key={`p-${globalKey++}`} className="leading-relaxed my-4">{parseInlineMarkdown(line)}</p>)
  }

  return <>{elements}</>
}