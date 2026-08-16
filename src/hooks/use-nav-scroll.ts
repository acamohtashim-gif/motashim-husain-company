import { useEffect, useState } from "react";

export function useNavScroll(sectionIds: string[]) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 150;
      let current = "";
      targets.forEach((t) => {
        if (t.offsetTop <= y) current = t.id;
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return { scrolled, active };
}
