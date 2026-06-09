import { useEffect, useState } from "react";

const links = ["Product", "Features", "Pricing", "Team"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass py-3" : "border-b border-transparent py-5"
      }`}
      style={{ transitionTimingFunction: "var(--ease-smooth)" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a href="#top" className="text-display text-2xl font-bold tracking-tight text-foreground">
          Aurea
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-gold-hover"
            >
              {l}
            </a>
          ))}
        </div>

        <button className="rounded-full bg-foreground px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-gold-hover hover:shadow-[0_0_30px_rgba(167,139,113,0.4)]">
          Start Free Trial
        </button>
      </nav>
    </header>
  );
}