"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Buy",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", interest: "Buy", message: "" });
  };

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
                "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/80 to-dark-deep" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-6">
              Get In Touch
            </p>
            <h1 className="text-5xl md:text-7xl font-heading text-white leading-tight">
              Contact <span className="italic">Us</span>
            </h1>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-28 md:py-36 bg-dark text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-5 gap-16 xl:gap-24">
              {/* Left side - Info */}
              <div className="lg:col-span-2">
                <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-6">
                  Contact Info
                </p>
                <h2 className="text-4xl md:text-5xl font-heading text-white mb-8 leading-tight">
                  Let&apos;s <span className="italic">Talk</span>
                </h2>
                <p className="text-gray-500 leading-[1.8] text-[15px] mb-14">
                  Ready to find your dream home? Reach out to us and let&apos;s
                  start your real estate journey together.
                </p>

                <div className="space-y-8 mb-14">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 tracking-[0.15em] uppercase mb-1 font-body">
                        Phone
                      </p>
                      <p className="text-white text-[15px]">(408) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 tracking-[0.15em] uppercase mb-1 font-body">
                        Email
                      </p>
                      <p className="text-white text-[15px]">
                        info@theresalehomes.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 tracking-[0.15em] uppercase mb-1 font-body">
                        Office
                      </p>
                      <p className="text-white text-[15px]">
                        123 Main Street, Suite 200
                        <br />
                        San Jose, CA 95113
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 tracking-[0.15em] uppercase mb-1 font-body">
                        Office Hours
                      </p>
                      <p className="text-white text-[15px]">
                        Mon - Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat: 10:00 AM - 4:00 PM
                        <br />
                        Sun: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-0">
                  <div className="grid md:grid-cols-2 gap-x-8">
                    <div className="py-4 border-b border-white/10">
                      <label className="text-xs text-gray-600 tracking-[0.15em] uppercase block mb-2 font-body">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-transparent text-white text-[15px] focus:outline-none placeholder:text-gray-700"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="py-4 border-b border-white/10">
                      <label className="text-xs text-gray-600 tracking-[0.15em] uppercase block mb-2 font-body">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-transparent text-white text-[15px] focus:outline-none placeholder:text-gray-700"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="py-4 border-b border-white/10">
                      <label className="text-xs text-gray-600 tracking-[0.15em] uppercase block mb-2 font-body">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-transparent text-white text-[15px] focus:outline-none placeholder:text-gray-700"
                        placeholder="(408) 555-0123"
                      />
                    </div>
                    <div className="py-4 border-b border-white/10">
                      <label className="text-xs text-gray-600 tracking-[0.15em] uppercase block mb-2 font-body">
                        Interested In
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) =>
                          setFormData({ ...formData, interest: e.target.value })
                        }
                        className="w-full bg-transparent text-white text-[15px] focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="Buy" className="bg-dark">Buy</option>
                        <option value="Sell" className="bg-dark">Sell</option>
                        <option value="Rent" className="bg-dark">Rent</option>
                        <option value="Invest" className="bg-dark">Invest</option>
                        <option value="Other" className="bg-dark">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="py-4 border-b border-white/10">
                    <label className="text-xs text-gray-600 tracking-[0.15em] uppercase block mb-2 font-body">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-transparent text-white text-[15px] focus:outline-none resize-none placeholder:text-gray-700"
                      placeholder="Tell us about your real estate needs..."
                    />
                  </div>
                  <div className="pt-10">
                    <button
                      type="submit"
                      className="px-10 py-4 bg-white text-dark text-[12px] tracking-[0.15em] uppercase font-body font-medium hover:bg-gold hover:text-white transition-all duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-dark-deep">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-8">
              Our Location
            </p>
            <div className="aspect-[16/9] md:aspect-[21/9] bg-dark-card border border-white/5 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-4" strokeWidth={1} />
                <p className="text-white/80 text-lg font-heading">
                  123 Main Street, Suite 200
                </p>
                <p className="text-gray-600 text-sm">San Jose, CA 95113</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
