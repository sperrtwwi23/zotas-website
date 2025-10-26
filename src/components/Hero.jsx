import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-28 px-6 bg-background overflow-hidden"
      >
        {/* --- Vollflächiger Hintergrund über gesamte Seite --- */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 90%, rgba(59,130,246,0.25) 0%, rgba(241,245,249,1) 100%)'
,
          }}
        />

        {/* --- Inhalt zentriert --- */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-primary"
          >
            Zotas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl md:text-2xl mb-10 text-slate-800"
          >
            Individuelle Football Ausrüstung – direkt von Spielern für Teams ohne Zwischenhändler
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="#products"
              className="rounded-2xl bg-primary text-white px-8 py-3 font-semibold hover:bg-secondary transition-colors shadow-soft"
            >
              Jetzt entdecken
            </a>
            <a
              href="#about"
              className="rounded-2xl border border-primary/70 text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Unsere Vision
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- Weißer Abstand unterhalb --- */}
      {/* <div className="h-32 bg-background"></div> */}
    </>
  )
}
