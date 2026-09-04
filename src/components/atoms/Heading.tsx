import * as React from "react"
import { cn } from "@/utils/cn"

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({ className, level = 2, children, ...props }: HeadingProps) {
  const baseStyles = "font-serif font-bold text-foreground";
  
  const levels = {
    1: "text-4xl md:text-5xl lg:text-6xl tracking-tight",
    2: "text-3xl md:text-4xl tracking-tight",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl",
    5: "text-lg md:text-xl",
    6: "text-base md:text-lg",
  };

  const finalClassName = cn(baseStyles, levels[level], className);

  switch (level) {
    case 1: return <h1 className={finalClassName} {...props}>{children}</h1>;
    case 3: return <h3 className={finalClassName} {...props}>{children}</h3>;
    case 4: return <h4 className={finalClassName} {...props}>{children}</h4>;
    case 5: return <h5 className={finalClassName} {...props}>{children}</h5>;
    case 6: return <h6 className={finalClassName} {...props}>{children}</h6>;
    case 2:
    default:
      return <h2 className={finalClassName} {...props}>{children}</h2>;
  }
}
