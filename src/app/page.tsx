import { Header } from "@/components/organisms/Header"
import { Footer } from "@/components/organisms/Footer"
import { Hero } from "@/components/organisms/Hero"
import { DestinationGrid } from "@/components/organisms/DestinationGrid"
import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { destinations } from "@/data/destinations"

export default function Home() {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="mb-10 md:mb-16 text-center max-w-3xl mx-auto">
            <Heading level={2} className="mb-4">Featured Destinations</Heading>
            <Text variant="lead">
              Explore some of the most iconic and beloved heritage sites in Pangasinan. These handpicked locations offer a glimpse into the province&apos;s rich history and natural beauty.
            </Text>
          </div>
          
          <DestinationGrid destinations={featuredDestinations} />
        </section>
        
        <section className="bg-pangasinan-salt-dark py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <Heading level={2} className="mb-4">Why Visit Pangasinan?</Heading>
              <Text className="mb-4">
                Pangasinan is a province where history, culture, and nature intertwine beautifully. From the world-renowned Hundred Islands to the solemnity of the Manaoag Church, it offers diverse experiences for every type of traveler.
              </Text>
              <Text>
                Our digital showcase aims to preserve and promote these heritage sites, ensuring they remain appreciated for generations to come. Join us in celebrating the heart of the north.
              </Text>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               {/* Decorative placeholders or additional content */}
               <div className="h-48 rounded-lg bg-pangasinan-blue-light/20 flex items-center justify-center p-4 text-center border border-pangasinan-blue/20">
                 <Heading level={4} className="text-pangasinan-blue-dark">Natural Wonders</Heading>
               </div>
               <div className="h-48 rounded-lg bg-pangasinan-sand-light/20 flex items-center justify-center p-4 text-center border border-pangasinan-sand-dark/20">
                 <Heading level={4} className="text-yellow-800">Historical Landmarks</Heading>
               </div>
               <div className="h-48 rounded-lg bg-pangasinan-green-light/20 flex items-center justify-center p-4 text-center border border-pangasinan-green/20">
                 <Heading level={4} className="text-pangasinan-green-dark">Eco-Tourism</Heading>
               </div>
               <div className="h-48 rounded-lg bg-purple-100/50 flex items-center justify-center p-4 text-center border border-purple-200">
                 <Heading level={4} className="text-purple-800">Cultural Heritage</Heading>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
