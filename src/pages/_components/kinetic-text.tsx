import { Children, useEffect, useRef, useState } from "react";
import type { Ref, ReactNode } from "react";

type KineticTextProps = {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  children: ReactNode;
};

export default function KineticText({
  as = "h2",
  className,
  children,
}: KineticTextProps) {
  const Tag = as;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  let wordIndex = 0;
  const nodes: ReactNode[] = [];

  const pushWords = (text: string, keyPrefix: string) => {
    text.split(/(\s+)/).forEach((part, i) => {
      if (part === "") return;
      if (/^\s+$/.test(part)) {
        nodes.push(part);
        return;
      }
      const delay = wordIndex * 0.055;
      wordIndex++;
      nodes.push(
        <span className="kin-word" key={`${keyPrefix}-${i}`}>
          <span style={{ transitionDelay: `${delay}s` }}>{part}</span>
        </span>,
      );
    });
  };

  Children.forEach(children, (child, idx) => {
    if (typeof child === "string") {
      pushWords(child, `t${idx}`);
    } else if (child != null && child !== false) {
      const delay = wordIndex * 0.055;
      wordIndex++;
      nodes.push(
        <span
          className="kin-el"
          style={{ transitionDelay: `${delay}s` }}
          key={`e${idx}`}
        >
          {child}
        </span>,
      );
    }
  });

  return (
    <Tag
      ref={ref as Ref<HTMLHeadingElement>}
      className={`kin${inView ? " in" : ""}${className ? ` ${className}` : ""}`}
    >
      {nodes}
    </Tag>
  );
}
