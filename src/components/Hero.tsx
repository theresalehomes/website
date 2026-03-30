export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-heading">
          Professional Real Estate Solutions
        </p>
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-heading font-light leading-tight mb-6">
          Your Vision,
          <br />
          <span className="font-semibold">Our Expertise</span>
        </h1>
        <div className="w-20 h-[2px] bg-gold mx-auto mb-8" />
        <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Helping you find the perfect home with personalized service and deep
          market knowledge in every step of your real estate journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#listings"
            className="inline-block px-10 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
          >
            View Listings
          </a>
          <a
            href="#contact"
            className="inline-block px-10 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gold/50" />
      </div>
    </section>
  );
}
