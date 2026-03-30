"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-heading">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-light mb-6">
            Contact <span className="font-semibold">Us</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-gray-400 leading-relaxed">
            Ready to find your dream home? Reach out to us and let&apos;s start
            your real estate journey together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-8">
              Contact Information
            </h3>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <p className="text-white">(408) 555-0123</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="text-white">info@theresalehomes.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Office</p>
                  <p className="text-white">
                    123 Main Street, Suite 200
                    <br />
                    San Jose, CA 95113
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-gold/10 border border-gold/20 p-8">
              <h4 className="font-heading font-semibold text-lg mb-2">
                Ready to Find Your Dream Home?
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Let us help you navigate the real estate market with confidence
                and expertise. Your perfect home is waiting.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-700 py-4 text-white placeholder:text-gray-500 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-700 py-4 text-white placeholder:text-gray-500 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-700 py-4 text-white placeholder:text-gray-500 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-700 py-4 text-white placeholder:text-gray-500 focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-3 px-10 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
