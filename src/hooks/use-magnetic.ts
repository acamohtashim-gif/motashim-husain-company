import { useRef } from "react";
import type { MouseEvent } from "react";

export function useMagnetic<T extends HTMLElement>(strengthX = 0.18, strengthY = 0.3) {
  const ref = useRef<T>(null);

  const onMouseMove = (e: MouseEvent<T>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strengthX;
    const dy = (e.clientY - (r.top + r.height / 2)) * strengthY;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return { ref, onMouseMove, onMouseLeave };
}
