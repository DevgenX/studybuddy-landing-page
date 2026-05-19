import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Diwara — Your Screen. Your AI. Your Rules.",
  description:
    "Screen-aware AI desktop assistant with Ask, Guide, and Auto modes. Automate anything you can see — browser, desktop, and beyond.",
  openGraph: {
    title: "Diwara — Your Screen. Your AI. Your Rules.",
    description:
      "Screen-aware AI with Ask, Guide, and Auto modes. Local-first, privacy by default.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#0f1012" />
      </head>
      <body className="font-sans bg-app-bg text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
