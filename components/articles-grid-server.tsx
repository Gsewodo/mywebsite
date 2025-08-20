import { getAllArticles } from "@/lib/articles"
import { ArticlesGridClient } from "./articles-grid"

// Composant serveur qui récupère les données
export function ArticlesGrid() {
  const articles = getAllArticles()
  
  return <ArticlesGridClient articles={articles} />
}