import * as React from "react"
import Link from "next/link"
import { Compass } from "lucide-react"
import { cn } from "@/utils/cn"

export function Header({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md", className)}>
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Compass className="h-6 w-6 text-pangasinan-blue" />
          <span className="font-serif font-bold text-lg tracking-tight">Pangasinan Heritage</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="text-slate-600 hover:text-pangasinan-blue transition-colors">
            Home
          </Link>
          <Link href="/destinations" className="text-slate-600 hover:text-pangasinan-blue transition-colors">
            Destinations
          </Link>
          <Link href="/about" className="text-slate-600 hover:text-pangasinan-blue transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
