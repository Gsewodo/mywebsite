"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import articlesData from "@/data/articles.json"

export function ArticlesGrid() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mes projets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className="group block"
            >
              <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${article.image || "/placeholder.svg?height=300&width=500"})`
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Header with badge and meta */}
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {article.title.includes("Sécurité") ? "Security" :
                       article.title.includes("React") ? "Frontend" :
                       article.title.includes("Architecture") ? "Backend" : 
                       "Projet perso"}
                    </Badge>
                  </div>
                  
                {/* Title */}
                  <h3 className="font-bold text-xl mb-3 text-gray-900 transition-colors line-clamp-2"
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = ''}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = ''}>
                    {article.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  
                  {/* Date and read time */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
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
    </div>
  )
}