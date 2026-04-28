import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { listings, testimonials, type ListingFact, type ListingIcon } from "@/data/listings";
import {
  ArrowRight,
  Bath,
  Bed,
  Clock3,
  House,
  Key,
  MapPin,
  Maximize,
  Sparkles,
  Star,
} from "lucide-react";

const featuredListings = listings.filter((l) => l.status === "For Sale").slice(0, 3);

const servicePillars = [
  {
    num: "01",
    title: "Buying a Home",
    description:
      "Buying a home is like unlocking a new chapter — finding your cozy corner, choosing the neighbourhood, picking colours that reflect your style.",
  },
  {
    num: "02",
    title: "Selling Your Home",
    description:
      "Selling is passing on a cherished story. From staging each room to highlighting its best features, it's a journey of letting go with pride.",
  },
  {
    num: "03",
    title: "Leasing a Space",
    description:
      "Leasing is a canvas for your dreams — a place where ideas flourish, ambitions thrive, and your business has room to blossom.",
  },
];

const marketPoints = [
  {
    icon: House,
    label: "Find Your Dream Home",
    value: "Curated property searches across Toronto's most characterful neighbourhoods, matched to lifestyle and long-term fit.",
  },
  {
    icon: Key,
    label: "Sell Your Properties",
    value: "Thoughtful staging, design-led marketing, and pricing built around the story your home actually tells.",
  },
  {
    icon: Sparkles,
    label: "Real Estate Consultation",
    value: "Clear, honest answers for whatever real estate question is on your mind — buying, selling, leasing, or simply exploring.",
  },
];

const neighbourhoods = [
  "Baby Point",
  "Bloor West Village",
  "Cabbagetown",
  "Distillery District",
  "Dundas West",
  "High Park North",
  "Junction Area",
  "Roncesvalles",
  "Runnymede",
  "Swansea",
  "Warren Park",
  "West Bend",
];

const developerPartners = [
  "Urban Corp",
  "Cresford",
  "Empire Communities",
  "Minto",
];

const factIcons: Record<ListingIcon, typeof Bed> = {
  bed: Bed,
  bath: Bath,
  sqft: Maximize,
  calendar: House,
  home: House,
  car: House,
  clock: Clock3,
  tag: House,
};

