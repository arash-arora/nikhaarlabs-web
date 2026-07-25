"use client";

import { MessageCircle, Phone, Calendar } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0e2216]/95 backdrop-blur-xl border-t border-[#e5c158]/30 px-4 py-3 shadow-2xl sm:hidden">
      <div className="flex items-center gap-3">
        <div className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl border border-[#e5c158]/50 bg-[#193827] text-[#f6e6b4] text-xs font-bold">
          <Phone className="w-3.5 h-3.5 text-[#e5c158] shrink-0" />
          <a href="tel:8130940084" className="hover:text-[#e5c158] active:scale-95 transition-all">8130940084</a>
          <span className="text-[#e5c158]/60">/</span>
          <a href="tel:9319411316" className="hover:text-[#e5c158] active:scale-95 transition-all">9319411316</a>
        </div>

        <a
          href="https://wa.me/918130940084?text=Hi%20Nikhaar%20Wardrobe%20Spa,%20I%20want%20to%20schedule%20a%20garment%20pickup."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#f6e6b4] via-[#e5c158] to-[#b89326] text-[#0e2216] text-xs font-extrabold shadow-lg active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-[#0e2216]" />
          <span>WhatsApp Pickup</span>
        </a>
      </div>
    </div>
  );
}
