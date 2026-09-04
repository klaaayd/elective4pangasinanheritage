import * as React from "react"
import { DestinationCard } from "@/components/molecules/DestinationCard"
import { Destination } from "@/data/destinations"
import { cn } from "@/utils/cn"

interface DestinationGridProps extends React.HTMLAttributes<HTMLDivElement> {
  destinations: Destination[];
}

export function DestinationGrid({ destinations, className, ...props }: DestinationGridProps) {
  return (
    <div 
      className={cn("grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}
      {...props}
    >
      {destinations.map((dest) => (
        <DestinationCard key={dest.id} destination={dest} />
      ))}
    </div>
  )
}

