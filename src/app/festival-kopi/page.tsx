import SectionLayout from "@/components/layouts/SectionLayout";
import TimelineFestival from "@/components/organisms/TimelineFestival";
import TitleSection from "@/components/organisms/TitleSection";
import Image from "next/image";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { EVENT_FESTIVAL_KOPI } from "@/constants";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FestivalKopi() {
  return (
    <main>
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
      <TimelineFestival />
      <SectionLayout>
        <TitleSection title="Pendaftaran" subtitle="Mari daftarkan dirimu" />
        <div className="mt-8 grid-cols-3 gap-4 space-y-4 lg:grid lg:space-y-0">
          {EVENT_FESTIVAL_KOPI.map((event, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl">
              <Card className="relative h-full max-h-[45rem] w-full bg-black/70 text-white">
                <CardHeader className="mb-2 space-y-2 pb-2 lg:min-h-[25%]">
                  <CardTitle className="font-semibold">{event.name}</CardTitle>
                  <Separator />
                  <CardDescription className="text-white">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mb-20 space-y-4 lg:min-h-[40%]">
                  <div className="min-h-[80%] space-y-2">
                    <p className="font-medium">Persayaratan : </p>
                    <ul className="space-y-1">
                      {event.regulations.map((regulation, index) => (
                        <li key={index}>
                          {index + 1}. {regulation}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 min-h-[20%] font-medium">
                    Biaya : <br />{" "}
                    <span className="font-light">{event.price}</span>
                  </p>
                </CardContent>
                <CardFooter className="absolute inset-x-0 bottom-0">
                  <Button className="w-full rounded-full">
                    <Link href={event.links} target="_blank">
                      Daftar
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              {/* Image Background */}
              <Image
                src="/images/coffee.jpg"
                alt="/images/coffee.jpg"
                width={400}
                height={400}
                className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </SectionLayout>
    </main>
  );
}
