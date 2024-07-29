import { tourType } from "@/types";

export const DATA_TOUR: tourType[] = [
  {
    name: "Terowongan",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dicta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eligendi sint maxime.",
    image: "/images/terowongan.jpg",
    maps: "",
  },
  {
    name: "Gunung Gumitir",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dicta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eligendi sint maxime.",
    image: "/images/gunung-gumitir.png",
    maps: "",
  },
  {
    name: "Malangsari",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dicta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eligendi sint maxime.",
    image: "/images/malangsari.jpg",
    maps: "",
  },
];

export const DATA_COFFE = [
  { name: "Kopi Lanang Kalibaru", image: "/images/coffee-plant.jpg" },
  { name: "Kopi Wine Kalibaru", image: "/images/coffee-plant.jpg" },
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
