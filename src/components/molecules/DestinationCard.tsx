import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { Badge } from "@/components/atoms/Badge"
import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { Destination } from "@/data/destinations"
import { cn } from "@/utils/cn"

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  destination: Destination;
}

export function DestinationCard({ destination, className, ...props }: DestinationCardProps) {
  return (
    <div 
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3">
          <Badge variant={destination.category.toLowerCase() as 'natural' | 'historical' | 'cultural' | 'religious'}>
            {destination.category}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center text-slate-500">
          <MapPin className="mr-1 h-4 w-4" />
          <Text variant="small" className="text-slate-500">{destination.location}</Text>
        </div>
        <Heading level={3} className="mb-2 text-xl line-clamp-1 group-hover:text-pangasinan-blue transition-colors">
          <Link href={`/destinations/${destination.id}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {destination.name}
          </Link>
        </Heading>
        <Text variant="muted" className="line-clamp-2 mb-4 flex-1">
          {destination.shortDescription}
        </Text>
        <div className="mt-auto">
          <span className="text-sm font-medium text-pangasinan-blue group-hover:underline">
            Explore destination &rarr;
          </span>
        </div>
      </div>
    </div>
  )
}

