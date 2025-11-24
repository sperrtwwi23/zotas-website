import React, { useState } from 'react'

export default function Footer() {
  const [showImpressum, setShowImpressum] = useState(false)
  const [showDatenschutz, setShowDatenschutz] = useState(false)

  return (
    <footer className="py-10 px-6 bg-primary text-white relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-semibold">© {new Date().getFullYear()} Zotas </p>
        <nav className="flex items-center gap-6 text-sm">
          <button onClick={() => setShowImpressum(true)} className="hover:underline">
            Impressum
          </button>
          <button onClick={() => setShowDatenschutz(true)} className="hover:underline">
            Datenschutz
          </button>
          <a href="#top" className="hover:underline">Nach oben</a>
        </nav>
      </div>

      {/* ---------- IMPRESSUM MODAL ---------- */}
{showImpressum && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
    <div className="bg-white text-text rounded-2xl shadow-soft max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
      <button
        onClick={() => setShowImpressum(false)}
        className="absolute top-3 right-3 text-slate-500 hover:text-primary text-xl"
        aria-label="Schließen"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-4">Impressum</h2>

      <p><strong>Zotas GbR</strong></p>

      <p className="mt-2 font-semibold">Gesellschafter</p>

      <div className="mt-1">
        <p>Thomas Alexander Sperr</p>
        <p>In den Grüben 130<br />84489 Burghausen</p>
        <p className="mt-1">
          Mobil: 0176 / 30102269<br />
          E-Mail: <a href="mailto:thomas.sperr@zotas.de" className="text-primary underline">thomas.sperr@zotas.de</a>
        </p>
      </div>

      <div className="mt-4">
        <p>Zayan Gujjar</p>
        <p>Piracher Str. 76<br />84489 Burghausen</p>
      </div>

      <p className="mt-4">
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: <em>wird nachgereicht</em>
      </p>

      <p className="mt-4 text-sm text-slate-600">
        Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: Thomas Alexander Sperr, Anschrift wie oben.
      </p>

      <hr className="my-6 border-slate-300" />

      <h3 className="font-semibold text-lg mb-2">Hinweis gemäß Online-Streitbeilegungs-Verordnung</h3>
      <p className="text-sm text-slate-700">
        Nach geltendem Recht sind wir verpflichtet, Verbraucher auf die Existenz der Europäischen Online-Streitbeilegungs-Plattform 
        hinzuweisen, die für die Beilegung von Streitigkeiten genutzt werden kann, ohne dass ein Gericht eingeschaltet werden muss. 
        Für die Einrichtung der Plattform ist die Europäische Kommission zuständig. Die Plattform ist unter folgendem Link erreichbar:{" "}
        <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-primary underline">
          https://ec.europa.eu/odr
        </a>.
      </p>
      <p className="text-sm text-slate-700 mt-2">
        Unsere E-Mail lautet: <a href="mailto:thomas.sperr@zotas.de" className="text-primary underline">thomas.sperr@zotas.de</a>.
        Wir weisen darauf hin, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren im Rahmen der 
        Europäischen Online-Streitbeilegungs-Plattform teilzunehmen. Nutzen Sie zur Kontaktaufnahme bitte unsere oben angegebene 
        E-Mail-Adresse und Telefonnummer.
      </p>

      <p className="mt-6 text-xs text-slate-500">
        Dieses Impressum gilt auch für unsere Social-Media-Auftritte.
      </p>
    </div>
  </div>
)}


      {/* ---------- DATENSCHUTZ MODAL ---------- */}
      {showDatenschutz && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-text rounded-2xl shadow-soft max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowDatenschutz(false)}
              className="absolute top-3 right-3 text-slate-500 hover:text-primary text-xl"
              aria-label="Schließen"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">Datenschutzerklärung</h2>

            <h3 className="font-semibold mt-2 mb-1">1. Verantwortlicher</h3>
            <p>
              Zotas GbR<br />
              Gesellschafter: Thomas Alexander Sperr &amp; Zayan Gujjar<br />
              Anschriften:<br />
              – In den Grüben 130, 84489 Burghausen (Thomas Alexander Sperr)<br />
              – Piracher Str. 77, 84489 Burghausen (Zayan Gujjar)<br />
              E-Mail: <a href="mailto:Thomas.Sperr@zotas.de" className="text-primary underline">Thomas.Sperr@zotas.de</a>
            </p>

            <h3 className="font-semibold mt-4 mb-1">2. Erhebung und Nutzung personenbezogener Daten</h3>
            <p>
              Bei Nutzung des Kontaktformulars verarbeiten wir die von Ihnen eingegebenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage.
              Eine Weitergabe an Dritte erfolgt nicht, es sei denn, dies ist zur Erfüllung Ihrer Anfrage erforderlich oder gesetzlich vorgeschrieben.
            </p>

            <h3 className="font-semibold mt-4 mb-1">3. Rechtsgrundlagen</h3>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung) und ggf. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>

            <h3 className="font-semibold mt-4 mb-1">4. Ihre Rechte</h3>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch.
              Zudem besteht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.
            </p>

            <p className="mt-4 text-sm text-slate-500">Stand: {new Date().toLocaleDateString('de-DE')}</p>
          </div>
        </div>
      )}
    </footer>
  )
}
