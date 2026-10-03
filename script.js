/* ===== Artikel, Portofolio, Beranda: judul bagian di tengah ===== */
(function () {
  var st = document.createElement('style');
  st.id = 'center-heads-style';
  var P = ['artikel', 'portofolio', 'beranda'].map(function (n) { return 'body[data-page="' + n + '"]'; });
    st.textContent =
    P.map(function (p) { return p + ' .sec-h,' + p + ' .sec-h *'; }).join(',') + '{text-align:center !important;}' +
    P.map(function (p) { return p + ' .sec-h'; }).join(',') + '{margin-left:auto !important;margin-right:auto !important;}' +
    P.map(function (p) { return p + ' .sec-h p,' + p + ' .sec-h h2'; }).join(',') + '{margin-left:auto !important;margin-right:auto !important;max-width:720px;}' +
    '';
  document.head.appendChild(st);
})();

/* ===== Portofolio dan Artikel: teks header rata kiri ===== */
(function () {
  var st = document.createElement('style');
  st.id = 'port-hero-left-style';
  var L = ['portofolio', 'artikel'].map(function (n) { return 'body[data-page="' + n + '"]'; });
  function f(suffix) { return L.map(function (b) { return b + suffix; }).join(','); }
  st.textContent =
    f(' .phd > .w') + '{max-width:none !important;margin:0 !important;padding-left:64px !important;padding-right:24px !important;}' +
    f(' .phd') + ',' + f(' .phd *') + '{text-align:left !important;}' +
    f(' .phd h1') + ',' + f(' .phd p') + '{margin-left:0 !important;margin-right:auto !important;}' +
    f(' .phd h1') + '{max-width:18ch;}' +
    f(' .phd p') + '{max-width:50ch;}' +
    '@media (max-width:900px){' + f(' .phd > .w') + '{padding-left:24px !important;}}';
  document.head.appendChild(st);
})();

/* ===== Halaman Kontak: tanpa gambar latar, teks di tengah ===== */
(function () {
  var st = document.createElement('style');
  st.id = 'kontak-hero-style';
  st.textContent =
    'body[data-page="kontak"] .phd{background-image:none !important;text-align:center !important;}' +
    'body[data-page="kontak"] .phd .bgslide{display:none !important;}' +
    'body[data-page="kontak"] .phd *{text-align:center !important;margin-left:auto !important;margin-right:auto !important;}' +
    'body[data-page="kontak"] .phd h1,body[data-page="kontak"] .phd p{max-width:760px;}';
  document.head.appendChild(st);
})();

/* ===== Gaya kartu artikel (otomatis dipasang, tidak perlu edit CSS) ===== */
(function () {
  var st = document.createElement('style');
  st.id = 'artikel-card-style';
  st.textContent = "#grid-artikel .acard.card{ position:relative; display:flex; flex-direction:column; overflow:hidden; padding:0; border:1px solid #e3e9f6; border-radius:20px; background:#fff; text-decoration:none; box-shadow:0 1px 2px rgba(11,31,77,.04); transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease; } #grid-artikel .acard.card::before{ content:\"\"; position:absolute; inset:0 0 auto 0; height:4px; background:linear-gradient(90deg,#1d4ed8,#5b8cff); transform:scaleX(.18); transform-origin:left; transition:transform .35s ease; } #grid-artikel .acard.card:hover{ transform:translateY(-6px); border-color:#bcd0ff; box-shadow:0 18px 40px -16px rgba(29,78,216,.35); } #grid-artikel .acard.card:hover::before{ transform:scaleX(1); } #grid-artikel .acard .a-no{ position:absolute; top:6px; right:18px; font-size:84px; font-weight:800; line-height:1; color:#eef3ff; letter-spacing:-.04em; pointer-events:none; user-select:none; } #grid-artikel .acard .bd{ position:relative; z-index:1; display:flex; flex-direction:column; flex:1; padding:30px 26px 24px; gap:0; } #grid-artikel .acard .a-cat{ align-self:flex-start; padding:5px 12px; border-radius:999px; background:#e8efff; color:#1d4ed8; font-size:12px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; margin-bottom:16px; } #grid-artikel .acard h3{ margin:0 0 10px; font-size:19px; line-height:1.3; color:#0b1f4d; } #grid-artikel .acard .ex{ margin:0 0 22px; font-size:15px; line-height:1.65; color:#5b6784; } #grid-artikel .acard .a-foot{ margin-top:auto; padding-top:16px; border-top:1px dashed #dbe3f5; display:flex; align-items:center; justify-content:space-between; gap:10px; } #grid-artikel .acard .a-time{ display:inline-flex; align-items:center; gap:6px; font-size:13px; color:#7a86a3; } #grid-artikel .acard .go{ display:inline-flex; align-items:center; gap:8px; font-size:14px; font-weight:700; color:#1d4ed8; } #grid-artikel .acard .a-arr{ display:grid; place-items:center; width:30px; height:30px; border-radius:50%; background:#1d4ed8; color:#fff; font-style:normal; font-size:14px; transition:transform .25s ease; } #grid-artikel .acard.card:hover .a-arr{ transform:translateX(4px); } @media (max-width:640px){ #grid-artikel .acard .a-no{ font-size:64px; } #grid-artikel .acard .bd{ padding:26px 20px 20px; } } #grid-artikel .acard.card{min-height:0 !important;height:100%;} #grid-artikel .acard .meta{display:none !important;} #grid-artikel .acard .a-no{font-family:inherit;} #grid-artikel .acard .bd{width:100%;box-sizing:border-box;} ";
  document.head.appendChild(st);
})();

/* ===== Tampilan artikel: daftar baris bernomor, warna biru dan putih diseling ===== */
(function () {
  var G = 'body[data-page] #grid-artikel';
  var C = G + ' .acard.card';
  var css = [
    G + '{display:grid !important;grid-template-columns:1fr !important;gap:14px !important;max-width:920px;margin:0 auto;}',

    /* Baris artikel */
    C + '{flex-direction:row !important;align-items:center;height:auto !important;border-radius:18px;padding:0;background:#fff;}',
    C + ':hover{transform:translateX(6px) !important;box-shadow:0 14px 34px -18px rgba(29,78,216,.45);}',
    C + '::before{inset:0 auto 0 0;width:4px;height:auto;transform:scaleY(.25);transform-origin:top;}',
    C + ':hover::before{transform:scaleY(1);}',
    G + ' .acard .a-no{position:static !important;flex:0 0 auto;width:96px;padding-left:26px;font-size:42px;color:#c4d4fb;text-align:left;}',
    G + ' .acard .bd{padding:22px 26px 22px 0 !important;gap:0;}',
    G + ' .acard .a-cat{margin-bottom:10px;}',
    G + ' .acard h3{font-size:19px;margin:0 0 6px;}',
    G + ' .acard .ex{margin:0 0 14px;font-size:14.5px;}',
    G + ' .acard .a-foot{margin-top:0;padding-top:0;border-top:0;justify-content:flex-start;gap:22px;}',

    /* Warna diseling: nomor ganjil (1, 3, 5...) biru, nomor genap putih.
       Mau dibalik? Ganti ":nth-child(odd)" di bawah menjadi ":nth-child(even)". */
    C + ':nth-child(odd){background:linear-gradient(135deg,#0a1a3d,#0f2350 55%,#1d4ed8);border-color:transparent;box-shadow:0 18px 36px -20px rgba(15,35,80,.55);}',
    C + ':nth-child(odd)::before{background:linear-gradient(180deg,#93b8ff,#fff);}',
    G + ' .acard:nth-child(odd) .a-no{color:rgba(255,255,255,.28);}',
    G + ' .acard:nth-child(odd) .a-cat{background:rgba(255,255,255,.16);color:#fff;}',
    G + ' .acard:nth-child(odd) h3{color:#fff;}',
    G + ' .acard:nth-child(odd) .ex{color:#c9d8f5;}',
    G + ' .acard:nth-child(odd) .a-time{color:#9fb6e6;}',
    G + ' .acard:nth-child(odd) .go{color:#fff;}',
    G + ' .acard:nth-child(odd) .a-arr{background:#fff;color:#1d4ed8;}',

    /* HP */
    '@media (max-width:640px){',
      C + '{flex-direction:column !important;align-items:stretch;}',
      G + ' .acard .a-no{position:absolute !important;top:12px;right:18px;width:auto;padding:0;font-size:44px;}',
      G + ' .acard .bd{padding:22px 20px 20px !important;}',
    '}'
  ].join('');
  var st = document.createElement('style');
  st.id = 'artikel-list-style';
  st.textContent = css;
  document.head.appendChild(st);
})();

/* ===== Halaman detail produk dan detail artikel: bagian ajakan "Siap merapikan arsip..." disembunyikan =====
   Halaman daftar (produk, mobile file manual/mekanik, artikel) tetap menampilkannya. */
(function () {
  if (!document.getElementById('pd-body') && !document.getElementById('art-body')) return;   // hanya halaman detail produk dan detail artikel
  var st = document.createElement('style');
  st.id = 'produk-no-cta-style';
  st.textContent = '.cta{display:none !important;}';
  document.head.appendChild(st);
})();

var CFG = {
  // Gambar latar tiap halaman (di bawah lapisan gradasi biru). Ganti dengan foto ruang arsip lebar, mis. 'images/bg-produk.jpg'.
  // Jika file tidak ditemukan, yang tampil hanya gradasi warna.
  bg: { beranda: 'images/beranda.png', produk: 'images/beranda.png', portofolio: 'images/beranda.png', artikel: 'images/beranda.png', kontak: '' },
  bgGanti: false,                          // true = latar bergantian otomatis antar foto; false = tiap halaman pakai fotonya sendiri
  logo: 'images/logo CMI.JPG.png',           // logo header & footer (cukup ubah di sini)
  autoFoto: false,                          // true = cari foto otomatis di images/produk/ (menambah banyak permintaan 404)
  wa: '6281137911115',                       // nomor WhatsApp (format 62...)
  tel: '+62 811-3791-1115',
  email: 'contact@cahayamustikainternesia.com',
  alamat: 'Jl. Penjernihan II No.7, RT.11/RW.6, Bend. Hilir, Kec. Tanah Abang, Kota Jakarta Pusat, DKI Jakarta 10210',
  jam: 'Senin sampai Jumat, 08.00 - 16.00',
  jamEn: 'Monday to Friday, 08:00 - 16:00',
  // Foto di bagian Beranda (kotak besar di kanan judul).
  // Ganti dengan nama file fotomu, mis. 'images/beranda.jpg'. Kosongkan ('') untuk memakai ilustrasi bawaan.
  // Jika file tidak ditemukan, ilustrasi bawaan otomatis dipakai.
  heroFoto: 'images/beranda.png',
  heroFotoY: '9%',                           // geser foto naik/turun, mis. '5%' atau '-5%'
  // Kata kunci lokasi untuk Google Maps (titik peta mengikuti alamat ini)
  mapQuery: 'PT. Cahaya Mustika Internesia, Jl. Penjernihan II No.7, Bendungan Hilir, Tanah Abang, Jakarta Pusat'
};

/* ===== BAHASA =====
   Bahasa bawaan: Indonesia. Pengunjung bisa pindah ke English lewat tombol ID | EN di menu atas
   (pilihan disimpan di browser). Bisa juga dibuka langsung dengan  ?lang=en  di akhir alamat situs.
   Teks Indonesia ada di data di bawah (dan di index.html); terjemahan Inggris ada di blok  en: { ... }
   pada setiap produk, proyek, artikel, serta di kamus UI_EN dan STR.en. */
var LANG = 'id';
try {
  var qm = /[?&]lang=(id|en)/.exec(location.search);
  LANG = qm ? qm[1] : (localStorage.getItem('lang') || 'id');
} catch (e) {}
if (LANG !== 'en') LANG = 'id';

/* Ambil teks sesuai bahasa aktif; jika terjemahan belum ada, pakai bahasa Indonesia */
function L(o, k) { return LANG === 'en' && o.en && o.en[k] != null ? o.en[k] : o[k]; }

/* ===== DAFTAR PRODUK =====
   fotoZoom (opsional): besar foto di kartu produk ini saja (bawaan 1.5). Naikkan bila fotonya tampak kecil, mis. 1.9.
   fotoY (opsional): geser posisi foto ke bawah/atas supaya produk pas di tengah, mis. '8%' (turun) atau '-8%' (naik).
   Cara menambah foto produk:
   1. Simpan foto di folder  images/produk/
   2. Tulis nama file di array "foto" produk yang bersangkutan.
      Foto pertama jadi foto utama di kartu, sisanya muncul sebagai galeri di jendela detail.
   Contoh:  foto: ['images/produk/mf-4-22-zc-1.jpg', 'images/produk/mf-4-22-zc-2.jpg']
   Jika "foto" dikosongkan (atau file tidak ditemukan), situs memakai ilustrasi bawaan.
   Untuk menambah produk baru, salin satu blok { ... } lalu ubah isinya (termasuk bagian en: { ... }). */
/* ===== DAFTAR PRODUK =====
   Cara menambah foto produk:
   1. Simpan fotonya di folder  images/produk/manual/  atau  images/produk/mekanik/  (sesuai jenisnya) dengan nama file PERSIS seperti di bagian  foto: [...]  tiap produk
      (daftar nama ada di images/produk/DAFTAR-NAMA-FOTO.txt). Jika ekstensi fotomu .png/.webp, ubah ekstensi di baris foto produk itu.
   2. Tanpa file foto, situs otomatis memakai ilustrasi bawaan.
   Foto pertama jadi foto utama di kartu; tambahkan nama file lain ke array untuk galeri di jendela detail.
   fotoZoom (opsional): besar foto di kartu, mis. 1.1 - 1.9.   fotoY (opsional): geser foto naik/turun, mis. '8%' atau '-8%'.
   Kapasitas (kap) untuk model tanpa data diisi "Sesuai konfigurasi"; ganti bila sudah ada angka kompartemen resmi. */
