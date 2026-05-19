"use client";
import { motion } from "framer-motion";
import { Monitor, Laptop } from "lucide-react";
import Button from "../ui/Button";

export default function CtaBanner() {
  return (
    <section id="cta-banner" className="py-32 px-6 relative overflow-hidden bg-surface-raised border-y border-border-subtle">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(124,156,255,0.1),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(92,201,139,0.05),transparent)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <p className="text-accent text-xs tracking-widest uppercase font-semibold mb-4">
          Get started
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight tracking-tight">
          Download Diwara free
        </h2>
        <p className="mt-4 text-text-secondary text-lg">
          Local-first. Privacy by default. Your rules.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button
            variant="primary"
            size="lg"
            as="a"
            href="#"
            leftIcon={<Monitor size={18} />}
          >
            Download for Windows
          </Button>
          <Button
            variant="outline"
            size="lg"
            as="a"
            href="#"
            leftIcon={<Laptop size={18} />}
          >
            Download for macOS
          </Button>
        </div>

        <p className="mt-6 text-text-muted text-sm">
          Free forever &nbsp;·&nbsp; No account required &nbsp;·&nbsp; Open source coming soon
        </p>
      </motion.div>
    </section>
  );
}
