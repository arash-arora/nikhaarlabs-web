"use client";

import { MessageCircle, Phone, Calendar } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#8A5A10]/30 px-4 py-3 shadow-2xl sm:hidden">
      <div className="flex items-center gap-3">
        <div className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl border border-[#0D2818]/15 bg-[#FAF8F5] text-[#0D2818] text-xs font-bold">
          <Phone className="w-3.5 h-3.5 text-[#8A5A10] shrink-0" />
          <a href="tel:8130940084" className="hover:text-[#8A5A10] active:scale-95 transition-all">8130940084</a>
          <span className="text-[#0D2818]/30">/</span>
          <a href="tel:9319411316" className="hover:text-[#8A5A10] active:scale-95 transition-all">9319411316</a>
        </div>

        <a
          href="https://wa.me/918130940084?text=Hi%20Nikhaar%20Wardrobe%20Spa,%20I%20want%20to%20schedule%20a%20garment%20pickup."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0D2818] text-[#FAF8F5] text-xs font-bold border border-[#8A5A10]/40 shadow-lg active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-[#FAF8F5]" />
          <span>WhatsApp Pickup</span>
        </a>
      </div>
    </div>
  );
}
