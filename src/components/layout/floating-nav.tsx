"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const navItems = [
  { name: "Početna", link: "#pocetna" },
  { name: "O Klubu", link: "#o-klubu" },
  { name: "Tehnike", link: "#tehnike" },
  { name: "Kontakt", link: "#kontakt" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a href="#pocetna" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Britke Sablje Logo"
            width={56}
            height={56}
            className="h-14 w-14 transition-transform hover:scale-110"
            priority
          />
        </a>
        <nav className="hidden items-center rounded-full border border-white/10 bg-black/30 p-1 md:flex">
          {navItems.map((navItem) => (
            <a
              key={navItem.link}
              href={navItem.link}
              className="relative rounded-full px-4 py-2 text-sm text-neutral-200 transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none"
            >
              {navItem.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </motion.header>
  );
}
