"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const navItems = [
  { name: "Početna", link: "#pocetna" },
  { name: "O Klubu", link: "#o-klubu" },
  { name: "Tehnike", link: "#tehnike" },
  { name: "Sparinzi", link: "#sparinzi" },
  { name: "Saveti", link: "#saveti" },
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
        <nav className="hidden items-center gap-2 md:flex">
          <div className="rounded-full border border-white/10 bg-black/30 p-1">
            {navItems.map((navItem) => (
              <a
                key={navItem.link}
                href={navItem.link}
                className="relative rounded-full px-4 py-2 text-sm text-neutral-200 transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none"
              >
                {navItem.name}
              </a>
            ))}
          </div>
          <a
            href="https://www.instagram.com/britkesablje_armwrestling?igsh=MWtvNzQxYnZhYzZmZQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 text-sm font-medium text-white"
          >
            <span className="absolute h-full w-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-all duration-300 ease-in-out group-hover:blur-sm"></span>
            <span className="relative flex items-center gap-2 rounded-full bg-black/80 px-4 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-80">
              <Instagram className="h-4 w-4" />
              Instagram
            </span>
          </a>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </motion.header>
  );
}
