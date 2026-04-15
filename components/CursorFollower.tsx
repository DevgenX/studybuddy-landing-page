"use client";

import CursorVoicePreview from "@/components/CursorVoicePreview";
import StudyBuddyCursorTriangle from "@/components/StudyBuddyCursorTriangle";
import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previewTimersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const [mode, setMode] = useState<
    "triangle" | "listening" | "processing" | "responding"
  >("triangle");

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) {
      return;
    }

    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (isCoarsePointer) {
      return;
    }

    const target = {
      x: window.innerWidth * 0.55,
      y: window.innerHeight * 0.2,
    };
    const current = { ...target };
    let frameId = 0;

    const clearPreviewTimers = () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      previewTimersRef.current.forEach((timer) => clearTimeout(timer));
      previewTimersRef.current = [];
    };

    const queueIdlePreview = () => {
      clearPreviewTimers();
      idleTimerRef.current = setTimeout(() => {
        setMode("listening");
        previewTimersRef.current = [
          setTimeout(() => setMode("processing"), 900),
          setTimeout(() => setMode("responding"), 1900),
          setTimeout(() => setMode("triangle"), 3200),
        ];
      }, 1400);
    };

    const render = () => {
      current.x += (target.x - current.x) * 0.16;
      current.y += (target.y - current.y) * 0.16;

      cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) rotate(-35deg)`;
      frameId = window.requestAnimationFrame(render);
    };

    const showCursor = () => {
      cursor.dataset.visible = "true";
    };

    const hideCursor = () => {
      cursor.dataset.visible = "false";
    };

    const handlePointerMove = (event: PointerEvent) => {
      target.x = event.clientX + 35;
      target.y = event.clientY + 25;
      setMode("triangle");
      showCursor();
      queueIdlePreview();
    };

    const handlePointerLeave = () => {
      clearPreviewTimers();
      setMode("triangle");
      hideCursor();
    };

    frameId = window.requestAnimationFrame(render);
    queueIdlePreview();
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      clearPreviewTimers();
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      data-visible="false"
      className="cursor-follower"
    >
      {mode === "triangle" ? (
        <StudyBuddyCursorTriangle className="h-full w-full" />
      ) : (
        <div className="cursor-preview-icon">
          <CursorVoicePreview mode={mode} className="h-full w-full" />
        </div>
      )}
    </div>
  );
}
