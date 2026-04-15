import Link from "next/link";

const comparisonRows = [
  { label: "Questions each day", free: "20", pro: "Unlimited", enterprise: "Unlimited" },
  { label: "Voice help", free: "5 min/day", pro: "Unlimited", enterprise: "Unlimited" },
  { label: "Copy and explain", free: true, pro: true, enterprise: true },
  { label: "Screen-aware help", free: false, pro: true, enterprise: true },
  { label: "Desktop helper", free: false, pro: true, enterprise: true },
  { label: "Browser support", free: true, pro: true, enterprise: true },
  { label: "Priority support", free: false, pro: true, enterprise: true },
  { label: "Team rollout help", free: false, pro: false, enterprise: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-emerald-400">Yes</span>;
  if (value === false) return <span className="text-red-300">No</span>;
  return <span className="text-[#d8e7fa]">{value}</span>;
}

export default function MarketingPricing() {
  return (
    <section id="pricing" className="section-shell px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <p className="eyebrow mb-4">Pricing</p>
        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
          Simple plans for individuals and teams.
        </h2>
        <p className="section-copy mx-auto mt-4 max-w-2xl text-base sm:text-lg">
          Start with the free tier. Upgrade when you want more questions, more
          voice time, and the full desktop experience.
        </p>

        <div className="mt-14 grid gap-6 text-left lg:grid-cols-3">
          <article className="surface-card rounded-[1.8rem] p-8">
            <p className="tiny-kicker">Free</p>
            <div className="mt-3 text-5xl font-black tracking-tight text-white">
              $0
              <span className="ml-2 text-base font-medium text-muted">/mo</span>
            </div>
            <p className="section-copy mt-4 text-sm">
              A simple place to start if you want to try Diwara AI.
            </p>
            <Link
              href="#contact"
              className="button-secondary mt-7 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all"
            >
              Start free
            </Link>
            <div className="mt-7 space-y-3 text-sm text-white/90">
              <div>20 questions each day</div>
              <div>5 minutes of voice help each day</div>
              <div>Copy and explain</div>
              <div>Browser support</div>
            </div>
          </article>

          <article className="surface-panel rounded-[1.8rem] p-8">
            <div className="flex items-center justify-between gap-3">
              <p className="tiny-kicker">Pro</p>
              <div className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent2">
                Most popular
              </div>
            </div>
            <div className="mt-3 text-5xl font-black tracking-tight text-white">
              $12
              <span className="ml-2 text-base font-medium text-muted">/mo</span>
            </div>
            <p className="section-copy mt-4 text-sm">
              Best for people who want Diwara AI every day.
            </p>
            <Link
              href="#contact"
              className="button-primary mt-7 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition-all"
            >
              Upgrade to Pro
            </Link>
            <div className="mt-7 space-y-3 text-sm text-white/90">
              <div>Unlimited questions</div>
              <div>Unlimited voice help</div>
              <div>Full desktop helper</div>
              <div>Screen-aware answers and pointing</div>
              <div>Priority support</div>
            </div>
          </article>

          <article className="surface-card rounded-[1.8rem] p-8">
            <p className="tiny-kicker">Enterprise</p>
            <div className="mt-3 text-5xl font-black tracking-tight text-white">
              Custom
            </div>
            <p className="section-copy mt-4 text-sm">
              For schools, teams, and larger rollouts that need custom pricing
              or setup help.
            </p>
            <Link
              href="#contact"
              className="button-secondary mt-7 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all"
            >
              Contact us
            </Link>
            <div className="mt-7 space-y-3 text-sm text-white/90">
              <div>Custom pricing</div>
              <div>Team onboarding help</div>
              <div>Priority support</div>
              <div>Custom rollout planning</div>
            </div>
          </article>
        </div>

        <div className="surface-card mt-10 overflow-x-auto rounded-[1.8rem] p-4 text-left md:p-6">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b border-indigo-glow px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  Feature
                </th>
                <th className="border-b border-indigo-glow px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  Free
                </th>
                <th className="border-b border-indigo-glow px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  Pro
                </th>
                <th className="border-b border-indigo-glow px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(({ label, free, pro, enterprise }) => (
                <tr key={label} className="hover:bg-white/[0.02]">
                  <td className="border-b border-white/6 px-4 py-3 text-muted">
                    {label}
                  </td>
                  <td className="border-b border-white/6 px-4 py-3">
                    <Cell value={free} />
                  </td>
                  <td className="border-b border-white/6 px-4 py-3">
                    <Cell value={pro} />
                  </td>
                  <td className="border-b border-white/6 px-4 py-3">
                    <Cell value={enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
