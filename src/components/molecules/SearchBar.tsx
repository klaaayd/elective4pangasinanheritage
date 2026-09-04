"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/atoms/Button"
import { cn } from "@/utils/cn"

export function SearchBar({ className, ...props }: React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form 
      className={cn("flex w-full max-w-sm items-center space-x-2", className)}
      onSubmit={(e) => e.preventDefault()}
      {...props}
    >
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
        <input
          type="search"
          placeholder="Search destinations..."
          className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 pl-9 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pangasinan-blue focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  )
}

