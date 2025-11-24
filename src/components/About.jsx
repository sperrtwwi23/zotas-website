import React from 'react'
import Section from './Section' // Achte: Dateiname ist "Section.jsx", nicht "Sections.jsx"
import { motion } from 'framer-motion'
import portrait from '../assets/images/thomas-portrait.jpg'

export default function About() {
  return (
    <Section id="about" invert bg="bg-primary" className="py-24 md:py-28 px-6">
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Zitat & Text */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
  
  <blockquote className="mb-6">
  <p className="text-lg md:text-xl italic border-l-4 border-secondary pl-4 text-white">
    „Als aktiver Football-Spieler weiß ich genau, wie wichtig hochwertige Ausrüstung ist – und wie frustrierend
    es ist, wenn gute Qualität zu teuer ist. Genau deshalb haben wir <strong>Zotas – Zone of Training and Style</strong> gegründet:
    Um Teams faire Preise, starke Qualität und echtes Spielerwissen zu bieten – direkt von Spielern, ohne Zwischenhändler.“
  </p>
  <footer className="mt-3 text-sm text-white/80">
    – <strong>Thomas Sperr</strong>, Running Back bei den Hellenstein Rascals &amp; Mitgründer von Zotas
  </footer>
</blockquote>

<p className="leading-relaxed text-white">
  Unser Ziel ist es, <strong>Football-Teams jeder Größe zuverlässig mit Ausrüstung zu versorgen, auf die man sich verlassen kann</strong>. 
  Alles, was wir entwickeln, basiert auf echter Spielerfahrung und den Herausforderungen, die wir selbst Woche für Woche
  auf dem Feld erleben.
</p>

<p className="leading-relaxed text-white mt-4">
  Wir legen Wert auf <strong>perfekte Passform, robuste Materialien, ehrliche Beratung und klare Kommunikation</strong>, damit Vereine
  jederzeit wissen, wo ihre Bestellung steht. Maßgeschneiderte Jerseys, Hosen, Teamwear und Trainings-Equipment stehen
  bei uns für Qualität, Funktionalität und Teamidentität – nicht für leere Versprechen.
</p>

<p className="leading-relaxed text-white mt-4">
  Unsere Vision ist eine Marke, die aus der Football-Community heraus entsteht – von Spielern, für Spieler. <strong>Eine Marke,
  die wir selbst gerne früher gehabt hätten</strong>.
</p>

        </motion.div>

        {/* Bild mit Hover-Effekt */}
        <motion.div
  initial={{ opacity: 0, scale: 0.98 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="relative overflow-hidden rounded-3xl shadow-soft group"
>
  <img
    src={portrait}
    alt="Thomas Sperr – Running Back bei den Hellenstein Rascals"
    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
  />
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
</motion.div>


      </div>
    </Section>
  )
}
