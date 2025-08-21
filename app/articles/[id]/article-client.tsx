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
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-700">
      <PortfolioHeader />

      <div className="w-full">
        {/* Header with return button */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Button
            variant="outline"
            className="mb-6 bg-slate-800/50 border-cyan-200/30 hover:bg-cyan-200 hover:text-black hover:border-cyan-200 text-cyan-200 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200/20"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux articles
          </Button>
        </div>

        {/* Article Content */}
        <div ref={articleContentRef} className="max-w-4xl mx-auto px-4 py-8">
          <div className="aspect-video overflow-hidden rounded-xl mb-8 shadow-lg shadow-cyan-200/10 border border-cyan-200/20">
            <img
              src={article.image || "/placeholder.svg?height=300&width=600"}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <Badge className="bg-slate-700  border-cyan-200/20 text-sm px-3 py-1 rounded-full">
                {article.badge}
              </Badge>
              <div className="flex items-center gap-6 text-sm text-cyan-200">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
              </div>
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white mb-6">
              {article.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-medium">
              {article.description}
            </p>
          </div>

          {/* Markdown avec meilleure lisibilité */}
          <div className="prose prose-slate prose-lg max-w-none prose-invert space-y-6">
            <MarkdownRenderer content={article.content} />
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

  function parseInlineMarkdown(text: string): React.ReactNode[] {
    const inlineElements: React.ReactNode[] = []
    let lastIndex = 0
    const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|~~(.+?)~~|`(.+?)`|\[([^\]]+)\]\(([^)]+)\))/g
    let match: RegExpExecArray | null

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        inlineElements.push(text.slice(lastIndex, match.index))
      }

      if (match[2]) {
        inlineElements.push(<strong key={`strong-${globalKey++}`} className="text-cyan-200">{match[2]}</strong>)
      } else if (match[3]) {
        inlineElements.push(<em key={`em-${globalKey++}`} className="text-slate-300">{match[3]}</em>)
      } else if (match[4]) {
        inlineElements.push(<del key={`del-${globalKey++}`} className="text-slate-500">{match[4]}</del>)
      } else if (match[5]) {
        inlineElements.push(<code key={`code-${globalKey++}`} className="bg-slate-700 text-cyan-200 px-2 py-1 rounded border border-cyan-200/20">{match[5]}</code>)
      } else if (match[6] && match[7]) {
        inlineElements.push(
          <a
            key={`link-${globalKey++}`}
            href={match[7]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-200 hover:text-cyan-100 hover:underline transition-colors"
          >
            {match[6]}
          </a>
        )
      }

      lastIndex = regex.lastIndex
    }

    if (lastIndex < text.length) {
      inlineElements.push(text.slice(lastIndex))
    }

    return inlineElements
  }

  const linesCopy = [...lines]

  while (linesCopy.length > 0) {
    const line = linesCopy.shift()!

    if (line.startsWith("```")) {
      const codeLines: string[] = []
      while (linesCopy.length > 0 && !linesCopy[0].startsWith("```")) {
        codeLines.push(linesCopy.shift()!)
      }
      if (linesCopy.length > 0) linesCopy.shift()
      elements.push(
        <pre key={`code-${globalKey++}`} className="bg-slate-800 text-cyan-200 p-4 rounded-lg overflow-x-auto my-4 border border-cyan-200/20">
          <code>{codeLines.join("\n")}</code>
        </pre>
      )
      continue
    }

    if (line.startsWith("### ")) {
      elements.push(<h3 key={`h3-${globalKey++}`} className="text-2xl font-semibold mt-6 mb-3 text-white">{parseInlineMarkdown(line.slice(4))}</h3>)
      continue
    }
    if (line.startsWith("## ")) {
      elements.push(<h2 key={`h2-${globalKey++}`} className="text-3xl font-bold mt-8 mb-4 text-white">{parseInlineMarkdown(line.slice(3))}</h2>)
      continue
    }
    if (line.startsWith("# ")) {
      elements.push(<h1 key={`h1-${globalKey++}`} className="text-4xl font-extrabold mt-10 mb-5 text-white">{parseInlineMarkdown(line.slice(2))}</h1>)
      continue
    }

    if (line.startsWith("> ")) {
      elements.push(<blockquote key={`blockquote-${globalKey++}`} className="border-l-4 border-cyan-200 pl-4 italic my-4 text-slate-300 bg-slate-800/30 py-2 rounded-r">{parseInlineMarkdown(line.slice(2))}</blockquote>)
      continue
    }

    if (/^\d+\. /.test(line)) {
      const olItems: string[] = [line.replace(/^\d+\. /, "")]
      while (linesCopy.length > 0 && /^\d+\. /.test(linesCopy[0])) {
        olItems.push(linesCopy.shift()!.replace(/^\d+\. /, ""))
      }
      elements.push(
        <ol key={`ol-${globalKey++}`} className="ml-6 list-decimal my-4 space-y-2 text-slate-300">
          {olItems.map((item, idx) => <li key={`ol-item-${globalKey}-${idx}`} className="leading-relaxed">{parseInlineMarkdown(item)}</li>)}
        </ol>
      )
      continue
    }

    if (line.startsWith("- ")) {
      const ulItems: string[] = [line.slice(2)]
      while (linesCopy.length > 0 && linesCopy[0].startsWith("- ")) {
        ulItems.push(linesCopy.shift()!.slice(2))
      }
      elements.push(
        <ul key={`ul-${globalKey++}`} className="ml-6 list-disc my-4 space-y-2 text-slate-300">
          {ulItems.map((item, idx) => <li key={`ul-item-${globalKey}-${idx}`} className="leading-relaxed">{parseInlineMarkdown(item)}</li>)}
        </ul>
      )
      continue
    }

    if (line.trim() === "---") {
      elements.push(<hr key={`hr-${globalKey++}`} className="my-8 border-cyan-200/30" />)
      continue
    }

    if (line.trim() === "") {
      elements.push(<div key={`space-${globalKey++}`} className="mb-2" />)
      continue
    }

    if (line.startsWith("![")) {
      const match = line.match(/!\[(.*?)\]\((.*?)\)/)
      if (match) {
        const [, alt, src] = match
        elements.push(<img key={`img-${globalKey++}`} src={src} alt={alt} className="my-6 rounded-xl shadow-lg shadow-cyan-200/10 border border-cyan-200/20 max-w-full h-auto" />)
        continue
      }
    }

    if (line.match(/^https?:\/\/.+$/)) {
      elements.push(
        <p key={`url-${globalKey++}`} className="my-4">
          <a href={line} target="_blank" rel="noopener noreferrer" className="text-cyan-200 hover:text-cyan-100 hover:underline break-all transition-colors">
            {line}
          </a>
        </p>
      )
      continue
    }

    elements.push(<p key={`p-${globalKey++}`} className="leading-relaxed text-lg text-slate-300">{parseInlineMarkdown(line)}</p>)
  }

  return <>{elements}</>
}