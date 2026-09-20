"use client";

import { useState } from "react";
import { Sparkles, Scissors, Shirt, RefreshCw, Feather, Flame, Shield, ArrowUpRight } from "lucide-react";

const servicesData = [
  {
    category: "Premium Care",
    tagline: "Daily & Special Occasion Garment Perfection",
    items: [
      {
        id: "dry-cleaning",
        title: "Dry Cleaning",
        subtitle: "Organic & Eco-Solvent Garment Care",
        icon: Shirt,
        description:
          "Thorough removal of deep oil stains, dust, and perspiration while preserving fabric texture. Tailored process for silk, wool, velvet, chiffon, and embellishments.",
        features: ["100% Non-Toxic Organic Option", "Stain Spotting Treatment", "Garment Hanger Packaging"],
        popular: true,
      },
      {
        id: "steam-ironing",
        title: "Steam Ironing",
        subtitle: "Form-Preserving 3D Steam Finishing",
        icon: Flame,
        description:
          "High-pressure temperature-controlled steam pressing that removes all creases without creating shiny press marks, burning delicate threads, or damaging pleats.",
        features: ["Anti-Shine Technology", "Crease & Pleat Preservation", "Ready-to-Wear Hanger Finish"],
        popular: false,
      },
      {
        id: "laundry",
        title: "Laundry Services",
        subtitle: "Wash, Sanitize & Pristine Fold",
        icon: RefreshCw,
        description:
          "Premium water wash for everyday wear, shirts, trousers, linens, and bedsheets using color-safe, skin-friendly detergents and soft conditioners.",
        features: ["Hypoallergenic Detergents", "Fabric Softener Infusion", "Neat Crisp Folding"],
        popular: false,
      },
    ],
  },
  {
    category: "Restoration",
    tagline: "Master Craftsmanship for Damaged & Faded Apparel",
    items: [
      {
        id: "fabric-dye",
        title: "Fabric Dyeing",
        subtitle: "Color Revival & Custom Tinting",
        icon: Sparkles,
        description:
          "Re-energize faded suits, trousers, or sarees with color-fast organic dyes. Match original shades perfectly or transform garments with rich new tones.",
        features: ["Color-Fast Guarantee", "Original Shade Matching", "Even Shade Distribution"],
        popular: true,
      },
      {
        id: "darning",
        title: "Darning (Rafi Work)",
        subtitle: "Invisible Weave Repair & Mending",
        icon: Scissors,
        description:
          "Traditional invisible mending for tears, burn marks, moth holes, and snagged threads. Our master craftsman uses matching warp and weft threads.",
        features: ["Seamless Invisible Weave", "Hand-Coded Thread Matching", "Pants, Coats & Saree Repairs"],
        popular: true,
      },
      {
        id: "charak",
        title: "Charak (Roll Pressing)",
        subtitle: "Traditional Starching & Glaze Press",
        icon: Feather,
        description:
          "Heritage roll pressing for cotton, silk, and brocade sarees. Imparts pristine crispness, body, and subtle luster to traditional Indian textiles.",
        features: ["Natural Starch Infusion", "Roll Pressing Machine Finish", "Silk Saree Lustre Restoration"],
        popular: false,
      },
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="services" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8A5A10] bg-white px-4 py-1.5 rounded-full border border-[#8A5A10]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#8A5A10]" /> Full Spectrum Garment Care
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0D2818] tracking-tight">
            Our Bespoke Services
          </h2>
          <p className="text-[#3D5245] text-sm sm:text-base font-normal">
            From routine premium maintenance to complex fabric restoration, Nikhaar brings unmatched expertise to every garment in your wardrobe.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === "all"
                ? "bg-[#0D2818] text-[#FAF8F5] shadow-md border border-[#8A5A10]/40"
                : "bg-white text-[#0D2818] border border-[#0D2818]/15 hover:border-[#8A5A10] shadow-sm"
            }`}
          >
            All Services
          </button>
          <button
            onClick={() => setActiveCategory("Premium Care")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === "Premium Care"
                ? "bg-[#0D2818] text-[#FAF8F5] shadow-md border border-[#8A5A10]/40"
                : "bg-white text-[#0D2818] border border-[#0D2818]/15 hover:border-[#8A5A10] shadow-sm"
            }`}
          >
            Premium Care
          </button>
          <button
            onClick={() => setActiveCategory("Restoration")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === "Restoration"
                ? "bg-[#0D2818] text-[#FAF8F5] shadow-md border border-[#8A5A10]/40"
                : "bg-white text-[#0D2818] border border-[#0D2818]/15 hover:border-[#8A5A10] shadow-sm"
            }`}
          >
            Restoration (Dye, Darning, Charak)
          </button>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {servicesData
            .filter(
              (cat) => activeCategory === "all" || cat.category === activeCategory
            )
            .map((catGroup, idx) => (
              <div key={idx} className="space-y-6">
                <div className="border-b border-[#0D2818]/15 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-serif font-bold text-[#0D2818]">
                    {catGroup.category}
                  </h3>
                  <span className="text-xs text-emerald-700 font-bold">
                    {catGroup.tagline}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {catGroup.items.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <div
                        key={item.id}
                        className="bg-white p-6 rounded-2xl flex flex-col justify-between relative group border border-[#8A5A10]/30 shadow-sm hover:border-[#8A5A10] hover:shadow-lg transition-all duration-300"
                      >
                        {item.popular && (
                          <div className="absolute top-4 right-4 bg-[#0D2818] text-[#FAF8F5] border border-[#8A5A10]/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Popular Choice
                          </div>
                        )}

                        <div className="space-y-4">
                          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#8A5A10]/25 text-[#8A5A10] w-fit group-hover:scale-110 transition-transform">
                            <IconComp className="w-6 h-6" />
                          </div>

                          <div>
                            <h4 className="text-xl font-bold text-[#0D2818] group-hover:text-[#8A5A10] transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#8A5A10] font-bold mt-0.5">
                              {item.subtitle}
                            </p>
                          </div>

                          <p className="text-xs text-[#3D5245] leading-relaxed font-normal">
                            {item.description}
                          </p>

                          <ul className="space-y-1.5 pt-2">
                            {item.features.map((feat, fIdx) => (
                              <li key={fIdx} className="text-[11px] text-[#4A5568] flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#8A5A10]"></span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-6 mt-4 border-t border-[#0D2818]/10 flex items-center justify-between">
                          <a
                            href={`https://wa.me/918130940084?text=Hi%20Nikhaar,%20I'm%20interested%20in%20your%20${encodeURIComponent(
                              item.title
                            )}%20service.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-[#0D2818] hover:text-[#8A5A10] flex items-center gap-1 group-hover:translate-x-1 transition-all"
                          >
                            <span>Book {item.title}</span>
                            <ArrowUpRight className="w-4 h-4 text-[#8A5A10]" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
