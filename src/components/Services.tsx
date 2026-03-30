import {
  Home,
  Building2,
  BarChart3,
  Key,
  Search,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Sales",
    description:
      "Expert guidance through every step of buying or selling your home, ensuring the best possible outcome for you and your family.",
  },
  {
    icon: Building2,
    title: "Commercial Real Estate",
    description:
      "Strategic commercial property solutions for investors and business owners looking to grow their portfolio.",
  },
  {
    icon: Key,
    title: "Property Management",
    description:
      "Comprehensive property management services to protect your investment and maximize your rental income.",
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description:
      "In-depth market research and analysis to help you make informed decisions in today's competitive market.",
  },
  {
    icon: Search,
    title: "Home Search",
    description:
      "Personalized home search tailored to your unique needs, preferences, and budget — we find your perfect match.",
  },
  {
    icon: Briefcase,
    title: "Investment Consulting",
    description:
      "Expert investment advice and strategies to help you build wealth through smart real estate investments.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-gold" />
            <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
              What We Offer
            </p>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extralight mb-3">
            Our Services
          </h2>
          <p className="text-gray-500 leading-relaxed text-[15px] mt-6">
            A full range of real estate services designed to meet your needs,
            whether you&apos;re buying your first home or expanding your
            investment portfolio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-800/50">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-dark p-10 lg:p-12 hover:bg-dark-card transition-all duration-500 relative"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-700" />
              <service.icon className="w-7 h-7 text-gold mb-8" strokeWidth={1.5} />
              <h3 className="text-[17px] font-heading font-medium mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-500 text-[14px] leading-[1.8]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
