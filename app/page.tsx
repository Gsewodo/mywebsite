import { PortfolioHeader } from "@/components/portfolio-header"
import { HeroSection } from "@/components/hero-section"
import { ArticlesGrid } from "@/components/articles-grid-server"
import { PortfolioFooter } from "@/components/portfolio-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <PortfolioHeader />
      <HeroSection />
      <ArticlesGrid />
      <PortfolioFooter />
    </main>
  )
}