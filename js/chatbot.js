document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("chatbotToggleBtn");
    const chatWindow = document.getElementById("chatbotWindow");
    const closeBtn = document.getElementById("chatbotCloseBtn");
    const messagesContainer = document.getElementById("chatbotMessages");
    const inputEl = document.getElementById("chatbotInput");
    const sendBtn = document.getElementById("chatbotSendBtn");
    const suggestionsContainer = document.getElementById("chatbotSuggestions");

    if (!toggleBtn || !chatWindow) return;

    let isWaitingResponse = false;
    let chatHistory = [];

    function toggleChat() {
        const isOpen = chatWindow.classList.toggle("active");
        if (isOpen && inputEl) {
            setTimeout(() => inputEl.focus(), 300);
        }
    }

    toggleBtn.addEventListener("click", toggleChat);
    if (closeBtn) closeBtn.addEventListener("click", toggleChat);

    function appendMessage(sender, text, isTyping = false) {
        const msgDiv = document.createElement("div");
        msgDiv.className = `chatbot-message ${sender} ${isTyping ? "typing-indicator" : ""}`;

        if (isTyping) {
            msgDiv.innerHTML = `<span></span><span></span><span></span>`;
            msgDiv.id = "typingIndicator";
        } else {
            let formatted = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            formatted = formatted.replace(/\n/g, "<br>");
            msgDiv.innerHTML = formatted;

            chatHistory.push({ role: sender === "user" ? "user" : "model", text });
        }

        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return msgDiv;
    }

    function removeTypingIndicator() {
        const el = document.getElementById("typingIndicator");
        if (el) el.remove();
    }

    async function sendMessage(userText) {
        const text = userText || inputEl.value.trim();
        if (!text || isWaitingResponse) return;

        appendMessage("user", text);
        inputEl.value = "";
        isWaitingResponse = true;
        sendBtn.disabled = true;

        appendMessage("bot", "", true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: text,
                    history: chatHistory.slice(-4)
                })
            });

            removeTypingIndicator();

            if (!response.ok) {
                throw new Error(`Server status ${response.status}`);
            }

            const data = await response.json();
            const reply = data.reply || "Wah, sinyal gua agak delay bray. Coba ulangi lagi ya!";
            appendMessage("bot", reply);

        } catch (err) {
            removeTypingIndicator();
            console.warn("Chatbot backend offline/unreachable, using smart fallback:", err.message);

            let smartFallback = "Gua **CineBot** 🎬! Karena web dibuka tanpa server backend `/api/chat`, ini rekomendasi film pilihan gua:";
            const lower = text.toLowerCase();

            if (lower.includes("horor") || lower.includes("horror")) {
                smartFallback += "<br><br>1. **The Conjuring (2013)** - *Horror*<br>Atmosfer rumah berhantu yang intens dengan jumpscare berkualitas.<br><br>2. **Pengabdi Setan (2017)** - *Horror*<br>Horor lokal terbaik karya Joko Anwar dengan ketegangan tanpa henti.";
            } else if (lower.includes("sci-fi") || lower.includes("scifi") || lower.includes("luar angkasa")) {
                smartFallback += "<br><br>1. **Interstellar (2014)** - *Sci-Fi*<br>Eksplorasi lubang hitam dan teori relativitas waktu yang emosional.<br><br>2. **Inception (2010)** - *Sci-Fi/Action*<br>Konsep mimpi dalam mimpi dengan visual spektakuler.";
            } else if (lower.includes("komedi") || lower.includes("lucu") || lower.includes("comedy")) {
                smartFallback += "<br><br>1. **Agak Laen (2024)** - *Comedy/Horror*<br>Komedi rumah hantu paling kocak dan menghibur.<br><br>2. **The Hangover (2009)** - *Comedy*<br>Kekacauan pesta bujang di Las Vegas yang bikin ketawa lepas.";
            } else {
                smartFallback += "<br><br>1. **Avengers: Endgame (2019)** - *Action*<br>Puncak pertarungan pahlawan super terhebat sepanjang masa.<br><br>2. **Parasite (2019)** - *Drama/Thriller*<br>Plot twist brilian peraih Oscar tentang kesenjangan sosial.";
            }

            smartFallback += "<br><br><em>💡 Rekomendasi otomatis Cinevers AI!</em>";
            appendMessage("bot", smartFallback);
        } finally {
            isWaitingResponse = false;
            sendBtn.disabled = false;
            inputEl.focus();
        }
    }

    sendBtn.addEventListener("click", () => sendMessage());
    inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    });

    if (suggestionsContainer) {
        suggestionsContainer.addEventListener("click", (e) => {
            const chip = e.target.closest(".suggestion-chip");
            if (chip && !isWaitingResponse) {
                const query = chip.getAttribute("data-query");
                if (query) sendMessage(query);
            }
        });
    }
});