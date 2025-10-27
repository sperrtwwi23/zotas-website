import React from "react"
import Section from "./Section"
import { Check } from "./icons"
import HoverCard from "./HoverCardText"

export default function Benefits() {
  const items = [
    { title: "Direktvertrieb", desc: "Ohne Zwischenhändler – besserer Preis bei gleicher Qualität." },
    { title: "Spieler-geprüft", desc: "Entwickelt und getestet von aktiven Footballern." },
    { title: "Maßgeschneidert", desc: "Passform, Farben und Branding exakt für dein Team." },
    { title: "Transparente Abwicklung", desc: "Klare Timelines, Samples und verlässliche Kommunikation." },
  ]

  return (
    <Section id="benefits" invert bg="bg-primary" className="py-24 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-white">
          Warum Zotas?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <HoverCard key={it.title} bg="bg-background">
              <div className="flex items-start gap-3 mb-3">
  <div className="mt-1.5">
    <Check />
  </div>
  <h3 className="font-bold text-primary leading-snug">{it.title}</h3>
</div>

              <p className="text-sm text-slate-600 antialiased">
                {it.desc}
              </p>
            </HoverCard>
          ))}
        </div>
      </div>
    </Section>
  )
}
