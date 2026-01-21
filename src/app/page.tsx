import { FloatingNav } from "@/components/layout/floating-nav";
import { PageFooter } from "@/components/layout/page-footer";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TechniqueSection } from "@/components/sections/technique-section";

export default function Home() {
  const navItems = [
    { name: "Početna", link: "#pocetna" },
    { name: "O Klubu", link: "#o-klubu" },
    { name: "Tehnike", link: "#tehnike" },
    { name: "Kontakt", link: "#kontakt" },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <main className="relative bg-gradient-to-b from-[#0F0518] to-black text-foreground">
        <HeroSection />
        <AboutSection />
        <TechniqueSection />
        <PageFooter />
      </main>
    </div>
  );
}
