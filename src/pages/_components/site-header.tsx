import { motion } from "motion/react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex flex-col leading-tight cursor-pointer">
          <span className="font-serif text-base tracking-tight sm:text-xl">
            Motashim Husain &amp; Company
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground sm:text-[0.65rem]">
            Chartered Accountant
          </span>
        </a>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="shrink-0 rounded-full border border-foreground/20 px-4 py-1.5 text-sm whitespace-nowrap transition-colors hover:bg-foreground hover:text-background cursor-pointer"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
