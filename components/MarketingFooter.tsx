import BrandMark from "@/components/BrandMark";
import Link from "next/link";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function MarketingFooter() {
  return (
    <footer className="border-t border-indigo-glow px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="mb-2 inline-flex items-center gap-3 no-underline"
          >
            <BrandMark className="h-9 w-9 shrink-0" />
            <span className="text-[1.05rem] font-extrabold tracking-tight text-white">
              Diwara AI
            </span>
          </Link>
          <p className="mt-1 text-xs text-muted">
            Clear AI help for everyday work and learning. (c){" "}
            {new Date().getFullYear()} Diwara AI.
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-xs text-muted transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
