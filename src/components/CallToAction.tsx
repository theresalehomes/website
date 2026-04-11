import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative py-32 bg-dark-deep overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-deep via-dark-deep/80 to-dark-deep" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-6">
          Start Your Journey
        </p>
        <h2 className="text-4xl md:text-6xl font-heading text-white mb-6 leading-tight">
          Ready to Find Your
          <br />
          <span className="italic">Dream Home?</span>
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto mb-12 leading-relaxed">
          Let us help you navigate the real estate market with confidence and
          expertise. Your perfect home is waiting.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-white text-dark text-[12px] tracking-[0.15em] uppercase font-body font-medium hover:bg-gold hover:text-white transition-all duration-300"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
