"use client";

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
    <footer className="bg-[#08140c] text-slate-400 pt-16 pb-24 sm:pb-12 border-t border-[#e5c158]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-baseline font-serif text-3xl font-bold tracking-tight">
              <span className="text-[#f6e6b4] text-4xl font-extrabold relative inline-block">
                नि
                <Sparkles className="w-3.5 h-3.5 text-[#e5c158] absolute -top-1 -right-1" />
              </span>
              <span className="text-gold-metallic">khaar</span>
              <span className="ml-1 text-emerald-400 text-xl font-sans inline-flex items-center">
                🌱
              </span>
            </div>
            
            <div className="text-xs tracking-[0.25em] text-[#e5c158] uppercase font-semibold">
              — THE WARDROBE SPA —
            </div>

            <p className="text-xs text-slate-300 font-light leading-relaxed max-w-sm">
              Faridabad's luxury wardrobe spa specializing in 100% organic solvent dry cleaning, form-preserving 3D steam ironing, invisible darning (Rafi), color restoration dyeing, and traditional charak roll pressing.
            </p>

            <div className="flex items-center gap-4 text-xs pt-2">
              <div className="text-[#f6e6b4] font-semibold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#e5c158]" />
                <a href="tel:8130940084" className="hover:text-[#e5c158]">8130940084</a>
                <span className="text-[#e5c158]/60">/</span>
                <a href="tel:9319411316" className="hover:text-[#e5c158]">9319411316</a>
              </div>
              <span>•</span>
              <a
                href="https://instagram.com/nikhaarlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-[#e5c158] flex items-center gap-1"
              >
                <InstagramIcon className="text-[#e5c158]" /> @nikhaarlabs
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-serif font-bold text-[#f6e6b4] uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#organic" className="hover:text-[#e5c158] transition-colors">
                  Organic Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#e5c158] transition-colors">
                  3D Form Steam Ironing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#e5c158] transition-colors">
                  Invisible Darning (Rafi Work)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#e5c158] transition-colors">
                  Fabric Dyeing & Shade Revival
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#e5c158] transition-colors">
                  Charak Roll Pressing
                </a>
              </li>
            </ul>
          </div>

          {/* Locations Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-serif font-bold text-[#f6e6b4] uppercase tracking-wider">
              Faridabad Centers
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#e5c158]" /> Head Office
                </div>
                <div className="text-slate-300">
                  1255, First Floor, Green Field Colony, Faridabad
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#e5c158]" /> Craft Processing Unit
                </div>
                <div className="text-slate-300">
                  254, Basement, Sector 46, Faridabad
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div suppressHydrationWarning className="flex items-center gap-2">
            <span>© {new Date().getFullYear()}</span>
            <span className="ml-1">Nikhaar — The Wardrobe Spa. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted for garment perfection</span>
            <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500 inline" />
            <span>in Faridabad</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
