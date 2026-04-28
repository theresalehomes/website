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
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hR-s8O03xb3IKQLMo1M2LCmF9PPrCnPWaeAND8vBqW-nVd0D1s7aCZHQMdodiI9f56XXUz78hwpX8OJlv+5MgHxsyju53xuKAMaQ2WvGu+E+x+9tF4bkgTkinz8MAijTdab1NaPS7DEi0C8XEBnXKbIKmBQC-xGeXRJc1t3M1U4Q6ukviTGyWfrSwSWrcK+KSBw2qol7Tgfmp0GAZGSuBJtDtAToFny6NAKtckbD4IjD0tLy2gCDytX1o+RLEPybmoQXuO7A+67wxsFCK3fLq8a1FJjHUNQ24bOO8He6afIqL1xhg9B7il+0Ru3sFDX1tju6mHjR64Ref5VxKPql3fNxXl+9keP-3Ld2Qm7xEnXaVvDRfFNJAoVIXAdU+5fxYpD58pwz0aVNkH1omhRP-aDchMdPobm0y9bF+6JjzYBwk4MCpMHS5e9MpH1NUn1QdMjZVBvRHH6FZ1LOjVM1+DEnvpMEySAMyaCKYzSo2sIp2QoHsZsTZN-qHaXrbEjBKowbayNka2TWzzEi3OklPtB/900",
    images: [
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hR-s8O03xb3IKQLMo1M2LCmF9PPrCnPWaeAND8vBqW-nVd0D1s7aCZHQMdodiI9f56XXUz78hwpX8OJlv+5MgHxsyju53xuKAMaQ2WvGu+E+x+9tF4bkgTkinz8MAijTdab1NaPS7DEi0C8XEBnXKbIKmBQC-xGeXRJc1t3M1U4Q6ukviTGyWfrSwSWrcK+KSBw2qol7Tgfmp0GAZGSuBJtDtAToFny6NAKtckbD4IjD0tLy2gCDytX1o+RLEPybmoQXuO7A+67wxsFCK3fLq8a1FJjHUNQ24bOO8He6afIqL1xhg9B7il+0Ru3sFDX1tju6mHjR64Ref5VxKPql3fNxXl+9keP-3Ld2Qm7xEnXaVvDRfFNJAoVIXAdU+5fxYpD58pwz0aVNkH1omhRP-aDchMdPobm0y9bF+6JjzYBwk4MCpMHS5e9MpH1NUn1QdMjZVBvRHH6FZ1LOjVM1+DEnvpMEySAMyaCKYzSo2sIp2QoHsZsTZN-qHaXrbEjBKowbayNka2TWzzEi3OklPtB/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQskdosM4Y4OqSf9M5Eug9+gmyLlGQ5clTbscCEON776HwtO0EwcFj1YOdaCJZdbpI6uGKbgMA+VCNuOgT1UejQ6cWKdpp-W9ljRHu95P3B46Y6fpwUtpfPdJAxV0a+rxdTFLv4I1jSeIO48BBtid6aR8LmAp8gQTR+LyfwW5WzPxomkXI4NACq1bThEJNQ7a8FwgLxJ7nEAjNHnrn1vxPOn4STH-CgZDHxlmxipc4DYbqXqCrj4wEDaWFLeUepk3cnBKaZf9YmLnqJRDB4ZSkF+LIRxPoZM2u+rGCoCvsafxVUORTphvpEUSj3bLMBV9VEw71nLBOoJcSdKSLKUliQssfGBmBUfGWR0JMwLXxSJNMT+4AedJ-OVzMpCtq-vmbgx+71A7fbfuV1FL2K0gSysCrvdX0h4zYMyfgwz0vW+xQx2cwa0M1Ab7lznrxsVcLvNmK41fuiQzo1HiP3CTLZJntT8pS270CdGirojw50GTex0lZPsW4m8DsksdrykZBsM8YZguHdv5l7Zg3IRFXa/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hR-iwHH8SBIJ8lpcAxcYLveJgs7CP4AEfXvKjhajf4AorH-DTRPqS15vVXmMQHNOj2wt4Yh6P8fUXmsF+RfOKqGQ8vgCJZcBFTrgNhhgKOYEgQ9rsAFZXrrf3Of0hHGAVj49GJqPpzb2wcfBagbgpL2+BBWQ9Lcq+N+khvuw1mhXbra-+wYoHO4Xo+8jGG8BB2CGqXwepO8XTgfZZJ5Lad455w1-ELfD43S7rCUTiVYCA0HKH42wABB2ZcEevGYAjxTksjfDtzRTPpZQa4BvyURt9aVsQzpYGaroERs4HTieOigq8F8S5TS8C7KTH4+dGzMc-1TQMm8sEZn4xmoInDJp5q7EZFcvixVzXvCGpUiDOsX70cGOq3ExNyr5p4flIpn+4Wl1R5D3PW8UbJRK-W44IJtePzM9c+dMebAzbfxc1-QzGCDRIEUYfOggNNWFNH4CeaI9v7XupMM+2iqEUEdjsUIIx3k9kW8HWGu+haAq9zy6QUg+Z7zYRAbKYCN5U5H6chg4nTg25lP7LKlsH8l/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hR4qd3DjYRlxBCXxSjMKNRzesnUwjLypGghXo1D7pFsJQ-ACJuW8XeuDZ1YgTFHFSeEDVINSYbyGGKVQr0erpLTxgPfcWoAHuFBMx5Cbb3jngOV-1z79o3ZplQ7YBC71g2b5Zr7G9X94c2zTPqwf1dWq+L+kHs+xG5hVDpWEUnld-lXLZ6fSQD+xfrjGN0+YkSdu0km9gbuop9Dnfiv5Js1hhiJA2+VYU64av1kGFR9Su1mJuIDexaNI7S0UZBPaomECE5jKBx4-lCpLyKtUNODm6G1OBE2-pAsdNQtzSCE7ZFAebUdaNT3fCODK2zCGCvScXtxVS5wxEBd5N+WpnX+d7CVo2hCZa0iVs-C8MUl1+1A6NoBM9j8nEpOsKz58bxDz61nDiSR5LwWV+m6ifAAb+EanHUUWkBLmUlAmtdhhPVPLcH-G29nNT+NsPeVq2ec1jDleRT1ldtMmzGAYFCD5CV9hY4FnUL4RQOyjV5hOnCpg0BAVWbPbyRsY1K89UOnmAgMQ3lSsJpuY5UDjKkN/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hSd+bbcJ90Y+pOXIm0wvGFHZbKLCeV-lR+bEw+wUaLDdc8sI3w2G+LswnRl1w4irgETurrp-w4E8f0xnNVNFjrjSDFAW-leTMCuP-vtlrrREw0KSD0RD+jew4ydZjNAIBfZ4NCjVGmhL3GTaOhaR0Q6N1sVNgii72GN7MjSPmhjWorP77R7CPjxZn+mxNVezI8wiP5l4YPRUgKN8ZU03lmDSnQJ-QLwPRWofDwhXNLLg7NeFllZ8OL2XoLtaUCZyJ2PPnDESTopSbvdh-Pb5cv-vQvzFn0p-0poYQwRQP+LMOaW-rSvD7fGk-Ja7DplIVeSs-Ggy59Qpk0a7CVOP6QnvScyI8396U2Jcaw9aGY89R0+AxpGo5IktHAizF8BTsGxWg1-6JZy+JRaoZ1tMZZ7gyMhySnNdL-N3joYNGx4gbcprwMOSjFjYhDHTyWIyssQhluG6Qg-iOfuA5PZh2N+oDpVi+GPGpRAISJG63vx8fJQeI3jCJjpIgXAnUn-xBAuLGaCfmLxd9aJQmAWxcoU/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hRTAAm7ZiIMISwyzhk0ilGw+FMCYloDHvE53Reoj32BzRe0FVj0lcUwuPmWA0UVhSUGT1ytS2fU4kR3N7QjiDQhe1s264VAARGvnvt-az7nxql2kk40qUShjMBA++OStOlf1WuLGNA+luun8oPfPSA80sUgmqRJNNCi+TcBSdXChdbbOHGLrDjD3W0HmdB5sVfaheeH71o9PbSqNMRdApA3JI9xYbwbs-PbxBRyLS61V6jEF4bo5h5LzznWXeeENqy0qQtk83GyY77mEPvqIfK1d5d3PllXRjpzYY3H3e7X3Hrx9dcMi5+t+pi8CdTDWo6mR5F4BFbQPw1j6wMPA26Fp5pmqGwUptFU1Hjl9BNhZTyN0VXfapJKKWFjob3+J8lmNKdbF3jKs7YG45OXCupRtzHcBV94rtLgIdAb8mBvryb8OKASzxiLJwokDjKmSKUCK+4j6F-34VkVfA6ohmM+5rCdVX3tWlThLS8Rw9XNc8ryBOKYY18iRkVnWxPsTOD3W1W3I0HaKvo-5bp05xTe/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQYVh3XyAw4wQuVP6IBKylLV1U4L+YffwII8VMquiveamMya4Y28QqZXGlp6vkv8kNs-Ipqf2AOEQLUZQIwAQgMq8j+uDhZ6mFSvYhfQLBEuKk0pKEbW3W9F88YPlrBTZQ2ldpG7gIsisViQVSOU6BqveeELaMJxrNZuVTZjWg6ePB+A1H3uJI7hEp2Fad9S5UaBkocg8iaLn6HORiQWsw55VX5Ts5U6LygPTAQdpHhk0ejPlOVPu2Y5fWzbh8qefgdt0Cu5oOX0KABEcWPvT3laP5vWr5vlY0KTm6yVAKWQRtZEJsWTGU7vrvVHvP8Hpovt82qbd6S2jWEeZicvW7uRO5rsvdeleOrfZ7r1CgriB7n8Tx23VKcF7mYGQNFqaoIl9zCJnhEcnoRI6yqbd5jGv3Je9X98E1BhedkBWnL7z3SIz7xPwC6JUC+uVOcDSmeEOk72JWhAFqHDkqY5hPKjuQFNzj19gWRncARw56GffDRu1RMraEiXgX6mT9Mb6KCuj5rtxgYwPoOoX3rMKrl/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hTb2XIvrt2Gd-Lq+cclSO2DJL2RJPZMOYLatF6vhyJi4rdvIjKT2r4QyoeX32Prw2Ls7-p193Oi4eBC8ToVbyj+Zg5w7s7hSN4xE4lwCL++NVVEY1Y-1QxNNLRocKY5X1rzTS1UPR+wa+7RJ7he0Jd7Xg+IsHv2-CPwhaHIpuzbdhW9-9seknNmV3tD1C7svn0Eb4qgO7J6fZr9bo4h-Ei7kVRx8zKOEK3-rUIMOs4ZEkxTF7qBHq6QobpeQRclSsVA36Y5b9BQEjGu1EvozON5COIcRsvwoLuiRq4nIjN5veyEBD4BezuRs07QCLoP0QSAZr3eGvUv51oMPDKhL2xJVmPj5D22UoGAvTCgGnASskAhPjNeUqyHIBWdROUO8YBSRFfF0T0ZsVbbJEgFf08U+gZ9lnvszVgOhrGg8yu6zzUK-hPS0XhRqOS3H3ciZGCbul2tdW4VAL-sg79ODs5TyAMMTEHQIZRBpqmbCHSh4w==/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hTCgpdB7BoSgpkfV4Zug4VKnj0pdZtZQd2kwJr+ZQXIaS8Ygzze4ukWiQzo2IEwm0-vcnrWg6Ocm+5cFDnI8xdaA-pYrW7k9XST08bh3bMwShlkNlDZKqK2WKfXOYEu7-XhGUgF-c6kHm8C25RY9PtWKZenpUupWqSe9Nzi8VYdcNEDCw4Zp1cZl3C7JAiaOIy5H2LHx4DLjYjPnKzCkThER63w9t4F5t5Zb4aILB0g5AKXEezKHsVD8dDUaHDwVdDiQRrF7beClVkAUuH6wA1-UL-8ja76w1kU+Vf00WfddD9QP2VvHkzfVMuZGE3IQFpg+Xn7i1seMEKOLYPUKVWjiDVUYYs61-QYJmhagCK1Tng-mNCpWk+tzIn1U7s2Oc+5TTllKTFKgSnW4eciy4Izool-yuRVLxjwnABOpYucImEWeTxfoKmsr5OT93i6AMguHRBqLaImgQaGkLminG4blf-bQN87Eg9KifQKizUIpA==/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQokVlXk5vFbc+H0ouuLXo8tANIFU8M4S5ZNYVRF+94E20f7NpTbl5-Ds3G4U15JQ8RABU3OLkGMFhxnG2G7lX39mWbtxE2ZEvzW5Fi9rTyKq9fL4LCynWh-Hr7NPk8bSHETlKtTmJvTqcqxGrmL8oPcHEZABjY8B9Ve7kiQf7Tkk3dhb0XyHrDIuW4qriraTRRJ1A-kyHgWEuigLlBpXPcvc4Uti5+ww46WW6jals9ESAX23nb1j4UWvgaDourT6S+clEB3BkMEeTfOOGp1+Q0v-R49LxUKAHtleuUoE8EWEXETFGHRX1vldsx4H3mTyyGMsQhytk7UYopvVQ-O3IvRabEK-kgh3QAdzJqUwV-ioGajuMVb10BZd2RLQR64amwU177RRWBkiSqeHvjupLCWmV6T8ws+GAYqrJ6zjHPLwYVvgVoY7GpUEZjpCfOzpjSjJA3Reai7SgQvkCpq5aYtImDx7JKsWD8SX0NEbVEWxUbpq1pw5icTVgp6nk3JIoeByebW6uQSfA9xbSUF0d6/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hRPWtlJ94xhcW5zN88b51DiFmyiuQDG2YmNKireC88U9-yF0wZ+PfnN6H7cMYaCQkgL4cQIyZVh3EmvMCJoG0wfjImVuUhi1bVLQvIpshYCkt1ZXDtOYLfaD8JEmA-bURhOsmB6iR8XUmF7+1sADAnxAPd-D+1oo0sbIayP6oSpEHxB4WSDXPxjrVto2VR4Np2nTkYB2ijGnnsywybBt7bqYlaKzjXIewnTeStUbAiKWNII4yQ2oKf7MAToBBhLIBsiGgWM2P5a3RU7ksDHeADU5hIjXlYAfussYpIqaJ-mXNdRaLmQ4ybTbRGiOa0CJJaweQN2GNkpCYQnFsg8ZBEPuxksD99vSjaNcFwu8t3X5Rhaez8X0XkAJCzOvMic5DiwyxML+b5SNgg5ZMa22u-HfCGHk38UGlvDlTB+-8T5TjmhCYQG7lPfpCsdtqxMF2cGtdovbdECbdQffbah0ufAM0CjxjwCPg8e6gRnKt5qCZMHq9VXmUoqfiJCv70OkMA50pyxCYy80M56hac9qmyw/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hTh9vPA1sVfokASBribZudb+FtWSHUMz5RHjygexbjhcUC8Ju+MTBZDJHHq+c25ZtEmMDyNzYrpVla2aTMCwlHH-ggqBGDPM4cUzJpys5gaglhQF-uS0+TQMrQpbCX9EQ2pQuduPHeZfIJk3G9jjmTEIsWAi5UHwQ1WOHTjKFmorbM0ePv4a4gpFZrGhC1QY211N6bn76GD5O2zUDOiFF34GaHkHerdseyalXNXSgFtxPv2+ZW1g6LJQNqyfuSAPl4VhDlBx26CiD-XWkWjgkfAObpT0iwA0IG3tNaOdf3PdfwDiCjCGgBpndyMKu6Pp4vACgL29VKPU6rQ330+KvPltdejKuRum7rqabQekhqkr-TvzaHlJIOvOkHZiiT6SVysiXQ9K2FXXiVbQUV8utE5Z4Jqsk1MrdBnW0gPehzGwSCaWVnZhjDmxU404pYZft1LUV92fTWHM-57vNuBklDT5L+yq+DMR63aiU1boztn-6iXNnTGgfCzt1JWb4AAclJSjYwYsyaA7iqncxv+MvSA/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hRCLK5Ey2fd5N10SDoI0HUdFtRML3tQm2nNk7UYIHeUr6Cj2gWbmM7Lhun4iarksAW0waGfGZ4prB9aO3g4AUqvZTQxEY2FwKDXlUIy28il-IZpVC+4wKmmjrzEOn2f7lCjXSyg6NI1LMvj-4Sgp79+LNTlalKronKvCwoCEHoE0HBnS+9plV3ie0YIInNlvs3bwNgUrs2DYCFb0eydc0oWFnmX2jBDbiWDlZ7wVDxUzM7GxZnNkA4idGz9kKvzISGIM+CoqNS2yWJid+U96FADRaA2PCj8WLX7kRgBEf8Az04JhAchwnB3Ffhfh3XROdc+f0R5F+S6VZgUrZBjKqXn0RLh5QHzz586nKorLd5Mrow+ZvXKZJCZWmbPxogK8TSsOBa8rr4Er+5OZDHSef-YsSj8jVGTK+QXTZRICrTKVqpBaiTT4nNOsutFADR1uZp1g-2of5vdd1bZsgBscPIgjckbaNOIvqq-P3KcxVU4Jx0JiUnijpUm4DT-T-DGWnTYSYn7cdqNvhs2qtC-YIgt/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQm4zGUQ8eq+5m84c2WOwWCvYk0+2vb9ifOEzBSIXDFntGei+XdFMUf9H+MRDiwO8CE-iNBohadYiJUgSCSdHOm4ZR9GQmXvC+SoK5DCl7KXhcLhdbqNr065mMxSpmchN7gNr-qn5fRUBkOiTiam6bSaliIWDAIf4cwItXw6R20QLftwwl6rzbuvqUwWgP47iYpaPSVfv7agQaOGVKqKf5D4ASJMUprl0-9eZ9wK6-Fej5gOoUkqnp7tADQWdg3MP6f2vUuzS-5mIK6XdJyBT0LsWDEya8gxSaz7cCyaFkKB65p0Hz1KPzGEZKtw-t9NgTzP36zPoj23xn1jr46YEU0Hx5afrkg5fZF631kdm0XN+Z6EkJd4N3Y4MQK7g3CkmLiGjJrlNOM2A6PIUg0AZNEr564QjAVplfKdp7PRm6AtjTvWQfwiUyXT8K5nzfXIbP-ldFRzuVno2qEdHKCgb60Ov--isPBVmbKutKWhzi7G1mMwrADEU7KEQ+82abiIGMOYE-MbOgr2tJf12FrLy1O/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hTsc7FVKpu2i1LloXB231QbGgYzqMny2N8kmOvm5dhj-NoUCBd5A+6czQw5741zP6WC-g1dIQYOvK-ROpRpoUuLmNQ2FHlIwSgacgQLIwJhp-25YniPzloqmnWzujq4WTVfbHwibcZgoB-CPnPZ-AcU97NR8TXIwG8tfq4+3tlQPa1vCFhDUUv1eMdm0rGecmFASFKeqbtv1SR2kxF1qcuq-Qd3rqMz3gW53sdJ7gyvBBt60AaviT-D7ZtU3NfCoEHbY6Ie2Gcg38-xUC6y9ItJArMm88iilYKGf5ODst+MGgZr677YpNiZ7biJmZ-ZnIB8GtxxmEdHYkXN-wpIiytkJeNtPZukWEKyXW6fbI57BLtFT43WjOqQez8t0f5jAC7vQUKyK2vbodaQca9dr6FGjAKqsiuLalua5f-QqZJ1qow8Y-L9eSSdUB56LgY7RgJpzqdLekc-WrGdfBwi6d+BiGibTaEBqLK3s+jBJNZ7SiZb28P78B4dtsdc7gBuBRb-tDPBSYbwThOZVRAtQ7NW/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hSW0F9MMA+HgunzVBLOBsL-WSj8HC0bLrN9tDPUvHB-PnWwJKzfJdi+EifWhG9TY88zWxZOFRf3yVYrkQGcVcArt5uNNVRrxR8dppu0gBpZxpdKHENfb5T0HvGlvr-pLj7n5t0zXTrUcB8AW-mK5sJ0JN-+0GXzsGC8MnKnSoWxL5iFL4C9LDA5ITJ5cI7-ufiaSCDMAB0jvjTDv6FpfBdf-Yb1ssprmusuXcrQk5vhwl-jlU5hfIub4Km9Vrqj7WDavr0WRTCV-4+CpbViDgZourHAhmEjL82FkX66iPhIIjSZKC3jkl12-vnSkPLAUO5yCajZ1oPUbfznqksP5aGAu8vURfRvfaPP4UTnMH3KZ-eAO-pOiOlCl1v5Ujl8v9jC7V-g6taU1ak9RxAZVff2HEGVS7jR8o3SSUQY86lEcjyluPcc-h-ckPelKofIcFcLHWz1ro6u9xIxHTdTu8tqZl8dUi0Vi3KnLwwc6hD0lkWYH+E+w94Bd3L2OpnF7GzvGHrVMXii1ocH3eoT1tVD/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hTV2sy8Q2hChnms81RbN1D-b5c03r5Z7d+ZMXeTQxYaEtNvPfa2+Gu8jlY853M0UryH1l9iARc1knNwmug6cU8NhHLGB5Q-GzgHcFqtaLJVVK1-di3pxad5cO-4fus7viIRC8Q9kvTQ09CqfHofscgMWGw+jg19iew4ktfkY0Bj2Dvc9H77XwFn6wvvTQ13tqulUwQy24Nw6v9u4YLlqCdam7g5DWUGDZQf7hl2B41eddRIcwNtM3Jps18ynSB8FptJ+9J7RUVTKFLfIszlLP6xEI9yGv1ngVw3DmbDrqEBwKc5fxhVHF6D7EZiUusDqJwDeVB+oID3NIZFHrpWExBALkGzDSWfFbeRlLkmvAzF-OGXzkEFW1pQ-ryOByNBPzjNzo1TCGNa3kpytedJ9fgWaDk6W2BfKIa+y9w8U8e1CQYTiIQJhJ6YK3paxhsUpfIGBbnmz9k9r3w+ovNrYWb3wusL22XmnPfLgzZfjAZ9PyHUU8if3uO0LazxQhO-i5IgeBaKz2oWYyOHU5PQQKwj/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQMrW2127tGUi1qIpGFx3BK47B4oo9nZ6OzBRWGMKVXPCHZtJhNvp7Nlp6u70Ix1OJ6HNCgVJ2Pt9cM2sq-dQdaFQdKW+iGIQ-i21nqYiJP73AfFZlgVUvl6A-fDotbqqJDfBctUzZr9MNGyu7571Cy67nOKWYnzFZEERNudHssgB6ohE7ClVWmIxINv98NHQHo7OwLRFAr7wHzNU-jvG+cAIug6qBnlg79-ELdq4P0YshqnzTX67LU0w9S1AG7k3IlIUwaY8MQ9L4wVkIBuTL1AE61EDhr8wjRhk7HFtiyUZkH4BPywDyrk25hF1-ZkN3EVXNX5jsBu6Jt-qgCs9iCAcGK+gdMBx3L90bMnijGrnNxCnpgMF07Rvr8TSQO8reC4ioQJ8aOeTkBph6G8MS2lVaqGDBQL8iNyI6UdkAA4uG9hYcaqLsMAGfW48t4KpekoBUqHPPMXOetoHDSGsDBQ06OGevGBMmopAc8d+AgqNcZiMLW3y5ziJZegYPUXK905SMFenYscluJIN+sw+U-/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hSxBBLUcl-HJKf1M1FwWZEwmEw4XPOXnDsUN9-mxiE7EbTVjcgsBrfoI9V+gwBYUyvyAViFB94m6nxAMaJoBVDvHK-oFf3AQDVTKX764bIU+cN0w6fbo3PTdOu7MLFjC5WW-bUFeF1m13z8-LTmpVC9Zzf-8mUAmpq3b54j1gxEnCLfHILGMnoJpoRxUdFhKTWQdkDuPiWWWAe176Pr-QNeahZUDFSc3P8RhhVOMneae4oTL86-IfXX02RGYafsioIzv082yyFjB0+EwTH3SWKgSGNe5TrjLvB2d7AluobbeJ3mN1VNKjVc7BKtQv6In4zm1M2E43yunXVHHp+JEWpmuLWL2OBmg95KypUbzD2uydZ93NgHtLEIdIq8BIRmLAjqg1SX2oVEtSBKJas0k6qh760OYqcXprhAMnvDBsTPwiWgkHwmzVz6DKXAeQmddnFhIhZaK9JIxP5taAxkKkPrTA+dWaKzuJ4ZwF4xjh7sQEkFqjKAncHVSkBOfTcHCClZ+ItAaVXdZHteZxhlZiFY/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hSY9QE+PKOn2RtoRjL-J5DSNtVxF6FycVO+5Mpxkc7rUXdWwqleU1-HrywDc-1x1CK1IKpTzDhWTxwWXe-DKYIS2TqHEexSAtfmsuMiCi3Knptvx46ZhmsliEmp9CbZt9QSaofdV+jeAM3g3AWpF+HOXfMXoxqov4ZNQh4UleHVp5MQ3PTF4m8JQacVTx3jcnvdTkJOs8BGEorYHUwEwwGbDTGYR6-c3IdPQ+HdXm7BY6LIpJhV0LZ6YvKKrqVW+7RkF65TEnNyyXdbAy86ptJt8wWI+rmk-I7FcjjIid-g431kdut1N+bNskCcGi4GxdMxm7QoLaZ8Qm3mIBnrC-OP0ZEY2Zwjk3cWLqUHXMj2t5pnDcoetOtXaqFg9wG833eUYnJGHXZlvlk2DxOysDgmaxX7Ilb+d1dN7yuJZn8fzLUOlzqbbmeLufwmCo7p7FKvStXdoV3rKFLWJrTdR0YJDQrPxDhppcxemQc6xAuzmHBUHK5N0uZ-7JpNKuaDM3FV+GaHpftS+-AwK63-hSEJ/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hR8AFo0U4iHs5qfit5zD-Qmp9R8SFNGYe+zWq7zO9AhQJIlFgcN+kJu9XSR+iWpQDVztyTcdR9bkCi8n6FyM7ulC7EwrTEIcPcposrFkdESKVHtQXy2nhp6wqU5CWQpKSWoRyk5k6CYqZ3AHaorW+YoFdKUQRdd2CVTx8ToOSA5swH1qNo+wTyl68-u+oQCq1dsNuXTqDyGlBd4h7WjdaGRExFX6CLn5KnK0BteDkQ1I-rkRFQDa927JYco8rdcXAT8iHoc2ygflyDldFpR4ZFPJ1LdPkJ9WM7ukD52q9XII+FBXXl3ZXxzSlCrhgpamnLKD6wyj9IKpUCge-MEaHzp89faUOBPNCGCFXoteB91fnH6z-ZLkT2Yd72N4xtimkNBB4d-Md+3UbivzKtA-Gq1eYOteP13LjQPfGlBxTKHva9QwsS4TibZKrqhHx64Hw6TdIOOUlNDbws15zlTLkQWP1RBxfV+MpswSuo3pxZvcqus0aej6D60FOSaJWAx-HZkk33NmBu8rJWDWYm2MG82/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQBRaUvE9zszQqhv0yMlQyQAJPJ7q7ZDoccaE8tRVfIJj4h12Q2kznEq50N5cw8U0-ecbhD-6Zbl90-41+pfJ5mnnhpj79C-k98QZ1z77jXkcpyVg-VMr38uxPep4AI1tQ8N65M6WEeX3sitQR3Eezq2MG8Z73y9czwfy6cWUl9z5I3V1UjZjUi6vSe+4uN3JKnrg7dKPmbk9LnQ4p+DvVPUdRv5Z03MmMEEO6gBbdheLhAROpMxB-qciCGt6tmz6BJr-Mb3nMunYk96vI7Z9UuPc-BiLgOLMbLM6s9EbSHtFfDLa5KaspWRMeyN8FbrQ+aWK5AS4q+se3N1BvHdS7ct-sAJtp2-r4bj8aHJBoruhtuvs45--reAeYTcvYf1NHfVWZbZjhVEitHn-dcYjqy6eE29FbSOV9zLFb17U0oQ3AAdasevQVwywZ+TIvep8N5JVsObbWRPeaqQCPmvgbj6KqnkRdji68ifErXO0oOoY2fjiZjUXsro2+jO-l9zFHS3fEd1YKjhmxq7PvP3y3W/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQEEFBxu7V9oP9ySo+7KW0AAYuhVjZXOAf5I8Iz+0DpSqsWvWs-OxaxdOB3lesWXblRyCyaNGGVbA5tjDdtBFfQLw0jgxyB9BIkhCQbLnAqx63yCguCgm6MkSySDzc8vkXXBhBJx2Swq-yal1D+d4V99eOwjj4qP-XJZZgQea+OqD8tH2fKwnm0Argu2iag9UEDsg4k5uuHDW413cXTHJOuVwYT-x4er+mTPuviqG6WKlyECco5f3WUOU9JI-oggSo2vvg9BoW4TSOYSIRPrvKnQA1CiTyoe4jcICDH-e0nUIAUycBc3cj5jjzI8ZWbNtI48PulB7mfcrjrVduM2Bbedd6J4Mf+Y4OhwE88jZr5CAnIN-UMiFo5HPdTKwrLsBK0pwNkOF7JOL6JzfpPwxzOqagiOAV6DowYBxkxBR66fTO1tMclL-ZoTa2eB8Ud+K6LoqbPfuWmE0IMCY6jHNBpFzR7D0nm9FQ2CyHKSEowcZVc3eIekXwNUjO1GdYO-UhzXh55gVnBk+773dSn4axW/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hR7mf0Mf-AF-IUabW6oU6c0fDPLUnfBKHlvet35A4+HKo9NjahUVAM72NYypL48h3C0J4QgzohhtJJEL023s7uDE56CM-wNvFiF2c6bbJ5oBByDLtf7-oNjQ2zgPDq2OdLZCsWYLwnc9K2mMNUVEsl0pJmhVg7RkShv2X6YTYrpqHdFs4Nlv+Vjf8EuWpJWEKUmDtJQqRF6zjyUekwxWBBiTTafS1mv67Ope3uduxU-WNYs0ljX43ZG2MZ6fdD2vm4UUmyTCDMXLsVSiWZ2N86LfLjbMrB7rSxfCfM4ok-5hlG9GmDMKf+QkKJmDR74vqlytXTTjEGf5MFOkSg3gFiE4lQICmc7BDIVjT0f68MoKam2A3PqwX-NRt9fkq1yENCwFyOAiUEPa-LJzEAWKeyKXlCZO+Iwcf95HB1j7FpSFIVTDTS9+9WyZnhn43gTmunOMWkAYvx5FLP38K8UTFGIxrOEKQFpbQwhOq6QjV2NRt0l5AmKp4qELmveSEGFerkY9luqKyFPDcQS2YtcNLZw/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hS6LAl67AhzTDRpXnYOHy+rsvh+JH3h1H0hlFv+yTkndoyW6NAr-vcJO45rgAaWgous-JJSeOMjclaPKPTrDj9SQ3MYTf1LNIQMqxJvLdy1mk9huEo3ju4xnjs6yTHrQbMP2slksloPww+tJbWn5PHCBf3csZl9iiir21sjRQc3ALePe6D-ZacTxI2Zj74OAjVE4UYdoHV2jlevSooXfC0hW50wROiDscSoZv9KzKRHVtyXGDva3IxexnU37PvE-8CA3eLyR3HNDknjHzBuX10gzEcDNYHodo3JIVwUbtXIYTjHWSiw-KqJ6MOY8fPB0ZkcXJgmYk5nr9nobk6AILg47-nBSdnUm3F4d0+cPke2na73iF80fdoqx6ox7W++fS1q-uMdSLQYXRsc7CoApoMNNVjx8+sBt7uB0fTfo6iaSaX6VUZgN5F5I+o8TLullAkZm5YN3eMnqCcHNZfl7pQJMyy1Pmw8rZX1lRXnPl44n5mnDdcyt9QdUNUWJY4iNZohTwkhC0x2S4UkHIoknfjW/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hRIMEPkyMWnTAgqTsq57yXnYBHOQkgWOTwxP1QblnCdm1K38A1GycTKJdcRg51kah8z-F2qqOSqoQpLkird9rVqVa6qOxXRIYw2KdijsWKpijp7dAtaSY-lPFBmFjxHajYxGeF4FFC0J7Z45ZpwIjQmAYF6bsbjkdjywwPj3e0PJ1YuD+794kKXP7vDljIlE+Zou+HE-ml5wuouJvswQFH0MhhXqjlx8F86MlrIwdGfDXXIc9vjnZwiJulcmOP-q+rbQ4XnKWAJy5qDvB2qWZZBdbzxV5WIvjtNrVIT46UPSSv6vgcWJqRmmPpptXHo6HZMYN+W9jeciZ+3x1D9ZtxoFs5YpK33FNReX0wkBqFBCXVNJI5jPVIwnOaeboTNhbwoKCYWRR9FS6F7p8pyDMZj4mtrH8KmvxJwSNIQQv-MbOJX9TMmmI3ri6Drox12pdJ-MpmHV9HAKgL0948kGznXw-GVaDMlSWssBrCLIp77jcI6sGAJpML4iClO-Ca+MoLXfNf9Ogwca87q55WsT+TQ/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hR4i6bPoOJVqyBkiQfvTWViihrE6jYPrsZEkwCknwjQureE2PWpw65SVRJSvH+5vTK14yIC1IKcR-nIAszeqiTMJO2YDKf-KoynFqFiqkGY5TC2iQHxSvrNDel8HiMTXznBWL32v-kuN+1J4k9VRXrNkvlvsLBrR+sT7bNiyjPr2bu5E95CMX1aoLvX5G7V6QOCVi3FQFXacKxhH+HcxXignBaODqTMDL5Ln6k2s3Z6IclhV5eF4fYh9tmNJiVQXKLoZ4rqU6-PHbt2gwG0IQfslOSpuOMHyJvZI6n3RyRuVt1mZo+l6JCV3BNtGeLz9vH9n8wtnUB8etFJpnZ8DqaMNZgTTpBZtzTDazqfGs00VCjeK07MfTDFvm2hOlVR5TCkafalMx9YEyEEmz6BxjyHL2arc9f+LGbEmPMJdY+JKbr1CfoVKy4e0LHc1M0OQWGl2QKWSCwfUrS0Yty+GC+bFwOx8G4FNnfOorJ3wmRxo5OJbVAqKBYP4ZmGGikHPlX43RZyoHG0Yd3vfuJM9lNB/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hTDEpNMyWfgpjy3XZW9KCR7AcETo4+tl7H9112F5Jjj8Tbc61dNuQQF3bxZDjNXIVvtG6Kz7jBrWH0knO2ACZpq2iBxKB-7ZKINQp5zXiESAcYQCwoZpKxvUvkZPylG1+0+X3RILPBVVnUrcywJdSS2X3vbc2TxNTvr647B43+pW3J2a2Xwp5SF92cBh17wjtJgTQgWH+E7-OCuTIvh2Z4UcGZGNKZxjRiTiJdTPw6xJWxwTffZxutgiTnKbXhGBE1cnoaundeASW1N4Noh6kC7uuR8aab7wInBD6MERpRO1fNmkRxnXC+O5NerWprWqtNCKkm79tg5bnRkG2knDBZHTRQ7Bybb0D15sVVgj7PoPGJyAxLSrlNmrl8T7jJml-2JU1XgJAVCellRcHR4TfUAdRt16jgNcZ7yofKdYl1ruiJeerKu4A6y4qhR52M9pp8Yp5LKatSZ09MPsDGVLgUlvQr2YF8Zr6PzUOV2E76o4aMy1a4geQQ24sdtx5db20v2bhGaZRXt3VU-JrwEK5i4/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hT9Yc22tpdweY3cGV2ERPFLbgcaJWyfoLy1UOgRhli58HTiFOOQE05Pg-IBDWx13X48WSyQqRSN+v94IRI4CE60TsfNUs6JgTh8b36XMGVf-SNso0yk3yOSBLxVmRxPwbvnWGUOt9FiNsnkUrmbA+PJovCDrLHhfThfTDbkf4qhy65YFKYDxG-FpgfZ92R73-nZ3yso376U7xNynHqg3mKQ2ARSRkXI-0vYIaFYvLzZwSj1m9OitYuE+J4-McUZGTrxoTcMPPu+gosqoyDaXmibmxGGFYRUY7fvVe8hiNk-9ENlwllLYht0yE121JnhyRbO+eR65gPAOB8bfkShLmgpj9Q9bk+Lbm457cQN8l7t7YvfpchOVF7+7O1SqITSAzDMoQFZq33l48s1mRS2JmZQ89wKestX9uEJUtcOsjox+IlrR35cRQv5C49Lm2kn8uU9kLQ7ZtjrS6OAdxrUXz6QFLP260I3LeTKx3e5WjdkgA==/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQW+dLbkXYdK2g18-SQOCX-v5LyTHjWzWkr0MJrXp+cAfNE2Aay2OYXr6oPsAoUxuMi5OIIapt9MF70jYshLelYn-05V7UiezD0BSpu5GTEFumyrQyv7LQi5WbFA5GQYv5ThTvG6o44ueQ54n+i8jgBfxxaA0Y0NDARXKo-XPQCc8AjSUfCs+jYfTZnTcMlxXetBcdsB5DXOY9cme-i-mIws85aW0256kaFAukvsPfeuXzE6cZmJIXXx8WQo5wCXOWEjnuVaSQQ8Ph-8UDXf9fZ+GWRG06HXqm68ka5xAV3JxDsneBsALmPNtR-gtS+LFIqIa0dvZ4Fs7l2AhzxfMB4c4q5cJ0-S8xYn49hh29ZCwbfp2RZLhEcN2og+YHFfrKE2WE+pZ5x6z1JBMwxk0nTfc4UCPmAT-T3BPK0KV161hiLuVilkyBbU1PgM7pGUUILh4xZP5u5wVpbo9sb7oYK6oxpjLu7xSCvKbyZhB773MB6WA3xV37hzft9num4HIXdAO8z0+klGp+nGNkgNHW1/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hR9k8x8YKzrbvW3kjrZYAx9iakY9Ye2-q5la5sihaiX+QcN9igouiIrTI2qv7Ok4ScqlKif4rAkre46wlomKrRi7nyTdVjfT0D0XuMgHvGD6skD0rpNzcM6rSd9Ndwm1j4XWaf64MrB-EAaCHOvACKG+5puKAbnc8P47x8hYRkkFkNkCgWxO5Y8jSDBjvX8j6PDB-hBIEfftQdgK7If4baDSUsVOB9fLNmc2t3IvweWcCnGMpIX-iBPZUkPvqO3S2oL5xisLFgKuNqRAidHnoW-pLdHAk55jChoJL32efELFnklvhLgKF0YbWrakHXe1wLaCU64WQa6tZrBcTwxqlXk1j7eReg0C23BeVUjVtf7H+j+ydyjMo2+7Te7jFh3WcjBt2X+7-JN76MsQwHky0aNZh+YCQsc7gP-0Xnt5C7qMWSs1PBcm5OQnWbCw2n45I1fjZJiqzNT2q8l0hxrU5WVTOwJiq+szp4FZscRzc6TjWg+ZdGPAMI4nTD0KjFws2-18IM-3j8Fimid5WHSCeNx/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQ302WwE4TTcquI9Nh9mktOtthAwkPVePQyI7qj099KcSO8vy1AXXKTnwAhpcdGzP0m4j2DQmmArNmjn0aneoIjkNp30Y+DY61nb2zq7rxBlsvu1-fal1XUVvzBapMsR6JqqR7MxYf2XkciKcmFi5RQswCoskq8Z71sS0X3dNdlMvs6ct7vBgMUvd8RauoIPDqPPcqoWKx0Rsky2zCXMVIImwLjAvPghTG-awMaATUzaOpXSadEV1PbsZ1hLkGtV8MAYtShyn+HWLAve+Oftvkq6LiW6tqb66jwszDZupHRuamfYXjsVVX1Whv+WG9sjGcU8oolK5CPOwppF2crATGTaZHsgFgawxPbjbFsHX96jqfusGExBtIMIlTSdkytjoFzB-vl11T+lFM+x-tm68zwTCJMig5SqTeFhYmA-wLgR5ZG1+k4fPJeGafzouxyl37LBjuTO9BgNdILIy7yBOPXnxDpSy0VuSgO3nNA7ANlj7zaVdynentYnVpWmarTzfKVdwpBId-saPXeG0o4-map/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hR7dsZZBilXdZrf258+nvFGoeOI7w0h7Ufrq4qeepkEj-psuyYl4w2c9vX9dSNKO4ruraoOvgT+3QM6cm9SK1ldj0jNOnoojqWaBzub9TL88ZYoMzegJi-WfGRFwPVvW9APu1nLYyM7n7SQnZAXzZCU9UlmYdKF5PI3X1SiYWVa-qabQiDaafdTlz3QwTw1xElGd14TSffWFnN6-Uzb8CUeLQSWUDHKLX+Y9+6MGp9ZOltTykfseexI443Kv010kSb85tnA6bg3t1usizWxT3zAfjNRJjzaMG2C3ujEA7i99Brmj1VeiKr1o6Ia214BD-vV+bDeTg7u38GJGI56SKK63sB41Cy-QGtc4K4Cc3GFzotznt9nEwXlvWRhuO2qsMRwtBFbatU6N9+YD2IkdL2hR6MAR5a57KfyvSCvZL-iQB-7qiJQUiyb7a87jKfc6AitnyGyfQ9jFWbpGcIY3ZhOcz20E3LcfyensdCmwApnBi1eB6RoT6WRsWOod6gSCm6Pn7hc0lysESPGwvUliMez/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQKhnv31BJ1SGvoguF7VEPxdXWkalvra0R4zRVzVP9g0xjuH-hoboy4h8kMFlAeDWw2xR+Rm4hoOrx0LWx7Rb-17WbU1gbGhVMWo4ZS4i0yRUasYUuD5Op8FhvjUPK1EQ7tPCERBvCHLFS5yr7R816KAK9wZZ787irmt2v+O-4SDJSziJ8ggywcoVTjExzliAdk+fw9HG-jN-N+DsrCDFdhwqqijm-7suR-rDIUxSQe7abKa-ebhA-L+XDCsThnCmZDpj1hIKubToAoI9Qb1IM7gPhob3rJZ6zHHjjzd00njNx34144oB+o1vth1rw4eRSvUGY3IPNyb4OPdx67z6osb9IgRiGK3vBA46ahSUqUhlAr56mF2-13eTUZtK0GmVYnEphfw9CWbrZ4DK3Xu3vNfaBvAoVfJysjH64AcvtZCl3ID6pAWz8Rj4jgrpe78E1OCp62GizPiqEEz17O9ivDRw0LApFXuEROYUrmxzW-ih+r0j+rCS9q9u8FSifzk1vnCPuFMIvhMYPykAanPx+i/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hTGVHggPtClkJn8OrRtRflRC2hQMXj5byy1gk+3ueJmxO2ZQa-SiqEkv2WZcoKKhFtKPjXmUr3VKR5aE4Y4jGpTsctXsXNlEBLNXC56G4d2TIgS7cydq9Ux2kGlkC-NE2rrZME3BTjI3Yt5IcS2tx93bIui5hybDdYBcJaePjrcwr2laMOdOuZ7Rlnst4LZYX9XLmOc52WSHZ6h0fmtGbat3k7rkxaN+tE3O8BCdNoogXfjcNPUKnbIWhoixcTq09ZFr7GXPT3bJS8D-1m6v8vmrEtfztTUmFZ9H9bXa8dV6taHihJvF2Q+ZOAxhP1SzAiPXjkL-AgeTufEWNb3u0udLyyPx3QTM5ghYcgZEG85kzC0Wv+zr-nNrcP0ihLioGakheGNIMBN8h-1VTo7FBDSSvEcBL8g8uMR+0C0AEWalR+BU4jqBeqI4NHdC1XCykUA0UNBNz3JWz+5nIszOag-1ByE-1QGvw-fu1uCg2xjj3h26KF1NBSCdUP+lAL8+0QP0cCqNFknLZCs5NcFoKh5/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hS4aC4zkWoe6PWCkgRI3nWqF5IiUtidYNxo7LNf1nSNqRUH-qkfaWg4zHOCQX3iN0fdP4aq-YJPDkblG5MlXW9BHjS+JOqXg8EuKYc5Hjy-es6wqzAlcut+CrdHwP01m0UQfvERSwYXxQsrpdLmj6Yx7k9ksyy5jMynRzwKvqkwR0WRV7c3mkUH7bqCDrlUDgiDO2gUFpnKmoH4Ptw8SvnJX9hgippUveHhtIx1iE4Y3UtT7lpr2Vh9iMoN8nAxzUaebxBraLPl85fBcU-S9tOgSRie2a8Pmer8tKdZiWDGdj2pj-aaPBgUhL+bsCtx81F-GERJei0HAxkvkUuGiJvcPdG4bVLx-kQd12s2w+w4aVw7AhNf+x4iWSAHkeTszdQlExXirCG1EWX9c4so5Wf2PxIPNFkEKlYxSa-LyDIU6hEwUV0Fvf8hhu5Z5tCk513uUfcsExT0HrQG40RAhFXXEkZtURBsoJ6+3T6z-qWnHpIrxNb9vRsWdbr8vKwdn-oFjMl0fxSH3i0DACpurpaT/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQ6AFuWPrXTpiC3kgTisHKWmtTnoBjYB++0JS4VaqOxA22L+K86KSv9usHWEeTLEMTLxCKsBje-5VQmapk5-Ak04GCp2E2ysXzW10NejhPToeh8XNiprEWtjl9TkpAqJgPXOl4ZkEajFV4I3ioSH9kG+LI2u7qatwXc18IxTlBgTvu5kKRG4gNWjpMKGsmguqodFhDiP4qo4Y0KZTG5NcL0CcChuLZ3RJizZjaOpy-4l5mzrK3CC5WxERT235JaUrKjI9pE9uFwzwCRIUDx5SJdyzo5Wd6mUUCzNnPP8pcwb14q1pi9b3-BpSPv4r1IBBZp68q4cm8I2el-gAQS8rEdcIrkhPEcrlheSdyUpa0TzS6xhBx1iP2upiSLUK-rL7kwULQjzNEEeH0pAzd-8IzCxES-uiQqEnJ6ylEhwjntY9ZZ5HmClJjf3OPFnG+pFnvEMrtFIbVylxKT0Ouh65ozzJ+nx2Jxy2e6LaBmWyQPWmvIqyjdmPJCb88kJ0fjmLNO8w3MWrwBTCOmDLDD7qCp/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hT76MnU9PjhF8kaeER1E3SaJYTiOZweHG1IWxm3f-pZ0IW7ZHKCe8VE58nJUg7ERNNTA3Xj-cea+NX8TAiFU6W2fnKPkLSLMtbnN9qHiWIX2QCzpWZX4DqIrYB2hrAngRUu-rM195xYhb2YudffLRQoHP18GD3gQOFtcwJ5h+vS0AeYqtgUK7b4mypc9dHW7QdFDmQRcUkjFDXhba41rY50ydoBxJ5dcdk9zwkyTaqeYDI68NsM-ilxP13ZqpxRjA0bLTwv9X-DVrGFPiso1Pz2q6iLBwUWHCdVfs49U2OvnlL6B4KfUiep3gnmI134cf55H97YbI7nLzmwhnWJFy1LMU1sBOALHEVTItpYWc5NyE+quLq0jQ--TH2drV0LBg5yaESoAockX12ahfzMtHY0uTMgaRL9LqWIMCa1-3cGvcpK5rXjdOKFJC9liKkql0y8G9+kX5OM7KyKF3c+OQWaCIhmO0TEK4kxeDuDGi0Wa7FBvH4HrupXK6EhtfnwjtH97dxkt20mVHfhI5gB0ILY/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hTiO5eBINzeprGe3rxEpP1Dmas4J+Yx69AX0VCl4MzxCOuL5Mu4pXLqK0gq3rEN09bLuo2qkD-pAovFZn9fgCTCcsqauD3fJNzJq3i2-1+PYfwpdbZWriyjahEiW1qNmmAuH3G4BecRujWYYTQqvlacatjaRVipIzK4yhHiaeVNdGin69HLKJEotvu-rh19jEsmuqS7aEzbWr6HLaz+cJwUJZBJDBK-Y0Gm6uVHj7Gt-PEl2llDtQYCHjcjIF7cWgu7na4mStuoZLovGE924r2UfvsfSOCm97dauceBiuA9UOf61sciSFo3w-Vj43AGkj899H6WPHWW-GPozBaVVPyWrX7lU+8GfPYIm2aSGWR6ppAOueh0u0eQzubtJY0aIGxXWcDf7xzR8ispTRxnvin4ABRvEOirM1oEzDns9r94MlGbLiqp1otl8Nkrt1xeyF4Q2E6dOuK2917EeTg5YLnUQB0dU-04s9W23euBKn8XjA==/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hR9HWzAxuyCOf5YEzGkyt-GrSKpDZD2AikcM3aWRUd4WmsBh+wyi0gyx-dBWjC-AqQiqGULCWgDNGwIgWQazHianeTfGwDzVj-EJjS2VZwPblc7QzBEd2rmHKS8HkA+ITZ6oauNWIvkUJlWXeaAg2CNyW4TiszZJo3O-hdZjnSbceJ-Rw26Bwh5NXomgsllJuM2-OCtZg2RM8finjmMNRxuEuPhlIfjYWh1coAT+aSsVxt9bHPgja-+JXrtSb4mTW0s9sjk-dDSXjktbDjj-AxLW6Jbigj3moaVddXYKklmr0PXgx-TR1oVw+jBeBIDx+E1wtCcwcIHgSDs22ks9JRuYExbyFpsZDotKNn-LIrqSuCQktpKVRjgpeQjS8nSnTMG2Dtx4mBRCvLmV5GHhR-MMVN4fiyGzMAREpgB-FjWfL57ncR7SeisSRuU0-c5MrKEnuv8lRvQSBIL3hb24YhWt-MES-+0shqtR4axWJlsiv9vLMUa9yLLadITZDbGFPHxBWZSBvRvn58SIWAe+W-M/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hS3wDe-3pZ+EGQAWIJd+KLnCMydHoKZmW8TM2gUXXZOrZBHea3K30qe9clZKhM317flNa7DGWhpd8n7Ww3-SsHtNxEOO53egKEyBlOzC5FNEKMMH42VUX7tFLkf+LNYFylLmIryspV0BHR4R5lz-v0vP2Qd4GjxeZv0dazcRAAJrQR95t5VfIxgVhNT75q0Cd1BmL9uzoLV+RSOQIxc5SW1md9gB1EtXdWOkqU-V+U-M4lpdyTdEvizyalubAivuOB9FRcV8P0m36esTVFGUm9B1tOz5WSg+CAUsqByNlAFs1XemZKrVRrHh1yvDFz4DPwriTDuLnKsr+bNMJwwN0gwenmaNyMNc9GeNYNzEi6DBSd0qcBFSnwUzhbxS73qTaolyLUIh9c4u3nOrIthOzBsuH0-ggeAVK7EQ2f5hm16sHUTN7IDxwzK+xeKo9eisoCC7OH5fl7gJzsn4ut1v6G5+FOTaN-iFxkJ+hmXpyaSEyM6abX1wHjSZYDQ0PkJD41Z4Pp8GC19QJkhpNm6Jinv/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hSuD34Pze6WBZk413ruX9gH7DWF7bgGP0qV5URKscWvd0cwnvPGV6D4GMKvNMQmoqO-qT3M5rrK+rajl8iRsGZj4i93PLJFRVVhG9C0+n9jmbmRPmsaI001x7v8QeRH-TLBEiSJBcdNiwaxl3895SODgXNYTn2g8J+pva8Ep8zmXlHxZCM4+j3x83AJxISII5Gi80SwunJeReuaHmYol+ImTxm4CQb7fCBzLIgI+ZaHve4hUWlIKvKh+wq3uahA1jyJpDSFpDrA5I2qPAeX92VV3JTUyNqQ7JNKAgw5R6o3kXCKPc-nR5xUkt4bH4dmfrgetFqZAMlOGfINDbXeQhBwdW6OLq4BzYSWYly79-AUXNrBImm4Crxzz7AVGDXEr-KRDyYQ5HoTn+lfXyezV9ohp7KMKwwu2Z2adf0FViN7evLNlVOwE-BBE0qS2WtSShFRVMXJx-4JcBUvUHJKv23pb0XDUJ+oJCDKCGPrsOuMf7ccp3fkc7ZNIOpCJ+yUZhhGNOWuOu+XyarLXisMqdcB/900",
      "https://app.realmmlp.ca/i/Bibdyw7-CIyo1bUYVj4fbr5yZNIVKsKRzIYpL4vQ2hQkJRoAn98327zuuAgSoaXAOl2VXh9dNVSFkgZJHbAOFPn-Q9kjmjvePyLdmRRDtXDwkWCYotgYY6aDvKUr2h86QFTMdcY0Fw88cgj5aPe4dvrbZ2t3QHnscIBDHno3ux98g1YORe2mS4DnZ-QiaGiGnH1MYNU2g2kPI-J-lja2w+8qjrhzc6oO5SHylAa8i0eRvD3WLow53NyxWMGvU8gzXrxjFMlLlzJT+3t7xE3VUZR2XCiwnmlVLBy-JQrxgy6smGnERfew7DU78g6e36PP7ije0I7U1XLdCDqJ0tRWhF9FijHc+HjlrzgOQlPlgs7ULGAGnCaPL04khAgMX+7ej85WMdypGTq-9I8sX3yafI6PdzEBpQXLh7gccCplE65JJHW6nNco8Xe5DhBxq524BJ03TPvn+7K3P+mQtpJSs39gVoFmvbFn5SwmhNnST7BHG5njC+DfQqOWDk1hQ4R9GKa+BzWKOYXo5JqVb9bzi6C1IELx+YBNaPl6Ar2IMPOw5w5fOXki4On52nZlc4Kl/900",
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
