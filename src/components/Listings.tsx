"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize } from "lucide-react";

const listings = [
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    price: "$1,250,000",
    address: "1234 Oakwood Drive",
    city: "San Jose, CA 95124",
    beds: 4,
    baths: 3,
    sqft: "2,850",
    status: "For Sale",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    price: "$985,000",
    address: "5678 Maple Avenue",
    city: "Santa Clara, CA 95050",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    status: "For Sale",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    price: "$1,575,000",
    address: "910 Willow Creek Lane",
    city: "Cupertino, CA 95014",
    beds: 5,
    baths: 4,
    sqft: "3,400",
    status: "Pending",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    price: "$2,100,000",
    address: "222 Sunset Boulevard",
    city: "Los Altos, CA 94022",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    status: "For Sale",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070&auto=format&fit=crop",
    price: "$875,000",
    address: "456 Elm Street",
    city: "Milpitas, CA 95035",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    status: "Sold",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop",
    price: "$1,450,000",
    address: "789 Pine Ridge Court",
    city: "Sunnyvale, CA 94086",
    beds: 4,
    baths: 3,
    sqft: "2,600",
    status: "For Sale",
  },
];

export default function Listings() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(listings.length / itemsPerPage);

  const visibleListings = listings.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section id="listings" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-gold" />
              <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                Our Properties
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extralight text-gray-900">
              Featured <span className="font-semibold italic">Listings</span>
            </h2>
          </div>
          <p className="text-gray-400 text-[15px] max-w-md mt-4 md:mt-0 leading-relaxed">
            Explore our curated selection of exceptional properties, each chosen
            for its unique character and investment potential.
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleListings.map((listing) => (
            <div
              key={listing.address}
              className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={listing.image}
                  alt={listing.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute top-5 left-5">
                  <span
                    className={`text-[11px] tracking-[0.15em] uppercase px-4 py-2 font-heading font-medium ${
                      listing.status === "Sold"
                        ? "bg-gray-900 text-white"
                        : listing.status === "Pending"
                          ? "bg-gold-dark text-white"
                          : "bg-gold text-white"
                    }`}
                  >
                    {listing.status}
                  </span>
                </div>
              </div>
              <div className="p-7">
                <p className="text-gold text-[13px] tracking-wider font-heading font-medium mb-1">
                  {listing.status === "Sold" ? "SOLD" : "LISTED AT"}
                </p>
                <p className="text-3xl font-heading font-semibold text-gray-900 mb-3">
                  {listing.price}
                </p>
                <p className="text-gray-900 font-medium text-[15px]">
                  {listing.address}
                </p>
                <p className="text-gray-400 text-sm mb-5">{listing.city}</p>
                <div className="flex items-center gap-6 pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Bed className="w-4 h-4" strokeWidth={1.5} />
                    <span>{listing.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Bath className="w-4 h-4" strokeWidth={1.5} />
                    <span>{listing.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Maximize className="w-4 h-4" strokeWidth={1.5} />
                    <span>{listing.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className="w-11 h-11 border border-gray-300 flex items-center justify-center hover:border-gold hover:text-gold transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-11 h-11 flex items-center justify-center text-sm font-heading transition-all duration-300 ${
                i === currentPage
                  ? "bg-gold text-white"
                  : "border border-gray-300 hover:border-gold hover:text-gold"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
            }
            disabled={currentPage === totalPages - 1}
            className="w-11 h-11 border border-gray-300 flex items-center justify-center hover:border-gold hover:text-gold transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
