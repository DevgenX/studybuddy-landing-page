type CursorVoicePreviewProps = {
  mode: "listening" | "processing" | "responding";
  className?: string;
};

const color = "#3b82f6";

export default function CursorVoicePreview({
  mode,
  className = "h-5 w-5",
}: CursorVoicePreviewProps) {
  if (mode === "listening") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 16 22"
        className={className}
        style={{ overflow: "visible", filter: "drop-shadow(0 0 6px rgba(59,130,246,0.65))" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="0" width="8" height="13" rx="4" fill={color} />
        <path
          d="M1 11Q1 18 8 18Q15 18 15 11"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <line x1="8" y1="18" x2="8" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="21" x2="12" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <circle
          cx="13"
          cy="2"
          r="2.5"
          fill="#ef4444"
          className="cursor-record-dot"
        />
      </svg>
    );
  }

  if (mode === "processing") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 14 14"
        className={`${className} cursor-processing-spinner`}
        style={{ overflow: "visible", filter: "drop-shadow(0 0 6px rgba(59,130,246,0.65))" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="7"
          cy="7"
          r="5.5"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="24.2 10.4"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 18"
      className={className}
      style={{ overflow: "visible", filter: "drop-shadow(0 0 6px rgba(59,130,246,0.65))" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 6L1 12L5 12L10 17L10 1L5 6Z" fill={color} />
      <path
        d="M12 5.5A4 4 0 0 1 12 12.5"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        className="cursor-wave-one"
      />
      <path
        d="M14.5 3A7 7 0 0 1 14.5 15"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        className="cursor-wave-two"
      />
    </svg>
  );
}
