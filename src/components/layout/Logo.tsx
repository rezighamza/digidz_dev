export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#14161a" />
      <path d="M9 8.5h6.25a7.5 7.5 0 0 1 0 15H9z" fill="#f7f6f2" />
      <circle cx="24.25" cy="21" r="2.5" fill="#2bb673" />
    </svg>
  );
}

export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="inline-flex items-center gap-2.5" dir="ltr">
      <LogoMark />
      <span className={`text-[17px] font-semibold tracking-tight ${tone === "light" ? "text-white" : "text-ink"}`}>
        Digi-DZ
      </span>
    </span>
  );
}
