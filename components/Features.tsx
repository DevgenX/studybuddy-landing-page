"use client";

import { useState, useEffect, useRef } from "react";

const features = [
  {
    icon: "🎯",
    title: "Spring-Physics Cursor Following",
    body: "The buddy tracks your cursor using a real damped spring (response 0.2, damping 0.6) — not a CSS trick. Smooth, natural, non-distracting.",
  },
  {
    icon: "✈️",
    title: "Bezier Flight Navigation",
    body: "When you point to content, the buddy flies there along a quadratic bezier arc with Hermite-smoothed easing and directional rotation. Feels alive.",
  },
  {
    icon: "💬",
    title: "Streaming Speech Bubbles",
    body: "Answers stream word-by-word in a floating bubble right next to what you're looking at. No modals, no popups, no focus breaks.",
  },
  {
    icon: "🎙️",
    title: "Voice I/O — Talk to Your Buddy",
    body: "Full STT + TTS pipeline. Ask out loud and hear the answer. The waveform visualization responds to your audio level in real time.",
  },
  {
    icon: "📸",
    title: "Screen Context Capture",
    body: "On desktop, the buddy sees your screen. It understands diagrams, equations, code, and dense text — and answers in context, not in a vacuum.",
  },
  {
    icon: "🔌",
    title: "Element Selector & Fly-To API",
    body: "Click any DOM element to send the buddy flying to it. Developers can also call buddy.flyToElement(el) directly from their own code.",
  },
  {
    icon: "🌐",
    title: "Zero-Config Browser Embed",
    body: 'One <script src="studybuddy.iife.js"> tag. No build steps, no framework requirements, zero dependencies. Drop it and go.',
  },
  {
    icon: "🖥️",
    title: "Native Desktop Overlay",
    body: "The Electron app renders a 320×80 transparent, always-on-top, click-through window that lives above every app on every workspace.",
  },
  {
    icon: "🧩",
    title: "MCP Tool Integration",
    body: "Connect external tools via the Model Context Protocol. Let StudyBuddy search the web, run calculations, or call APIs mid-session.",
  },
  {
    icon: "🤖",
    title: "Claude AI Backbone",
    body: "Powered by Anthropic's Claude — one of the most capable and safety-focused AI models — for accurate, nuanced study assistance.",
  },
  {
    icon: "🎨",
    title: "Theming & Customisation",
    body: "Change the buddy's appearance, colors, and behavior from the built-in control panel. Make it yours without touching code.",
  },
  {
    icon: "📋",
    title: "Session Logging",
    body: "Every study session is automatically logged so you can review what you asked, what was answered, and how your understanding grew.",
  },
];

// ─── Study Demo ────────────────────────────────────────────────────────────────

const STUDY_WORDS = [
  "Mitosis", "is", "the", "process", "where", "a", "cell",
  "duplicates", "its", "DNA", "and", "divides", "into", "two",
  "identical", "daughter", "cells.", "It", "has", "four", "stages:",
  "prophase,", "metaphase,", "anaphase,", "and", "telophase. ✓",
];
const STUDY_STEPS = [
  { label: "Reading document…",       duration: 1200 },
  { label: "Highlight detected",      duration: 1000 },
  { label: "Buddy flying to content…",duration: 1200 },
  { label: "Streaming answer…",       duration: 3200 },
  { label: "done",                    duration: 0 },
];

