"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, Sparkles, MapPin } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0e2216]/90 backdrop-blur-md border-b border-[#e5c158]/20 shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section echoing business card design */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <div className="flex items-baseline font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                {/* Stylized Devanagari नि + khaar */}
                <span className="text-[#f6e6b4] text-3xl sm:text-4xl font-extrabold relative inline-block">
                  नि
                  <Sparkles className="w-3.5 h-3.5 text-[#e5c158] absolute -top-1 right-0 animate-pulse" />
                </span>
                <span className="text-gold-metallic tracking-normal">khaar</span>
                <span className="ml-1 text-emerald-400 text-xl font-sans inline-flex items-center">
                  🌱
                </span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs tracking-[0.25em] text-[#e5c158] font-medium uppercase border-t border-[#e5c158]/40 pt-0.5 mt-0.5">
                <span className="h-[1px] w-3 bg-[#e5c158]/60"></span>
                <span>The Wardrobe Spa</span>
                <span className="h-[1px] w-3 bg-[#e5c158]/60"></span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
            <a href="#services" className="hover:text-[#e5c158] transition-colors">
              Services
            </a>
            <a href="#organic" className="hover:text-[#e5c158] transition-colors flex items-center gap-1">
              <span className="text-emerald-400">🌿</span> Organic Care
            </a>
            <a href="#calculator" className="hover:text-[#e5c158] transition-colors">
              Price Estimator
            </a>
            <a href="#locations" className="hover:text-[#e5c158] transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#e5c158]" /> Locations
            </a>
            <a href="#faq" className="hover:text-[#e5c158] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Contact Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#e5c158]/40 text-[#f6e6b4] text-xs font-semibold">
              <Phone className="w-3.5 h-3.5 text-[#e5c158]" />
              <a href="tel:8130940084" className="hover:text-[#e5c158] transition-colors">8130940084</a>
              <span className="text-[#e5c158]/60">/</span>
              <a href="tel:9319411316" className="hover:text-[#e5c158] transition-colors">9319411316</a>
            </div>
            <a
              href="https://wa.me/918130940084?text=Hi%20Nikhaar%20Wardrobe%20Spa,%20I%20would%20like%20to%20schedule%20a%20garment%20pickup."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#e5c158] via-[#d4af37] to-[#b89326] text-[#0e2216] text-xs font-bold shadow-md hover:shadow-[#e5c158]/20 hover:scale-[1.02] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-[#0e2216]" />
              <span>Pickup via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#f6e6b4] p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e2216]/95 backdrop-blur-xl border-b border-[#e5c158]/30 px-6 py-6 transition-all shadow-2xl">
          <div className="flex flex-col gap-4 text-base font-medium text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#e5c158] py-1 border-b border-white/5"
            >
              Services Catalog
            </a>
            <a
              href="#organic"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#e5c158] py-1 border-b border-white/5 flex items-center justify-between"
            >
              <span>Organic Dry Cleaning</span>
              <span className="text-xs bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                Eco-Friendly
              </span>
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#e5c158] py-1 border-b border-white/5"
            >
              Price Calculator
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#e5c158] py-1 border-b border-white/5"
            >
              Store Locations (Faridabad)
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#e5c158] py-1"
            >
              Frequently Asked Questions
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://wa.me/918130940084?text=Hi%20Nikhaar%20Wardrobe%20Spa,%20I%20would%20like%20to%20schedule%20a%20garment%20pickup."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#e5c158] to-[#b89326] text-[#0e2216] font-bold text-sm shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Pickup on WhatsApp</span>
            </a>
            <div className="flex items-center justify-center gap-3 w-full py-2.5 rounded-xl border border-[#e5c158]/50 text-[#f6e6b4] font-semibold text-sm">
              <Phone className="w-4 h-4 text-[#e5c158]" />
              <a href="tel:8130940084" className="hover:text-[#e5c158]">8130940084</a>
              <span className="text-[#e5c158]/60">/</span>
              <a href="tel:9319411316" className="hover:text-[#e5c158]">9319411316</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
