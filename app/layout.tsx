import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./landing.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const _legacyMetadata: Metadata = {
  title: "Diwara AI — Your AI screen companion",
  description:
    "Diwara AI is an AI helper that stays on your screen, follows your flow, and explains what you are looking at without breaking your focus.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Diwara AI — Your AI screen companion",
    description:
      "A friendly AI helper that stays on your screen, understands your context, and helps in real time.",
    type: "website",
  },
};

export const metadata: Metadata = {
  title: "Diwara AI | AI help that stays on your screen",
  description:
    "Diwara AI helps people ask questions, explain copied text, and follow simple on-screen guidance without losing their place.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Diwara AI | AI help that stays on your screen",
    description:
      "Ask questions, copy text for a simple explanation, and get guided help right on screen with Diwara AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
