import { Award, TrendingUp, Users, Heart } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Heart, value: "99%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-gold" />
          <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
            Who We Are
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/theresa.webp"
                alt="Theresa Le - Real Estate Professional"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/20 -z-10" />
            {/* Experience badge */}
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-black px-8 py-6">
              <p className="text-gold text-4xl font-heading font-bold">15+</p>
              <p className="text-white/70 text-sm tracking-wider">
                Years of
                <br />
                Excellence
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-extralight mb-3 text-gray-900 leading-tight">
              Dedicated to Finding
            </h2>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-8 text-gray-900 leading-tight italic">
              Your Perfect Home
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-10" />
            <p className="text-gray-500 leading-[1.9] mb-6 text-[15px]">
              With over 15 years of experience in the real estate market,
              Theresa Le Homes is committed to providing exceptional service and
              expert guidance for all your real estate needs. We understand that
              buying or selling a home is one of the most significant decisions
              you&apos;ll ever make.
            </p>
            <p className="text-gray-500 leading-[1.9] mb-12 text-[15px]">
              Our team combines deep market knowledge, innovative marketing
              strategies, and a genuine passion for helping families find their
              dream homes. We pride ourselves on building lasting relationships
              founded on trust, integrity, and results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-cream border border-gray-200 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-3xl font-heading font-semibold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-[13px] text-gray-400 tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
