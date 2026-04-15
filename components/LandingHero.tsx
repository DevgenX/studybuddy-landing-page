import Link from "next/link";

const highlights = [
  "Electron overlay + control panel",
  "Browser IIFE and ESM library",
  "OpenAI inference and TTS",
  "AssemblyAI speech transcription",
];

export default function LandingHero() {
  return (
    <section className="section-shell relative overflow-hidden px-6 pb-24 pt-32 md:px-10 md:pb-28 md:pt-36">
      <div className="subtle-glow left-[8%] top-28 h-28 w-28 bg-accent/20" />
      <div className="subtle-glow right-[10%] top-44 h-32 w-32 bg-accent3/15" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <div className="info-pill mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse2" />
            Desktop-first cursor assistant
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
            A cursor assistant that can
            <span className="text-gradient"> see, speak, and point.</span>
          </h1>

          <p className="section-copy mt-6 max-w-2xl text-base sm:text-lg">
            StudyBuddy ships one shared overlay renderer across
            two targets: an Electron desktop runtime and a browser library.
            What is implemented today includes screen capture, chat-plus-voice
            control, point-tag navigation, explain shortcuts, OpenAI inference,
            AssemblyAI transcription, and spoken replies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#features"
              className="button-primary inline-flex items-center rounded-full px-6 py-3 text-sm font-bold transition-all"
            >
              Explore feature set
            </Link>
            <Link
              href="#delivery"
              className="button-secondary inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-all"
            >
              View delivery modes
            </Link>
            <Link
              href="#panel"
              className="button-secondary inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-all"
            >
              See the panel
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="info-pill rounded-full px-4 py-2 text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="surface-panel relative overflow-hidden rounded-[2rem] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="tiny-kicker">Electron desktop runtime</p>
                <h2 className="mt-1 text-xl font-bold text-white">
                  Overlay + panel + capture loop
                </h2>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                tray | panel | overlay
              </div>
            </div>

            <div className="monitor-grid relative h-[26rem] overflow-hidden rounded-[1.5rem] border border-white/6 p-4">
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 520 420"
                aria-hidden="true"
              >
                <path
                  className="flight-path"
                  d="M110 290C160 180 240 230 286 160C334 88 422 98 444 146"
                />
              </svg>

              <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-4">
                <div className="rounded-[1.3rem] border border-white/8 bg-[#0b1524]/85 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="h-2.5 w-24 rounded-full bg-accent/30" />
                    <div className="rounded-full bg-accent3/15 px-2 py-1 text-[0.65rem] font-semibold text-accent3">
                      capture
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-16 rounded-2xl border border-white/6 bg-faint/80" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-28 rounded-2xl border border-white/6 bg-faint/60" />
                      <div className="h-28 rounded-2xl border border-white/6 bg-faint/60" />
                    </div>
                    <div className="rounded-2xl border border-white/6 bg-[#10243a]/70 p-3">
                      <div className="mb-2 h-2 w-28 rounded-full bg-white/10" />
                      <div className="space-y-2">
                        <div className="h-2 rounded-full bg-white/6" />
                        <div className="h-2 w-5/6 rounded-full bg-white/6" />
                        <div className="h-2 w-2/3 rounded-full bg-white/6" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-[1.3rem] border border-white/8 bg-[#08111d]/88 p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#f87171]" />
                    <span className="h-2 w-2 rounded-full bg-[#fbbf24]" />
                    <span className="h-2 w-2 rounded-full bg-[#34d399]" />
                    <div className="ml-2 h-2 flex-1 rounded-full bg-white/8" />
                  </div>

                  <div className="prompt-bubble ml-auto max-w-[13rem] rounded-2xl rounded-tr-md px-3 py-2 text-xs leading-6 text-white/90">
                    Use voice mode, inspect the screen, then point at the
                    settings control.
                  </div>

                  <div className="prompt-bubble mt-20 max-w-[12rem] rounded-2xl rounded-tl-md px-3 py-2 text-xs leading-6 text-accent2">
                    [POINT:734,412:settings]
                  </div>

                  <div className="triangle-cursor absolute left-[46%] top-[34%] h-10 w-9 -rotate-[18deg] rounded-md" />

                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/8 bg-white/5 p-3">
                    <div className="tiny-kicker">Default shortcuts</div>
                    <div className="mt-2 flex flex-wrap gap-2 text-[0.72rem] text-white/85">
                      <span className="rounded-full bg-black/25 px-2 py-1">
                        Ctrl+Alt+Space
                      </span>
                      <span className="rounded-full bg-black/25 px-2 py-1">
                        Ctrl+Alt+C
                      </span>
                      <span className="rounded-full bg-black/25 px-2 py-1">
                        Ctrl+Shift+E
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="code-panel rounded-[1.7rem] p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="tiny-kicker">Browser embed</p>
                  <h2 className="mt-1 text-lg font-bold text-white">
                    One overlay, shipped as a library
                  </h2>
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-[0.65rem] text-muted">
                  IIFE + ESM
                </div>
              </div>
              <pre className="overflow-x-auto text-[0.8rem] leading-7 text-[#cfe4fb]">
{`<script src="https://unpkg.com/studybuddy/dist/studybuddy.iife.js"></script>
<script>
  const buddy = StudyBuddy.init();
  buddy.flyToElement(button, "save");
  buddy.startSelection();
</script>`}
              </pre>
            </div>

            <div className="surface-card rounded-[1.7rem] p-5">
              <p className="tiny-kicker">Implementation view</p>
              <div className="mt-3 space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    The page now mirrors the current product surface.
                  </h3>
                  <p className="section-copy mt-2 text-sm">
                    Unsupported commercial claims, pricing tiers, Claude
                    branding, MCP tooling, and generic integration badges were
                    removed. The landing page now tracks the implemented
                    renderer, panel, capture, voice, and explain flows.
                  </p>
                </div>
                <div className="soft-divider" />
                <div className="grid gap-3 text-sm text-white/85">
                  <div className="flex items-center justify-between">
                    <span>Primary mode</span>
                    <span className="text-muted">Desktop assistant</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Desktop stack</span>
                    <span className="text-muted">Electron + React + Vite</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Inference stack</span>
                    <span className="text-muted">OpenAI + AssemblyAI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
