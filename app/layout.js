import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://nikhaarlabs.com"),
  title: "Nikhaar - The Wardrobe Spa | Organic Dry Cleaning & Fabric Restoration",
  description: "Nikhaar The Wardrobe Spa provides luxury organic dry cleaning, steam ironing, fabric dyeing, darning (Rafi work), and traditional charak in Faridabad. Active since 17th August 2026.",
  keywords: ["Organic Dry Cleaning Faridabad", "Nikhaar Wardrobe Spa", "Luxury Dry Cleaner", "Fabric Dyeing", "Steam Ironing", "Darning Rafi Work", "Charak Roll Press", "Faridabad Dry Cleaner"],
  openGraph: {
    title: "Nikhaar - The Wardrobe Spa",
    description: "Premium Organic Garment Care & Fabric Restoration in Faridabad.",
    url: "https://nikhaarlabs.com",
    siteName: "Nikhaar Wardrobe Spa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nikhaar - The Wardrobe Spa",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1A2E22] font-sans selection:bg-[#8A5A10] selection:text-white">
        {children}
      </body>
    </html>
  );
}
