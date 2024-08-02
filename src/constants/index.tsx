import { coffeeTrailType, coffeeType, tourType } from "@/types";

export const DATA_TOUR: tourType[] = [
  {
    key: "terowongan",
    name: "Terowongan",
    address: "Jl. Sidoluhur RT 03/ RW 02, Desa Dilem, Kecamatan Kepanjen",
    price: "Rp. 20.000",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dicta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eligendi sint maxime.",
    image: "terowongan.jpg",
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15820.060020519395!2d111.2603008!3d-7.5733422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79f378243ffcbb%3A0x5df23940c4cba7e7!2sBumi%20perkemahan%20Gendingan!5e0!3m2!1sid!2sid!4v1690531899570!5m2!1sid!2sid",
  },
  {
    key: "gunung-gumitir",
    name: "Gunung Gumitir",
    address: "Jl. Sidoluhur RT 03/ RW 02, Desa Dilem, Kecamatan Kepanjen",
    price: "Rp. 20.000",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dicta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eligendi sint maxime.",
    image: "gunung-gumitir.png",
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15820.060020519395!2d111.2603008!3d-7.5733422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79f378243ffcbb%3A0x5df23940c4cba7e7!2sBumi%20perkemahan%20Gendingan!5e0!3m2!1sid!2sid!4v1690531899570!5m2!1sid!2sid",
  },
  {
    key: "malangsari",
    name: "Malangsari",
    address: "Jl. Sidoluhur RT 03/ RW 02, Desa Dilem, Kecamatan Kepanjen",
    price: "Rp. 20.000",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dicta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eligendi sint maxime.",
    image: "malangsari.jpg",
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15820.060020519395!2d111.2603008!3d-7.5733422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79f378243ffcbb%3A0x5df23940c4cba7e7!2sBumi%20perkemahan%20Gendingan!5e0!3m2!1sid!2sid!4v1690531899570!5m2!1sid!2sid",
  },
];

export const DATA_COFFE: coffeeType[] = [
  {
    name: "Kopi Lanang Kalibaru",
    image: "/images/coffee-plant.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dicta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eligendi sint maxime.",
  },
  {
    name: "Kopi Wine Kalibaru",
    image: "/images/coffee-plant.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dicta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eligendi sint maxime.",
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
    images: "/images/coffee.jpg",
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
    images: "/images/coffee.jpg",
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
    images: "/images/coffee.jpg",
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
