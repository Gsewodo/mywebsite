"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { Article } from "@/lib/articles"

interface ArticlesGridClientProps {
  articles: Article[]
}

export function ArticlesGridClient({ articles }: ArticlesGridClientProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-800 to-slate-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Mes projets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/articles/${article.id}`} className="group block">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/20 group-hover:-translate-y-1 group-hover:border-cyan-400/30 flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-52 bg-gradient-to-br from-slate-700 to-slate-800 flex-shrink-0 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${article.image || "/placeholder.svg?height=300&width=500"})`
                    }}
                  />
                  {/* Overlay gradient pour effet cyber */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Header with badge */}
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 border border-cyan-400/20">
                      {article.badge}
                    </Badge>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-bold text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {article.description}
                  </p>
                  
                  {/* Date and read time */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-auto">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>
                        {new Date(article.date).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}