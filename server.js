import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;

function loadEnv() {
    const envPath = path.join(__dirname, ".env");
    if (fs.existsSync(envPath)) {
        const lines = fs.readFileSync(envPath, "utf-8").split("\n");
        for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
            const [key, ...values] = trimmed.split("=");
            process.env[key.trim()] = values.join("=").trim().replace(/['"]/g, "");
        }
        }
    }
}
loadEnv();

const MIME_TYPES = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".mp4": "video/mp4"
};

const server = http.createServer(async (req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const pathname = urlObj.pathname;

    const resHelper = {
        statusCode: 200,
        setHeader: (k, v) => res.setHeader(k, v),
        status: function (code) {
        this.statusCode = code;
        return this;
        },
        json: function (data) {
        res.writeHead(this.statusCode, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
        },
        end: () => res.end()
    };

    if (pathname.startsWith("/api/")) {
        let bodyData = {};
        if (req.method === "POST") {
        try {
            const buffers = [];
            for await (const chunk of req) {
            buffers.push(chunk);
            }
            const rawBody = Buffer.concat(buffers).toString();
            bodyData = rawBody ? JSON.parse(rawBody) : {};
        } catch (err) {
            bodyData = {};
        }
        }

        const query = Object.fromEntries(urlObj.searchParams.entries());
        const reqHelper = {
        method: req.method,
        query: query,
        body: bodyData,
        headers: req.headers
    };

    try {
        if (pathname === "/api/chat") {
            const chatModule = await import(`./api/chat.js?update=${Date.now()}`);
            return await chatModule.default(reqHelper, resHelper);
        }
        if (pathname === "/api/movies") {
            const moviesModule = await import(`./api/movies.js?update=${Date.now()}`);
            return await moviesModule.default(reqHelper, resHelper);
        }
        } catch (apiErr) {
        console.error(`[API Error ${pathname}]:`, apiErr.message);
        return resHelper.status(500).json({ error: apiErr.message });
        }

        return resHelper.status(404).json({ error: "Endpoint tidak ditemukan" });
    }

    let filePath = path.join(__dirname, pathname === "/" ? "index.html" : pathname);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    fs.readFile(filePath, (err, content) => {
        if (err) {
        if (err.code === "ENOENT") {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 Not Found</h1>");
        } else {
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
        }
        } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
        }
    });
});

server.listen(PORT, () => {
    console.log(`\n========================================`);
    console.log(`🎬 Cinevers Local Server Siap Berjalan!`);
    console.log(`👉 Buka di browser: http://localhost:${PORT}`);
    console.log(`========================================\n`);
});