import { Home, Building2, BarChart3, Key, Search, Briefcase } from "lucide-react";

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
    <section id="services" className="py-20 md:py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-heading">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-light mb-6">
            Our <span className="font-semibold">Services</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-gray-400 leading-relaxed">
            We offer a full range of real estate services designed to meet your
            needs, whether you&apos;re buying your first home or expanding your
            investment portfolio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group border border-gray-800 p-8 hover:border-gold transition-all duration-500"
            >
              <div className="w-14 h-14 border border-gold flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                <service.icon className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
