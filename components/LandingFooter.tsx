import Link from "next/link";

const links = [
  { href: "#runtime", label: "Runtime" },
  { href: "#features", label: "Feature Set" },
  { href: "#panel", label: "Panel" },
  { href: "#faq", label: "FAQ" },
];

export default function LandingFooter() {
  return (
    <footer className="border-t border-indigo-glow px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="mb-2 inline-flex items-center gap-3 no-underline"
          >
            <span className="triangle-cursor h-8 w-7 rounded-[0.35rem]" />
            <span className="text-[1.05rem] font-extrabold tracking-tight text-white">
              StudyBuddy
            </span>
          </Link>
          <p className="mt-1 text-xs text-muted">
            Landing page aligned to the current StudyBuddy product surface.
            © {new Date().getFullYear()} StudyBuddy.
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
