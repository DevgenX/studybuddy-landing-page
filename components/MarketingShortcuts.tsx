const shortcuts = [
  {
    keys: "Ctrl + Alt + C",
    title: "Show or hide Diwara AI",
    body: "Open or close the assistant without leaving your screen.",
  },
  {
    keys: "Ctrl + Alt + Space",
    title: "Talk with your voice",
    body: "Hold this when you want to speak instead of type.",
  },
  {
    keys: "Ctrl + Shift + E",
    title: "Explain copied text",
    body: "Copy or highlight text first, then press this to get a simple explanation.",
  },
  {
    keys: "Ctrl + Alt + E",
    title: "Explain with more context",
    body: "Use this when you want a deeper explanation based on what is on screen.",
  },
];

export default function MarketingShortcuts() {
  return (
    <section className="section-shell px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="eyebrow mb-4">Popular shortcuts</p>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
            Open features with a few keys.
          </h2>
          <p className="section-copy mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Diwara AI works through shortcuts. Copy or highlight text, press
            the right keys, and get help right away.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {shortcuts.map(({ keys, title, body }) => (
            <article
              key={title}
              className="surface-card rounded-[1.6rem] p-6 text-left"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-accent/25 bg-accent/10 px-4 py-2">
                <kbd className="text-sm font-bold tracking-[0.08em] text-accent2">
                  {keys}
                </kbd>
              </div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="section-copy mt-3 text-sm">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
