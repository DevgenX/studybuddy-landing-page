"use client";

import BrandMark from "@/components/BrandMark";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function MarketingNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-indigo-glow bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 font-extrabold tracking-tight text-white no-underline"
        >
          <BrandMark className="h-9 w-9 shrink-0" />
          <span className="text-[1.02rem]">Diwara AI</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#pricing"
            className="button-primary rounded-full px-4 py-2 text-sm font-semibold transition-all"
          >
            Start free
          </Link>
        </div>

        <button
          className="p-2 text-muted transition-colors hover:text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-indigo-glow bg-surface/95 px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-muted transition-colors hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="#pricing"
              className="button-primary inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Start free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
