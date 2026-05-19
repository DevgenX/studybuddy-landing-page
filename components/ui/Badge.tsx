import React from "react";

type BadgeProps = {
  tone?: "accent" | "success" | "default";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

const toneClasses = {
  accent: "border-accent/30 bg-accent/10 text-accent",
  success: "border-success/30 bg-success/10 text-success",
  default: "border-border-subtle bg-surface text-text-secondary",
};

export default function Badge({
  tone = "default",
  icon,
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${toneClasses[tone]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
