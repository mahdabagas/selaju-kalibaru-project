"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WordRotate from "@/components/magicui/word-rotate";
import SparklesText from "@/components/magicui/sparkles-text";
import { MdOutlineTravelExplore } from "react-icons/md";
import SectionLayout from "@/components/layouts/SectionLayout";
import useScreenSize from "@/hooks/UseScreenSize";

const Hero = () => {
  const screenSize = useScreenSize();

  const clickExplore = () => {
    if (screenSize.width > 0 && screenSize.width < 640) {
      window.scrollTo(0, 600);
    } else if (screenSize.width > 640 && screenSize.width < 840) {
      window.scrollTo(0, 800);
    } else {
      window.scrollTo(0, 600);
    }
  };
  return (
    <section className="relative">
      {/* title */}
      <SectionLayout classname="relative h-[calc(100vh-4rem)] flex items-center">
        <div className="space-y-2 font-medium md:space-y-4">
          <h1 className="text-2xl text-white drop-shadow-lg md:text-4xl">
            Selamat Datang! 👋
          </h1>
          <SparklesText
            text="Selaju Kalibaru"
            className="text-start text-5xl text-border text-white drop-shadow-[0px_1px_4px_rgba(0,160,90,1)] md:text-7xl lg:text-8xl"
            colors={{ first: "#00BE76", second: "#00BE76" }}
            sparklesCount={15}
          />
          <div className="h-14 text-white">
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
          <Button
            className="space-x-2 rounded-full px-6 md:text-xl lg:px-10 lg:py-6 lg:text-2xl"
            onClick={clickExplore}
          >
            <span>Jelajahi</span> <MdOutlineTravelExplore />
          </Button>
        </div>
      </SectionLayout>
      {/* background image */}
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-[calc(100vh-4rem)] w-full">
        <Image
          src="/images/hero-image.jpg"
          alt="hero-image"
          width={3008}
          height={1668}
          className="h-full w-full object-cover object-bottom brightness-75"
        />
      </div>
    </section>
  );
};

export default Hero;
