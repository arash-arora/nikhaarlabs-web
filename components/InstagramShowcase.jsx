"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Sparkles, ExternalLink, X, Film, CheckCircle2 } from "lucide-react";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

const reelsData = [
  {
    id: "DdEnxOAvZy5",
    permalink: "https://www.instagram.com/reel/DdEnxOAvZy5/",
    title: "Cleaned. Pressed. Tagged. Packed.",
    category: "Full Process",
    caption: "From dry cleaning to the final fold and bespoke packaging.",
    duration: "Reel 1",
    cover: "/reels/reel-1.jpg",
  },
  {
    id: "DcQtxayv3Zg",
    permalink: "https://www.instagram.com/reel/DcQtxayv3Zg/",
    title: "The Little Details Matter",
    category: "Studio Craft",
    caption: "Precision, care, and attention behind the scenes at Nikhaar.",
    duration: "Reel 2",
    cover: "/reels/reel-2.jpg",
  },
  {
    id: "DcYE8tFvWlA",
    permalink: "https://www.instagram.com/reel/DcYE8tFvWlA/",
    title: "The Finishing Touch",
    category: "Packaging",
    caption: "Premium garment care is all about the pristine finishing touch.",
    duration: "Reel 3",
    cover: "/reels/reel-3.jpg",
  },
  {
    id: "Dcin0mBPYZg",
    permalink: "https://www.instagram.com/reel/Dcin0mBPYZg/",
    title: "Smoother Look, Sharper Finish",
    category: "Steam Press",
    caption: "3D steam pressing bringing out the best in fine fabric drape.",
    duration: "Reel 4",
    cover: "/reels/reel-4.jpg",
  },
  {
    id: "DcnMQ9IPbYe",
    permalink: "https://www.instagram.com/reel/DcnMQ9IPbYe/",
    title: "Steam Iron. Perfect Finish.",
    category: "Master Care",
    caption: "Crisp, polished finish without shine marks or fiber crushing.",
    duration: "Reel 5",
    cover: "/reels/reel-5.jpg",
  },
];

