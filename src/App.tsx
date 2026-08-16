import { MotionConfig } from "motion/react";
import Index from "./pages/Index.tsx";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Index />
    </MotionConfig>
  );
}
