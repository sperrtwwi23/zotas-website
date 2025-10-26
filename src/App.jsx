import React from 'react'
import Section from './components/Section'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Benefits from './components/Benefits'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-background text-text font-sans">
      <Navbar />
      <main>
        {/* Hero keeps its own id inside the component */}
        <Hero />

        {/* Sections in App now have explicit ids so anchor links work */}
        <Section id="about" invert bg="bg-primary">
          <About />
        </Section>

        <Section id="products" bg="bg-background">
          <Products />
        </Section>

        <Section id="benefits" invert bg="bg-primary">
          <Benefits />
        </Section>

        <Section id="gallery" bg="bg-background">
          <Gallery />
        </Section>

        <Section id="contact" bg="bg-background">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  )
}