export default function InstagramShowcase() {
  const [modalReel, setModalReel] = useState(null);

  // Process Instagram embed whenever modal opens
  useEffect(() => {
    if (!modalReel) return;

    const processEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    if (!window.instgrm) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = processEmbeds;
      document.body.appendChild(script);
    } else {
      setTimeout(processEmbeds, 100);
    }
  }, [modalReel]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalReel(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="instagram" className="py-12 sm:py-16 bg-[#FAF8F5] relative overflow-hidden border-t border-[#0D2818]/10">
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#8A5A10]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header: Visible in one shot */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="text-center sm:text-left space-y-1.5">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#8A5A10] bg-white px-3.5 py-1 rounded-full border border-[#8A5A10]/30 shadow-sm">
              <InstagramIcon className="w-3 h-3 text-[#8A5A10]" />
              <span>Behind The Scenes • Live Reels</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0D2818] tracking-tight">
              Our Craft in <span className="text-gold-metallic">Motion</span>
            </h2>
            <p className="text-[#3D5245] text-xs sm:text-sm font-normal">
              Watch real garments being cleaned, 3D steam-pressed, and packed in our Faridabad studio.
            </p>
          </div>

          <a
            href="https://instagram.com/nikhaarlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D2818] hover:bg-[#143d25] border border-[#8A5A10]/40 text-[#FAF8F5] font-bold text-xs shadow-md hover:scale-105 transition-all shrink-0"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#8A5A10]" />
            <span>Follow @nikhaarlabs</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>

        {/* 5 Even-Height Reel Cards Track with Cover Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {reelsData.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setModalReel(reel)}
              className="group relative rounded-2xl overflow-hidden border border-[#8A5A10]/35 hover:border-[#8A5A10] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-[340px] p-4 cursor-pointer select-none bg-[#0D2818]"
            >
              {/* Cover Image */}
              <Image
                src={reel.cover}
                alt={reel.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority={reel.id === "DdEnxOAvZy5"}
              />

              {/* Cinematic Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/50 group-hover:via-black/25 transition-colors duration-300" />

              {/* Top Bar: Category Pill & Duration Badge */}
              <div className="flex items-center justify-between gap-2 z-10 w-full min-w-0">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-black/45 backdrop-blur-md text-[#FAF8F5] border border-white/20 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shrink-0 shadow-sm">
                  {reel.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-amber-300 bg-black/45 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 font-bold shrink-0 whitespace-nowrap ml-auto shadow-sm">
                  <Film className="w-3 h-3 text-amber-300 shrink-0" />
                  <span>{reel.duration}</span>
                </span>
              </div>

              {/* Center: Play Trigger Button with Ambient Pulse */}
              <div className="my-auto flex flex-col items-center justify-center gap-2 py-2 z-10">
                <div className="w-12 h-12 rounded-full bg-[#8A5A10]/90 backdrop-blur-md border-2 border-white/80 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#8A5A10] group-hover:shadow-[#8A5A10]/50 transition-all duration-300">
                  <Play className="w-5 h-5 fill-white translate-x-0.5" />
                </div>
                <span className="text-[11px] font-bold text-white tracking-wide bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10 group-hover:text-amber-300 transition-colors">
                  Watch Reel
                </span>
              </div>

              {/* Bottom: Title, Caption & Direct Link */}
              <div className="space-y-2 pt-2 border-t border-white/20 z-10">
                <div>
                  <h3 className="text-xs font-bold text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
                    {reel.title}
                  </h3>
                  <p className="text-[11px] text-slate-200/90 line-clamp-2 font-normal mt-0.5 leading-snug min-h-[2rem]">
                    {reel.caption}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <span className="font-bold text-amber-300 hover:text-white transition-colors flex items-center gap-1">
                    <span>Quick Preview</span>
                  </span>

                  <a
                    href={reel.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[10px] text-slate-300 hover:text-white flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/15 transition-colors"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* Subtle gold glow outline on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#8A5A10] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Video Modal */}
      {modalReel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
          onClick={() => setModalReel(null)}
        >
          <div
            className="relative w-full max-w-md bg-[#FAF8F5] border border-[#8A5A10]/50 rounded-3xl shadow-2xl p-5 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#0D2818]/10 mb-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-13 rounded-lg overflow-hidden shrink-0 border border-[#8A5A10]/30 shadow-sm">
                  <Image src={modalReel.cover} alt={modalReel.title} fill className="object-cover" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">
                    {modalReel.category} • {modalReel.duration}
                  </span>
                  <h4 className="text-sm font-bold text-[#0D2818]">
                    {modalReel.title}
                  </h4>
                </div>
              </div>

              <button
                onClick={() => setModalReel(null)}
                className="p-1.5 rounded-full text-[#4A5568] hover:text-[#0D2818] hover:bg-[#0D2818]/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Instagram Live Embed Container */}
            <div className="w-full max-h-[500px] overflow-y-auto rounded-2xl bg-white border border-[#0D2818]/10 flex justify-center p-2">
              <blockquote
                key={modalReel.id}
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={modalReel.permalink}
                data-instgrm-version="14"
                style={{
                  background: "#FAF8F5",
                  border: 0,
                  borderRadius: "14px",
                  margin: "1px auto",
                  maxWidth: "400px",
                  width: "100%",
                }}
              >
                <div style={{ padding: "16px", textAlign: "center" }}>
                  <a
                    href={modalReel.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#8A5A10] font-bold"
                  >
                    Open Reel on Instagram
                  </a>
                </div>
              </blockquote>
            </div>

            {/* Modal Footer */}
            <div className="mt-4 pt-3 border-t border-[#0D2818]/10 flex items-center justify-between">
              <span className="text-[11px] text-[#4A5568]">
                Official @nikhaarlabs
              </span>
              <a
                href={modalReel.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#8A5A10] hover:underline"
              >
                <span>Watch on Instagram App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
