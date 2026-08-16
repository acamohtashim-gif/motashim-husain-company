import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const STAR_PATH =
  "M12 1C13 8 16 11 23 12C16 13 13 16 12 23C11 16 8 13 1 12C8 11 11 8 12 1Z";

type Piece = {
  d?: string;
  cx?: number;
  cy?: number;
  r?: number;
  angle: number;
  radius: number;
  rotate: number;
};

const PIECES: Piece[] = [
  { cx: 50, cy: 52, r: 34, angle: 0, radius: 58, rotate: -40 },
  { d: "M36 52 L46 62", angle: 1.9, radius: 68, rotate: 17 },
  { d: "M46 62 L66 38", angle: 3.8, radius: 78, rotate: -23 },
  { cx: 50, cy: 20, r: 2.4, angle: 5.7, radius: 60, rotate: 34 },
];

export default function IntroSplash() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [placed, setPlaced] = useState(0);
  const [finishing, setFinishing] = useState(false);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    setMounted(true);
    document.body.classList.add("intro-active");
    return () => {
      document.body.classList.remove("intro-active");
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.classList.remove("intro-active");
    const t = setTimeout(() => setMounted(false), 1050);
    return () => clearTimeout(t);
  }, [open]);

  if (!mounted) return null;

  const burst = () => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    for (let i = 0; i < 16; i++) {
      const s = document.createElement("div");
      s.className = "intro-spark";
      const w = 10 + Math.random() * 12;
      s.style.width = `${w}px`;
      s.style.height = `${w}px`;
      s.style.left = `${cx}px`;
      s.style.top = `${cy}px`;
      const ang = Math.random() * 6.283;
      const dist = 120 + Math.random() * 190;
      s.style.setProperty("--bx", `${(Math.cos(ang) * dist).toFixed(0)}px`);
      s.style.setProperty("--by", `${(Math.sin(ang) * dist).toFixed(0)}px`);
      s.style.setProperty("--br", `${(Math.random() * 160 - 80).toFixed(0)}deg`);
      s.innerHTML = `<svg viewBox="0 0 24 24"><path d="${STAR_PATH}"/></svg>`;
      document.body.appendChild(s);
      s.addEventListener("animationend", () => s.remove());
    }
  };

  const place = () => {
    if (finishing || placed >= PIECES.length) return;
    const next = placed + 1;
    setPlaced(next);
    setPop(false);
    requestAnimationFrame(() => setPop(true));
    if (next >= PIECES.length) {
      setFinishing(true);
      burst();
      setTimeout(() => setOpen(true), 480);
    }
  };

  const left = PIECES.length - placed;
  const subText = finishing
    ? "✦ Signed off ✦"
    : left > 0
      ? `Tap ${left} more`
      : "";

  return (
    <div
      id="intro"
      className={open ? "open" : ""}
      aria-label="Enter the site"
      onClick={place}
    >
      <div className="intro-piece p-tl" aria-hidden="true" />
      <div className="intro-piece p-tr" aria-hidden="true" />
      <div className="intro-piece p-bl" aria-hidden="true" />
      <div className="intro-piece p-br" aria-hidden="true" />
      <div className="intro-hint">
        <div className="intro-title">
          Motashim <em>Husain</em>
        </div>
        <div
          className={`intro-doodle${pop ? " pop" : ""}${finishing ? " surprise" : ""}`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 100 100">
            {PIECES.map((piece, i) => {
              const home = i < placed;
              const style: CSSProperties | undefined = home
                ? undefined
                : {
                    transform: `translate(${(Math.cos(piece.angle) * piece.radius).toFixed(1)}px, ${(Math.sin(piece.angle) * piece.radius).toFixed(1)}px) rotate(${piece.rotate}deg)`,
                  };
              const className = `pz${home ? " home" : ""}`;
              if (piece.d) {
                return (
                  <path key={i} className={className} d={piece.d} style={style} />
                );
              }
              return (
                <circle
                  key={i}
                  className={className}
                  cx={piece.cx}
                  cy={piece.cy}
                  r={piece.r}
                  style={style}
                />
              );
            })}
          </svg>
        </div>
        <div className="intro-sub">{subText}</div>
      </div>
      <button
        id="introSkip"
        className="intro-skip"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        Skip &rarr;
      </button>
    </div>
  );
}
