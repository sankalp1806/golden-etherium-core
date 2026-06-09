import { useState } from "react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Studio",
    monthly: 19,
    annual: 15,
    desc: "For independent makers finding their flow.",
    features: ["1 neural canvas", "500 generations / mo", "Community library", "Email support"],
    popular: false,
  },
  {
    name: "Pro",
    monthly: 49,
    annual: 39,
    desc: "For creative teams shipping every day.",
    features: [
      "Unlimited canvases",
      "10k generations / mo",
      "Shared smart library",
      "Priority rendering",
      "Live collaboration",
    ],
    popular: true,
  },
  {
    name: "Atelier",
    monthly: 129,
    annual: 99,
    desc: "For studios that demand the absolute best.",
    features: ["Everything in Pro", "Dedicated capacity", "Custom models", "White-glove onboarding"],
    popular: false,
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">Pricing</p>
          <h2 className="text-display text-4xl italic text-foreground md:text-5xl">
            Plans for every <span className="text-gold">ambition</span>.
          </h2>

          <div className="glass mt-9 flex items-center gap-1 rounded-full p-1">
            {[
              { k: false, label: "Monthly" },
              { k: true, label: "Annual" },
            ].map((opt) => (
              <button
                key={opt.label}
                onClick={() => setAnnual(opt.k)}
                className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                  annual === opt.k
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`glass relative rounded-[28px] p-8 transition-all duration-500 ${
                t.popular
                  ? "border-gold/40 lg:-translate-y-4 lg:shadow-[0_0_80px_rgba(167,139,113,0.18)]"
                  : "hover:border-white/20"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-background">
                  Most Popular
                </span>
              )}
              <h3 className="text-sm uppercase tracking-[0.2em] text-gold-light">{t.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-5xl font-bold text-foreground">
                  ${annual ? t.annual : t.monthly}
                </span>
                <span className="mb-1.5 text-sm text-muted-foreground">/mo</span>
              </div>
              <button
                className={`mt-7 w-full rounded-full py-3 text-sm font-semibold transition-all duration-300 ${
                  t.popular
                    ? "bg-foreground text-background hover:bg-gold-hover"
                    : "border border-white/20 text-foreground hover:border-gold hover:text-gold-hover"
                }`}
              >
                Choose {t.name}
              </button>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}