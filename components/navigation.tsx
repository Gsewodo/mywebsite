"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-8 justify-center">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors duration-200",
          pathname === "/" 
            ? "text-cyan-200" 
            : "text-slate-400 hover:text-cyan-200"
        )}
      >
        Accueil
      </Link>
      <Link
        href="/cv"
        className={cn(
          "text-sm font-medium transition-colors duration-200",
          pathname === "/cv" 
               ? "text-cyan-200" 
            : "text-slate-400 hover:text-cyan-200"
        )}
      
      >
        CV
      </Link>
    </nav>
  )
}