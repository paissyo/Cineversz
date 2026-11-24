const moviesData = [
    {
        id: 1,
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        rating: 8.7,
        director: "Christopher Nolan",
        cast: "Matthew McConaughey, Anne Hathaway",
        description: "Ketika bumi tidak lagi dapat dihuni, sekelompok astronot melakukan perjalanan melintasi galaksi untuk mencari planet baru demi keberlangsungan hidup manusia.",
        poster: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600",
        backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
        videoType: "youtube",
        videoUrl: "https://www.youtube-nocookie.com/embed/zSWdZVtXT7E?autoplay=1",
        featured: true
    },
    {
        id: 2,
        title: "Spider-Man: Across the Spider-Verse",
        year: 2023,
        genre: "Animation, Action, Adventure",
        rating: 8.6,
        director: "Joaquim Dos Santos",
        cast: "Shameik Moore, Hailee Steinfeld",
        description: "Miles Morales terlempar melintasi Multiverse dan bertemu dengan tim Spider-People yang bertugas melindungi garis waktu.",
        poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600",
        backdrop: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200",
        videoType: "youtube",
        videoUrl: "https://www.youtube-nocookie.com/embed/cqGjhVJWtEg?autoplay=1",
        featured: false
    },
    {
        id: 3,
        title: "Tears of Steel",
        year: 2012,
        genre: "Sci-Fi, Action",
        rating: 7.9,
        director: "Ian Hubert",
        cast: "Derek de Lint, Sergio Hasselbaink",
        description: "Di masa depan distopia fiksi ilmiah, sekelompok pejuang berusaha menyelamatkan bumi dari serangan robot raksasa.",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600",
        backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200",
        videoType: "mp4",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        featured: false
    },
    {
        id: 4,
        title: "Oppenheimer",
        year: 2023,
        genre: "Biography, Drama, History",
        rating: 8.9,
        director: "Christopher Nolan",
        cast: "Cillian Murphy, Emily Blunt",
        description: "Kisah biografi dramatis J. Robert Oppenheimer, fisikawan yang memimpin Proyek Manhattan untuk menciptakan bom atom pertama di dunia.",
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600",
        backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
        videoType: "youtube",
        videoUrl: "https://www.youtube-nocookie.com/embed/uYPbbksJxIg?autoplay=1",
        featured: false
    },
    {
        id: 5,
        title: "Big Buck Bunny",
        year: 2008,
        genre: "Animation, Comedy",
        rating: 8.1,
        duration: "10 menit",
        director: "Sacha Goedegebure",
        cast: "Blender Animation",
        description: "Seekor kelinci besar yang baik hati menghadapi sekelompok hewan nakal yang mengganggunya di hutan.",
        poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600",
        backdrop: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=1200",
        videoType: "mp4",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        featured: false
    },
    {
        id: 6,
        title: "The Batman",
        year: 2022,
        genre: "Action, Crime, Drama",
        rating: 8.3,
        director: "Matt Reeves",
        cast: "Robert Pattinson, Zoë Kravitz",
        description: "Batman mengungkap korupsi yang mengakar di Gotham City sambil memburu seorang pembunuh berantai sadis bernama The Riddler.",
        poster: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=600",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200",
        videoType: "youtube",
        videoUrl: "https://www.youtube-nocookie.com/embed/mqqft2x_Aa4?autoplay=1",
        featured: false
    },
    {
        id: 7,
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Action",
        rating: 8.4,
        duration: "3j 01m",
        director: "Anthony Russo, Joe Russo",
        cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson"],
        description: "Setelah kepunahan separuh populasi alam semesta oleh Thanos, sisa-sisa anggota Avengers harus berkumpul kembali dan mempertaruhkan segalanya untuk membalikkan kehancuran demi menyelamatkan mereka yang telah tiada.",
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1",
        featured: false
    },
    {
        id: 8,
        title: "Titanic",
        year: 1997,
        genre: "Romance",
        rating: 7.9,
        duration: "3j 14m",
        director: "James Cameron",
        cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
        description: "Kisah cinta legendaris antara pemuda miskin berjiwa bebas bernama Jack Dawson dan seorang bangsawan muda bernama Rose DeWitt Bukater di atas kapal megah RMS Titanic yang bernasib tragis.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/8/86/Titanic_Poster.jpg",
        backdrop: "https://upload.wikimedia.org/wikipedia/commons/8/86/Titanic_Poster.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/kVrqfYjkTdQ?autoplay=1",
        featured: false
    },
    {
        id: 9,
        title: "Green Book",
        year: 2018,
        genre: "Drama",
        rating: 8.2,
        duration: "2j 10m",
        director: "Peter Farrelly",
        cast: ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"],
        description: "Seorang bouncer berdarah Italia-Amerika menjadi sopir pribadi bagi seorang pianis klasik kulit hitam terkenal dalam tur konser di wilayah Selatan Amerika Serikat era 1960-an yang penuh tantangan rasisme.",
        poster: "https://image.tmdb.org/t/p/w500/mxaFA28gR6c0vlJDa2HdVySPZBW.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/5En0fmDagt3Pk8d7P3uTwfeQceg.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/QkZxoko_HC0?autoplay=1",
        featured: false
    },
    {
        id: 10,
        title: "Fury",
        year: 2014,
        genre: "War",
        rating: 7.6,
        duration: "2j 14m",
        director: "David Ayer",
        cast: ["Brad Pitt", "Shia LaBeouf", "Logan Lerman", "Michael Peña", "Jon Bernthal"],
        description: "Pada bulan-bulan terakhir Perang Dunia II di Eropa, seorang sersan tentara Amerika bernama Wardaddy memimpin lima kru tank Sherman dalam misi mematikan jauh di belakang garis pertahanan musuh Jerman.",
        poster: "https://image.tmdb.org/t/p/w500/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/95ckrV6wQgbffurAVmETQ5YKASL.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/-OGvZoIrXpg?autoplay=1",
        featured: false
    },
    {
        id: 11,
        title: "John Wick",
        year: 2014,
        genre: "Action",
        rating: 7.4,
        duration: "1j 41m",
        director: "Chad Stahelski",
        cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen", "Willem Dafoe"],
        description: "Mantan pembunuh bayaran legendaris keluar dari masa pensiunnya untuk membalas dendam tanpa ampun terhadap gangster Rusia yang telah merampas mobil kesayangan dan membunuh anjing peninggalan almarhum istrinya.",
        poster: "https://image.tmdb.org/t/p/w500/7dzngS8pLkGJpyeskCFcjPO9qLF.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/2AUmvWm5ZDQ?autoplay=1",
        featured: false
    },
    {
        id: 12,
        title: "All Quiet on the Western Front",
        year: 2022,
        genre: "War",
        rating: 7.8,
        duration: "2j 28m",
        director: "Edward Berger",
        cast: ["Felix Kammerer", "Albrecht Schuch", "Aaron Hilmer", "Daniel Brühl"],
        description: "Kisah mencekam seorang prajurit muda Jerman di garis depan Perang Dunia I. Antusiasme awalnya untuk membela negara seketika sirna saat menghadapi kebrutalan dan kenyataan pahit parit peperangan.",
        poster: "https://image.tmdb.org/t/p/w500/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg",
        backdrop: "https://image.tmdb.org/t/p/w500/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/hf8EYbVxpCY?autoplay=1",
        featured: false
    },
    {
        id: 13,
        title: "Kingsman: The Secret Service",
        year: 2014,
        genre: "Action",
        rating: 7.7,
        duration: "2j 09m",
        director: "Matthew Vaughn",
        cast: ["Colin Firth", "Taron Egerton", "Samuel L. Jackson", "Mark Strong", "Michael Caine"],
        description: "Sebuah organisasi mata-mata rahasia kelas atas merekrut seorang pemuda jalanan berandalan namun berbakat ke dalam program pelatihan agen super untuk menggagalkan rencana jahat seorang miliarder teknologi.",
        poster: "https://image.tmdb.org/t/p/w500/r6q9wZK5a2K51KFj4LWVID6Ja1r.jpg",
        backdrop: "https://image.tmdb.org/t/p/w500/r6q9wZK5a2K51KFj4LWVID6Ja1r.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/kl8F-8tR8to?autoplay=1",
        featured: false
    },
    {
        id: 14,
        title: "Mission: Impossible - Dead Reckoning",
        year: 2023,
        genre: "Action",
        rating: 7.7,
        duration: "2j 43m",
        director: "Christopher McQuarrie",
        cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg", "Rebecca Ferguson"],
        description: "Ethan Hunt dan tim IMF harus melacak senjata kecerdasan buatan baru yang sangat berbahaya sebelum jatuh ke tangan yang salah, sembari menghadapi musuh misterius nan kuat dari masa lalu Ethan.",
        poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        backdrop: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/avz0Jcy23lk?autoplay=1",
        featured: false
    },
    {
        id: 15,
        title: "Coco",
        year: 2017,
        genre: "Animation, Comedy, Adventure",
        rating: 8.4,
        duration: "1j 45m",
        director: "Lee Unkrich",
        cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
        description: "Bercita-cita menjadi musisi handal, seorang anak laki-laki bernama Miguel tak sengaja terdampar di Negeri Orang Mati yang penuh warna untuk menguak rahasia leluhur keluarganya.",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/Rvr68u635R8?autoplay=1",
        featured: false
    },
    {
        id: 16,
        title: "Deadpool",
        year: 2016,
        genre: "Action, Comedy",
        rating: 8.0,
        duration: "1j 48m",
        director: "Tim Miller",
        cast: ["Ryan Reynolds", "Morena Baccarin", "Ed Skrein", "T.J. Miller"],
        description: "Mantan tentara bayaran yang menderita kanker menjalani eksperimen ilegal yang memberinya kemampuan penyembuhan super dan selera humor sarkastik saat ia memburu dalang yang menghancurkan hidupnya.",
        poster: "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png",
        backdrop: "https://image.tmdb.org/t/p/original/eSVvx8xys2NuFhl8fevXt41wX7v.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/ONHBaC-pfsk?autoplay=1",
        featured: false
    },
    {
        id: 17,
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi, Action",
        rating: 8.8,
        duration: "2j 28m",
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
        description: "Seorang pencuri ulung yang mencuri rahasia perusahaan melalui teknologi berbagi mimpi diberi tugas mustahil: menanamkan sebuah ide ke dalam alam bawah sadar seorang pewaris konglomerat.",
        poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0?autoplay=1",
        featured: false
    },
    {
        id: 18,
        title: "Parasite",
        year: 2019,
        genre: "Drama, Thriller",
        rating: 8.5,
        duration: "2j 12m",
        director: "Bong Joon-ho",
        cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
        description: "Keluarga miskin pengangguran perlahan menyusup dan bekerja untuk sebuah keluarga kaya raya dengan berpura-pura menjadi tenaga profesional berkualifikasi tinggi, hingga insiden tak terduga terjadi.",
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/hiKmpFcDHio6jLXGeNyRyuARUb5.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/5xH0RzeSojI?autoplay=1",
        featured: false
    }
        ,
    {
        id: 19,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action, Crime, Drama",
        rating: 9.0,
        duration: "2j 32m",
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
        description: "Ketika ancaman yang dikenal sebagai Joker menebar teror dan kekacauan di Gotham, Batman harus menerima salah satu ujian psikologis dan fisik terberat untuk menegakkan keadilan.",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/EXeTwQWrcwY?autoplay=1",
        featured: false
    },
    {
        id: 20,
        title: "Spirited Away",
        year: 2001,
        genre: "Animation, Fantasy, Adventure",
        rating: 8.6,
        duration: "2j 05m",
        director: "Hayao Miyazaki",
        cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
        description: "Gadis berusia 10 tahun bernama Chihiro tanpa sengaja memasuki dunia roh dan dewa. Setelah orang tuanya diubah menjadi babi, ia harus bekerja di pemandian roh ajaib demi menyelamatkan mereka.",
        poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/ByXuk9QqQkk?autoplay=1",
        featured: false
    },
    {
        id: 21,
        title: "Toy Story 3",
        year: 2010,
        genre: "Animation, Comedy, Adventure",
        rating: 8.3,
        duration: "1j 43m",
        director: "Lee Unkrich",
        cast: ["Tom Hanks", "Tim Allen", "Joan Cusack"],
        description: "Saat Andy bersiap berangkat ke perguruan tinggi, Woody, Buzz, dan teman-temannya tak sengaja disumbangkan ke tempat penitipan anak Sunnyside yang ternyata penuh intrik.",
        poster: "https://upload.wikimedia.org/wikipedia/en/6/69/Toy_Story_3_poster.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/wE5JGzujfvDPMIfFjJyrhXFjZLc.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/JcpWXaA2qeg?autoplay=1",
        featured: false
    },
    {
        id: 22,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama, Crime",
        rating: 9.3,
        duration: "2j 22m",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        description: "Kisah persahabatan luar biasa antara dua narapidana selama puluhan tahun, yang menemukan pelipur lara dan penebusan akhir melalui tindakan kebaikan yang pantang menyerah.",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/PLl99DlL6b4?autoplay=1",
        featured: false
    },
    {
        id: 23,
        title: "Fight Club",
        year: 1999,
        genre: "Drama, Thriller",
        rating: 8.8,
        duration: "2j 19m",
        director: "David Fincher",
        cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        description: "Seorang pekerja kantoran yang menderita insomnia bertemu dengan penjual sabun misterius bernama Tyler Durden dan mendirikan klub pertarungan bawah tanah yang radikal.",
        poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/qtRKDV93gk8?autoplay=1",
        featured: false
    },
    {
        id: 24,
        title: "Your Name",
        year: 2016,
        genre: "Animation, Romance, Drama",
        rating: 8.4,
        duration: "1j 46m",
        director: "Makoto Shinkai",
        cast: ["Ryunosuke Kamiki", "Mone Kamishiraishi", "Ryo Narita"],
        description: "Dua remaja sekolah menengah yang belum pernah bertemu—seorang gadis di pedesaan dan laki-laki di Tokyo—secara misterius mulai bertukar tubuh saat mereka tidur.",
        poster: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
        backdrop: "https://image.tmdb.org/t/p/original/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/xU47nhruN-Q?autoplay=1",
        featured: false
    },
    {
        id: 25,
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime, Drama",
        rating: 8.9,
        duration: "2j 34m",
        director: "Quentin Tarantino",
        cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis"],
        description: "Kehidupan dua pembunuh bayaran mafia, seorang petinju, dan sepasang perampok restoran terjalin dalam empat kisah kekerasan dan penebusan dosa di Los Angeles.",
        poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY?autoplay=1",
        featured: false
    },
    {
        id: 26,
        title: "Forrest Gump",
        year: 1994,
        genre: "Drama, Romance, Comedy",
        rating: 8.8,
        duration: "2j 22m",
        director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        description: "Kisah hidup pria sederhana berhati mulia asal Alabama yang tanpa sengaja menjadi saksi dan bagian dari beberapa peristiwa paling bersejarah di abad ke-20.",
        poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/bLvqoHBptjg?autoplay=1",
        featured: false
    },
    {
        id: 27,
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi, Action",
        rating: 8.7,
        duration: "2j 16m",
        director: "Lana Wachowski, Lilly Wachowski",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        description: "Seorang hacker bernama Neo menemukan bahwa realitas yang selama ini ia jalani hanyalah simulasi ilusi buatan mesin cerdas yang memperbudak umat manusia.",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/7c9UVPPiTPltouxShY9f5q4f5o1.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/vKQi3bBA1y8?autoplay=1",
        featured: false
    },
    {
        id: 28,
        title: "Gladiator",
        year: 2000,
        genre: "Action, Drama, Adventure",
        rating: 8.5,
        duration: "2j 35m",
        director: "Ridley Scott",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        description: "Mantan jenderal Romawi yang dikhianati dan keluarganya dibantai bangkit dari perbudakan sebagai gladiator mematikan untuk membalas dendam kepada kaisar tiran.",
        poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/Ar7d4f9A24D39uA3E39F.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/owK1qxDselE?autoplay=1",
        featured: false
    },
    {
        id: 29,
        title: "Dune: Part Two",
        year: 2024,
        genre: "Sci-Fi, Adventure",
        rating: 8.6,
        duration: "2j 46m",
        director: "Denis Villeneuve",
        cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Javier Bardem"],
        description: "Paul Atreides bersatu dengan Chani dan bangsa Fremen dalam misi balas dendam terhadap para konspirator yang telah menghancurkan keluarganya di planet gurun pasir Arrakis.",
        poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s520gh4.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/Way9Dexny3w?autoplay=1",
        featured: false
    },
    {
        id: 30,
        title: "The Conjuring",
        year: 2013,
        genre: "Horror, Mystery",
        rating: 7.5,
        duration: "1j 52m",
        director: "James Wan",
        cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
        description: "Penyelidik paranormal Ed dan Lorraine Warren berusaha membantu sebuah keluarga yang baru pindah ke rumah pertanian terpencil yang diteror oleh entitas iblis mengerikan.",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Conjuring_poster.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/k10ETZ41q5o?autoplay=1",
        featured: false
    }

];

