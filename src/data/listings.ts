export type ListingStatus = "For Sale" | "Pending" | "Sold";

export type ListingIcon =
  | "bed"
  | "bath"
  | "sqft"
  | "calendar"
  | "home"
  | "car"
  | "clock"
  | "tag";

export interface ListingFact {
  label: string;
  value: string;
  icon: ListingIcon;
}

export interface Listing {
  id: string;
  image: string;
  images: string[];
  price: string;
  address: string;
  city: string;
  status: ListingStatus;
  listingNumber: string;
  propertyType: string;
  propertySubType?: string;
  description: string;
  cardFacts: ListingFact[];
  quickFacts: ListingFact[];
  details: ListingFact[];
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export const listings: Listing[] = [
  {
    id: "e13028194",
    listingNumber: "E13028194",
    image:
      "https://app.realmmlp.ca/i/shared/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hREM0hBdgxblMe6uxB7KZnKFOx2hDdN8PfZEx2dzDTlcutjd5-37xD9VIXTqE8k69tEd6+SvKhCDWKGUcrPUP6W9T-Tz-OrKaKVfAfnXcRZpEnN6v9WxL3r6kNjpaSqm3KX41U+F020Eotk-Fq5jb7CR89yOBfqXiOKR2nfwP-9vLHhB-ftNcnUvyKLvirhVSqF65XMAtBcU3fmoHIt5Pxj8dxsn8OK45K9WvNKGZUlBAYsOWRiKl8i18Brequ1yyaaXW3VIY9i6icFpUjP4zMN7oE19JGk6rAnEnvmiU7uNfcOLn8OzvquGjSsOiw5fQCtCEMSLRqLyZR4SsI43r3TK0T-41hoxiUterWUPO8k1oIHEts4YVe13rizQJjVutDHVFGd8FMcVJ23C3nEqOeKKBQqmn22uRlTPNTi6nSGidAYIs1OviyiiHmA1SSlX0b27VCJs+5TyP-7xbHPSgjTyARIoG7shNnURsUd5x08YwNW28mfxe9pOsXd0P4T3X0biaDG+KAJ9S7nalxMnAPQ/900",
    images: [
      "https://app.realmmlp.ca/i/shared/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hREM0hBdgxblMe6uxB7KZnKFOx2hDdN8PfZEx2dzDTlcutjd5-37xD9VIXTqE8k69tEd6+SvKhCDWKGUcrPUP6W9T-Tz-OrKaKVfAfnXcRZpEnN6v9WxL3r6kNjpaSqm3KX41U+F020Eotk-Fq5jb7CR89yOBfqXiOKR2nfwP-9vLHhB-ftNcnUvyKLvirhVSqF65XMAtBcU3fmoHIt5Pxj8dxsn8OK45K9WvNKGZUlBAYsOWRiKl8i18Brequ1yyaaXW3VIY9i6icFpUjP4zMN7oE19JGk6rAnEnvmiU7uNfcOLn8OzvquGjSsOiw5fQCtCEMSLRqLyZR4SsI43r3TK0T-41hoxiUterWUPO8k1oIHEts4YVe13rizQJjVutDHVFGd8FMcVJ23C3nEqOeKKBQqmn22uRlTPNTi6nSGidAYIs1OviyiiHmA1SSlX0b27VCJs+5TyP-7xbHPSgjTyARIoG7shNnURsUd5x08YwNW28mfxe9pOsXd0P4T3X0biaDG+KAJ9S7nalxMnAPQ/900",
    ],
    price: "$699K",
    address: "1159 Dundas St E 159",
    city: "Toronto, ON",
    status: "For Sale",
    propertyType: "Commercial/Retail",
    propertySubType: "Multi-Use",
    description:
      "High performing asset. Rare industrial ownership. Immediate income. Exceptional opportunity to acquire a nearly 1,400 SF I1-zoned industrial unit in the iconic i-Zone Condos, one of the city's most tightly held creative industrial buildings with rapidly shrinking inventory. Currently leased to AAA tenants generating $4,000/month, offering strong in place income with flexibility for end user occupancy. A true hybrid investment with cash flow today and long term appreciation upside driven by intensification and infrastructure growth. This upgraded unit outperforms typical offerings-featuring 17-ft ceilings, commercial grade mezzanine (no added maintenance fees), real brick feature walls, durable polished concrete flooring, full kitchen with new appliances and two washrooms (1 with a shower). Outfitted wiht washer/dryer vents/plugs. Turnkey, functional and built to attract premium tenants in media, production, design and boutique commercial uses. Double door access plus shared truck level loading docks provide efficient logistics, ideal for businesses requiring seamless movement of equipment or inventory. Professionally managed building with secure entry, surveillance and access to shared meeting space and rooftop deck. Strategically located in South Riverdale/Leslieville, one of Toronto's fastest evolving creative corridors. Steps to major amenities, transit and minutes to the DVP, Gardiner and Lakeshore. Future LRT expansion and continued density growth position this asset for accelerated value appreciation. Comparable units have traded quickly so opportunities like this are limited. Secure a cash flowing industrial asset in a high demand node before pricing catches up to demand.",
    cardFacts: [
      { label: "Sq Ft", value: "1,385", icon: "sqft" },
      { label: "Washrooms", value: "2", icon: "bath" },
      { label: "DOM", value: "7", icon: "clock" },
    ],
    quickFacts: [
      { label: "Sq Ft", value: "1,385", icon: "sqft" },
      { label: "Days on Market", value: "7", icon: "clock" },
      { label: "Washrooms", value: "2", icon: "bath" },
      { label: "Clear Height", value: "17 ft", icon: "home" },
    ],
    details: [
      { label: "Listing Number", value: "E13028194", icon: "tag" },
      { label: "Property Type", value: "Commercial/Retail", icon: "home" },
      { label: "Property Style", value: "Multi-Use", icon: "home" },
      { label: "Taxes", value: "$10,192.70 (2025)", icon: "tag" },
      { label: "Commercial Condo Fees", value: "$764.11", icon: "tag" },
      { label: "Zoning", value: "Industrial/Commercial", icon: "home" },
      { label: "Possession Date", value: "05/21/2026", icon: "calendar" },
      { label: "Dir/Cross St", value: "Dundas St E/Carlaw Avenue", icon: "tag" },
      { label: "Clear Height", value: "17 ft", icon: "home" },
      { label: "Truck Level Doors", value: "2", icon: "home" },
      { label: "Double Doors", value: "1", icon: "home" },
      { label: "Parking Spaces", value: "0", icon: "car" },
      { label: "Garage Type", value: "Underground", icon: "car" },
      { label: "Heating Type", value: "Gas Forced Air Closd", icon: "home" },
      { label: "Area", value: "South Riverdale", icon: "tag" },
    ],
    features: [
      "Currently leased to AAA tenants at $4,000/month",
      "17-foot ceilings with commercial-grade mezzanine",
      "Full kitchen with new appliances",
      "2 washrooms, including one with a shower",
      "Real brick walls and polished concrete flooring",
      "Double-door access with shared truck-level loading docks",
      "Secure building with surveillance, meeting space, and rooftop deck",
      "Steps to transit with quick access to the DVP, Gardiner, and Lakeshore",
    ],
  },
  {
    id: "e13040530",
    listingNumber: "E13040530",
    image:
      "https://app.realmmlp.ca/i/shared/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQQZHAShW9vF08TBdrbdHmaXe4VJILDAIL5DWLcDrJbyZ3yLxu4-8yQCSvxXSm1vZiSdJflohf-WPWXV3w1g7SUQDfa6fNbwhYRLGoLj1QQ0zqhJV4PQm-sbd6IMb-NvOxTXvq28ajkwce4WFQgBh96wppWwZOiBpILSsqJO2YfzORCvhIpqRsYeNPmFwWIRVA-Sy1xbILvv6qtWQO4fXZfseA83DFf8xdd5MIjv4xLBfLcQyN+Ab+PJHiId-4yUYBCsK7omrsF8Jhhqaw5E5y12DFY7jI-paEZWRb-uHZQn9DD1rgJfFWMkRjZxqUod+U8WaJ8DLTQeZnJsECDbsPaHx6UOdIqAxUZFjQOQo91yiuetMInwBnuCImzpjGL3ohXnTLrJdlSnAhGTJDj2eepoiaV1084KOkdSTH2oMFbz6OD1dAq9vkAFmzPvKfg6B2vlAztB14U1TYuxcNjCc+91Vfx7e0WfOYKaQhNzOHgdY+lw7yO0LHDwWQqJz0Eytw0jUzpMVGvEXMsiKr2MRHw/900",
    images: [
      "https://app.realmmlp.ca/i/shared/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQQZHAShW9vF08TBdrbdHmaXe4VJILDAIL5DWLcDrJbyZ3yLxu4-8yQCSvxXSm1vZiSdJflohf-WPWXV3w1g7SUQDfa6fNbwhYRLGoLj1QQ0zqhJV4PQm-sbd6IMb-NvOxTXvq28ajkwce4WFQgBh96wppWwZOiBpILSsqJO2YfzORCvhIpqRsYeNPmFwWIRVA-Sy1xbILvv6qtWQO4fXZfseA83DFf8xdd5MIjv4xLBfLcQyN+Ab+PJHiId-4yUYBCsK7omrsF8Jhhqaw5E5y12DFY7jI-paEZWRb-uHZQn9DD1rgJfFWMkRjZxqUod+U8WaJ8DLTQeZnJsECDbsPaHx6UOdIqAxUZFjQOQo91yiuetMInwBnuCImzpjGL3ohXnTLrJdlSnAhGTJDj2eepoiaV1084KOkdSTH2oMFbz6OD1dAq9vkAFmzPvKfg6B2vlAztB14U1TYuxcNjCc+91Vfx7e0WfOYKaQhNzOHgdY+lw7yO0LHDwWQqJz0Eytw0jUzpMVGvEXMsiKr2MRHw/900",
    ],
    price: "$739K",
    address: "1159 Dundas St E 152",
    city: "Toronto, ON",
    status: "For Sale",
    propertyType: "Industrial",
    propertySubType: "Industrial Condo",
    description:
      "Industrial condo listing at 1159 Dundas Street East offering 1,501 square feet in Toronto. The property is active and entered the market 4 days ago.",
    cardFacts: [
      { label: "Sq Ft", value: "1,501", icon: "sqft" },
      { label: "DOM", value: "4", icon: "clock" },
      { label: "Type", value: "Industrial Condo", icon: "home" },
    ],
    quickFacts: [
      { label: "Sq Ft", value: "1,501", icon: "sqft" },
      { label: "Days on Market", value: "4", icon: "clock" },
      { label: "Property Type", value: "Industrial", icon: "home" },
      { label: "Use", value: "Industrial Condo", icon: "tag" },
    ],
    details: [
      { label: "Listing Number", value: "E13040530", icon: "tag" },
      { label: "Property Type", value: "Industrial", icon: "home" },
      { label: "Property Style", value: "Industrial Condo", icon: "home" },
      { label: "Days on Market", value: "4", icon: "clock" },
    ],
    features: [
      "Active Toronto East listing",
      "1,501 square feet",
      "Industrial classification",
      "Industrial condo format",
    ],
  },
  {
    id: "e12888806",
    listingNumber: "E12888806",
    image:
      "https://live-images.stratuscollab.com/jDskHU9xhyyFEekb2HYLdRMLvQGgzNZ77-3tsaMLirk/rs:fill:600:400:0/g:no/cb:MjAyNi0wNC0yMVQyMTo1Njo0MC4wMDBa/aHR0cHM6Ly90cnJlYi1pbWFnZS5hbXByZS5jYS9jTlIxOXFuQXNnS2VRZy1hRTBPQkZQcVhKemVHa1g0Mi00Z1lBaEFSUFl3L3JzOmZpdDoxOTIwOjE5MjAvYXE6c2l6ZTo1MTIwMDA6MjU6NzUvd206LjU6c286MDo1MDouNC93bXNoOjEwL3dtdDpQSE53WVc0Z1ptOXlaV2R5YjNWdVpEMG5kMmhwZEdVbklHWnZiblE5SnpZNEp6NURUMHhFVjBWTVRDQkNRVTVMUlZJZ1VrVkJUQ0JGVTFSQlZFVWdVRkpQUmtWVFUwbFBUa0ZNVXl3Z1FuSnZhMlZ5WVdkbFBDOXpjR0Z1UGcvY2I6MjAyNjAzMTYxOTQ5MjQvTDNSeWNtVmlMMnhwYzNScGJtZHpMelF6THpFMEx6WTFMemcyTDNBdlpXWTRZMlk1TmpRdE9UUTVOUzAwTUdVeExXSTRaVGd0TXpkak4yTXpOak0xTnpRMUxtcHdady5qcGc.jpg",
    images: [
      "https://live-images.stratuscollab.com/jDskHU9xhyyFEekb2HYLdRMLvQGgzNZ77-3tsaMLirk/rs:fill:600:400:0/g:no/cb:MjAyNi0wNC0yMVQyMTo1Njo0MC4wMDBa/aHR0cHM6Ly90cnJlYi1pbWFnZS5hbXByZS5jYS9jTlIxOXFuQXNnS2VRZy1hRTBPQkZQcVhKemVHa1g0Mi00Z1lBaEFSUFl3L3JzOmZpdDoxOTIwOjE5MjAvYXE6c2l6ZTo1MTIwMDA6MjU6NzUvd206LjU6c286MDo1MDouNC93bXNoOjEwL3dtdDpQSE53WVc0Z1ptOXlaV2R5YjNWdVpEMG5kMmhwZEdVbklHWnZiblE5SnpZNEp6NURUMHhFVjBWTVRDQkNRVTVMUlZJZ1VrVkJUQ0JGVTFSQlZFVWdVRkpQUmtWVFUwbFBUa0ZNVXl3Z1FuSnZhMlZ5WVdkbFBDOXpjR0Z1UGcvY2I6MjAyNjAzMTYxOTQ5MjQvTDNSeWNtVmlMMnhwYzNScGJtZHpMelF6THpFMEx6WTFMemcyTDNBdlpXWTRZMlk1TmpRdE9UUTVOUzAwTUdVeExXSTRaVGd0TXpkak4yTXpOak0xTnpRMUxtcHdady5qcGc.jpg",
    ],
    price: "$1.899M",
    address: "326 Carlaw Ave 127",
    city: "Toronto, ON",
    status: "For Sale",
    propertyType: "Comm Element Condo",
    propertySubType: "Loft",
    description:
      "Loft-style condo listing at 326 Carlaw Avenue with three bedrooms, two bathrooms, and a published size band of 2250 to 2499 square feet. The property is currently active with 43 days on market.",
    cardFacts: [
      { label: "Beds", value: "3", icon: "bed" },
      { label: "Baths", value: "2", icon: "bath" },
      { label: "Sq Ft", value: "2250-2499", icon: "sqft" },
    ],
    quickFacts: [
      { label: "Bedrooms", value: "3", icon: "bed" },
      { label: "Bathrooms", value: "2", icon: "bath" },
      { label: "Sq Ft", value: "2250-2499", icon: "sqft" },
      { label: "Days on Market", value: "43", icon: "clock" },
    ],
    details: [
      { label: "Listing Number", value: "E12888806", icon: "tag" },
      { label: "Property Type", value: "Comm Element Condo", icon: "home" },
      { label: "Property Style", value: "Loft", icon: "home" },
      { label: "Days on Market", value: "43", icon: "clock" },
    ],
    features: [
      "3 bedrooms",
      "2 bathrooms",
      "2250-2499 sqft size band",
      "Loft property style",
    ],
  },
  {
    id: "e12740918",
    listingNumber: "E12740918",
    image:
      "https://app.realmmlp.ca/i/shared/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hRhProDTHwzzXPIv0llW7NDW8qlw21Ps7zL-xyNCXiz6h1P5oohPCVmipJVQRU71ORUgg0gAF6-gsRd+E-uROx7lAIaW3W90BoMby8sQImoMMPMnJG3T9yWjFTxEihbaey9jHF0uSOaHxb-bwXzVWxM8mO03DGSBtONYUb0OLM2sS2TB-kR6BWIv9qBfsTxR+OUao0hTfJe7SXnHTvzgdeBQg-8anZghxXo3yRJupVJ7I+bm0fm7XHF7Fl7yol5PTkWgECH2bZPMkdo7HuuLLr7b21hceeUYwbaqPn5Vm6MVg7cZj26gmF579zdAg7R4uUd4HGxPnDkvAMzYjezeBKJwAPll0bPNDKHiF8TbI5msdDhmIIRJoFCuTYf+J4b4DkBj7C0PDV1Iwk1GvrwgtarX1Bxock2HdNkZn2EnBmB+AuwkQENOnQYQPcUhrJikFg72MjdzIwSOWr7VOw9eGg3jO+sTc+msRnYxHqzm5911TSE5QO-Hp6z4Uv7yqFlPu4UuApZc3wPHs7nN8vLfY+B/900",
    images: [
      "https://app.realmmlp.ca/i/shared/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hRhProDTHwzzXPIv0llW7NDW8qlw21Ps7zL-xyNCXiz6h1P5oohPCVmipJVQRU71ORUgg0gAF6-gsRd+E-uROx7lAIaW3W90BoMby8sQImoMMPMnJG3T9yWjFTxEihbaey9jHF0uSOaHxb-bwXzVWxM8mO03DGSBtONYUb0OLM2sS2TB-kR6BWIv9qBfsTxR+OUao0hTfJe7SXnHTvzgdeBQg-8anZghxXo3yRJupVJ7I+bm0fm7XHF7Fl7yol5PTkWgECH2bZPMkdo7HuuLLr7b21hceeUYwbaqPn5Vm6MVg7cZj26gmF579zdAg7R4uUd4HGxPnDkvAMzYjezeBKJwAPll0bPNDKHiF8TbI5msdDhmIIRJoFCuTYf+J4b4DkBj7C0PDV1Iwk1GvrwgtarX1Bxock2HdNkZn2EnBmB+AuwkQENOnQYQPcUhrJikFg72MjdzIwSOWr7VOw9eGg3jO+sTc+msRnYxHqzm5911TSE5QO-Hp6z4Uv7yqFlPu4UuApZc3wPHs7nN8vLfY+B/900",
    ],
    price: "$680K",
    address: "1159 Dundas St E 160",
    city: "Toronto, ON",
    status: "Sold",
    propertyType: "Commercial/Retail",
    propertySubType: "Multi-Use",
    description:
      "Sold on March 11, 2026. Commercial retail unit at 1159 Dundas Street East with 1,389 square feet and a multi-use layout.",
    cardFacts: [
      { label: "Sq Ft", value: "1,389", icon: "sqft" },
      { label: "DOM", value: "41", icon: "clock" },
      { label: "Type", value: "Multi-Use", icon: "home" },
    ],
    quickFacts: [
      { label: "Sq Ft", value: "1,389", icon: "sqft" },
      { label: "Days on Market", value: "41", icon: "clock" },
      { label: "Property Type", value: "Commercial/Retail", icon: "home" },
      { label: "Use", value: "Multi-Use", icon: "tag" },
    ],
    details: [
      { label: "Listing Number", value: "E12740918", icon: "tag" },
      { label: "Sold Date", value: "3/11/2026", icon: "calendar" },
      { label: "Property Type", value: "Commercial/Retail", icon: "home" },
      { label: "Property Style", value: "Multi-Use", icon: "home" },
    ],
    features: [
      "Sold in 2026",
      "1,389 square feet",
      "Commercial/Retail classification",
      "Multi-use layout",
    ],
  },
  {
    id: "e12940972",
    listingNumber: "E12940972",
    image:
      "https://app.realmmlp.ca/i/shared/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQ4RgMXUdZ3+F9y4DvjjiCrWjzX33WDZ5hiBWX3KkXHKE9HeBmOhc8HZrcXLHmvS+PkHuj-2zdzKULFxbBYpXY15Gb7mBVC2+gIN1Dg-EzTtHXlE1EaoReceISJilrVI7JGIVROsFfk224bYK-4m+XGpaaRt4JMsv91LU0wL7obajHqR551T61dzHpx-BihPadNqMz4K-Egxej2EiJMjSMZDjk3NIRaR+Y5w+gAiBGsYvA2eevqTfbUJCtJu7kk-2JHfQFX+gZMcS2gKJhLeJxnJ0Om3ZTZWdPG+jMcApcthlYrkdTtuBlPzzuOIgLVAiNDkz7zP+VGeIjW5vyrTKjsV5OAmBlzvmlK2+2eXwclQACgu5FOm-NGFRlf-y17UBA-YJf8hDvHhFIqkKqZu-IqT41fYVMYn94l-ss9nQbT2FLERzxTVfq473q62BoKS0U74+jQ5ldpbXaZUQXcQFzuPrfI+LRA9lrh4xvrVmcZZ8j-aNz1+CpRo38fe-bFigZAsUnnkLrwIXzrfRS5wNA4/900",
    images: [
      "https://app.realmmlp.ca/i/shared/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQ4RgMXUdZ3+F9y4DvjjiCrWjzX33WDZ5hiBWX3KkXHKE9HeBmOhc8HZrcXLHmvS+PkHuj-2zdzKULFxbBYpXY15Gb7mBVC2+gIN1Dg-EzTtHXlE1EaoReceISJilrVI7JGIVROsFfk224bYK-4m+XGpaaRt4JMsv91LU0wL7obajHqR551T61dzHpx-BihPadNqMz4K-Egxej2EiJMjSMZDjk3NIRaR+Y5w+gAiBGsYvA2eevqTfbUJCtJu7kk-2JHfQFX+gZMcS2gKJhLeJxnJ0Om3ZTZWdPG+jMcApcthlYrkdTtuBlPzzuOIgLVAiNDkz7zP+VGeIjW5vyrTKjsV5OAmBlzvmlK2+2eXwclQACgu5FOm-NGFRlf-y17UBA-YJf8hDvHhFIqkKqZu-IqT41fYVMYn94l-ss9nQbT2FLERzxTVfq473q62BoKS0U74+jQ5ldpbXaZUQXcQFzuPrfI+LRA9lrh4xvrVmcZZ8j-aNz1+CpRo38fe-bFigZAsUnnkLrwIXzrfRS5wNA4/900",
    ],
    price: "$ Suppressed",
    address: "1159 Dundas St E 157",
    city: "Toronto, ON",
    status: "Sold",
    propertyType: "Commercial/Retail",
    propertySubType: "Multi-Use",
    description:
      "Sold on March 31, 2026. Commercial retail unit at 1159 Dundas Street East with 1,389 square feet and a multi-use layout. Final sale price is suppressed in the share portal.",
    cardFacts: [
      { label: "Sq Ft", value: "1,389", icon: "sqft" },
      { label: "DOM", value: "0", icon: "clock" },
      { label: "Type", value: "Multi-Use", icon: "home" },
    ],
    quickFacts: [
      { label: "Sq Ft", value: "1,389", icon: "sqft" },
      { label: "Days on Market", value: "0", icon: "clock" },
      { label: "Property Type", value: "Commercial/Retail", icon: "home" },
      { label: "Use", value: "Multi-Use", icon: "tag" },
    ],
    details: [
      { label: "Listing Number", value: "E12940972", icon: "tag" },
      { label: "Sold Date", value: "3/31/2026", icon: "calendar" },
      { label: "Property Type", value: "Commercial/Retail", icon: "home" },
      { label: "Property Style", value: "Multi-Use", icon: "home" },
    ],
    features: [
      "Sold in 2026",
      "1,389 square feet",
      "Commercial/Retail classification",
      "Sale price suppressed in portal",
    ],
  },
  {
    id: "w12607810",
    listingNumber: "W12607810",
    image:
      "https://app.realmmlp.ca/i/shared/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hT5HDqdd-wVXn3wtCmOiLP0JorHfsFjQbKYnmThHXL878E+po+1JQd223FLHbWGJCKjL5DEZ7Mh39KnbR3a58lMalVgKKDUD83v3fN7U+0CtSJhZLmA21BYDDL3rhPOaO+aj1xBOjlbjWPACfiuAgRbr97XXqjU5Ecz7qgn+NPZsWD3RUb4jT2tkHR-Nb5Pmz+UOy3eK83zS8JMMPiCE0NgryDKl-F6Vgdi3WKH-euLOSdO7uwxZ31rBM1f6Estzh61QVSLKl0TaKouoaFpLL0xQEbNFV3Gw21PeaF71Omvz8nWmuHSRb5yoslOn7EScs4R6h91xbq0M3wVy06rg5EZCbM9z1LDXzMoMnWSr4Tpb71Wv4zLpgS0+W1tExsBX+0zRskedN4PCrVVeHry1fo2eNiaB4UBk8GJHSec2yV+im9sOlXSkrwWEp3OCM9lPlBCZyioQtejaEGPOcRzr0sERAwmZm8qhW7B-CqpdQi0KN0U1yy1SETtRtPg9zZD-9ffCHxrQ4gyZjaPy-Tabas5/900",
    images: [
      "https://app.realmmlp.ca/i/shared/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hT5HDqdd-wVXn3wtCmOiLP0JorHfsFjQbKYnmThHXL878E+po+1JQd223FLHbWGJCKjL5DEZ7Mh39KnbR3a58lMalVgKKDUD83v3fN7U+0CtSJhZLmA21BYDDL3rhPOaO+aj1xBOjlbjWPACfiuAgRbr97XXqjU5Ecz7qgn+NPZsWD3RUb4jT2tkHR-Nb5Pmz+UOy3eK83zS8JMMPiCE0NgryDKl-F6Vgdi3WKH-euLOSdO7uwxZ31rBM1f6Estzh61QVSLKl0TaKouoaFpLL0xQEbNFV3Gw21PeaF71Omvz8nWmuHSRb5yoslOn7EScs4R6h91xbq0M3wVy06rg5EZCbM9z1LDXzMoMnWSr4Tpb71Wv4zLpgS0+W1tExsBX+0zRskedN4PCrVVeHry1fo2eNiaB4UBk8GJHSec2yV+im9sOlXSkrwWEp3OCM9lPlBCZyioQtejaEGPOcRzr0sERAwmZm8qhW7B-CqpdQi0KN0U1yy1SETtRtPg9zZD-9ffCHxrQ4gyZjaPy-Tabas5/900",
    ],
    price: "$760K",
    address: "3510 South Millway 32",
    city: "Mississauga, ON",
    status: "Sold",
    propertyType: "Condo Townhouse",
    propertySubType: "2-Storey",
    description:
      "Sold on January 20, 2026. Condo townhouse in Mississauga with 3+1 bedrooms, 4 bathrooms, and a published size band of 1400 to 1599 square feet.",
    cardFacts: [
      { label: "Beds", value: "3+1", icon: "bed" },
      { label: "Baths", value: "4", icon: "bath" },
      { label: "Sq Ft", value: "1400-1599", icon: "sqft" },
    ],
    quickFacts: [
      { label: "Bedrooms", value: "3+1", icon: "bed" },
      { label: "Bathrooms", value: "4", icon: "bath" },
      { label: "Sq Ft", value: "1400-1599", icon: "sqft" },
      { label: "Days on Market", value: "45", icon: "clock" },
    ],
    details: [
      { label: "Listing Number", value: "W12607810", icon: "tag" },
      { label: "Sold Date", value: "1/20/2026", icon: "calendar" },
      { label: "Property Type", value: "Condo Townhouse", icon: "home" },
      { label: "Property Style", value: "2-Storey", icon: "home" },
    ],
    features: [
      "Sold in 2026",
      "3+1 bedrooms",
      "4 bathrooms",
      "Condo townhouse format",
    ],
  },
  {
    id: "e12734264",
    listingNumber: "E12734264",
    image:
      "https://live-images.stratuscollab.com/alusZR0V1GFFwQryB6NyfAWOhzGWL4WPjWKp5JBxCJo/rs:fill:600:400:0/g:no/cb:MjAyNi0wMi0xNVQyMTo0OToxNC4wMDBa/aHR0cHM6Ly90cnJlYi1pbWFnZS5hbXByZS5jYS9ld29rTDVCdDNhS2pJR25YUm1leVQ1ZmxLMjB4aFRGcWZIaFdzZUo1bC1rL3JzOmZpdDoxOTIwOjE5MjAvYXE6c2l6ZTo1MTIwMDA6MjU6NzUvd206LjU6c286MDo1MDouNC93bXNoOjEwL3dtdDpQSE53WVc0Z1ptOXlaV2R5YjNWdVpEMG5kMmhwZEdVbklHWnZiblE5SnpZNEp6NURUMHhFVjBWTVRDQkNRVTVMUlZJZ1VrVkJUQ0JGVTFSQlZFVWdVRkpQUmtWVFUwbFBUa0ZNVXl3Z1FuSnZhMlZ5WVdkbFBDOXpjR0Z1UGcvY2I6MjAyNjAxMjcyMzQ0MTkvTDNSeWNtVmlMMnhwYzNScGJtZHpMelF5THpnMUx6azVMelk1TDNBdk1EQTROMlZsTWpBdE1tUTRZaTAwTnpjM0xXSTRZemN0Tm1WbE9UQXlPR1JrT0dGakxtcHdady5qcGc.jpg",
    images: [
      "https://live-images.stratuscollab.com/alusZR0V1GFFwQryB6NyfAWOhzGWL4WPjWKp5JBxCJo/rs:fill:600:400:0/g:no/cb:MjAyNi0wMi0xNVQyMTo0OToxNC4wMDBa/aHR0cHM6Ly90cnJlYi1pbWFnZS5hbXByZS5jYS9ld29rTDVCdDNhS2pJR25YUm1leVQ1ZmxLMjB4aFRGcWZIaFdzZUo1bC1rL3JzOmZpdDoxOTIwOjE5MjAvYXE6c2l6ZTo1MTIwMDA6MjU6NzUvd206LjU6c286MDo1MDouNC93bXNoOjEwL3dtdDpQSE53WVc0Z1ptOXlaV2R5YjNWdVpEMG5kMmhwZEdVbklHWnZiblE5SnpZNEp6NURUMHhFVjBWTVRDQkNRVTVMUlZJZ1VrVkJUQ0JGVTFSQlZFVWdVRkpQUmtWVFUwbFBUa0ZNVXl3Z1FuSnZhMlZ5WVdkbFBDOXpjR0Z1UGcvY2I6MjAyNjAxMjcyMzQ0MTkvTDNSeWNtVmlMMnhwYzNScGJtZHpMelF5THpnMUx6azVMelk1TDNBdk1EQTROMlZsTWpBdE1tUTRZaTAwTnpjM0xXSTRZemN0Tm1WbE9UQXlPR1JrT0dGakxtcHdady5qcGc.jpg",
    ],
    price: "$1.62M",
    address: "1159 Dundas St E 147",
    city: "Toronto, ON",
    status: "Sold",
    propertyType: "Comm Element Condo",
    propertySubType: "Loft",
    description:
      "Sold on February 7, 2026. Loft-style comm element condo at 1159 Dundas Street East with 1 bedroom, 2 bathrooms, and a size band of 2000 to 2249 square feet.",
    cardFacts: [
      { label: "Beds", value: "1", icon: "bed" },
      { label: "Baths", value: "2", icon: "bath" },
      { label: "Sq Ft", value: "2000-2249", icon: "sqft" },
    ],
    quickFacts: [
      { label: "Bedrooms", value: "1", icon: "bed" },
      { label: "Bathrooms", value: "2", icon: "bath" },
      { label: "Sq Ft", value: "2000-2249", icon: "sqft" },
      { label: "Days on Market", value: "11", icon: "clock" },
    ],
    details: [
      { label: "Listing Number", value: "E12734264", icon: "tag" },
      { label: "Sold Date", value: "2/7/2026", icon: "calendar" },
      { label: "Property Type", value: "Comm Element Condo", icon: "home" },
      { label: "Property Style", value: "Loft", icon: "home" },
    ],
    features: [
      "Sold in 2026",
      "1 bedroom",
      "2 bathrooms",
      "Loft property style",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Carmen Paredes",
    role: "Vaughan Mills · Vaughan",
    text: "My experience with Theresa Le was a soothing, comfortable, no pressure experience. She always had answers for me and if she didn't she would go out of her way to make sure she got them. She is very prompt on call backs and very educated in her line of business. I couldn't ask for anything better in a realtor. She is truly the total package and I highly recommend her! What I like most about her is she's not about the commission. She truly give you the best advice and wants to make sure you are getting the best value! Thank you Theresa Le for all your help and I will be seeing you in the near future!",
    rating: 5,
    image: "/images/testimonies/tmp553zpgay.webp",
  },
  {
    name: "Frank Ieraci",
    role: "Parklawn & Lake Shore · Toronto",
    text: "I have had the privilege to have Theresa Le as my real estate agent. She was a pleasure to work with and she really cares for people. Theresa is so helpful in every way! I am so happy that I chose Theresa as my agent. I guarantee anyone that has met her would feel the same. I would never choose any one else. Thank you Theresa!",
    rating: 5,
    image: "/images/testimonies/tmp_bs6e2ir.webp",
  },
  {
    name: "Maria Elena Stern",
    role: "King West · Toronto",
    text: "Looking for a condo in downtown Toronto can be a daunting experience, and finding a good real estate agent who cares about your needs is key. I was fortunate enough to meet Theresa Le. It was so easy to work with her, she knew right away what I was looking for. We looked everywhere in my area of choice, and when the right condo came up, and the offer was presented, there was another offer! Oh my God Theresa knew well how to handle it. Needless to say we will use her again. The best part, after closing the deal was the fun Japanese dinner at my favourite restaurant with her.",
    rating: 5,
    image: "/images/testimonies/tmpccn_x2la.webp",
  },
  {
    name: "Rachel Csontos",
    role: "King West · Toronto",
    text: "Theresa Le sold my condo in approximately 48 hours for full price. Possibly a world record! I highly recommend her services.",
    rating: 5,
    image: "/images/testimonies/tmplm1d6ozb.webp",
  },
  {
    name: "Sam Short and Thy Short",
    role: "Markham",
    text: "Theresa has made our first home purchase seamless and easy. Her knowledge of the markets and her ability to negotiate made our experience great. I would extremely likely recommend her for all your real estate needs.",
    rating: 5,
    image: "/images/testimonies/tmprcyapzki.webp",
  },
  {
    name: "Michael Spatafora",
    role: "Little Italy College St · Toronto",
    text: "I spent months with other agents who all told me I couldn't afford a house in the neighborhood I wanted, but Theresa found my dream home in only 2 weeks! Theresa is energetic and aggressive, I've recommended her my closest friends.",
    rating: 5,
    image: "/images/testimonies/tmpu39_7x3h.webp",
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
