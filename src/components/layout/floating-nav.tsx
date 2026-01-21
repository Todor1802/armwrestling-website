"use client";

import { motion } from "framer-motion";

type NavItem = {
  name: string;
  link: string;
};

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export function FloatingNav({ navItems, className }: FloatingNavProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2"
    >
      <nav
        className={`relative flex items-center space-x-1 rounded-full border border-white/10 bg-black/30 p-2 shadow-lg backdrop-blur-md ${className}`}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className="relative rounded-full px-4 py-2 text-sm text-neutral-300 transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none"
          >
            {navItem.name}
          </a>
        ))}
      </nav>
    </motion.div>
  );
}
