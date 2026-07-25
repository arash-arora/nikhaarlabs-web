"use client";

import Image from "next/image";
import { Phone, MapPin, Sparkles, Globe, Building, Warehouse, Navigation } from "lucide-react";

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function ComingSoon() {
  return (
    <main suppressHydrationWarning className="min-h-screen bg-forest-gradient flex flex-col justify-between relative overflow-hidden text-slate-100 selection:bg-[#e5c158] selection:text-[#0e2216] px-4 py-8 sm:p-12">
      
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e5c158]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Bar / Status */}
      <header className="max-w-6xl mx-auto w-full flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#193827]/90 border border-[#e5c158]/40 shadow-lg text-xs font-semibold text-[#f6e6b4]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Opening Soon in Faridabad</span>
        </div>

        <a
          href="https://wa.me/918130940084?text=Hi%20Nikhaar%20Wardrobe%20Spa,%20I%20want%20to%20inquire%20about%20pickup."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-[#e5c158]/40 text-[#f6e6b4] text-xs font-semibold hover:bg-[#e5c158]/10 transition-all"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#e5c158]" />
          <span>Connect with us</span>
        </a>
      </header>

      {/* Hero / Main Content */}
      <section className="max-w-4xl mx-auto w-full text-center space-y-8 my-auto py-12 relative z-10">
        
        {/* Brand Logo Presentation */}
        <div className="relative inline-block group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#e5c158]/40 via-emerald-500/20 to-[#b89326]/40 rounded-3xl blur-xl opacity-70 animate-pulse-subtle"></div>
          
          <div className="relative glass-card p-4 sm:p-6 rounded-3xl border border-[#e5c158]/50 shadow-2xl gold-glow bg-[#142e1f]/80 max-w-md sm:max-w-xl mx-auto">
            <Image
              src="/logo.png"
              alt="Nikhaar - The Wardrobe Spa Logo"
              width={1024}
              height={583}
              priority
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Coming Soon Headline */}
        <div className="space-y-6 max-w-2xl mx-auto">
          {/* Made Coming Soon Bigger & Bolder */}
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#193827]/90 border border-[#e5c158]/60 shadow-xl gold-glow">
            <span className="h-[1px] w-6 bg-[#e5c158]"></span>
            <span className="text-lg sm:text-2xl font-extrabold tracking-[0.35em] text-gold-metallic uppercase font-serif">
              Coming Soon
            </span>
            <span className="h-[1px] w-6 bg-[#e5c158]"></span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Crafting a Premier <span className="text-gold-metallic">Wardrobe Spa</span> Experience.
          </h1>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            We are preparing our bespoke organic dry cleaning, steam press, laundry, invisible darning (Rafu work), and fabric restoration laboratory for you.
          </p>
        </div>

        {/* Quick Contact & Pickup CTA */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/918130940084?text=Hi%20Nikhaar%20Wardrobe%20Spa,%20I%20want%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#e5c158] to-[#b89326] text-[#0e2216] text-sm font-bold shadow-lg hover:scale-[1.02] transition-all"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#0e2216]" />
            <span>Connect with us</span>
          </a>

          <div className="flex items-center gap-2 px-6 py-4 rounded-xl border border-[#e5c158]/40 text-[#f6e6b4] text-sm font-semibold">
            <Phone className="w-4 h-4 text-[#e5c158]" />
            <a href="tel:8130940084" className="hover:text-[#e5c158]">8130940084</a>
            <span className="text-[#e5c158]/60">/</span>
            <a href="tel:9319411316" className="hover:text-[#e5c158]">9319411316</a>
          </div>
        </div>

      </section>

      {/* Luxury Redesigned Footer Section */}
      <footer className="max-w-6xl mx-auto w-full pt-10 z-10">
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#e5c158]/30 bg-gradient-to-b from-[#163523]/80 via-[#10271a]/90 to-[#0a1710]/95 backdrop-blur-xl shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            
            {/* Head Office Card */}
            <div className="p-4 rounded-2xl bg-[#142e1f]/60 border border-[#e5c158]/20 flex flex-col justify-between space-y-3 hover:border-[#e5c158]/50 transition-all">
              <div className="space-y-2">
                <div className="text-[#f6e6b4] font-bold uppercase tracking-wider flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#e5c158]/10 text-[#e5c158]">
                    <Building className="w-4 h-4" />
                  </div>
                  <span>Head Office</span>
                </div>
                <p className="text-slate-300 font-light leading-relaxed">
                  B-1255, First Floor, Green Field Colony, Faridabad
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=B1255+Green+Field+Colony+Faridabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#e5c158] hover:text-[#f6e6b4] transition-colors pt-2 border-t border-white/5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions on Map</span>
              </a>
            </div>

            {/* Unit Address Card */}
            <div className="p-4 rounded-2xl bg-[#142e1f]/60 border border-[#e5c158]/20 flex flex-col justify-between space-y-3 hover:border-[#e5c158]/50 transition-all">
              <div className="space-y-2">
                <div className="text-[#f6e6b4] font-bold uppercase tracking-wider flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#e5c158]/10 text-[#e5c158]">
                    <Warehouse className="w-4 h-4" />
                  </div>
                  <span>Unit</span>
                </div>
                <p className="text-slate-300 font-light leading-relaxed">
                  254, Basement, Sector 46, Faridabad
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Sector+46+Faridabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#e5c158] hover:text-[#f6e6b4] transition-colors pt-2 border-t border-white/5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions on Map</span>
              </a>
            </div>

            {/* Connect & Handles */}
            <div className="p-4 rounded-2xl bg-[#142e1f]/60 border border-[#e5c158]/20 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="text-[#f6e6b4] font-bold uppercase tracking-wider flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#e5c158]/10 text-[#e5c158]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>Social Media</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <a
                    href="https://www.facebook.com/p/Nikhaar-Labs-61592004521193/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-200 hover:text-[#e5c158] font-medium transition-colors"
                  >
                    <FacebookIcon className="text-[#e5c158]" />
                    <span>Nikhaar Labs</span>
                  </a>

                  <a
                    href="https://instagram.com/nikhaarlabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-200 hover:text-[#e5c158] font-medium transition-colors"
                  >
                    <InstagramIcon className="text-[#e5c158]" />
                    <span>@nikhaarlabs</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400">
                Direct Support: <a href="tel:8130940084" className="text-[#f6e6b4] font-semibold hover:underline">8130940084</a> / <a href="tel:9319411316" className="text-[#f6e6b4] font-semibold hover:underline">9319411316</a>
              </div>
            </div>

          </div>

          {/* Golden Accent Line & Copyright Notice */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#e5c158]/40 to-transparent my-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 text-center sm:text-left">
            <div suppressHydrationWarning className="flex items-center gap-2 flex-wrap">
              <span>© {new Date().getFullYear()}</span>
              <span className="inline-block ml-1"></span>
              <strong className="text-[#f6e6b4]">Nikhaar — The Wardrobe Spa</strong>. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#e5c158]" />
              <span>Garment Restoration & Organic Care in Faridabad</span>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}