const genreList = ["Semua", "Action", "Sci-Fi", "Animasi", "Drama", "Comedy"];
let genreAktif = "Semua";

document.addEventListener("DOMContentLoaded", () => {
    tampilkanHeroBanner();
    tampilkanKatalogFilm(moviesData);
    tampilkanGenreChips();
    pasangPencarian();
});

function tampilkanHeroBanner() {
    const filmUtama = moviesData.find(film => film.featured === true);
    if (!filmUtama) return;

    document.getElementById("heroTitle").textContent = filmUtama.title;
    document.getElementById("heroRating").textContent = filmUtama.rating;
    document.getElementById("heroYear").textContent = filmUtama.year;
    document.getElementById("heroGenre").textContent = filmUtama.genre;
    document.getElementById("heroDesc").textContent = filmUtama.description;
    document.getElementById("hero").style.backgroundImage = `url('${filmUtama.backdrop}')`;

    document.getElementById("heroWatchBtn").onclick = () => bukaPlayerVideo(filmUtama);
    document.getElementById("heroDetailBtn").onclick = () => bukaDetailFilm(filmUtama);
}

function tampilkanGenreChips() {
    const wadahGenre = document.getElementById("genreChipsContainer");
    if (!wadahGenre) return;
    wadahGenre.innerHTML = "";

    genreList.forEach(genre => {
        const tombol = document.createElement("button");
        tombol.className = `genre-chip ${genreAktif === genre ? "active" : ""}`;
        tombol.textContent = genre;

        tombol.onclick = () => {
            genreAktif = genre;
            tampilkanGenreChips();
            filterFilm();
        };

        wadahGenre.appendChild(tombol);
    });
}

