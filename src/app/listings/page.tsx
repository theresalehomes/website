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
        <section className="relative pt-40 pb-24 bg-black overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-gold" />
              <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                Our Properties
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-extralight text-white leading-tight">
              All <span className="font-semibold italic">Listings</span>
            </h1>
          </div>
        </section>

        {/* Listings */}
        <section className="py-24 md:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-16">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 text-[13px] tracking-[0.2em] uppercase font-heading transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gold text-white"
                      : "bg-white text-gray-600 hover:text-gold border border-gray-200 hover:border-gold"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Listings Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((listing) => (
                <Link
                  key={listing.id}
                  href={`/listings/${listing.id}`}
                  className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500 block"
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
                </Link>
              ))}
            </div>

            {filteredListings.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg font-heading">
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
