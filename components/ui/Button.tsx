"use client";
import React from "react";

type ButtonProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  target?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const variantClasses = {
  primary:
    "bg-accent text-app-bg hover:bg-accent-hover",
  outline:
    "border border-border-subtle text-text-secondary hover:border-accent hover:text-text-primary",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-surface",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-5 py-2.5 text-[15px] rounded-lg",
  lg: "px-7 py-3.5 text-base rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  as = "button",
  href,
  target,
  leftIcon,
  rightIcon,
  className = "",
  children,
  onClick,
}: ButtonProps) {
  const base =
    "font-semibold inline-flex items-center gap-2 transition-all duration-150 cursor-pointer select-none";
  const cls = [base, variantClasses[variant], sizeClasses[size], className]
    .join(" ")
    .trim();

  if (as === "a") {
    return (
      <a href={href} target={target} className={cls}>
        {leftIcon}
        {children}
        {rightIcon}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
