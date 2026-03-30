"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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
                "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-gold" />
              <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                Get In Touch
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-extralight text-white leading-tight">
              Contact <span className="font-semibold italic">Us</span>
            </h1>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 md:py-32 bg-dark text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-5 gap-16 xl:gap-24">
              {/* Left side - Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-[1px] bg-gold" />
                  <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                    Contact Info
                  </p>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-extralight mb-6">
                  Let&apos;s <span className="font-semibold italic">Talk</span>
                </h2>
                <p className="text-gray-500 leading-[1.8] text-[15px] mb-14">
                  Ready to find your dream home? Reach out to us and let&apos;s
                  start your real estate journey together.
                </p>

                <div className="space-y-8 mb-14">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-gray-800 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-600 tracking-[0.2em] uppercase mb-1">
                        Phone
                      </p>
                      <p className="text-white text-[15px]">(408) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-gray-800 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-600 tracking-[0.2em] uppercase mb-1">
                        Email
                      </p>
                      <p className="text-white text-[15px]">
                        info@theresalehomes.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-gray-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-600 tracking-[0.2em] uppercase mb-1">
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
                    <div className="w-12 h-12 border border-gray-800 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-600 tracking-[0.2em] uppercase mb-1">
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
                    <div className="py-4 border-b border-gray-800">
                      <label className="text-[11px] text-gray-600 tracking-[0.2em] uppercase block mb-2">
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
                    <div className="py-4 border-b border-gray-800">
                      <label className="text-[11px] text-gray-600 tracking-[0.2em] uppercase block mb-2">
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
                    <div className="py-4 border-b border-gray-800">
                      <label className="text-[11px] text-gray-600 tracking-[0.2em] uppercase block mb-2">
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
                    <div className="py-4 border-b border-gray-800">
                      <label className="text-[11px] text-gray-600 tracking-[0.2em] uppercase block mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full bg-transparent text-white text-[15px] focus:outline-none placeholder:text-gray-700"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  <div className="py-4 border-b border-gray-800">
                    <label className="text-[11px] text-gray-600 tracking-[0.2em] uppercase block mb-2">
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
                      className="group inline-flex items-center gap-4 px-12 py-5 bg-gold text-white text-[13px] tracking-[0.25em] uppercase font-heading hover:bg-gold-light transition-all duration-500"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-gold" />
              <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-heading">
                Our Location
              </p>
            </div>
            <div className="aspect-[16/9] md:aspect-[21/9] bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-4" strokeWidth={1} />
                <p className="text-gray-600 text-lg font-heading font-light">
                  123 Main Street, Suite 200
                </p>
                <p className="text-gray-400 text-[14px]">San Jose, CA 95113</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
