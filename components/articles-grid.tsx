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
    <section className="py-16 px-4 bg-[#F3F2EF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D2226] mb-12">
          Mes projets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/articles/${article.id}`} className="group block">
              <article className="bg-white rounded-xl border border-[#D1D9E0] shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:border-[#0A66C2]/40 flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-52 bg-[#EEF3F8] flex-shrink-0 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${article.image || "/placeholder.svg?height=300&width=500"})`
                    }}
                  />
                  {/* Overlay gradient sobre */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A66C2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Header with badge */}
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-[#E8F3FF] text-[#0A66C2] border border-[#D1E5F4]">
                      {article.badge}
                    </Badge>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-bold text-xl mb-3 text-[#1D2226] group-hover:text-[#0A66C2] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#5E6D77] text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {article.description}
                  </p>
                  
                  {/* Date and read time */}
                  <div className="flex items-center gap-4 text-xs text-[#5E6D77] mt-auto">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-[#0A66C2]" />
                      <span>
                        {new Date(article.date).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-[#0A66C2]" />
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
