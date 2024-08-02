"use client";

import React from "react";
import Image from "next/image";
import SectionLayout from "@/components/layouts/SectionLayout";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DATA_TOUR } from "@/constants";
import { tourType } from "@/types";
import { FiChevronRight } from "react-icons/fi";
import TitleSection from "../TitleSection";
import { useRouter } from "next/navigation";

const Tour = () => {
  const router = useRouter();
  return (
    <SectionLayout id="wisata" classname="bg-primary/5">
      {/* Title */}
      <TitleSection
        title="Wisata Kalibaru"
        subtitle="Keindahan wisata di Kecamatan Kalibaru"
      />
      {/* Content */}
      <div className="relative mt-4 px-4 lg:px-0">
        <Carousel className="relative w-full">
          <CarouselContent className="-ml-3">
            {DATA_TOUR.map((item: tourType, index: number) => (
              <CarouselItem
                key={item.name + index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card
                  onClick={() => router.push(`/wisata/${item.key}`)}
                  className="group mx-auto h-full w-full cursor-pointer rounded-xl border-2 border-primary"
                >
                  <CardHeader className="h-52 p-3 lg:h-64">
                    <div className="h-full overflow-hidden">
                      <Image
                        src={`/images/${item.image}`}
                        alt={item.image}
                        className="h-full w-full rounded-md object-cover object-center duration-200 group-hover:scale-110"
                        width={400}
                        height={200}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 px-3 pt-0">
                    <h4 className="text-center font-semibold lg:text-lg">
                      {item.name}
                    </h4>
                    <p className="line-clamp-3 text-center text-xs lg:text-base">
                      {item.description}
                    </p>
                    <div className="mx-auto w-fit rounded-full border border-primary p-1 text-primary duration-100 group-hover:bg-primary group-hover:text-white">
                      <FiChevronRight className="size-5 lg:size-8" />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-[1rem] text-primary lg:hidden" />
          <CarouselNext className="-right-[1rem] text-primary lg:hidden" />
        </Carousel>
      </div>
    </SectionLayout>
  );
};

export default Tour;
