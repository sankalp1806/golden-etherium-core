import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { Team } from "@/components/landing/Team";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurea — Neural Intelligence for Creative Teams" },
      {
        name: "description",
        content:
          "Aurea is the luxury AI workspace that connects your tools, ideas, and team through an intelligent neural canvas.",
      },
      { property: "og:title", content: "Aurea — Neural Intelligence for Creative Teams" },
      {
        property: "og:description",
        content:
          "The luxury AI workspace that connects your tools, ideas, and team through an intelligent neural canvas.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-dots relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
