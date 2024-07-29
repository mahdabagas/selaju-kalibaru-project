import SectionLayout from "@/components/layouts/SectionLayout";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Wisata() {
  return (
    <section>
      {/* Image Tour */}
      <div className="h-[16rem] w-full md:h-[20rem] lg:h-[25rem]">
        <Image
          width={1200}
          height={1000}
          className="h-full w-full object-cover object-bottom"
          src="/images/coffee-plant.jpg"
          alt="/images/coffee-plant.jpg"
        />
      </div>
      {/* Deskripsion */}
      <SectionLayout classname="space-y-6">
        <h2 className="text-2xl font-medium text-primary md:text-3xl">
          Telaga Malang Sari
        </h2>
        <div
          className="grid items-start gap-y-1 text-lg md:gap-y-2 md:text-xl"
          style={{ gridTemplateColumns: "8rem 1fr" }}
        >
          <h5>Alamat</h5>
          <p>: Jl. Sidoluhur RT 03/ RW 02, Desa Dilem, Kecamatan Kepanjen</p>
          <h5>Contact Us</h5>
          <p>: 08123456789</p>
          <h5>Harga Tiket</h5>
          <p>: Rp. 20.000</p>
        </div>
        <Separator className="h-[2px] bg-primary" />
        <div className="flex flex-col gap-8 lg:flex-row">
          <p className="text-justify md:text-lg lg:w-1/2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sint
            sit accusantium earum provident eligendi accusamus unde architecto.
            Aliquam architecto laudantium veniam ducimus vero? Officiis nam
            perspiciatis sequi nulla incidunt. Officia laborum ea vero ab rem,
            veritatis voluptatem modi exercitationem!
          </p>
          <div className="h-[16rem] overflow-hidden rounded-md drop-shadow-md md:h-[20rem] lg:h-[25rem] lg:w-1/2">
            <iframe
              title="Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15820.060020519395!2d111.2603008!3d-7.5733422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79f378243ffcbb%3A0x5df23940c4cba7e7!2sBumi%20perkemahan%20Gendingan!5e0!3m2!1sid!2sid!4v1690531899570!5m2!1sid!2sid"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}
