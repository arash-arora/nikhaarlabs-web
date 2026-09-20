"use client";

import Image from "next/image";
import { MessageCircle, Sparkles, ShieldCheck, Truck, Sparkle, ArrowRight, CheckCircle2, Phone } from "lucide-react";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-forest-gradient">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8A5A10]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Organic Spa Badge - Active Status */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#8A5A10]/40 shadow-sm text-xs font-bold text-[#0D2818]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Now Serving Faridabad • Active Since 17th August</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#0D2818] leading-[1.15]">
              Restoring the <span className="text-gold-metallic">Essence & Elegance</span> of Your Fine Garments.
            </h1>

            {/* Sub-headline */}
            <p className="text-[#3D5245] text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Welcome to <strong className="text-[#0D2818] font-semibold">Nikhaar — The Wardrobe Spa</strong>. 
              We treat your sarees, designer suits, lehengas, and couture to non-toxic botanical care, form-preserving 3D steam pressing, expert darning, and traditional charak.
            </p>

            {/* Key Service Highlights Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl py-2">
              <div className="glass-card p-3 rounded-xl flex items-center gap-2.5 border border-[#8A5A10]/30 shadow-sm bg-white">
                <div className="p-2 rounded-lg bg-[#8A5A10]/15 text-[#8A5A10]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0D2818]">Organic Cleaning</h4>
                  <p className="text-[10px] text-[#4A5568]">Zero harsh smell</p>
                </div>
              </div>

              <div className="glass-card p-3 rounded-xl flex items-center gap-2.5 border border-[#8A5A10]/30 shadow-sm bg-white">
                <div className="p-2 rounded-lg bg-[#8A5A10]/15 text-[#8A5A10]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0D2818]">Rafi & Dyeing</h4>
                  <p className="text-[10px] text-[#4A5568]">Master restoration</p>
                </div>
              </div>

              <div className="glass-card p-3 rounded-xl flex items-center gap-2.5 border border-[#8A5A10]/30 shadow-sm bg-white">
                <div className="p-2 rounded-lg bg-[#8A5A10]/15 text-[#8A5A10]">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0D2818]">Doorstep Pickup</h4>
                  <p className="text-[10px] text-[#4A5568]">Faridabad & NCR</p>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4 w-full sm:w-auto">
              <a
                href="https://wa.me/918130940084?text=Hi%20Nikhaar%20Wardrobe%20Spa,%20I%20want%20to%20schedule%20a%20garment%20pickup."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#0D2818] hover:bg-[#143d25] text-[#FAF8F5] font-bold text-base shadow-xl border border-[#8A5A10]/40 hover:scale-[1.02] transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-[#FAF8F5]" />
                <span>Book Pickup via WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border border-[#0D2818]/15 text-[#0D2818] font-bold text-base hover:border-[#8A5A10] shadow-sm hover:bg-[#F3EFEA] transition-all duration-200"
              >
                <span>Our Services</span>
              </a>

              <a
                href="#instagram"
                className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-[#8A5A10] text-[#8A5A10] font-bold text-sm bg-white/80 hover:bg-[#8A5A10]/10 transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Watch Reels</span>
              </a>
            </div>

            {/* Direct Phone Bar */}
            <div className="flex items-center gap-4 text-xs text-[#3D5245] pt-2">
              <span className="flex items-center gap-1.5 text-[#0D2818] font-medium">
                <Phone className="w-3.5 h-3.5 text-[#8A5A10]" /> Direct Helpline:{" "}
                <a href="tel:8130940084" className="font-bold hover:text-[#8A5A10] hover:underline">8130940084</a>
                <span>/</span>
                <a href="tel:9319411316" className="font-bold hover:text-[#8A5A10] hover:underline">9319411316</a>
              </span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">Open 7 Days (9 AM - 8 PM)</span>
            </div>
          </div>

          {/* Right Column: Authentic Facility & Machinery Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Outer Golden Glow Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#8A5A10]/30 via-emerald-600/20 to-[#8A5A10]/30 rounded-3xl blur-xl opacity-70"></div>
              
              {/* Main Luxury Frame */}
              <div className="relative bg-white p-4 sm:p-5 rounded-3xl border border-[#8A5A10]/40 shadow-2xl flex flex-col space-y-4">
                
                {/* Official Logo Banner - Header Logo Only */}
                <div className="relative rounded-2xl overflow-hidden border border-[#8A5A10]/30 bg-[#FAF8F5] py-3 px-4 shadow-sm flex items-center justify-center gap-3.5">
                  <div className="relative rounded-xl overflow-hidden border border-[#8A5A10]/40 shadow-sm bg-white p-0.5 shrink-0">
                    <Image
                      src="/header-logo.jpg"
                      alt="Nikhaar Logo Emblem"
                      width={88}
                      height={77}
                      priority
                      className="h-12 sm:h-14 w-auto object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#0D2818] leading-none">
                      <span className="text-gold-metallic">Nikhaar</span>
                    </span>
                    <span className="text-[10px] sm:text-[11px] tracking-[0.26em] text-[#8A5A10] font-bold uppercase mt-1">
                      The Wardrobe Spa
                    </span>
                  </div>
                </div>

                {/* Real Facility Image (XCEL Vacuum Steam Machine) - Fitted to box */}
                <div className="relative rounded-2xl overflow-hidden border border-[#8A5A10]/30 group shadow-md bg-[#09150d] flex flex-col">
                  <div className="relative w-full h-80 sm:h-96 flex items-center justify-center p-2 bg-[#09150d]">
                    <Image
                      src="/facility-steam-machine.jpg"
                      alt="Nikhaar Faridabad Workshop - Industrial XCEL Steam Finishing Workstation"
                      width={768}
                      height={1024}
                      priority
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Top Floating Badge */}
                    <div className="absolute top-3 left-3 bg-[#0D2818]/90 backdrop-blur-md border border-[#8A5A10]/60 text-[#FAF8F5] text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 z-10">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Faridabad Workshop Live</span>
                    </div>
                  </div>

                  {/* Bottom Image Caption below the image so machine is completely visible */}
                  <div className="p-3 bg-[#FAF8F5] border-t border-[#8A5A10]/20 text-xs">
                    <div className="font-bold text-[#0D2818] flex items-center justify-between">
                      <span>XCEL 3D Vacuum Steam Table</span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold uppercase">In-House</span>
                    </div>
                    <p className="text-[11px] text-[#3D5245] font-normal mt-0.5">
                      Temperature-controlled form preservation without surface shine or scorching.
                    </p>
                  </div>
                </div>

                {/* Quick Quality Promises Strip */}
                <div className="grid grid-cols-3 gap-2 text-center pt-1 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#0D2818]/10 shadow-sm">
                    <span className="block text-[#8A5A10] font-bold">100%</span>
                    <span className="text-[#3D5245] text-[10px] font-medium">Organic Solvents</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#0D2818]/10 shadow-sm">
                    <span className="block text-[#8A5A10] font-bold">Master</span>
                    <span className="text-[#3D5245] text-[10px] font-medium">Hand Darning</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#0D2818]/10 shadow-sm">
                    <span className="block text-[#8A5A10] font-bold">Doorstep</span>
                    <span className="text-[#3D5245] text-[10px] font-medium">Pickup & Drop</span>
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
