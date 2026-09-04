import { getImagePath } from "@/utils/basePath";

export interface Destination {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  historicalBackground: string;
  significance: string;
  established: string;
  location: string;
  category: 'Natural' | 'Historical' | 'Cultural' | 'Religious';
  image: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: "hundred-islands",
    name: "Hundred Islands National Park",
    shortDescription: "An ancient geological marvel of 124 limestone islands in Lingayen Gulf, preserved as the first national park of the Philippines.",
    description: "The Hundred Islands National Park (Pangasinan: Kapulo-puloan or Taytay-Bakes) is the first national park and a protected area located in Alaminos, Pangasinan. The islands, totaling 124 at low tide and 123 at high tide, are scattered across Lingayen Gulf and are estimated to be over two million years old.",
    historicalBackground: "The islands originated as ancient coral reefs that were uplifted through centuries of tectonic activity. Continuous wave action and weathering gradually carved the bases of the limestone formations, resulting in their iconic mushroom-like silhouettes. In 1940, President Manuel L. Quezon formally declared it a protected National Park through Presidential Proclamation No. 667.",
    significance: "Serves as an irreplaceable marine biodiversity sanctuary and a living geological museum illustrating the prehistoric ocean floor topography of northern Luzon.",
    established: "Declared National Park in 1940",
    location: "Alaminos City",
    category: "Natural",
    image: getImagePath("/images/hundred-islands.jpg"),
    highlights: ["Geological Formations", "Marine Biodiversity", "Pilgrimage Island", "Coral Reef Ecosystems"]
  },
  {
    id: "manaoag-church",
    name: "Minor Basilica of Our Lady of the Rosary of Manaoag",
    shortDescription: "A centuries-old spiritual center and architectural sanctuary canonically affiliated with the Papal Basilica of Saint Mary Major in Rome.",
    description: "The Minor Basilica of Our Lady of the Rosary of Manaoag is one of the most revered Roman Catholic pilgrimage destinations in the country, drawing millions of faithful devotees and cultural scholars annually.",
    historicalBackground: "The origins of Manaoag date back to 1605 when an Augustinian friar established the initial mission. According to local historical lore, the Virgin Mary appeared to an indigenous farmer atop a hill, calling out to him (from the Pangasinan root word 'taoag', meaning 'to call'—hence 'Manaoag'). The stone sanctuary was progressively expanded across the Spanish colonial era and survived heavy bombardment during World War II.",
    significance: "A central pillar of Pangasinan religious heritage and popular devotion, elevated to the status of Minor Basilica in 2014 by Pope Francis.",
    established: "Founded in 1605",
    location: "Manaoag",
    category: "Religious",
    image: getImagePath("/images/manaoag-church.jpg"),
    highlights: ["17th-Century Ivories", "Colonial Belfry & Nave", "Spiritual Heritage Museum", "Votive Cultural Traditions"]
  },
  {
    id: "cape-bolinao-lighthouse",
    name: "Cape Bolinao Lighthouse",
    shortDescription: "An early 20th-century maritime beacon standing tall over Punta Piedra Point, guiding historic seafaring routes.",
    description: "Built in 1903 by a joint coalition of American, British, and Filipino engineers, the Cape Bolinao Lighthouse stands proudly atop Punta Piedra Point. Rising 101 feet, it is the second tallest lighthouse tower in the Philippines.",
    historicalBackground: "Erected during the American colonial administration to secure international shipping lanes navigating the South China Sea and Lingayen Gulf, the beacon guided countless merchant galleons, naval vessels, and coastal trading vessels across treacherous offshore coral banks for over a century.",
    significance: "An architectural testament to turn-of-the-century civil engineering and an enduring coastal beacon that protected international trade routes along western Pangasinan.",
    established: "Constructed in 1903",
    location: "Bolinao",
    category: "Historical",
    image: getImagePath("/images/cape-bolinao-lighthouse.jpg"),
    highlights: ["Early 20th-Century Architecture", "Maritime Trade Legacy", "Punta Piedra Bluff", "Western Sea Lookout"]
  },
  {
    id: "sunflower-maze",
    name: "Tayug Sunflower Eco Park",
    shortDescription: "An agricultural showcase celebrating the agrarian traditions and botanical heritage of eastern Pangasinan.",
    description: "The Tayug Sunflower Eco Park is a botanical landscape celebrating Pangasinan's fertile soil and innovative eco-agricultural heritage, showcasing expansive living labyrinths of blooming sunflowers and local flora.",
    historicalBackground: "Eastern Pangasinan has historically served as the agricultural heartland of the province. The eco-park was designed to bridge traditional rural crop cultivation with public education, demonstrating sustainable farming methods and indigenous flower varieties to modern generations.",
    significance: "Demonstrates the agricultural heritage and biodiversity stewardship that sustains local rural communities across the province.",
    established: "Agricultural Heritage Initiative",
    location: "Tayug",
    category: "Cultural",
    image: getImagePath("/images/sunflower-maze.jpg"),
    highlights: ["Agro-Botanical Heritage", "Biodiversity Education", "Rural Craftsmanship", "Landscape Cultivation"]
  },
  {
    id: "bued-mangrove",
    name: "Bued Mangrove Forest Park",
    shortDescription: "A vital estuarine conservation sanctuary preserving native mangrove species and coastal wildlife ecosystems.",
    description: "The Bued Mangrove Forest Park is an essential coastal eco-reserve dedicated to protecting the delicate wetland ecosystems of western Pangasinan's shorelines.",
    historicalBackground: "The estuarine wetlands of Lingayen Gulf were once the traditional fishing and foraging grounds of pre-colonial Pangasinan coastal tribes. Recognizing the vital role of mangroves as natural typhoon barriers and nursery grounds for indigenous fish, local preservationists transformed the Bued estuaries into an active eco-sanctuary.",
    significance: "An exemplary model of community-driven environmental conservation preserving indigenous marine ecosystems and protecting coastlines from erosion.",
    established: "Protected Conservation Area",
    location: "Alaminos City",
    category: "Natural",
    image: getImagePath("/images/bued-mangrove.jpg"),
    highlights: ["Indigenous Mangrove Species", "Estuarine Wildlife Sanctuary", "Bamboo Eco-Walkway", "Coastal Defense Heritage"]
  },
  {
    id: "st-james-the-great-parish",
    name: "St. James the Great Parish Church",
    shortDescription: "A fortress-like Spanish colonial church constructed in 1609 using dark volcanic rock and sea coral blocks.",
    description: "Located in the heritage district of Bolinao, the St. James the Great Parish Church stands as one of the oldest surviving stone church complexes in northern Luzon.",
    historicalBackground: "Constructed in 1609 by Augustinian Recollect missionaries, the church's walls were assembled from blocks of black coral rock quarried directly from the adjacent sea. Built with thick fortress-like buttresses, it frequently served as a sanctuary for townsfolk fleeing pirate raids along the coast during the 17th and 18th centuries.",
    significance: "Recognized as a historic cultural treasure reflecting Spanish Baroque religious architecture adapted with indigenous materials and coastal defensive engineering.",
    established: "Erected in 1609",
    location: "Bolinao",
    category: "Religious",
    image: getImagePath("/images/st-james-the-great-parish.jpg"),
    highlights: ["Black Coral Stone Masonry", "17th-Century Fortress Architecture", "Historical Marker", "Spanish Colonial Archive"]
  }
];

