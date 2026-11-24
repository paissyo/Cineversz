const state = {
    activeGenre: "Semua",
    searchQuery: "",
    favorites: JSON.parse(localStorage.getItem("cinevers_favorites")) || [],
    theme: localStorage.getItem("cinevers_theme") || "dark",
    currentMovie: null
};

const elements = {
    themeToggleBtn: document.getElementById("themeToggleBtn"),

    heroSection: document.getElementById("hero"),
    heroTitle: document.getElementById("heroTitle"),
    heroRating: document.getElementById("heroRating"),
    heroYear: document.getElementById("heroYear"),
    heroGenre: document.getElementById("heroGenre"),
    heroDuration: document.getElementById("heroDuration"),
    heroDesc: document.getElementById("heroDesc"),
    heroWatchBtn: document.getElementById("heroWatchBtn"),
    heroDetailBtn: document.getElementById("heroDetailBtn"),
    heroFavBtn: document.getElementById("heroFavBtn"),

    searchInput: document.getElementById("searchInput"),
    genreChipsContainer: document.getElementById("genreChipsContainer"),

    moviesGrid: document.getElementById("moviesGrid"),
    movieCountText: document.getElementById("movieCountText"),
    catalogHeading: document.getElementById("catalogHeading"),

    detailModal: document.getElementById("detailModal"),
    closeDetailModal: document.getElementById("closeDetailModal"),
    detailBackdrop: document.getElementById("detailBackdrop"),
    detailRating: document.getElementById("detailRating"),
    detailGenre: document.getElementById("detailGenre"),
    detailYear: document.getElementById("detailYear"),
    detailDuration: document.getElementById("detailDuration"),
    detailTitle: document.getElementById("detailTitle"),
    detailDesc: document.getElementById("detailDesc"),
    detailDirector: document.getElementById("detailDirector"),
    detailCast: document.getElementById("detailCast"),
    detailWatchBtn: document.getElementById("detailWatchBtn"),
    detailFavToggleBtn: document.getElementById("detailFavToggleBtn"),

    playerModal: document.getElementById("playerModal"),
    closePlayerModal: document.getElementById("closePlayerModal"),
    videoContainer: document.getElementById("videoContainer"),
    playerTitle: document.getElementById("playerTitle"),
    playerFavBtn: document.getElementById("playerFavBtn"),
    playerSub: document.getElementById("playerSub"),

    navRandomBtn: document.getElementById("navRandomBtn"),
    randomModal: document.getElementById("randomModal"),
    closeRandomModal: document.getElementById("closeRandomModal"),
    triggerSpinBtn: document.getElementById("triggerSpinBtn"),
    randomResultCard: document.getElementById("randomResultCard"),

    watchlistToggleBtn: document.getElementById("watchlistToggleBtn"),
    watchlistDrawer: document.getElementById("watchlistDrawer"),
    closeDrawerBtn: document.getElementById("closeDrawerBtn"),
    watchlistContent: document.getElementById("watchlistContent"),
    favCountBadge: document.getElementById("favCountBadge"),

    bnHome: document.getElementById("bnHome"),
    bnKatalog: document.getElementById("bnKatalog"),
    bnRandom: document.getElementById("bnRandom"),
    bnWatchlist: document.getElementById("bnWatchlist"),
    bnFavBadge: document.getElementById("bnFavBadge"),
};

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderHero();
    renderGenreChips();
    renderCatalog();
    updateFavBadge();
    setupEventListeners();
    setupBottomNav();
});

function initTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    updateThemeIcon();
}

function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", state.theme);
    localStorage.setItem("cinevers_theme", state.theme);
    updateThemeIcon();
}

function updateThemeIcon() {
    if (state.theme === "dark") {
        elements.themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        elements.themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun" style="color: #f59e0b;"></i>';
    }
}

function renderHero() {
    const featuredMovie = moviesData.find(m => m.featured) || moviesData[0];
    if (!featuredMovie) return;
    elements.heroSection.style.backgroundImage = `url('${featuredMovie.backdrop}')`;
    elements.heroTitle.textContent = featuredMovie.title;
    elements.heroRating.textContent = featuredMovie.rating;
    elements.heroYear.textContent = featuredMovie.year;
    elements.heroGenre.textContent = featuredMovie.genre;
    elements.heroDuration.textContent = featuredMovie.duration;
    elements.heroDesc.textContent = featuredMovie.description;
    elements.heroWatchBtn.onclick = () => openPlayerModal(featuredMovie);
    elements.heroDetailBtn.onclick = () => openDetailModal(featuredMovie);

    updateHeroFavBtn(featuredMovie.id);
    elements.heroFavBtn.onclick = () => {
    toggleFavorite(featuredMovie.id);
    updateHeroFavBtn(featuredMovie.id);
    };
}

