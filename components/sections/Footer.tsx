const LINKS = {
  Product: [
    { label: "Features", href: "#modes" },
    { label: "Integrations", href: "#integrations" },
    { label: "How it works", href: "#automation" },
    { label: "Governance", href: "#governance" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "GitHub", href: "#" },
  ],
  Connect: [
    { label: "Slack Community", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "Email", href: "mailto:hello@diwara.app" },
  ],
};

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border-subtle bg-app-bg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand col */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <img
              src="/diwara-wizard-king-book-icon.svg"
              alt="Diwara"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="font-semibold text-text-primary text-sm">Diwara</span>
          </div>
          <p className="text-text-muted text-sm leading-relaxed">
            Your screen. Your AI. Your rules.
          </p>
          <p className="text-text-muted text-xs">© 2026 DevGenX. All rights reserved.</p>
        </div>

        {/* Link cols */}
        {Object.entries(LINKS).map(([section, links]) => (
          <div key={section}>
            <p className="text-text-secondary text-xs font-semibold uppercase tracking-widest mb-4">
              {section}
            </p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-text-primary text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-3 text-text-muted text-xs">
        <span>Built with ♥ by DevGenX</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-text-secondary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-text-secondary transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
