import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-dark-deep py-32">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-deep via-dark-deep/80 to-dark-deep" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Decorative gold glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-16 xl:px-24">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-10 bg-gold/50" />
          <p className="text-xs uppercase tracking-[0.38em] text-gold">
            Let&apos;s Chat
          </p>
          <span className="h-px w-10 bg-gold/50" />
        </div>

        <h2 className="mt-6 text-4xl font-heading text-white md:text-6xl leading-tight">
          Selling or buying a property
          <br />
          <span className="italic text-gold-light">in Toronto?</span>
        </h2>

        <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <p className="mx-auto mt-7 max-w-xl text-[15px] leading-8 text-white/55">
          Whether you&apos;re opening a new chapter, closing one with pride, or
          leasing a canvas for what&apos;s next — Theresa is here to help you
          move with clarity.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white px-10 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-dark transition-all duration-300 hover:bg-gold hover:text-white"
          >
            Start The Conversation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} />
          </Link>
          <Link
            href="/listings"
            className="inline-flex items-center justify-center border border-white/18 px-10 py-4 text-[12px] uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-gold/60 hover:bg-white/6"
          >
            Browse Listings
          </Link>
        </div>
      </div>
    </section>
  );
}
