export default function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  id?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className={`text-sm font-medium ${dark ? "text-emerald-300" : "text-accent"}`}>{eyebrow}</p>
      <h2
        id={id}
        className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/70" : "text-ink-2"}`}>{lead}</p>
      )}
    </div>
  );
}
