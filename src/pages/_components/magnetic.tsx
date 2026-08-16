import type { ReactNode } from "react";
import { useMagnetic } from "../../hooks/use-magnetic.ts";

type MagneticProps = {
  href: string;
  className: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

export default function Magnetic({
  href,
  className,
  children,
  target,
  rel,
}: MagneticProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      href={href}
      className={className}
      target={target}
      rel={rel}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}
