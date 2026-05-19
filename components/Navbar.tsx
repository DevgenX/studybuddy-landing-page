"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const NAV_LINKS = [
  { label: "Features", href: "#modes" },
  { label: "Integrations", href: "#integrations" },
  { label: "How it works", href: "#automation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 h-16 flex items-center px-6 transition-all duration-200 ${
          scrolled
            ? "bg-[rgba(15,16,18,0.88)] backdrop-blur-md border-b border-border-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/diwara-wizard-king-book-icon.svg"
              alt="Diwara"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold text-text-primary text-[15px] tracking-tight">
              Diwara
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-secondary hover:text-text-primary text-sm transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <Button variant="primary" size="sm" as="a" href="#cta-banner">
              Download
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-app-bg flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-text-primary text-2xl font-semibold"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" size="lg" as="a" href="#cta-banner" onClick={() => setMenuOpen(false)}>
            Download
          </Button>
        </div>
      )}
    </>
  );
}
