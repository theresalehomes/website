import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { Award, TrendingUp, Users, Heart, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Theresa Le Homes",
  description:
    "Learn about Theresa Le Homes — over 15 years of experience helping families buy and sell homes in the Bay Area.",
};

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Heart, value: "99%", label: "Client Satisfaction" },
];

const values = [
  {
    title: "Integrity",
    description:
      "We believe in honest, transparent communication at every stage of the real estate process.",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards and continuously strive to exceed client expectations.",
  },
  {
    title: "Client-First",
    description:
      "Your goals and needs always come first. We are dedicated to achieving the best outcome for you.",
  },
  {
    title: "Market Expertise",
    description:
      "Deep local knowledge and data-driven insights guide every recommendation we make.",
  },
];

const teamMembers = [
  {
    name: "Theresa Le",
    role: "Founder & Lead Agent",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
    description:
      "With over 15 years in real estate, Theresa has built a reputation for exceptional service, market knowledge, and results-driven strategies.",
  },
  {
    name: "James Nguyen",
    role: "Senior Agent",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
    description:
      "James specializes in luxury residential properties and brings 10 years of experience in the Silicon Valley market.",
  },
  {
    name: "Sarah Kim",
    role: "Buyer Specialist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=961&auto=format&fit=crop",
    description:
      "Sarah is passionate about helping first-time buyers navigate the process with confidence and find their perfect home.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="relative pt-40 pb-24 bg-black overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-gold" />
              <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                About Us
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-extralight text-white leading-tight">
              Our <span className="font-semibold italic">Story</span>
            </h1>
          </div>
        </section>

        {/* Main About */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop"
                    alt="Theresa Le - Real Estate Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/20 -z-10" />
                <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-black px-8 py-6">
                  <p className="text-gold text-4xl font-heading font-bold">15+</p>
                  <p className="text-white/70 text-sm tracking-wider">
                    Years of
                    <br />
                    Excellence
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-[1px] bg-gold" />
                  <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                    Who We Are
                  </p>
                </div>
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
                <p className="text-gray-500 leading-[1.9] mb-6 text-[15px]">
                  Our team combines deep market knowledge, innovative marketing
                  strategies, and a genuine passion for helping families find their
                  dream homes. We pride ourselves on building lasting relationships
                  founded on trust, integrity, and results.
                </p>
                <p className="text-gray-500 leading-[1.9] mb-12 text-[15px]">
                  Based in the heart of Silicon Valley, we serve communities across
                  San Jose, Santa Clara, Cupertino, Sunnyvale, Los Altos, and
                  surrounding areas. Our deep local expertise ensures you get the
                  best possible outcome whether buying or selling.
                </p>

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

        {/* Our Values */}
        <section className="py-24 md:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-gold" />
                <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                  Our Values
                </p>
                <div className="w-8 h-[1px] bg-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-extralight text-gray-900">
                What Drives <span className="font-semibold italic">Us</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <CheckCircle className="w-7 h-7 text-gold mb-6" strokeWidth={1.5} />
                  <h3 className="text-[17px] font-heading font-medium mb-3 tracking-wide text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-[1.8]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-gold" />
                <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                  Our Team
                </p>
                <div className="w-8 h-[1px] bg-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-extralight text-gray-900">
                Meet the <span className="font-semibold italic">Experts</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 group"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold text-[13px] tracking-[0.15em] uppercase font-heading mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-[14px] leading-[1.8]">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
