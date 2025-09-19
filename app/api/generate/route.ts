import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { product } = await req.json();

    if (!product) {
      return NextResponse.json(
        { error: "❌ Kein Produkt angegeben." },
        { status: 400 }
      );
    }

    // 👉 Prompt für OpenAI
    const prompt = `
Erstelle ein kurzes UGC Storyboard für das Produkt "${product}".

- Hook (ein packender Opener)
- 3 Szenen (je 1 Satz, visuell beschrieben)
- Caption (kurzer Call-to-Action)
- 3 relevante Hashtags
`;

    // Falls kein API Key vorhanden ist → Demo Output
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        result: `🎬 Storyboard für: ${product}\n\nHook: "Schon mal von ${product} gehört?"\nSzene 1: ${product} im Einsatz zeigen\nSzene 2: Person benutzt ${product}\nSzene 3: Ergebnis + Call-to-Action\n\nCaption: "Teste jetzt ${product} und überzeuge dich selbst!"\nHashtags: #${product.replace(/\s+/g, "")} #ugc #creator`,
      });
    }

    // 👉 Anfrage an OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0].message?.content) {
      throw new Error("Keine gültige Antwort von OpenAI erhalten.");
    }

    return NextResponse.json({
      result: data.choices[0].message.content,
    });
  } catch (err) {
    console.error("Fehler in API:", err);
    return NextResponse.json(
      { error: "❌ Request failed" },
      { status: 500 }
    );
  }
}
