import SectionLayout from "@/components/layouts/SectionLayout";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function HeroFestival() {
  return (
    <>
      <SectionLayout classname="lg:py-20 bg-secondary/10">
        <div className="flex-row-reverse items-center justify-center gap-12 space-y-6 md:flex md:space-y-0">
          <div className="grow basis-1/2 space-y-2 lg:basis-1/3 lg:space-y-4">
            <h3 className="text-center text-[1.9rem] font-semibold leading-[3rem] tracking-wide text-primary md:text-start md:text-4xl lg:text-5xl">
              Kalibaru Kopi Fiesta
            </h3>
            <h4 className="text-center text-2xl font-medium md:text-start lg:text-3xl">
              Kopi dan Literasi
            </h4>
            <p className="text-center font-light md:text-start lg:text-xl">
              Sarana efektif untuk meningkatkan wawasan tentang kopi dari
              pihak-pihak yang kompeten.
            </p>
          </div>
          <div className="my-auto h-[16rem] grow basis-1/2 self-stretch lg:h-[28rem] lg:basis-1/2">
            <iframe
              className="h-full w-full rounded-2xl drop-shadow-2xl"
              src="https://www.youtube.com/embed/Fsxf_KsaUX8"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </SectionLayout>
      <div className="bg-gradient-to-r from-primary via-secondary to-primary py-4">
        <VelocityScroll
          text="Total Hadiah Sebesar 8 Juta Rupiah |"
          className="text-center text-xl font-medium tracking-wide text-white drop-shadow-lg lg:text-3xl"
          default_velocity={1}
        />
      </div>
    </>
  );
}
