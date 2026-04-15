export default function LandingQuickStart() {
  return (
    <section id="delivery" className="px-6 pb-24 pt-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="surface-panel relative overflow-hidden rounded-[2rem] px-7 py-10 md:px-10 md:py-12">
          <div className="subtle-glow left-10 top-6 h-24 w-24 bg-accent/18" />
          <div className="subtle-glow bottom-8 right-10 h-24 w-24 bg-accent3/12" />

          <div className="relative">
            <p className="eyebrow mb-4">Delivery modes</p>
            <h2 className="max-w-3xl text-3xl font-extrabold tracking-[-0.04em] text-white md:text-4xl">
              The product ships in two concrete modes.
            </h2>
            <p className="section-copy mt-4 max-w-2xl text-base">
              The landing page now focuses on how StudyBuddy is delivered rather
              than exposing internal engineering workflows. Both modes share the
              same visual language and cursor behavior.
            </p>
          </div>

          <div className="relative mt-8 grid gap-4 lg:grid-cols-2">
            <div className="surface-card rounded-[1.5rem] p-5">
              <p className="tiny-kicker">Desktop assistant</p>
              <h3 className="mt-3 text-xl font-bold text-white">
                System-wide overlay with panel, voice, and capture
              </h3>
              <p className="section-copy mt-3 text-sm">
                This is the primary StudyBuddy experience: tray app, assistant
                panel, global shortcuts, multi-screen capture, point-aware
                responses, and spoken output.
              </p>
            </div>

            <div className="surface-card rounded-[1.5rem] p-5">
              <p className="tiny-kicker">Embedded browser mode</p>
              <h3 className="mt-3 text-xl font-bold text-white">
                Cursor companion for approved page-level integrations
              </h3>
              <p className="section-copy mt-3 text-sm">
                Browser mode keeps the overlay behavior, movement system,
                selection tools, and flight API surface for pages that embed
                StudyBuddy directly.
              </p>
            </div>
          </div>

          <div className="relative mt-8 flex flex-wrap gap-3">
            <a
              href="#runtime"
              className="button-primary inline-flex items-center rounded-full px-6 py-3 text-sm font-bold transition-all"
            >
              Review runtime architecture
            </a>
            <a
              href="#panel"
              className="button-secondary inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-all"
            >
              Inspect panel capabilities
            </a>
            <a
              href="#faq"
              className="button-secondary inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-all"
            >
              Read implementation notes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
