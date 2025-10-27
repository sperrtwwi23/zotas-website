import React from "react"
import { motion } from "framer-motion"

export default function ProductCard({ img, title, desc }) {
  return (
    <motion.div
      className="rounded-3xl bg-white shadow-soft cursor-pointer overflow-hidden flex flex-col items-center text-center transform-gpu"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Bild – skaliert leicht, separat für GPU-Performance */}
      <div className="w-full h-44 overflow-hidden">
        <motion.img
          src={img}
          alt={title}
          className="object-contain w-full h-full p-4 select-none will-change-transform"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>

      {/* Text bleibt gestochen scharf */}
      <div className="p-6">
        <h4 className="text-lg font-bold mb-2 text-slate-900">{title}</h4>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </motion.div>
  )
}
