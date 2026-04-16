"use client";

import StudyBuddyCursorTriangle from "@/components/StudyBuddyCursorTriangle";
import { useEffect, useRef, useState } from "react";

type DemoTab = "study" | "video" | "explain";
type IconName =
  | "voice"
  | "screen"
  | "pointer"
  | "copy"
  | "speak"
  | "camera"
  | "shortcuts"
  | "browser";

const featureCards: Array<{
  icon: IconName;
  title: string;
  body: string;
}> = [
  {
    icon: "voice",
    title: "Ask by typing or talking",
    body: "Start with a shortcut, then type or talk. Use whichever feels easier in the moment.",
  },
  {
    icon: "screen",
    title: "Understands what is on your screen",
    body: "It can look at the page, app, slide, or screenshot you already have open before it answers.",
  },
  {
    icon: "pointer",
    title: "Shows you where to click",
    body: "Instead of only giving text, it can point to the button, menu, or part of the screen you need.",
  },
  {
    icon: "copy",
    title: "Copy and explain",
    body: "Copy a word, sentence, or paragraph, then press explain. Diwara AI turns it into plain language.",
  },
  {
    icon: "speak",
    title: "Speaks the answer out loud",
    body: "Listen to the answer while you keep studying, editing, or working.",
  },
  {
    icon: "camera",
    title: "Works with screenshots",
    body: "Use a screenshot when something is hard to explain with words.",
  },
  {
    icon: "shortcuts",
    title: "Fast keyboard shortcuts",
    body: "Open voice, show or hide the assistant, and explain copied text without breaking your flow.",
  },
  {
    icon: "browser",
    title: "Helpful for study and work",
    body: "Use it to learn school topics, understand apps, edit faster, and get through daily tasks with less friction.",
  },
];

const studyWords = [
  "It",
  "means",
  "one",
  "cell",
  "splits",
  "into",
  "two",
  "new",
  "cells.",
];

const studySteps = [
  { label: "Reading the page", duration: 1100 },
  { label: "Finding the highlighted part", duration: 1000 },
  { label: "Moving to the right spot", duration: 1100 },
  { label: "Explaining in simple words", duration: 2600 },
  { label: "done", duration: 0 },
];

const videoSteps = [
  { buddyX: 88, buddyY: 78, highlight: "", label: "Question coming in" },
  { buddyX: 81, buddyY: 24, highlight: "color", label: "Step 1: Open color tools" },
  { buddyX: 81, buddyY: 24, highlight: "lut", label: "Step 2: Add a film look" },
  { buddyX: 81, buddyY: 44, highlight: "letterbox", label: "Step 3: Add bars" },
  { buddyX: 81, buddyY: 63, highlight: "grain", label: "Step 4: Add grain" },
  { buddyX: 81, buddyY: 63, highlight: "grain", label: "done" },
];

const videoQuestion = "How can I make this video more cinematic?".split("");
const videoWords = [
  "Apply",,
  "color",
  "tools,",
  "put",
  "a",
  "film",
  "look,",
  "add",
  "cinema",
  "bars",
];

const explainWords = [
  "Photosynthesis",
  "is",
  "how",
  "plants",
  "turn",
  "light,",
  "water,",
  "and",
  "air",
  "into",
  "food.",
];

function FeatureIcon({ name }: { name: IconName }) {
  const common = "h-6 w-6 text-accent2";

  if (name === "voice") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M12 15a3 3 0 0 0 3-3V7a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Z" />
        <path d="M6 11a6 6 0 0 0 12 0" />
        <path d="M12 17v4" />
      </svg>
    );
  }

  if (name === "screen") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </svg>
    );
  }

  if (name === "pointer") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M12 3 4 19l5-2 3 4 2-5 5-2Z" />
      </svg>
    );
  }

  if (name === "copy") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <rect x="4" y="4" width="11" height="11" rx="2" />
      </svg>
    );
  }

  if (name === "speak") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M4 14h4l5 4V6L8 10H4Z" />
        <path d="M17 9a4 4 0 0 1 0 6" />
        <path d="M19.5 6.5a7.5 7.5 0 0 1 0 11" />
      </svg>
    );
  }

  if (name === "camera") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <circle cx="12" cy="13" r="3.5" />
        <path d="M8 6l1.2-2h5.6L16 6" />
      </svg>
    );
  }

  if (name === "shortcuts") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 10h4" />
        <path d="M13 10h4" />
        <path d="M7 14h10" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <path d="M4 5h16v10H4Z" />
      <path d="M8 19h8" />
      <path d="M12 15v4" />
    </svg>
  );
}

function DemoShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[1.8rem] border border-indigo-glow bg-[#08111d] shadow-[0_30px_90px_rgba(2,10,22,0.45)]">
      <div className="flex flex-wrap items-center gap-2 border-b border-white/8 bg-[#111d2d] px-3 py-3 sm:px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <div className="min-w-0 max-w-full rounded-full bg-white/5 px-3 py-1 text-[10px] leading-tight text-muted sm:ml-3 sm:text-xs">
          {title}
        </div>
      </div>
      {children}
    </div>
  );
}

function StudyDemo() {
  const [phase, setPhase] = useState(-1);
  const [wordIdx, setWordIdx] = useState(0);
  const [buddyPos, setBuddyPos] = useState({ x: 86, y: 74 });
  const wordTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  function start() {
    setPhase(0);
    setWordIdx(0);
    setBuddyPos({ x: 86, y: 74 });
  }

  function reset() {
    if (wordTimer.current) clearInterval(wordTimer.current);
    setPhase(-1);
    setWordIdx(0);
    setBuddyPos({ x: 86, y: 74 });
  }

  useEffect(() => {
    if (phase < 0 || phase >= studySteps.length - 1) return;
    const timeout = setTimeout(() => setPhase((prev) => prev + 1), studySteps[phase].duration);
    return () => clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase === 2) setBuddyPos({ x: 55, y: 36 });
  }, [phase]);

  useEffect(() => {
    if (phase !== 3) return;
    wordTimer.current = setInterval(() => {
      setWordIdx((prev) => {
        if (prev >= studyWords.length - 1) {
          if (wordTimer.current) clearInterval(wordTimer.current);
          setPhase(4);
          return prev;
        }
        return prev + 1;
      });
    }, 110);
    return () => {
      if (wordTimer.current) clearInterval(wordTimer.current);
    };
  }, [phase]);

  const isPlaying = phase >= 0;
  const showHighlight = phase >= 1;
  const showBubble = phase >= 3;

  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#0c1524] via-[#0f1a2d] to-[#0a1220] sm:aspect-video">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,211,252,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(125,211,252,0.5) 1px,transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="absolute left-4 top-4 right-4 space-y-2 sm:left-6 sm:top-6 sm:right-44">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#83a8c7] sm:text-xs">
          Biology notes
        </div>
        {[
          { w: "78%", hi: false },
          { w: "96%", hi: false },
          { w: "85%", hi: false },
          { w: "100%", hi: true },
          { w: "81%", hi: true },
          { w: "68%", hi: false },
          { w: "93%", hi: false },
        ].map((line, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 sm:h-2.5 ${
              line.hi && showHighlight
                ? "bg-accent3/60 shadow-sm shadow-accent3/30"
                : "bg-white/10"
            }`}
            style={{ width: line.w }}
          />
        ))}
        {showHighlight && (
          <div className="pt-1 text-[10px] text-accent3 sm:text-xs">
            Selected question: What does mitosis mean?
          </div>
        )}
      </div>

      <StudyBuddyCursorTriangle
        className="absolute z-10 h-10 w-9 sm:h-12 sm:w-10"
        style={{
          right: `${100 - buddyPos.x}%`,
          top: `${buddyPos.y}%`,
          transition:
            "right 1.1s cubic-bezier(0.34,1.56,0.64,1), top 1.1s cubic-bezier(0.34,1.56,0.64,1), transform 1.1s cubic-bezier(0.34,1.56,0.64,1)",
          transform: phase === 2 ? "rotate(-18deg)" : "rotate(0deg)",
        }}
      />

      {showBubble && (
        <div className="prompt-bubble absolute left-4 right-4 top-[58%] z-10 rounded-2xl rounded-tr-md px-3 py-3 text-left text-[10px] leading-relaxed text-white/90 sm:left-auto sm:right-[6%] sm:top-[10%] sm:max-w-[220px] sm:text-xs">
          {studyWords.slice(0, wordIdx + 1).join(" ")}
          {phase === 3 && (
            <span className="ml-1 inline-block h-3 w-0.5 animate-pulse bg-accent align-middle" />
          )}
        </div>
      )}

      {isPlaying && phase < studySteps.length - 1 && (
        <div className="absolute bottom-3 left-1/2 z-20 flex max-w-[90%] -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] text-white/75 backdrop-blur-sm sm:text-xs">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span>{studySteps[phase].label}</span>
        </div>
      )}

      {phase === 4 && (
        <div className="absolute bottom-3 left-1/2 z-20 flex max-w-[90%] -translate-x-1/2 items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[10px] text-accent2 backdrop-blur-sm sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span>Answer ready without leaving the page</span>
        </div>
      )}

      {!isPlaying && (
        <button
          onClick={start}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-black/15 transition-colors hover:bg-black/10"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent/90 text-[#03111c] shadow-[0_20px_50px_rgba(34,211,238,0.3)]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7">
              <path d="M8 5v14l11-7Z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-white/80">
            Play study help demo
          </span>
        </button>
      )}

      {isPlaying && (
        <button
          onClick={reset}
          className="absolute right-3 top-3 z-20 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] text-white/55 transition-colors hover:text-white/90 sm:text-xs"
        >
          Reset
        </button>
      )}
    </div>
  );
}

function VideoDemo() {
  const [phase, setPhase] = useState(-1);
  const [questionIdx, setQuestionIdx] = useState(videoQuestion.length - 1);
  const [answerIdx, setAnswerIdx] = useState(0);
  const answerTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  function start() {
    setPhase(0);
    setQuestionIdx(videoQuestion.length - 1);
    setAnswerIdx(0);
  }

  function reset() {
    if (answerTimer.current) clearInterval(answerTimer.current);
    setPhase(-1);
    setQuestionIdx(videoQuestion.length - 1);
    setAnswerIdx(0);
  }

  useEffect(() => {
    if (phase < 0 || phase >= videoSteps.length - 1) return;
    const durations = [0, 1400, 1200, 1400, 1400, 0];
    const timeout = setTimeout(() => setPhase((prev) => prev + 1), durations[phase]);
    return () => clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== 0) return;
    const timeout = setTimeout(() => setPhase(1), 700);
    return () => clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== 1) return;
    answerTimer.current = setInterval(() => {
      setAnswerIdx((prev) => {
        if (prev >= videoWords.length - 1) {
          if (answerTimer.current) clearInterval(answerTimer.current);
          return prev;
        }
        return prev + 1;
      });
    }, 120);
    return () => {
      if (answerTimer.current) clearInterval(answerTimer.current);
    };
  }, [phase]);

  const isPlaying = phase >= 0;
  const current = phase >= 0 ? videoSteps[Math.min(phase, videoSteps.length - 1)] : null;
  const showLut = phase >= 2;
  const showLetterbox = phase >= 3;

  return (
    <div className="relative min-h-[31rem] overflow-hidden bg-[#0d1420] sm:min-h-0 sm:aspect-video">
      <div className="absolute left-0 right-0 top-0 bottom-[28%] sm:inset-0 sm:right-[34%]">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            showLut
              ? "bg-gradient-to-b from-[#0a1a2e] via-[#112233] to-[#0d1a0d]"
              : "bg-gradient-to-b from-[#1a2a3a] via-[#223344] to-[#1a2420]"
          }`}
        >
          <div
            className={`absolute left-[18%] top-[14%] h-8 w-8 rounded-full sm:h-10 sm:w-10 ${
              showLut
                ? "bg-amber-200/80 shadow-lg shadow-amber-200/30"
                : "bg-yellow-100/60"
            }`}
          />

          <div className="absolute bottom-[28%] left-0 right-0 flex items-end gap-[2px] px-2">
            {[28, 44, 36, 52, 32, 40, 24, 48, 34, 42, 30, 50, 38].map((height, index) => (
              <div
                key={index}
                className={`flex-1 ${
                  showLut ? "bg-[#071014]" : "bg-[#0d1a1a]"
                }`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div
            className={`absolute bottom-0 left-0 right-0 h-[28%] ${
              showLut
                ? "bg-gradient-to-t from-[#040d08] to-[#071410]"
                : "bg-gradient-to-t from-[#0a1208] to-[#101c14]"
            }`}
          />

          {showLut && <div className="absolute inset-0 bg-teal-900/20 mix-blend-color" />}
        </div>

        <div className={`absolute left-0 right-0 top-0 bg-black ${showLetterbox ? "h-[12%]" : "h-0"} transition-all duration-700`} />
        <div className={`absolute bottom-0 left-0 right-0 bg-black ${showLetterbox ? "h-[12%]" : "h-0"} transition-all duration-700`} />

        <div className="absolute bottom-0 left-0 right-0 h-6 border-t border-white/5 bg-[#0a0a18]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 grid h-[28%] grid-cols-2 gap-2 border-t border-white/5 bg-[#111120]/95 p-3 sm:hidden">
        {[
          { id: "color", label: "Color tools" },
          { id: "lut", label: "Film look" },
          { id: "letterbox", label: "Cinema bars" },
          { id: "grain", label: "Film grain" },
        ].map(({ id, label }) => {
          const isActive = current?.highlight === id;
          return (
            <div
              key={id}
              className={`rounded-xl border px-3 py-2 text-xs transition-all ${
                isActive
                  ? "border-accent/40 bg-accent/10 text-accent2"
                  : "border-white/8 bg-white/[0.03] text-white/60"
              }`}
            >
              {label}
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 right-0 top-0 hidden w-[34%] flex-col border-l border-white/5 bg-[#111120] sm:flex">
        <div className="border-b border-white/5 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
          Effects
        </div>
        {[
          { id: "color", label: "Color tools" },
          { id: "lut", label: "Film look" },
          { id: "letterbox", label: "Cinema bars" },
          { id: "grain", label: "Film grain" },
        ].map(({ id, label }) => {
          const isActive = current?.highlight === id;
          return (
            <div
              key={id}
              className={`mx-2 my-1 rounded-xl border px-3 py-3 text-sm transition-all ${
                isActive
                  ? "border-accent/40 bg-accent/10 text-accent2"
                  : "border-transparent text-white/60"
              }`}
            >
              {label}
            </div>
          );
        })}
      </div>

      {isPlaying && current && (
        <StudyBuddyCursorTriangle
          className="absolute z-20 h-9 w-8 sm:h-10 sm:w-9"
          style={{
            right: `${100 - current.buddyX}%`,
            top: `${current.buddyY}%`,
            transition:
              "right 1.1s cubic-bezier(0.34,1.56,0.64,1), top 1.1s cubic-bezier(0.34,1.56,0.64,1), transform 1.1s cubic-bezier(0.34,1.56,0.64,1)",
            transform:
              phase === 1 || phase === 3 || phase === 4
                ? "rotate(-15deg)"
                : "rotate(0deg)",
          }}
        />
      )}

      {isPlaying && (
        <div className="absolute bottom-[31%] left-3 right-20 z-10 rounded-2xl rounded-bl-md border border-accent/20 bg-[#1c2740]/90 px-3 py-2 text-[10px] text-white/85 sm:bottom-10 sm:right-auto sm:max-w-[58%] sm:text-xs">
          {videoQuestion.slice(0, questionIdx + 1).join("")}
          {phase === 0 && (
            <span className="ml-1 inline-block h-3 w-0.5 animate-pulse bg-accent align-middle" />
          )}
        </div>
      )}

      {isPlaying && phase >= 1 && (
        <div className="absolute bottom-[18%] left-12 right-3 z-10 rounded-2xl rounded-br-md border border-white/10 bg-[#101a2d]/95 px-3 py-2 text-[10px] text-accent2 sm:bottom-10 sm:left-auto sm:right-[35%] sm:max-w-[42%] sm:text-xs">
          {videoWords.slice(0, answerIdx + 1).join(" ")}
          {phase === 1 && answerIdx < videoWords.length - 1 && (
            <span className="ml-1 inline-block h-3 w-0.5 animate-pulse bg-accent align-middle" />
          )}
        </div>
      )}

      {isPlaying && current && current.label !== "done" && (
        <div className="absolute left-1/2 top-3 z-20 flex max-w-[90%] -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[10px] text-white/75 backdrop-blur-sm sm:text-xs">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span>{current.label}</span>
        </div>
      )}

      {phase === 5 && (
        <div className="absolute left-1/2 top-3 z-20 flex max-w-[90%] -translate-x-1/2 items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[10px] text-accent2 backdrop-blur-sm sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span>Video steps finished</span>
        </div>
      )}

      {!isPlaying && (
        <button
          onClick={start}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 bg-black/20 transition-colors hover:bg-black/10"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent/90 text-[#03111c] shadow-[0_20px_50px_rgba(34,211,238,0.3)]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7">
              <path d="M8 5v14l11-7Z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-white/80">
            Play video editor assistant demo
          </span>
        </button>
      )}

      {isPlaying && (
        <button
          onClick={reset}
          className="absolute right-3 top-3 z-30 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] text-white/55 transition-colors hover:text-white/90 sm:text-xs"
        >
          Reset
        </button>
      )}
    </div>
  );
}

function ExplainDemo() {
  const [phase, setPhase] = useState(-1);
  const [answerIdx, setAnswerIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  function start() {
    setPhase(0);
    setAnswerIdx(0);
  }

  function reset() {
    if (timer.current) clearInterval(timer.current);
    setPhase(-1);
    setAnswerIdx(0);
  }

  useEffect(() => {
    if (phase === 0) {
      const timeout = setTimeout(() => setPhase(1), 1000);
      return () => clearTimeout(timeout);
    }
    if (phase === 1) {
      const timeout = setTimeout(() => setPhase(2), 1100);
      return () => clearTimeout(timeout);
    }
    return;
  }, [phase]);

  useEffect(() => {
    if (phase !== 2) return;
    timer.current = setInterval(() => {
      setAnswerIdx((prev) => {
        if (prev >= explainWords.length - 1) {
          if (timer.current) clearInterval(timer.current);
          setPhase(3);
          return prev;
        }
        return prev + 1;
      });
    }, 110);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [phase]);

  const isPlaying = phase >= 0;

  return (
    <div className="relative flex min-h-[34rem] flex-col gap-4 overflow-hidden bg-gradient-to-br from-[#0c1524] via-[#10192a] to-[#091220] p-4 sm:min-h-0 sm:aspect-video sm:block sm:p-0">
      <div className="relative rounded-[1.6rem] border border-white/8 bg-[#0b1524]/90 p-4 sm:absolute sm:left-6 sm:right-[42%] sm:top-6 sm:p-5">
        <div className="tiny-kicker">Article</div>
        <div className="mt-4 space-y-2">
          <div className="h-2 rounded-full bg-white/10" />
          <div className="h-2 w-11/12 rounded-full bg-white/10" />
          <div className="h-2 w-10/12 rounded-full bg-white/10" />
          <div className="rounded-lg bg-accent3/15 px-3 py-2 text-sm text-[#f7d48a]">
            photosynthesis
          </div>
          <div className="h-2 w-5/6 rounded-full bg-white/10" />
          <div className="h-2 w-3/4 rounded-full bg-white/10" />
        </div>
      </div>

      <div className="relative rounded-[1.6rem] border border-white/8 bg-[#101a2d]/92 p-4 sm:absolute sm:left-auto sm:right-6 sm:top-6 sm:w-[34%]">
        <div className="tiny-kicker">Copy and explain</div>
        <div className="mt-4 rounded-2xl border border-accent3/20 bg-accent3/10 px-3 py-2 text-xs text-[#f7d48a]">
          Copied text
        </div>
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/75">
          Explain this in simple words.
        </div>
        {(phase >= 2 || phase === 3) && (
          <div className="mt-3 rounded-2xl border border-accent/20 bg-accent/10 px-3 py-2 text-xs leading-6 text-accent2">
            {explainWords.slice(0, answerIdx + 1).join(" ")}
            {phase === 2 && (
              <span className="ml-1 inline-block h-3 w-0.5 animate-pulse bg-accent align-middle" />
            )}
          </div>
        )}
      </div>

      <div className="relative mt-auto grid gap-3 sm:absolute sm:bottom-4 sm:left-6 sm:right-6 sm:grid-cols-3">
        <div className={`rounded-2xl border px-4 py-3 text-sm ${phase >= 0 ? "border-accent3/20 bg-accent3/10 text-[#f7d48a]" : "border-white/8 bg-white/[0.03] text-white/65"}`}>
          1. Copy the part you do not understand
        </div>
        <div className={`rounded-2xl border px-4 py-3 text-sm ${phase >= 1 ? "border-accent/20 bg-accent/10 text-accent2" : "border-white/8 bg-white/[0.03] text-white/65"}`}>
          2. Ask for a simple explanation
        </div>
        <div className={`rounded-2xl border px-4 py-3 text-sm ${phase >= 3 ? "border-accent/20 bg-accent/10 text-accent2" : "border-white/8 bg-white/[0.03] text-white/65"}`}>
          3. Read the short answer
        </div>
      </div>

      {!isPlaying && (
        <button
          onClick={start}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-black/18 transition-colors hover:bg-black/10"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent/90 text-[#03111c] shadow-[0_20px_50px_rgba(34,211,238,0.3)]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7">
              <path d="M8 5v14l11-7Z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-white/80">
            Play copy and explain demo
          </span>
        </button>
      )}

      {isPlaying && (
        <button
          onClick={reset}
          className="absolute right-3 top-3 z-20 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] text-white/55 transition-colors hover:text-white/90 sm:text-xs"
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default function MarketingFeatureSet() {
  const [tab, setTab] = useState<DemoTab>("study");

  return (
    <section id="features" className="section-shell px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <p className="eyebrow mb-4">Features</p>
        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
          One assistant for what you do every day.
        </h2>
        <p className="section-copy mx-auto mt-4 max-w-2xl text-base sm:text-lg">
          Diwara AI helps you study, learn software, and get through work
          faster. It explains hard things, guides you inside apps, and gives
          clear help right on your screen.
        </p>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="mb-5 flex flex-wrap justify-center gap-2">
            {([
              { id: "study", label: "Study Assistant" },
              { id: "video", label: "Video Editor Assistant" },
              { id: "explain", label: "Copy and explain" },
            ] as const).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  tab === id
                    ? "border-accent bg-accent/10 text-accent2"
                    : "border-indigo-glow bg-surface/60 text-muted hover:border-accent/40 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {tab === "study" && (
            <>
              <DemoShell title="Interactive demo: study help">
                <StudyDemo />
              </DemoShell>
              <p className="section-copy mt-4 text-sm">
                Watch Diwara AI find the selected text and explain it in simple
                words without sending you to another tab.
              </p>
            </>
          )}

          {tab === "video" && (
            <>
              <DemoShell title="Interactive demo: video help">
                <VideoDemo />
              </DemoShell>
              <p className="section-copy mt-4 text-sm">
                Ask how to make a video more cinematic, then watch the AI teach
                the steps on screen.
              </p>
            </>
          )}

          {tab === "explain" && (
            <>
              <DemoShell title="Interactive demo: copy and explain">
                <ExplainDemo />
              </DemoShell>
              <p className="section-copy mt-4 text-sm">
                Copy text, press the explain shortcut, and get the answer in
                everyday language.
              </p>
            </>
          )}
        </div>

        <div className="mt-16 grid gap-5 text-left sm:grid-cols-2 xl:grid-cols-4">
          {featureCards.map(({ icon, title, body }) => (
            <article
              key={title}
              className="surface-card card-hover-glow relative overflow-hidden rounded-[1.6rem] p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                <FeatureIcon name={icon} />
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
