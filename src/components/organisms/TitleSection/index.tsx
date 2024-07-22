import Title from "@/components/atoms/Title";
import React, { FC } from "react";

interface TitleSectionProps {
  title: string;
  subtitle: string;
}

const TitleSection: FC<TitleSectionProps> = ({ title, subtitle }) => {
  return (
    <>
      <Title classname="text-center text-primary">{title}</Title>
      <p className="mt-1 text-center md:text-base">{subtitle}</p>
    </>
  );
};

export default TitleSection;
