import * as React from "react"
import { cn } from "@/utils/cn"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'natural' | 'historical' | 'cultural' | 'religious';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
  
  const variants = {
    default: "bg-slate-100 text-slate-900",
    natural: "bg-pangasinan-green-light/20 text-pangasinan-green-dark",
    historical: "bg-pangasinan-sand-light/50 text-yellow-800",
    cultural: "bg-purple-100 text-purple-800",
    religious: "bg-pangasinan-blue-light/20 text-pangasinan-blue-dark",
  }

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  )
}

export { Badge }