function updateHeroFavBtn(movieId) {
    const isFav = state.favorites.includes(movieId);
    if (isFav) {
        elements.heroFavBtn.innerHTML = '<i class="fa-solid fa-bookmark" style="color: var(--accent-red);"></i>';
        elements.heroFavBtn.title = "Hapus dari Favorit";
    } else {
        elements.heroFavBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
        elements.heroFavBtn.title = "Tambah ke Favorit";
    }
}

function renderGenreChips() {
    elements.genreChipsContainer.innerHTML ="";

    genreList.forEach(genre => {
    const chip = document.createElement("button");
    chip.className = `genre-chip ${state.activeGenre === genre ? "active" : ""}`;
    chip.textContent = genre;
    chip.onclick = () => {
        state.activeGenre = genre;
        renderGenreChips();
        renderCatalog();
        };
        elements.genreChipsContainer.appendChild(chip);
    });
}

function getFilteredMovies() {
    return moviesData.filter(movie => {
        if (!movie) return false;

        const movieGenre = (movie.genre || "").toLowerCase();
        const q = (state.searchQuery || "").toLowerCase();

        let targetGenre = state.activeGenre.toLowerCase();
        if (targetGenre === "animasi") targetGenre = "animat";

        const matchGenre = state.activeGenre === "Semua" || movieGenre.includes(targetGenre);

        const matchSearch =
            (movie.title && movie.title.toLowerCase().includes(q)) ||
            movieGenre.includes(q) ||
            (q === "animasi" && movieGenre.includes("animat")) ||
            (q === "komedi" && movieGenre.includes("comedy")) ||
            (movie.director && movie.director.toLowerCase().includes(q)) ||
            (Array.isArray(movie.cast) 
                ? movie.cast.some(c => c.toLowerCase().includes(q)) 
                : (typeof movie.cast === "string" && movie.cast.toLowerCase().includes(q)));

        return matchGenre && matchSearch;
    });
}

function renderCatalog() {
    const filtered = getFilteredMovies();
    elements.moviesGrid.innerHTML = "";
    elements.movieCountText.textContent = `${filtered.length} Film Ditemukan`;

    if (filtered.length === 0) {
        elements.moviesGrid.innerHTML = `
        <div class="empty-state">
            <i class="fa-solid fa-film empty-state-icon"></i>
            <h3>Film Tidak Ditemukan</h3>
            <p>Coba gunakan kata kunci lain atau pilih kategori genre yang berbeda.</p>
        </div>
        `;
        return;
    }

    filtered.forEach(movie => {
        const isFav =state.favorites.includes(movie.id);

        const card = document.createElement("article");
        card.className = "movie-card";
        card.innerHTML = `
        <div class="card-poster">
            <img src="${movie.poster}" alt="Poster ${movie.title}" loading="lazy">
            <span class="card-badge">${movie.genre}</span>
            <button class="btn-card-fav ${isFav ? 'active' : ''}" title="${isFav ? 'Hapus dari Favorit' : 'Simpan ke Favorit'}" data-id="${movie.id}">
                <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
                </button>
            </div>
            <div class="card-content">
                <h3 class="card-title" title="${movie.title}">${movie.title}</h3>
                <div class="card-meta">
                <span><i class="fa-regular fa-calendar"></i> ${movie.year}</span>
                <span class="card-rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
                </div>
            </div>
        `;

        const favBtn = card.querySelector(".btn-card-fav");
        favBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(movie.id);
            renderCatalog();
            renderWatchlist();
        });

        card.addEventListener("click", () => {
            openDetailModal(movie);
        });

        elements.moviesGrid.appendChild(card);
    });
}

function openDetailModal(movie) {
    state.currentMovie = movie;

    elements.detailBackdrop.style.backgroundImage = `url('${movie.backdrop || movie.poster}')`;
    elements.detailTitle.textContent = movie.title;
    elements.detailRating.textContent = movie.rating;
    elements.detailGenre.textContent = movie.genre;
    elements.detailYear.textContent = movie.year;
    elements.detailDuration.textContent = movie.duration;
    elements.detailDesc.textContent = movie.description;
    elements.detailDirector.textContent = movie.director || "Tidak diketahui";
    elements.detailCast.textContent = Array.isArray(movie.cast) ? movie.cast.join(", ") : (movie.cast || "-");

    elements.detailWatchBtn.onclick = () => {
        closeModal(elements.detailModal);
        openPlayerModal(movie);
    };

    updateDetailFavBtn(movie.id);
    elements.detailFavToggleBtn.onclick = () => {
        toggleFavorite(movie.id);
        updateDetailFavBtn(movie.id);
        renderCatalog();
        renderWatchlist();
    };

    openModal(elements.detailModal);
}

