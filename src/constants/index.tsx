import { coffeeTrailType, coffeeType, tourType } from "@/types";

export const DATA_TOUR: tourType[] = [
  {
    key: "terowongan",
    name: "Terowongan Mrawan",
    address: "Gn. Gumitir, Sidomulyo, Kec. Silo, Kabupaten Jember, Jawa Timur",
    price: "Gratis",
    description:
      "Terowongan Mrawan merupakan salah satu terowongan kereta api terpanjang di Indonesia yang masih aktif sampai sekarang. Terowongan ini menghubungkan Kabupaten Jember dan Kabupaten Banyuwangi di Jawa Timur. Terowongan yang membelah Gunung Gumitir ini terletek antara Stasiun Mrawan dan Stasiun Kalibaru. Terowongan Mrawan dibangun pada kurun waktu 1901-1902 dan dilakukan penyempurnaan bangunan pada 1910 oleh perusahaan kereta api negara kala itu yang masih bernama Staatssporwegen (SS).",
    image: "terowongan-mrawan.jpg",
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15793.27331032628!2d113.9312365!3d-8.2710804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6a56ac18c5e3f%3A0x1ec1e411ff6fec50!2sTerowongan%20Mrawan!5e0!3m2!1sid!2sid!4v1722673846193!5m2!1sid!2sid",
  },
  {
    key: "gunung-raung",
    name: "Gunung Raung",
    address:
      "Area Hutan, Gunosari, Kec. Tlogosari, Kabupaten Bondowoso, Jawa Timur",
    price: "Gratis",
    description:
      "Gunung Raung, terletak di Jawa Timur, Indonesia, merupakan gunung berapi aktif dengan ketinggian 3.332 meter di atas permukaan laut. Terkenal karena keindahan pemandangannya, gunung ini menawarkan panorama lautan kabut, hutan tropis, dan pegunungan yang spektakuler. Pendakian ke Gunung Raung dapat dimulai dari berbagai jalur, seperti Desa Sumberwringin di Bondowoso, serta Desa Kalibaru dan Desa Jambu di Banyuwangi. Meskipun cuaca di gunung ini bisa ekstrem, banyak pendaki dan wisatawan tertarik untuk menikmati alam dan keunikan flora dan fauna di sekitarnya.",
    image: "gunung-raung.jpg",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.042631738244!2d114.04583329999998!3d-8.12583315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6b42773c84e2f%3A0x3a10116dfddf0e75!2sGn.%20Raung!5e0!3m2!1sid!2sid!4v1722673513226!5m2!1sid!2sid",
  },
  {
    key: "malangsari",
    name: "Perkebunan Malangsari",
    address: "Kebonrejo, Kec. Kalibaru, Kabupaten Banyuwangi, Jawa Timur",
    price: "Gratis",
    description:
      "Perkebunan Malangsari di Desa Kebunrejo, Kalibaru, Banyuwangi, menawarkan keindahan alam dengan lingkungan sejuk di lereng Pegunungan Buteri. Terkenal dengan produk Kopi Lanang Malangsari, perkebunan ini telah mencapai pasar internasional. Pengunjung dapat menikmati pemandangan, melihat proses pengolahan kopi, dan membeli kopi berkualitas. Selain itu, perkebunan ini mendukung kesejahteraan masyarakat setempat dengan menyediakan lapangan pekerjaan dan fasilitas umum.",
    image: "malangsari.jpg",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885763.2649635671!2d113.58885412893198!3d-8.396063003651332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6a7cb618e83df%3A0xf4723c4b96e8057d!2sMalangsari%2C%20Kebonrejo%2C%20Kec.%20Kalibaru%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1722660087733!5m2!1sid!2sid",
  },
];

export const DATA_COFFE: coffeeType[] = [
  {
    name: "Kopi Lanang Kalibaru",
    image: "kopi-lanang.jpg",
    description:
      "Kopi Lanang Malangsari oleh PT. Perkebunan Nusantara XII merupakan kopi robusta khas Kalibaru, Banyuwangi. Kopi ini berasal dari tangan petani lokal dengan sentuhan keahlian menghasilkan kesan rasa berani dan nikmat. Dengan kandungan kafein yang tinggi dengan rasa lebih lembut, tekstur padat, serta aroma yang kuat, kopi lanang yang unik ini  memiliki target pasarnya tersendiri.",
  },
  {
    name: "Kopi Wine Kalibaru",
    image: "kopi-wine.jpg",
    description:
      "Kopi wine berasal dari biji kopi yang difermentasi dengan metode kering (dry process/natural process) dalam jangka waktu cukup lama sehingga diperoleh rasa unik dan beraroma seperti wine. Robusta wine coffee merupakan produk inovatif khas Kalibaru yang menjadi daya tarik tersendiri bagi para penikmat kopi nusantara.",
  },
];

