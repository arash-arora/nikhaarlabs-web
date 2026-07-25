"use client";

import { useState } from "react";
import { Calculator as CalcIcon, Plus, Minus, MessageCircle, Sparkles, ShoppingBag, CheckCircle2, RotateCcw } from "lucide-react";

const garmentItems = [
  { id: "saree", name: "Heavy Silk Saree / Lehenga", basePrice: 450, category: "Ethnic & Bridal" },
  { id: "suit", name: "Designer 2/3 Piece Suit / Blazer", basePrice: 490, category: "Formal Wear" },
  { id: "sherwani", name: "Silk Kurta / Sherwani", basePrice: 380, category: "Ethnic & Bridal" },
  { id: "coat", name: "Woolen Coat / Overcoat / Pashmina", basePrice: 420, category: "Winterwear" },
  { id: "gown", name: "Evening Gown / Heavy Dress", basePrice: 390, category: "Occasionwear" },
  { id: "shirt", name: "Shirt / Trouser (Organic Dry Clean)", basePrice: 150, category: "Daily Luxury" },
  { id: "ironing", name: "3D Form Steam Ironing Only", basePrice: 80, category: "Pressing Only" },
  { id: "darning", name: "Invisible Darning (Rafi Work)", basePrice: 180, category: "Restoration" },
  { id: "dyeing", name: "Fabric Dyeing (Color Revival)", basePrice: 350, category: "Restoration" },
  { id: "charak", name: "Charak (Roll Pressing - Sarees)", basePrice: 200, category: "Restoration" },
];

export default function Calculator() {
  const [quantities, setQuantities] = useState(
    garmentItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const updateQuantity = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const resetAll = () => {
    setQuantities(garmentItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {}));
  };

  const selectedGarments = garmentItems.filter((item) => quantities[item.id] > 0);

  const subtotal = selectedGarments.reduce(
    (sum, item) => sum + item.basePrice * quantities[item.id],
    0
  );

  const totalItemsCount = selectedGarments.reduce(
    (count, item) => count + quantities[item.id],
    0
  );

  // Doorstep pickup free above 500
  const isPickupFree = subtotal >= 500 || totalItemsCount === 0;

  // Build custom WhatsApp Message text
  const generateWhatsAppMessage = () => {
    let msg = `Hi Nikhaar Wardrobe Spa! I would like to schedule a pickup for the following items:\n\n`;
    selectedGarments.forEach((item) => {
      msg += `• ${item.name} x ${quantities[item.id]} = ₹${item.basePrice * quantities[item.id]}\n`;
    });
    msg += `\nTotal Estimated Amount: ₹${subtotal}\n`;
    if (isPickupFree && subtotal > 0) {
      msg += `Pickup Status: FREE Doorstep Pickup\n`;
    }
    msg += `\nPlease confirm pickup timing and location in Faridabad.`;
    return encodeURIComponent(msg);
  };

  return (
    <section id="calculator" className="py-24 bg-[#0c1d12] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e5c158]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e5c158] bg-[#193827] px-4 py-1.5 rounded-full border border-[#e5c158]/30">
            <CalcIcon className="w-3.5 h-3.5 text-[#e5c158]" /> Transparent Estimate
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Wardrobe Spa Price Calculator
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Select your garments to calculate estimated service costs and instantly send your order details to WhatsApp for free doorstep pickup.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Garment Selector (Left 7 Cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-[#e5c158]/30 space-y-6">
            <div className="flex items-center justify-between border-b border-[#e5c158]/20 pb-4">
              <h3 className="text-lg font-bold text-[#f6e6b4] flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#e5c158]" /> Select Garments & Services
              </h3>
              {totalItemsCount > 0 && (
                <button
                  onClick={resetAll}
                  className="text-xs text-slate-400 hover:text-red-400 flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Clear All
                </button>
              )}
            </div>

            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {garmentItems.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
                    quantities[item.id] > 0
                      ? "bg-[#1c402b]/90 border-[#e5c158]/60 shadow-md"
                      : "bg-[#142e1f]/40 border-white/5 hover:border-[#e5c158]/20"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold text-white">{item.name}</div>
                    <div className="text-xs text-[#e5c158] font-medium mt-0.5">
                      Starting at ₹{item.basePrice} <span className="text-[10px] text-slate-400">/ item</span>
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={quantities[item.id] === 0}
                      className="w-8 h-8 rounded-lg bg-black/40 border border-white/10 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#e5c158]/20 flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-6 text-center font-bold text-white text-sm">
                      {quantities[item.id]}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-lg bg-[#e5c158] text-[#0e2216] font-bold hover:bg-[#f6e6b4] flex items-center justify-center shadow-md transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary & Order Actions (Right 5 Cols) */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border border-[#e5c158]/40 bg-gradient-to-b from-[#1a3827] to-[#102418] sticky top-28 space-y-6 gold-glow">
            
            <div className="border-b border-[#e5c158]/20 pb-4">
              <h3 className="text-xl font-serif font-bold text-[#f6e6b4]">Order Summary</h3>
              <p className="text-xs text-slate-300 mt-1">
                {totalItemsCount} {totalItemsCount === 1 ? "garment" : "garments"} selected
              </p>
            </div>

            {/* Selected Items List */}
            {selectedGarments.length === 0 ? (
              <div className="py-8 text-center text-slate-400 space-y-2">
                <ShoppingBag className="w-10 h-10 mx-auto text-slate-600" />
                <p className="text-xs">No garments selected yet.</p>
                <p className="text-[11px] text-slate-500">Tap + next to items on the left to build your pickup request.</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {selectedGarments.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                    <span className="text-slate-200">
                      {item.name} <strong className="text-[#e5c158]">x{quantities[item.id]}</strong>
                    </span>
                    <span className="font-semibold text-white">
                      ₹{item.basePrice * quantities[item.id]}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Subtotal & Doorstep Info */}
            <div className="pt-4 border-t border-[#e5c158]/20 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Estimated Total:</span>
                <span className="text-2xl font-serif font-bold text-gold-metallic">
                  ₹{subtotal}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#0e2216]/80 border border-[#e5c158]/20 text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Free Doorstep Pickup & Delivery</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Applicable across Faridabad (Green Field Colony, Sector 46 & nearby areas).
                </p>
              </div>
            </div>

            {/* WhatsApp Booking Trigger */}
            <a
              href={
                selectedGarments.length > 0
                  ? `https://wa.me/918130940084?text=${generateWhatsAppMessage()}`
                  : "https://wa.me/918130940084?text=Hi%20Nikhaar,%20I%20want%20to%20inquire%20about%20dry%20cleaning%20prices."
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-[#f6e6b4] via-[#e5c158] to-[#b89326] text-[#0e2216] font-extrabold text-sm shadow-xl hover:shadow-[#e5c158]/30 hover:scale-[1.02] transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-[#0e2216]" />
              <span>Book Order on WhatsApp</span>
            </a>

            <p className="text-[11px] text-center text-slate-400">
              ⚡ Instant response from our pickup coordinator within 15 minutes.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
