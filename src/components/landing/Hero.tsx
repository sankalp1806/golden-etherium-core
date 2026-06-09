import sat1 from "@/assets/satellite-1.jpg";
import sat2 from "@/assets/satellite-2.jpg";
import sat3 from "@/assets/satellite-3.jpg";
import { LiveNotification } from "./LiveNotification";
import { NeuralLines } from "./NeuralLines";
import { SatelliteCard } from "./SatelliteCard";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-36 md:px-12 md:pt-44">
      {/* Central radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(167,139,113,0.18), transparent 70%)" }}
      />

      {/* Neural canvas */}
      <div className="relative mx-auto hidden h-[640px] max-w-6xl lg:block">
        <NeuralLines />

        {/* Central node */}
        <div className="absolute left-1/2 top-[48.5%] aspect-video w-[420px] -translate-x-1/2 -translate-y-1/2">
          <div className="glass animate-glow-breathe h-full w-full rounded-[28px] p-3">
            <div className="flex h-full w-full flex-col justify-between rounded-[20px] bg-gradient-to-br from-white/[0.04] to-transparent p-6">
              <div className="flex items-center justify-between">
                <LiveNotification text="Neural sync active" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold">Aurea Core</span>
              </div>
              <div>
                <p className="text-display text-3xl italic text-foreground">The connected mind</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Every tool, idea, and teammate — one intelligent canvas.
                </p>
              </div>
              <div className="flex gap-2">
                {["Vision", "Compose", "Render", "Ship"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] text-gold-light"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Satellites */}
        <SatelliteCard
          image={sat2}
          label="Gallery"
          caption="Neural map"
          width={210}
          delay={0}
          className="absolute left-[2%] top-[8%]"
        />
        <SatelliteCard
          image={sat1}
          label="Render"
          caption="Liquid form"
          width={250}
          delay={1.2}
          className="absolute right-[1%] top-[4%]"
        />
        <SatelliteCard
          image={sat3}
          label="Studio"
          caption="Light study"
          width={240}
          delay={0.6}
          className="absolute bottom-[6%] right-[2%]"
        />
        <div
          className="glass animate-float-soft absolute bottom-[8%] left-[3%] rounded-[20px] px-5 py-4"
          style={{ animationDelay: "1.8s" }}
        >
          <p className="text-display text-4xl italic text-gold-light">12.4M</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Ideas connected
          </p>
        </div>
      </div>

      {/* Headline */}
      <div className="relative mx-auto mt-2 max-w-4xl text-center lg:-mt-16">
        <p className="animate-reveal-up mb-6 text-[11px] uppercase tracking-[0.35em] text-gold">
          Neural intelligence for creative teams
        </p>
        <h1
          className="text-display animate-reveal-up font-medium italic leading-[1.05] text-foreground"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", animationDelay: "0.1s" }}
        >
          Where every <span className="text-gold">idea</span> finds its{" "}
          <span className="text-gold">connection</span>.
        </h1>
        <p
          className="animate-reveal-up mx-auto mt-7 max-w-xl text-base text-muted-foreground"
          style={{ animationDelay: "0.2s" }}
        >
          Aurea links your tools, assets, and teammates onto a single living canvas —
          orchestrated by an AI that thinks the way your studio does.
        </p>
        <div
          className="animate-reveal-up mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <button className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-gold hover:text-gold-hover">
            Watch the film
          </button>
          <button className="rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-gold-hover hover:shadow-[0_0_40px_rgba(167,139,113,0.4)]">
            Start free trial
          </button>
        </div>
      </div>
    </section>
  );
}