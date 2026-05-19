"use client";
import { motion } from "framer-motion";
import { FileText, Search, FolderOpen, Zap, Upload } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const FEATURES = [
  { icon: <FileText size={16} />, label: "PDF & DOCX parsing" },
  { icon: <Search size={16} />, label: "pgvector semantic search" },
  { icon: <FolderOpen size={16} />, label: "Space-scoped context" },
  { icon: <Zap size={16} />, label: "Instant retrieval" },
];

const SAMPLE_DOCS = [
  { name: "Q4-Report.pdf", size: "2.4 MB", color: "text-danger" },
  { name: "Project-Brief.docx", size: "380 KB", color: "text-accent" },
  { name: "Notes-2026.txt", size: "14 KB", color: "text-success" },
];

function UploadMock() {
  return (
    <div className="w-full max-w-sm mx-auto space-y-3">
      {/* Drop zone */}
      <div className="rounded-2xl border-2 border-dashed border-border-strong bg-surface/60 p-8 flex flex-col items-center gap-3 text-center">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
          <Upload size={22} className="text-accent" />
        </div>
        <p className="text-text-secondary text-sm font-medium">Drop files here</p>
        <p className="text-text-muted text-xs">PDF, DOCX, TXT supported</p>
      </div>
      {/* Doc list */}
      <div className="space-y-2">
        {SAMPLE_DOCS.map((doc) => (
          <div
            key={doc.name}
            className="flex items-center gap-3 p-3 rounded-xl border border-border-subtle bg-surface"
          >
            <FileText size={16} className={doc.color} />
            <span className="text-text-primary text-sm flex-1">{doc.name}</span>
            <span className="text-text-muted text-xs">{doc.size}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SpacesKnowledge() {
  return (
    <section id="spaces" className="py-24 px-6 bg-surface/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            eyebrow="Knowledge"
            title="Your documents, always in context"
            subtitle="Upload PDFs and docs. Get semantic answers scoped to your workspace."
            centered
          />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Upload mock */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <UploadMock />
          </motion.div>

          {/* Feature grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {FEATURES.map((f) => (
              <div
                key={f.label}
                className="p-5 rounded-2xl border border-border-subtle bg-surface flex flex-col gap-3"
              >
                <span className="text-accent">{f.icon}</span>
                <span className="text-text-primary text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
