import Link from "next/link";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Listings", href: "/listings" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-deep text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/images/logo.webp"
              alt="Theresa Le Homes"
              className="h-16 w-auto mix-blend-lighten mb-6"
            />
            <p className="text-gray-600 text-sm leading-[1.8] mb-8">
              Your trusted partner in real estate. Dedicated to helping you find
              the perfect property that matches your lifestyle and investment
              goals.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-600 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.15em] uppercase font-body font-medium mb-8 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm tracking-[0.15em] uppercase font-body font-medium mb-8 text-white/80">
              Contact
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-gray-600 text-sm">(408) 555-0123</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-gray-600 text-sm">info@theresalehomes.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-gray-600 text-sm">www.theresalehomes.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-gray-600 text-sm">
                  123 Main Street, Suite 200
                  <br />
                  San Jose, CA 95113
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm tracking-[0.15em] uppercase font-body font-medium mb-8 text-white/80">
              Office Hours
            </h4>
            <div className="space-y-4 text-gray-600 text-sm">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-gray-500">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-gray-500">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-gray-500">By Appointment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">
            &copy; {new Date().getFullYear()} Theresa Le Homes. All rights
            reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-700 text-xs hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-700 text-xs hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
