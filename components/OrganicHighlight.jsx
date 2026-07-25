"use client";

import { Leaf, ShieldCheck, HeartHandshake, Sparkles, AlertTriangle, CheckCircle, RefreshCw } from "lucide-react";

export default function OrganicHighlight() {
  return (
    <section id="organic" className="py-20 relative bg-[#0e2216]/90 border-y border-[#e5c158]/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Curved Triangular Badge recreated from Business Card */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="relative inline-block px-10 py-5 rounded-3xl bg-gradient-to-b from-[#1c402b] via-[#142e1f] to-[#0f2418] border-2 border-[#e5c158]/60 shadow-2xl gold-glow">
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">
              <Leaf className="w-4 h-4" /> The Organic Difference
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#f6e6b4]">
              Organic Dry Cleaning
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#e5c158] to-transparent mx-auto mt-2" />
          </div>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light">
            Traditional dry cleaners use harsh synthetic chemicals like Perchloroethylene (PERC) that strip fabric shine, weaken delicate silk fibers, and leave pungent odors. At <strong className="text-[#f6e6b4]">Nikhaar</strong>, we use 100% biodegradable organic solvents.
          </p>
        </div>

        {/* Feature Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Traditional Dry Cleaning Box */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-red-500/20 bg-red-950/10">
            <div className="flex items-center gap-3 mb-6 border-b border-red-500/20 pb-4">
              <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-200">Conventional Dry Cleaning</h3>
                <p className="text-xs text-red-400">Standard Chemical Washing</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>Uses harsh chemical solvents (PERC) causing fabric yellowing & stiff texture.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>Leaves strong chemical smell on garments after cleaning.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>Can dissolve beads, glue, zari work, sequins, and plastic buttons.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>Potentially toxic to sensitive skin and harmful to the environment.</span>
              </li>
            </ul>
          </div>

          {/* Nikhaar Organic Care Box */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#e5c158]/50 bg-gradient-to-b from-[#1a3827]/80 to-[#102418]/90 shadow-xl gold-glow">
            <div className="flex items-center gap-3 mb-6 border-b border-[#e5c158]/30 pb-4">
              <div className="p-2.5 rounded-xl bg-[#e5c158]/20 text-[#e5c158]">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#f6e6b4]">Nikhaar Organic Wardrobe Spa</h3>
                <p className="text-xs text-emerald-400">100% Eco-Botanical Care</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#e5c158] shrink-0 mt-0.5" />
                <span><strong className="text-white">Botanical Solvents:</strong> Zero toxic chemicals, preserving natural fiber softness & lustrous shine.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#e5c158] shrink-0 mt-0.5" />
                <span><strong className="text-white">Fresh & Odorless:</strong> Garments return smelling natural, light, and hyper-clean.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#e5c158] shrink-0 mt-0.5" />
                <span><strong className="text-white">Embellishment Safe:</strong> Protects zardozi embroidery, stones, silk threads, and delicate trims.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#e5c158] shrink-0 mt-0.5" />
                <span><strong className="text-white">Hypoallergenic & Eco-Friendly:</strong> Completely safe for babies, bridal wear, and sensitive skin.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Suitable Apparel Banner */}
        <div className="glass-card p-6 rounded-2xl border border-[#e5c158]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#e5c158]/10 text-[#e5c158] shrink-0">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Ideal Garments for Organic Spa Treatment</h4>
              <p className="text-xs text-slate-300">
                Heavy Silk Sarees, Designer Lehengas, Pashmina Shawls, Tuxedos, Sherwanis, Raw Silk Kurtas & Leather Jackets.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/918130940084?text=Hi%20Nikhaar,%20I%20have%20delicate%20designer%20garments%20for%20organic%20dry%20cleaning."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#e5c158] text-[#0e2216] font-bold text-xs whitespace-nowrap hover:bg-[#f6e6b4] transition-all shadow-md"
          >
            Consult Garment Specialist
          </a>
        </div>

      </div>
    </section>
  );
}
