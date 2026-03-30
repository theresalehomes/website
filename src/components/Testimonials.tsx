"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
    <section id="testimonials" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative quote */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[280px] font-heading text-gray-100 leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
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

        {/* Testimonial Content */}
        <div className="text-center">
          <div className="flex justify-center gap-1.5 mb-10">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
          </div>

          <p className="text-gray-700 text-xl md:text-2xl leading-relaxed font-light mb-12 max-w-3xl mx-auto italic">
            &ldquo;{testimonial.text}&rdquo;
          </p>

          <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />

          <p className="font-heading font-semibold text-lg text-gray-900 tracking-wide">
            {testimonial.name}
          </p>
          <p className="text-gold text-[13px] tracking-[0.2em] uppercase mt-1">
            {testimonial.role}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-16">
          <button
            onClick={prev}
            className="w-12 h-12 border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 ${
                  i === current
                    ? "w-8 h-2 bg-gold"
                    : "w-2 h-2 bg-gray-300 hover:bg-gold/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
