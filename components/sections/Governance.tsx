"use client";
import { motion } from "framer-motion";
import { ShieldCheck, ScrollText, FileCheck, GitPullRequest } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const PILLARS = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Approval gates",
    description: "Human confirmation before any sensitive action. Diwara pauses and waits for your go-ahead.",
    gradient: "linear-gradient(90deg, #7c9cff, #9bb2ff)",
  },
  {
    icon: <ScrollText size={22} />,
    title: "Trajectory logs",
    description: "Full replay of every action taken. Step through exactly what Diwara did and why.",
    gradient: "linear-gradient(90deg, #5cc98b, #7eddaa)",
  },
  {
    icon: <FileCheck size={22} />,
    title: "Audit artifacts",
    description: "Exportable screenshots and evidence packages for compliance and review.",
    gradient: "linear-gradient(90deg, #f4c76b, #ffd98a)",
  },
];

export default function Governance() {
  return (
    <section id="governance" className="py-24 px-6 bg-surface/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            eyebrow="Enterprise-ready"
            title="Built for trust from day one"
            subtitle="Approval gates. Trajectory logs. Audit artifacts. Human handoff."
            centered
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-border-subtle bg-surface p-6 relative overflow-hidden"
            >
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: pillar.gradient }}
              />
              <div className="w-10 h-10 rounded-xl bg-surface-raised flex items-center justify-center text-accent mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-text-primary font-semibold text-lg mb-2">{pillar.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Human handoff row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 flex items-center gap-4 p-5 rounded-2xl border border-border-subtle bg-surface"
        >
          <div className="w-10 h-10 rounded-xl bg-surface-raised flex items-center justify-center text-text-muted shrink-0">
            <GitPullRequest size={20} />
          </div>
          <div>
            <p className="text-text-primary font-medium text-sm">Human handoff</p>
            <p className="text-text-secondary text-sm">
              Diwara escalates gracefully when it&apos;s unsure — stopping before causing harm, never silently failing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