function StudyDemo() {
  const [phase, setPhase]       = useState(-1);
  const [wordIdx, setWordIdx]   = useState(0);
  const [buddyPos, setBuddyPos] = useState({ x: 85, y: 75 });
  const wordTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  function start() { setPhase(0); setWordIdx(0); setBuddyPos({ x: 85, y: 75 }); }
  function reset() {
    if (wordTimer.current) clearInterval(wordTimer.current);
    setPhase(-1); setWordIdx(0); setBuddyPos({ x: 85, y: 75 });
  }

  useEffect(() => {
    if (phase < 0 || phase >= STUDY_STEPS.length - 1) return;
    const { duration } = STUDY_STEPS[phase];
    if (!duration) return;
    const t = setTimeout(() => setPhase(p => p + 1), duration);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => { if (phase === 2) setBuddyPos({ x: 55, y: 36 }); }, [phase]);

  useEffect(() => {
    if (phase !== 3) return;
    wordTimer.current = setInterval(() => {
      setWordIdx(i => {
        if (i >= STUDY_WORDS.length - 1) { clearInterval(wordTimer.current!); setPhase(4); return i; }
        return i + 1;
      });
    }, 110);
    return () => clearInterval(wordTimer.current!);
  }, [phase]);

  const isPlaying     = phase >= 0;
  const showHighlight = phase >= 1;
  const showBubble    = phase >= 3;

  return (
    <div className="relative aspect-video bg-gradient-to-br from-[#0d0d1a] via-[#11112a] to-[#0a0a1f] overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(99,102,241,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.4) 1px,transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Document */}
      <div className="absolute left-3 sm:left-6 top-3 sm:top-6 right-[30%] sm:right-48 space-y-1.5 sm:space-y-2 pointer-events-none">
        <div className="text-[8px] sm:text-xs text-indigo-300/50 font-bold mb-2 sm:mb-3 tracking-widest uppercase truncate">Biology — Chapter 4: Cell Division</div>
        {[
          { w: "75%",  hi: false },
          { w: "100%", hi: false },
          { w: "85%",  hi: false },
          { w: "100%", hi: true  },
          { w: "80%",  hi: true  },
          { w: "65%",  hi: false },
          { w: "100%", hi: false },
          { w: "80%",  hi: false },
        ].map((line, i) => (
          <div key={i} className={`h-1.5 sm:h-2.5 rounded transition-all duration-500 ${line.hi && showHighlight ? "bg-indigo-400/60 shadow-sm shadow-indigo-400/40" : "bg-indigo-500/15"}`} style={{ width: line.w }} />
        ))}
        {showHighlight && <div className="mt-1 text-[8px] sm:text-[10px] text-indigo-400/80 animate-pulse">✦ &quot;What is mitosis?&quot;</div>}
      </div>

      {/* Buddy */}
      <div className="absolute w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-base sm:text-xl shadow-lg shadow-indigo-500/40 pointer-events-none z-10"
        style={{ right: `${100 - buddyPos.x}%`, top: `${buddyPos.y}%`, transition: "right 1.1s cubic-bezier(0.34,1.56,0.64,1),top 1.1s cubic-bezier(0.34,1.56,0.64,1)", transform: phase === 2 ? "rotate(-20deg)" : "rotate(0deg)" }}>
        🎓
      </div>

      {/* Speech bubble */}
      {showBubble && (
        <div className="absolute bg-[#1a1a3a] border border-indigo-500/50 rounded-xl sm:rounded-2xl rounded-tr-sm p-2 sm:p-3 shadow-xl text-left z-10 w-[35%] sm:w-[unset]"
          style={{ right: "6%", top: "10%", maxWidth: 200, animation: "fadeInUp 0.3s ease" }}>
          <p className="text-[9px] sm:text-xs text-indigo-100 leading-relaxed min-h-[40px] sm:min-h-[60px]">
            {STUDY_WORDS.slice(0, wordIdx + 1).join(" ")}
            {phase === 3 && <span className="inline-block w-0.5 h-3 bg-indigo-400 ml-0.5 animate-pulse align-middle" />}
          </p>
        </div>
      )}

      {/* Status bar */}
      {isPlaying && phase < STUDY_STEPS.length - 1 && (
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-2.5 sm:px-4 py-1 sm:py-1.5 max-w-[90%]">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-400 animate-pulse flex-shrink-0" />
          <span className="text-[9px] sm:text-xs text-white/70 truncate">{STUDY_STEPS[phase].label}</span>
        </div>
      )}
      {phase === 4 && (
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-indigo-600/30 backdrop-blur-sm border border-indigo-400/30 rounded-full px-2.5 sm:px-4 py-1 sm:py-1.5 max-w-[90%]">
          <span className="text-[9px] sm:text-xs text-indigo-300 font-semibold truncate">✓ Answer complete — no tab switching required</span>
        </div>
      )}

      {/* Play overlay */}
      {!isPlaying && (
        <button onClick={start} className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-4 group bg-black/20 hover:bg-black/10 transition-colors z-20">
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-indigo-600/90 backdrop-blur-sm border border-indigo-400/50 flex items-center justify-center shadow-2xl shadow-indigo-500/40 group-hover:bg-indigo-500 group-hover:scale-105 transition-all duration-200">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <span className="text-xs sm:text-sm text-white/70 font-medium group-hover:text-white/90 transition-colors">Play interactive demo</span>
        </button>
      )}

      {isPlaying && (
        <button onClick={reset} className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[10px] sm:text-xs text-white/40 hover:text-white/80 transition-colors bg-black/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-white/10 hover:border-white/30 z-20">↺ Reset</button>
      )}
    </div>
  );
}

// ─── Video Editor (Cinematic) Demo ─────────────────────────────────────────────

const CINEMATIC_STEPS = [
  // phase 0: user question types in
  { buddyX: 88, buddyY: 78, highlight: null,          label: "User asking StudyBuddy…" },
  // phase 1: buddy flies to Color Grading
  { buddyX: 82, buddyY: 22, highlight: "color",       label: "Step 1 — Apply a cinematic LUT" },
  // phase 2: apply LUT (preview tint changes), buddy stays
  { buddyX: 82, buddyY: 22, highlight: "lut",         label: "Applying Teal & Orange LUT…" },
  // phase 3: buddy flies to Letterbox
  { buddyX: 82, buddyY: 42, highlight: "letterbox",   label: "Step 2 — Add 2.35:1 letterbox bars" },
  // phase 4: buddy flies to Film Grain
  { buddyX: 82, buddyY: 60, highlight: "grain",       label: "Step 3 — Add subtle film grain" },
  // phase 5: done
  { buddyX: 82, buddyY: 60, highlight: "grain",       label: "done" },
];

const QUESTION_CHARS = "How do I make this video more cinematic?".split("");
const HINT_WORDS     = ["Here's", "how:", "apply", "a", "LUT,", "add", "letterbox", "bars,", "then", "film", "grain.", "I'll", "guide", "you", "step", "by", "step. ✓"];

function VideoEditorDemo() {
  const [phase, setPhase]         = useState(-1);
  const [qCharIdx, setQCharIdx]   = useState(0);
  const [hintWordIdx, setHintWordIdx] = useState(0);
  const qTimer   = useRef<ReturnType<typeof setInterval> | null>(null);
  const hTimer   = useRef<ReturnType<typeof setInterval> | null>(null);

  function start() { setPhase(0); setQCharIdx(0); setHintWordIdx(0); }
  function reset() {
    if (qTimer.current) clearInterval(qTimer.current);
    if (hTimer.current) clearInterval(hTimer.current);
    setPhase(-1); setQCharIdx(0); setHintWordIdx(0);
  }

  // Auto-advance phases
  const DURATIONS = [0, 1400, 1200, 1400, 1400, 0];
  useEffect(() => {
    if (phase < 0 || phase >= CINEMATIC_STEPS.length - 1) return;
    const d = DURATIONS[phase];
    if (!d) return;
    const t = setTimeout(() => setPhase(p => p + 1), d);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Phase 0: type the user question
  useEffect(() => {
    if (phase !== 0) return;
    qTimer.current = setInterval(() => {
      setQCharIdx(i => {
        if (i >= QUESTION_CHARS.length - 1) { clearInterval(qTimer.current!); setPhase(1); return i; }
        return i + 1;
      });
    }, 45);
    return () => clearInterval(qTimer.current!);
  }, [phase]);

  // Phase 1 onwards: stream hint words
  useEffect(() => {
    if (phase !== 1) return;
    hTimer.current = setInterval(() => {
      setHintWordIdx(i => {
        if (i >= HINT_WORDS.length - 1) { clearInterval(hTimer.current!); return i; }
        return i + 1;
      });
    }, 120);
    return () => clearInterval(hTimer.current!);
  }, [phase]);

  const isPlaying = phase >= 0;
  const cur       = phase >= 0 ? CINEMATIC_STEPS[Math.min(phase, CINEMATIC_STEPS.length - 1)] : null;
  const showLUT       = phase >= 2;
  const showLetterbox = phase >= 3;

  return (
    <div className="relative aspect-video overflow-hidden bg-[#0d0d14]">
      {/* ── Video preview (left ~60%) ── */}
      <div className="absolute left-0 top-0 bottom-0 right-0 sm:right-[34%]">
        {/* sky gradient scene */}
        <div className={`absolute inset-0 transition-all duration-1000 ${showLUT ? "bg-gradient-to-b from-[#0a1a2e] via-[#112233] to-[#0d1a0d]" : "bg-gradient-to-b from-[#1a2a3a] via-[#223344] to-[#1a2420]"}`}>
          {/* Moon */}
          <div className={`absolute top-[14%] left-[18%] w-6 h-6 sm:w-10 sm:h-10 rounded-full transition-all duration-1000 ${showLUT ? "bg-amber-200/80 shadow-lg shadow-amber-200/30" : "bg-yellow-100/60"}`} />
          {/* City silhouette */}
          <div className="absolute bottom-[28%] left-0 right-0 flex items-end gap-[2px] px-2 pointer-events-none">
            {[28,44,36,52,32,40,24,48,34,42,30,50,38].map((h, i) => (
              <div key={i} className={`flex-1 transition-all duration-1000 ${showLUT ? "bg-[#071014]" : "bg-[#0d1a1a]"}`} style={{ height: `${h}%` }}>
                {/* windows */}
                <div className="grid grid-cols-2 gap-px p-0.5 h-full">
                  {Array.from({ length: Math.ceil(h / 10) }).map((_, j) => (
                    <div key={j} className={`w-full h-1 sm:h-1.5 rounded-[1px] transition-colors duration-1000 ${showLUT ? "bg-amber-400/30" : "bg-yellow-300/20"}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Ground */}
          <div className={`absolute bottom-0 left-0 right-0 h-[28%] transition-all duration-1000 ${showLUT ? "bg-gradient-to-t from-[#040d08] to-[#071410]" : "bg-gradient-to-t from-[#0a1208] to-[#101c14]"}`} />
          {/* Teal color grade overlay */}
          {showLUT && <div className="absolute inset-0 bg-teal-900/20 mix-blend-color pointer-events-none" />}
          {/* LUT applied badge */}
          {showLUT && (
            <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-teal-500/20 border border-teal-400/40 rounded-full px-1.5 sm:px-2 py-0.5 text-[7px] sm:text-[9px] text-teal-300 font-semibold" style={{ animation: "fadeInUp 0.3s ease" }}>
              ✓ Teal & Orange LUT
            </div>
          )}
        </div>

        {/* Letterbox bars */}
        <div className={`absolute left-0 right-0 top-0 bg-black transition-all duration-700 ${showLetterbox ? "h-[12%]" : "h-0"}`} />
        <div className={`absolute left-0 right-0 bottom-0 bg-black transition-all duration-700 ${showLetterbox ? "h-[12%]" : "h-0"}`} />
        {showLetterbox && (
          <div className="absolute top-[13%] left-1.5 sm:left-2 bg-orange-500/20 border border-orange-400/40 rounded-full px-1.5 sm:px-2 py-0.5 text-[7px] sm:text-[9px] text-orange-300 font-semibold" style={{ animation: "fadeInUp 0.3s ease" }}>
            ✓ 2.35:1 letterbox
          </div>
        )}

        {/* Timeline strip at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-5 sm:h-8 bg-[#0a0a18] border-t border-white/5 flex items-center px-1 sm:px-2 gap-0.5 sm:gap-1">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className={`flex-1 h-2.5 sm:h-4 rounded-sm ${i < 12 ? "bg-indigo-600/40" : "bg-white/5"}`} />
          ))}
          {/* playhead */}
          <div className="absolute left-[42%] top-0 bottom-0 w-px bg-red-500/80" />
        </div>

        {/* Cursor indicator */}
        {isPlaying && phase === 0 && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-4 h-4 border-2 border-white/60 rounded-full animate-ping" />
          </div>
        )}
      </div>

      {/* ── Effects panel (right ~34%) — hidden on mobile, shown sm+ ── */}
      <div className="absolute top-0 bottom-0 right-0 w-[34%] bg-[#111120] border-l border-white/5 hidden sm:flex flex-col">
        <div className="px-2 md:px-3 py-1.5 md:py-2 text-[8px] md:text-[10px] font-bold tracking-widest uppercase text-white/30 border-b border-white/5">Effects</div>

        {[
          { id: "color",     icon: "🎨", label: "Color Grading",  sub: "Wheels · Curves" },
          { id: "lut",       icon: "🎞️", label: "Apply LUT",      sub: "Teal & Orange · VSCO" },
          { id: "letterbox", icon: "⬛", label: "Letterbox",       sub: "2.35:1 · 2.39:1 · 1.85:1" },
          { id: "grain",     icon: "📽️", label: "Film Grain",      sub: "Intensity · Size · Animate" },
          { id: "blur",      icon: "🔭", label: "Lens Blur",       sub: "F-stop · Bokeh shape" },
          { id: "vignette",  icon: "🌑", label: "Vignette",        sub: "Feather · Opacity" },
        ].map(({ id, icon, label, sub }) => {
          const isActive = cur?.highlight === id;
          return (
            <div key={id} className={`mx-1 md:mx-2 my-0.5 px-1.5 md:px-2 py-1 md:py-1.5 rounded-lg flex items-center gap-1.5 md:gap-2 transition-all duration-400 cursor-default ${isActive ? "bg-indigo-600/30 border border-indigo-400/50 shadow-md shadow-indigo-500/20" : "hover:bg-white/5 border border-transparent"}`}>
              <span className="text-xs md:text-sm">{icon}</span>
              <div className="flex-1 min-w-0">
                <div className={`text-[9px] md:text-xs font-semibold transition-colors truncate ${isActive ? "text-indigo-200" : "text-white/60"}`}>{label}</div>
                <div className="text-[7px] md:text-[9px] text-white/25 truncate">{sub}</div>
              </div>
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Mobile effects indicator (visible only on small screens) ── */}
      {isPlaying && cur?.highlight && (
        <div className="absolute top-2 right-2 sm:hidden bg-[#111120]/90 border border-indigo-400/50 rounded-lg px-2 py-1 z-20" style={{ animation: "fadeInUp 0.3s ease" }}>
          <div className="text-[8px] text-indigo-300 font-semibold">
            {cur.highlight === "color" && "🎨 Color Grading"}
            {cur.highlight === "lut" && "🎞️ Apply LUT"}
            {cur.highlight === "letterbox" && "⬛ Letterbox"}
            {cur.highlight === "grain" && "📽️ Film Grain"}
          </div>
        </div>
      )}

      {/* ── Buddy cursor ── */}
      {isPlaying && cur && (
        <div className="absolute w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm sm:text-lg shadow-lg shadow-indigo-500/40 pointer-events-none z-20"
          style={{ right: `${100 - cur.buddyX}%`, top: `${cur.buddyY}%`, transition: "right 1.1s cubic-bezier(0.34,1.56,0.64,1),top 1.1s cubic-bezier(0.34,1.56,0.64,1)", transform: (phase === 1 || phase === 3 || phase === 4) ? "rotate(-15deg)" : "rotate(0deg)" }}>
          🎓
        </div>
      )}
      {/* Arrow pointer when buddy is on a panel item — hidden on mobile */}
      {isPlaying && phase >= 1 && phase <= 4 && (
        <div className="absolute pointer-events-none z-10 text-indigo-400 hidden sm:block"
          style={{ right: `calc(${100 - (cur?.buddyX ?? 82)}% - 28px)`, top: `calc(${cur?.buddyY ?? 40}% + 6px)`, animation: "arrowPulse 0.8s ease infinite" }}>
          ←
        </div>
      )}

      {/* ── User question bubble ── */}
      {isPlaying && (
        <div className="absolute bottom-6 sm:bottom-10 left-2 sm:left-3 bg-[#1e1e3a] border border-indigo-500/30 rounded-lg sm:rounded-xl rounded-bl-sm px-2 sm:px-3 py-1.5 sm:py-2 z-10 max-w-[55%] sm:max-w-[52%]"
          style={{ animation: "fadeInUp 0.3s ease" }}>
          <div className="text-[7px] sm:text-[9px] text-indigo-400/70 mb-0.5 sm:mb-1 font-semibold">YOU</div>
          <p className="text-[9px] sm:text-xs text-white/80 leading-relaxed">
            {QUESTION_CHARS.slice(0, qCharIdx + 1).join("")}
            {phase === 0 && <span className="inline-block w-0.5 h-3 bg-indigo-400 ml-0.5 animate-pulse align-middle" />}
          </p>
        </div>
      )}

      {/* ── Buddy response bubble ── */}
      {isPlaying && phase >= 1 && (
        <div className="absolute bottom-6 sm:bottom-10 right-2 sm:right-[35%] sm:mr-3 bg-[#1a1a3a] border border-indigo-500/50 rounded-lg sm:rounded-xl rounded-br-sm px-2 sm:px-3 py-1.5 sm:py-2 z-10 max-w-[40%] sm:max-w-[30%]"
          style={{ animation: "fadeInUp 0.3s ease" }}>
          <div className="text-[7px] sm:text-[9px] text-purple-400/70 mb-0.5 sm:mb-1 font-semibold">STUDYBUDDY</div>
          <p className="text-[9px] sm:text-xs text-indigo-100 leading-relaxed">
            {HINT_WORDS.slice(0, hintWordIdx + 1).join(" ")}
            {phase === 1 && hintWordIdx < HINT_WORDS.length - 1 && <span className="inline-block w-0.5 h-3 bg-indigo-400 ml-0.5 animate-pulse align-middle" />}
          </p>
        </div>
      )}

      {/* ── Status bar ── */}
      {isPlaying && cur && cur.label !== "done" && (
        <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 z-20 max-w-[85%]">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse flex-shrink-0" />
          <span className="text-[8px] sm:text-[10px] text-white/70 truncate">{cur.label}</span>
        </div>
      )}
      {phase === 5 && (
        <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-indigo-600/30 backdrop-blur-sm border border-indigo-400/30 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 z-20 max-w-[90%]">
          <span className="text-[8px] sm:text-[10px] text-indigo-300 font-semibold truncate">✓ Cinematic look applied — 3 effects, guided step by step</span>
        </div>
      )}

      {/* ── Play overlay ── */}
      {!isPlaying && (
        <button onClick={start} className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-4 group bg-black/30 hover:bg-black/20 transition-colors z-30">
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-indigo-600/90 backdrop-blur-sm border border-indigo-400/50 flex items-center justify-center shadow-2xl shadow-indigo-500/40 group-hover:bg-indigo-500 group-hover:scale-105 transition-all duration-200">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <span className="text-xs sm:text-sm text-white/70 font-medium group-hover:text-white/90 transition-colors">Play video editor demo</span>
        </button>
      )}

      {isPlaying && (
        <button onClick={reset} className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[10px] sm:text-xs text-white/40 hover:text-white/80 transition-colors bg-black/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-white/10 hover:border-white/30 z-30">↺ Reset</button>
      )}
    </div>
  );
}

// ─── Shared chrome wrapper ──────────────────────────────────────────────────────

function DemoShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-indigo-glow shadow-2xl bg-[#0d0d1a]">
      <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-3 bg-[#16162a] border-b border-indigo-glow">
        <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 opacity-80" />
        <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400 opacity-80" />
        <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 opacity-80" />
        <div className="ml-2 sm:ml-3 flex-1 bg-[#0d0d1a] rounded-md px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs text-muted text-left truncate">
          studybuddy.ai — {title}
        </div>
      </div>
      {children}
    </div>
  );
}

// ─── Features section ──────────────────────────────────────────────────────────

export default function Features() {
  const [tab, setTab] = useState<"study" | "video">("study");

  return (
    <section id="features" className="py-24 px-6 md:px-16 text-center">
      <p className="text-xs font-bold tracking-[0.1em] uppercase text-accent2 mb-4">Features</p>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Everything you need to study smarter</h2>
      <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
        Built on real AI, real physics, and real feedback from students who actually use it.
      </p>

      {/* Demo tabs */}
      <div className="mt-10 sm:mt-16 max-w-4xl mx-auto">
        <div className="flex gap-2 mb-4 justify-center">
          {([
            { id: "study", label: "📚 Study Assistant" },
            { id: "video", label: "🎬 Video Editor Guide" },
          ] as const).map(({ id, label }) => (
            <button key={id} onClick={() => setTab(id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${tab === id ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20" : "bg-surface border-indigo-glow text-muted hover:text-white hover:border-indigo-500/50"}`}>
              {label}
            </button>
          ))}
        </div>

        {tab === "study" ? (
          <>
            <DemoShell title="interactive demo — study assistant">
              <StudyDemo />
            </DemoShell>
            <p className="mt-4 text-muted text-sm">
              Click play to see StudyBuddy highlight content, fly to it, and stream an answer — all without leaving your page.
            </p>
          </>
        ) : (
          <>
            <DemoShell title="interactive demo — video editor">
              <VideoEditorDemo />
            </DemoShell>
            <p className="mt-4 text-muted text-sm">
              Ask StudyBuddy how to make your footage cinematic. It reads your screen and points you to each effect — LUT, letterbox, film grain — step by step.
            </p>
          </>
        )}
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto text-left">
        {features.map(({ icon, title, body }) => (
          <div key={title} className="relative bg-surface border border-indigo-glow rounded-2xl p-7 card-hover-glow hover:border-accent hover:-translate-y-1 transition-all duration-200 overflow-hidden">
            <span className="text-4xl mb-4 block">{icon}</span>
            <h3 className="font-bold text-base mb-2.5">{title}</h3>
            <p className="text-muted text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes arrowPulse {
          0%, 100% { transform: translateX(0); opacity: 1; }
          50%       { transform: translateX(-4px); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
