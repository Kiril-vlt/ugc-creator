"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function StudioPage() {
  const [product, setProduct] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!product) return;
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
      });

      const data = await res.json();
      if (data.result) {
        setResult(data.result);
      } else {
        setResult("⚠️ Fehler: Keine Antwort von der API.");
      }
    } catch (err) {
      setResult("❌ Fehler beim Abrufen der Daten.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        🎬 UGC Creator Studio
      </h1>
      <p className="text-slate-600 mb-12 text-center max-w-xl">
        Gib dein Produkt ein und erhalte sofort ein KI-generiertes Storyboard inkl.
        Hook, Szenen, Captions und Hashtags.
      </p>

      {/* Eingabeformular */}
      <div className="w-full max-w-lg bg-white border rounded-2xl shadow-md p-8">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Produkt eingeben:
        </label>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="z. B. Protein Shake"
        />
        <button
          onClick={generate}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:brightness-95 disabled:opacity-50 transition"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generiere Storyboard...
            </>
          ) : (
            "Storyboard generieren"
          )}
        </button>
      </div>

      {/* Ergebnis */}
      {result && (
        <div className="mt-12 w-full max-w-2xl bg-white border rounded-2xl shadow-md p-6 text-left whitespace-pre-wrap">
          {result}
        </div>
      )}
    </main>
  );
}