var PRODUCTS = [
  { id: 'zeco-mf-4-22-zc', brand: 'Zeco', tag: 'Sudah TKDN', name: 'Zeco Mobile File MF 4-22-ZC', tipe: 'Manual', kap: '20 kompartemen', komp: 20,
    foto: ["images/mobile file mf 4-22-ZC.png"], fotoZoom: 1.1,
    short: 'Mobile file 20 kompartemen, sudah bersertifikat TKDN dan tayang di e-Katalog LKPP.',
    cocok: 'Kantor dan instansi yang membutuhkan lemari arsip ber-TKDN untuk pengadaan pemerintah',
    spek: [['Ukuran', 'T 2200 x L 1000 x D 2500 mm'], ['Tebal plat', '0,8 mm - 2 mm'],
           ['Susunan', '1 Single Statis (5 kpt), 1 Single Dinamis (5 kpt), 2 Double Dinamis (total 10 kpt)'],
           ['Finishing', 'Degreasing, phosphating, anti karat, powder coating'], ['Warna', 'Abu-abu muda (light grey)']],
    art: [["Ringkasan model", "MF 4-22-ZC punya 20 kompartemen yang tersusun dari satu unit single statis, satu unit single dinamis, dan dua unit double dinamis. Unit dinamis digeser dengan handle, sehingga lorong hanya dibuka di barisan yang arsipnya sedang diambil."], ["Untuk pengadaan pemerintah", "Model ini sudah ber-TKDN dan tayang di e-Katalog LKPP, jadi instansi bisa memesannya lewat jalur pengadaan resmi."]],
    en: { tag: 'TKDN certified', tipe: 'Manual', kap: '20 compartments',
      short: 'Mobile file with 20 compartments, TKDN certified and listed in the LKPP e-Catalogue.',
      cocok: 'Offices and agencies that need TKDN-certified archive cabinets for government procurement',
      spek: [['Dimensions', 'H 2200 x W 1000 x D 2500 mm'], ['Plate thickness', '0.8 mm - 2 mm'],
             ['Configuration', '1 Static Single (5 comp.), 1 Dynamic Single (5 comp.), 2 Dynamic Doubles (10 comp. total)'],
             ['Finishing', 'Degreasing, phosphating, anti-rust, powder coating'], ['Colour', 'Light grey']],
      art: [["Model summary", "The MF 4-22-ZC has 20 compartments made up of one static single unit, one dynamic single unit, and two dynamic double units. The dynamic units are moved by handle, so an aisle only opens in the row you are pulling files from."], ["For government procurement", "This model is TKDN certified and listed in the LKPP e-Catalogue, so agencies can order it through the official procurement channel."]] } },
  { id: "zeco-mf-4-22-w2000-zc", brand: "Zeco", tag: "Lebar 2000", name: "Zeco Mobile File MF-4-22-W2000-ZC", tipe: "Manual", kap: "Sesuai konfigurasi", komp: 20, foto: ["images/mobile file mf 4-22-w2000-zc.png"], short: "Mobile file manual MF-4-22 versi lebar 2000 mm, kedalaman 2500 mm, plat SPCC warna abu-abu muda.", cocok: "Kantor kecil, klinik, ruang arsip departemen", spek: [["Ukuran", "T 2200 x L 2000 x D 2500 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], art: [["Apa bedanya dengan versi standar?", "MF-4-22-W2000-ZC memakai lebar kabinet 2000 mm, dua kali lipat versi standar yang 1000 mm. Kedalaman totalnya tetap 2500 mm, jadi yang berubah hanya lebarnya. Cara pakainya sama: digeser dengan handle."], ["Cocok untuk ruang seperti apa?", "Pilih versi ini kalau ruang arsip Anda cukup lega untuk kabinet yang lebih lebar. Bila ruangannya terbatas, versi standar biasanya lebih mudah ditempatkan."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], en: {"tag": "2000 wide", "tipe": "Manual", "kap": "Per configuration", "short": "Manual mobile file MF-4-22 in the 2000 mm wide version, 2500 mm deep, SPCC plate in light grey.", "cocok": "Small offices, clinics, departmental archive rooms", "spek": [["Dimensions", "H 2200 x W 2000 x D 2500 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["How is it different from the standard version?", "The MF-4-22-W2000-ZC has a 2000 mm cabinet width, twice the 1000 mm of the standard version. The total depth stays at 2500 mm, so only the width changes. It works the same way: moved by handle."], ["What kind of room suits it?", "Choose this version if your archive room is spacious enough for a wider cabinet. If space is tight, the standard version is usually easier to fit."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]} },
  { id: "zeco-mf-6-22-zc", brand: "Zeco", tag: "Standar", name: "Zeco Mobile File MF-6-22-ZC", tipe: "Manual", kap: "Sesuai konfigurasi", komp: 30, foto: ["images/mobile file 6-22-zc.png"], short: "Mobile file manual MF-6-22 dengan kedalaman 3300 mm, plat SPCC warna abu-abu muda.", cocok: "Kantor menengah, notaris, sekolah, perusahaan", spek: [["Ukuran", "T 2200 x L 1000 x D 3300 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], art: [["Gambaran model", "MF-6-22-ZC adalah mobile file manual setinggi 2200 mm, lebar kabinet 1000 mm, dan kedalaman total 3300 mm. Unit digeser dengan tangan lewat handle, jadi lorong hanya terbuka di barisan yang sedang Anda butuhkan."], ["Memilih panjang yang tepat", "Seri MF-x-22-ZC tersedia dalam panjang MF-4, MF-6, MF-8, dan MF-10, serta versi lebar 2000 mm. Semakin besar angkanya, semakin panjang barisannya dan semakin banyak arsip yang tertampung. Sesuaikan dengan jumlah arsip dan ukuran ruangan Anda."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], en: {"tag": "Standard", "tipe": "Manual", "kap": "Per configuration", "short": "Manual mobile file MF-6-22, 3300 mm deep, SPCC plate in light grey.", "cocok": "Mid-sized offices, notaries, schools, companies", "spek": [["Dimensions", "H 2200 x W 1000 x D 3300 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["Model at a glance", "The MF-6-22-ZC is a manual mobile file 2200 mm high, with a 1000 mm cabinet width and a total depth of 3300 mm. Units are moved by hand with a handle, so an aisle only opens in the row you need."], ["Choosing the right length", "The MF-x-22-ZC series comes in MF-4, MF-6, MF-8, and MF-10 lengths, plus a 2000 mm wide version. The bigger the number, the longer the row and the more archives it holds. Match it to your archive volume and room size."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]} },
  { id: "zeco-mf-6-22-w2000-zc", brand: "Zeco", tag: "Lebar 2000", name: "Zeco Mobile File MF-6-22-W2000-ZC", tipe: "Manual", kap: "Sesuai konfigurasi", komp: 30, foto: ["images/mobile file 6-22-w2000-ZC.png"], short: "Mobile file manual MF-6-22 versi lebar 2000 mm, kedalaman 3300 mm, plat SPCC warna abu-abu muda.", cocok: "Kantor menengah, notaris, sekolah, perusahaan", spek: [["Ukuran", "T 2200 x L 2000 x D 3300 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], art: [["Apa bedanya dengan versi standar?", "MF-6-22-W2000-ZC memakai lebar kabinet 2000 mm, dua kali lipat versi standar yang 1000 mm. Kedalaman totalnya tetap 3300 mm, jadi yang berubah hanya lebarnya. Cara pakainya sama: digeser dengan handle."], ["Cocok untuk ruang seperti apa?", "Pilih versi ini kalau ruang arsip Anda cukup lega untuk kabinet yang lebih lebar. Bila ruangannya terbatas, versi standar biasanya lebih mudah ditempatkan."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], en: {"tag": "2000 wide", "tipe": "Manual", "kap": "Per configuration", "short": "Manual mobile file MF-6-22 in the 2000 mm wide version, 3300 mm deep, SPCC plate in light grey.", "cocok": "Mid-sized offices, notaries, schools, companies", "spek": [["Dimensions", "H 2200 x W 2000 x D 3300 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["How is it different from the standard version?", "The MF-6-22-W2000-ZC has a 2000 mm cabinet width, twice the 1000 mm of the standard version. The total depth stays at 3300 mm, so only the width changes. It works the same way: moved by handle."], ["What kind of room suits it?", "Choose this version if your archive room is spacious enough for a wider cabinet. If space is tight, the standard version is usually easier to fit."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]} },
  { id: "zeco-mf-8-22-zc", brand: "Zeco", tag: "Standar", name: "Zeco Mobile File MF-8-22-ZC", tipe: "Manual", kap: "Sesuai konfigurasi", komp: 40, foto: ["images/mobile file 8-22-ZC.png"], short: "Mobile file manual MF-8-22 dengan kedalaman 4100 mm, plat SPCC warna abu-abu muda.", cocok: "Instansi, perusahaan, dan ruang arsip dengan volume dokumen sedang hingga besar", spek: [["Ukuran", "T 2200 x L 1000 x D 4100 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], art: [["Gambaran model", "MF-8-22-ZC adalah mobile file manual setinggi 2200 mm, lebar kabinet 1000 mm, dan kedalaman total 4100 mm. Unit digeser dengan tangan lewat handle, jadi lorong hanya terbuka di barisan yang sedang Anda butuhkan."], ["Memilih panjang yang tepat", "Seri MF-x-22-ZC tersedia dalam panjang MF-4, MF-6, MF-8, dan MF-10, serta versi lebar 2000 mm. Semakin besar angkanya, semakin panjang barisannya dan semakin banyak arsip yang tertampung. Sesuaikan dengan jumlah arsip dan ukuran ruangan Anda."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], en: {"tag": "Standard", "tipe": "Manual", "kap": "Per configuration", "short": "Manual mobile file MF-8-22, 4100 mm deep, SPCC plate in light grey.", "cocok": "Agencies, companies, and archive rooms with medium to large document volumes", "spek": [["Dimensions", "H 2200 x W 1000 x D 4100 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["Model at a glance", "The MF-8-22-ZC is a manual mobile file 2200 mm high, with a 1000 mm cabinet width and a total depth of 4100 mm. Units are moved by hand with a handle, so an aisle only opens in the row you need."], ["Choosing the right length", "The MF-x-22-ZC series comes in MF-4, MF-6, MF-8, and MF-10 lengths, plus a 2000 mm wide version. The bigger the number, the longer the row and the more archives it holds. Match it to your archive volume and room size."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]} },
  { id: "zeco-mf-8-22-w2000-zc", brand: "Zeco", tag: "Lebar 2000", name: "Zeco Mobile File MF-8-22-W2000-ZC", tipe: "Manual", kap: "Sesuai konfigurasi", komp: 40, foto: ["images/mobile file 8-22-w2000-ZC.png"], short: "Mobile file manual MF-8-22 versi lebar 2000 mm, kedalaman 4100 mm, plat SPCC warna abu-abu muda.", cocok: "Instansi, perusahaan, dan ruang arsip dengan volume dokumen sedang hingga besar", spek: [["Ukuran", "T 2200 x L 2000 x D 4100 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], art: [["Apa bedanya dengan versi standar?", "MF-8-22-W2000-ZC memakai lebar kabinet 2000 mm, dua kali lipat versi standar yang 1000 mm. Kedalaman totalnya tetap 4100 mm, jadi yang berubah hanya lebarnya. Cara pakainya sama: digeser dengan handle."], ["Cocok untuk ruang seperti apa?", "Pilih versi ini kalau ruang arsip Anda cukup lega untuk kabinet yang lebih lebar. Bila ruangannya terbatas, versi standar biasanya lebih mudah ditempatkan."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], en: {"tag": "2000 wide", "tipe": "Manual", "kap": "Per configuration", "short": "Manual mobile file MF-8-22 in the 2000 mm wide version, 4100 mm deep, SPCC plate in light grey.", "cocok": "Agencies, companies, and archive rooms with medium to large document volumes", "spek": [["Dimensions", "H 2200 x W 2000 x D 4100 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["How is it different from the standard version?", "The MF-8-22-W2000-ZC has a 2000 mm cabinet width, twice the 1000 mm of the standard version. The total depth stays at 4100 mm, so only the width changes. It works the same way: moved by handle."], ["What kind of room suits it?", "Choose this version if your archive room is spacious enough for a wider cabinet. If space is tight, the standard version is usually easier to fit."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]} },
  { id: "zeco-mf-10-22-zc", brand: "Zeco", tag: "Standar", name: "Zeco Mobile File MF-10-22-ZC", tipe: "Manual", kap: "Sesuai konfigurasi", komp: 50, foto: ["images/mobile file 10-22-zc.png"], short: "Mobile file manual MF-10-22 dengan kedalaman 4900 mm, plat SPCC warna abu-abu muda.", cocok: "Pusat arsip, instansi, dan rumah sakit dengan volume dokumen besar", spek: [["Ukuran", "T 2200 x L 1000 x D 4900 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], art: [["Gambaran model", "MF-10-22-ZC adalah mobile file manual setinggi 2200 mm, lebar kabinet 1000 mm, dan kedalaman total 4900 mm. Unit digeser dengan tangan lewat handle, jadi lorong hanya terbuka di barisan yang sedang Anda butuhkan."], ["Memilih panjang yang tepat", "Seri MF-x-22-ZC tersedia dalam panjang MF-4, MF-6, MF-8, dan MF-10, serta versi lebar 2000 mm. Semakin besar angkanya, semakin panjang barisannya dan semakin banyak arsip yang tertampung. Sesuaikan dengan jumlah arsip dan ukuran ruangan Anda."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], en: {"tag": "Standard", "tipe": "Manual", "kap": "Per configuration", "short": "Manual mobile file MF-10-22, 4900 mm deep, SPCC plate in light grey.", "cocok": "Archive centers, agencies, and hospitals with large document volumes", "spek": [["Dimensions", "H 2200 x W 1000 x D 4900 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["Model at a glance", "The MF-10-22-ZC is a manual mobile file 2200 mm high, with a 1000 mm cabinet width and a total depth of 4900 mm. Units are moved by hand with a handle, so an aisle only opens in the row you need."], ["Choosing the right length", "The MF-x-22-ZC series comes in MF-4, MF-6, MF-8, and MF-10 lengths, plus a 2000 mm wide version. The bigger the number, the longer the row and the more archives it holds. Match it to your archive volume and room size."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]} },
  { id: "zeco-mf-10-22-w2000-zc", brand: "Zeco", tag: "Lebar 2000", name: "Zeco Mobile File MF-10-22-W2000-ZC", tipe: "Manual", kap: "Sesuai konfigurasi", komp: 50, foto: ["images/mobile file 10-22-w2000-ZC.png"], short: "Mobile file manual MF-10-22 versi lebar 2000 mm, kedalaman 4900 mm, plat SPCC warna abu-abu muda.", cocok: "Pusat arsip, instansi, dan rumah sakit dengan volume dokumen besar", spek: [["Ukuran", "T 2200 x L 2000 x D 4900 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], art: [["Apa bedanya dengan versi standar?", "MF-10-22-W2000-ZC memakai lebar kabinet 2000 mm, dua kali lipat versi standar yang 1000 mm. Kedalaman totalnya tetap 4900 mm, jadi yang berubah hanya lebarnya. Cara pakainya sama: digeser dengan handle."], ["Cocok untuk ruang seperti apa?", "Pilih versi ini kalau ruang arsip Anda cukup lega untuk kabinet yang lebih lebar. Bila ruangannya terbatas, versi standar biasanya lebih mudah ditempatkan."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], en: {"tag": "2000 wide", "tipe": "Manual", "kap": "Per configuration", "short": "Manual mobile file MF-10-22 in the 2000 mm wide version, 4900 mm deep, SPCC plate in light grey.", "cocok": "Archive centers, agencies, and hospitals with large document volumes", "spek": [["Dimensions", "H 2200 x W 2000 x D 4900 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["How is it different from the standard version?", "The MF-10-22-W2000-ZC has a 2000 mm cabinet width, twice the 1000 mm of the standard version. The total depth stays at 4900 mm, so only the width changes. It works the same way: moved by handle."], ["What kind of room suits it?", "Choose this version if your archive room is spacious enough for a wider cabinet. If space is tight, the standard version is usually easier to fit."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]} },
  { id: "zeco-mf-101-zc", brand: "Zeco", tag: "Roda kemudi", name: "Zeco Mobile File MF-101-ZC", tipe: "Mekanik", kap: "Sesuai konfigurasi", komp: 20, foto: ["images/mobile file 101.png"], short: "Mobile file mekanik dengan roda kemudi putar, kedalaman 2800 mm, plat SPCC warna abu-abu muda.", cocok: "Instansi, notaris, dan ruang arsip yang menginginkan penggerak ringan", spek: [["Ukuran", "T 2200 x L 1000 x D 2800 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], art: [["Cara kerjanya", "MF-101-ZC digerakkan dengan roda kemudi putar. Cukup putar rodanya, dan barisan yang penuh arsip bergeser tanpa perlu tenaga besar. Tidak membutuhkan listrik."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], en: {"tag": "Hand wheel", "tipe": "Mechanical", "kap": "Per configuration", "short": "Mechanical mobile file with a rotary hand wheel, 2800 mm deep, SPCC plate in light grey.", "cocok": "Agencies, notaries, and archive rooms that want an easy-moving drive", "spek": [["Dimensions", "H 2200 x W 1000 x D 2800 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["How it works", "The MF-101-ZC is driven by a rotary hand wheel. Just turn the wheel and a row full of files slides over without much effort. No electricity needed."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]} },
  { id: 'zeco-mf-102-zc', brand: 'Zeco', tag: 'Kapasitas besar', name: 'Zeco Mobile File 102 ZC', tipe: 'Mekanik', kap: '30 kompartemen', komp: 30,
    foto: ["images/mobile file 102.png"],
    short: 'Mobile file 30 kompartemen dengan roda kemudi putar, sudah bersertifikat TKDN.',
    cocok: 'Instansi, rumah sakit, dan pusat arsip dengan volume dokumen besar',
    spek: [['Ukuran', 'T 2200 x L 1000 x D 3600 mm'], ['Tebal plat', '0,8 mm - 2 mm (plat body 1 mm)'],
           ['Finishing', 'Degreasing, phosphating, anti karat, powder coating'], ['Warna', 'Abu-abu muda (light grey)']],
    art: [["Kapasitas dan penggerak", "102 ZC memiliki 30 kompartemen dan digerakkan dengan roda kemudi putar, jadi barisan yang penuh arsip tetap ringan digeser."], ["Sudah TKDN", "Seperti MF 4-22-ZC, model ini ber-TKDN dan tersedia di e-Katalog LKPP, sehingga lebih mudah untuk pengadaan instansi."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]],
    en: { tag: 'Large capacity', tipe: 'Mechanical', kap: '30 compartments',
      short: 'Mobile file with 30 compartments and a rotary hand wheel, TKDN certified.',
      cocok: 'Government agencies, hospitals, and archive centers with large document volumes',
      spek: [['Dimensions', 'H 2200 x W 1000 x D 3600 mm'], ['Plate thickness', '0.8 mm - 2 mm (1 mm body plate)'],
             ['Finishing', 'Degreasing, phosphating, anti-rust, powder coating'], ['Colour', 'Light grey']],
      art: [["Capacity and drive", "The 102 ZC has 30 compartments and is driven by a rotary hand wheel, so rows full of files stay easy to move."], ["TKDN certified", "Like the MF 4-22-ZC, this model is TKDN certified and available in the LKPP e-Catalogue, which makes agency procurement easier."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]] } },
  {"id": "zeco-mf-103-zc", "brand": "Zeco", "tag": "Roda kemudi", "name": "Zeco Mobile File MF-103-ZC", "tipe": "Mekanik", "kap": "Sesuai konfigurasi", "komp": 40, "foto": ["images/produk/MOBILE_FILE_MF-103-ZC.jpg"], "fotoZoom": 1, "short": "Mobile file mekanik MF-103 dengan roda kemudi putar, kedalaman 4400 mm, plat SPCC warna abu-abu muda.", "cocok": "Instansi, rumah sakit, dan pusat arsip dengan volume dokumen besar", "spek": [["Ukuran", "T 2200 x L 1000 x D 4400 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], "art": [["Cara kerjanya", "MF-103-ZC digerakkan dengan roda kemudi putar. Cukup putar rodanya, dan barisan yang penuh arsip bergeser tanpa perlu tenaga besar. Tidak membutuhkan listrik."], ["Memilih kedalaman yang tepat", "Semakin dalam modelnya, semakin panjang barisannya dan semakin banyak arsip yang tertampung. Sesuaikan dengan jumlah arsip dan ukuran ruangan Anda."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], "en": {"tag": "Hand wheel", "tipe": "Mechanical", "kap": "Per configuration", "short": "Mechanical mobile file MF-103 with a rotary hand wheel, 4400 mm deep, SPCC plate in light grey.", "cocok": "Government agencies, hospitals, and archive centers with large document volumes", "spek": [["Dimensions", "H 2200 x W 1000 x D 4400 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["How it works", "The MF-103-ZC is driven by a rotary hand wheel. Just turn the wheel and a row full of files slides over without much effort. No electricity needed."], ["Choosing the right depth", "The deeper the model, the longer the row and the more archives it holds. Match it to your archive volume and room size."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]}},
  {"id": "zeco-mf-104-zc", "brand": "Zeco", "tag": "Roda kemudi", "name": "Zeco Mobile File MF-104-ZC", "tipe": "Mekanik", "kap": "Sesuai konfigurasi", "komp": 50, "foto": ["images/produk/MOBILE_FILE_MF-104-ZC.jpg"], "fotoZoom": 1, "short": "Mobile file mekanik MF-104 dengan roda kemudi putar, kedalaman 5200 mm, plat SPCC warna abu-abu muda.", "cocok": "Pusat arsip, instansi, dan rumah sakit dengan volume dokumen besar", "spek": [["Ukuran", "T 2200 x L 1000 x D 5200 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], "art": [["Cara kerjanya", "MF-104-ZC digerakkan dengan roda kemudi putar. Cukup putar rodanya, dan barisan yang penuh arsip bergeser tanpa perlu tenaga besar. Tidak membutuhkan listrik."], ["Memilih kedalaman yang tepat", "Semakin dalam modelnya, semakin panjang barisannya dan semakin banyak arsip yang tertampung. Sesuaikan dengan jumlah arsip dan ukuran ruangan Anda."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], "en": {"tag": "Hand wheel", "tipe": "Mechanical", "kap": "Per configuration", "short": "Mechanical mobile file MF-104 with a rotary hand wheel, 5200 mm deep, SPCC plate in light grey.", "cocok": "Archive centers, agencies, and hospitals with large document volumes", "spek": [["Dimensions", "H 2200 x W 1000 x D 5200 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["How it works", "The MF-104-ZC is driven by a rotary hand wheel. Just turn the wheel and a row full of files slides over without much effort. No electricity needed."], ["Choosing the right depth", "The deeper the model, the longer the row and the more archives it holds. Match it to your archive volume and room size."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]}},
  {"id": "zeco-mf-201-zc", "brand": "Zeco", "tag": "Lebar 2000", "name": "Zeco Mobile File MF-201-ZC", "tipe": "Mekanik", "kap": "Sesuai konfigurasi", "komp": 20, "foto": ["images/produk/MOBILE_FILE_MF-201-ZC.jpg"], "fotoZoom": 1, "short": "Mobile file mekanik MF-201 versi lebar 2000 mm dengan roda kemudi putar, kedalaman 2800 mm, plat SPCC warna abu-abu muda.", "cocok": "Instansi, notaris, dan ruang arsip yang menginginkan penggerak ringan", "spek": [["Ukuran", "T 2200 x L 2000 x D 2800 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], "art": [["Apa bedanya dengan seri lebar 1000?", "MF-201-ZC memakai lebar kabinet 2000 mm, dua kali lipat seri MF-1xx-ZC yang 1000 mm. Kedalaman total 2800 mm sama dengan model seri MF-1xx pada kedalaman itu, jadi yang berubah hanya lebarnya. Penggeraknya tetap roda kemudi putar."], ["Cara kerjanya", "MF-201-ZC digerakkan dengan roda kemudi putar. Cukup putar rodanya, dan barisan yang penuh arsip bergeser tanpa perlu tenaga besar. Tidak membutuhkan listrik."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], "en": {"tag": "2000 wide", "tipe": "Mechanical", "kap": "Per configuration", "short": "Mechanical mobile file MF-201 in the 2000 mm wide version with a rotary hand wheel, 2800 mm deep, SPCC plate in light grey.", "cocok": "Agencies, notaries, and archive rooms that want an easy-moving drive", "spek": [["Dimensions", "H 2200 x W 2000 x D 2800 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["How is it different from the 1000 wide series?", "The MF-201-ZC has a 2000 mm cabinet width, twice the 1000 mm of the MF-1xx-ZC series. The total depth of 2800 mm matches the MF-1xx model at that depth, so only the width changes. The drive is still a rotary hand wheel."], ["How it works", "The MF-201-ZC is driven by a rotary hand wheel. Just turn the wheel and a row full of files slides over without much effort. No electricity needed."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]}},
  {"id": "zeco-mf-202-zc", "brand": "Zeco", "tag": "Lebar 2000", "name": "Zeco Mobile File MF-202-ZC", "tipe": "Mekanik", "kap": "Sesuai konfigurasi", "komp": 30, "foto": ["images/produk/MOBILE_FILE_MF-202-ZC.jpg"], "fotoZoom": 1, "short": "Mobile file mekanik MF-202 versi lebar 2000 mm dengan roda kemudi putar, kedalaman 3600 mm, plat SPCC warna abu-abu muda.", "cocok": "Kantor menengah, notaris, sekolah, perusahaan", "spek": [["Ukuran", "T 2200 x L 2000 x D 3600 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], "art": [["Apa bedanya dengan seri lebar 1000?", "MF-202-ZC memakai lebar kabinet 2000 mm, dua kali lipat seri MF-1xx-ZC yang 1000 mm. Kedalaman total 3600 mm sama dengan model seri MF-1xx pada kedalaman itu, jadi yang berubah hanya lebarnya. Penggeraknya tetap roda kemudi putar."], ["Cara kerjanya", "MF-202-ZC digerakkan dengan roda kemudi putar. Cukup putar rodanya, dan barisan yang penuh arsip bergeser tanpa perlu tenaga besar. Tidak membutuhkan listrik."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], "en": {"tag": "2000 wide", "tipe": "Mechanical", "kap": "Per configuration", "short": "Mechanical mobile file MF-202 in the 2000 mm wide version with a rotary hand wheel, 3600 mm deep, SPCC plate in light grey.", "cocok": "Mid-sized offices, notaries, schools, companies", "spek": [["Dimensions", "H 2200 x W 2000 x D 3600 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["How is it different from the 1000 wide series?", "The MF-202-ZC has a 2000 mm cabinet width, twice the 1000 mm of the MF-1xx-ZC series. The total depth of 3600 mm matches the MF-1xx model at that depth, so only the width changes. The drive is still a rotary hand wheel."], ["How it works", "The MF-202-ZC is driven by a rotary hand wheel. Just turn the wheel and a row full of files slides over without much effort. No electricity needed."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]}},
  {"id": "zeco-mf-203-zc", "brand": "Zeco", "tag": "Lebar 2000", "name": "Zeco Mobile File MF-203-ZC", "tipe": "Mekanik", "kap": "Sesuai konfigurasi", "komp": 40, "foto": ["images/produk/MOBILE_FILE_MF-203-ZC.jpg"], "fotoZoom": 1, "short": "Mobile file mekanik MF-203 versi lebar 2000 mm dengan roda kemudi putar, kedalaman 4400 mm, plat SPCC warna abu-abu muda.", "cocok": "Instansi, perusahaan, dan ruang arsip dengan volume dokumen sedang hingga besar", "spek": [["Ukuran", "T 2200 x L 2000 x D 4400 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], "art": [["Apa bedanya dengan seri lebar 1000?", "MF-203-ZC memakai lebar kabinet 2000 mm, dua kali lipat seri MF-1xx-ZC yang 1000 mm. Kedalaman total 4400 mm sama dengan model seri MF-1xx pada kedalaman itu, jadi yang berubah hanya lebarnya. Penggeraknya tetap roda kemudi putar."], ["Cara kerjanya", "MF-203-ZC digerakkan dengan roda kemudi putar. Cukup putar rodanya, dan barisan yang penuh arsip bergeser tanpa perlu tenaga besar. Tidak membutuhkan listrik."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], "en": {"tag": "2000 wide", "tipe": "Mechanical", "kap": "Per configuration", "short": "Mechanical mobile file MF-203 in the 2000 mm wide version with a rotary hand wheel, 4400 mm deep, SPCC plate in light grey.", "cocok": "Agencies, companies, and archive rooms with medium to large document volumes", "spek": [["Dimensions", "H 2200 x W 2000 x D 4400 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["How is it different from the 1000 wide series?", "The MF-203-ZC has a 2000 mm cabinet width, twice the 1000 mm of the MF-1xx-ZC series. The total depth of 4400 mm matches the MF-1xx model at that depth, so only the width changes. The drive is still a rotary hand wheel."], ["How it works", "The MF-203-ZC is driven by a rotary hand wheel. Just turn the wheel and a row full of files slides over without much effort. No electricity needed."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]}},
  {"id": "zeco-mf-204-zc", "brand": "Zeco", "tag": "Lebar 2000", "name": "Zeco Mobile File MF-204-ZC", "tipe": "Mekanik", "kap": "Sesuai konfigurasi", "komp": 50, "foto": ["images/produk/MOBILE_FILE_MF-204-ZC.jpg"], "fotoZoom": 1, "short": "Mobile file mekanik MF-204 versi lebar 2000 mm dengan roda kemudi putar, kedalaman 5200 mm, plat SPCC warna abu-abu muda.", "cocok": "Pusat arsip, instansi, dan rumah sakit dengan volume dokumen besar", "spek": [["Ukuran", "T 2200 x L 2000 x D 5200 mm"], ["Bahan", "Plat metal SPCC"], ["Tebal plat", "0,8 mm - 2 mm"], ["Warna", "Abu-abu muda (light grey)"]], "art": [["Apa bedanya dengan seri lebar 1000?", "MF-204-ZC memakai lebar kabinet 2000 mm, dua kali lipat seri MF-1xx-ZC yang 1000 mm. Kedalaman total 5200 mm sama dengan model seri MF-1xx pada kedalaman itu, jadi yang berubah hanya lebarnya. Penggeraknya tetap roda kemudi putar."], ["Cara kerjanya", "MF-204-ZC digerakkan dengan roda kemudi putar. Cukup putar rodanya, dan barisan yang penuh arsip bergeser tanpa perlu tenaga besar. Tidak membutuhkan listrik."], ["Sebelum memesan", "Arsip yang penuh sangat berat. Cek dulu daya dukung lantainya, terutama kalau ruang arsip ada di gedung bertingkat."]], "en": {"tag": "2000 wide", "tipe": "Mechanical", "kap": "Per configuration", "short": "Mechanical mobile file MF-204 in the 2000 mm wide version with a rotary hand wheel, 5200 mm deep, SPCC plate in light grey.", "cocok": "Archive centers, agencies, and hospitals with large document volumes", "spek": [["Dimensions", "H 2200 x W 2000 x D 5200 mm"], ["Material", "SPCC metal plate"], ["Plate thickness", "0.8 mm - 2 mm"], ["Colour", "Light grey"]], "art": [["How is it different from the 1000 wide series?", "The MF-204-ZC has a 2000 mm cabinet width, twice the 1000 mm of the MF-1xx-ZC series. The total depth of 5200 mm matches the MF-1xx model at that depth, so only the width changes. The drive is still a rotary hand wheel."], ["How it works", "The MF-204-ZC is driven by a rotary hand wheel. Just turn the wheel and a row full of files slides over without much effort. No electricity needed."], ["Before you order", "A fully loaded archive is very heavy. Check the floor load capacity first, especially if the archive room is in a multi-storey building."]]}}
];

/* ===== GANTI FOTO PRODUK DI SINI =====
   Satu baris = satu produk:  'id-produk': 'images/produk/nama-file.jpg'
   Untuk mengganti foto: simpan foto baru di folder images/produk/, lalu ubah nama file di baris produk yang bersangkutan.
   Untuk beberapa foto (galeri di jendela detail), tulis dalam kurung siku: ['images/produk/a.jpg', 'images/produk/b.jpg'] (yang pertama jadi foto utama).
   Produk lain juga bisa diganti fotonya dari sini: cukup tambah baris dengan id-nya, mis. 'zeco-mf-101-zc': 'images/produk/mf-101.jpg'.
   Kosongkan ('') bila ingin memakai ilustrasi bawaan. Daftar id produk ada di properti id pada array PRODUCTS di atas. */
var FOTO_PRODUK = {
  'zeco-mf-103-zc': 'images/mobile file zeco 103.png',
  'zeco-mf-104-zc': 'images/mobile file zeco 104.png',
  'zeco-mf-201-zc': 'images/mobile file zeco 201.png',
  'zeco-mf-202-zc': 'images/mobile file 202.png',
  'zeco-mf-203-zc': 'images/mobile file zeco 203.png',
  'zeco-mf-204-zc': 'images/mobile file zeco 204.png'
};
PRODUCTS.forEach(function (p) {
  if (!Object.prototype.hasOwnProperty.call(FOTO_PRODUK, p.id)) return;
  var f = FOTO_PRODUK[p.id];
  p.foto = f ? [].concat(f) : [];
});

/* Foto proyek (opsional): simpan foto di images/proyek/ sesuai nama pada baris foto: tiap proyek. fotoPos (opsional) menggeser fokus foto, mis. '50% 30%'. Foto belum ada / gagal dimuat: kotak biru berisi huruf awal sektor dipakai. */
var PROJECTS = [
  { id: 'p1', foto: 'images/proyek rumah sakit.png', judul: 'Ruang arsip rumah sakit', sektor: 'Kesehatan', ket: 'Penataan rekam medis dan arsip dalam ruangan terbatas dengan satu lorong bergerak.',
    en: { judul: 'Hospital archive room', sektor: 'Healthcare', ket: 'Organizing medical records and archives in a limited space with a single movable aisle.' } },
  { id: 'p2', foto: 'images/proyek notaris.png', judul: 'Arsip kantor notaris', sektor: 'Hukum', ket: 'Dokumen legal tersimpan rapi dan mudah ditemukan.',
    en: { judul: 'Notary office archive', sektor: 'Legal', ket: 'Legal documents stored neatly and easy to find.' } },
  { id: 'p3', foto: 'images/proyek pemerintah.png', judul: 'Pusat arsip instansi', sektor: 'Pemerintahan', ket: 'Kapasitas arsip besar dengan produk ber-TKDN.',
    en: { judul: 'Government agency archive center', sektor: 'Government', ket: 'Large archive capacity with TKDN-certified products.' } },
  { id: 'p4', foto: 'images/proyek gudang dokumen.png', judul: 'Gudang dokumen perusahaan', sektor: 'Swasta', ket: 'Kapasitas simpan naik tanpa memperluas ruangan.',
    en: { judul: 'Corporate document warehouse', sektor: 'Private sector', ket: 'Storage capacity increased without expanding the room.' } }
];

var ARTICLES = [
  { id: 'apa-itu-mobile-file', judul: 'Apa itu mobile file dan bagaimana cara kerjanya', kat: 'Dasar', menit: 4,
    ex: 'Mengenal lemari arsip dorong dan alasan sistem ini menghemat ruang.',
    isi: [['Rak arsip yang bisa bergeser', 'Mobile file adalah rak arsip yang dipasang di atas rel lantai sehingga dapat digeser ke kiri atau kanan. Karena rak bergerak, lorong tidak perlu dibuat di setiap barisan. Lorong hanya dibuka di titik yang sedang dibutuhkan.'],
          ['Cara kerja', 'Setiap unit berdiri di atas roda baja yang berjalan pada rel. Pengguna memutar roda kemudi atau menekan tombol, dan barisan bergeser sampai lorong terbuka. Setelah selesai, barisan dirapatkan kembali.'],
          ['Mengapa hemat ruang', 'Pada lemari statis, setiap barisan butuh lorong sendiri. Pada mobile file, semua lorong itu digabung menjadi satu, sehingga ruang yang tadinya terbuang menjadi tempat simpan.']],
    en: { judul: 'What is a mobile file and how does it work', kat: 'Basics',
      ex: 'Getting to know movable archive cabinets and why this system saves space.',
      isi: [['Archive shelving that slides', 'A mobile file is archive shelving mounted on floor rails so it can slide left or right. Because the shelving moves, an aisle does not have to be built between every row. An aisle is opened only where it is needed.'],
            ['How it works', 'Each unit stands on steel wheels that run along the rails. The user turns the hand wheel or presses a button, and the rows slide until an aisle opens. When finished, the rows are closed up again.'],
            ['Why it saves space', 'With static cabinets, every row needs its own aisle. With a mobile file, all those aisles are merged into one, so space that used to be wasted becomes storage.']] } },
  { id: 'cara-memilih', judul: 'Panduan memilih mobile file yang tepat untuk kantor', kat: 'Panduan', menit: 5,
    ex: 'Tiga hal yang perlu diperiksa sebelum membeli lemari arsip dorong.',
    isi: [['Hitung kebutuhan arsip', 'Ukur volume dokumen saat ini, lalu tambahkan cadangan pertumbuhan tiga sampai lima tahun. Kapasitas yang pas hari ini akan penuh lebih cepat dari perkiraan.'],
          ['Pilih penggerak', 'Manual untuk beban ringan hingga menengah, mekanik untuk arsip padat dan berat, elektrik untuk ruang arsip sangat besar dengan akses tinggi.'],
          ['Periksa kualitas dan layanan', 'Perhatikan ketebalan baja, roda, rel, cat, pengunci, dan rem. Tanyakan juga garansi, suku cadang, dan tim pemasang.']],
    en: { judul: 'A guide to choosing the right mobile file for your office', kat: 'Guide',
      ex: 'Three things to check before buying a movable archive cabinet.',
      isi: [['Calculate your archive needs', 'Measure your current document volume, then add room for three to five years of growth. Capacity that fits today will fill up faster than expected.'],
            ['Choose the drive', 'Manual for light to medium loads, mechanical for dense and heavy archives, electric for very large archive rooms with high access.'],
            ['Check quality and service', 'Look at the steel thickness, wheels, rails, paint, locks, and brakes. Also ask about warranty, spare parts, and the installation team.']] } },
  { id: 'persiapan-lantai', judul: 'Persiapan lantai dan ruangan sebelum pemasangan', kat: 'Instalasi', menit: 4,
    ex: 'Daya dukung lantai dan kerataan rel menentukan keberhasilan pemasangan.',
    isi: [['Daya dukung lantai', 'Arsip yang padat sangat berat. Di gedung bertingkat, konsultasikan dengan pengelola atau insinyur struktur sebelum memasang.'],
          ['Kerataan dan akses', 'Rel memerlukan permukaan yang rata. Ukur pintu, lift, dan koridor agar komponen bisa masuk, serta sediakan ruang untuk pencahayaan dan sirkulasi udara.']],
    en: { judul: 'Preparing the floor and room before installation', kat: 'Installation',
      ex: 'Floor load capacity and rail levelness determine whether installation succeeds.',
      isi: [['Floor load capacity', 'Dense archives are very heavy. In multi-storey buildings, consult the building manager or a structural engineer before installing.'],
            ['Levelness and access', 'The rails need a level surface. Measure doors, lifts, and corridors so the components can be brought in, and allow space for lighting and air circulation.']] } },
  { id: 'perawatan', judul: 'Cara merawat mobile file agar awet', kat: 'Perawatan', menit: 3,
    ex: 'Kebiasaan sederhana yang menjaga rel dan roda tetap halus.',
    isi: [['Rutin dan sederhana', 'Bersihkan rel dari debu dan kertas kecil, beri pelumas ringan pada rantai atau roda gigi sesuai anjuran pabrik, dan jangan memaksa menggeser unit yang terasa berat.'],
          ['Tata arsip dengan baik', 'Taruh dokumen berat di rak bawah agar beban seimbang, jaga kelembapan ruangan, dan jadwalkan pemeriksaan rutin oleh teknisi.']],
    en: { judul: 'How to maintain your mobile file so it lasts', kat: 'Maintenance',
      ex: 'Simple habits that keep the rails and wheels running smoothly.',
      isi: [['Simple and regular', 'Clean dust and small scraps of paper from the rails, apply light lubricant to the chain or gears as the manufacturer recommends, and never force a unit that feels heavy.'],
            ['Organize archives well', 'Put heavy documents on the lower shelves to balance the load, control room humidity, and schedule regular inspections by a technician.']] } }
];

var PROSES = [['Konsultasi', 'Ceritakan ruangan dan jumlah arsip Anda.'], ['Survei dan penawaran', 'Kami ukur ruangan lalu menyusun rekomendasi model.'], ['Produksi dan pengiriman', 'Unit disiapkan dan dikirim ke lokasi Anda.'], ['Pemasangan', 'Tim memasang rel dan unit hingga siap dipakai.']];
var PROSES_EN = [['Consultation', 'Tell us about your room and how many archives you have.'], ['Survey and quotation', 'We measure the room, then prepare a model recommendation.'], ['Production and delivery', 'The unit is prepared and delivered to your location.'], ['Installation', 'Our team installs the rails and units until they are ready to use.']];

/* ===== TANYA JAWAB (isi diambil dari informasi yang sudah ada di situs) ===== */
var FAQS = [
  { q: 'Apa itu mobile file?', a: 'Mobile file adalah rak arsip yang dipasang di atas rel lantai sehingga dapat digeser ke kiri atau kanan. Lorong hanya dibuka di barisan yang sedang dibutuhkan, jadi ruang yang tadinya terbuang menjadi tempat simpan.',
    en: { q: 'What is a mobile file?', a: 'A mobile file is archive shelving mounted on floor rails so it can slide left or right. An aisle is opened only in the row you need, so space that used to be wasted becomes storage.' } },
  { q: 'Apa bedanya model manual dan mekanik?', a: 'Model manual didorong langsung dengan tangan di atas rel, perawatannya sederhana dan cocok untuk beban ringan hingga menengah. Model mekanik memakai roda kemudi putar sehingga barisan besar dan padat arsip terasa ringan digeser, tanpa bergantung pada listrik.',
    en: { q: 'What is the difference between manual and mechanical models?', a: 'Manual models are pushed by hand along the rails, are simple to maintain, and suit light to medium loads. Mechanical models use a rotary hand wheel, so large rows packed with files move easily, without relying on electricity.' } },
  { q: 'Apakah ada model yang sudah TKDN?', a: 'Ada. Zeco Mobile File MF 4-22-ZC dan 102 ZC sudah bersertifikat TKDN dan tersedia di e-Katalog LKPP, sehingga memudahkan pengadaan untuk instansi.',
    en: { q: 'Is there a TKDN-certified model?', a: 'Yes. The Zeco Mobile File MF 4-22-ZC and 102 ZC are TKDN certified and available in the LKPP e-Catalogue, which makes procurement easier for agencies.' } },
  { q: 'Apakah lantai perlu diperiksa sebelum pemasangan?', a: 'Ya. Arsip yang padat sangat berat, terutama di gedung bertingkat. Konsultasikan daya dukung lantai dengan pengelola gedung atau insinyur struktur, dan pastikan permukaan rel rata.',
    en: { q: 'Does the floor need to be checked before installation?', a: 'Yes. Dense archives are very heavy, especially in multi-storey buildings. Consult the building manager or a structural engineer about floor load capacity, and make sure the rail surface is level.' } },
  { q: 'Bagaimana alur dari konsultasi sampai terpasang?', a: 'Anda menceritakan ruangan dan jumlah arsip, kami mengukur ruangan dan menyusun rekomendasi model, unit disiapkan dan dikirim ke lokasi, lalu tim kami memasang rel dan unit hingga siap dipakai.',
    en: { q: 'What is the process from consultation to installation?', a: 'You tell us about your room and how many archives you have, we measure the room and recommend a model, the unit is prepared and delivered to your location, and our team installs the rails and units until they are ready to use.' } },
  { q: 'Bagaimana cara merawat mobile file?', a: 'Bersihkan rel secara berkala, beri pelumas ringan sesuai anjuran pabrik, taruh dokumen berat di rak bawah, dan jangan memaksa menggeser unit yang terasa berat.',
    en: { q: 'How do I maintain a mobile file?', a: 'Clean the rails regularly, apply light lubricant as the manufacturer recommends, put heavy documents on the lower shelves, and never force a unit that feels heavy.' } }
];


/* ===== Bagian beranda gaya katalog: permasalahan, industri, tipe produk, keunggulan ===== */
var PROBLEMS = [['Ruang penyimpanan cepat penuh', 'Arsip terus bertambah, sementara lemari biasa memakan lantai dan cepat penuh.'], ['Dokumen sulit ditemukan', 'Penempatan yang tidak teratur membuat pencarian lama dan menghambat pekerjaan.'], ['Arsip kurang terorganisir', 'Arsip yang tersebar di banyak tempat menyulitkan pengelompokan dan pengelolaan.'], ['Ruang kurang efisien', 'Setiap barisan lemari tetap butuh lorong sendiri, sehingga banyak area terbuang.']];
var PROBLEMS_EN = [['Storage fills up quickly', 'Archives keep growing, while ordinary cabinets take up floor space and fill up fast.'], ['Documents are hard to find', 'Disorganized placement makes searching slow and holds up work.'], ['Archives are poorly organized', 'Archives scattered across many places are hard to group and manage.'], ['Space is used inefficiently', 'Every row of cabinets still needs its own aisle, so a lot of area is wasted.']];
var ADV = [['Kapasitas sesuai kebutuhan', 'Jumlah kompartemen dipilih menurut volume dokumen Anda, dengan cadangan untuk pertumbuhan.'], ['Ruang lebih efisien', 'Lorong digabung menjadi satu, sehingga lantai yang sama bisa menampung lebih banyak arsip.'], ['Dokumen tertata', 'Arsip dikelompokkan per unit sehingga lebih mudah dicari dan dijaga.'], ['Didampingi tim kami', 'Dari survei ruangan, pengiriman, sampai unit terpasang.']];
var ADV_EN = [['Capacity that fits', 'The number of compartments is chosen to match your document volume, with room to grow.'], ['More efficient space', 'Aisles are merged into one, so the same floor area holds more archives.'], ['Organized documents', 'Archives are grouped by unit, making them easier to find and look after.'], ['Guided by our team', 'From room survey and delivery to installed units.']];
/* Foto sektor (opsional): tambahkan  foto: 'images/sektor/nama-file.jpg'  pada sektor yang bersangkutan.
   fotoPos (opsional): bagian foto yang ditampilkan bila fotonya tinggi/lebar, mis. '50% 40%' (kiri-kanan atas-bawah).
   Tanpa foto, kotak biru berisi huruf awal sektor dipakai. */
var SECTORS = [
  { nama: 'Perkantoran', foto: 'images/perkantoran.png', fotoPos: '50% 40%', ket: 'Menyimpan dokumen administrasi, keuangan, legal, dan operasional secara rapi dan mudah diakses.', en: { nama: 'Offices', ket: 'Keeps administrative, financial, legal, and operational documents neat and easy to reach.' } },
  { nama: 'Pemerintahan', foto: 'images/pemerintah.png', fotoPos: '50% 40%', ket: 'Mendukung penataan arsip dalam jumlah besar dengan pengelompokan dokumen yang terstruktur.', en: { nama: 'Government', ket: 'Supports large archives with structured grouping of documents.' } },
  { nama: 'Rumah Sakit', foto: 'images/rumah sakit.png', fotoPos: '50% 40%', ket: 'Menata arsip administrasi dan dokumen institusi dengan ruang penyimpanan yang lebih efisien.', en: { nama: 'Hospitals', ket: 'Organizes administrative archives and institutional documents in more efficient storage space.' } },
  { nama: 'Sekolah dan Universitas', foto: 'images/universitas dan sekolah.png',fotoPos: '50% 40%', ket: 'Mengelola arsip akademik, administrasi, dan dokumen institusi dengan susunan yang lebih rapi.', en: { nama: 'Schools and Universities', ket: 'Manages academic, administrative, and institutional records in a tidier arrangement.' } },
  { nama: 'Perbankan dan Keuangan', foto: 'images/perbankan dan keuangan.png', fotoPos: '50% 40%', ket: 'Mengelompokkan dokumen finansial menurut kategori dan periode agar mudah ditelusuri.', en: { nama: 'Banking and Finance', ket: 'Groups financial documents by category and period so they are easy to trace.' } },
  { nama: 'Perusahaan dan Industri', foto: 'images/perusahaan dan industri.png', fotoPos: '50% 40%', ket: 'Mengelola volume arsip tinggi dengan pemanfaatan ruang yang lebih optimal.', en: { nama: 'Companies and Industry', ket: 'Handles high archive volumes with more optimal use of space.' } }
];
var TYPES = {
  Manual: { key: 'manual', name: 'Mobile File Manual', desc: 'Didorong langsung dengan tangan di atas rel. Sederhana, andal, dan perawatannya mudah.', bl: ['Pengoperasian manual', 'Perawatan sederhana', 'Beban ringan hingga menengah'], cocok: 'Kantor kecil, klinik, ruang arsip departemen', tenaga: 'Sedang, cocok untuk beban ringan hingga menengah', gerak: 'Dorong langsung dengan tangan di atas rel',
    en: { name: 'Manual Mobile File', desc: 'Pushed by hand along the rails. Simple, reliable, and easy to maintain.', bl: ['Manual operation', 'Simple maintenance', 'Light to medium loads'], cocok: 'Small offices, clinics, departmental archive rooms', tenaga: 'Moderate, suited to light and medium loads', gerak: 'Pushed directly by hand along the rails' } },
  Mekanik: { key: 'mekanik', name: 'Mobile File Mekanik', desc: 'Roda kemudi putar membuat barisan besar terasa ringan digeser, tanpa bergantung pada listrik.', bl: ['Roda kemudi putar', 'Akses rak lebih ringan', 'Untuk volume arsip tinggi'], cocok: 'Kantor menengah, notaris, sekolah, perusahaan, instansi, pusat arsip', tenaga: 'Ringan, barisan besar tetap mudah digeser', gerak: 'Roda kemudi putar (mekanik)',
    en: { name: 'Mechanical Mobile File', desc: 'A rotary hand wheel makes large rows easy to move, without relying on electricity.', bl: ['Rotary hand wheel', 'Easier shelf access', 'For high archive volumes'], cocok: 'Mid-sized offices, notaries, schools, companies, agencies, archive centers', tenaga: 'Light, large rows still move easily', gerak: 'Rotary hand wheel (mechanical)' } }
};
function sectorCard(s) {
  var n = L(s, 'nama');
  if (s.foto) {
    return '<div class="card static"><div class="pj pj-photo"><div class="pjp has-img"><img class="pj-img" src="' + esc(s.foto) + '" alt="' + esc(n) + '" loading="lazy" data-l="' + esc(n.charAt(0)) + '" style="object-position:' + esc(s.fotoPos || '50% 50%') + '"></div>' +
      '<div class="bd"><h3>' + esc(n) + '</h3><p class="ex">' + esc(L(s, 'ket')) + '</p></div></div></div>';
  }
  return '<div class="card static"><div class="pj"><div class="pjp">' + esc(n.charAt(0)) + '</div><div class="bd"><h3>' + esc(n) + '</h3><p class="ex">' + esc(L(s, 'ket')) + '</p></div></div></div>';
}
function typeCard(tp) {
  var T = TYPES[tp], list = PRODUCTS.filter(function (p) { return p.tipe === tp; });
  if (!list.length) return '';
  var f = list[0].foto && list[0].foto[0];
  return '<a class="card" href="mobile-file-' + T.key + '.html"><div class="pic' + (f ? ' has-foto' : '') + '"><span class="tag">' + esc(STR[LANG].models(list.length)) + '</span>' + picHtml(list[0]) + '</div>' +
    '<div class="bd"><h3>' + esc(L(T, 'name')) + '</h3><p class="ex">' + esc(L(T, 'desc')) + '</p><div class="tags">' + L(T, 'bl').map(function (b) { return '<span>' + esc(b) + '</span>'; }).join('') + '</div>' +
    '<span class="go">' + (LANG === 'en' ? 'View catalogue →' : 'Lihat katalog →') + '</span></div></a>';
}
function typeCmpHtml() {
  var en = LANG === 'en', M = TYPES.Manual, K = TYPES.Mekanik;
  function rng(tp) {
    var L2 = PRODUCTS.filter(function (p) { return p.tipe === tp; }), n = L2.map(function (p) { return parseInt(p.kap, 10); }).filter(function (v) { return !isNaN(v); });
    var lo = Math.min.apply(null, n), hi = Math.max.apply(null, n);
    return n.length === L2.length && lo < hi ? lo + ' - ' + hi + (en ? ' compartments' : ' kompartemen') : (en ? 'Per configuration' : 'Sesuai konfigurasi');
  }
  var rows = [[en ? 'Drive system' : 'Sistem penggerak', L(M, 'gerak'), L(K, 'gerak')], [en ? 'Operating effort' : 'Tenaga pengoperasian', L(M, 'tenaga'), L(K, 'tenaga')],
    [en ? 'Capacity range' : 'Rentang kapasitas', rng('Manual'), rng('Mekanik')], [en ? 'Electricity' : 'Listrik', en ? 'Not required' : 'Tidak diperlukan', en ? 'Not required' : 'Tidak diperlukan'], [en ? 'Best for' : 'Cocok untuk', L(M, 'cocok'), L(K, 'cocok')]];
  return '<table><thead><tr><th>' + (en ? 'Parameter' : 'Parameter') + '</th><th>' + esc(L(M, 'name')) + '</th><th>' + esc(L(K, 'name')) + '</th></tr></thead><tbody>' +
    rows.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>'; }).join('') + '</tbody></table>';
}
var curFilter = 'all';
function applyFilter() {
  [].slice.call(document.querySelectorAll('[data-cat]')).forEach(function (s) { s.hidden = curFilter !== 'all' && s.getAttribute('data-cat') !== curFilter; });
  [].slice.call(document.querySelectorAll('[data-filter]')).forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-filter') === curFilter ? 'true' : 'false'); });
}

/* Tabel perbandingan: dibuat otomatis dari data PRODUCTS, jadi ikut berubah saat produk ditambah */
function cmpHtml() {
  var S = STR[LANG];
  return '<table><thead><tr><th>' + S.cmpModel + '</th><th>' + S.drive + '</th><th>' + S.cap + '</th><th>' + S.cmpFor + '</th></tr></thead><tbody>' +
    PRODUCTS.map(function (p) {
      return '<tr><td><a href="' + produkUrl(p.id) + '" data-open="produk:' + p.id + '">' + esc(L(p, 'name')) + '</a></td><td>' + esc(L(p, 'tipe')) + '</td><td>' + esc(L(p, 'kap')) + '</td><td>' + esc(L(p, 'cocok')) + '</td></tr>';
    }).join('') + '</tbody></table>';
}

/* ===== Terjemahan teks statis di index.html (teks Indonesia dibaca langsung dari HTML) ===== */
var UI_EN = {
  'title': 'PT Cahaya Mustika Internesia | Zeco Mobile File',
  'desc': 'PT Cahaya Mustika Internesia, distributor of Zeco mobile files (movable archive cabinets) for offices, agencies, and companies.',
  'ogdesc': 'Distributor of Zeco mobile files (movable archive cabinets) for offices, agencies, and companies.',
  'skip': 'Skip to content',
  'bar': 'Distributor of Zeco mobile files for offices, agencies, and companies.',
  'barlink': 'Contact us →',
  'logo-aria': 'PT Cahaya Mustika Internesia, back to top',
  'burger': 'Open menu', 'menu-aria': 'Main menu',
  'nav-beranda': 'Home', 'nav-produk': 'Zeco Products', 'nav-portofolio': 'Portfolio', 'nav-artikel': 'Articles', 'nav-kontak': 'Contact Us',
  'consult': 'Consult Now',
  'hero-kick': 'Zeco product distributor',
  'h1': 'Organized archives, a roomier space.',
  'hero-b1': 'View Zeco Products', 'hero-b2': 'Our Portfolio',
  'hero-cap': 'One movable aisle replaces many fixed aisles',
  'tile3b': 'Survey & install', 'tile3': 'Guided by our team',
  'f1h': 'Save up to 50% of space', 'f1p': 'Storage capacity rises on the same floor area because aisles are merged into one. Actual savings depend on your room layout.',
  'f2h': 'Sturdy and long-lasting', 'f2p': 'Steel frames are built for dense archive loads and daily use.',
  'f3h': 'Full support', 'f3p': 'From room survey to installed units, our team is with you every step.',
  'produk-h': 'Zeco Products', 'produk-p': 'Choose a model that matches your archive volume. Click a product to read its article.',
  'proc-k': 'How we work', 'proc-h': 'From consultation to installation',
  'port-k': 'Portfolio', 'port-h': 'Projects we have completed', 'port-p': 'A few examples of archive layouts with Zeco mobile files.',
  'art-k': 'Articles', 'art-h': 'Insights on mobile files', 'art-p': 'Short guides before you choose and install a movable archive cabinet.',
  'cta-h': 'Ready to tidy your archives and save space?', 'cta-p': 'Tell us what you need. We will help you choose the Zeco model that fits best.',
  'kon-k': 'Contact Us', 'kon-h': 'Contact PT Cahaya Mustika Internesia', 'kon-p': 'Tell us what you need. We reply via WhatsApp.',
  'map-title': 'Location of PT Cahaya Mustika Internesia on Google Maps', 'map-link': 'Open in Google Maps',
  'l1': 'Name', 'l2': 'Agency / company', 'l3': 'Model of interest', 'l4': 'Message',
  'l4ph': 'Room size, number of archives, or other questions', 'send': 'Send via WhatsApp',
  'fc-h': 'Need a Zeco model recommendation?', 'fc-p': 'Tell us your room size and number of archives. Our team will help you choose.',
  'chatwa': 'Chat on WhatsApp',
  'ft-about': 'PT Cahaya Mustika Internesia, distributor of Zeco mobile files for offices, agencies, and companies.',
  'ft-pages': 'Page Information',
  'ft-bot': '© 2026 PT Cahaya Mustika Internesia. Specifications and availability are subject to change.',
  'top': 'Back to top ↑', 'close': 'Close',
  'cmp-h': 'Compare models', 'cmp-aria': 'Model comparison',
  'faq-k': 'FAQ', 'faq-h': 'Frequently asked questions',
  'home-more': 'View all products & comparison →',
  'prob-k': 'The problem', 'prob-h': 'Why do archives need a mobile file?', 'prob-p': 'Poor archive management makes the workspace feel full and document searches slow.',
  'ind-k': 'Our industries', 'ind-h': 'Zeco mobile files for many needs', 'ind-p': 'Archive storage that adapts to the character of each sector.',
  'typ-k': 'Product choices', 'typ-h': 'Zeco mobile file options', 'typ-p': 'Two types for your storage needs: manual and mechanical mobile files.',
  'adv-k': 'Advantages', 'adv-h': 'Why choose Zeco mobile files?', 'adv-p': 'We do more than supply mobile files. We guide you from consultation through installation.', 'adv-b': 'Discuss Your Needs',
  'art-more': 'View all articles →', 'faq-p': 'Short answers about Zeco mobile files.',
  'b3h': 'TKDN certified', 'b3p': 'Models MF 4-22-ZC and 102 ZC are listed in the LKPP e-Catalogue.',
  'c1-k': 'Category 01 · Manual system', 'c1-h': 'Manual Mobile File', 'c1-p': 'Moved directly by hand. Simple, reliable, and economical for small archive rooms.',
  'c2-k': 'Category 02 · Mechanical system', 'c2-h': 'Mechanical Mobile File', 'c2-p': 'A rotary hand wheel makes large, dense rows easy to move.',
  'gp-k': 'Selection guide', 'gp-h': 'Manual vs mechanical mobile file', 'gp-p': 'Choose the type that fits your archive volume, room size, and how often it is used.',
  'port-h2': 'Project examples',
  'phd-produk': 'Save up to 50% of space · Sturdy steel frame · TKDN-certified models in the LKPP e-Catalogue',
  'phd-port': 'From hospitals and notary offices to government agencies and private companies.',
  'phd-art': 'Choosing, installing, and maintaining a mobile file, explained briefly and clearly.',
  'phd-kon': 'Monday to Friday, 08:00 - 16:00 · WhatsApp +62 811-3791-1115',
  'phd-man': 'Suited to small offices, clinics, and departmental archive rooms.',
  'phd-mek': 'Suited to agencies, hospitals, and archive centers with large volumes. No electricity needed.',
  'title-man': 'Manual Mobile File | PT Cahaya Mustika Internesia', 'desc-man': 'Zeco manual mobile files: MF-4, MF-6, MF-8, and MF-10 series, including the 2000 mm wide version.',
  'title-mek': 'Mechanical Mobile File | PT Cahaya Mustika Internesia', 'desc-mek': 'Zeco mechanical mobile files with a rotary hand wheel for dense archives and large volumes.',
  'back-all': '← All products', 'go-mek': 'View Mechanical Mobile Files →', 'go-man': 'View Manual Mobile Files →', 'port-p2': 'Archive layouts we have completed.',
  'title-produk': 'Zeco Products | PT Cahaya Mustika Internesia', 'desc-produk': 'Zeco mobile file models with comparison of capacity and drive type.',
  'title-port': 'Portfolio | PT Cahaya Mustika Internesia', 'desc-port': 'Example archive projects with Zeco mobile files in hospitals, notary offices, agencies, and companies.',
  'title-art': 'Articles | PT Cahaya Mustika Internesia', 'desc-art': 'Short guides to choosing, installing, and maintaining movable archive cabinets (mobile files).',
  'title-kon': 'Contact Us | PT Cahaya Mustika Internesia', 'desc-kon': 'Contact PT Cahaya Mustika Internesia for Zeco mobile file consultation. Address, map, and WhatsApp form.'
};

/* ===== Teks yang dibuat lewat JavaScript (dua bahasa) ===== */
var STR = {
  id: {
    sep: ' dan ', sepLast: ', dan ',
    models: function (n) { return n + ' model'; },
    drives: function (n) { return n + ' penggerak'; },
    hero: function (l) { return 'PT Cahaya Mustika Internesia menyediakan mobile file Zeco, lemari arsip dorong dengan penggerak ' + l + ', untuk kantor, instansi, dan perusahaan.'; },
    kTel: 'Telepon / WhatsApp', kEmail: 'Email', kAddr: 'Alamat', kHours: 'Jam layanan',
    fProd: 'Produk', fKontak: 'Kontak', lTel: 'TEL', lEmail: 'EMAIL', lAddr: 'ALAMAT', lHours: 'JAM',
    read: 'Baca artikel →', minRead: 'menit baca', pick: 'Belum tahu, mohon rekomendasi',
    brand: 'Merek', drive: 'Penggerak', cap: 'Kapasitas', suitable: 'Cocok untuk', cmpModel: 'Model', cmpFor: 'Cocok untuk',
    note: 'Spesifikasi lengkap dan ukuran terbaru dapat ditanyakan langsung ke tim Cahaya Mustika Internesia.',
    consult: 'Konsultasi Sekarang', illus: 'Ilustrasi mobile file', chatWa: 'Chat WhatsApp',
    photo: function (n) { return 'Foto ' + n; },
    waHai: 'Halo Cahaya Mustika Internesia, saya ingin berkonsultasi tentang mobile file Zeco.',
    waProd: function (n) { return 'Halo Cahaya Mustika Internesia, saya tertarik dengan ' + n + '.'; },
    waForm: function (nama, org, model, pesan) { return 'Halo Cahaya Mustika Internesia, saya ' + nama + (org ? ' dari ' + org : '') + '.\nModel diminati: ' + model + '.' + (pesan ? '\nPesan: ' + pesan : ''); }
  },
  en: {
    sep: ' and ', sepLast: ', and ',
    models: function (n) { return n + (n === 1 ? ' model' : ' models'); },
    drives: function (n) { return n + (n === 1 ? ' drive type' : ' drive types'); },
    hero: function (l) { return 'PT Cahaya Mustika Internesia supplies Zeco mobile files, movable archive cabinets with ' + l + ' drive, for offices, agencies, and companies.'; },
    kTel: 'Phone / WhatsApp', kEmail: 'Email', kAddr: 'Address', kHours: 'Service hours',
    fProd: 'Products', fKontak: 'Contact', lTel: 'TEL', lEmail: 'EMAIL', lAddr: 'ADDRESS', lHours: 'HOURS',
    read: 'Read article →', minRead: 'min read', pick: 'Not sure yet, please recommend',
    brand: 'Brand', drive: 'Drive', cap: 'Capacity', suitable: 'Suitable for', cmpModel: 'Model', cmpFor: 'Best for',
    note: 'For full specifications and the latest dimensions, please ask the Cahaya Mustika Internesia team directly.',
    consult: 'Consult Now', illus: 'Mobile file illustration', chatWa: 'Chat on WhatsApp',
    photo: function (n) { return 'Photo ' + n; },
    waHai: 'Hello Cahaya Mustika Internesia, I would like to consult about Zeco mobile files.',
    waProd: function (n) { return 'Hello Cahaya Mustika Internesia, I am interested in ' + n + '.'; },
    waForm: function (nama, org, model, pesan) { return 'Hello Cahaya Mustika Internesia, I am ' + nama + (org ? ' from ' + org : '') + '.\nModel of interest: ' + model + '.' + (pesan ? '\nMessage: ' + pesan : ''); }
  }
};

/* ===== Alat bantu ===== */
function esc(s) { return String(s).replace(/[&<>\"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#39;' }[c]; }); }
function wa(text) { return 'https://wa.me/' + CFG.wa + '?text=' + encodeURIComponent(text); }
function waHai() { return wa(STR[LANG].waHai); }
function find(arr, id) { return arr.filter(function (x) { return x.id === id; })[0]; }
/* Tiap produk punya halaman sendiri: nama file = id produk, mis. zeco-mf-102-zc.html */
function produkUrl(id) { return id + '.html'; }
function artikelUrl(id) { return 'artikel-' + id + '.html'; }

function drawUnit(komp, brand) {
  var m = Math.min(4, Math.max(2, Math.round(komp / 4))), D = '#2b2f36';
  var P = brand === 'Highpoint' ? { d: '#6d7378', s: '#565b60', c: '#2b2f33', sh: '#8b9096', bd: 1 }
        : brand === 'Alba' ? { d: '#a7cdc5', s: '#86b0a7', c: '#8fb5ad', sh: '#dbeee9' }
        : { d: '#e6e9ee', s: '#c3c8d0', c: '#aeb4bf', sh: '#eef0f3' };
  function label(x, y) {
    return '<rect x="' + x + '" y="' + y + '" width="14" height="24" fill="#fff" stroke="' + D + '" stroke-width="1.5"/><path d="M' + (x + 3) + ' ' + (y + 8) + 'h8M' + (x + 3) + ' ' + (y + 13) + 'h8M' + (x + 3) + ' ' + (y + 18) + 'h8" stroke="#9aa1ad" stroke-width="1.5"/>';
  }
  function handle(x) { return '<rect x="' + x + '" y="96" width="5" height="26" rx="2" fill="' + D + '"/>'; }
  var o = '<rect x="0" y="170" width="420" height="20" fill="#cfd4dc"/><rect x="14" y="168" width="392" height="5" fill="' + D + '"/>';
  o += '<rect x="28" y="28" width="62" height="138" rx="2" fill="' + P.d + '"/><rect x="28" y="28" width="9" height="138" fill="' + P.s + '"/>' + label(50, 46) + handle(70) + '<rect x="24" y="162" width="70" height="8" fill="' + D + '"/>';
  var gx = 122, cols = ['#e23d3d', '#f0762b', '#29b6e8', '#3cb043'];
  o += '<rect x="' + gx + '" y="34" width="86" height="132" fill="' + P.s + '"/><rect x="' + (gx + 6) + '" y="40" width="74" height="120" fill="' + P.c + '"/>';
  for (var r = 0; r < 4; r++) {
    var sy = 66 + r * 27;
    if (P.bd) for (var k = 0; k < 4; k++) o += '<rect x="' + (gx + 9 + k * 17) + '" y="' + (sy - 22) + '" width="14" height="21" fill="' + cols[(k + r) % 4] + '"/>';
    o += '<rect x="' + (gx + 6) + '" y="' + sy + '" width="74" height="4" fill="' + P.sh + '"/>';
  }
  o += '<rect x="' + (gx - 4) + '" y="162" width="94" height="8" fill="' + D + '"/>';
  for (var i = 0; i < m; i++) {
    var x = gx + 88 + i * 46;
    o += '<rect x="' + x + '" y="34" width="44" height="132" fill="' + P.d + '" stroke="' + P.s + '"/>' + label(x + 6, 50) + handle(x + 30);
  }
  o += '<rect x="' + (gx + 84) + '" y="162" width="' + (m * 46 + 8) + '" height="8" fill="' + D + '"/>';
  return '<svg viewBox="0 0 420 190" width="100%" role="img" aria-label="' + esc(STR[LANG].illus) + '">' + o + '</svg>';
}

/* ===== Komponen kartu ===== */
function picHtml(p) {
  var f = p.foto && p.foto[0];
  return f ? '<img class="foto" src="' + esc(f) + '" alt="' + esc(L(p, 'name')) + '" loading="lazy" style="--y:' + esc(p.fotoY || '0%') + (p.fotoZoom ? ';--zoom:' + p.fotoZoom : '') + '" data-komp="' + p.komp + '" data-brand="' + esc(p.brand) + '">' : drawUnit(p.komp, p.brand);
}
function galleryHtml(p) {
  var fs = p.foto || [], S = STR[LANG];
  if (!fs.length) return '<div class="pic">' + drawUnit(p.komp, p.brand) + '</div>';
  var h = '<div class="pic"><img class="foto" id="gal-main" src="' + esc(fs[0]) + '" alt="' + esc(L(p, 'name')) + '" style="--y:' + esc(p.fotoY || '0%') + (p.fotoZoom ? ';--zoom:' + p.fotoZoom : '') + '" data-komp="' + p.komp + '" data-brand="' + esc(p.brand) + '"></div>';
  if (fs.length > 1) {
    h += '<div class="thumbs">' + fs.map(function (f, i) {
      return '<button type="button" class="' + (i ? '' : 'on') + '" data-thumb="' + esc(f) + '" aria-label="' + esc(S.photo(i + 1)) + '"><img class="th" src="' + esc(f) + '" alt=""></button>';
    }).join('') + '</div>';
  }
  return h;
}
var WA_ICON = '<svg viewBox="0 0 24 24" width="24" height="24" fill="#fff" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.12c-.25.69-1.44 1.32-1.98 1.37-.5.05-1.13.07-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.37-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.25.6.85 2.07.92 2.22.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.7-.18 1.39z"/></svg>';
var EYE_ICON = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1.5 12S5.5 4.5 12 4.5 22.5 12 22.5 12 18.5 19.5 12 19.5 1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3.2"/></svg>';
function productCard(p, i) {
  var S = STR[LANG], name = L(p, 'name'), kap = L(p, 'kap'), f = p.foto && p.foto[0], en = LANG === 'en';
  var code = name.replace(/^Zeco Mobile File\s*/, '') || name;
  var pill = /^\d/.test(kap) ? kap : L(p, 'tag');
  var sp = L(p, 'spek') || [], ukr = sp.filter(function (x) { return /^(Ukuran|Dimensions)$/.test(x[0]); })[0] || sp[0];
  var spec = '<dl class="pc-spec">' + (ukr ? '<div><dt>' + esc(ukr[0]) + '</dt><dd>' + esc(ukr[1]) + '</dd></div>' : '') +
    '<div><dt>' + (en ? 'Capacity' : 'Kapasitas') + '</dt><dd>' + esc(kap) + '</dd></div></dl>';
  return '<article class="card pcard pc2" data-open="produk:' + p.id + '"><div class="pic' + (f ? ' has-foto' : '') + '"><span class="tag">' + esc(pill) + '</span>' + picHtml(p) + '</div>' +
    '<div class="bd"><div class="pc-top"><span class="pc-type">' + esc(L(p, 'tipe')) + '</span><span class="pc-code">' + esc(code) + '</span></div>' +
    '<h3>' + esc(name) + '</h3><p class="ex">' + esc(L(p, 'short')) + '</p>' + spec +
    '<div class="pact"><button type="button" class="bd-btn">' + (en ? 'View Details' : 'Lihat Detail') + ' <span aria-hidden="true">&rarr;</span></button>' +
    '<a class="wa-btn" target="_blank" rel="noopener" aria-label="WhatsApp" href="' + wa(S.waProd(name)) + '">' + WA_ICON + '</a></div></div></article>';
}
function projectCard(j) {
  var sek = L(j, 'sektor');
  var pjp = j.foto
    ? '<div class="pjp has-img"><img class="pj-img" src="' + esc(j.foto) + '" alt="' + esc(L(j, 'judul')) + '" loading="lazy" data-l="' + esc(sek.charAt(0)) + '" style="object-position:' + esc(j.fotoPos || '50% 50%') + '"></div>'
    : '';
  return '<div class="card static"><div class="pj' + (j.foto ? ' pj-photo' : '') + '">' + pjp + '<div class="bd"><span class="meta">' + esc(sek) + '</span><h3>' + esc(L(j, 'judul')) + '</h3>' +
    '<p class="ex">' + esc(L(j, 'ket')) + '</p></div></div></div>';
}
function articleCard(a, i) {
  var S = STR[LANG], no = ('0' + ((i || 0) + 1)).slice(-2);
  var clock = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  return '<a class="card txt acard" href="' + artikelUrl(a.id) + '" data-open="artikel:' + a.id + '">' +
    '<span class="a-no" aria-hidden="true">' + no + '</span>' +
    '<div class="bd"><span class="a-cat">' + esc(L(a, 'kat')) + '</span>' +
    '<h3>' + esc(L(a, 'judul')) + '</h3>' +
    '<p class="ex">' + esc(L(a, 'ex')) + '</p>' +
    '<div class="a-foot"><span class="a-time">' + clock + a.menit + ' ' + esc(S.minRead) + '</span>' +
    '<span class="go">' + esc(S.read.replace(/\s*\u2192\s*$/, '')) + '<i class="a-arr" aria-hidden="true">\u2192</i></span></div></div></a>';
}

/* ===== Isi bagian-bagian halaman ===== */
var NONE = document.createElement('div');   // pengganti untuk elemen yang tidak ada di halaman ini
var $ = function (id) { return document.getElementById(id) || NONE; };
[].slice.call(document.querySelectorAll('.logo-img')).forEach(function (i) { i.src = encodeURI(CFG.logo); });

$('hero-art').insertAdjacentHTML('afterbegin', CFG.heroFoto
  ? '<img class="hero-foto" fetchpriority="high" decoding="async" src="' + esc(CFG.heroFoto) + '" alt="Mobile file Zeco" style="--y:' + esc(CFG.heroFotoY || '0%') + '">'
  : drawUnit(20));

var UI_ID = { 'nav-beranda': 'Beranda' };   // cadangan bila teks Indonesia di HTML kosong
/* Teks statis: simpan teks Indonesia dari HTML, lalu tukar sesuai bahasa */
function applyStatic() {
  [].slice.call(document.querySelectorAll('[data-i18n]')).forEach(function (el) {
    var key = el.getAttribute('data-i18n'), attr = el.getAttribute('data-i18n-attr');
    if (el._id === undefined) { el._id = attr ? el.getAttribute(attr) : el.textContent; if (!el._id && UI_ID[key]) el._id = UI_ID[key]; }
    var v = LANG === 'en' && UI_EN[key] != null ? UI_EN[key] : el._id;
    if (attr) el.setAttribute(attr, v); else el.textContent = v;
  });
}

function daftar(a) {
  var S = STR[LANG];
  a = a.map(function (s) { return s.toLowerCase(); });
  return a.length < 2 ? a.join('') : a.length === 2 ? a.join(S.sep) : a.slice(0, -1).join(', ') + S.sepLast + a[a.length - 1];
}
function kapital(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function render() {
  var S = STR[LANG];
  document.documentElement.lang = LANG;
  $('og-locale').setAttribute('content', LANG === 'en' ? 'en_US' : 'id_ID');
  applyStatic();

  $('grid-produk').innerHTML = PRODUCTS.map(productCard).join('');
  $('grid-port').innerHTML = PROJECTS.map(projectCard).join('');
  $('grid-artikel').innerHTML = ARTICLES.slice(0, +$('grid-artikel').getAttribute('data-max') || ARTICLES.length).map(articleCard).join('');
  $('prob').innerHTML = (LANG === 'en' ? PROBLEMS_EN : PROBLEMS).map(function (s) { return '<div><h3>' + esc(s[0]) + '</h3><p>' + esc(s[1]) + '</p></div>'; }).join('');
  $('adv').innerHTML = (LANG === 'en' ? ADV_EN : ADV).map(function (s) { return '<div><h3>' + esc(s[0]) + '</h3><p>' + esc(s[1]) + '</p></div>'; }).join('');
  $('sect').innerHTML = SECTORS.map(sectorCard).join('');
  $('types').innerHTML = Object.keys(TYPES).map(typeCard).join('');
  $('grid-manual').innerHTML = PRODUCTS.filter(function (p) { return p.tipe === 'Manual'; }).map(productCard).join('');
  $('grid-mekanik').innerHTML = PRODUCTS.filter(function (p) { return p.tipe === 'Mekanik'; }).map(productCard).join('');
  $('cmp-type').innerHTML = typeCmpHtml();
  $('cmp-type').setAttribute('aria-label', LANG === 'en' ? 'Manual vs mechanical comparison' : 'Perbandingan manual dan mekanik');
  $('tabs').innerHTML = [['all', LANG === 'en' ? 'All types' : 'Semua tipe', PRODUCTS.length]].concat(Object.keys(TYPES).map(function (k) { return [TYPES[k].key, L(TYPES[k], 'name'), PRODUCTS.filter(function (p) { return p.tipe === k; }).length]; }))
    .map(function (t) { return '<button type="button" data-filter="' + t[0] + '" aria-pressed="false">' + esc(t[1]) + ' (' + t[2] + ')</button>'; }).join('');
  applyFilter();
  $('proc').innerHTML = (LANG === 'en' ? PROSES_EN : PROSES).map(function (s) { return '<div><h3>' + s[0] + '</h3><p>' + s[1] + '</p></div>'; }).join('');

  $('cmp').innerHTML = cmpHtml();
  $('faq-list').innerHTML = FAQS.map(function (f) { return '<details><summary>' + esc(L(f, 'q')) + '</summary><p>' + esc(L(f, 'a')) + '</p></details>'; }).join('');

  var sel = $('f3'), idx = sel.selectedIndex;
  sel.innerHTML = '<option>' + esc(S.pick) + '</option>' + PRODUCTS.map(function (p) { return '<option>' + esc(L(p, 'name')) + '</option>'; }).join('');
  sel.selectedIndex = Math.max(0, idx);

  $('kontak-info').innerHTML =
    '<h3>' + S.kTel + '</h3><p>' + esc(CFG.tel) + '</p><h3>' + S.kEmail + '</h3><p>' + esc(CFG.email) + '</p>' +
    '<h3>' + S.kAddr + '</h3><p>' + esc(CFG.alamat) + '</p><h3>' + S.kHours + '</h3><p>' + esc(LANG === 'en' ? CFG.jamEn : CFG.jam) + '</p>';
  $('ft-kontak').innerHTML = '<h4>' + S.fKontak + '</h4><a href="tel:+' + CFG.wa + '"><i>' + S.lTel + '</i>' + esc(CFG.tel) + '</a><a href="kontak.html"><i>' + S.lAddr + '</i>' + esc(CFG.alamat) + '</a>';

  /* Teks jenis penggerak mengikuti data PRODUCTS, jadi tidak pernah menjanjikan model yang belum ada */
  var TIPE = PRODUCTS.map(function (p) { return L(p, 'tipe'); }).filter(function (v, i, a) { return a.indexOf(v) === i; });
  $('t-model').textContent = S.models(PRODUCTS.length);
  $('t-drive').textContent = S.drives(TIPE.length);
  $('t-drive-sub').textContent = kapital(daftar(TIPE));
  $('hero-pill').textContent = kapital(daftar(TIPE));
  $('hero-lead').textContent = S.hero(daftar(TIPE));

  $('ft-wa').href = waHai();
  $('hd-wa').href = waHai();
  $('cta-wa').href = waHai();
  $('phd-wa').href = waHai();
  var fw = document.querySelector('.fwa');
  if (fw) { fw.href = waHai(); fw.setAttribute('aria-label', S.chatWa); }

  [].slice.call(document.querySelectorAll('[data-lang]')).forEach(function (b) {
    b.setAttribute('aria-pressed', b.getAttribute('data-lang') === LANG ? 'true' : 'false');
  });

  if (document.getElementById('faq-list')) {
    var ld = document.getElementById('ld-faq');
    if (!ld) { ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'ld-faq'; document.head.appendChild(ld); }
    ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: LANG,
      mainEntity: FAQS.map(function (f) { return { '@type': 'Question', name: L(f, 'q'), acceptedAnswer: { '@type': 'Answer', text: L(f, 'a') } }; }) });
  }
  var pdb = document.getElementById('pd-body');
  if (pdb) pdb.innerHTML = produkPageHtml();
  var adb = document.getElementById('art-body');
  if (adb) {
    adb.innerHTML = artikelPageHtml();
    var oldHero = document.getElementById('ar-hero'); if (oldHero) oldHero.parentNode.removeChild(oldHero);
    var heroHtml = artikelHeroHtml(), heroSec = adb.closest ? adb.closest('section') : null;
    if (heroHtml && heroSec) heroSec.insertAdjacentHTML('beforebegin', heroHtml);
  }
  if (dlg.open && curKey) dlgBody.innerHTML = detailHtml(curKey);   // jendela detail yang sedang terbuka ikut berganti
  if (window.revealDyn) window.revealDyn();                          // animasi untuk kartu yang baru dibuat
}

function setLang(l) {
  if (l === LANG || (l !== 'id' && l !== 'en')) return;
  LANG = l;
  try { localStorage.setItem('lang', l); } catch (e) {}
  try {
    var u = new URL(location.href); u.searchParams.delete('lang');
    history.replaceState(null, '', u.pathname + u.search + u.hash);
  } catch (e) {}
  render();
}

/* ===== Google Maps ===== */
$('map').src = 'https://www.google.com/maps?q=' + encodeURIComponent(CFG.mapQuery) + '&output=embed';
$('map-link').href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CFG.mapQuery);

/* ===== Jendela detail produk / artikel ===== */
var dlg = $('dlg'), dlgBody = $('dlg-body'), curKey = '';

function detailHtml(key) {
  var S = STR[LANG], k = key.split(':'), html = '';
  if (k[0] === 'produk') {
    var p = find(PRODUCTS, k[1]); if (!p) return '';
    html = '<h3 id="dlg-title">' + esc(L(p, 'name')) + '</h3><p class="lead2">' + esc(L(p, 'short')) + '</p>' +
      '<div class="dl-prod"><div>' + galleryHtml(p) +
      '<table class="spec"><tr><td>' + S.brand + '</td><td>' + esc(p.brand) + '</td></tr><tr><td>' + S.drive + '</td><td>' + esc(L(p, 'tipe')) + '</td></tr><tr><td>' + S.cap + '</td><td>' + esc(L(p, 'kap')) + '</td></tr>' +
      (L(p, 'spek') || []).map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td></tr>'; }).join('') + '</table>' +
      '<a class="btn gold" target="_blank" rel="noopener" href="' + wa(S.waProd(L(p, 'name'))) + '">' + S.consult + '</a></div>' +
      '<article class="art">' + L(p, 'art').map(function (a) { return '<h2>' + esc(a[0]) + '</h2><p>' + esc(a[1]) + '</p>'; }).join('') +
      '<h2>' + S.suitable + '</h2><p>' + esc(L(p, 'cocok')) + '.</p><p class="note">' + S.note + '</p></article></div>';
  } else {
    var a = find(ARTICLES, k[1]); if (!a) return '';
    html = '<span class="meta">' + esc(L(a, 'kat')) + ' · ' + a.menit + ' ' + S.minRead + '</span><h3 id="dlg-title">' + esc(L(a, 'judul')) + '</h3><p class="lead2">' + esc(L(a, 'ex')) + '</p>' +
      '<article class="art">' + L(a, 'isi').map(function (s) { return '<h2>' + esc(s[0]) + '</h2><p>' + esc(s[1]) + '</p>'; }).join('') + '</article>' +
      '<div class="btns"><a class="btn gold" style="width:auto" target="_blank" rel="noopener" href="' + waHai() + '">' + S.consult + '</a></div>';
  }
  return html;
}
/* Halaman detail produk (detail-produk.html?id=...): isi sama dengan jendela detail, tetapi tampil sebagai halaman sendiri */
function produkPageHtml() {
  var S = STR[LANG], en = LANG === 'en', id = '';
  id = document.body.getAttribute('data-product') || '';
  if (!id) { try { id = new URLSearchParams(location.search).get('id') || ''; } catch (e) {} }   // cadangan untuk tautan lama detailproduk.html?id=...
  var p = find(PRODUCTS, id);
  var listName = (en && S['nav-produk']) || 'Produk Zeco';
  var back = '<div class="btns pd-back"><a class="btn line" href="produk.html">' + (en ? '\u2190 All products' : '\u2190 Semua produk') + '</a></div>';
  if (!p) return '<div class="pd-crumb"><a href="produk.html">' + esc(listName) + '</a></div><h1 id="pd-title">' + (en ? 'Product not found' : 'Produk tidak ditemukan') + '</h1>' + back;
  document.title = L(p, 'name') + ' | PT Cahaya Mustika Internesia';
  [['meta[name="description"]', L(p, 'short')], ['meta[property="og:title"]', document.title], ['meta[property="og:description"]', L(p, 'short')]].forEach(function (m) {
    var el = document.querySelector(m[0]); if (el) el.setAttribute('content', m[1]);
  });
  var inner = detailHtml('produk:' + p.id).replace('<h3 id="dlg-title">', '<h1 id="pd-title">').replace('</h3>', '</h1>');
  return inner + back;
}
/* ===== Halaman artikel (artikel-<id>.html): banner di atas, isi bernomor, daftar isi dan "Baca juga" di samping ===== */
var AR_CLOCK = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
function pad2(n) { return (n < 10 ? '0' : '') + n; }
function artikelCur() {
  var id = document.body.getAttribute('data-article') || '';
  if (!id) { try { id = new URLSearchParams(location.search).get('id') || ''; } catch (e) {} }
  return find(ARTICLES, id);
}
/* Banner penuh lebar (dipasang di luar #art-body supaya melebar sampai tepi layar) */
function artikelHeroHtml() {
  var a = artikelCur(); if (!a) return '';
  var S = STR[LANG], en = LANG === 'en', listName = (en && S['nav-artikel']) || 'Artikel', isi = L(a, 'isi');
  return '<section class="phd ar-hero" id="ar-hero"><div class="w">' +
    '<h1 id="pd-title">' + esc(L(a, 'judul')) + '</h1>' +
    '<p class="lead2">' + esc(L(a, 'ex')) + '</p>' +
    '<div class="ar-meta"><span>' + AR_CLOCK + a.menit + ' ' + esc(S.minRead) + '</span><span>' + isi.length + ' ' + (en ? 'sections' : 'bagian') + '</span></div>' +
    '</div></section>';
}
function artikelPageHtml() {
  var S = STR[LANG], en = LANG === 'en', a = artikelCur();
  var listName = (en && S['nav-artikel']) || 'Artikel';
  var back = '<div class="btns pd-back"><a class="btn line" href="artikel.html">' + (en ? '\u2190 All articles' : '\u2190 Semua artikel') + '</a></div>';
  if (!a) return '<div class="pd-crumb"><a href="artikel.html">' + esc(listName) + '</a></div><h1 id="pd-title">' + (en ? 'Article not found' : 'Artikel tidak ditemukan') + '</h1>' + back;
  document.title = L(a, 'judul') + ' | PT Cahaya Mustika Internesia';
  [['meta[name="description"]', L(a, 'ex')], ['meta[property="og:title"]', document.title], ['meta[property="og:description"]', L(a, 'ex')]].forEach(function (m) {
    var el = document.querySelector(m[0]); if (el) el.setAttribute('content', m[1]);
  });
  var isi = L(a, 'isi');
  var secs = isi.map(function (s, i) {
    return '<section class="ar-sec" id="bagian-' + (i + 1) + '"><span class="ar-n">' + pad2(i + 1) + '</span><div><h2>' + esc(s[0]) + '</h2><p>' + esc(s[1]) + '</p></div></section>';
  }).join('');
  var more = ARTICLES.map(function (x, i) {
    return x.id === a.id ? '' : '<a href="' + artikelUrl(x.id) + '"><i>' + pad2(i + 1) + '</i><span><b>' + esc(L(x, 'judul')) + '</b><small>' + esc(L(x, 'kat')) + ' \u00b7 ' + x.menit + ' ' + esc(S.minRead) + '</small></span></a>';
  }).join('');
  var cta = '<div class="ar-cta"><div><h3>' + (en ? 'Need help choosing a Zeco model?' : 'Butuh bantuan memilih model Zeco?') + '</h3>' +
    '<p>' + (en ? 'Tell us about your archive and room. Our team will help.' : 'Ceritakan kebutuhan arsip dan ruangan Anda. Tim kami siap membantu.') + '</p></div>' +
    '<a class="btn gold" target="_blank" rel="noopener" href="' + waHai() + '">' + S.consult + '</a></div>';
  return '<div class="ar-wrap"><div class="ar-main"><article class="art ar-art">' + secs + '</article>' + cta + back + '</div>' +
    '<aside class="ar-side"><div class="ar-box ar-more"><h4>' + (en ? 'Keep reading' : 'Baca juga') + '</h4>' + more + '</div></aside></div>';
}
function openDetail(key) {
  var html = detailHtml(key); if (!html) return;
  curKey = key;
  dlgBody.innerHTML = html;
  dlg.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
}
function closeDetail() { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); }

dlg.addEventListener('close', function () { document.body.style.overflow = ''; curKey = ''; });
$('dlg-x').addEventListener('click', closeDetail);
dlg.addEventListener('click', function (e) { if (e.target === dlg) closeDetail(); });   // klik area gelap = tutup

document.addEventListener('click', function (e) {
  var lg = e.target.closest('[data-lang]');
  if (lg) { setLang(lg.getAttribute('data-lang')); return; }
  var ft = e.target.closest('[data-filter]');
  if (ft) { curFilter = ft.getAttribute('data-filter'); applyFilter(); return; }
  var t = e.target.closest('[data-thumb]');
  if (t) {
    var m = $('gal-main'); if (m) m.src = t.getAttribute('data-thumb');
    [].slice.call(t.parentElement.children).forEach(function (x) { x.classList.toggle('on', x === t); });
    return;
  }
  if (e.target.closest('.wa-btn')) return;   // tombol WhatsApp di kartu: biarkan tautan terbuka
  var b = e.target.closest('[data-open]');
  if (b) {
    e.preventDefault();
    var key = b.getAttribute('data-open');
    if (key.indexOf('produk:') === 0) location.href = produkUrl(key.slice(7));
    else if (key.indexOf('artikel:') === 0) location.href = artikelUrl(key.slice(8));
    else openDetail(key);
  }
});

/* Foto gagal dimuat -> pakai ilustrasi bawaan */
document.addEventListener('error', function (e) {
  var el = e.target;
  if (!el || el.tagName !== 'IMG') return;
  if (el.classList.contains('hero-foto')) {
    el.outerHTML = drawUnit(20);
  } else if (el.classList.contains('foto')) {
    var box = el.parentElement;
    el.outerHTML = drawUnit(+el.getAttribute('data-komp') || 20, el.getAttribute('data-brand'));
    if (box) box.classList.remove('has-foto');
  } else if (el.classList.contains('th')) {
    el.parentElement.remove();
  } else if (el.classList.contains('pj-img')) {
    var pb2 = el.parentElement; pb2.classList.remove('has-img'); pb2.textContent = el.getAttribute('data-l'); if (pb2.parentElement) pb2.parentElement.classList.remove('pj-photo');
  }
}, true);

/* ===== Menu HP ===== */
var menu = $('menu'), burger = $('burger');
burger.addEventListener('click', function () {
  var o = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', o ? 'true' : 'false');
});
menu.addEventListener('click', function (e) {
  if (e.target.closest('a')) { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && menu.classList.contains('open')) { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.focus(); }
});

/* ===== Navbar berubah warna + menu aktif saat scroll ===== */
var hd = document.querySelector('.hd');
var PAGE = document.body.getAttribute('data-page');
[].slice.call(document.querySelectorAll('[data-nav]')).forEach(function (a) {
  var on = a.getAttribute('data-nav') === PAGE;
  a.classList.toggle('on', on);
  if (on) a.setAttribute('aria-current', 'page');
});
function onScroll() { hd.classList.toggle('scrolled', window.scrollY > 30); }
window.addEventListener('scroll', onScroll, { passive: true });

/* ===== Formulir kontak -> WhatsApp ===== */
$('form').addEventListener('submit', function (e) {
  e.preventDefault();
  var v = function (id) { return $(id).value.trim(); };
  window.open(wa(STR[LANG].waForm(v('f1'), v('f2'), v('f3'), v('f4'))), '_blank', 'noopener');
});

/* Isi halaman sesuai bahasa terpilih (harus sebelum animasi scroll di bawah) */
render();

var FOTO_DIR = 'images/produk/', FOTO_EXT = ['jpg', 'jpeg', 'png', 'webp'];
function probeImg(u) {
  return new Promise(function (res) { var im = new Image(); im.onload = function () { res(u); }; im.onerror = function () { res(null); }; im.src = u; });
}
function probeName(base) {
  return FOTO_EXT.reduce(function (chain, ext) {
    return chain.then(function (found) { return found || probeImg(base + '.' + ext); });
  }, Promise.resolve(null));
}
(function autoFoto() {
  if (!CFG.autoFoto) return;
  var changed = 0;
  Promise.all(PRODUCTS.map(function (p) {
    return probeName(FOTO_DIR + p.id).then(function (main) {
      if (!main) return;
      return Promise.all([2, 3, 4].map(function (n) { return probeName(FOTO_DIR + p.id + '-' + n); })).then(function (ex) {
        var auto = [main].concat(ex.filter(Boolean));
        p.foto = auto.concat((p.foto || []).filter(function (f) { return auto.indexOf(f) < 0; }));
        changed++;
      });
    });
  })).then(function () { if (changed) render(); });
})();
onScroll();

/* ===== Animasi setiap scroll ===== */
(function () {
  var W = document.body;
  var pb = document.createElement('div'); pb.className = 'pbar'; W.appendChild(pb);
  var fw = document.createElement('a');
  fw.className = 'fwa'; fw.target = '_blank'; fw.rel = 'noopener'; fw.href = waHai(); fw.setAttribute('aria-label', STR[LANG].chatWa);
  fw.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.12c-.25.69-1.44 1.32-1.98 1.37-.5.05-1.13.07-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.37-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.25.6.85 2.07.92 2.22.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.7-.18 1.39z"/></svg>';
  W.appendChild(fw);
  function prog() { var h = document.documentElement; pb.style.width = (window.scrollY / Math.max(1, h.scrollHeight - innerHeight) * 100) + '%'; }
  window.addEventListener('scroll', prog, { passive: true }); prog();

  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  document.documentElement.classList.add('js');
  var RV = ['rv', 'rv-up', 'rv-left', 'rv-right', 'rv-zoom', 'rv-top', 'in'];
  var lastY = window.scrollY, goingUp = false;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (y !== lastY) { goingUp = y < lastY; lastY = y; }
  }, { passive: true });

  // Kembalikan elemen ke posisi awal (tersembunyi) agar bisa beranimasi lagi
  function arm(el) {
    clearTimeout(el._t);
    el.style.transitionDelay = el.getAttribute('data-d');
    el.classList.remove('in', 'rv-top');
    el.classList.add('rv', el.getAttribute('data-c'));
  }
  // Munculkan elemen; saat scroll ke atas, elemen turun dari atas
  function show(el) {
    clearTimeout(el._t);
    if (!el.classList.contains('rv')) arm(el);
    if (goingUp && el.getAttribute('data-c') === 'rv-up') {
      el.style.transition = 'none';
      el.classList.add('rv-top');
      void el.offsetWidth;
      el.style.transition = '';
    }
    el.classList.add('in');
    // setelah selesai, lepas kelas animasi agar hover kartu tidak tertunda
    el._t = setTimeout(function () {
      RV.forEach(function (c) { el.classList.remove(c); });
      el.style.transitionDelay = '';
    }, 1300);
  }
  var io = new IntersectionObserver(function (en) {
    en.forEach(function (e) {
      if (e.isIntersecting) show(e.target); else arm(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  function watch(sel, cls) {
    [].slice.call(document.querySelectorAll(sel)).forEach(function (el) {
      var i = [].indexOf.call(el.parentElement.children, el);
      el.setAttribute('data-d', Math.min(i, 4) * 90 + 'ms');
      el.setAttribute('data-c', cls);
      arm(el); io.observe(el);
    });
  }
  [['.sec-h', 'rv-up'], ['.feat div', 'rv-zoom'], ['.proc div', 'rv-up'], ['.card', 'rv-up'], ['.tiles', 'rv-up'],
   ['.cta .w', 'rv-zoom'], ['.cmp', 'rv-up'], ['.faq details', 'rv-up'], ['.ct>div:first-child', 'rv-left'], ['form', 'rv-right'], ['.ftcta', 'rv-zoom'], ['.ft-in>div', 'rv-up']
  ].forEach(function (p) { watch(p[0], p[1]); });
  // Dipanggil setelah ganti bahasa: kartu dan langkah proses dibuat ulang, jadi perlu didaftarkan lagi
  window.revealDyn = function () { watch('.proc div', 'rv-up'); watch('.card', 'rv-up'); watch('.faq details', 'rv-up'); };
})();

/* ===== Gambar latar per halaman + animasi pindah halaman ===== */
(function () {
  var pg = document.body.getAttribute('data-page'), b = CFG.bg && CFG.bg[pg];
  // b boleh satu nama file atau daftar nama; yang pertama berhasil dimuat dipakai
  if (b) [].concat(b).reduce(function (chain, u) {
    return chain.then(function (found) { return found || probeImg(encodeURI(u)); });
  }, Promise.resolve(null)).then(function (ok) { if (ok) document.documentElement.style.setProperty('--bg', 'url("' + ok + '")'); });
  var still = matchMedia('(prefers-reduced-motion:reduce)').matches;
  /* Latar berganti otomatis di semua halaman: foto halaman ini tampil dulu, lalu bergantian dengan foto halaman lain.
     Daftar foto diambil dari CFG.bg. Atur jeda (milidetik) lewat CFG.bgJeda. */
  (function slideshow() {
    var host = document.querySelector('.hero, .phd');
    if (!host || !CFG.bg || !CFG.bgGanti) return;
    var urls = [], seen = {};
    [pg].concat(Object.keys(CFG.bg)).forEach(function (k) {
      var v = CFG.bg[k]; if (!v) return;
      [].concat(v).forEach(function (u) { if (!seen[u]) { seen[u] = 1; urls.push(u); } });
    });
    Promise.all(urls.map(function (u) { return probeImg(encodeURI(u)); })).then(function (list) {
      var ok = list.filter(Boolean);
      // Portofolio punya beberapa nama cadangan untuk satu foto; pakai satu saja per halaman
      if (ok.length < 2) return;
      var layers = ok.map(function (u, i) {
        var d = document.createElement('div');
        d.className = 'bgslide' + (i === 0 ? ' on' : '');
        d.style.backgroundImage = 'url("' + u + '")';
        d.setAttribute('aria-hidden', 'true');
        host.insertBefore(d, host.firstChild);
        return d;
      });
      if (still) return;
      var n = 0;
      setInterval(function () {
        layers[n].classList.remove('on');
        n = (n + 1) % layers.length;
        layers[n].classList.add('on');
      }, CFG.bgJeda || 6000);
    });
  })();
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || still) return;
    if (a.target && a.target !== '_self') return;
    var u; try { u = new URL(a.href, location.href); } catch (x) { return; }
    if (u.origin !== location.origin || !/(\.html?|\/)$/.test(u.pathname)) return;
    if (u.pathname === location.pathname && u.search === location.search) return;
    e.preventDefault();
    document.documentElement.classList.add('leaving');
    setTimeout(function () { location.href = u.href; }, 190);
  });
  window.addEventListener('pageshow', function (e) { if (e.persisted) document.documentElement.classList.remove('leaving'); });
})();