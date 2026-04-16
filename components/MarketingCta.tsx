import Link from "next/link";

export default function MarketingCta() {
  return (
    <section id="contact" className="px-6 pb-24 pt-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="surface-panel relative overflow-hidden rounded-[2rem] px-7 py-10 text-center md:px-10 md:py-12">
          <div className="subtle-glow left-10 top-6 h-24 w-24 bg-accent/18" />
          <div className="subtle-glow bottom-8 right-10 h-24 w-24 bg-accent3/12" />

          <div className="relative">
            <p className="eyebrow mb-4">Get started</p>
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-[-0.04em] text-white md:text-4xl">
              Start free, go Pro, or talk to us about Enterprise.
            </h2>
            <p className="section-copy mx-auto mt-4 max-w-2xl text-base">
              Whether you want personal help every day or rollout information
              for a larger team, Diwara AI can fit the way you work.
            </p>
          </div>

          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="#pricing"
              className="button-primary inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all sm:w-auto"
            >
              Start free
            </Link>
            <Link
              href="#pricing"
              className="button-secondary inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all sm:w-auto"
            >
              Compare plans
            </Link>
            <Link
              href="#pricing"
              className="button-secondary inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all sm:w-auto"
            >
              Contact us for Enterprise
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
