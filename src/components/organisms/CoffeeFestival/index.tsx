import React from "react";
import SectionLayout from "@/components/layouts/SectionLayout";
import TitleSection from "@/components/organisms/TitleSection";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { BsCalendar3 } from "react-icons/bs";
import { RiMapPinLine } from "react-icons/ri";
import { FiChevronRight, FiTrello } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const CoffeeFestival = () => {
  return (
    <SectionLayout>
      {/* Title */}
      <TitleSection
        title="Festival"
        subtitle="Festival yang akan diadakan di Kecamatan Kalibaru"
      />
      {/* Content */}
      <div className="relative mx-auto mt-4 overflow-hidden rounded-2xl drop-shadow-lg">
        {/* Card */}
        <div className="relative z-10">
          <div className="flex flex-col justify-center gap-4 rounded-xl px-3 py-4 lg:flex-row lg:gap-6 lg:px-6 lg:py-8">
            <div className="mx-auto my-auto">
              <Image
                src="/images/logo.png"
                alt="/images/logo.png"
                width={400}
                height={400}
                className="size-44 rounded-full bg-white object-contain object-center p-6 drop-shadow-md md:size-64"
              />
            </div>
            <div className="space-y-2 p-2 text-white lg:w-4/6 lg:pr-6">
              <h2 className="text-3xl font-medium lg:text-5xl">
                Kalibaru Kopi Fiesta
              </h2>
              <h3 className="lg:text-lg">
                Sarana efektif untuk meningkatkan wawasan tentang kopi dari
                pihak-pihak yang kompeten
              </h3>
              <Separator />
              <div className="flex items-center space-x-3">
                <BsCalendar3 className="size-5" />
                <p className="lg:text-lg">1-4 Agustus 2024</p>
              </div>
              <div className="flex items-center space-x-3">
                <RiMapPinLine className="mt-1 size-5" />
                <h3 className="self-start lg:text-lg">
                  Lapangan Alaska <br /> Balai Desa Kebonrejo
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiTrello className="mt-1 size-5" />
                  <h3 className="self-start lg:text-lg">Kegiatan :</h3>
                </div>
                <div className="ml-8 flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-white">
                    Latte Art Competition
                  </Badge>
                  <Badge variant="outline" className="text-white">
                    Pasar Kopi dan UMKM
                  </Badge>
                  <Badge variant="outline" className="text-white">
                    Alaska Farmer Competition
                  </Badge>
                  <Badge variant="outline" className="text-white">
                    Camping dan Sharing Session
                  </Badge>
                  <Badge variant="outline" className="text-white">
                    dan kegiatan lainnya
                  </Badge>
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <Button className="w-full rounded-full lg:w-1/2 lg:text-lg">
                  Selengkapnya <FiChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-image.jpg"
            alt="/images/hero-image.jpg"
            width={600}
            height={600}
            className="h-full w-full object-cover object-bottom brightness-50"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default CoffeeFestival;
