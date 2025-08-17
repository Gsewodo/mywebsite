"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-6 justify-center">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Accueil
      </Link>
      <Link
        href="/cv"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/cv" ? "text-primary" : "text-muted-foreground",
        )}
      >
        CV
      </Link>
    </nav>
  )
}
