"use client";

import { useState, FormEvent, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { listings } from "@/data/listings";
import {
  Bed,
  Bath,
  Maximize,
  Calendar,
  Home,
  Car,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";

export default function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const listing = listings.find((l) => l.id === id);

  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!listing) {
    notFound();
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const nextImage = () =>
    setCurrentImage((c) => (c === listing.images.length - 1 ? 0 : c + 1));
  const prevImage = () =>
    setCurrentImage((c) => (c === 0 ? listing.images.length - 1 : c - 1));

  return (
    <>
      <Header />
      <main>
        {/* Back Link */}
        <section className="pt-28 pb-4 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 text-gray-500 text-[13px] tracking-[0.15em] uppercase font-heading hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Listings
            </Link>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="bg-cream pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-black">
              <img
                src={listing.images[currentImage]}
                alt={`${listing.address} - Image ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white text-[12px] tracking-wider font-heading px-4 py-2">
                {currentImage + 1} / {listing.images.length}
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 left-6">
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

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mt-2">
              {listing.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`relative aspect-[16/9] w-24 md:w-32 overflow-hidden transition-all ${
                    i === currentImage
                      ? "ring-2 ring-gold"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-12 xl:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Price & Address */}
                <div className="mb-10">
                  <p className="text-gold text-[13px] tracking-wider font-heading font-medium mb-2">
                    {listing.status === "Sold" ? "SOLD AT" : "LISTED AT"}
                  </p>
                  <p className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 mb-4">
                    {listing.price}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    <p className="text-[15px]">
                      {listing.address}, {listing.city}
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {[
                    { icon: Bed, label: "Bedrooms", value: listing.beds },
                    { icon: Bath, label: "Bathrooms", value: listing.baths },
                    { icon: Maximize, label: "Sq Ft", value: listing.sqft },
                    { icon: Calendar, label: "Year Built", value: listing.yearBuilt },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white p-5 text-center shadow-sm"
                    >
                      <stat.icon
                        className="w-5 h-5 text-gold mx-auto mb-3"
                        strokeWidth={1.5}
                      />
                      <p className="text-2xl font-heading font-semibold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-[12px] text-gray-400 tracking-wider uppercase mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-[1px] bg-gold" />
                    <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                      Description
                    </p>
                  </div>
                  <p className="text-gray-500 leading-[1.9] text-[15px]">
                    {listing.description}
                  </p>
                </div>

                {/* Property Details Table */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-[1px] bg-gold" />
                    <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                      Property Details
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    {[
                      { label: "Property Type", value: listing.propertyType, icon: Home },
                      { label: "Lot Size", value: listing.lotSize, icon: Maximize },
                      { label: "Garage", value: listing.garage, icon: Car },
                      { label: "Year Built", value: listing.yearBuilt, icon: Calendar },
                    ].map((detail) => (
                      <div
                        key={detail.label}
                        className="flex items-center justify-between py-3 border-b border-gray-200"
                      >
                        <div className="flex items-center gap-3">
                          <detail.icon
                            className="w-4 h-4 text-gold"
                            strokeWidth={1.5}
                          />
                          <span className="text-gray-500 text-[14px]">
                            {detail.label}
                          </span>
                        </div>
                        <span className="text-gray-900 font-medium text-[14px]">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-[1px] bg-gold" />
                    <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                      Features
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {listing.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
                        <span className="text-gray-500 text-[14px]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-[1px] bg-gold" />
                    <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                      Location
                    </p>
                  </div>
                  <div className="aspect-[16/9] bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-10 h-10 text-gold mx-auto mb-3" strokeWidth={1} />
                      <p className="text-gray-500 text-[14px] font-heading">
                        {listing.address}
                      </p>
                      <p className="text-gray-400 text-[13px]">{listing.city}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar - Agent Contact Card */}
              <div className="lg:col-span-1">
                <div className="bg-white shadow-sm p-8 sticky top-28">
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop"
                        alt="Theresa Le"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900">
                      Theresa Le
                    </h3>
                    <p className="text-gold text-[12px] tracking-[0.2em] uppercase font-heading mt-1">
                      Lead Agent
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gold" strokeWidth={1.5} />
                      <span className="text-gray-600 text-[14px]">
                        (408) 555-0123
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-gold" strokeWidth={1.5} />
                      <span className="text-gray-600 text-[14px]">
                        info@theresalehomes.com
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-gray-100 mb-8" />

                  <h4 className="text-[12px] tracking-[0.3em] uppercase font-heading mb-6 text-gray-900">
                    Inquire About This Property
                  </h4>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full border border-gray-200 px-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:border-gold transition-colors placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full border border-gray-200 px-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:border-gold transition-colors placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full border border-gray-200 px-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:border-gold transition-colors placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <textarea
                        required
                        rows={4}
                        placeholder={`I'm interested in ${listing.address}...`}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full border border-gray-200 px-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-gray-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-white text-[13px] tracking-[0.25em] uppercase font-heading hover:bg-gold-light transition-all duration-500"
                    >
                      <span>Send Inquiry</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
