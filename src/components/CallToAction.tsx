import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      className="relative py-28 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading mb-6">
          Start Your Journey
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-extralight text-white mb-4 leading-tight">
          Ready to Find Your
        </h2>
        <h2 className="text-3xl md:text-5xl font-heading font-semibold text-white italic mb-8">
          Dream Home?
        </h2>
        <p className="text-gray-400 text-[15px] max-w-xl mx-auto mb-12 leading-relaxed">
          Let us help you navigate the real estate market with confidence and
          expertise. Your perfect home is waiting.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-4 px-12 py-5 bg-gold text-white text-[13px] tracking-[0.25em] uppercase font-heading hover:bg-gold-light transition-all duration-500"
        >
          <span>Get Started Today</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
