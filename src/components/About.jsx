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
          <blockquote className="mb-6" >
            <p className="text-lg md:text-xl italic border-l-4 border-secondary pl-4 text-white">
              „Als aktiver Football-Spieler weiß ich genau, wie wichtig hochwertige Ausrüstung ist – und wie frustrierend
              es ist, wenn gute Qualität zu teuer ist. Genau deshalb haben wir <strong>Zotas – Zone of Training and Style</strong> gegründet:
              Um Teams faire Preise, starke Qualität und echtes Spielerwissen zu bieten – direkt von Spielern, ohne Zwischenhändler.“
            </p>
            <footer className="mt-3 text-sm text-white/80">
              – <strong>Thomas Sperr</strong>, Running Back bei den Hellenstein Rascals &amp; Mitgründer von Zotas
            </footer>
          </blockquote>

          <p className="leading-relaxed text-white/90">
            Unser Fokus: perfekte Passform, robuste Materialien, klare Kommunikation und schnelle Abwicklung für Vereine und Teams.
            Maßgeschneiderte Jerseys, Hosen, Teamwear und Trainings-Equipment – entwickelt auf dem Feld, nicht nur am Schreibtisch.
          </p>
        </motion.div>

        {/* Bild mit Hover-Effekt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden shadow-soft group"
        >
          <img
            src={portrait}
            alt="Thomas Sperr – Running Back bei den Hellenstein Rascals"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>
    </Section>
  )
}
