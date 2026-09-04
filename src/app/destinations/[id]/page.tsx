import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowLeft } from "lucide-react"
import { Header } from "@/components/organisms/Header"
import { Footer } from "@/components/organisms/Footer"
import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { Badge } from "@/components/atoms/Badge"
import { Button } from "@/components/atoms/Button"
import { destinations } from "@/data/destinations"

interface DestinationDetailsProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return destinations.map((dest) => ({
    id: dest.id,
  }));
}

export default function DestinationDetailsPage({ params }: DestinationDetailsProps) {
  const destination = destinations.find((d) => d.id === params.id);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="relative h-64 md:h-96 w-full bg-slate-900">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 md:px-6 pb-12">
              <Link href="/destinations" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Destinations
              </Link>
              <div className="flex items-center space-x-3 mb-4">
                <Badge variant={destination.category.toLowerCase() as 'natural' | 'historical' | 'cultural' | 'religious'} className="bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                  {destination.category}
                </Badge>
                <div className="flex items-center text-white/90 text-sm font-medium">
                  <MapPin className="mr-1 h-4 w-4" />
                  {destination.location}
                </div>
              </div>
              <Heading level={1} className="text-white">{destination.name}</Heading>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Heading level={2} className="mb-6">About this Destination</Heading>
              <Text className="text-lg leading-relaxed mb-8">
                {destination.description}
              </Text>
              
              <Heading level={3} className="mb-4">Highlights</Heading>
              <ul className="list-disc pl-5 space-y-2 mb-8">
                {destination.highlights.map((highlight, index) => (
                  <li key={index}>
                    <Text>{highlight}</Text>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sticky top-24">
                <Heading level={3} className="mb-4">Plan Your Visit</Heading>
                <Text variant="muted" className="mb-6">
                  Ready to explore the beauty of {destination.name}? Make sure to check local guidelines and weather conditions before traveling.
                </Text>
                <Button className="w-full mb-3">Book a Tour</Button>
                <Button variant="outline" className="w-full">Download Brochure</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

