"use client";

import { useForm, ValidationError } from "@formspree/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xaqavogw");
  const isLoading = state.submitting;

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
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 text-center">
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
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
            <div className="grid lg:grid-cols-5 gap-16 xl:gap-24">

              {/* Left — Info */}
              <div className="lg:col-span-2 text-center lg:text-left">
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

                <div className="space-y-8">
                  {[
                    { Icon: Phone, label: "Phone", value: "+1 (416) 995-4602" },
                    { Icon: Mail, label: "Email", value: "theresa@theresalehomes.com" },
                    {
                      Icon: MapPin,
                      label: "Office",
                      value: "340 Ferrier St Unit 3\nMarkham, ON L3R 2Z5",
                    },
                    {
                      Icon: Clock,
                      label: "Office Hours",
                      value: "Mon – Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 4:00 PM\nSun: By Appointment",
                    },
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-5 justify-center lg:justify-start">
                      <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-gray-600 tracking-[0.15em] uppercase mb-1 font-body">
                          {label}
                        </p>
                        <p className="text-white text-[15px] whitespace-pre-line">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Form */}
              <div className="lg:col-span-3">

                {/* Success state */}
                {state.succeeded ? (
                  <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
                    <CheckCircle className="w-16 h-16 text-gold" strokeWidth={1} />
                    <h3 className="text-3xl font-heading text-white">Message Sent!</h3>
                    <p className="text-gray-500 max-w-sm leading-relaxed">
                      Thank you for reaching out. Theresa will get back to you
                      within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input
                      type="hidden"
                      name="_subject"
                      value="New enquiry from Theresa Le Homes website"
                    />
                    <div className="grid md:grid-cols-2 gap-x-8">
                      {/* Name */}
                      <div className="py-4 border-b border-white/10">
                        <label className="text-xs text-gray-600 tracking-[0.15em] uppercase block mb-2 font-body">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          disabled={isLoading}
                          className="w-full bg-transparent text-white text-[15px] focus:outline-none placeholder:text-gray-700 disabled:opacity-50"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div className="py-4 border-b border-white/10">
                        <label className="text-xs text-gray-600 tracking-[0.15em] uppercase block mb-2 font-body">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          disabled={isLoading}
                          className="w-full bg-transparent text-white text-[15px] focus:outline-none placeholder:text-gray-700 disabled:opacity-50"
                          placeholder="john@example.com"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="mt-2 text-sm text-red-400"
                        />
                      </div>

                      {/* Phone */}
                      <div className="py-4 border-b border-white/10">
                        <label className="text-xs text-gray-600 tracking-[0.15em] uppercase block mb-2 font-body">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          disabled={isLoading}
                          className="w-full bg-transparent text-white text-[15px] focus:outline-none placeholder:text-gray-700 disabled:opacity-50"
                          placeholder="+1 (416) 995-4602"
                        />
                      </div>

                      {/* Interest */}
                      <div className="py-4 border-b border-white/10">
                        <label className="text-xs text-gray-600 tracking-[0.15em] uppercase block mb-2 font-body">
                          Interested In
                        </label>
                        <select
                          name="interest"
                          disabled={isLoading}
                          defaultValue="Buy"
                          className="w-full bg-transparent text-white text-[15px] focus:outline-none appearance-none cursor-pointer disabled:opacity-50"
                        >
                          <option value="Buy" className="bg-dark">Buy</option>
                          <option value="Sell" className="bg-dark">Sell</option>
                          <option value="Rent" className="bg-dark">Rent</option>
                          <option value="Invest" className="bg-dark">Invest</option>
                          <option value="Other" className="bg-dark">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="py-4 border-b border-white/10">
                      <label className="text-xs text-gray-600 tracking-[0.15em] uppercase block mb-2 font-body">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        disabled={isLoading}
                        className="w-full bg-transparent text-white text-[15px] focus:outline-none resize-none placeholder:text-gray-700 disabled:opacity-50"
                        placeholder="Tell us about your real estate needs..."
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="mt-2 text-sm text-red-400"
                      />
                    </div>

                    {/* Error banner */}
                    {state.errors && (
                      <div className="flex items-center gap-3 mt-6 text-red-400">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <div className="text-sm">
                          <ValidationError errors={state.errors} />
                          <p>
                            If the problem continues, email us directly at{" "}
                            <a href="mailto:theresa@theresalehomes.com" className="underline">
                              theresa@theresalehomes.com
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Submit */}
                    <div className="pt-10">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex items-center gap-3 px-10 py-4 bg-white text-dark text-[12px] tracking-[0.15em] uppercase font-body font-medium hover:bg-gold hover:text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                        {isLoading ? "Sending…" : "Submit"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-dark-deep">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-24">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-8 text-center">
              Our Location
            </p>
            <div className="aspect-[16/9] md:aspect-[21/9] bg-dark-card border border-white/5 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-4" strokeWidth={1} />
                <p className="text-white/80 text-lg font-heading">
                  340 Ferrier St Unit 3
                </p>
                <p className="text-gray-600 text-sm">Markham, ON L3R 2Z5</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
