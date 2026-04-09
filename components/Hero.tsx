import Link from "next/link";
import BuddySVG from "./BuddySVG";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-7 text-xs font-bold text-accent2 uppercase tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-accent2 animate-pulse2" />
        AI-Powered Study Companion
      </div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 max-w-3xl">
        Your AI Buddy<br />
        <span className="text-gradient">on Every Screen</span>
      </h1>

      {/* Sub */}
      <p className="text-muted text-lg md:text-xl max-w-xl mb-11 leading-relaxed font-normal">
        StudyBuddy lives as an animated companion on your desktop or any webpage.
        It follows your cursor, reads what you&apos;re studying, and answers questions —
        without breaking your flow.
      </p>

      {/* CTAs */}
      <div className="flex gap-3.5 flex-wrap justify-center">
        <Link
          href="#pricing"
          className="inline-flex items-center gap-2 bg-gradient-to-br from-accent to-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl text-base shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 transition-all"
        >
          ✦ Start for Free
        </Link>
        <Link
          href="#features"
          className="inline-flex items-center gap-2 bg-transparent border border-indigo-glow text-white font-semibold px-8 py-3.5 rounded-xl text-base hover:border-accent hover:bg-accent/8 transition-all"
        >
          See all features →
        </Link>
      </div>

      {/* Mock screen */}
      <div className="mt-12 sm:mt-16 w-full max-w-[780px] aspect-[780/420] relative">
        <div className="w-full h-full bg-surface border border-indigo-glow rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6),0_0_0_1px_rgba(99,102,241,0.1)] relative">

          {/* Window bar */}
          <div className="h-7 sm:h-9 bg-surface2 border-b border-indigo-glow flex items-center px-2.5 sm:px-3.5 gap-1.5">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 sm:ml-4 flex-1 h-4 sm:h-5 bg-faint rounded-md opacity-60" />
          </div>

          {/* Content area */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 p-3 sm:p-6 h-[calc(100%-28px)] sm:h-[calc(100%-36px)]">
            {[0, 1].map((i) => (
              <div key={i} className="bg-faint rounded-lg sm:rounded-xl p-3 sm:p-5 border border-indigo-glow flex flex-col gap-1.5 sm:gap-2.5">
                <div className="h-2 sm:h-2.5 rounded-full bg-accent/35 w-2/5" />
                <div className="h-2 sm:h-2.5 rounded-full bg-white/10 w-11/12" />
                <div className="h-2 sm:h-2.5 rounded-full bg-white/10 w-3/4" />
                <div className="h-2 sm:h-2.5 rounded-full bg-white/10 w-4/5" />
                <div className="h-2 sm:h-2.5 rounded-full bg-white/10 w-1/2" />
              </div>
            ))}
          </div>

          {/* Animated buddy */}
          <div className="absolute w-[36px] h-[36px] sm:w-[54px] sm:h-[54px] buddy-glow animate-buddy-float pointer-events-none z-10 hidden sm:block">
            <BuddySVG />
          </div>

          {/* Speech bubble */}
          <div className="absolute bg-surface border border-indigo-glow rounded-xl px-2.5 py-2 sm:px-3.5 sm:py-2.5 text-[10px] sm:text-xs text-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.4)] max-w-[140px] sm:max-w-[190px] leading-snug z-10 animate-speech-float pointer-events-none hidden sm:block">
            💡 &quot;Mitochondria is the powerhouse of the cell!&quot;
          </div>
        </div>
      </div>
    </section>
  );
}
