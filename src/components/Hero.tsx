import Link from "next/link";
import { ArrowRight, Home, Key, MessageCircle } from "lucide-react";

const highlights = [
  { label: "Years In Toronto Real Estate", value: "10+" },
  { label: "Top Developer Partners", value: "4" },
  { label: "Core Service Lines", value: "Buy · Sell · Lease" },
];

const featureTiles = [
  {
    icon: Home,
    title: "Find Your Dream Home",
    text: "Curated searches shaped around your lifestyle, neighbourhood fit, and future plans.",
  },
  {
    icon: Key,
    title: "Sell Your Property",
    text: "Thoughtful staging and marketing that let each home's best features speak first.",
  },
  {
    icon: MessageCircle,
    title: "Real Estate Consultation",
    text: "Clear guidance for every real estate question — no pressure, just perspective.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#120f0d] pt-24 text-white lg:pt-28">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,169,98,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,7,0.92),rgba(10,8,7,0.78)_45%,rgba(10,8,7,0.9)_75%,#120f0d)]" />
      </div>

      {/* Decorative orbs */}
      <div className="absolute left-1/2 top-[14%] hidden h-72 w-72 -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[90px] lg:block" />
      <div className="absolute left-[10%] bottom-[18%] hidden h-48 w-48 rounded-full bg-gold/[0.08] blur-[60px] lg:block" />
      <div className="absolute right-[10%] bottom-[22%] hidden h-40 w-40 rounded-full bg-gold/[0.05] blur-[55px] lg:block" />

      <div className="relative mx-auto flex min-h-[min(860px,100svh)] max-w-5xl flex-col items-center justify-center gap-10 px-6 pb-20 pt-12 text-center sm:px-10 lg:px-16 lg:pb-24 lg:pt-16 xl:px-24">
        {/* Eyebrow */}
        <div className="animate-fade-in-up flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gold-light/70" />
          <p className="text-xs uppercase tracking-[0.45em] text-gold-light">
            Toronto Real Estate
          </p>
          <span className="h-px w-10 bg-gold-light/70" />
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up animation-delay-200 max-w-4xl text-5xl leading-[1.05] font-heading sm:text-6xl lg:text-7xl">
          The only real estate agent
          <span className="block italic text-gold-light">you&apos;ll ever need.</span>
        </h1>

        {/* Gold divider */}
        <div className="animate-fade-in animation-delay-400 h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        {/* Description */}
        <p className="animate-fade-in-up animation-delay-400 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
          Crafted to cater to your individual preferences, Theresa Le&apos;s Toronto
          real estate experiences are meticulously curated — placing a special
          emphasis on design and creativity across every buy, sell, and lease.
        </p>

        {/* Buttons */}
        <div className="animate-fade-in-up animation-delay-600 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/listings"
            className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-dark transition-all duration-300 hover:bg-gold hover:text-white"
          >
            Explore Listings
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-gold hover:bg-white/8"
          >
            Book A Consultation
          </Link>
        </div>

        {/* Stat highlights */}
        <div className="animate-fade-in animation-delay-600 mt-6 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="group border border-white/10 bg-white/[0.04] px-5 py-5 text-center backdrop-blur-sm transition-colors duration-300 hover:border-gold/40 hover:bg-white/[0.07]"
            >
              <p className="text-2xl font-semibold font-heading text-gold-light sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/55">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Feature tiles */}
        <div className="animate-fade-in animation-delay-600 mt-4 grid w-full max-w-5xl gap-3 sm:grid-cols-3">
          {featureTiles.map((item) => (
            <div
              key={item.title}
              className="group border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.07]"
            >
              <item.icon className="mx-auto h-5 w-5 text-gold-light" strokeWidth={1.8} />
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/58">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade-to-next-section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#120f0d] to-transparent" />
    </section>
  );
}
