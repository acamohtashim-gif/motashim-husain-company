import { useEffect, useRef } from "react";

const SPARK_PATH =
  "M12 1C13 8 16 11 23 12C16 13 13 16 12 23C11 16 8 13 1 12C8 11 11 8 12 1Z";

const HOT_SELECTOR =
  "a,button,input,textarea,.work-cell,.toolgroup,.milestone,.cert-row";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)")
      .matches;
    if (reduce || !fine) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("cursor-on");

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0,
      seen = false;
    let raf = 0;
    let lastSparkX = 0,
      lastSparkY = 0;

    const spark = (x: number, y: number, size?: number) => {
      const s = document.createElement("div");
      s.className = "cursor-spark";
      const w = size ?? 8 + Math.random() * 7;
      s.style.width = `${w}px`;
      s.style.height = `${w}px`;
      s.style.left = `${x}px`;
      s.style.top = `${y}px`;
      s.style.setProperty("--rot", `${Math.random() * 130 - 65}deg`);
      s.style.setProperty("--dx", `${Math.random() * 26 - 13}px`);
      s.innerHTML = `<svg viewBox="0 0 24 24"><path d="${SPARK_PATH}"/></svg>`;
      document.body.appendChild(s);
      s.addEventListener("animationend", () => s.remove());
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      if (!seen) {
        seen = true;
        dot.classList.add("on");
        ring.classList.add("on");
        lastSparkX = mx;
        lastSparkY = my;
      }
      const ddx = e.clientX - lastSparkX;
      const ddy = e.clientY - lastSparkY;
      if (ddx * ddx + ddy * ddy > 34 * 34) {
        lastSparkX = e.clientX;
        lastSparkY = e.clientY;
        spark(e.clientX + (Math.random() * 10 - 5), e.clientY + (Math.random() * 10 - 5));
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest && target.closest(HOT_SELECTOR)) {
        ring.classList.add("hot");
      }
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest && target.closest(HOT_SELECTOR)) {
        ring.classList.remove("hot");
      }
    };
    const onLeave = () => {
      dot.classList.remove("on");
      ring.classList.remove("on");
    };
    const onEnter = () => {
      dot.classList.add("on");
      ring.classList.add("on");
    };
    const onDown = (e: MouseEvent) => {
      const rp = document.createElement("div");
      rp.className = "cursor-ripple";
      rp.style.left = `${e.clientX}px`;
      rp.style.top = `${e.clientY}px`;
      document.body.appendChild(rp);
      rp.addEventListener("animationend", () => rp.remove());
      for (let i = 0; i < 6; i++) {
        spark(
          e.clientX + (Math.random() * 36 - 18),
          e.clientY + (Math.random() * 36 - 18),
          6 + Math.random() * 8,
        );
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      document.body.classList.remove("cursor-on");
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
