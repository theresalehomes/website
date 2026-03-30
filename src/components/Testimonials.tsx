"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael & Sarah Johnson",
    role: "Home Buyers",
    text: "Theresa made our home buying experience seamless and stress-free. Her knowledge of the local market helped us find our dream home at the right price. We couldn't be happier!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Home Seller",
    text: "We sold our home in just 10 days above asking price. Theresa's marketing strategy and negotiation skills were outstanding. She truly goes above and beyond for her clients.",
    rating: 5,
  },
  {
    name: "Jessica & Robert Williams",
    role: "First-Time Buyers",
    text: "As first-time buyers, we were nervous about the process. Theresa patiently guided us every step of the way and found us the perfect starter home within our budget.",
    rating: 5,
  },
  {
    name: "Amanda Torres",
    role: "Property Investor",
    text: "Theresa has helped me acquire multiple investment properties over the years. Her market insights and investment analysis are invaluable. Highly recommend for serious investors.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-heading">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-light text-white mb-16">
          What Our <span className="font-semibold">Clients Say</span>
        </h2>

        <div className="relative">
          <Quote className="w-12 h-12 text-gold/30 mx-auto mb-8" />
          <p className="text-white text-lg md:text-xl leading-relaxed font-light mb-8 max-w-3xl mx-auto">
            &ldquo;{testimonial.text}&rdquo;
          </p>
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-gold fill-gold"
              />
            ))}
          </div>
          <p className="text-gold font-heading font-semibold text-lg">
            {testimonial.name}
          </p>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 border border-gray-600 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-gold" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 border border-gray-600 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
