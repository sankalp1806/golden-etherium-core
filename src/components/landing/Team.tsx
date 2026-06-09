import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

const members = [
  { image: team1, name: "Elena Voss", role: "Founder & Creative Director" },
  { image: team2, name: "Marcus Reyn", role: "Head of Neural Systems" },
];

export function Team() {
  return (
    <section id="team" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">The Studio</p>
          <h2 className="text-display text-4xl italic leading-tight text-foreground md:text-5xl">
            Built by people who <span className="text-gold">obsess</span> over craft.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {members.map((m) => (
            <div
              key={m.name}
              className="group glass overflow-hidden rounded-[28px] p-3 transition-all duration-500 hover:border-gold/30"
            >
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                />
              </div>
              <div className="flex items-end justify-between px-4 pb-3 pt-6">
                <p className="text-display text-3xl italic text-foreground">{m.name}</p>
                <p className="max-w-[40%] text-right text-[10px] font-light uppercase tracking-[0.25em] text-gold">
                  {m.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}