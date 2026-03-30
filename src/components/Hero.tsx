import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-12 -translate-y-1/2 hidden xl:block">
        <div className="w-[1px] h-32 bg-gold/30 mb-4" />
        <p className="text-gold/50 text-[11px] tracking-[0.4em] uppercase [writing-mode:vertical-lr]">
          Luxury Real Estate
        </p>
        <div className="w-[1px] h-32 bg-gold/30 mt-4" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-gold" />
          <p className="text-gold text-[13px] tracking-[0.4em] uppercase font-heading font-light">
            Professional Real Estate Solutions
          </p>
          <div className="w-12 h-[1px] bg-gold" />
        </div>

        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-heading font-extralight leading-[1.1] mb-8 tracking-tight">
          Your Vision,
          <br />
          <span className="font-semibold italic">Our Expertise</span>
        </h1>

        <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mb-14 leading-relaxed">
          Helping you find the perfect home with personalized service and deep
          market knowledge in every step of your real estate journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link
            href="/listings"
            className="group inline-flex items-center justify-center px-12 py-5 bg-gold text-white text-[13px] tracking-[0.25em] uppercase font-heading hover:bg-gold-light transition-all duration-500"
          >
            View Listings
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-5 border border-white/30 text-white text-[13px] tracking-[0.25em] uppercase font-heading hover:border-gold hover:text-gold transition-all duration-500"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </p>
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}
