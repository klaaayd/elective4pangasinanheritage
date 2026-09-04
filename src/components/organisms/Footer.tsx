import * as React from "react"
import { Text } from "@/components/atoms/Text"
import { cn } from "@/utils/cn"
import Link from "next/link"

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t border-slate-200 bg-white py-8 mt-auto", className)}>
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <div>
          <Link href="/about" className="font-serif font-bold text-lg tracking-tight hover:text-slate-600 transition-colors">Pangasinan Heritage</Link>
          <Text variant="muted" className="mt-1">
            Activity 1 Project by Clyde Edrada. Showcasing the beauty of Pangasinan.
          </Text>
        </div>
        <div>
          <Text variant="small" className="text-slate-500">
            &copy; {new Date().getFullYear()} Pangasinan Heritage Showcase. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}

