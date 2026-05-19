import React from "react";
import {
  Monitor,
  Laptop,
  Grid3X3,
  TestTube2,
  Plug2,
} from "lucide-react";

type IntegrationLogoProps = {
  id: string;
  label: string;
  size?: number;
};

export default function IntegrationLogo({
  id,
  label,
  size = 32,
}: IntegrationLogoProps) {
  if (id === "slack") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label={label}>
        <rect x="10" y="2" width="4" height="9" rx="2" fill="#36C5F0" />
        <rect x="13" y="10" width="9" height="4" rx="2" fill="#2EB67D" />
        <rect x="10" y="13" width="4" height="9" rx="2" fill="#ECB22E" />
        <rect x="2" y="10" width="9" height="4" rx="2" fill="#E01E5A" />
        <rect x="4" y="4" width="6" height="4" rx="2" fill="#E01E5A" />
        <rect x="14" y="4" width="4" height="6" rx="2" fill="#36C5F0" />
        <rect x="14" y="16" width="6" height="4" rx="2" fill="#2EB67D" />
        <rect x="6" y="14" width="4" height="6" rx="2" fill="#ECB22E" />
      </svg>
    );
  }

  if (id === "telegram") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label={label}>
        <circle cx="12" cy="12" r="11" fill="#26A5E4" />
        <path fill="#fff" d="M17.8 7.1 15.9 17c-.1.8-.6 1-1.2.6l-3.3-2.4-1.6 1.5c-.2.2-.3.3-.7.3l.2-3.4 6.2-5.6c.3-.2-.1-.4-.4-.2l-7.7 4.8-3.3-1c-.7-.2-.7-.7.1-1z" />
      </svg>
    );
  }

  if (id === "google-drive") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label={label}>
        <path fill="#34A853" d="M8.2 3h7.6l3.8 6.6H12z" />
        <path fill="#4285F4" d="M12 9.6h7.6L15.8 21H8.2z" />
        <path fill="#FBBC04" d="M8.2 3 12 9.6 8.2 21 4.4 14.4z" />
      </svg>
    );
  }

  if (id === "dropbox") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label={label}>
        <path fill="#0061FF" d="m7.2 3 4.8 3.1-4.8 3.1L2.4 6.1zM16.8 3l4.8 3.1-4.8 3.1L12 6.1zM7.2 10.5l4.8 3.1-4.8 3.1-4.8-3.1zM16.8 10.5l4.8 3.1-4.8 3.1-4.8-3.1z" />
        <path fill="#0061FF" d="m12 14.9 4.8 3.1-4.8 3-4.8-3z" opacity="0.82" />
      </svg>
    );
  }

  if (id === "notion") {
    return (
      <span
        role="img"
        aria-label={label}
        className="grid place-items-center rounded-lg border border-border-subtle bg-white font-serif font-bold text-black"
        style={{ width: size, height: size, fontSize: Math.max(11, size * 0.52) }}
      >
        N
      </span>
    );
  }

  if (id === "openai") {
    return (
      <span
        role="img"
        aria-label={label}
        className="grid place-items-center rounded-lg font-bold"
        style={{ width: size, height: size, fontSize: Math.max(10, size * 0.46), background: "#10a37f", color: "#fff" }}
      >
        AI
      </span>
    );
  }

  if (id === "openrouter") {
    return (
      <span
        role="img"
        aria-label={label}
        className="grid place-items-center rounded-lg font-bold"
        style={{ width: size, height: size, fontSize: Math.max(11, size * 0.52), background: "#6366f1", color: "#fff" }}
      >
        OR
      </span>
    );
  }

  if (id === "playwright") {
    return <TestTube2 width={size} height={size} aria-label={label} className="text-[#45ba4b]" />;
  }

  if (id === "mcp") {
    return <Plug2 width={size} height={size} aria-label={label} className="text-accent" />;
  }

  if (id === "windows") {
    return <Monitor width={size} height={size} aria-label={label} className="text-[#0078d4]" />;
  }

  if (id === "macos") {
    return <Laptop width={size} height={size} aria-label={label} className="text-text-secondary" />;
  }

  if (id === "office") {
    return <Grid3X3 width={size} height={size} aria-label={label} className="text-[#d83b01]" />;
  }

  return (
    <span
      role="img"
      aria-label={label}
      className="grid place-items-center rounded-lg bg-surface-raised text-text-muted font-bold text-xs"
      style={{ width: size, height: size }}
    >
      {label[0]}
    </span>
  );
}
