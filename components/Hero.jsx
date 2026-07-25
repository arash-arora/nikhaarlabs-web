"use client";

import { MessageCircle, Sparkles, ShieldCheck, Truck, Sparkle, ArrowRight, CheckCircle2, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-forest-gradient">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e5c158]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Organic Spa Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#193827]/90 border border-[#e5c158]/40 shadow-lg text-xs font-semibold text-[#f6e6b4]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>100% Organic Solvent Dry Cleaning & Garment Restoration</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.15]">
              Restoring the <span className="text-gold-metallic">Essence & Elegance</span> of Your Fine Garments.
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              Welcome to <strong className="text-[#f6e6b4] font-medium">Nikhaar — The Wardrobe Spa</strong>. 
              We treat your sarees, designer suits, lehengas, and couture to non-toxic botanical care, form-preserving 3D steam pressing, expert darning, and traditional charak.
            </p>

            {/* Key Service Highlights Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl py-2">
              <div className="glass-card p-3 rounded-xl flex items-center gap-2.5 border border-[#e5c158]/20">
                <div className="p-2 rounded-lg bg-[#e5c158]/10 text-[#e5c158]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Organic Cleaning</h4>
                  <p className="text-[10px] text-slate-400">Zero harsh smell</p>
                </div>
              </div>

              <div className="glass-card p-3 rounded-xl flex items-center gap-2.5 border border-[#e5c158]/20">
                <div className="p-2 rounded-lg bg-[#e5c158]/10 text-[#e5c158]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Rafi & Dyeing</h4>
                  <p className="text-[10px] text-slate-400">Master restoration</p>
                </div>
              </div>

              <div className="glass-card p-3 rounded-xl flex items-center gap-2.5 border border-[#e5c158]/20">
                <div className="p-2 rounded-lg bg-[#e5c158]/10 text-[#e5c158]">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Doorstep Pickup</h4>
                  <p className="text-[10px] text-slate-400">Faridabad & NCR</p>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="https://wa.me/918130940084?text=Hi%20Nikhaar%20Wardrobe%20Spa,%20I%20want%20to%20schedule%20a%20garment%20pickup."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-[#f6e6b4] via-[#e5c158] to-[#b89326] text-[#0e2216] font-extrabold text-base shadow-xl hover:shadow-[#e5c158]/30 hover:scale-[1.02] transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-[#0e2216]" />
                <span>Book Pickup via WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="#calculator"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl glass-card text-[#f6e6b4] font-semibold text-base hover:bg-[#193827] transition-all duration-200"
              >
                <span>Price Estimator</span>
              </a>
            </div>

            {/* Direct Phone Bar */}
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5 text-[#f6e6b4]">
                <Phone className="w-3.5 h-3.5 text-[#e5c158]" /> Direct Helpline:{" "}
                <a href="tel:8130940084" className="font-bold hover:text-[#e5c158] hover:underline">8130940084</a>
                <span>/</span>
                <a href="tel:9319411316" className="font-bold hover:text-[#e5c158] hover:underline">9319411316</a>
              </span>
              <span>•</span>
              <span className="text-emerald-400 font-medium">Open 7 Days (9 AM - 8 PM)</span>
            </div>
          </div>

          {/* Right Column: Visual Business Card Replica Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Outer Golden Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#e5c158]/40 via-emerald-500/30 to-[#b89326]/40 rounded-3xl blur-lg opacity-70 animate-pulse-subtle"></div>
              
              {/* Main Card UI imitating the brand business card */}
              <div className="relative glass-card p-7 sm:p-8 rounded-2xl border border-[#e5c158]/40 shadow-2xl flex flex-col space-y-6">
                
                {/* Top Logo Banner */}
                <div className="text-center pb-5 border-b border-[#e5c158]/20">
                  <div className="flex justify-center items-baseline font-serif text-4xl font-bold tracking-tight">
                    <span className="text-[#f6e6b4] font-extrabold relative inline-block">
                      नि
                      <Sparkles className="w-4 h-4 text-[#e5c158] absolute -top-1.5 -right-1" />
                    </span>
                    <span className="text-gold-metallic">khaar</span>
                    <span className="ml-1 text-[#4ade80]">🌿</span>
                  </div>
                  <div className="text-[11px] tracking-[0.3em] text-[#e5c158] uppercase font-semibold mt-1">
                    — THE WARDROBE SPA —
                  </div>
                </div>

                {/* Organic Dry Cleaning Badge Highlight */}
                <div className="relative bg-gradient-to-b from-[#1c402b] to-[#12281b] p-4 rounded-xl border border-[#e5c158]/50 text-center shadow-inner">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e5c158] text-[#0e2216] text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                    Our Signature Process
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#f6e6b4] mt-1">
                    Organic Dry Cleaning
                  </h3>
                  <p className="text-xs text-slate-300 font-light mt-1">
                    Toxin-free, botanical solvent treatment designed for silks, handlooms, designer sarees & bespoke suits.
                  </p>
                </div>

                {/* Services Quick Grid */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1.5">
                    <div className="font-bold text-[#e5c158] uppercase text-[11px] tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Premium Care
                    </div>
                    <ul className="space-y-1 text-slate-300 text-[11px]">
                      <li>• Organic Dry Cleaning</li>
                      <li>• 3D Steam Ironing</li>
                      <li>• Premium Laundry</li>
                    </ul>
                  </div>

                  <div className="space-y-1.5">
                    <div className="font-bold text-[#e5c158] uppercase text-[11px] tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Restoration
                    </div>
                    <ul className="space-y-1 text-slate-300 text-[11px]">
                      <li>• Custom Fabric Dye</li>
                      <li>• Invisible Darning (Rafi)</li>
                      <li>• Charak Roll Press</li>
                    </ul>
                  </div>
                </div>

                {/* Bottom Quick Contact Bar */}
                <div className="pt-4 border-t border-[#e5c158]/20 flex items-center justify-between text-xs">
                  <div className="text-[#f6e6b4] font-medium flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#e5c158]" />
                    <a href="tel:8130940084" className="hover:text-[#e5c158]">8130940084</a>
                    <span>/</span>
                    <a href="tel:9319411316" className="hover:text-[#e5c158]">9319411316</a>
                  </div>
                  <div className="text-[#e5c158] font-semibold flex items-center gap-1">
                    <span>nikhaarlabs.com</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
