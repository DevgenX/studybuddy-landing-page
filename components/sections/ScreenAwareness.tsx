"use client";
import { motion } from "framer-motion";
import { CheckCircle, ScanLine } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const CAPABILITIES = [
  "OCR text extraction from any screen",
  "Screen history recall across sessions",
  "Native element resolver with pixel precision",
  "Windows UIA + macOS a11y bridges",
];

function ScreenMock() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-3xl" />
      {/* Browser frame */}
      <div className="relative rounded-2xl border border-border-strong bg-surface shadow-2xl overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-surface-raised border-b border-border-subtle">
          <div className="w-2.5 h-2.5 rounded-full bg-danger/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-warning/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-success/60" />
          <div className="ml-3 flex-1 bg-surface rounded-md px-3 py-1 text-xs text-text-muted font-mono">
            app.example.com/dashboard
          </div>
        </div>
        {/* Content area with OCR overlays */}
        <div className="relative p-6 space-y-3 min-h-48">
          {/* Simulated content blocks */}
          <div className="h-4 bg-surface-raised rounded w-3/4" />
          <div className="h-3 bg-surface-raised rounded w-full" />
          <div className="h-3 bg-surface-raised rounded w-5/6" />
          <div className="h-8 mt-4 bg-surface-raised rounded w-32 border border-border-subtle flex items-center justify-center">
            <span className="text-xs text-text-muted">Submit</span>
          </div>

          {/* OCR bounding box overlay */}
          <div className="absolute inset-6 top-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-[55%] h-4 border border-accent/60 rounded bg-accent/5">
              <span className="absolute -top-4 left-0 text-[10px] text-accent font-mono bg-app-bg px-1">
                text block
              </span>
            </div>
            <div className="absolute bottom-6 left-0 w-24 h-8 border-2 border-accent rounded-lg bg-accent/10">
              <span className="absolute -top-5 left-0 text-[10px] text-accent font-mono bg-app-bg px-1">
                Button: &quot;Submit&quot;
              </span>
            </div>
          </div>
        </div>
        {/* Status bar */}
        <div className="px-4 py-2 bg-surface-muted border-t border-border-subtle flex items-center gap-2">
          <ScanLine size={12} className="text-accent" />
          <span className="text-xs text-text-muted font-mono">Diwara is watching · 3 elements resolved</span>
        </div>
      </div>
    </div>
  );
}

export default function ScreenAwareness() {
  return (
    <section id="screen-awareness" className="py-24 px-6 bg-surface/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            eyebrow="Screen intelligence"
            title="Sees everything you see"
            subtitle="OCR, native accessibility, and screen history — Diwara understands what's actually on your display."
          />
          <div className="mt-8 space-y-3">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap}
                className="flex items-center gap-3 p-3 rounded-xl border border-border-subtle bg-surface"
              >
                <CheckCircle size={16} className="text-success shrink-0" />
                <span className="text-text-secondary text-sm">{cap}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <ScreenMock />
        </motion.div>
      </div>
    </section>
  );
}
