"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
          ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#0D2818]/10 shadow-sm py-2.5"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Emblem Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative rounded-xl overflow-hidden border border-[#8A5A10]/40 shadow-sm bg-white p-0.5 group-hover:border-[#8A5A10] transition-all">
              <Image
                src="/header-logo.jpg"
                alt="Nikhaar Logo Emblem"
                width={88}
                height={77}
                priority
                className="h-10 sm:h-12 w-auto object-contain rounded-lg transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0D2818] leading-none">
                <span className="text-gold-metallic">Nikhaar</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.24em] text-[#8A5A10] font-bold uppercase mt-0.5">
                The Wardrobe Spa
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#0D2818]">
            <a href="#services" className="hover:text-[#8A5A10] transition-colors">
              Services
            </a>
            <a href="#organic" className="hover:text-[#8A5A10] transition-colors flex items-center gap-1">
              <span className="text-emerald-600">🌿</span> Organic Care
            </a>
            <a href="#instagram" className="hover:text-[#8A5A10] transition-colors flex items-center gap-1">
              <span>Reels & Craft</span>
            </a>
            <a href="#locations" className="hover:text-[#8A5A10] transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#8A5A10]" /> Locations
            </a>
            <a href="#faq" className="hover:text-[#8A5A10] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Contact Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#0D2818]/15 text-[#0D2818] text-xs font-bold bg-white/80 shadow-sm">
              <Phone className="w-3.5 h-3.5 text-[#8A5A10]" />
              <a href="tel:8130940084" className="hover:text-[#8A5A10] transition-colors">8130940084</a>
              <span className="text-[#0D2818]/40">/</span>
              <a href="tel:9319411316" className="hover:text-[#8A5A10] transition-colors">9319411316</a>
            </div>
            <a
              href="https://wa.me/918130940084?text=Hi%20Nikhaar%20Wardrobe%20Spa,%20I%20would%20like%20to%20schedule%20a%20garment%20pickup."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D2818] text-[#FAF8F5] hover:bg-[#143d25] border border-[#8A5A10]/40 text-xs font-bold shadow-md hover:scale-[1.02] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-[#FAF8F5]" />
              <span>Pickup via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#0D2818] p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5]/98 backdrop-blur-xl border-b border-[#0D2818]/10 px-6 py-6 transition-all shadow-xl">
          <div className="flex flex-col gap-4 text-base font-semibold text-[#0D2818]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#8A5A10] py-1 border-b border-[#0D2818]/10"
            >
              Services Catalog
            </a>
            <a
              href="#organic"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#8A5A10] py-1 border-b border-[#0D2818]/10 flex items-center justify-between"
            >
              <span>Organic Dry Cleaning</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-300 font-bold">
                Eco-Friendly
              </span>
            </a>
            <a
              href="#instagram"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#8A5A10] py-1 border-b border-[#0D2818]/10 flex items-center justify-between"
            >
              <span>Reels & Behind the Scenes</span>
              <span className="text-xs bg-[#8A5A10]/15 text-[#8A5A10] px-2.5 py-0.5 rounded-full border border-[#8A5A10]/30 font-bold">
                Watch
              </span>
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#8A5A10] py-1 border-b border-[#0D2818]/10"
            >
              Store Locations (Faridabad)
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#8A5A10] py-1"
            >
              Frequently Asked Questions
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://wa.me/918130940084?text=Hi%20Nikhaar%20Wardrobe%20Spa,%20I%20would%20like%20to%20schedule%20a%20garment%20pickup."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0D2818] text-[#FAF8F5] font-bold text-sm shadow-md border border-[#8A5A10]/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Pickup on WhatsApp</span>
            </a>
            <div className="flex items-center justify-center gap-3 w-full py-2.5 rounded-xl border border-[#0D2818]/20 bg-white text-[#0D2818] font-bold text-sm shadow-sm">
              <Phone className="w-4 h-4 text-[#8A5A10]" />
              <a href="tel:8130940084" className="hover:text-[#8A5A10]">8130940084</a>
              <span className="text-[#0D2818]/40">/</span>
              <a href="tel:9319411316" className="hover:text-[#8A5A10]">9319411316</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
