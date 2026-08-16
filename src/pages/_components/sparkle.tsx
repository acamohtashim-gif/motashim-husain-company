import type { CSSProperties } from "react";

type SparkleProps = {
  style?: CSSProperties;
};

export default function Sparkle({ style }: SparkleProps) {
  return (
    <svg
      className="sparkle"
      style={style}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 1C13 8 16 11 23 12C16 13 13 16 12 23C11 16 8 13 1 12C8 11 11 8 12 1Z" />
    </svg>
  );
}
