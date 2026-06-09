import { Boxes, Layers, Sparkles, Workflow } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Neural Canvas",
    body: "Connect every asset, doc, and tool to a living graph your whole team can navigate.",
  },
  {
    icon: Sparkles,
    title: "Generative Studio",
    body: "Produce on-brand visuals, copy, and motion from a single prompt in seconds.",
  },
  {
    icon: Layers,
    title: "Smart Layers",
    body: "Version, branch, and remix work without ever losing the thread of an idea.",
  },
  {
    icon: Boxes,
    title: "Unified Library",
    body: "Every render and reference, searchable and instantly reusable across projects.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">Capabilities</p>
          <h2 className="text-display text-4xl italic leading-tight text-foreground md:text-5xl">
            An intelligence layer for{" "}
            <span className="text-gold">everything you make</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group glass rounded-[24px] p-7 transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.05]"
              style={{ transitionTimingFunction: "var(--ease-smooth)" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 transition-transform duration-500 group-hover:scale-110">
                <f.icon className="h-5 w-5 text-gold-light" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}