import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import {
  Home,
  Building2,
  BarChart3,
  Key,
  Search,
  Briefcase,
} from "lucide-react";
import { services } from "@/data/listings";

export const metadata: Metadata = {
  title: "Services | Theresa Le Homes",
  description:
    "Explore our full range of real estate services — residential sales, commercial real estate, property management, market analysis, and more.",
};

const iconMap = {
  Home,
  Building2,
  Key,
  BarChart3,
  Search,
  Briefcase,
} as const;

export default function ServicesPage() {
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
                "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/80 to-dark-deep" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-6">
              What We Offer
            </p>
            <h1 className="text-5xl md:text-7xl font-heading text-white leading-tight">
              Our <span className="italic">Services</span>
            </h1>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-28 md:py-36 bg-dark text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
                Comprehensive Real Estate
                <br />
                <span className="italic">Solutions</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm mt-6">
                A full range of real estate services designed to meet your needs,
                whether you&apos;re buying your first home or expanding your
                investment portfolio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5">
              {services.map((service) => {
                const Icon = iconMap[service.icon];
                return (
                  <div
                    key={service.title}
                    className="group bg-dark p-10 lg:p-12 hover:bg-dark-card transition-all duration-500"
                  >
                    <Icon className="w-7 h-7 text-gold mb-8" strokeWidth={1.5} />
                    <h3 className="text-white text-lg font-heading font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-[1.8] mb-4">
                      {service.description}
                    </p>
                    <p className="text-gray-700 text-sm leading-[1.8]">
                      {service.longDescription}
                    </p>
                    <div className="w-0 h-[1px] bg-gold group-hover:w-12 transition-all duration-500 mt-6" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-28 md:py-36 bg-dark-deep">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
              <div>
                <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-6">
                  Why Choose Us
                </p>
                <h2 className="text-4xl md:text-5xl font-heading text-white mb-8 leading-tight">
                  The Theresa Le
                  <br />
                  <span className="italic">Difference</span>
                </h2>
                <div className="w-12 h-[1px] bg-gold mb-8" />
                <p className="text-gray-500 leading-[1.9] mb-10 text-[15px]">
                  What sets us apart is our unwavering commitment to your success. We
                  don&apos;t just complete transactions — we build relationships and
                  deliver results that exceed expectations.
                </p>

                <div className="space-y-5">
                  {[
                    "Personalized strategy tailored to your unique goals",
                    "Deep local market knowledge and neighborhood expertise",
                    "Cutting-edge marketing and technology tools",
                    "Transparent communication throughout the entire process",
                    "Proven track record of successful closings",
                    "Full-service support from start to finish",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-gold mt-2 shrink-0" />
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury home"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-full h-full border border-white/5 -z-10" />
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
