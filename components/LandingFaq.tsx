"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What exactly is StudyBuddy?",
    a: "On the current main branch, StudyBuddy is a desktop-first cursor assistant with a shared overlay renderer. It ships as an Electron runtime with capture, voice, and panel controls, plus a browser library for page-level embedding.",
  },
  {
    q: "Does the site still advertise unsupported pricing or billing flows?",
    a: "No. The landing page no longer presents Free or Pro plans, billing screens, or hosted account flows that are not represented in the current product surface.",
  },
  {
    q: "Which providers and models are currently wired in?",
    a: "The current implementation uses OpenAI for inference and text-to-speech, and AssemblyAI for speech-to-text. The desktop flow currently references gpt-5.4-mini, gpt-5.4, and gpt-4o-mini-tts.",
  },
  {
    q: "What do I need to run the full voice and inference pipeline?",
    a: "The docs list Node.js 18+, npm, OPENAI_API_KEY, and ASSEMBLYAI_API_KEY. Without those keys you can still inspect the UI and overlay code, but the full assistant loop will not complete.",
  },
  {
    q: "What data gets sent to AI providers when features are used?",
    a: "The shipped privacy copy says chat text, selected or copied text for Explain, screenshots you attach or auto-attach from the clipboard, and voice transcripts may be sent when you actively trigger those features. It also states that nothing is transmitted in the background unless you enable a feature that does so.",
  },
  {
    q: "Can I use StudyBuddy without Electron?",
    a: "Yes. The browser bundle supports a script-tag IIFE and an ESM import. In that mode you get the overlay, fly-to helpers, voice-state visuals, selection mode, viewport helpers, and event listeners, while desktop-only capture and voice services stay in Electron.",
  },
  {
    q: "Why were MCP tools, Claude branding, and theming claims removed?",
    a: "Because those claims were not represented as current product features. The updated landing page now sticks to the desktop panel, overlay, capture, voice, and embed behaviors that are actually present.",
  },
];

export default function LandingFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
            Questions that mattered once the page was tied to the product.
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3 text-left">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className="surface-card overflow-hidden rounded-[1.4rem]"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-semibold text-white transition-colors hover:text-accent2"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {q}
                <span className="ml-4 flex-shrink-0 text-xl text-muted">
                  {open === i ? "-" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="section-copy px-6 pb-5 text-sm">{a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
