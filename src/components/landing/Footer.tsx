import { ArrowRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const columns = [
  { title: "Product", links: ["Canvas", "Studio", "Library", "Pricing"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  { title: "Resources", links: ["Docs", "Guides", "Changelog", "Status"] },
];

const socials = [Twitter, Instagram, Linkedin, Github];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <a href="#top" className="text-display text-2xl font-bold italic text-foreground">
            Aurea
          </a>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            The connected mind for creative teams.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold-hover"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((c) => (
          <div key={c.title}>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold">{c.title}</p>
            <ul className="mt-5 space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 md:col-span-1">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold">Join Digest</p>
          <p className="mt-5 text-sm text-muted-foreground">
            Monthly notes on AI, design, and the studio.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="glass mt-5 flex items-center gap-2 rounded-full p-1.5 pl-4"
          >
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-all duration-300 hover:bg-gold-hover"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Aurea Labs</span>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
          <a href="#" className="transition-colors hover:text-foreground">Terms</a>
        </div>
      </div>
    </footer>
  );
}