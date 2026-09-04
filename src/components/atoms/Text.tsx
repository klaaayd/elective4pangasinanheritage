import * as React from "react"
import { cn } from "@/utils/cn"

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'default' | 'muted' | 'lead' | 'large' | 'small';
}

export function Text({ className, variant = 'default', children, ...props }: TextProps) {
  const variants = {
    default: "text-base text-foreground leading-7",
    muted: "text-sm text-slate-500",
    lead: "text-xl text-slate-700",
    large: "text-lg font-semibold text-foreground",
    small: "text-sm font-medium leading-none",
  };

  return (
    <p className={cn(variants[variant], className)} {...props}>
      {children}
    </p>
  )
}

