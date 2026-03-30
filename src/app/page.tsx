import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { listings, testimonials } from "@/data/listings";
import { Bed, Bath, Maximize, Star, ArrowRight } from "lucide-react";
import { Award, TrendingUp, Users, Heart } from "lucide-react";

const featuredListings = listings.filter((l) => l.status === "For Sale").slice(0, 3);
const featuredTestimonial = testimonials[0];

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Heart, value: "99%", label: "Client Satisfaction" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Brief About Preview */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-gold" />
              <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                Who We Are
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop"
                    alt="Theresa Le - Real Estate Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/20 -z-10" />
                <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-black px-8 py-6">
                  <p className="text-gold text-4xl font-heading font-bold">15+</p>
                  <p className="text-white/70 text-sm tracking-wider">
                    Years of
                    <br />
                    Excellence
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-extralight mb-3 text-gray-900 leading-tight">
                  Dedicated to Finding
                </h2>
                <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-8 text-gray-900 leading-tight italic">
                  Your Perfect Home
                </h2>
                <div className="w-16 h-[2px] bg-gold mb-10" />
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
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-cream border border-gray-200 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-3xl font-heading font-semibold text-gray-900">
                          {stat.value}
                        </p>
                        <p className="text-[13px] text-gray-400 tracking-wide">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4 px-12 py-5 bg-gold text-white text-[13px] tracking-[0.25em] uppercase font-heading hover:bg-gold-light transition-all duration-500"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-24 md:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredListings.map((listing) => (
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
                      <span className="text-[11px] tracking-[0.15em] uppercase px-4 py-2 font-heading font-medium bg-gold text-white">
                        {listing.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-gold text-[13px] tracking-wider font-heading font-medium mb-1">
                      LISTED AT
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

            <div className="text-center">
              <Link
                href="/listings"
                className="group inline-flex items-center gap-4 px-12 py-5 bg-gold text-white text-[13px] tracking-[0.25em] uppercase font-heading hover:bg-gold-light transition-all duration-500"
              >
                <span>View All Listings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial Preview */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[280px] font-heading text-gray-100 leading-none select-none pointer-events-none">
            &ldquo;
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-gold" />
                <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                  Testimonials
                </p>
                <div className="w-8 h-[1px] bg-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-extralight text-gray-900">
                What Our Clients <span className="font-semibold italic">Say</span>
              </h2>
            </div>

            <div className="text-center">
              <div className="flex justify-center gap-1.5 mb-10">
                {Array.from({ length: featuredTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              <p className="text-gray-700 text-xl md:text-2xl leading-relaxed font-light mb-12 max-w-3xl mx-auto italic">
                &ldquo;{featuredTestimonial.text}&rdquo;
              </p>

              <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />

              <p className="font-heading font-semibold text-lg text-gray-900 tracking-wide">
                {featuredTestimonial.name}
              </p>
              <p className="text-gold text-[13px] tracking-[0.2em] uppercase mt-1">
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
