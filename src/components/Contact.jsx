import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Kontakt aufnehmen</h2>

      <form
        action="https://formspree.io/f/mqagepdp"   // dein echter Formspree-Link
        method="POST"
        className="max-w-xl mx-auto space-y-4 text-left"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-slate-700">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Dein Name"
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        {/* Team */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-slate-700">
            Team
          </label>
          <input
            type="text"
            name="team"
            placeholder="Teamname (optional)"
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        {/* E-Mail */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-slate-700">
            E-Mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="deine@email.de"
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        {/* Produktkategorie */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-slate-700">
            Produktkategorie<span className="text-red-500">*</span>
          </label>
          <select
            name="category"
            required
            className="w-full p-3 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option value="">Bitte auswählen...</option>
            <option value="Jerseys">Jerseys</option>
            <option value="Hosen">Hosen</option>
            <option value="Teamwear">Teamwear</option>
            <option value="Trainingsequipment">Trainingsequipment</option>
            <option value="Zubehör">Zubehör</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>

        {/* Nachricht */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-slate-700">
            Nachricht<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            placeholder="Worum geht’s?"
            rows="5"
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-secondary transition-colors"
        >
          Absenden
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-500">
        Wir melden uns schnellstmöglich bei dir!
      </p>
    </section>
  );
}
