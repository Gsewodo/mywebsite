import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface Article {
  id: string
  title: string
  badge: string
  image: string
  date: string
  readTime: string
  description: string
  content: string
}

// Cette fonction ne peut être utilisée que côté serveur
export function getAllArticles(): Article[] {
  // Vérifier si le dossier existe
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        id,
        title: data.title || '',
        badge: data.badge || '',
        image: data.image || '',
        date: data.date || '',
        readTime: data.readTime || '',
        description: data.description || '',
        content
      } as Article
    })

  // Trier par date (plus récent en premier)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Cette fonction ne peut être utilisée que côté serveur
export function getArticleById(id: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${id}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      id,
      title: data.title || '',
      badge: data.badge || '',
      image: data.image || '',
      date: data.date || '',
      readTime: data.readTime || '',
      description: data.description || '',
      content
    } as Article
  } catch (error) {
    return null
  }
}