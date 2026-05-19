"use client";
import { motion } from "framer-motion";
import { Bell, Shield, Send } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import IntegrationLogo from "../ui/IntegrationLogo";

const CHANNELS = [
  {
    id: "slack",
    name: "Slack",
    tagline: "Bring Diwara into your workspace",
    bullets: ["Socket Mode — no webhooks needed", "Trust bindings & allowed scopes", "Remote task delegation"],
    accentColor: "border-[#36C5F0]/20 bg-[#36C5F0]/5",
  },
  {
    id: "telegram",
    name: "Telegram",
    tagline: "Your personal assistant on the go",
    bullets: ["Bot token — setup in 60 seconds", "Memory profile & reminders", "Approval-aware routing"],
    accentColor: "border-[#26A5E4]/20 bg-[#26A5E4]/5",
  },
];

export default function PersonalChannels() {
  return (
    <section id="channels" className="py-24 px-6 bg-surface-raised">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <SectionHeading
            eyebrow="Personal assistant"
            title="Reach Diwara anywhere"
            subtitle="Slack and Telegram adapters bring Diwara into your workflow — wherever you work."
            centered
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {CHANNELS.map((ch, i) => (
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl border ${ch.accentColor} bg-surface p-8`}
            >
              <div className="flex items-center gap-3 mb-4">
                <IntegrationLogo id={ch.id} label={ch.name} size={36} />
                <div>
                  <p className="text-text-primary font-semibold">{ch.name}</p>
                  <p className="text-text-muted text-xs">{ch.tagline}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {ch.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-accent mt-0.5">·</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          <Badge tone="default" icon={<Bell size={11} />}>Memory profile</Badge>
          <Badge tone="default" icon={<Shield size={11} />}>Trust controls</Badge>
          <Badge tone="default" icon={<Send size={11} />}>Approval gates</Badge>
        </motion.div>
      </div>
    </section>
  );
}