export const TIMELINE_FESTIVAL_KOPI = [
  {
    date: "1 Agustus 2024",
    activity: [
      {
        location: "Lapangan Alaska",
        events: [
          "Ceremonial Pembukaan acara festival kopi",
          "Fun bike 'Tour De Kebonrejo'",
          "Malam Hiburan dan Lomba tari",
          "Alaska 'Latte Art Competition'",
        ],
      },
      {
        location: "Balai Desa Kebonrejo",
        events: [
          "Menyambut Bupati di Taman Balaidesa",
          "Edukasi kopi dan pergelaran seni",
        ],
      },
    ],
  },
  {
    date: "3 Agustus 2024",
    activity: [
      {
        location: "Lapangan Alaska",
        events: [
          "Alaska Farmer Competition (lomba kopi terbaik)",
          "Penentuan dan pemberian hadiah lomba tari kopi",
          "Camping and Sharing Session",
        ],
      },
      {
        location: "Balai Desa Kebonrejo",
        events: ["Workshop kopi, pasar kopi dan seni"],
      },
    ],
  },
  {
    date: "4 Agustus 2024",
    activity: [
      {
        location: "Balai Desa Kebonrejo",
        events: [
          "Pasar kopi dan umkm",
          "Penentuan dan pemberian hadiah lomba tari kopi",
          "Jalan sehat dan penutupan",
        ],
      },
    ],
  },
];

export const EVENT_FESTIVAL_KOPI = [
  {
    name: "Latte Art Competition",
    description:
      "Latte Art adalah lomba membuat desain atau pola pada kopi berbahan dasar espresso dengan menuangkan susu yang dipanaskan menggunakan steamer atau frother.",
    images: "register-latte-art.jpg",
    regulations: [
      "Mengisi formulir pendaftaran secara lengkap dan benar.",
      "Peserta harus memiliki pengetahuan dasar tentang pembuatan kopi dan teknik latte art",
    ],
    price: "Rp. 50.000",
    links: "bit.ly/DaftarLatteArt2024",
  },
  {
    name: "Pasar Kopi dan UMKM",
    description:
      "Pasar Kopi dan UMKM merupakan sebuah kegiatan yang bertujuan untuk mempromosikan dan mengembangkan produk-produk lokal (UMKM) di daerah Kalibaru.",
    images: "register-pasar-kopi-umkm.jpg",
    regulations: [
      "Mengisi formulir pendaftaran secara lengkap dan benar.",
      "Produk yang dipamerkan harus merupakan hasil produksi sendiri dan tidak melanggar hak cipta atau lisensi pihak lain.",
    ],
    price: "Rp. 30.000",
    links: "bit.ly/DaftarPasarKopiUMKM2024",
  },
  {
    name: "Alaska Farmer Competition",
    description:
      "Alaska Farmer Competition merupakan sebuah kompetisi yang dirancang khusus untuk para petani kopi di wilayah Kalibaru dan sekitarnya.",
    images: "register-alaska-farmer.jpg",
    regulations: [
      "Mengisi formulir pendaftaran secara lengkap dan benar.",
      "Kopi yang dikompetisikan harus merupakan hasil produksi sendiri.",
    ],
    price: "Mengirim sampel kopi (green bean) sebanyak 1 kg.",
    links: "bit.ly/DaftarLatteArt2024",
  },
];

export const DATA_JEJAK_KOPI: coffeeTrailType[] = [
  {
    name: "Petik Merah",
    description: "Panen buah kopi merah (red cherry)",
    image: "coffee-plant.jpg",
  },
  {
    name: "Sortasi Buah",
    description: "Pemilahan buah sehat dan baik",
    image: "coffee-plant.jpg",
  },
  {
    name: "Penguapan I",
    description: "Pemisahan biji dan daging buah",
    image: "coffee-plant.jpg",
  },
  {
    name: "Fermentasi",
    description: "Penghilangan lapisan lendir dan pembentukan cita rasa",
    image: "coffee-plant.jpg",
  },
  {
    name: "Pencucian",
    description: "Pembersihan biji kopi dari kotoran dan lendir",
    image: "coffee-plant.jpg",
  },
  {
    name: "Pengeringan",
    description: "Penurunan kadar air dan biji kopi hingga 12%",
    image: "coffee-plant.jpg",
  },
  {
    name: "Penguapan II",
    description: "Pemisahan biji dan kulit tanduk",
    image: "coffee-plant.jpg",
  },
  {
    name: "Sortasi Biji",
    description: "Pemilahan biji kopi (greenbean) baik dan bernas",
    image: "coffee-plant.jpg",
  },
  {
    name: "Sangrai",
    description: "Penggorengan kering untuk membentuk rasa dan aroma kopi",
    image: "coffee-plant.jpg",
  },
  {
    name: "Sortasi",
    description: "Pemilahan biji bermutu tanpa cacat & Kotoran",
    image: "coffee-plant.jpg",
  },
  {
    name: "Penggilingan",
    description: "Penghalusan biji menjadi Serbuk",
    image: "coffee-plant.jpg",
  },
  {
    name: "Penyajian",
    description: "Beragam kenikmatan tercipta pada setiap metodenya",
    image: "coffee-plant.jpg",
  },
];
