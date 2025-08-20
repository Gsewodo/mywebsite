import { getArticleById } from "@/lib/articles"
import { notFound } from "next/navigation"
import { ArticlePageClient } from "./article-client"

interface ArticlePageProps {
  params: Promise<{ id: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params
  const article = getArticleById(id)

  if (!article) {
    return notFound()
  }

  return <ArticlePageClient article={article} />
}