import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useNavScroll } from "../../hooks/use-nav-scroll.ts";
import { useTheme } from "../../hooks/use-theme.ts";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
];

const sectionIds = ["about", "experience", "services", "contact"];

export default function SiteHeader() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const { scrolled, active } = useNavScroll(sectionIds);

  return (
    <header className={`rd-nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <a href="#top" className="rd-logo cursor-pointer">
          <span className="name">
            Motashim Husain <em>&amp; Co.</em>
          </span>
          <span className="role">Chartered Accountant</span>
        </a>
        <div className="nav-right">
          <nav className={`nav-links${open ? " open" : ""}`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  active === link.href.slice(1) ? "active cursor-pointer" : "cursor-pointer"
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="cta cursor-pointer" onClick={() => setOpen(false)}>
              Contact
            </a>
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="rd-toggle cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun aria-hidden="true" size={17} />
            ) : (
              <Moon aria-hidden="true" size={17} />
            )}
          </button>
          <button
            type="button"
            className={`burger${open ? " open" : ""}`}
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
