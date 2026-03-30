export interface Listing {
  id: string;
  image: string;
  images: string[];
  price: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: string;
  status: "For Sale" | "Pending" | "Sold";
  description: string;
  features: string[];
  yearBuilt: number;
  lotSize: string;
  garage: string;
  propertyType: string;
}

export const listings: Listing[] = [
  {
    id: "1234-oakwood-drive",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    ],
    price: "$1,250,000",
    address: "1234 Oakwood Drive",
    city: "San Jose, CA 95124",
    beds: 4,
    baths: 3,
    sqft: "2,850",
    status: "For Sale",
    description:
      "Stunning modern home nestled in a quiet cul-de-sac, featuring an open floor plan with soaring ceilings, gourmet kitchen with premium appliances, and a spacious backyard perfect for entertaining. This beautifully updated home offers hardwood floors throughout, a luxurious primary suite, and abundant natural light.",
    features: [
      "Hardwood Floors",
      "Gourmet Kitchen",
      "Quartz Countertops",
      "Central A/C",
      "Smart Home System",
      "Solar Panels",
      "Landscaped Backyard",
      "Walk-in Closets",
    ],
    yearBuilt: 2018,
    lotSize: "6,500 sqft",
    garage: "2-Car Attached",
    propertyType: "Single Family Home",
  },
  {
    id: "5678-maple-avenue",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop",
    ],
    price: "$985,000",
    address: "5678 Maple Avenue",
    city: "Santa Clara, CA 95050",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    status: "For Sale",
    description:
      "Charming remodeled home in the heart of Santa Clara, featuring an updated kitchen with stainless steel appliances, new flooring, fresh paint, and a beautifully landscaped yard. This move-in ready home offers proximity to top-rated schools and convenient access to major tech campuses.",
    features: [
      "Updated Kitchen",
      "Stainless Steel Appliances",
      "New Flooring",
      "Fresh Interior Paint",
      "Landscaped Yard",
      "Near Top Schools",
      "Central Heating",
      "Large Patio",
    ],
    yearBuilt: 2005,
    lotSize: "5,200 sqft",
    garage: "2-Car Attached",
    propertyType: "Single Family Home",
  },
  {
    id: "910-willow-creek-lane",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    ],
    price: "$1,575,000",
    address: "910 Willow Creek Lane",
    city: "Cupertino, CA 95014",
    beds: 5,
    baths: 4,
    sqft: "3,400",
    status: "Pending",
    description:
      "Elegant Cupertino residence in a prestigious neighborhood, featuring a grand foyer, formal living and dining rooms, a chef's kitchen, and a resort-style backyard with pool. This home is located in the award-winning Cupertino school district.",
    features: [
      "Swimming Pool",
      "Chef's Kitchen",
      "Formal Dining Room",
      "Grand Foyer",
      "Home Office",
      "Fireplace",
      "Award-Winning Schools",
      "Premium Finishes",
    ],
    yearBuilt: 2015,
    lotSize: "8,000 sqft",
    garage: "3-Car Attached",
    propertyType: "Single Family Home",
  },
  {
    id: "222-sunset-boulevard",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    ],
    price: "$2,100,000",
    address: "222 Sunset Boulevard",
    city: "Los Altos, CA 94022",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    status: "For Sale",
    description:
      "Luxurious Los Altos estate on a tree-lined street, offering exquisite craftsmanship, soaring ceilings, and walls of glass that flood the home with natural light. The expansive lot features mature landscaping, an outdoor kitchen, and a sparkling pool.",
    features: [
      "Pool & Spa",
      "Outdoor Kitchen",
      "Home Theater",
      "Wine Cellar",
      "Smart Home",
      "Radiant Floor Heating",
      "Mature Landscaping",
      "EV Charging",
    ],
    yearBuilt: 2020,
    lotSize: "12,000 sqft",
    garage: "3-Car Attached",
    propertyType: "Single Family Home",
  },
  {
    id: "456-elm-street",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    ],
    price: "$875,000",
    address: "456 Elm Street",
    city: "Milpitas, CA 95035",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    status: "Sold",
    description:
      "Recently sold! This beautifully maintained home in Milpitas features an open concept living area, modern kitchen, and a private backyard. The home is close to major freeways, shopping, and the Great Mall.",
    features: [
      "Open Concept",
      "Modern Kitchen",
      "Private Backyard",
      "Near Great Mall",
      "Updated Bathrooms",
      "Recessed Lighting",
      "Tile Flooring",
      "Central Heating",
    ],
    yearBuilt: 2000,
    lotSize: "4,500 sqft",
    garage: "2-Car Attached",
    propertyType: "Single Family Home",
  },
  {
    id: "789-pine-ridge-court",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    ],
    price: "$1,450,000",
    address: "789 Pine Ridge Court",
    city: "Sunnyvale, CA 94086",
    beds: 4,
    baths: 3,
    sqft: "2,600",
    status: "For Sale",
    description:
      "Beautiful Sunnyvale home located in a family-friendly neighborhood, featuring a spacious floor plan, updated kitchen with island, and a large backyard with fruit trees. Walking distance to parks and top-rated schools.",
    features: [
      "Kitchen Island",
      "Fruit Trees",
      "Walking Distance to Parks",
      "Top-Rated Schools",
      "Dual-Pane Windows",
      "Crown Molding",
      "Spacious Primary Suite",
      "Covered Patio",
    ],
    yearBuilt: 2012,
    lotSize: "7,000 sqft",
    garage: "2-Car Attached",
    propertyType: "Single Family Home",
  },
];

