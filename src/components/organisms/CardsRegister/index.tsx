import TitleSection from "@/components/organisms/TitleSection";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { EVENT_FESTIVAL_KOPI } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionLayout from "@/components/layouts/SectionLayout";
import Link from "next/link";

export default function CardsRegister() {
  return (
    <SectionLayout classname="bg-primary/5">
      <TitleSection title="Pendaftaran" subtitle="Mari daftarkan dirimu" />
      <div className="mt-4 grid-cols-3 gap-4 space-y-4 lg:mt-8 lg:grid lg:space-y-0">
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
                <Link
                  href={`https://${event.links}`}
                  className="w-full"
                  target="_blank"
                >
                  <Button className="w-full rounded-full">Daftar</Button>
                </Link>
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
  );
}
