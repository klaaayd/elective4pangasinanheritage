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
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div>
                <Heading level={2} className="mb-4 text-3xl">Heritage Overview</Heading>
                <Text className="text-lg leading-relaxed text-slate-700">
                  {destination.description}
                </Text>
              </div>

              {/* Historical Background */}
              <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
                <Heading level={3} className="mb-4 text-2xl text-pangasinan-blue">Historical Background</Heading>
                <Text className="text-base leading-relaxed text-slate-700">
                  {destination.historicalBackground}
                </Text>
              </div>

              {/* Cultural Significance */}
              <div>
                <Heading level={3} className="mb-4 text-2xl text-pangasinan-green">Cultural & Ecological Significance</Heading>
                <Text className="text-base leading-relaxed text-slate-700">
                  {destination.significance}
                </Text>
              </div>
              
              {/* Highlights */}
              <div>
                <Heading level={3} className="mb-4 text-2xl">Key Heritage Features</Heading>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-pangasinan-blue mr-3 shrink-0" />
                      <Text className="font-medium text-slate-800">{highlight}</Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar: Heritage Registry Card */}
            <div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 sticky top-24 shadow-sm space-y-6">
                <div>
                  <Heading level={3} className="text-xl mb-4">Heritage Registry</Heading>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <dt className="text-slate-500">Location:</dt>
                      <dd className="font-medium text-slate-900">{destination.location}, Pangasinan</dd>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <dt className="text-slate-500">Category:</dt>
                      <dd className="font-medium text-slate-900">{destination.category}</dd>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <dt className="text-slate-500">Period:</dt>
                      <dd className="font-medium text-slate-900">{destination.established}</dd>
                    </div>
                    <div className="flex justify-between pb-1">
                      <dt className="text-slate-500">Protection:</dt>
                      <dd className="font-medium text-emerald-700">Protected Heritage Site</dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-xl bg-amber-50/80 border border-amber-200/60 p-4">
                  <Text className="text-xs text-amber-900 leading-relaxed">
                    <strong>Preservation Note:</strong> This site forms part of the collective natural and cultural legacy of Pangasinan. Visitors and scholars are encouraged to preserve and respect its heritage.
                  </Text>
                </div>

                <div className="space-y-3 pt-2">
                  <Link href="/destinations" className="block">
                    <Button variant="primary" className="w-full">
                      Explore All Heritage Sites
                    </Button>
                  </Link>
                  <Link href="/about" className="block">
                    <Button variant="outline" className="w-full">
                      Read Province History
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

