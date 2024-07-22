import Hero from "@/components/organisms/Hero";
import Tour from "@/components/organisms/Tour";
import CoffeeFestival from "@/components/organisms/CoffeeFestival";
import AboutKalibiru from "@/components/organisms/AboutKalibaru";
import AboutCoffee from "@/components/organisms/AboutCoffe";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutKalibiru />
      <Tour />
      <AboutCoffee />
      <CoffeeFestival />
    </main>
  );
}
