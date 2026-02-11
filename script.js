const comics = [
  {
    id: 1,
    title: "Lorong Terakhir",
    genre: "Mystery",
    description:"Tidak ada yang bisa menjelaskan kapan lorong itu muncul, Orang-orang hanya sadar satu hal: sebelumnya lorong itu tidak ada di sana",
    image: "LorongTerakhir.png"
  },
  {
    id: 2,
    title: "Kamar pasien",
    genre: "Mystery",
    description:"sudah tak seharusnya aku memperhatikan kamar itu",
    image: "KamarNomor0.png"
  },
  {
    id: 3,
    title: "Suara dari Dalam Lemari",
    genre: "Mystery",
    image: "SuaraDariDalamLemari.png"
  },
  {
    id: 4,
    title: "Tawa dari Dinding",
    genre: "Mystery",
    image: "TawaDariDinding.png"
  },
  {
    id: 5,
    title: "jika ini aku,lalu siapa yang ada di dalam bus??",
    genre: "Mystery",
    image: "images/naruto.jpg"
  },
  {
    id: 6,
    title: "suara nafas misterius",
    genre: "Mystery",
    image: "images/onepiece.jpg"
  },
  {
    id: 7,
    title: "satpam",
    genre: "Supernatural",
    image: "images/demonslayer.jpg"
  },
  {
    id: 8,
    title: "jangan ngeyel",
    genre: "Supernatural",
    image: "images/naruto.jpg"
  },
  {
    id: 9,
    title: "kamar jenazah",
    genre: "Supernatural",
    image: "images/naruto.jpg"
  },
  {
    id: 10,
    title: "cari apa mas??",
    genre: "Supernatural",
    image: "images/naruto.jpg"
  },
  {
    id: 11,
    title: "Rumah Mbah",
    genre: "Supernatural",
    image: "images/onepiece.jpg"
  },
  {
    id: 12,
    title: "Mahasiswa ghaib",
    genre: "Supernatural",
    image: "images/demonslayer.jpg"
  },
  {
    id: 13,
    title: "sirih kapur",
    genre: "Supernatural",
    image: "images/naruto.jpg"
  },
  {
    id: 14,
    title: "Taman Bermain Jam 3 Pagi",
    genre: "Mystery",
    image: "images/naruto.jpg"
  },
  {
    id: 15,
    title: "Toko kelontong",
    genre: "Mystery",
    image: "images/naruto.jpg"
  },
  {
    id: 16,
    title: "siapa yang berjalan di atas plafon?",
    genre: "Mystery",
    description:"Tidak ada yang bisa menjelaskan kapan lorong itu muncul, Orang-orang hanya sadar satu hal: sebelumnya lorong itu tidak ada di sana",
    image: "LorongTerakhir.png"
  },
  {
    id: 17,
    title: "Pohon mangga",
    genre: "Mystery",
    image: "KamarNomor0.png"
  },
  {
    id: 18,
    title: "pantai terakhir",
    genre: "Mystery",
    image: "SuaraDariDalamLemari.png"
  },
  {
    id: 19,
    title: "Gerimis",
    genre: "Supernatural",
    image: "TawaDariDinding.png"
  },
  {
    id: 20,
    title: "Pria yang menangis",
    genre: "Mystery",
    image: "images/naruto.jpg"
  },
  {
    id: 21,
    title: "Mati lampu",
    genre: "Mystery",
    image: "images/onepiece.jpg"
  },
  {
    id: 22,
    title: "potret",
    genre: "Supernatural",
    image: "images/demonslayer.jpg"
  },
  {
    id: 23,
    title: "Lucid dream",
    genre: "Psychological",
    image: "images/naruto.jpg"
  },
  {
    id: 24,
    title: "Sandal kuning",
    genre: "Supernatural",
    image: "images/naruto.jpg"
  },
  {
    id: 25,
    title: "kakak",
    genre: "Supernatural",
    image: "images/naruto.jpg"
  },
  {
    id: 26,
    title: "Ucapan salam",
    genre: "Mystery",
    image: "images/onepiece.jpg"
  },
  {
    id: 27,
    title: "Bayangan yg merangkak",
    genre: "Supernatural",
    image: "images/demonslayer.jpg"
  },
  {
    id: 28,
    title: "mata",
    genre: "Supernatural",
    image: "images/naruto.jpg"
  },
  {
    id: 29,
    title: "anak kecil",
    genre: "Mystery",
    image: "images/naruto.jpg"
  },
  {
    id: 30,
    title: "Dapur yang Selalu Menyala",
    genre: "Mystery",
    image: "images/naruto.jpg"
  },
  {
    id: 31,
    title: "Kereta bayi",
    genre: "Mystery",
    description:"Tidak ada yang bisa menjelaskan kapan lorong itu muncul, Orang-orang hanya sadar satu hal: sebelumnya lorong itu tidak ada di sana",
    image: "LorongTerakhir.png"
  },
  {
    id: 32,
    title: "Alat musik 0",
    genre: "Mystery",
    image: "KamarNomor0.png"
  },
  {
    id: 33,
    title: "Kucing",
    genre: "Mystery",
    image: "SuaraDariDalamLemari.png"
  },
  {
    id: 34,
    title: "wanita yang menangis",
    genre: "Mystery",
    image: "TawaDariDinding.png"
  },
  {
    id: 35,
    title: "Lift",
    genre: "Supernatural",
    image: "images/naruto.jpg"
  },
  {
    id: 36,
    title: "Rintihan",
    genre: "Supernatural",
    image: "images/onepiece.jpg"
  },
  {
    id: 37,
    title: "Bola",
    genre: "Supernatural",
    image: "images/demonslayer.jpg"
  },
  {
    id: 38,
    title: "Amis",
    genre: "Mystery",
    image: "images/naruto.jpg"
  },
  {
    id: 39,
    title: "Darah menstruasi",
    genre: "Mystery",
    image: "images/naruto.jpg"
  },
  {
    id: 40,
    title: "Shift malam",
    genre: "Psychological",
    image: "images/naruto.jpg"
  },
  {
    id: 41,
    title: "Adik perempuan",
    genre: "Supernatural",
    image: "images/onepiece.jpg"
  },
  {
    id: 42,
    title: "Cermin",
    genre: "Supernatural",
    image: "images/demonslayer.jpg"
  },
  {
    id: 43,
    title: "Bayangan yang Tidak Punya Tubuh",
    genre: "Supernatural",
    image: "images/naruto.jpg"
  },
  {
    id: 44,
    title: "Taman Bermain Jam 3 Pagi",
    genre: "Mystery",
    image: "images/naruto.jpg"
  },
  {
    id: 45,
    title: "Dapur yang Selalu Menyala",
    genre: "Mystery",
    image: "images/naruto.jpg"
  },
  {
    id: 46,
    title: "Ada yang Tinggal di Balik Pohon",
    genre: "Supernatural",
    image: "images/onepiece.jpg"
  },
  {
    id: 47,
    title: "Bayangan di Dalam Air",
    genre: "Supernatural",
    image: "images/demonslayer.jpg"
  },
  {
    id: 48,
    title: "Bayangan yang Tidak Punya Tubuh",
    genre: "Supernatural",
    image: "images/naruto.jpg"
  },
  {
    id: 49,
    title: "Taman Bermain Jam 3 Pagi",
    genre: "Mystery",
    image: "images/naruto.jpg"
  },
  {
    id: 50,
    title: "Dapur yang Selalu Menyala",
    genre: "Mystery",
    image: "images/naruto.jpg"
  }
];


