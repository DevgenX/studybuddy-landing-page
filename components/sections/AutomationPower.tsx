"use client";
import { motion } from "framer-motion";
import { Globe, MousePointer2, FileSpreadsheet, Plug2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const TERMINAL_LINES = [
  { text: '> playwright.click("#submit-btn")', color: "text-accent" },
  { text: '> native.type("hello world")', color: "text-success" },
  { text: '> office.excel.setCell("A1", 42)', color: "text-warning" },
  { text: '> mcp.invoke("custom-tool", args)', color: "text-text-secondary" },
];

const CAPABILITIES = [
  { icon: <Globe size={16} />, label: "Playwright browser automation" },
  { icon: <MousePointer2 size={16} />, label: "Native desktop pointer & keyboard" },
  { icon: <FileSpreadsheet size={16} />, label: "Office COM (Excel, Word, Outlook)" },
  { icon: <Plug2 size={16} />, label: "MCP extensible tool protocol" },
];

function Terminal() {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-0 bg-success/5 blur-3xl rounded-3xl" />
      <div className="relative rounded-2xl border border-border-strong bg-surface-raised shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-surface">
          <div className="w-2.5 h-2.5 rounded-full bg-danger/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-warning/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-success/60" />
          <span className="ml-3 text-text-muted text-xs font-mono">diwara — automation</span>
        </div>
        {/* Lines */}
        <div className="p-6 space-y-3 font-mono text-sm">
          {TERMINAL_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.4 }}
              className={`${line.color} leading-relaxed`}
            >
              {line.text}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-1.5 text-text-muted text-xs pt-2 border-t border-border-subtle"
          >
            <span className="w-1.5 h-3.5 bg-accent rounded-sm animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function AutomationPower() {
  return (
    <section id="automation" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Terminal visual — left */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <Terminal />
        </motion.div>

        {/* Text — right */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            eyebrow="Automation engine"
            title="Controls anything on your machine"
            subtitle="Playwright, native desktop, Office COM, and MCP tools — no extra API required."
          />
          <div className="mt-8 space-y-4">
            {CAPABILITIES.map((cap) => (
              <div key={cap.label} className="flex items-center gap-3 text-text-secondary text-sm">
                <span className="text-accent">{cap.icon}</span>
                {cap.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
