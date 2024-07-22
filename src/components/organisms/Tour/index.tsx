import React from "react";
import Image from "next/image";
import Title from "@/components/atoms/Title";
import SectionLayout from "@/components/layouts/SectionLayout";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DATA_TOUR } from "@/constants";
import { tourType } from "@/types";
import { FiChevronRight } from "react-icons/fi";

const Tour = () => {
  return (
    <SectionLayout>
      {/* Title */}
      <Title classname="text-center text-primary">Wisata Kalibaru</Title>
      <p className="text-center md:text-base">
        Keindahan wisata di Kecamatan Kalibaru
      </p>
      {/* Content */}
      <div className="relative mt-4 px-4 lg:px-0">
        <Carousel className="relative w-full">
          <CarouselContent className="-ml-3">
            {DATA_TOUR.map((item: tourType, index: number) => (
              <CarouselItem
                key={item.name + index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="mx-auto h-full w-full cursor-pointer rounded-xl border-2 border-primary duration-200">
                  <CardHeader className="h-52 p-3 lg:h-64">
                    <Image
                      src={item.image}
                      alt={item.image}
                      className="h-full w-full rounded-md object-cover object-center"
                      width={400}
                      height={200}
                    />
                  </CardHeader>
                  <CardContent className="space-y-2 px-3 pt-0">
                    <h4 className="text-center font-semibold lg:text-lg">
                      {item.name}
                    </h4>
                    <p className="line-clamp-3 text-center text-xs lg:text-base">
                      {item.description}
                    </p>
                    <p className="flex items-center justify-center text-center text-xs text-primary">
                      Selengkapnya
                      <FiChevronRight />
                    </p>
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
