"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Monitor, Play, Sparkles } from "lucide-react";
import Button from "../ui/Button";

function CursorBubble() {
  return (
    <div className="animate-float relative">
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-2xl scale-110" />
      {/* Card */}
      <div className="relative w-64 rounded-2xl border border-border-strong bg-surface/90 backdrop-blur-sm shadow-2xl overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle">
          <div className="w-2.5 h-2.5 rounded-full bg-danger/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-warning/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-success/70" />
          <span className="ml-2 text-text-muted text-xs font-mono">diwara</span>
        </div>
        {/* Cursor state */}
        <div className="px-4 py-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-text-secondary text-xs font-mono">listening…</span>
          </div>
          <div className="rounded-lg bg-surface-raised px-3 py-2 text-xs text-text-primary font-mono">
            &quot;Summarize this page&quot;
          </div>
          <div className="flex items-center gap-1.5 text-xs text-success font-mono">
            <Sparkles size={11} />
            analyzing screen context
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,156,255,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_70%_60%,rgba(92,201,139,0.05),transparent)] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#7c9cff 1px, transparent 1px), linear-gradient(90deg, #7c9cff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl"
      >
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold mb-8"
        >
          <Sparkles size={12} />
          Local-first · Privacy by default · Always on
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary tracking-tight leading-[1.05]"
        >
          Your screen.
          <br />
          <span className="text-accent">Your AI.</span>
          <br />
          Your rules.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-text-secondary text-lg md:text-xl max-w-xl leading-relaxed"
        >
          Diwara watches your screen, understands context, and gets work done —
          with or without you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="flex flex-col sm:flex-row items-center gap-3 mt-10"
        >
          <Button
            variant="primary"
            size="lg"
            as="a"
            href="#cta-banner"
            leftIcon={<Monitor size={18} />}
          >
            Download for Windows
          </Button>
          <Button
            variant="outline"
            size="lg"
            as="a"
            href="#modes"
            leftIcon={<Play size={16} />}
          >
            See how it works
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-text-muted text-sm"
        >
          Also available for macOS &nbsp;·&nbsp; Free forever
        </motion.p>
      </motion.div>

      {/* Floating cursor bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <CursorBubble />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <div className="w-px h-10 bg-gradient-to-b from-border-subtle to-transparent" />
        <span className="text-text-muted text-xs">scroll</span>
      </motion.div>
    </section>
  );
}
