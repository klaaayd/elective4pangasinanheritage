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
        "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
      {...props}
    >
      <Link href={`/destinations/${destination.id}`} className="block relative h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3 z-10">
          <Badge variant={destination.category.toLowerCase() as 'natural' | 'historical' | 'cultural' | 'religious'}>
            {destination.category}
          </Badge>
        </div>
      </Link>
      
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2.5 flex items-center text-slate-500 text-xs font-medium">
          <MapPin className="mr-1 h-3.5 w-3.5 text-pangasinan-blue shrink-0" />
          <span>{destination.location}, Pangasinan</span>
        </div>

        <Heading level={3} className="mb-2 text-xl font-bold line-clamp-1 group-hover:text-pangasinan-blue transition-colors">
          <Link href={`/destinations/${destination.id}`}>
            {destination.name}
          </Link>
        </Heading>

        <Text variant="muted" className="line-clamp-2 mb-6 text-sm text-slate-600 flex-1 leading-relaxed">
          {destination.shortDescription}
        </Text>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {destination.category}
          </span>
          <Link 
            href={`/destinations/${destination.id}`}
            className="text-sm font-semibold text-pangasinan-blue hover:text-pangasinan-blue-dark flex items-center gap-1 transition-colors"
          >
            Learn Heritage &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}

