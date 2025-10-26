import React from 'react'
import Section from './Section'
import bagImg from '../assets/images/bag.jpg'
import glovesImg from '../assets/images/gloves.jpg'
import sledImg from '../assets/images/sled.jpg'
import dummyImg from '../assets/images/dummy.jpg'
import hoodieBack from '../assets/images/hoodie-back.jpg'
import hoodieFront from '../assets/images/hoodie-front.jpg'
import pantsBack from '../assets/images/pants-back.jpg'
import pantsFront from '../assets/images/pants-front.jpg'
import jerseyBack from '../assets/images/jersey-back.png'
import jerseyFront from '../assets/images/jersey-front.png'
import { useState } from 'react'
import { motion } from 'framer-motion'

function FlipCard({ front, back, name }) {
  const [flip, setFlip] = useState(false)
  return (
    <div className="w-64 h-80 perspective cursor-pointer" onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)}>
      <div className={`relative w-full h-full flip-container ${flip ? 'flip-180' : ''}`}>
        <img src={front} alt={name + ' Vorderseite'} className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-soft backface-hidden" />
        <img src={back} alt={name + ' Rückseite'} className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-soft backface-hidden" style={{ transform: 'rotateY(180deg)' }} />
      </div>
      <p className="mt-3 text-center font-semibold">{name}</p>
    </div>
  )
}

function ProductCard({ img, title, desc }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-soft card-hover max-w-sm">
      <img src={img} alt={title} className="w-full h-44 object-cover rounded-2xl mb-4" />
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  )
}

export default function Products() {
  return (
      <div className="max-w-6xl mx-auto py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold mb-10 text-center"
        >
          Unsere Produkte
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 place-items-center mb-14">
          <FlipCard front={jerseyFront} back={jerseyBack} name="Jersey" />
          <FlipCard front={pantsFront} back={pantsBack} name="Hose" />
          <FlipCard front={hoodieFront} back={hoodieBack} name="Teamwear" />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <ProductCard img={dummyImg} title="Tackling Dummies" desc="Harte Hülle, stabile Nähte, lange Haltbarkeit." />
          <ProductCard img={sledImg} title="Blocking Sled" desc="Robust und modular für verschiedene Trainingsziele." />
          <ProductCard img={glovesImg} title="Receiver Gloves" desc="Grip, der bei jedem Wetter performt." />
          <ProductCard img={bagImg} title="Team Bags" desc="Viel Platz, verstärkte Böden, Teambranding möglich." />
        </div>
      </div>
  )
}
