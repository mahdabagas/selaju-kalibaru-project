import Title from "@/components/atoms/Title";
import SectionLayout from "@/components/layouts/SectionLayout";

export default function HeroCoffee() {
  return (
    <SectionLayout classname="bg-primary/10 space-y-6">
      <Title classname="text-center text-primary">Tentang Kopi Kalibaru</Title>
      <p className="text-center italic leading-8 text-slate-500 lg:text-xl">
        &quot;Bumi Kalibaru menghasilkan Beragam Kopi seperti arabika, robusta,
        dan liberika. Robusta menjadi kopi yang paling banyak dibudidayakan oleh
        petani setempat&quot;
      </p>
    </SectionLayout>
  );
}
