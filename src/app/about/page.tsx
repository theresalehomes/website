import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "About Us | Theresa Le Homes",
  description:
    "Learn about Theresa Le Homes — over 15 years of experience helping families buy and sell homes in the Bay Area.",
};

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
      "/images/theresa.webp",
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
        <section className="relative pt-40 pb-24 bg-dark-deep overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/80 to-dark-deep" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-6">
              About Us
            </p>
            <h1 className="text-5xl md:text-7xl font-heading text-white leading-tight">
              Our <span className="italic">Story</span>
            </h1>
          </div>
        </section>

        {/* Main About */}
        <section className="py-28 md:py-36 bg-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/images/theresa.webp"
                    alt="Theresa Le - Real Estate Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/5 -z-10" />
                <div className="absolute bottom-8 -left-4 md:-left-8 bg-dark-deep px-8 py-6 border border-white/5">
                  <p className="text-gold text-4xl font-heading font-bold">15+</p>
                  <p className="text-gray-500 text-sm tracking-wider">
                    Years of
                    <br />
                    Excellence
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-6">
                  Who We Are
                </p>
                <h2 className="text-4xl md:text-5xl font-heading text-white mb-8 leading-tight">
                  Dedicated to Finding
                  <br />
                  <span className="italic">Your Perfect Home</span>
                </h2>
                <div className="w-12 h-[1px] bg-gold mb-8" />
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
                  dream homes.
                </p>
                <p className="text-gray-500 leading-[1.9] mb-12 text-[15px]">
                  Based in the heart of Silicon Valley, we serve communities across
                  San Jose, Santa Clara, Cupertino, Sunnyvale, Los Altos, and
                  surrounding areas.
                </p>

                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "500+", label: "Properties Sold" },
                    { value: "1000+", label: "Happy Clients" },
                    { value: "15+", label: "Years Experience" },
                    { value: "99%", label: "Satisfaction" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-heading font-bold text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-gray-600 text-xs tracking-[0.15em] uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-28 md:py-36 bg-dark-deep">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-4">
                Our Values
              </p>
              <h2 className="text-4xl md:text-5xl font-heading text-white">
                What Drives <span className="italic">Us</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-dark-deep p-8 lg:p-10 hover:bg-dark-card transition-all duration-500 group"
                >
                  <h3 className="text-white text-lg font-heading font-semibold italic mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-[1.8]">
                    {value.description}
                  </p>
                  <div className="w-0 h-[1px] bg-gold group-hover:w-12 transition-all duration-500 mt-6" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-28 md:py-36 bg-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-4">
                Our Team
              </p>
              <h2 className="text-4xl md:text-5xl font-heading text-white">
                Meet the <span className="italic">Experts</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-[1px] bg-white/5">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-dark group"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-lg font-heading font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold text-xs tracking-[0.15em] uppercase font-body mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-[1.8]">
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