function updateDetailFavBtn(movieId) {
    const isFav = state.favorites.includes(movieId);
    if (isFav) {
        elements.detailFavToggleBtn.innerHTML = '<i class="fa-solid fa-bookmark" style="color: var(--accent-red);"></i> Hapus dari Favorit';
    } else {
        elements.detailFavToggleBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i> Simpan ke Favorit';
    }
}

function openPlayerModal(movie) {
    state.currentMovie = movie;
    elements.playerTitle.textContent = `${movie.title} (${movie.year})`;
    elements.videoContainer.innerHTML = "";

    if (movie.videoType === "mp4") {
        elements.playerSub.innerHTML = '<span style="color: #22c55e;"><i class="fa-solid fa-circle-check"></i> File MP4 Asli (HTML5 Streaming)</span>';
        elements.videoContainer.innerHTML = `
            <video controls autoplay width="100%" height="100%" style="background:#000;">
                <source src="${movie.videoUrl}" type="video/mp4">
                Browser Anda tidak mendukung tag video HTML5.
            </video>
        `;
    } else {
        elements.playerSub.innerHTML = '<span style="color: #f59e0b;"><i class="fa-brands fa-youtube"></i> Trailer HD Resmi</span>';
        elements.videoContainer.innerHTML = `
        <iframe
            src="${movie.videoUrl}"
            title="Player ${movie.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encryoted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
        `;
    }

    updatePlayerFavBtn(movie.id);
    if (elements.playerFavBtn) {
    elements.playerFavBtn.onclick = () => {
        toggleFavorite(movie.id);
        updatePlayerFavBtn(movie.id);
        renderCatalog();
        renderWatchlist();
    };
    }
    openModal(elements.playerModal);
}

function updatePlayerFavBtn(movieId) {
    const isFav = state.favorites.includes(movieId);
    elements.playerFavBtn.innerHTML = isFav
    ? '<i class="fa-solid fa-bookmark" style="color: var(--accent-red);"></i> Favorit'
    : '<i class="fa-regular fa-bookmark"></i> Tambah Favorit';
}

function closePlayer() {
    elements.videoContainer.innerHTML = "";
    closeModal(elements.playerModal);
}

function toggleFavorite(movieId) {
    const index = state.favorites.indexOf(movieId);
    if (index > -1) {
        state.favorites.splice(index, 1);
    } else {
        state.favorites.push(movieId);
    }
    localStorage.setItem("cinevers_favorites", JSON.stringify(state.favorites));
    updateFavBadge();
}

function updateFavBadge() {
    const count = state.favorites.length;

    elements.favCountBadge.textContent = count;

    if (elements.bnFavBadge) {
        if (count > 0) {
            elements.bnFavBadge.textContent = count;
        elements.bnFavBadge.style.display = "flex";
        } else {
            elements.bnFavBadge.style.display = "none";
        }
    }
}

function renderWatchlist() {
    elements.watchlistContent.innerHTML = "";
    const favMovies = moviesData.filter(m => state.favorites.includes(m.id));

    if (favMovies.length === 0) {
        elements.watchlistContent.innerHTML = `
        <div class="empty-state" style="padding: 40px 10px;">
            <i class="fa-regular fa-bookmark empty-state-icon" style="font-size: 2.2rem;"></i>
            <h4 style="margin-bottom: 6px;">Belum Ada Film Favorit</h4>
            <p style="font-size: 0.85rem;">Klik ikon bookmark pada film mana saja untuk menyimpannya ke daftar ini.</p>
        </div>
        `;
        return;
    }

    favMovies.forEach(movie => {
        const item = document.createElement("div");
        item.className = "fav-item";
        item.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="fav-thumb">
            <div class="fav-info">
                <h4 class="fav-title">${movie.title}</h4>
                <div class="fav-meta">
                    <span><i class="fa-solid fa-star" style="color: var(--accent-gold);"></i> ${movie.rating}</span> |
                    <span>${movie.genre}</span>
                </div>
                <button class="btn-primary" style="padding: 4px 10px; font-size: 0.75rem; margin-top: 8px;">
                    <i class="fa-solid fa-play"></i> Tonton
                </button>
            </div>
            <button class="fav-remove-btn" title="Hapus dari favorit" data id=${movie.id}">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;

        item.querySelector(".btn-primary").onclick = () => {
            closeDrawer();
        openPlayerModal(movie);
        };

        item.querySelector(".fav-remove-btn").onclick = (e) => {
            e.stopPropagation();
        toggleFavorite(movie.id);
        renderWatchlist();
        renderCatalog();
        };

        elements.watchlistContent.appendChild(item);
    });
}

