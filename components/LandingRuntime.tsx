const runtimeCards = [
  {
    title: "Shared renderer",
    body: "The source tree keeps one overlay renderer in src/ and uses it in both the Electron runtime and the browser bundle.",
  },
  {
    title: "Electron runtime",
    body: "Desktop mode adds the tray app, control panel, global shortcuts, screen capture, speech transcription, inference, and spoken replies.",
  },
  {
    title: "Browser library",
    body: "Web mode exposes StudyBuddy.init(), flyToElement(), voice-state visuals, selection mode, viewport helpers, and event listeners.",
  },
  {
    title: "Build outputs",
    body: "Both delivery modes are maintained as first-class targets: the desktop assistant and the embeddable browser runtime.",
  },
];

const desktopDetails = [
  "Tray, panel, and transparent overlay window",
  "Assistant, Voice, Shortcuts, Guide, Disclaimer, and Privacy pages",
  "Capture current screen or all screens before inference",
  "Global push-to-talk and overlay visibility shortcuts",
];

const embedDetails = [
  "CDN-friendly IIFE bundle and npm-friendly ESM build",
  "flyTo, flyToAnchor, flyToElement, flyToRandom APIs",
  "startSelection() for click-drag DOM capture",
  "show(), hide(), destroy(), and event bus hooks",
];

export default function LandingRuntime() {
  return (
    <section id="runtime" className="section-shell px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Runtime layout</p>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
            Two targets, one shared overlay renderer.
          </h2>
          <p className="section-copy mt-4 max-w-2xl text-base sm:text-lg">
            The app is better described as a cursor-assistant platform than a
            generic student SaaS. The current build centers on a real runtime
            split: desktop services in Electron, overlay rendering in shared
            React code, and an embeddable browser API for page-level use.
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="surface-card rounded-[1.8rem] p-7">
            <p className="tiny-kicker">Desktop runtime</p>
            <h3 className="mt-2 text-2xl font-bold text-white">
              Tray, panel, overlay, capture, and voice orchestration
            </h3>
            <p className="section-copy mt-3 text-sm">
              The Electron side owns the desktop-specific work: windows,
              shortcuts, screenshots, inference plumbing, transcription, TTS,
              and settings persistence.
            </p>
            <div className="mt-6 grid gap-3">
              {desktopDetails.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[1.8rem] p-7">
            <p className="tiny-kicker">Browser bundle</p>
            <h3 className="mt-2 text-2xl font-bold text-white">
              Drop-in overlay for any page
            </h3>
            <p className="section-copy mt-3 text-sm">
              The library build keeps the cursor companion usable without the
              desktop service layer. It mounts a fixed overlay, exposes flight
              APIs, and stays pointer-events-none so it does not interfere with
              the page underneath.
            </p>
            <div className="mt-6 grid gap-3">
              {embedDetails.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {runtimeCards.map(({ title, body }) => (
            <article
              key={title}
              className="surface-card rounded-[1.5rem] p-6 text-left"
            >
              <div className="mb-4 h-10 w-10 rounded-2xl border border-accent/25 bg-accent/10" />
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="section-copy mt-2 text-sm">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
