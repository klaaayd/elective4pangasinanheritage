import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { Badge } from "@/components/atoms/Badge"
import { Button } from "@/components/atoms/Button"
import Link from "next/link"
import Image from "next/image"
import { getImagePath } from "@/utils/basePath"

export const metadata = {
  title: "About Pangasinan | Heritage Showcase",
  description: "Learn about the rich cultural and natural heritage of Pangasinan province.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-slate-900 py-20 lg:py-32">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image 
              src={getImagePath("/images/hundred-islands.jpg")} 
              alt="Hundred Islands" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900/90 to-slate-900/40" />
          
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <Badge variant="cultural" className="mb-4 bg-pangasinan-sand text-slate-900 border-none">Discover</Badge>
              <Heading level={1} className="mb-6 text-white text-4xl md:text-5xl lg:text-6xl">The Heart of Northern Luzon</Heading>
              <Text variant="lead" className="text-slate-200 text-lg md:text-xl max-w-2xl">
                Pangasinan translates to &ldquo;place of salt&rdquo; or &ldquo;place of salt-making&rdquo;, derived from the province&apos;s rich coastal resources. It is a land of stunning natural wonders and deep-rooted heritage.
              </Text>
            </div>
          </div>
        </section>

        {/* Content Section with Sidebar Nav */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Sidebar Navigation */}
              <aside className="lg:w-1/4">
                <div className="sticky top-24 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <Heading level={4} className="mb-4 text-pangasinan-blue">On this page</Heading>
                  <nav className="flex flex-col space-y-3">
                    <a href="#history" className="text-slate-600 hover:text-pangasinan-blue transition-colors font-medium">History & Culture</a>
                    <a href="#geography" className="text-slate-600 hover:text-pangasinan-blue transition-colors font-medium">Geography & Nature</a>
                    <a href="#mission" className="text-slate-600 hover:text-pangasinan-blue transition-colors font-medium">Our Mission</a>
                  </nav>
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Text variant="small" className="mb-4 text-slate-500">Ready to explore?</Text>
                    <Link href="/destinations" className="block w-full">
                      <Button className="w-full">View Destinations</Button>
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:w-3/4 max-w-4xl space-y-16">
                
                {/* History Block */}
                <div id="history" className="scroll-mt-24">
                  <Heading level={2} className="mb-6 text-3xl">A Tapestry of Cultures</Heading>
                  <div className="prose prose-lg text-slate-600 max-w-none">
                    <p className="mb-4">
                      The province is a melting pot of various ethnolinguistic groups. While <strong>Pangasinan</strong> is the primary language of the central towns, <strong>Ilocano</strong> is widely spoken in the eastern and western municipalities. This linguistic diversity reflects a rich history of migration and trade that has shaped the local culture over centuries.
                    </p>
                    <p className="mb-6">
                      Pangasinan&apos;s history dates back to pre-colonial times when it was an ancient kingdom known as <em>Luyag na Kaboloan</em>. It successfully traded with China, Japan, and other Southeast Asian kingdoms long before the Spanish arrival in the 16th century.
                    </p>
                  </div>
                  <div className="mt-6 rounded-2xl overflow-hidden shadow-md border border-slate-200 h-64 relative">
                     <Image src={getImagePath("/images/manaoag-church.jpg")} alt="Manaoag Church" fill className="object-cover" />
                  </div>
                </div>

                {/* Geography Block */}
                <div id="geography" className="scroll-mt-24">
                  <Heading level={2} className="mb-6 text-3xl">Geographical Wonders</Heading>
                  <div className="prose prose-lg text-slate-600 max-w-none">
                    <p className="mb-4">
                      Geographically, Pangasinan is beautifully shaped like a crescent moon, hugging the vast <strong>Lingayen Gulf</strong>. It is bordered by the majestic Cordillera mountains to the east, the Zambales mountains to the west, and the fertile central plains of Luzon to the south.
                    </p>
                    <p className="mb-6">
                      The province is globally renowned for the <strong>Hundred Islands National Park</strong>, a stunning cluster of 124 islands offering white sand beaches, coral reefs, and unique mushroom-shaped limestone formations. Beyond the islands, Pangasinan boasts cascading waterfalls, extensive cave systems, and pristine coastal areas like Cape Bolinao.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                     <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-48 relative">
                       <Image src={getImagePath("/images/sunflower-maze.jpg")} alt="Sunflower Maze" fill className="object-cover" />
                     </div>
                     <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-48 relative">
                       <Image src={getImagePath("/images/bued-mangrove.jpg")} alt="Bued Mangrove" fill className="object-cover" />
                     </div>
                  </div>
                </div>

                {/* Mission Block */}
                <div id="mission" className="scroll-mt-24 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
                  <Badge className="mb-4 bg-pangasinan-green hover:bg-pangasinan-green-dark">Showcase Project</Badge>
                  <Heading level={3} className="mb-4 text-2xl">Preserving Our Legacy</Heading>
                  <Text className="text-slate-600 text-lg mb-6 leading-relaxed">
                    This digital showcase was created to digitally preserve and elegantly promote the breathtaking natural and cultural sites of Pangasinan. Through this platform, we hope to inspire both locals and tourists to appreciate, protect, and respectfully explore the treasures of our beloved province.
                  </Text>
                  <div className="flex gap-4">
                    <Link href="/destinations">
                      <Button size="lg" className="px-8">Start Exploring</Button>
                    </Link>
                    <Link href="/">
                      <Button variant="outline" size="lg" className="px-8">Back to Home</Button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
