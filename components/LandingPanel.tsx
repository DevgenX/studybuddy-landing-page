const controlSurfaces = [
  {
    label: "Assistant tab",
    heading: "Chat, capture, mic, explain, and stream responses in one place",
    description:
      "The panel already ships with chat mode, voice mode, screenshot attachments, microphone controls, clear-history actions, and a live streaming response surface.",
    points: [
      "Capture button for screenshots",
      "Mic toggle for manual voice flow",
      "Explain selected or copied text",
      "Attachment tray and clear conversation controls",
    ],
  },
  {
    label: "Voice tab",
    heading: "Tune microphones, spoken voice, capture scope, and persistence",
    description:
      "Voice settings are concrete, not marketing copy: microphone selection, manual voice testing, TTS voice preview, screen capture scope, clipboard auto-attach, and history persistence.",
    points: [
      "Default microphone or device-specific input",
      "Selectable OpenAI TTS voices",
      "Current screen or all-screen capture scope",
      "Clipboard screenshot auto-attach toggle",
    ],
  },
  {
    label: "Shortcuts tab",
    heading: "Global keyboard flows are part of the shipped desktop UX",
    description:
      "The product exposes configurable shortcuts for push-to-talk, overlay visibility, explain, and explain-with-context. The current panel shows default bindings, but users can set them however they want.",
    points: [
      "Default push-to-talk binding: Ctrl+Alt+Space",
      "Default show or hide binding: Ctrl+Alt+C",
      "Default explain binding: Ctrl+Shift+E",
      "Default explain with context binding: Ctrl+Alt+E",
    ],
  },
  {
    label: "Guide and privacy",
    heading: "The desktop panel documents its own workflows and data boundaries",
    description:
      "The shipped panel includes Guide, Disclaimer, and Privacy pages, covering what gets sent to providers, what stays local, and how clipboard and screenshot features behave.",
    points: [
      "Guide pages for chat, voice, explain, and capture",
      "Privacy notes for screenshots, clipboard, and transcripts",
      "Disclaimer page for AI accuracy boundaries",
      "Settings persistence under the user profile",
    ],
  },
];

export default function LandingPanel() {
  return (
    <section id="panel" className="section-shell px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Control surface</p>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
            The landing page now describes the panel that actually exists.
          </h2>
          <p className="section-copy mt-4 max-w-2xl text-base sm:text-lg">
            Instead of generic use-case personas, the page now maps to the
            current desktop UI: Assistant, Voice, Shortcuts, Guide, Disclaimer,
            and Privacy. That is the product surface users can actually run
            today.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {controlSurfaces.map(({ label, heading, description, points }) => (
            <article
              key={label}
              className="surface-card rounded-[1.8rem] p-7"
            >
              <div className="mb-5 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-accent2">
                {label}
              </div>
              <h3 className="text-xl font-bold text-white">{heading}</h3>
              <p className="section-copy mt-3 text-sm">{description}</p>

              <div className="mt-6 grid gap-3">
                {points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/85"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
