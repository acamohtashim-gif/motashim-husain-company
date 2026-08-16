import type { LucideIcon } from "lucide-react";
import { useGlow } from "../../hooks/use-glow.ts";

type ToolCardProps = {
  icon: LucideIcon;
  title: string;
  items: string;
};

export default function ToolCard({ icon: Icon, title, items }: ToolCardProps) {
  const { ref, onMouseMove } = useGlow<HTMLDivElement>();
  return (
    <div className="toolgroup" ref={ref} onMouseMove={onMouseMove}>
      <span className="tool-ic">
        <Icon aria-hidden size={24} />
      </span>
      <h4>{title}</h4>
      <p>{items}</p>
    </div>
  );
}
