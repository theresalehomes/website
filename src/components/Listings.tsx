"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Bed, Bath, Square } from "lucide-react";

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
    <section id="listings" className="py-20 md:py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-heading">
            Our Properties
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-light mb-6 text-gray-900">
            Featured <span className="font-semibold">Listings</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-gray-500 leading-relaxed">
            Explore our curated selection of exceptional properties, each chosen
            for its unique character and investment potential.
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleListings.map((listing) => (
            <div
              key={listing.address}
              className="bg-white group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={listing.image}
                  alt={listing.address}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`text-xs tracking-wider uppercase px-3 py-1 font-heading ${
                      listing.status === "Sold"
                        ? "bg-gray-800 text-white"
                        : listing.status === "Pending"
                          ? "bg-gold-dark text-white"
                          : "bg-gold text-white"
                    }`}
                  >
                    {listing.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-2xl font-heading font-semibold text-gray-900 mb-2">
                  {listing.price}
                </p>
                <p className="text-gray-900 font-medium">{listing.address}</p>
                <p className="text-gray-500 text-sm mb-4">{listing.city}</p>
                <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Bed className="w-4 h-4" />
                    <span>{listing.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Bath className="w-4 h-4" />
                    <span>{listing.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Square className="w-4 h-4" />
                    <span>{listing.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-gold hover:text-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-10 h-10 flex items-center justify-center text-sm transition-colors ${
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
            className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-gold hover:text-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
