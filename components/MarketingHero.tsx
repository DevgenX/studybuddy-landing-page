import StudyBuddyCursorTriangle from "@/components/StudyBuddyCursorTriangle";
import Link from "next/link";

const highlightItems = [
  "Built-in AI chat without switching tabs",
  "Learn apps and tools step by step",
  "Copy text, then press explain",
  "Get help while you stay on task",
];

export default function MarketingHero() {
  return (
    <section className="section-shell relative overflow-hidden px-6 pb-24 pt-32 md:px-10 md:pb-28 md:pt-36">
      <div className="subtle-glow left-[8%] top-28 h-28 w-28 bg-accent/20" />
      <div className="subtle-glow right-[10%] top-44 h-32 w-32 bg-accent3/15" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <div className="info-pill mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse2" />
            AI help that stays on your screen
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
            Learn everything
            <br />
            with AI assistant
            <br />
            <span className="text-gradient">that lives on your screen.</span>
          </h1>

          <p className="section-copy mt-6 max-w-2xl text-base sm:text-lg">
            Diwara AI features a built-in side chat window where users can talk
            to the AI without leaving their workflow. It delivers a
            ChatGPT-like experience inside the app, making it easy to ask
            questions, explain copied text, and get on-screen guidance without
            switching tabs.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#pricing"
              className="button-primary inline-flex items-center rounded-full px-6 py-3 text-sm font-bold transition-all"
            >
              Start free
            </Link>
            <Link
              href="#features"
              className="button-secondary inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-all"
            >
              See features
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {highlightItems.map((item) => (
              <div
                key={item}
                className="info-pill rounded-full px-4 py-2 text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="tiny-kicker">Diwara AI in action</p>
              <h2 className="mt-1 text-xl font-bold text-white">
                One assistant for study, work, and everyday tasks
              </h2>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
              desktop and web
            </div>
          </div>

          <div className="monitor-grid relative flex min-h-[38rem] flex-col gap-4 overflow-hidden rounded-[1.5rem] border border-white/6 p-3 sm:min-h-[30rem] sm:p-4 lg:h-[26rem] lg:min-h-0">
            <div className="relative rounded-[1.4rem] border border-white/8 bg-[#0b1524]/85 p-4 sm:absolute sm:left-5 sm:right-[38%] sm:top-5">
              <div className="mb-3 h-2.5 w-28 rounded-full bg-accent/25" />
              <div className="space-y-2">
                <div className="h-2 rounded-full bg-white/8" />
                <div className="h-2 w-11/12 rounded-full bg-white/8" />
                <div className="h-2 w-10/12 rounded-full bg-white/8" />
                <div className="h-2 w-3/4 rounded-full bg-accent3/25" />
                <div className="h-2 w-4/5 rounded-full bg-accent3/25" />
                <div className="h-2 w-11/12 rounded-full bg-white/8" />
              </div>
              <div className="mt-4 rounded-2xl border border-accent3/20 bg-accent3/10 px-3 py-2 text-xs text-[#f7d48a]">
                Copied text: "What does this mean?"
              </div>
            </div>

            <div className="relative rounded-[1.4rem] border border-white/8 bg-[#08111d]/88 p-4 sm:absolute sm:left-auto sm:right-5 sm:top-5 sm:w-[34%]">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f87171]" />
                <span className="h-2 w-2 rounded-full bg-[#fbbf24]" />
                <span className="h-2 w-2 rounded-full bg-[#34d399]" />
              </div>
              <div className="space-y-3">
                <div className="prompt-bubble rounded-2xl rounded-tr-md px-3 py-2 text-xs leading-6 text-white/90">
                  Explain this in simple words.
                </div>
                <div className="prompt-bubble rounded-2xl rounded-tl-md px-3 py-2 text-xs leading-6 text-accent2">
                  It means the cell is getting ready to split into two new
                  cells.
                </div>
              </div>
            </div>

            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
              viewBox="0 0 520 420"
              aria-hidden="true"
            >
              <path
                className="flight-path"
                d="M120 290C165 230 235 210 278 178C325 143 372 128 410 115"
              />
            </svg>

            <StudyBuddyCursorTriangle className="absolute left-[47%] top-[43%] hidden h-10 w-9 -rotate-[18deg] sm:block" />

            <div className="relative mt-auto grid gap-3 sm:absolute sm:bottom-5 sm:left-5 sm:right-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                <div className="tiny-kicker">Ask</div>
                <p className="mt-1 text-sm text-white/85">
                  Press a shortcut, then chat or talk
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                <div className="tiny-kicker">Learn</div>
                <p className="mt-1 text-sm text-white/85">
                  Get simple help for text, tools, and tasks
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                <div className="tiny-kicker">Follow</div>
                <p className="mt-1 text-sm text-white/85">
                  See what to click or where to look next
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
