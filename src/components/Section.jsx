import React from 'react'

export default function Section({
  id,
  children,
  invert = false,
  bg = 'bg-white',
  className = '',
}) {
  // Unterschiedliche Clip-Pfade je nach invert
  const clipStyle = {
    clipPath: invert
      ? 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' // oben leicht schräg, unten entgegengesetzt
      : 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
    marginTop: '-1px',
  }

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${bg}`}
      style={clipStyle}
    >
      <div className={`max-w-6xl mx-auto px-6 py-24 ${className}`}>
        {children}
      </div>
    </section>
  )
}
