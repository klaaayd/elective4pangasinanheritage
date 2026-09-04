import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { Button } from "@/components/atoms/Button"
import { cn } from "@/utils/cn"
import { getImagePath } from "@/utils/basePath"

export function Hero({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("relative w-full overflow-hidden bg-slate-900 py-24 lg:py-32 xl:py-48", className)}>
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src={getImagePath("/images/hundred-islands.jpg")} 
          alt="Hundred Islands" 
          fill 
          className="object-cover" 
          priority 
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <Heading level={1} className="text-white max-w-3xl mb-4">
          Discover the Hidden Gems of Pangasinan
        </Heading>
        <Text variant="lead" className="text-slate-200 max-w-2xl mb-8">
          From the breathtaking Hundred Islands to historical coastal lighthouses, immerse yourself in the rich cultural and natural heritage.
        </Text>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/destinations">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8">
              Explore Destinations
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
              Discover Our History
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

