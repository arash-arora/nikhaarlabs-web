"use client";

import Image from "next/image";
import { Sparkles, Phone, Globe, MapPin, Heart } from "lucide-react";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#EFEAE2] text-[#3D5245] pt-16 pb-24 sm:pb-12 border-t border-[#8A5A10]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#0D2818]/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-flex items-center gap-3 group">
              <div className="relative rounded-xl overflow-hidden border border-[#8A5A10]/40 shadow-md bg-white p-0.5 group-hover:border-[#8A5A10] transition-all">
                <Image
                  src="/header-logo.jpg"
                  alt="Nikhaar Logo Emblem"
                  width={88}
                  height={77}
                  className="h-12 w-auto object-contain rounded-lg transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#0D2818] leading-none">
                  <span className="text-gold-metallic">Nikhaar</span>
                </span>
                <span className="text-[10px] tracking-[0.24em] text-[#8A5A10] font-bold uppercase mt-0.5">
                  The Wardrobe Spa
                </span>
              </div>
            </a>

            <p className="text-xs text-[#3D5245] font-normal leading-relaxed max-w-sm">
              Faridabad's luxury wardrobe spa specializing in 100% organic solvent dry cleaning, form-preserving 3D steam ironing, invisible darning (Rafi), color restoration dyeing, and traditional charak roll pressing.
            </p>

            <div className="flex items-center gap-4 text-xs pt-2">
              <div className="text-[#0D2818] font-bold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#8A5A10]" />
                <a href="tel:8130940084" className="hover:text-[#8A5A10] transition-colors">8130940084</a>
                <span className="text-[#8A5A10]/60">/</span>
                <a href="tel:9319411316" className="hover:text-[#8A5A10] transition-colors">9319411316</a>
              </div>
              <span>•</span>
              <a
                href="https://instagram.com/nikhaarlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D2818] hover:text-[#8A5A10] font-semibold flex items-center gap-1.5 transition-colors"
              >
                <InstagramIcon className="text-[#8A5A10]" /> @nikhaarlabs
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-serif font-bold text-[#0D2818] uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#organic" className="text-[#3D5245] hover:text-[#8A5A10] transition-colors">
                  Organic Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#3D5245] hover:text-[#8A5A10] transition-colors">
                  3D Form Steam Ironing
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#3D5245] hover:text-[#8A5A10] transition-colors">
                  Invisible Darning (Rafi Work)
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#3D5245] hover:text-[#8A5A10] transition-colors">
                  Fabric Dyeing & Shade Revival
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#3D5245] hover:text-[#8A5A10] transition-colors">
                  Charak Roll Pressing
                </a>
              </li>
              <li>
                <a href="#instagram" className="text-[#8A5A10] hover:underline font-bold transition-colors">
                  Watch Reels & Craft Footage
                </a>
              </li>
            </ul>
          </div>

          {/* Locations Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-serif font-bold text-[#0D2818] uppercase tracking-wider">
              Faridabad Centers
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-white border border-[#8A5A10]/20 shadow-sm space-y-1">
                <div className="font-bold text-[#0D2818] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8A5A10]" /> Head Office
                </div>
                <div className="text-[#3D5245]">
                  1255, First Floor, Green Field Colony, Faridabad
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#8A5A10]/20 shadow-sm space-y-1">
                <div className="font-bold text-[#0D2818] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8A5A10]" /> Craft Processing Unit
                </div>
                <div className="text-[#3D5245]">
                  254, Basement, Sector 46, Faridabad
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#8A5A10]/20 shadow-sm space-y-1">
                <div className="font-bold text-[#0D2818] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8A5A10]" /> Huda Market Store
                </div>
                <div className="text-[#3D5245]">
                  50, Huda Market, Sector 46, Faridabad
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#3D5245]/80 gap-4">
          <div suppressHydrationWarning className="flex items-center gap-2">
            <span>© {new Date().getFullYear()}</span>
            <span className="ml-1">Nikhaar — The Wardrobe Spa. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted for garment perfection</span>
            <Heart className="w-3 h-3 text-[#8A5A10] fill-[#8A5A10] inline" />
            <span>in Faridabad</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
