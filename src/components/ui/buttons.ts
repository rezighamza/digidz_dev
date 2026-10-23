const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors duration-150";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
} as const;

const variants = {
  primary: "bg-ink text-white hover:bg-black",
  secondary: "border border-line-strong bg-surface text-ink hover:border-ink",
  light: "bg-white text-ink hover:bg-white/85",
} as const;

export function buttonClass(
  variant: keyof typeof variants = "primary",
  { size = "md", className = "" }: { size?: keyof typeof sizes; className?: string } = {},
) {
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`;
}
