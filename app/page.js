"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OrganicHighlight from "@/components/OrganicHighlight";
import InstagramShowcase from "@/components/InstagramShowcase";
import Locations from "@/components/Locations";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A2E22] selection:bg-[#8A5A10] selection:text-white relative overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <OrganicHighlight />
      <InstagramShowcase />
      <Locations />
      <FAQ />
      <Footer />
      <FloatingContact />
    </main>
  );
}
