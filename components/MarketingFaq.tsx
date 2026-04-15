"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Diwara AI in simple words?",
    a: "It is an AI helper that stays on your screen while you work or study. You use shortcut keys to open features, ask questions, copy text for an explanation, or follow on-screen guidance.",
  },
  {
    q: "How do I ask for help?",
    a: "You usually start by pressing a shortcut key. From there, you can type a question, speak out loud, or use the explain feature after copying text.",
  },
  {
    q: "What is copy and explain?",
    a: "Copy a word, sentence, or paragraph, then press the explain shortcut. Diwara AI will explain it in plain language. This is useful when something sounds too technical or too long.",
  },
  {
    q: "Can it look at what is on my screen?",
    a: "Yes. In the full desktop experience, Diwara AI can use what is on screen to answer with better context and point to the right place.",
  },
  {
    q: "Does it talk back?",
    a: "Yes. Diwara AI can speak the answer out loud if you want voice help.",
  },
  {
    q: "What do I get with Free, Pro, and Enterprise?",
    a: "Free is for trying the product. Pro unlocks more usage and the full desktop helper. Enterprise is for teams that want custom pricing and rollout help.",
  },
  {
    q: "Do I need technical skills to use it?",
    a: "No. The page and the product are designed to use simple language. You ask, Diwara AI helps, and you keep going.",
  },
];

export default function MarketingFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-shell px-6 py-24 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
            Common questions, answered simply.
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3 text-left">
          {faqs.map(({ q, a }, index) => (
            <div
              key={q}
              className="surface-card overflow-hidden rounded-[1.4rem]"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-semibold text-white transition-colors hover:text-accent2"
                onClick={() => setOpen(open === index ? null : index)}
              >
                {q}
                <span className="ml-4 flex-shrink-0 text-xl text-muted">
                  {open === index ? "-" : "+"}
                </span>
              </button>
              {open === index && (
                <p className="section-copy px-6 pb-5 text-sm">{a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
