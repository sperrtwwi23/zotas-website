import React from 'react'
import Section from './Section'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'
import gallery5 from '../assets/images/gallery-5.jpg'
import gallery6 from '../assets/images/gallery-6.jpg'

import { motion } from 'framer-motion'

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]

export default function Gallery() {
  return (
    <Section id="gallery" skew bg="bg-background" className="py-24 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold mb-10 text-center"
        >
        </motion.h2>
      </div>
    </Section>
  )
}
