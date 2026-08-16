import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils.ts";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-20 md:py-28", className)}
    >
      {(eyebrow || title || intro) && (
        <div className="max-w-2xl">
          {eyebrow && (
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
          )}
          {intro && (
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {intro}
            </p>
          )}
        </div>
      )}
      <div className={cn(eyebrow || title || intro ? "mt-12" : undefined)}>
        {children}
      </div>
    </motion.section>
  );
}
