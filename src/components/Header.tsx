"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Listings", href: "/listings" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-deep/95 backdrop-blur-md py-4 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="block">
          <img
            src="/images/logo.webp"
            alt="Theresa Le Homes"
            className="h-12 w-auto mix-blend-lighten"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] tracking-[0.15em] uppercase font-body font-light transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-gold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-7 py-2.5 bg-white text-dark text-[12px] tracking-[0.15em] uppercase font-body font-medium hover:bg-gold hover:text-white transition-all duration-300"
          >
            Enquire Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden fixed inset-0 bg-dark-deep/98 z-40 transition-all duration-500 flex flex-col items-center justify-center ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setMobileOpen(false)}
        >
          <X size={28} />
        </button>
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg tracking-[0.2em] uppercase font-heading transition-colors ${
                isActive(link.href) ? "text-gold" : "text-white hover:text-gold"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 px-10 py-3 bg-white text-dark text-[13px] tracking-[0.15em] uppercase font-body hover:bg-gold hover:text-white transition-all duration-300"
            onClick={() => setMobileOpen(false)}
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
