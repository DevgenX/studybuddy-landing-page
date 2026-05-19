import React from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p className="text-accent text-xs tracking-widest uppercase font-semibold mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-text-secondary text-lg mt-4 ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
