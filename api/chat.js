const SYSTEM_INSTRUCTION = `
Kamu adalah CineBot, asisten cerdas dan kurator film di Cinevers (website streaming dan katalog film modern).
Gaya komunikasi: Santai, ramah, asik (bahasa Indonesia kasual tapi sopan, seperti teman ngobrol film).

Tugas dan Aturan:
1. Rekomendasikan film berdasarkan genre, suasana hati, atau kata kunci dari user.
2. Setiap rekomendasi berikan: Judul (Tahun), Genre, Rating bintang singkat, dan alasan kenapa film itu wajib ditonton.
3. Jaga jawaban ringkas, padat, menarik, dan berikan emoji film 🎬🍿.
4. Jangan berikan spoiler ending film.
`;

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");

    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Hanya metode POST" });

    const { message, history = [] } = req.body || {};
    if (!message || message.trim() === "") {
        return res.status(400).json({ error: "Pesan tidak boleh kosong" });
    }

    const GROQ_API_KEY = (process.env.GROQ_API_KEY || "").replace(/['"]/g, "").trim();

    if (!GROQ_API_KEY) {
        return res.status(200).json({
        reply: "Halo bray! Kunci `GROQ_API_KEY` belum dipasang di file `.env`.",
        mode: "demo"
        });
    }

    try {
        const messages = [
        { role: "system", content: SYSTEM_INSTRUCTION }
        ];

        const recentHistory = Array.isArray(history) ? history.slice(-4) : [];
        for (const item of recentHistory) {
        if (item.sender === "user" || item.role === "user") {
            messages.push({ role: "user", content: item.text });
        } else if (item.sender === "bot" || item.role === "model") {
            messages.push({ role: "assistant", content: item.text });
        }
        }

        messages.push({ role: "user", content: message });

        const modelToUse = "qwen/qwen3.8-27b";

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${GROQ_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: modelToUse,
            messages: messages,
            temperature: 0.7,
            max_tokens: 400
        })
        });

        if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        const errMsg = errData.error?.message || `HTTP ${response.status}`;
        return res.status(200).json({
            reply: `⚠️ **Groq AI Error:**\n*${errMsg}*`,
            mode: "error"
        });
        }

        const data = await response.json();
        const botReply = data.choices?.[0]?.message?.content || "Maaf bray, gua lagi blank nih. Coba tanya lagi ya!";

        return res.status(200).json({
        reply: botReply,
        mode: "live"
        });

    } catch (error) {
        return res.status(200).json({
        reply: `⚠️ **Error:** ${error.message}`,
        mode: "error"
        });
    }
}