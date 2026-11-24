const GENRE_MAP = {
    28: "Action",
    12: "Adventure",
    16: "Animasi",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
};

const REVERSE_GENRE_MAP = {
    "action": 28,
    "animasi": 16,
    "comedy": 35,
    "drama": 18,
    "horror": 27,
    "romance": 10749,
    "sci-fi": 878,
    "scifi": 878
};

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    const { type = "popular", query = "", genre = "", page = 1 } = req.query;
    const TMDB_API_KEY = ProcessingInstruction.env.TMDB_API_KEY;

    if (!TMDB_API_KEY) {
        return res.status(200).json({
            source: "fallback",
            message: "TMDB_API_KEY belum diset di .env. Silakan pasang API key untuk auto-fetch live film bioskop.",
            page: 1,
            totalPages: 1,
            results: []
        });
    }

    try {
        let tmdbUrl = "";

        if (query && query.trim() !== "") {
            tmdbUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}&language=id-ID&include_adult=false`;
        } else if (genre && genre.toLowerCase() !== "semua") {
            const genreId = REVERSE_GENRE_MAP[genre.toLowerCase()];
            const genreParam = genreId ? `&with_genres=${genreId}` : "";
            tmdbUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc${genreParam}&page=${page}&language=id-ID&include_adult=false`;
        } else {
            const validEndpoint = ["popular", "now_playing", "top_rated"].includes(type) ? type : "popular";
            tmdbUrl = `https://api.themoviedb.org/3/movie/${validEndpoint}?api_key=${TMDB_API_KEY}&page=${page}&language=id-ID`;
        }

        const response = await fetch(tmdbUrl);
        if (!response.ok) {
            throw new Error(`TMDB responded with status ${response.status}`);
        }

        const formattedMovies = (data.results || [])
        .filter(item => item.poster_path)
        .map(item => {
            const primaryGenre = (item.genre_ids && item.genre_ids.length > 0 && GENRE_MAP[item.genre_ids[0]])
            ? GENRE_MAP[item.genre_ids[0]]
            : "Drama";

            const releaseYear = item.release_date
            ? parseInt(item.release_date.split("-")[0], 10)
            : new Date().getFullYear();

            return {
                id: `tmdb-${item.id}`,
                tmdbId: item.id,
                title: item.title || item.original_title,
                year: releaseYear,
                genre: primaryGenre,
                rating: item.vote_average ? Math.round(item.vote_average * 10) / 10 : 7.5,
                duration: "2j 05m",
                director: "Bioskop Global",
                cast: ["Pemeran Internasional"],
                description: item.overview || "Sinopsis resmi bioskop belum tersedia dalam Bahasa Indonesia.",
                poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                backdrop: item.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                    : `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                videoType: "youtube",
                videoUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(item.title + " official trailer")}`,
                featured: false
            };
        });

        return res.status(200).json({
            source: "tmdb",
            page: data.page || 1,
            totalPages: data.total_pages || 1,
            totalResults: data.total_results || formattedMovies.length,
            results: formattedMovies
        })
    } catch (error) {
        console.error("Error fetching from TMDB:", error.message);
        return res.status(500).json({
            error: "Gagal mengambil data dari TMDB",
            details: error.message
        });
    }
}
