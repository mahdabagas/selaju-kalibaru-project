import Hero from "@/components/organisms/Hero";
import Tour from "@/components/organisms/Tour";
import FestivalKopi from "./festival-kopi/page";
import AboutKalibiru from "@/components/organisms/AboutKalibaru";
import AboutCoffee from "@/components/organisms/AboutCoffe";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutKalibiru />
      <Tour />
      <FestivalKopi />
      <AboutCoffee />
    </main>
  );
}
