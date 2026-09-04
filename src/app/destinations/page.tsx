"use client"

import * as React from "react"
import { Header } from "@/components/organisms/Header"
import { Footer } from "@/components/organisms/Footer"
import { DestinationGrid } from "@/components/organisms/DestinationGrid"
import { SearchBar } from "@/components/molecules/SearchBar"
import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { Button } from "@/components/atoms/Button"
import { destinations } from "@/data/destinations"
import { Compass, RotateCcw } from "lucide-react"

const CATEGORIES = ["All", "Natural", "Historical", "Cultural", "Religious"] as const;

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const filteredDestinations = React.useMemo(() => {
    return destinations.filter((dest) => {
      const matchesCategory = 
        selectedCategory === "All" || 
        dest.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        dest.name.toLowerCase().includes(q) ||
        dest.location.toLowerCase().includes(q) ||
        dest.category.toLowerCase().includes(q) ||
        dest.shortDescription.toLowerCase().includes(q) ||
        dest.highlights.some(h => h.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-pangasinan-salt min-h-[80vh]">
        <div className="bg-white border-b border-slate-200 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Heading level={1} className="mb-4">All Destinations</Heading>
            <Text variant="lead" className="max-w-2xl mx-auto mb-8 text-slate-600">
              Browse through our comprehensive collection of Pangasinan&apos;s heritage sites, natural wonders, and cultural landmarks.
            </Text>
            
            {/* Search Input */}
            <div className="flex justify-center mb-6">
              <SearchBar 
                value={searchQuery}
                onChangeValue={setSearchQuery}
                onSearch={setSearchQuery}
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "bg-pangasinan-blue text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
          {/* Results Summary */}
          <div className="flex items-center justify-between mb-8">
            <Text variant="small" className="text-slate-500 font-medium">
              Showing {filteredDestinations.length} of {destinations.length} destinations
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </Text>
            
            {(searchQuery || selectedCategory !== "All") && (
              <button
                onClick={handleReset}
                className="inline-flex items-center text-xs font-medium text-pangasinan-blue hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1" />
                Reset filters
              </button>
            )}
          </div>

          {/* Grid or Empty State */}
          {filteredDestinations.length > 0 ? (
            <DestinationGrid destinations={filteredDestinations} />
          ) : (
            <div className="text-center py-16 px-4 bg-white rounded-2xl border border-slate-200 max-w-lg mx-auto shadow-sm">
              <Compass className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <Heading level={3} className="text-xl mb-2">No Destinations Found</Heading>
              <Text className="text-slate-500 mb-6 text-sm">
                We couldn&apos;t find any heritage sites matching your search. Try checking your spelling or explore another category.
              </Text>
              <Button onClick={handleReset} variant="outline">
                Clear Filters & Show All
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

