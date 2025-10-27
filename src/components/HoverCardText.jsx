import React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

/**
 * Universelle HoverCard-Komponente
 * 
 * Props:
 * - children: Inhalt der Karte
 * - bg: Hintergrundfarbe (Tailwind-Klasse)
 * - hoverScale: Skalierung beim Hover (default 1.05)
 * - brightness: Aufhellung beim Hover (default 1.05)
 */
export default function HoverCard({
  children,
  bg = "bg-background",
  hoverScale = 1.05,
  brightness = 1.05,
  className = "",
}) {
  // wir steuern die Hover-Animation über MotionValues
  const scale = useMotionValue(1)
  const bright = useTransform(scale, [1, hoverScale], [1, brightness])

  return (
    <motion.div
      className={`relative rounded-3xl overflow-hidden shadow-soft cursor-pointer ${className}`}
      style={{ scale }}
      whileHover={{ scale: hoverScale }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      {/* Hintergrundfarbe */}
      <motion.div
        className={`absolute inset-0 ${bg} rounded-3xl will-change-transform`}
        style={{ filter: bright }}
      />

      {/* Inhalt */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Schatteneffekt */}
      <div className="absolute inset-0 rounded-3xl transition-shadow duration-300 group-hover:shadow-lg" />
    </motion.div>
  )
}
