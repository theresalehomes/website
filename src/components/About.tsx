import { Award, TrendingUp, Users, Heart } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Heart, value: "99%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop"
                alt="Theresa Le - Real Estate Professional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-heading">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-light mb-6 text-gray-900">
              Dedicated to Finding
              <br />
              <span className="font-semibold">Your Perfect Home</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-8" />
            <p className="text-gray-600 leading-relaxed mb-6">
              With over 15 years of experience in the real estate market,
              Theresa Le Homes is committed to providing exceptional service and
              expert guidance for all your real estate needs. We understand that
              buying or selling a home is one of the most significant decisions
              you&apos;ll ever make.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Our team combines deep market knowledge, innovative marketing
              strategies, and a genuine passion for helping families find their
              dream homes. We pride ourselves on building lasting relationships
              founded on trust, integrity, and results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-semibold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
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
