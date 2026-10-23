/**
 * Fades content in as it scrolls into view using CSS scroll-driven animations (see `.reveal` in
 * globals.css). Content is never hidden when JS is slow or the browser lacks support.
 */
export default function Reveal({
  children,
  as: Component = "div",
  className = "",
}: {
  children: React.ReactNode;
  as?: "div" | "li";
  className?: string;
}) {
  return <Component className={`reveal ${className}`}>{children}</Component>;
}
