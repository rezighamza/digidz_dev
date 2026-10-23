/** Desktop-app window chrome. Product UIs are French/LTR regardless of page locale, like the real apps. */
export default function WindowFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      dir="ltr"
      aria-hidden="true"
      className="overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-[0_30px_70px_-30px_rgba(20,22,26,0.35)]"
    >
      <div className="flex items-center gap-3 border-b border-line bg-sunken/70 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </div>
        <span className="truncate font-mono text-[11px] text-ink-3">{title}</span>
      </div>
      {children}
    </div>
  );
}
