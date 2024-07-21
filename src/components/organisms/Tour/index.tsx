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

const Tour = () => {
  return (
    <SectionLayout classname="bg-primary/10">
      {/* Title */}
      <Title classname="text-center text-primary">Wisata</Title>
      {/* Content */}
      <div className="relative mt-6 px-10 lg:px-20">
        <Carousel className="relative w-full">
          <CarouselContent className="drop-shadow-sm">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="mx-auto h-80 w-full rounded-xl lg:h-96">
                <CardHeader className="h-2/3 p-3 lg:h-3/4">
                  <Image
                    src="/images/desa-kalibaru.png"
                    alt="desa-laibaru.png"
                    className="h-full w-full rounded-md object-cover object-center"
                    width={400}
                    height={200}
                  />
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <CardTitle className="text-lg text-primary">
                    Terowongan
                  </CardTitle>
                  <p className="line-clamp-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Natus dicta
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="mx-auto h-80 w-full rounded-xl lg:h-96">
                <CardHeader className="h-2/3 p-3 lg:h-3/4">
                  <Image
                    src="/images/desa-kalibaru.png"
                    alt="desa-laibaru.png"
                    className="h-full w-full rounded-md object-cover object-center"
                    width={400}
                    height={200}
                  />
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <CardTitle className="text-lg text-primary">
                    Terowongan
                  </CardTitle>
                  <p className="line-clamp-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Natus dicta
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="mx-auto h-80 w-full rounded-xl lg:h-96">
                <CardHeader className="h-2/3 p-3 lg:h-3/4">
                  <Image
                    src="/images/desa-kalibaru.png"
                    alt="desa-laibaru.png"
                    className="h-full w-full rounded-md object-cover object-center"
                    width={400}
                    height={200}
                  />
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <CardTitle className="text-lg text-primary">
                    Terowongan
                  </CardTitle>
                  <p className="line-clamp-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Natus dicta
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="-left-10 text-primary lg:hidden" />
          <CarouselNext className="-right-10 text-primary lg:hidden" />
        </Carousel>
      </div>
    </SectionLayout>
  );
};

export default Tour;
