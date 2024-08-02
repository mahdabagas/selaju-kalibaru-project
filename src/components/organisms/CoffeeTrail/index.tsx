"use client";

import SectionLayout from "@/components/layouts/SectionLayout";
import TitleSection from "@/components/organisms/TitleSection";
import { DATA_JEJAK_KOPI } from "@/constants";
import { FiChevronDown } from "react-icons/fi";
import { coffeeTrailType } from "@/types";
import Image from "next/image";
import { useState } from "react";

const CardCoffee = ({
  coffee,
  index,
}: {
  coffee: coffeeTrailType;
  index: number;
}) => {
  return (
    <div className="w-full space-y-2">
      <div className="h-64 overflow-hidden rounded-md drop-shadow-md md:w-full">
        <Image
          className="h-full w-full object-cover object-center"
          src={`/images/${coffee.image}`}
          width={640}
          height={640}
          alt=""
        />
      </div>
      <div>
        <h5 className="text-lg font-medium">
          {index + 1}. {coffee.name}
        </h5>
        <p>{coffee.description}</p>
      </div>
    </div>
  );
};
export default function CoffeeTrail() {
  const [expand, setExpand] = useState(false);

  return (
    <SectionLayout classname="bg-primary/5">
      <TitleSection title="Jejak Kopi" subtitle="from beans to bewings" />
      <div className="mx-auto lg:max-w-[80rem]">
        <div className="mt-4 gap-x-8 gap-y-4 space-y-4 md:grid md:grid-cols-2 md:space-y-0 lg:grid-cols-3">
          {DATA_JEJAK_KOPI.slice(0, 6).map(
            (item: coffeeTrailType, index: number) => (
              <CardCoffee key={index} coffee={item} index={index} />
            ),
          )}
        </div>
        <div
          className={`${expand ? "md:grid" : "hidden"} mt-4 gap-x-6 gap-y-4 space-y-4 md:grid-cols-2 md:space-y-0 lg:grid-cols-3`}
        >
          {DATA_JEJAK_KOPI.slice(6, 12).map(
            (item: coffeeTrailType, index: number) => (
              <CardCoffee key={index + 6} coffee={item} index={index + 6} />
            ),
          )}
        </div>
        {!expand && (
          <div
            onClick={() => setExpand(!expand)}
            className="mx-auto mt-4 flex w-fit cursor-pointer items-center justify-center gap-2 rounded-md p-2 font-medium text-primary transition duration-200 hover:bg-primary/10"
          >
            Selengkapnya <FiChevronDown />
          </div>
        )}
      </div>
    </SectionLayout>
  );
}
