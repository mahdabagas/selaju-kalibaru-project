import React, { FC, ReactNode } from "react";

interface SectionLayoutProps {
  children?: ReactNode;
  classname?: string;
}

const SectionLayout: FC<SectionLayoutProps> = ({ children, classname }) => {
  return (
    <section className={`w-full px-6 py-12 md:px-12 lg:px-20 ${classname}`}>
      {children}
    </section>
  );
};

export default SectionLayout;
