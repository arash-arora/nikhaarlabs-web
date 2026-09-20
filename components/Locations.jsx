"use client";

import { MapPin, Phone, Globe, Clock, Navigation, MessageCircle, Building, Warehouse, Store } from "lucide-react";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8A5A10] bg-white px-4 py-1.5 rounded-full border border-[#8A5A10]/30 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#8A5A10]" /> 3 Convenient Centers in Faridabad
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0D2818] tracking-tight">
            Our Faridabad Centers
          </h2>
          <p className="text-[#3D5245] text-sm sm:text-base font-normal">
            Visit our reception, processing lab, or retail store, or schedule quick doorstep pickup across Faridabad.
          </p>
        </div>

        {/* Location Cards - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Location 1: Head Office */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#8A5A10]/35 shadow-sm space-y-6 flex flex-col justify-between hover:border-[#8A5A10] hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#8A5A10]/30 text-[#8A5A10] flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Head Office</span>
                </div>
                <span className="text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-300 font-bold">
                  Reception
                </span>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-[#0D2818]">
                  Green Field Colony Center
                </h3>
                <p className="text-xs sm:text-sm text-[#3D5245] font-medium mt-1">
                  1255, First Floor, Green Field Colony, Faridabad
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#4A5568] pt-2 border-t border-[#0D2818]/10">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#8A5A10]" />
                  <span>Mon – Sun: 9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#8A5A10]" />
                  <a href="tel:8130940084" className="hover:text-[#8A5A10] font-semibold text-[#0D2818]">8130940084</a>
                  <span className="text-[#0D2818]/30">/</span>
                  <a href="tel:9319411316" className="hover:text-[#8A5A10] font-semibold text-[#0D2818]">9319411316</a>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#0D2818]/10 flex flex-wrap items-center gap-2.5">
              <a
                href="https://maps.google.com/?q=1255+Green+Field+Colony+Faridabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0D2818] hover:bg-[#143d25] border border-[#8A5A10]/40 text-[#FAF8F5] font-bold text-xs transition-all shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-[#8A5A10]" />
                <span>Directions</span>
              </a>
              <a
                href="https://wa.me/918130940084?text=Hi%20Nikhaar,%20I'm%20visiting%20the%20Green%20Field%20Colony%20office."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#0D2818]/15 hover:border-[#8A5A10] text-[#0D2818] font-bold text-xs shadow-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#8A5A10]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Location 2: Processing Unit */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#8A5A10]/35 shadow-sm space-y-6 flex flex-col justify-between hover:border-[#8A5A10] hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#8A5A10]/30 text-[#8A5A10] flex items-center gap-2">
                  <Warehouse className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Processing Unit</span>
                </div>
                <span className="text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-300 font-bold">
                  Workshop
                </span>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-[#0D2818]">
                  Sector 46 Unit
                </h3>
                <p className="text-xs sm:text-sm text-[#3D5245] font-medium mt-1">
                  254, Basement, Sector 46, Faridabad
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#4A5568] pt-2 border-t border-[#0D2818]/10">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#8A5A10]" />
                  <span>Mon – Sun: 8:00 AM – 8:30 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#8A5A10]" />
                  <a href="tel:8130940084" className="hover:text-[#8A5A10] font-semibold text-[#0D2818]">8130940084</a>
                  <span className="text-[#0D2818]/30">/</span>
                  <a href="tel:9319411316" className="hover:text-[#8A5A10] font-semibold text-[#0D2818]">9319411316</a>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#0D2818]/10 flex flex-wrap items-center gap-2.5">
              <a
                href="https://maps.google.com/?q=254+Basement+Sector+46+Faridabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0D2818] hover:bg-[#143d25] border border-[#8A5A10]/40 text-[#FAF8F5] font-bold text-xs transition-all shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-[#8A5A10]" />
                <span>Directions</span>
              </a>
              <a
                href="https://wa.me/918130940084?text=Hi%20Nikhaar,%20I%20want%20to%20drop%20garments%20at%20Sector%2046%20unit."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#0D2818]/15 hover:border-[#8A5A10] text-[#0D2818] font-bold text-xs shadow-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#8A5A10]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Location 3: Huda Market Retail Store */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#8A5A10]/35 shadow-sm space-y-6 flex flex-col justify-between hover:border-[#8A5A10] hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#8A5A10]/30 text-[#8A5A10] flex items-center gap-2">
                  <Store className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Huda Market Store</span>
                </div>
                <span className="text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-300 font-bold">
                  Drop & Pickup
                </span>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-[#0D2818]">
                  Sector 46 Huda Market
                </h3>
                <p className="text-xs sm:text-sm text-[#3D5245] font-medium mt-1">
                  50, Huda Market Sector 46 Faridabad
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#4A5568] pt-2 border-t border-[#0D2818]/10">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#8A5A10]" />
                  <span>Mon – Sun: 9:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#8A5A10]" />
                  <a href="tel:8130940084" className="hover:text-[#8A5A10] font-semibold text-[#0D2818]">8130940084</a>
                  <span className="text-[#0D2818]/30">/</span>
                  <a href="tel:9319411316" className="hover:text-[#8A5A10] font-semibold text-[#0D2818]">9319411316</a>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#0D2818]/10 flex flex-wrap items-center gap-2.5">
              <a
                href="https://maps.google.com/?q=50+Huda+Market+Sector+46+Faridabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0D2818] hover:bg-[#143d25] border border-[#8A5A10]/40 text-[#FAF8F5] font-bold text-xs transition-all shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-[#8A5A10]" />
                <span>Directions</span>
              </a>
              <a
                href="https://wa.me/918130940084?text=Hi%20Nikhaar,%20I'm%20visiting%20the%2050%20Huda%20Market%20Sector%2046%20store."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#0D2818]/15 hover:border-[#8A5A10] text-[#0D2818] font-bold text-xs shadow-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#8A5A10]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Digital Connect Strip */}
        <div className="bg-white p-6 rounded-2xl border border-[#8A5A10]/30 shadow-sm flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#8A5A10]/25 text-[#8A5A10]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#4A5568]">Official Website</div>
              <a href="https://nikhaarlabs.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#0D2818] hover:text-[#8A5A10]">
                nikhaarlabs.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#8A5A10]/25 text-[#8A5A10]">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#4A5568]">Instagram Handle</div>
              <a href="https://instagram.com/nikhaarlabs" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#0D2818] hover:text-[#8A5A10]">
                @nikhaarlabs
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#8A5A10]/25 text-[#8A5A10]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#4A5568]">Direct Contact</div>
              <div className="text-sm font-bold text-[#0D2818] flex items-center gap-1">
                <a href="tel:8130940084" className="hover:text-[#8A5A10]">8130940084</a>
                <span className="text-[#0D2818]/30">/</span>
                <a href="tel:9319411316" className="hover:text-[#8A5A10]">9319411316</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
