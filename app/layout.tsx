import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StudyBuddy — Your AI Study Companion",
  description:
    "StudyBuddy is an AI-powered study companion that lives on your screen, follows your cursor, reads your content, and helps you learn — without breaking your flow.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "StudyBuddy — Your AI Study Companion",
    description:
      "An animated AI companion that lives on your screen, understands what you're studying, and helps you learn in real time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
