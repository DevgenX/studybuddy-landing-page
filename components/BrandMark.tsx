type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className = "h-8 w-8" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="diwara-bg" x1="10" y1="8" x2="54" y2="56">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="55%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="diwara-hat" x1="21" y1="18" x2="44" y2="39">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#67e8f9" />
        </linearGradient>
      </defs>

      <circle cx="32" cy="32" r="30" fill="url(#diwara-bg)" />
      <circle cx="32" cy="32" r="29" stroke="rgba(255,255,255,0.18)" />

      <path
        d="M18 28.5c3.8-8.2 9.9-14.2 17.3-19.2 2.2 5.4 5.7 10.5 10.7 16.2-4 1-6.8 1.7-8.4 2.2 2.7 1.5 5.5 2.5 8.4 3.1-2.2 1.4-5.6 2.3-10.2 2.9z"
        fill="url(#diwara-hat)"
      />
      <path
        d="M20 28.5c5.5 2.4 12.5 2.9 21 1.4"
        stroke="#082f49"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M23 33.5c0-6 4.7-10.8 10.5-10.8S44 27.5 44 33.5c0 2.6-.9 4.7-2.6 6.4-1.7 1.7-2.5 3.6-2.5 5.8H28c0-2.1-.9-4.1-2.7-5.9A8.8 8.8 0 0 1 23 33.5Z"
        fill="#f8d5c2"
      />
      <path
        d="M24.8 46.2h17.6c-.6 5.1-4 8.6-8.8 8.6-4.8 0-8.2-3.4-8.8-8.6Z"
        fill="#eff6ff"
      />
      <circle cx="29.4" cy="33.8" r="1.7" fill="#082f49" />
      <circle cx="37.6" cy="33.8" r="1.7" fill="#082f49" />
      <path
        d="M29.8 38.8c1.8 1.7 4.6 1.7 6.4 0"
        stroke="#082f49"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M47.5 15.5 49 19l3.5 1.4-3.5 1.4-1.5 3.5-1.5-3.5-3.5-1.4L46 19Z"
        fill="#fbbf24"
      />
      <circle cx="19" cy="18.5" r="2" fill="#bae6fd" />
    </svg>
  );
}
