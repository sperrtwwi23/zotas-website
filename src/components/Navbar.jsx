import React from 'react'
export default function Navbar() {
  const navItems = [
    { href: '#about', label: 'Über uns' },
    { href: '#products', label: 'Produkte' },
    { href: '#benefits', label: 'Vorteile' },
    { href: '#gallery', label: 'Galerie' },
    { href: '#contact', label: 'Anfrage' },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-blur border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-extrabold text-xl text-primary">Zotas</a>
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors">{item.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="inline-flex items-center rounded-2xl bg-primary px-4 py-2 text-white text-sm font-semibold shadow-soft hover:bg-secondary transition-colors">
          Unverbindlich anfragen
        </a>
      </nav>
    </header>
  )
}
