"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { listings } from "@/data/listings";
import { Bed, Bath, Maximize } from "lucide-react";

const filters = ["All", "For Sale", "Pending", "Sold"] as const;

export default function ListingsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredListings =
    activeFilter === "All"
      ? listings
      : listings.filter((l) => l.status === activeFilter);

  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="relative pt-40 pb-24 bg-dark-deep overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/80 to-dark-deep" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-6">
              Our Properties
            </p>
            <h1 className="text-5xl md:text-7xl font-heading text-white leading-tight">
              All <span className="italic">Listings</span>
            </h1>
          </div>
        </section>

        {/* Listings */}
        <section className="py-28 md:py-36 bg-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-16">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 text-xs tracking-[0.15em] uppercase font-body transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gold text-white"
                      : "bg-dark-card text-gray-500 hover:text-gold border border-white/5 hover:border-gold"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Listings Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5">
              {filteredListings.map((listing) => (
                <Link
                  key={listing.id}
                  href={`/listings/${listing.id}`}
                  className="bg-dark group cursor-pointer block hover:bg-dark-card transition-all duration-500"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={listing.image}
                      alt={listing.address}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span
                        className={`text-[11px] tracking-[0.15em] uppercase px-4 py-2 font-body font-medium ${
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
                  <div className="p-7">
                    <p className="text-gold text-xs tracking-wider font-body font-medium mb-1">
                      {listing.status === "Sold" ? "SOLD" : "LISTED AT"}
                    </p>
                    <p className="text-2xl font-heading font-bold text-white mb-3">
                      {listing.price}
                    </p>
                    <p className="text-white/80 font-medium text-sm">
                      {listing.address}
                    </p>
                    <p className="text-gray-600 text-sm mb-5">{listing.city}</p>
                    <div className="flex items-center gap-6 pt-5 border-t border-white/5">
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Bed className="w-4 h-4" strokeWidth={1.5} />
                        <span>{listing.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Bath className="w-4 h-4" strokeWidth={1.5} />
                        <span>{listing.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Maximize className="w-4 h-4" strokeWidth={1.5} />
                        <span>{listing.sqft} sqft</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredListings.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg font-heading">
                  No listings found for this filter.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
