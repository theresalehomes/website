import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Listings", href: "#listings" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
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
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-xl font-light tracking-[0.15em] uppercase mb-6">
              Theresa <span className="text-gold font-semibold">Le</span> Homes
            </h3>
            <p className="text-gray-500 text-[14px] leading-[1.9] mb-8">
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
                  className="w-10 h-10 border border-gray-800 flex items-center justify-center text-gray-500 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[12px] tracking-[0.3em] uppercase font-heading mb-8 text-white">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-[14px] hover:text-gold transition-colors duration-300 hover:pl-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Info */}
          <div>
            <h4 className="text-[12px] tracking-[0.3em] uppercase font-heading mb-8 text-white">
              Office
            </h4>
            <div className="space-y-5 text-gray-500 text-[14px] leading-relaxed">
              <p>
                123 Main Street, Suite 200
                <br />
                San Jose, CA 95113
              </p>
              <p>(408) 555-0123</p>
              <p>info@theresalehomes.com</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[12px] tracking-[0.3em] uppercase font-heading mb-8 text-white">
              Office Hours
            </h4>
            <div className="space-y-4 text-gray-500 text-[14px]">
              <div className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-gray-400">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-gray-400">10:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-gray-400">By Appointment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-[13px]">
            &copy; {new Date().getFullYear()} Theresa Le Homes. All rights
            reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-gray-600 text-[13px] hover:text-gold transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 text-[13px] hover:text-gold transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
