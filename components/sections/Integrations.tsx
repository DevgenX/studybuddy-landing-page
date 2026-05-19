"use client";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import IntegrationLogo from "../ui/IntegrationLogo";

const INTEGRATIONS = [
  { id: "slack", label: "Slack" },
  { id: "telegram", label: "Telegram" },
  { id: "google-drive", label: "Google Drive" },
  { id: "dropbox", label: "Dropbox" },
  { id: "notion", label: "Notion" },
  { id: "openai", label: "OpenAI" },
  { id: "openrouter", label: "OpenRouter" },
  { id: "playwright", label: "Playwright" },
  { id: "mcp", label: "MCP" },
  { id: "windows", label: "Windows" },
  { id: "macos", label: "macOS" },
  { id: "office", label: "Office" },
];

// Duplicate for seamless marquee loop
const MARQUEE_ITEMS = [...INTEGRATIONS, ...INTEGRATIONS];

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <SectionHeading
            eyebrow="Integrations"
            title="Works with everything you use"
            centered
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {INTEGRATIONS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-border-subtle bg-surface"
            >
              <IntegrationLogo id={item.id} label={item.label} size={32} />
              <span className="text-text-muted text-xs text-center leading-tight">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="overflow-hidden border-y border-border-subtle py-4 -mx-6">
          <div className="animate-marquee">
            {MARQUEE_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 mx-8 text-text-muted text-sm whitespace-nowrap"
              >
                <IntegrationLogo id={item.id} label={item.label} size={18} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
