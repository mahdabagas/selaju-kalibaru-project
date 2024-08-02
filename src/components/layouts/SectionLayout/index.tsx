import React, { FC, ReactNode } from "react";

interface SectionLayoutProps {
  children?: ReactNode;
  classname?: string;
  id?: string;
}

const SectionLayout: FC<SectionLayoutProps> = ({ children, classname, id }) => {
  return (
    <section
      id={id}
      className={`w-full px-6 py-8 md:px-12 lg:px-20 lg:py-14 ${classname}`}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
