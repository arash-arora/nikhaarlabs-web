"use client";

import { MapPin, Phone, Globe, Clock, Navigation, MessageCircle, Building, Warehouse } from "lucide-react";

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
    <section id="locations" className="py-24 bg-forest-gradient relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e5c158] bg-[#193827] px-4 py-1.5 rounded-full border border-[#e5c158]/30">
            <MapPin className="w-3.5 h-3.5 text-[#e5c158]" /> Visit or Schedule Pickup
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Our Faridabad Centers
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Conveniently located in Faridabad with complete processing capabilities and quick doorstep service.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Location 1: Head Office */}
          <div className="glass-card p-8 rounded-2xl border border-[#e5c158]/40 space-y-6 flex flex-col justify-between hover:border-[#e5c158] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#e5c158]/10 text-[#e5c158] flex items-center gap-2">
                  <Building className="w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-wider">Head Office</span>
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                  Customer Reception
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-[#f6e6b4]">
                  Green Field Colony Center
                </h3>
                <p className="text-sm text-slate-300 font-medium mt-1">
                  1255, First Floor, Green Field Colony, Faridabad
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#e5c158]" />
                  <span>Mon – Sun: 9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#e5c158]" />
                  <a href="tel:8130940084" className="hover:text-[#e5c158]">8130940084</a>
                  <span className="text-[#e5c158]/60">/</span>
                  <a href="tel:9319411316" className="hover:text-[#e5c158]">9319411316</a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#e5c158]/20 flex flex-wrap items-center gap-3">
              <a
                href="https://maps.google.com/?q=1255+Green+Field+Colony+Faridabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#e5c158] text-[#0e2216] font-bold text-xs hover:bg-[#f6e6b4] transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
              <a
                href="https://wa.me/918130940084?text=Hi%20Nikhaar,%20I'm%20visiting%20the%20Green%20Field%20Colony%20office."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-[#f6e6b4] font-semibold text-xs hover:bg-[#193827] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#e5c158]" />
                <span>WhatsApp Office</span>
              </a>
            </div>
          </div>

          {/* Location 2: Processing Unit */}
          <div className="glass-card p-8 rounded-2xl border border-[#e5c158]/40 space-y-6 flex flex-col justify-between hover:border-[#e5c158] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#e5c158]/10 text-[#e5c158] flex items-center gap-2">
                  <Warehouse className="w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-wider">Processing Unit</span>
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                  Restoration Lab
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-[#f6e6b4]">
                  Sector 46 Unit
                </h3>
                <p className="text-sm text-slate-300 font-medium mt-1">
                  254, Basement, Sector 46, Faridabad
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#e5c158]" />
                  <span>Mon – Sun: 8:00 AM – 8:30 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#e5c158]" />
                  <a href="tel:8130940084" className="hover:text-[#e5c158]">8130940084</a>
                  <span className="text-[#e5c158]/60">/</span>
                  <a href="tel:9319411316" className="hover:text-[#e5c158]">9319411316</a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#e5c158]/20 flex flex-wrap items-center gap-3">
              <a
                href="https://maps.google.com/?q=Sector+46+Faridabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#e5c158] text-[#0e2216] font-bold text-xs hover:bg-[#f6e6b4] transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
              <a
                href="https://wa.me/918130940084?text=Hi%20Nikhaar,%20I%20want%20to%20drop%20garments%20at%20Sector%2046%20unit."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-[#f6e6b4] font-semibold text-xs hover:bg-[#193827] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#e5c158]" />
                <span>WhatsApp Unit</span>
              </a>
            </div>
          </div>

        </div>

        {/* Digital Connect Strip */}
        <div className="glass-card p-6 rounded-2xl border border-[#e5c158]/30 flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#e5c158]/10 text-[#e5c158]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Official Website</div>
              <a href="https://nikhaarlabs.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-[#e5c158]">
                nikhaarlabs.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#e5c158]/10 text-[#e5c158]">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Instagram Handle</div>
              <a href="https://instagram.com/nikhaarlabs" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-[#e5c158]">
                @nikhaarlabs
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#e5c158]/10 text-[#e5c158]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Direct Contact</div>
              <div className="text-sm font-bold text-[#f6e6b4] flex items-center gap-1">
                <a href="tel:8130940084" className="hover:text-[#e5c158]">8130940084</a>
                <span className="text-[#e5c158]/60">/</span>
                <a href="tel:9319411316" className="hover:text-[#e5c158]">9319411316</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
