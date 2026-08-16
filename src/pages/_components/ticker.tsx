import { useEffect, useRef } from "react";

type TickerProps = {
  items: string[];
};

export default function Ticker({ items }: TickerProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    let lastY = window.scrollY;
    let resetTimer: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      const y = window.scrollY;
      const v = Math.max(-8, Math.min(8, (y - lastY) * 0.35));
      lastY = y;
      track.style.setProperty("--sk", `${v}deg`);
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        track.style.setProperty("--sk", "0deg");
      }, 140);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(resetTimer);
    };
  }, []);

  const renderItems = (keyPrefix: string) =>
    items.map((item, i) => (
      <span key={`${keyPrefix}-${i}`}>
        {item}
        <span className="dot">&#10022;</span>
      </span>
    ));

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track" ref={trackRef}>
        {renderItems("a")}
        {renderItems("b")}
      </div>
    </div>
  );
}