let filtered = [...comics];
let page = 1;
const perPage = 10;

// ================= RENDER =================
function render() {
  const grid = document.getElementById("comicGrid");
  grid.innerHTML = "";

  const start = (page - 1) * perPage;
  filtered.slice(start, start + perPage).forEach(c => {
    const rating = localStorage.getItem("rating_" + c.id) || 0;

    grid.innerHTML += `
      <div class="bg-slate-800 rounded-lg overflow-hidden cursor-pointer
      hover:-translate-y-2 hover:shadow-2xl transition"
      data-title="${c.title.toLowerCase()}"
      onclick="openComic(${c.id})">

        <img src="${c.image}" class="h-60 w-full object-cover">

        <div class="p-3">
          <h3 class="font-semibold">${c.title}</h3>
          <p class="text-sm text-slate-400">${c.genre}</p>

          <div class="flex mt-2" onclick="event.stopPropagation()">
            ${[1,2,3,4,5].map(s => `
              <span onclick="rate(${c.id},${s})"
                class="cursor-pointer text-xl
                ${s <= rating ? 'text-yellow-400' : 'text-slate-500'}">★</span>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  });

  renderPagination();
}

// ================= PAGINATION =================
function renderPagination() {
  const total = Math.ceil(filtered.length / perPage);
  const p = document.getElementById("pagination");
  p.innerHTML = "";

  for (let i = 1; i <= total; i++) {
    p.innerHTML += `
      <button onclick="gotoPage(${i})"
      class="px-3 py-1 rounded ${i===page?'bg-red-500':'bg-slate-700'}">
      ${i}</button>
    `;
  }
}

function gotoPage(n) {
  page = n;
  render();
}

// ================= SEARCH =================
function doSearch(value) {
  filtered = comics.filter(c =>
    c.title.toLowerCase().includes(value.toLowerCase())
  );
  page = 1;
  render();
}

searchInput.oninput = e => doSearch(e.target.value);
searchMobile.oninput = e => doSearch(e.target.value);

// ================= GENRE =================
function filterGenre(g) {
  filtered = g === "All" ? comics : comics.filter(c => c.genre === g);
  page = 1;
  render();
}

// ================= RATING =================
function rate(id, value) {
  localStorage.setItem("rating_" + id, value);
  render();
}

// ================= READER =================
function openComic(id) {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("reader").classList.remove("hidden");

  document.getElementById("readerTitle").innerText = "Comic " + id;
  const pages = document.getElementById("pages");
  pages.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    pages.innerHTML += `
      <img src="https://picsum.photos/800/1200?random=${id}${i}"
      class="rounded w-full">
    `;
  }
}

function backHome() {
  document.getElementById("reader").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}

// ================= MOBILE MENU =================
menuBtn.onclick = () => {
  mobileMenu.classList.toggle("hidden");
};

//  CLOSE MENU MOBILE SAAT DESKTOP
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    mobileMenu.classList.add("hidden");
  }
});

render();
render();