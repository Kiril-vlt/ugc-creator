export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-primary/10 via-white to-accent/10">
      {/* Hero-Bereich */}
      <section className="w-full max-w-5xl text-center py-24">
        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Erstelle UGC-Ads mit KI – in Minuten 🚀
        </h1>
        <p className="mt-4 text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
          Gib dein Produkt ein und erhalte sofort Skript, Storyboard, Voiceover-Text
          und Captions. Perfekt für TikTok, Instagram Reels und YouTube Shorts.
        </p>
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="/studio"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg shadow-lg hover:scale-105 transition"
          >
            🚀 Jetzt ausprobieren
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-full border border-primary text-primary font-medium text-lg hover:bg-primary/10 transition"
          >
            Mehr erfahren
          </a>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="w-full max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28"
      >
        <div className="p-6 bg-white border rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition">
          <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
            🎬
          </div>
          <h3 className="font-semibold mt-4 text-lg text-slate-900">
            Storyboard automatisch
          </h3>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Visuelle Szenenideen sofort generiert.
          </p>
        </div>

        <div className="p-6 bg-white border rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition">
          <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl">
            🗣️
          </div>
          <h3 className="font-semibold mt-4 text-lg text-slate-900">
            Voiceover-Text
          </h3>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Fertige Skripte für KI-TTS und Sprecher.
          </p>
        </div>

        <div className="p-6 bg-white border rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition">
          <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
            ✍️
          </div>
          <h3 className="font-semibold mt-4 text-lg text-slate-900">
            Captions + Hashtags
          </h3>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Optimiert für Reichweite & Engagement.
          </p>
        </div>

        <div className="p-6 bg-white border rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition">
          <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl">
            💳
          </div>
          <h3 className="font-semibold mt-4 text-lg text-slate-900">
            Stripe Credits
          </h3>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Monetarisierung mit Pay-per-Use.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full max-w-6xl text-center mb-28">
        <h2 className="text-4xl font-bold mb-12 text-slate-900">
          💜 Was unsere Nutzer sagen
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white border rounded-2xl shadow-md hover:shadow-xl transition text-left">
            <p className="text-slate-700 mb-4 leading-relaxed">
              ⭐⭐⭐⭐⭐ <br />
              „In 5 Minuten ein komplettes TikTok-Skript erstellt – genial! Hat mir
              viel Zeit gespart.“
            </p>
            <p className="font-semibold text-slate-900">Lisa M.</p>
            <p className="text-slate-500 text-sm">Content Creator</p>
          </div>

          <div className="p-6 bg-white border rounded-2xl shadow-md hover:shadow-xl transition text-left">
            <p className="text-slate-700 mb-4 leading-relaxed">
              ⭐⭐⭐⭐⭐ <br />
              „Perfekt für schnelle UGC-Videos. Ich kann sofort Captions und Hashtags
              übernehmen.“
            </p>
            <p className="font-semibold text-slate-900">Tom K.</p>
            <p className="text-slate-500 text-sm">Freelancer</p>
          </div>

          <div className="p-6 bg-white border rounded-2xl shadow-md hover:shadow-xl transition text-left">
            <p className="text-slate-700 mb-4 leading-relaxed">
              ⭐⭐⭐⭐⭐ <br />
              „Wir nutzen es im Team für Instagram Ads – spart uns locker mehrere
              Stunden pro Woche.“
            </p>
            <p className="font-semibold text-slate-900">Sophie R.</p>
            <p className="text-slate-500 text-sm">Marketing Managerin</p>
          </div>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="w-full max-w-6xl text-center mb-28">
        <h2 className="text-4xl font-bold mb-12 text-slate-900">💸 Preise</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="p-8 bg-white border rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-slate-900">Starter</h3>
            <p className="text-4xl font-extrabold mb-4 text-primary">0€</p>
            <p className="text-slate-600 mb-6">Ideal zum Testen</p>
            <ul className="text-slate-600 text-sm mb-6 space-y-2">
              <li>✅ 5 kostenlose Storyboards</li>
              <li>✅ Basis-Funktionen</li>
            </ul>
            <a
              href="/studio"
              className="block w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:scale-105 transition"
            >
              Kostenlos starten
            </a>
          </div>

          <div className="p-8 bg-white border rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-slate-900">Pro</h3>
            <p className="text-4xl font-extrabold mb-4 text-accent">29€/Monat</p>
            <p className="text-slate-600 mb-6">Für Creator & Teams</p>
            <ul className="text-slate-600 text-sm mb-6 space-y-2">
              <li>✅ Unbegrenzte Storyboards</li>
              <li>✅ Voiceover-Export</li>
              <li>✅ Priorisierter Support</li>
            </ul>
            <a
              href="/studio"
              className="block w-full px-6 py-3 bg-gradient-to-r from-accent to-primary text-white rounded-lg font-semibold hover:scale-105 transition"
            >
              Upgrade wählen
            </a>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="w-full max-w-4xl text-center mb-28">
        <h2 className="text-4xl font-bold mb-6 text-slate-900">📩 Kontakt</h2>
        <p className="text-slate-600 mb-6">
          Hast du Fragen? Schreib uns einfach eine Nachricht:
        </p>
        <form className="grid gap-4 text-left">
          <input
            type="text"
            placeholder="Dein Name"
            className="px-4 py-3 border rounded-lg text-slate-900 placeholder-slate-400"
          />
          <input
            type="email"
            placeholder="Deine E-Mail"
            className="px-4 py-3 border rounded-lg text-slate-900 placeholder-slate-400"
          />
          <textarea
            placeholder="Deine Nachricht"
            rows={4}
            className="px-4 py-3 border rounded-lg text-slate-900 placeholder-slate-400"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            Nachricht senden
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full bg-slate-900 text-white text-center py-8 mt-auto">
        © {new Date().getFullYear()} UGC Creator – Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
