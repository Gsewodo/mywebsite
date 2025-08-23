"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-6 justify-center">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium px-3 py-1 rounded-full transition-colors duration-200",
          pathname === "/"
            ? "text-[#0A66C2] border-b-2 border-[#0A66C2]" // actif → texte bleu, léger soulignement
            : "text-[#374151] hover:text-[#0A66C2]" // inactif → texte gris, hover bleu
        )}
      >
        Accueil
      </Link>
      <Link
        href="/cv"
        className={cn(
          "text-sm font-medium px-3 py-1 rounded-full transition-colors duration-200",
          pathname === "/cv"
            ? "text-[#0A66C2] border-b-2 border-[#0A66C2]" // actif
            : "text-[#374151] hover:text-[#0A66C2]" // inactif
        )}
      >
        CV
      </Link>
    </nav>
  )
}
