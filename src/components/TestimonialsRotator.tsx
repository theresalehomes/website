"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/listings";

const ROTATE_MS = 5000;

export default function TestimonialsRotator() {
  const testimonialCount = testimonials.length;
  const [activePage, setActivePage] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goToPage = (index: number, nextDirection: "next" | "prev") => {
    setDirection(nextDirection);
    setActivePage(index);
  };

  const showNext = () => {
    goToPage((activePage + 1) % testimonialCount, "next");
  };

  const showPrev = () => {
    goToPage((activePage - 1 + testimonialCount) % testimonialCount, "prev");
  };

  useEffect(() => {
    if (testimonialCount <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setDirection("next");
      setActivePage((current) => (current + 1) % testimonialCount);
    }, ROTATE_MS);

    return () => window.clearInterval(interval);
  }, [testimonialCount]);

  const testimonial = testimonials[activePage];

  return (
    <section className="bg-[#f4ede3] py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gold-dark/60" />
            <p className="text-xs uppercase tracking-[0.38em] text-gold-dark">
              Client Reviews
            </p>
            <span className="h-px w-10 bg-gold-dark/60" />
          </div>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl leading-tight font-heading text-dark md:text-5xl">
            Real notes from Ontario clients Theresa has worked with.
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold-dark to-transparent" />
        </div>

        <div
          key={`${activePage}-${direction}`}
          className={`mx-auto mt-14 max-w-2xl ${
            direction === "next" ? "animate-slide-in-right" : "animate-slide-in-left"
          }`}
        >
          <div className="group flex h-[42rem] flex-col overflow-hidden rounded-[1.75rem] border border-black/8 bg-white shadow-[0_16px_40px_rgba(42,30,20,0.07)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(42,30,20,0.13)] md:h-[44rem]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/10 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col overflow-hidden p-7 md:p-9">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              <div className="mt-5 flex-1 overflow-hidden">
                <p className="h-full overflow-y-auto pr-2 text-[15px] leading-8 text-gray-700 [scrollbar-width:thin]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 min-h-[4.5rem] border-t border-black/8 pt-5">
                <p className="text-base font-semibold text-dark">{testimonial.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gold-dark">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {testimonialCount > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={showPrev}
              aria-label="Show previous reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-dark/25 bg-white/70 text-gold-dark transition-all duration-300 hover:border-gold-dark hover:bg-white hover:text-gold"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    goToPage(index, index > activePage ? "next" : "prev")
                  }
                  aria-label={`Show review set ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activePage === index
                      ? "w-8 bg-gold-dark"
                      : "w-2.5 bg-gold-dark/30 hover:bg-gold-dark/55"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Show next reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-dark/25 bg-white/70 text-gold-dark transition-all duration-300 hover:border-gold-dark hover:bg-white hover:text-gold"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
