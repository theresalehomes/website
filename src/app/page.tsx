import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { listings, testimonials } from "@/data/listings";
import { Bed, Bath, Maximize, Star } from "lucide-react";

const featuredListings = listings.filter((l) => l.status === "For Sale").slice(0, 3);
const featuredTestimonial = testimonials[0];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Corporate Structure / Services Overview */}
        <section className="py-28 md:py-36 bg-dark-deep">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-6">
                Corporate Structure
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Theresa Le Homes operates as a full-service real estate consultancy,
                offering comprehensive solutions across multiple sectors of the property market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5">
              {[
                {
                  title: "Residential Sales",
                  desc: "Expert guidance through every step of buying or selling your home, ensuring the best possible outcome.",
                },
                {
                  title: "Commercial Real Estate",
                  desc: "Strategic commercial property solutions for investors and business owners looking to grow their portfolio.",
                },
                {
                  title: "Property Management",
                  desc: "Comprehensive property management services to protect your investment and maximize rental income.",
                },
                {
                  title: "Market Analysis",
                  desc: "In-depth market research and analysis to help you make informed decisions in today's competitive market.",
                },
                {
                  title: "Home Search",
                  desc: "Personalized home search tailored to your unique needs, preferences, and budget requirements.",
                },
                {
                  title: "Investment Consulting",
                  desc: "Expert investment advice and strategies to help you build wealth through smart real estate investments.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-dark-deep p-10 lg:p-12 hover:bg-dark-card transition-all duration-500 group"
                >
                  <h3 className="text-white text-lg font-heading font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-[1.8]">
                    {item.desc}
                  </p>
                  <div className="w-0 h-[1px] bg-gold group-hover:w-12 transition-all duration-500 mt-6" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview with Stats */}
        <section className="py-28 md:py-36 bg-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="/images/theresa.webp"
                    alt="Theresa Le - Real Estate Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/5 -z-10" />
              </div>

              <div>
                <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-6">
                  About Us
                </p>
                <h2 className="text-4xl md:text-5xl font-heading text-white mb-8 leading-tight">
                  Dedicated to Finding
                  <br />
                  <span className="italic">Your Perfect Home</span>
                </h2>
                <div className="w-12 h-[1px] bg-gold mb-8" />
                <p className="text-gray-500 leading-[1.9] mb-6 text-[15px]">
                  With over 15 years of experience in the real estate market,
                  Theresa Le Homes is committed to providing exceptional service and
                  expert guidance for all your real estate needs.
                </p>
                <p className="text-gray-500 leading-[1.9] mb-12 text-[15px]">
                  Our team combines deep market knowledge, innovative marketing
                  strategies, and a genuine passion for helping families find their
                  dream homes.
                </p>

                <div className="grid grid-cols-2 gap-8 mb-10">
                  {[
                    { value: "500+", label: "Properties Sold" },
                    { value: "1000+", label: "Happy Clients" },
                    { value: "15+", label: "Years Experience" },
                    { value: "99%", label: "Client Satisfaction" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-gray-600 text-xs tracking-[0.15em] uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-block px-10 py-4 bg-white text-dark text-[12px] tracking-[0.15em] uppercase font-body font-medium hover:bg-gold hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-28 md:py-36 bg-dark-deep">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-4">
                  Our Properties
                </p>
                <h2 className="text-4xl md:text-5xl font-heading text-white">
                  Featured <span className="italic">Listings</span>
                </h2>
              </div>
              <p className="text-gray-600 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
                Explore our curated selection of exceptional properties, each chosen
                for its unique character and investment potential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5 mb-12">
              {featuredListings.map((listing) => (
                <Link
                  key={listing.id}
                  href={`/listings/${listing.id}`}
                  className="bg-dark-deep group cursor-pointer block hover:bg-dark-card transition-all duration-500"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={listing.image}
                      alt={listing.address}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="text-[11px] tracking-[0.15em] uppercase px-4 py-2 font-body font-medium bg-gold text-white">
                        {listing.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-gold text-xs tracking-wider font-body font-medium mb-1">
                      LISTED AT
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

            <div className="text-center">
              <Link
                href="/listings"
                className="inline-block px-10 py-4 bg-white text-dark text-[12px] tracking-[0.15em] uppercase font-body font-medium hover:bg-gold hover:text-white transition-all duration-300"
              >
                View All Listings
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-28 md:py-36 bg-dark relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-heading text-white/[0.02] leading-none select-none pointer-events-none">
            &ldquo;
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-4">
                Testimonials
              </p>
              <h2 className="text-4xl md:text-5xl font-heading text-white">
                What Our Clients <span className="italic">Say</span>
              </h2>
            </div>

            <div className="text-center">
              <div className="flex justify-center gap-1.5 mb-10">
                {Array.from({ length: featuredTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              <p className="text-white/70 text-xl md:text-2xl leading-relaxed font-heading italic mb-12 max-w-3xl mx-auto">
                &ldquo;{featuredTestimonial.text}&rdquo;
              </p>

              <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />

              <p className="font-heading font-semibold text-lg text-white tracking-wide">
                {featuredTestimonial.name}
              </p>
              <p className="text-gold text-xs tracking-[0.2em] uppercase mt-2 font-body">
                {featuredTestimonial.role}
              </p>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
