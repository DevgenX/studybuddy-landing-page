const steps = [
  {
    num: "01",
    title: "Open Diwara AI",
    body: "Use a shortcut to open the assistant. It stays on screen so you can keep doing your work.",
  },
  {
    num: "02",
    title: "Ask for help",
    body: "Ask a question by chat or voice, or copy text when you want a simple explanation.",
  },
  {
    num: "03",
    title: "Get on-screen guidance",
    body: "Diwara AI can look at what is on screen, point to the right place, and guide you step by step.",
  },
  {
    num: "04",
    title: "Keep moving",
    body: "Read the answer, hear it out loud, and keep learning or working without switching tabs.",
  },
];

export default function MarketingHowItWorks() {
  return (
    <section id="how-it-works" className="section-shell px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <p className="eyebrow mb-4">How it works</p>
        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
          Built for everyday learning and work.
        </h2>
        <p className="section-copy mx-auto mt-4 max-w-2xl text-base sm:text-lg">
          You do not need extra tools or long setup. Open Diwara AI, ask for
          help, and stay focused on what you are doing.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ num, title, body }) => (
            <article
              key={num}
              className="surface-card rounded-[1.6rem] p-7 text-left"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-sm font-extrabold text-accent2">
                {num}
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
