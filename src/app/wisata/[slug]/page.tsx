import SectionLayout from "@/components/layouts/SectionLayout";
import { Separator } from "@/components/ui/separator";
import { DATA_TOUR } from "@/constants";
import { tourType } from "@/types";
import Image from "next/image";

export default function Wisata({ params }: { params: { slug: string } }) {
  const tour: tourType | undefined = DATA_TOUR.find(
    (item) => item.key === params.slug,
  );

  if (!tour) {
    return (
      <SectionLayout classname="h-[calc(100vh-16rem)]">
        <h1 className="text-center text-3xl font-medium text-primary">
          Wisata Tidak Ditemukan
        </h1>
      </SectionLayout>
    );
  }
  return (
    <section>
      {/* Image Tour */}
      <div className="h-[16rem] w-full md:h-[20rem] lg:h-[30rem]">
        <Image
          width={1200}
          height={1000}
          className="h-full w-full object-cover object-center"
          src={`/images/${tour.image}`}
          alt={`/images/${tour.image}`}
        />
      </div>
      {/* Deskripsion */}
      <SectionLayout classname="space-y-6">
        <h2 className="text-2xl font-medium text-primary md:text-3xl">
          {tour.name}
        </h2>
        <div
          className="grid items-start gap-y-1 md:gap-y-2 md:text-xl lg:text-lg"
          style={{ gridTemplateColumns: "8rem 1fr" }}
        >
          <h5>Alamat</h5>
          <p>: {tour.address}</p>
          <h5>Harga Tiket</h5>
          <p>: {tour.price}</p>
        </div>
        <Separator className="h-[2px] bg-primary" />
        <div className="flex flex-col gap-8 lg:flex-row">
          <p className="text-justify md:text-lg lg:w-1/2">{tour.description}</p>
          <div className="h-[16rem] overflow-hidden rounded-md drop-shadow-md md:h-[20rem] lg:h-[25rem] lg:w-1/2">
            <iframe
              title="Maps"
              src={tour.maps}
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}
