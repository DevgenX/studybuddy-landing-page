"use client";
import { motion } from "framer-motion";
import { MessageCircle, BookOpen, Zap } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";

const MODES = [
  {
    icon: <MessageCircle size={20} />,
    title: "Ask",
    description:
      "Ask anything about what's on your screen. Diwara reads your display, understands context, and answers instantly — no copy-paste needed.",
    gradient: "linear-gradient(90deg, #7c9cff, #9bb2ff)",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Guide",
    description:
      "Step-by-step walkthroughs that adapt in real time. Diwara watches your screen and tells you exactly what to do next.",
    gradient: "linear-gradient(90deg, #5cc98b, #7eddaa)",
  },
  {
    icon: <Zap size={20} />,
    title: "Auto",
    description:
      "Fully autonomous execution with pause, resume, and stop controls. Diwara plans, acts, verifies, and recovers on its own.",
    gradient: "linear-gradient(90deg, #f4c76b, #ffd98a)",
  },
];

export default function Modes() {
  return (
    <section id="modes" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            eyebrow="How it works"
            title="Three modes for every task"
            subtitle="From quick questions to full autonomy — choose how much Diwara does."
            centered
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {MODES.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <FeatureCard
                icon={mode.icon}
                title={mode.title}
                description={mode.description}
                gradient={mode.gradient}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
