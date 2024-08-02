import SectionLayout from "@/components/layouts/SectionLayout";
import { DATA_COFFE } from "@/constants";
import { coffeeType } from "@/types";
import Image from "next/image";

export default function CoffeeKalibaru() {
  return (
    <SectionLayout classname="flex-col flex items-center gap-10 lg:gap-20  mx-auto">
      {DATA_COFFE.map((item: coffeeType, index) => {
        const isEven = (index + 1) % 2 === 0;
        return (
          <div
            key={index}
            className={`${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} flex flex-col gap-4 lg:max-w-[80rem] lg:gap-20`}
          >
            <div className="size-64 self-center overflow-hidden rounded-lg border-primary drop-shadow-lg lg:size-80">
              <Image
                src={item.image}
                className="h-full w-full rounded-lg bg-center object-cover"
                width={640}
                height={640}
                alt="coffe.png"
              />
            </div>
            <div
              className={`${isEven ? "lg:border-l-2 lg:pl-6" : "lg:border-r-2 lg:pr-6"} grow space-y-2 border-primary lg:w-2/3`}
            >
              <h4 className="text-center text-2xl font-medium text-primary lg:text-start">
                {item.name}
              </h4>
              <p className="text-justify text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </SectionLayout>
  );
}
