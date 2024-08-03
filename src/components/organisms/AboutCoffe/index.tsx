"use client";

import SectionLayout from "@/components/layouts/SectionLayout";
import React from "react";
import TitleSection from "../TitleSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DATA_COFFE } from "@/constants";
import { useRouter } from "next/navigation";

const AboutCoffee = () => {
  const router = useRouter();
  return (
    <SectionLayout>
      {/* Title */}
      <TitleSection title="Kopi Kalibaru" subtitle="Cita rasa kopi kalibaru" />
      {/* Content */}
      <div className="mx-auto mt-4 flex flex-col items-center justify-center gap-6 lg:mt-20 lg:flex-row">
        <div className="h-full lg:w-1/2">
          <div className="flex h-full flex-row items-center gap-4 lg:flex-row">
            {DATA_COFFE.map((item: any, index: number) => (
              <div
                key={index}
                className={`relative mt-6 h-44 w-full overflow-hidden rounded-lg bg-white drop-shadow-lg md:mt-10 lg:mt-0 lg:h-64 ${
                  index === 0
                    ? "-top-6 left-2 -rotate-[8deg] lg:left-0"
                    : "right-2 top-0 rotate-[8deg] lg:right-0"
                }`}
              >
                <Image
                  src={`/images/${item.image}`}
                  alt={item.image}
                  className="h-full w-full rounded-md object-cover object-center"
                  width={600}
                  height={600}
                />
                <p className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-white py-2 text-center text-xs font-medium text-primary md:text-base">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-5 rounded-lg lg:w-1/2">
          <p className="text-center italic leading-8 text-slate-500 lg:w-5/6 lg:text-xl">
            &quot;Bumi Kalibaru menghasilkan Beragam Kopi seperti arabika,
            robusta, dan liberika. Robusta menjadi kopi yang paling banyak
            dibudidayakan oleh petani setempat&quot;
          </p>
          <Button
            className="rounded-full"
            onClick={() => router.push("/tentang-kopi")}
          >
            Telusuri Tentang Kopi
          </Button>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutCoffee;