function pasangPencarian() {
    const inputSearch = document.getElementById("searchInput");
    if (!inputSearch) return;

    inputSearch.addEventListener("input", () => {
        filterFilm();
    });
}

function filterFilm() {
    const inputEl = document.getElementById("searchInput");
    const kataKunci = inputEl ? inputEl.value.toLowerCase().trim() : "";
    const hasilFilter = moviesData.filter(film => {
        const judul = (film.title || "").toLowerCase();
        const genre = (film.genre || "").toLowerCase();
        let targetGenre = (genreAktif === "Animasi") ? "animat" : genreAktif.toLowerCase();
        const cocokGenreTombol = (genreAktif === "Semua") || genre.includes(targetGenre);
        const cocokSearch = judul.includes(kataKunci) || genre.includes(kataKunci) || (kataKunci === "komedi" && genre.includes("comedy"));
        return cocokGenreTombol && cocokSearch;
    });

    tampilkanKatalogFilm(hasilFilter);

    const textJumlah = document.getElementById("movieCountText");
    if (textJumlah) {
        textJumlah.textContent = `${hasilFilter.length} Film Ditemukan`;
    }
}

function tampilkanKatalogFilm(daftarFilm = moviesData) {
    const wadahKatalog = document.getElementById("moviesGrid");
    if (!wadahKatalog) return;
    wadahKatalog.innerHTML = "";

    if (daftarFilm.length === 0) {
        wadahKatalog.innerHTML = `
            <p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">
                Film tidak ditemukan untuk pencarian ini...
            </p>
        `;
        return;
    }

    daftarFilm.forEach(film => {
        const kartu = document.createElement("div");
        kartu.className = "movie-card";

        kartu.innerHTML = `
            <div class="card-poster">
                <img src="${film.poster}" alt="${film.title}">
                <span class="card-badge">${film.genre}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${film.title}</h3>
                <div class="card-meta">
                    <span>${film.year}</span>
                    <span class="card-rating">★ ${film.rating}</span>
                </div>
            </div>
        `;

        kartu.onclick = () => bukaDetailFilm(film);
        wadahKatalog.appendChild(kartu);
    });
}