function renderCardFacts(facts: ListingFact[]) {
  return facts.slice(0, 3).map((fact) => {
    const Icon = factIcons[fact.icon];

    return (
      <div key={`${fact.label}-${fact.value}`} className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-gold-light" strokeWidth={1.8} />
        <span>
          {fact.value} {fact.label}
        </span>
      </div>
    );
  });
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* ── Service Pillars ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#f6f0e7] py-24 text-dark md:py-28">
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(198,169,98,0.18),transparent_65%)]" />
          {/* Decorative gold orb */}
          <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 translate-x-1/2 rounded-full bg-gold/[0.07] blur-[80px]" />

          <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">
            <div className="text-center">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-gold-dark/60" />
                <p className="text-xs uppercase tracking-[0.38em] text-gold-dark">
                  Buying · Selling · Leasing
                </p>
                <span className="h-px w-10 bg-gold-dark/60" />
              </div>
              <h2 className="mx-auto mt-5 max-w-2xl text-4xl leading-tight font-heading md:text-5xl">
                Toronto real estate experiences, meticulously curated.
              </h2>
              <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold-dark to-transparent" />
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {servicePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group relative overflow-hidden border border-black/8 bg-white p-6 text-center shadow-[0_20px_45px_rgba(28,22,18,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(28,22,18,0.12)]"
                >
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold to-gold-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="text-3xl font-heading text-gold/30">{pillar.num}</p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-dark">
                    {pillar.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-gray-700">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {marketPoints.map((point) => (
                <div
                  key={point.label}
                  className="group flex flex-col items-center gap-4 px-4 py-6 text-center transition-colors duration-300"
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-gold-dark/25 bg-gold/[0.06] transition-colors duration-300 group-hover:bg-gold/[0.12]">
                    <point.icon className="h-4 w-4 text-gold-dark" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-dark">
                      {point.label}
                    </p>
                    <p className="mx-auto mt-2 max-w-xs text-sm leading-7 text-gray-700">
                      {point.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About / Agent Intro ──────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-dark py-24 md:py-28">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_15%_20%,rgba(198,169,98,0.14),transparent_28%)]" />
          <div className="absolute right-0 bottom-0 h-full w-full bg-[radial-gradient(circle_at_85%_80%,rgba(198,169,98,0.06),transparent_28%)]" />

          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" />
              <p className="text-xs uppercase tracking-[0.38em] text-gold">
                Meet Theresa
              </p>
              <span className="h-px w-10 bg-gold/60" />
            </div>

            {/* Photo */}
            <div className="relative mx-auto mt-10 w-full max-w-sm">
              <div className="absolute -inset-4 hidden rounded-[2.5rem] border border-white/8 sm:block" />
              <div className="absolute -right-6 -bottom-6 hidden h-40 w-40 rounded-full bg-gold/[0.08] blur-[50px] sm:block" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                <img
                  src="/images/theresa.jpeg"
                  alt="Theresa Le - Real Estate Professional"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-10 max-w-3xl text-4xl leading-tight font-heading text-white md:text-5xl">
              Seven years of Toronto real estate,
              <span className="block italic text-gold-light">and still just getting started.</span>
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-white/65">
              From helping clients find their dream homes to representing top
              developers like Urban Corp, Cresford, Empire Communities, and
              Minto, Theresa&apos;s seven-year journey has been a whirlwind of
              excitement and learning — each home, each launch, each client a
              new chapter in the story.
            </p>

            {/* Stats */}
            <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "7+", label: "Years In Real Estate" },
                { value: "4", label: "Top Developer Partners" },
                { value: "12+", label: "Favourite Neighbourhoods" },
                { value: "3", label: "Core Service Lines" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group border border-white/8 bg-white/[0.03] p-5 text-center transition-colors duration-300 hover:border-gold/30 hover:bg-white/[0.06]"
                >
                  <p className="text-3xl font-heading text-gold-light md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/48">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-gold-light transition-colors duration-300 hover:text-white"
            >
              Read More About Theresa
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} />
            </Link>
          </div>
        </section>

        {/* ── Featured Listings ────────────────────────────────────────── */}
        <section className="bg-[#171311] py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
            <div className="text-center">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-gold/60" />
                <p className="text-xs uppercase tracking-[0.38em] text-gold">
                  Properties Showcase
                </p>
                <span className="h-px w-10 bg-gold/60" />
              </div>
              <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-heading text-white md:text-5xl">
                Toronto listings, curated with design and creativity in mind.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55">
                A tighter selection of active Toronto properties across residential,
                commercial, and loft opportunities.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
              {featuredListings.map((listing, index) => (
                <Link
                  key={listing.id}
                  href={`/listings/${listing.id}`}
                  className={`group overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#221c18] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${
                    index === 1 ? "lg:translate-y-6" : ""
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={listing.image}
                      alt={listing.address}
                      className="aspect-[4/4.6] w-full object-cover transition-transform duration-700 group-hover:scale-107"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171311] via-[#171311]/15 to-transparent" />

                    {/* Status badge */}
                    <div className="absolute left-5 top-5">
                      <span className="bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-dark">
                        {listing.status}
                      </span>
                    </div>

                    {/* Price overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-3xl font-heading text-white">{listing.price}</p>
                      <p className="mt-1 text-sm uppercase tracking-[0.18em] text-gold-light">
                        {listing.propertySubType ?? listing.propertyType}
                      </p>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-gold-light" strokeWidth={1.8} />
                      <div>
                        <p className="text-lg font-medium text-white">{listing.address}</p>
                        <p className="mt-0.5 text-sm text-white/50">{listing.city}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-white/58">
                      {listing.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-4 border-t border-white/8 pt-4 text-xs text-white/55">
                      {renderCardFacts(listing.cardFacts)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link
                href="/listings"
                className="group inline-flex items-center gap-3 border border-white/12 px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-gold hover:bg-gold/10"
              >
                View All Listings
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Testimonial ──────────────────────────────────────────────── */}
        <section className="bg-[#f4ede3] py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 xl:px-24">
            <div className="text-center">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-gold-dark/60" />
                <p className="text-xs uppercase tracking-[0.38em] text-gold-dark">
                  Testimonies
                </p>
                <span className="h-px w-10 bg-gold-dark/60" />
              </div>
              <h2 className="mx-auto mt-5 max-w-2xl text-4xl leading-tight font-heading text-dark md:text-5xl">
                Stories from clients who found their chapter in Toronto.
              </h2>
              <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold-dark to-transparent" />
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-black/8 bg-white p-7 shadow-[0_16px_40px_rgba(42,30,20,0.07)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(42,30,20,0.13)]"
                >
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold to-gold-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="mt-4 text-[14px] leading-7 text-gray-700 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-black/8 pt-5">
                    <div className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border-2 border-gold/30">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark">{t.name}</p>
                      <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-gold-dark">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Favourite Toronto Neighbourhoods ─────────────────────────── */}
        <section className="relative overflow-hidden bg-dark-deep py-24 md:py-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div className="absolute left-1/2 top-0 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-gold/[0.05] blur-[80px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
            <div className="text-center">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-gold/50" />
                <p className="text-xs uppercase tracking-[0.38em] text-gold">
                  Favourite Toronto Neighbourhoods
                </p>
                <span className="h-px w-10 bg-gold/50" />
              </div>
              <h2 className="mt-6 text-4xl font-heading text-white md:text-5xl">
                Where Theresa knows the <span className="italic text-gold-light">blocks</span> best.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-8 text-white/55">
                A working list of the Toronto neighbourhoods Theresa returns to
                most — each with its own rhythm, character, and resale story.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-[1px] bg-white/8 sm:grid-cols-3 md:grid-cols-4">
              {neighbourhoods.map((name) => (
                <div
                  key={name}
                  className="group flex items-center justify-between gap-4 bg-dark-deep px-6 py-7 transition-colors duration-300 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-gold-light" strokeWidth={1.6} />
                    <p className="text-sm text-white/80 group-hover:text-white">{name}</p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-gold-light/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-gold-light" strokeWidth={1.6} />
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-white/8 pt-10">
              <p className="text-center text-[11px] uppercase tracking-[0.32em] text-white/45">
                Trusted By Leading Developers
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
                {developerPartners.map((name) => (
                  <p
                    key={name}
                    className="font-heading text-xl italic text-white/60 transition-colors duration-300 hover:text-gold-light md:text-2xl"
                  >
                    {name}
                  </p>
                ))}
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
