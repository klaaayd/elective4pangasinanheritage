import * as React from "react"
import { cn } from "@/utils/cn"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pangasinan-blue-dark disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      primary: "bg-pangasinan-blue text-white hover:bg-pangasinan-blue-dark",
      secondary: "bg-pangasinan-green text-white hover:bg-pangasinan-green-dark",
      outline: "border border-pangasinan-blue text-pangasinan-blue hover:bg-pangasinan-blue hover:text-white",
      ghost: "hover:bg-slate-100 text-slate-700",
    }
    
    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-8 text-lg",
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

