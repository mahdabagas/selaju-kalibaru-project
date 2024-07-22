import Title from "@/components/atoms/Title";
import SectionLayout from "@/components/layouts/SectionLayout";
import Image from "next/image";
import React from "react";

const AboutKalibiru = () => {
  return (
    <SectionLayout>
      {/* Content */}
      <div className="mt-6 flex-row-reverse items-start justify-between gap-16 md:flex lg:mt-8">
        <Title classname="text-primary text-center md:text-start md:hidden">
          Tentang Kalibaru
        </Title>
        <div className="mx-auto mt-4 self-center drop-shadow-lg md:mt-0 md:w-1/2">
          <Image
            src="/images/hero-image-2.jpg"
            alt="desa-kalibaru"
            width={600}
            height={400}
            className="h-full w-full rounded-2xl object-cover object-center"
          />
        </div>
        <div className="mt-4 space-y-4 md:w-1/2">
          <Title classname="text-primary text-center md:text-start hidden md:block">
            Tentang Kalibaru
          </Title>
          <p className="text-center md:text-justify md:text-xs lg:text-lg">
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
