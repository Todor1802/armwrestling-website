"use client";
import { Header } from "@/components/layout/floating-nav";
import { PageFooter } from "@/components/layout/page-footer";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { KnowledgeHubSection } from "@/components/sections/knowledge-hub-section";
import { SparringSection } from "@/components/sections/sparring-section";
import { TechniqueSection } from "@/components/sections/technique-section";
import { motion } from "framer-motion";

function Aura() {
  // This component must be used within a client component.
  return (
    <div className="pointer-events-none absolute -inset-40 z-0 opacity-30">
      <motion.div
        initial={{ transform: "translate(-50%, -50%) rotate(0deg)" }}
        animate={{ transform: "translate(-50%, -50%) rotate(360deg)" }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/4 top-1/4 h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/50 via-primary/10 to-transparent"
      />
      <motion.div
        initial={{ transform: "translate(-50%, -50%) rotate(0deg)" }}
        animate={{ transform: "translate(-50%, -50%) rotate(-120deg)" }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute left-3/4 top-3/4 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/40 via-secondary/5 to-transparent"
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />
      <main className="relative bg-gradient-to-b from-[#0F0518] to-[#000000] text-foreground">
        <Aura />
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <TechniqueSection />
          <SparringSection />
          <KnowledgeHubSection />
          <PageFooter />
        </div>
      </main>
    </div>
  );
}
