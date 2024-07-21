import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import WordRotate from "@/components/magicui/word-rotate";
import SparklesText from "@/components/magicui/sparkles-text";
import { MdOutlineTravelExplore } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative">
      {/* title */}
      <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 md:left-14 lg:left-24">
        <div className="space-y-2 font-medium text-white md:space-y-4">
          <h1 className="text-2xl md:text-3xl">Selamat Datang!</h1>
          <SparklesText
            text="Festival Kalibaru"
            className="text-5xl md:text-7xl"
            colors={{ first: "#00ABC1", second: "#00BE76" }}
          />
          <div className="h-14">
            <WordRotate
              className="h-45 text-2xl md:text-4xl"
              words={[
                "Kecamatan Kalibaru",
                "Kabupaten Bayuwangi",
                "Provinsi Jawa Timur",
              ]}
              duration={3000}
            />
          </div>
          <Button className="space-x-2 rounded-full px-6 md:text-xl">
            <MdOutlineTravelExplore /> <span>Jelajahi</span>
          </Button>
        </div>
      </div>
      {/* background image */}
      <div className="relative -z-10 h-screen w-full brightness-90">
        <Image
          src="/images/hero-image.jpg"
          alt="hero-image"
          width={800}
          height={600}
          className="h-full w-full object-cover object-left lg:object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
