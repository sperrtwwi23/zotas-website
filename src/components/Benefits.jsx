import React from 'react'
import Section from './Section'
import { motion } from 'framer-motion'
import { Check } from './icons.jsx'

export default function Benefits() {
  const items = [
    { title: 'Direktvertrieb', desc: 'Ohne Zwischenhändler – besserer Preis bei gleicher Qualität.' },
    { title: 'Spieler-geprüft', desc: 'Entwickelt und getestet von aktiven Footballern.' },
    { title: 'Maßgeschneidert', desc: 'Passform, Farben und Branding exakt für dein Team.' },
    { title: 'Transparente Abwicklung', desc: 'Klare Timelines, Samples und verlässliche Kommunikation.' },
  ]
  return (
    <Section id="benefits" invert bg="bg-primary" className="py-24 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold mb-10 text-center"
        >
          Warum Zotas?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl bg-background p-6 shadow-soft card-hover">
              <div className="flex items-center gap-3 mb-3">
                <Check />
                <h3 className="font-bold">{it.title}</h3>
              </div>
              <p className="text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
