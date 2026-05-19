"use client";
import React from "react";
import { motion } from "framer-motion";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
  className?: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
  gradient = "linear-gradient(90deg, #7c9cff, #9bb2ff)",
  className = "",
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border border-border-subtle bg-surface p-6 relative overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: gradient }}
      />
      <div className="w-10 h-10 rounded-xl bg-surface-raised flex items-center justify-center text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-text-primary font-semibold text-lg mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
