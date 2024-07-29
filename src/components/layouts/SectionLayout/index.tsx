import React, { FC, ReactNode } from "react";

interface SectionLayoutProps {
  children?: ReactNode;
  classname?: string;
}

const SectionLayout: FC<SectionLayoutProps> = ({ children, classname }) => {
  return (
    <section
      className={`w-full px-6 pb-6 pt-8 md:px-12 lg:px-20 lg:pb-10 lg:pt-14 ${classname}`}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