export const testimonials = [
  {
    name: "Michael & Sarah Johnson",
    role: "Home Buyers",
    text: "Theresa made our home buying experience seamless and stress-free. Her knowledge of the local market helped us find our dream home at the right price. We couldn't be happier!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Home Seller",
    text: "We sold our home in just 10 days above asking price. Theresa's marketing strategy and negotiation skills were outstanding. She truly goes above and beyond for her clients.",
    rating: 5,
  },
  {
    name: "Jessica & Robert Williams",
    role: "First-Time Buyers",
    text: "As first-time buyers, we were nervous about the process. Theresa patiently guided us every step of the way and found us the perfect starter home within our budget.",
    rating: 5,
  },
  {
    name: "Amanda Torres",
    role: "Property Investor",
    text: "Theresa has helped me acquire multiple investment properties over the years. Her market insights and investment analysis are invaluable. Highly recommend for serious investors.",
    rating: 5,
  },
];

export const services = [
  {
    icon: "Home" as const,
    title: "Residential Sales",
    description:
      "Expert guidance through every step of buying or selling your home, ensuring the best possible outcome for you and your family.",
    longDescription:
      "Our residential sales team provides comprehensive support from initial consultation to closing day. We handle pricing strategy, professional staging, photography, marketing, open houses, negotiations, and all paperwork to ensure a smooth transaction.",
  },
  {
    icon: "Building2" as const,
    title: "Commercial Real Estate",
    description:
      "Strategic commercial property solutions for investors and business owners looking to grow their portfolio.",
    longDescription:
      "We specialize in commercial property transactions including office spaces, retail locations, and mixed-use developments. Our team provides thorough market analysis, tenant screening, and investment return projections to help you make informed decisions.",
  },
  {
    icon: "Key" as const,
    title: "Property Management",
    description:
      "Comprehensive property management services to protect your investment and maximize your rental income.",
    longDescription:
      "Our property management services include tenant placement, rent collection, maintenance coordination, financial reporting, and legal compliance. We treat your property as if it were our own, ensuring maximum returns with minimal hassle.",
  },
  {
    icon: "BarChart3" as const,
    title: "Market Analysis",
    description:
      "In-depth market research and analysis to help you make informed decisions in today's competitive market.",
    longDescription:
      "We provide detailed comparative market analyses, neighborhood trend reports, and pricing strategies backed by data. Our market insights help sellers price competitively and buyers make confident offers in any market condition.",
  },
  {
    icon: "Search" as const,
    title: "Home Search",
    description:
      "Personalized home search tailored to your unique needs, preferences, and budget — we find your perfect match.",
    longDescription:
      "Our personalized home search service goes beyond MLS listings. We leverage our network, off-market opportunities, and deep local knowledge to find properties that match your exact criteria, lifestyle preferences, and financial goals.",
  },
  {
    icon: "Briefcase" as const,
    title: "Investment Consulting",
    description:
      "Expert investment advice and strategies to help you build wealth through smart real estate investments.",
    longDescription:
      "Our investment consulting covers portfolio analysis, market opportunity identification, ROI projections, 1031 exchanges, and long-term wealth building strategies. We help both new and seasoned investors maximize their real estate returns.",
  },
];
