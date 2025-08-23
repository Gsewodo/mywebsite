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
    <div className="min-h-screen" style={{ backgroundColor: "#F3F2EF" }}>
      <PortfolioHeader />

      <div className="w-full">
        {/* Header avec bouton retour */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Button
            variant="outline"
            className="mb-6 bg-white border border-[#D1D9E0] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-[#004182] transition-all duration-300 hover:shadow-lg hover:shadow-[#0A66C2]/20"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux articles
          </Button>
        </div>

        {/* Contenu de l'article */}
        <div ref={articleContentRef} className="max-w-4xl mx-auto px-4 py-8">
          <div className="aspect-video overflow-hidden rounded-xl mb-8 shadow-lg shadow-[#0A66C2]/10 border border-[#D1D9E0] bg-white">
            <img
              src={article.image || "/placeholder.svg?height=300&width=600"}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <Badge className="bg-[#F3F2EF] text-[#0A66C2] border border-[#D1D9E0] text-sm px-3 py-1 rounded-full">
                {article.badge}
              </Badge>
              <div className="flex items-center gap-6 text-sm text-[#0A66C2]">
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

            <h1 className="text-5xl font-bold leading-tight tracking-tight mb-6" style={{ color: "#1D2226" }}>
              {article.title}
            </h1>
            <p className="text-lg font-medium leading-relaxed" style={{ color: "#5E6D77" }}>
              {article.description}
            </p>
          </div>

          {/* Markdown */}
          <div className="prose prose-lg max-w-none space-y-6" style={{ color: "#1D2226" }}>
            <MarkdownRenderer content={article.content} />
          </div>
        </div>
      </div>

      <PortfolioFooter />
    </div>
  )
}

// Markdown Renderer adapté aux couleurs LinkedIn
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
        inlineElements.push(<strong key={`strong-${globalKey++}`} className="text-[#0A66C2] font-bold">{match[2]}</strong>)
      } else if (match[3]) {
        inlineElements.push(<em key={`em-${globalKey++}`} className="text-[#5E6D77]">{match[3]}</em>)
      } else if (match[4]) {
        inlineElements.push(<del key={`del-${globalKey++}`} className="text-[#E06847]">{match[4]}</del>)
      } else if (match[5]) {
        inlineElements.push(<code key={`code-${globalKey++}`} className="bg-[#F3F2EF] text-[#0A66C2] px-2 py-1 rounded border border-[#D1D9E0]">{match[5]}</code>)
      } else if (match[6] && match[7]) {
        inlineElements.push(
          <a
            key={`link-${globalKey++}`}
            href={match[7]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:text-[#004182] hover:underline transition-colors"
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
        <pre key={`code-${globalKey++}`} className="bg-[#F3F2EF] text-[#1D2226] p-4 rounded-lg overflow-x-auto my-4 border border-[#D1D9E0]">
          <code>{codeLines.join("\n")}</code>
        </pre>
      )
      continue
    }

    if (line.startsWith("### ")) {
      elements.push(<h3 key={`h3-${globalKey++}`} className="text-2xl font-semibold mt-6 mb-3" style={{ color: "#1D2226" }}>{parseInlineMarkdown(line.slice(4))}</h3>)
      continue
    }
    if (line.startsWith("## ")) {
      elements.push(<h2 key={`h2-${globalKey++}`} className="text-3xl font-bold mt-8 mb-4" style={{ color: "#1D2226" }}>{parseInlineMarkdown(line.slice(3))}</h2>)
      continue
    }
    if (line.startsWith("# ")) {
      elements.push(<h1 key={`h1-${globalKey++}`} className="text-4xl font-extrabold mt-10 mb-5" style={{ color: "#1D2226" }}>{parseInlineMarkdown(line.slice(2))}</h1>)
      continue
    }

    if (line.startsWith("> ")) {
      elements.push(<blockquote key={`blockquote-${globalKey++}`} className="border-l-4 border-[#0A66C2] pl-4 italic my-4 bg-[#F3F2EF] text-[#5E6D77] py-2 rounded-r">{parseInlineMarkdown(line.slice(2))}</blockquote>)
      continue
    }

    if (/^\d+\. /.test(line)) {
      const olItems: string[] = [line.replace(/^\d+\. /, "")]
      while (linesCopy.length > 0 && /^\d+\. /.test(linesCopy[0])) {
        olItems.push(linesCopy.shift()!.replace(/^\d+\. /, ""))
      }
      elements.push(
        <ol key={`ol-${globalKey++}`} className="ml-6 list-decimal my-4 space-y-2" style={{ color: "#5E6D77" }}>
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
        <ul key={`ul-${globalKey++}`} className="ml-6 list-disc my-4 space-y-2" style={{ color: "#5E6D77" }}>
          {ulItems.map((item, idx) => <li key={`ul-item-${globalKey}-${idx}`} className="leading-relaxed">{parseInlineMarkdown(item)}</li>)}
        </ul>
      )
      continue
    }

    if (line.trim() === "---") {
      elements.push(<hr key={`hr-${globalKey++}`} className="my-8 border-[#D1D9E0]" />)
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
        elements.push(<img key={`img-${globalKey++}`} src={src} alt={alt} className="my-6 rounded-xl shadow-lg shadow-[#0A66C2]/10 border border-[#D1D9E0] max-w-full h-auto" />)
        continue
      }
    }

    if (line.match(/^https?:\/\/.+$/)) {
      elements.push(
        <p key={`url-${globalKey++}`} className="my-4">
          <a href={line} target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:text-[#004182] hover:underline break-all transition-colors">
            {line}
          </a>
        </p>
      )
      continue
    }

    elements.push(<p key={`p-${globalKey++}`} className="leading-relaxed text-lg" style={{ color: "#5E6D77" }}>{parseInlineMarkdown(line)}</p>)
  }

  return <>{elements}</>
}