function rollRandomMovie() {
    const resultCard = elements.randomResultCard;
    resultCard.style.display = "block";
    resultCard.innerHTML = `
        <div style="padding: 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--accent-red);">
            <p style="color: var(--accent-gold);"><i class="fa-solid fa-spinner fa-spin"></i> Mengacak film terbaik untukmu...</p>
        </div>
    `;

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * moviesData.length);
        const chosenMovie = moviesData[randomIndex];

        resultCard.innerHTML = `
            <div class="movie-card" style="margin: 0 auto; text-align: left; max-width: 300px;">
                <div class="card-poster">
                    <img src="${chosenMovie.poster}" alt="${chosenMovie.title}">
                    <span class="card-badge">${chosenMovie.genre}</span>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${chosenMovie.title} (${chosenMovie.year})</h3>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                        ${chosenMovie.description}
                    </p>
                    <div style="display: flex; gap: 8px;">
                        <button id="randomWatchBtn" class="btn-primary" style="flex: 1; justify-content: center; font-size: 0.85rem; padding: 8px;">
                            <i class="fa-solid fa-play"></i> Tonton
                        </button>
                        <button id="randomDetailBtn" class="btn-secondary" style="font-size: 0.85rem; padding: 8px;">
                        Detail
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.getElementById("randomWatchBtn").onclick = () => {
            closeModal(elements.randomModal);
        openPlayerModal(chosenMovie);
        };

        document.getElementById("randomDetailBtn").onclick = () => {
            closeModal(elements.randomModal);
        openDetailModal(chosenMovie);
        };
    }, 500);
}

function openModal(modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal(modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function openDrawer() {
    renderWatchlist();
    elements.watchlistDrawer.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeDrawer() {
    elements.watchlistDrawer.classList.remove("active");
    document.body.style.overflow = "";
}

function setupBottomNav() {
    if (!elements.bnRandom || !elements.bnWatchlist) return;

    elements.bnRandom.addEventListener("click", () => {
        setActiveBnItem(elements.bnRandom);
        openModal(elements.randomModal);
    });

    elements.bnWatchlist.addEventListener("click", () => {
        setActiveBnItem(elements.bnWatchlist);
        openDrawer();
    });

    elements.bnHome.addEventListener("click", () => setActiveBnItem(elements.bnHome));
    elements.bnKatalog.addEventListener("click", () => setActiveBnItem(elements.bnKatalog));

    window.addEventListener("scroll", syncBottomNavScroll, { passive: true});
}

function setActiveBnItem(activeItem) {
    const items = document.querySelectorAll(".bottom-nav-item");
    items.forEach(item => item.classList.remove("active"));
    if (activeItem) activeItem.classList.add("active");
}

function syncBottomNavScroll() {
    const katalogEl = document.getElementById("katalog");
    if (!katalogEl) return;
    const katalogTop = katalogEl.getBoundingClientRect().top;
    if (katalogTop <= 80) {
        setActiveBnItem(elements.bnKatalog);
    } else {
        setActiveBnItem(elements.bnHome);
    }
}

function setupEventListeners() {
    elements.themeToggleBtn.addEventListener("click", toggleTheme);

    elements.searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value.trim();
    renderCatalog();
    });

    elements.watchlistToggleBtn.addEventListener("click", openDrawer);
    elements.closeDrawerBtn.addEventListener("click", closeDrawer);
    elements.watchlistDrawer.addEventListener("click", (e) =>  {
        if (e.target === elements.watchlistDrawer) closeDrawer();
    });

    elements.closeDetailModal.addEventListener("click", () => closeModal(elements.detailModal));
    elements.detailModal.addEventListener("click", (e) => {
        if (e.target === elements.detailModal) closeModal(elements.detailModal);
    });

    elements.closePlayerModal.addEventListener("click", closePlayer);
    elements.playerModal.addEventListener("click", (e) => {
        if (e.target === elements.playerModal) closePlayer();
    });

    elements.navRandomBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        openModal(elements.randomModal);
    });
    elements.closeRandomModal.addEventListener("click", () => closeModal(elements.randomModal));
    elements.randomModal.addEventListener("click", (e) => {
        if (e.target === elements.randomModal) closeModal(elements.randomModal);
    });
    elements.triggerSpinBtn.addEventListener("click", rollRandomMovie);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal(elements.detailModal);
        closePlayer();
        closeModal(elements.randomModal);
        closeDrawer();
        }
    });
}