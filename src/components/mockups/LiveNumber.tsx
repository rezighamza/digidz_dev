"use client";

import { useEffect, useRef, useState } from "react";

export const formatInt = (n: number) => Math.round(n).toLocaleString("fr-FR").replace(/[  ]/g, " ");

/** Counts up from 0 once visible, then tweens to every new `value`. */
export default function LiveNumber({
  value,
  format = formatInt,
  duration = 900,
}: {
  value: number;
  format?: (n: number) => string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const shown = useRef(0);
  const [display, setDisplay] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const from = shown.current;
    const start = performance.now();
    let frame = 0;

    const step = (now: number) => {
      const t = reduce ? 1 : Math.min(1, (now - start) / duration);
      const next = from + (value - from) * (1 - Math.pow(1 - t, 3));
      shown.current = next;
      setDisplay(next);
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value, visible, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {format(display)}
    </span>
  );
}
