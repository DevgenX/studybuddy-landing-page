const pipelineSteps = [
  {
    step: "01",
    title: "Ask",
    body: "Type in the Assistant tab, switch to voice mode, or hold the global push-to-talk shortcut.",
  },
  {
    step: "02",
    title: "Capture",
    body: "Attach the current display or every display, and optionally auto-attach clipboard screenshots.",
  },
  {
    step: "03",
    title: "Infer",
    body: "OpenAI routes lighter requests to gpt-5.4-mini and screenshot-heavy requests to gpt-5.4.",
  },
  {
    step: "04",
    title: "Resolve",
    body: "The assistant can emit a [POINT:x,y:label(:screenN)] tag or fall back to vision point refinement.",
  },
  {
    step: "05",
    title: "Respond",
    body: "StudyBuddy moves the overlay to the target and can speak the reply with gpt-4o-mini-tts.",
  },
];

const featureCards = [
  {
    title: "Cursor-follow overlay",
    body: "The renderer follows the cursor with spring motion in browser mode and a compact transparent overlay window in Electron.",
  },
  {
    title: "Bezier fly-to navigation",
    body: "The buddy flies to targets with rotation, scale pulse, bubble text, a hold phase, and a return arc back to the cursor.",
  },
  {
    title: "AssemblyAI speech-to-text",
    body: "Desktop voice mode uses realtime websocket transcription and falls back to buffered audio transcription if finalization fails.",
  },
  {
    title: "OpenAI model routing",
    body: "The current implementation routes lighter requests to gpt-5.4-mini and heavier screenshot and vision work to gpt-5.4.",
  },
  {
    title: "OpenAI speech output",
    body: "TTS uses gpt-4o-mini-tts and a sentence-based playback queue, with multiple selectable voice presets in the panel.",
  },
  {
    title: "Screen-aware pointing",
    body: "Screenshot pixels are mapped back to OS coordinates so point tags and vision fallback land on the right display location.",
  },
  {
    title: "Explain shortcuts",
    body: "The panel supports explain-selected-text and explain-with-context flows, including clipboard fallback and in-memory caching.",
  },
  {
    title: "Web API surface",
    body: "The bundle exposes StudyBuddy.init(), viewport helpers, event listeners, selection mode, and direct fly-to helpers for pages.",
  },
];

export default function LandingFeatureSet() {
  return (
    <section id="features" className="section-shell px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Current feature set</p>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
            The implemented loop is capture, infer, point, and reply.
          </h2>
          <p className="section-copy mt-4 max-w-2xl text-base sm:text-lg">
            This section reflects the current implementation rather than
            imagined product tiers. It matches the shipped panel, overlay
            behaviors, capture flow, and browser API surface.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {pipelineSteps.map(({ step, title, body }) => (
            <article
              key={step}
              className="surface-card rounded-[1.5rem] p-6 text-left"
            >
              <div className="mb-4 inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-bold tracking-[0.18em] text-accent2">
                {step}
              </div>
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="section-copy mt-2 text-sm">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map(({ title, body }) => (
            <article
              key={title}
              className="surface-card card-hover-glow relative overflow-hidden rounded-[1.6rem] p-6"
            >
              <div className="mb-5 h-11 w-11 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/14 to-accent3/10" />
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="section-copy mt-3 text-sm">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
