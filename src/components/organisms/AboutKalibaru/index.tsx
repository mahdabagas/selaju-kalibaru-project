import Title from "@/components/atoms/Title";
import SectionLayout from "@/components/layouts/SectionLayout";
import Image from "next/image";
import React from "react";

const AboutKalibiru = () => {
  return (
    <SectionLayout>
      {/* Title */}
      <Title classname="text-center text-primary">Tentang Kalibaru</Title>
      {/* Content */}
      <div className="mt-6 flex-row-reverse items-start justify-between gap-16 md:flex lg:mt-8">
        <div className="mx-auto p-2 md:w-1/2">
          <Image
            src="/images/coffee-plant.jpg"
            alt="desa-kalibaru"
            width={600}
            height={400}
            className="h-full w-full rounded-lg object-cover object-center drop-shadow-lg"
          />
        </div>
        <div className="mt-4 md:w-1/2">
          <p className="text-justify lg:text-2xl">
            Kalibaru menjadi salah satu penghasil kopi terbesar di Kabupaten
            Bayuwangi dengan luas lahan kopi mencapai 3.2827 hektar yang
            tersebar di area Gunung Gumitir dan Gunung Raung dengan total
            produksi lebih dari 4.4 ribu ton tiap tahunnya
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutKalibiru;
