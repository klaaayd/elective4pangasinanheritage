import { Header } from "@/components/organisms/Header"
import { Footer } from "@/components/organisms/Footer"
import { DestinationGrid } from "@/components/organisms/DestinationGrid"
import { SearchBar } from "@/components/molecules/SearchBar"
import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { destinations } from "@/data/destinations"

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-pangasinan-salt">
        <div className="bg-white border-b border-slate-200 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Heading level={1} className="mb-4">All Destinations</Heading>
            <Text variant="lead" className="max-w-2xl mx-auto mb-8">
              Browse through our comprehensive collection of Pangasinan&apos;s heritage sites, natural wonders, and cultural landmarks.
            </Text>
            <div className="flex justify-center">
              <SearchBar />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <DestinationGrid destinations={destinations} />
        </div>
      </main>
      <Footer />
    </>
  )
}