function bukaDetailFilm(film) {
    const modal = document.getElementById("detailModal");
    if (!modal) return;

    document.getElementById("detailTitle").textContent = film.title;
    document.getElementById("detailRating").textContent = film.rating;
    document.getElementById("detailGenre").textContent = film.genre;
    document.getElementById("detailYear").textContent = film.year;
    document.getElementById("detailDuration").textContent = film.duration || "2 Jam";
    document.getElementById("detailDesc").textContent = film.description;
    document.getElementById("detailDirector").textContent = film.director || "-";
    document.getElementById("detailCast").textContent = film.cast || "-";

    const backdrop = document.getElementById("detailBackdrop");
    if (backdrop) backdrop.style.backgroundImage = `url('${film.backdrop || film.poster}')`;

    const btnPutar = document.getElementById("detailWatchBtn");
    if (btnPutar) {
        btnPutar.onclick = () => {
            bukaPlayerVideo(film);
        };
    }

    bukaModal(modal);
}

function bukaPlayerVideo(film) {
    const playerModal = document.getElementById("playerModal");
    const videoWadah = document.getElementById("videoContainer");
    const playerTitle = document.getElementById("playerTitle");
    if (!playerModal || !videoWadah) return;

    if (playerTitle) playerTitle.textContent = `${film.title} (${film.year})`;
    videoWadah.innerHTML = "";

    if (film.videoType === "mp4") {
        videoWadah.innerHTML = `
            <video controls autoplay style="width:100%; height:100%; background:#000;">
                <source src="${film.videoUrl}" type="video/mp4">
                Browser Anda tidak mendukung video HTML5.
            </video>
        `;
    } else {
        videoWadah.innerHTML = `
            <iframe 
                src="${film.videoUrl}" 
                title="Player ${film.title}" 
                style="width:100%; height:100%; border:none;"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    }

    bukaModal(playerModal);
}

function bukaModal(modal) {
    if (!modal) return;
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function tutupSemuaModal() {
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
    document.body.style.overflow = "auto";

    const videoWadah = document.getElementById("videoContainer");
    if (videoWadah) videoWadah.innerHTML = "";
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-close-btn") || e.target.closest(".modal-close-btn")) {
        tutupSemuaModal();
    }
    if (e.target.classList.contains("modal-overlay")) {
        tutupSemuaModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        tutupSemuaModal();
    }
});