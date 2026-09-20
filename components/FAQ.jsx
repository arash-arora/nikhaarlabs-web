"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

const faqList = [
  {
    q: "What makes Nikhaar's Organic Dry Cleaning different from regular dry cleaning?",
    a: "Unlike traditional dry cleaners who use harsh petroleum-based chemicals (like Perchloroethylene), Nikhaar uses 100% biodegradable organic botanical solvents. Our process preserves natural fabric luster, leaves zero toxic odor, protects delicate embellishments, and is completely hypoallergenic for sensitive skin.",
  },
  {
    q: "How does the Doorstep Pickup & Delivery service work in Faridabad?",
    a: "Simply tap 'Book Pickup via WhatsApp' or call 8130940084 / 9319411316. Our rider will visit your address (in Green Field Colony, Sector 46, or anywhere in Faridabad), count and tag your garments, provide an instant physical/digital receipt, and deliver your freshly processed apparel back to your doorstep.",
  },
  {
    q: "What is Darning (Rafi Work) and can you repair tears or moth holes?",
    a: "Darning (Rafi work) is our specialized hand-weaving restoration technique. We extract exact matching warp and weft threads from hidden seams of your garment to invisibly mend tears, cigarette burns, moth holes, or accidental cuts in suits, sarees, and coats.",
  },
  {
    q: "What is Charak processing?",
    a: "Charak is traditional roll-pressing and starching for heritage cotton and silk sarees. It restores natural body, crispness, and a soft brilliant sheen without causing heat damage or artificial shine.",
  },
  {
    q: "How long does standard processing take?",
    a: "Standard Organic Dry Cleaning & Steam Pressing takes 48 to 72 hours. Express 24-hour processing is available upon request. Detailed fabric dyeing or complex darning restoration may take 3-5 days for precision hand craftsmanship.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#F5F1EA] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8A5A10] bg-white px-4 py-1.5 rounded-full border border-[#8A5A10]/30 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#8A5A10]" /> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0D2818] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#3D5245] text-sm sm:text-base font-normal">
            Everything you need to know about our organic garment care, pickup service, and fabric restoration process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#8A5A10]/30 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#0D2818] hover:text-[#8A5A10] transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8A5A10] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#3D5245] font-normal leading-relaxed border-t border-[#0D2818]/10 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#8A5A10]/30 shadow-sm">
          <p className="text-xs text-[#3D5245]">
            Have a special fabric inquiry or custom restoration requirement?
          </p>
          <a
            href="https://wa.me/918130940084?text=Hi%20Nikhaar,%20I%20have%20a%20question%20about%20my%20garment."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-xs font-bold text-[#8A5A10] hover:text-[#0D2818] hover:underline"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8A5A10]" />
            <span>Chat Directly with Master Care Specialist on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
