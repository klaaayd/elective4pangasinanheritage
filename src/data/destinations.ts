import { getImagePath } from "@/utils/basePath";

export interface Destination {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  location: string;
  category: 'Natural' | 'Historical' | 'Cultural' | 'Religious';
  image: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: "hundred-islands",
    name: "Hundred Islands National Park",
    shortDescription: "A group of 124 islands scattered in Lingayen Gulf, known for their mushroom-like shapes and vibrant marine life.",
    description: "The Hundred Islands National Park (Pangasinan: Kapulo-puloan or Taytay-Bakes) is the first national park and a protected area located in Alaminos, Pangasinan in the northern Philippines. The islands, totaling 124 at low tide and 123 at high tide, are scattered in Lingayen Gulf and are believed to be about two million years old. They actually consist of ancient corals that extend well inland.",
    location: "Alaminos City",
    category: "Natural",
    image: getImagePath("/images/hundred-islands.jpg"),
    highlights: ["Island Hopping", "Snorkeling", "Pilgrimage Island", "Governor's Island Viewpoint"]
  },
  {
    id: "manaoag-church",
    name: "Minor Basilica of Our Lady of the Rosary of Manaoag",
    shortDescription: "A major pilgrimage site in the Philippines, drawing thousands of devotees to the miraculous icon of Our Lady of Manaoag.",
    description: "The Minor Basilica of Our Lady of the Rosary of Manaoag, located on top of a hill in the town, has been canonically affiliated with the Papal Basilica of Saint Mary Major in Rome since June 2011. The church is one of the Philippines' most widely visited Roman Catholic Pilgrimage sites. Many Catholics flock here, praying for health, safe travels, and good fortune.",
    location: "Manaoag",
    category: "Religious",
    image: getImagePath("/images/manaoag-church.jpg"),
    highlights: ["Pilgrimage", "Historical Architecture", "Religious Artifacts", "Mass Services"]
  },
  {
    id: "cape-bolinao-lighthouse",
    name: "Cape Bolinao Lighthouse",
    shortDescription: "An iconic historical lighthouse offering panoramic views of the South China Sea and the West Philippine Sea.",
    description: "Built in 1903 by American, British, and Filipino engineers, the Cape Bolinao Lighthouse stands proudly atop Punta Piedra Point in Patar, Bolinao. It is one of the five major lighthouses in the country and stands at 101 feet, making it the second tallest lighthouse in the Philippines next to the Cape Bojeador Lighthouse in Ilocos Norte.",
    location: "Bolinao",
    category: "Historical",
    image: getImagePath("/images/cape-bolinao-lighthouse.jpg"),
    highlights: ["Panoramic Views", "Historical Structure", "Patar Beach Proximity", "Photography"]
  },
  {
    id: "sunflower-maze",
    name: "Tayug Sunflower Eco Park",
    shortDescription: "A vibrant eco-park featuring thousands of blooming sunflowers and a meticulously designed maze.",
    description: "The Tayug Sunflower Eco Park is a seasonal attraction that boasts a spectacular display of thousands of sunflowers. It features a unique maze made entirely of sunflower plants, providing a fun and picturesque experience for families, friends, and photography enthusiasts. Aside from sunflowers, the park also cultivates other ornamental plants and vegetables.",
    location: "Tayug",
    category: "Cultural",
    image: getImagePath("/images/sunflower-maze.jpg"),
    highlights: ["Sunflower Maze", "Photography", "Eco-tourism", "Flower Gardens"]
  },
  {
    id: "bued-mangrove",
    name: "Bued Mangrove Forest Park",
    shortDescription: "A tranquil sanctuary for mangrove species and wildlife, perfect for eco-walks and kayaking.",
    description: "The Bued Mangrove Forest Park in Alaminos is a testament to the local government's environmental conservation efforts. It serves as a vital ecosystem for marine life and birds. Visitors can take a relaxing stroll along the bamboo boardwalks winding through the dense mangrove trees, or rent a kayak to explore the quiet waterways.",
    location: "Alaminos City",
    category: "Natural",
    image: getImagePath("/images/bued-mangrove.jpg"),
    highlights: ["Mangrove Boardwalk", "Kayaking", "Bird Watching", "Nature Photography"]
  },
  {
    id: "st-james-the-great-parish",
    name: "St. James the Great Parish Church",
    shortDescription: "A 17th-century Spanish colonial church known for its distinct architecture and historical significance.",
    description: "Located in Bolinao, the St. James the Great Parish Church is a significant historical and religious landmark. Built in 1609 out of black coral stones, the church is a prime example of Spanish colonial architecture. It has withstood numerous typhoons and earthquakes over the centuries and remains a central place of worship for the locals.",
    location: "Bolinao",
    category: "Religious",
    image: getImagePath("/images/st-james-the-great-parish.jpg"),
    highlights: ["Spanish Architecture", "Historical Marker", "Religious Services", "Town Center"]
  }
];

