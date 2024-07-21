import React, { FC, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  classname?: string;
}

const Title: FC<TitleProps> = ({ children, classname }) => {
  return (
    <h1 className={`text-2xl font-medium md:text-3xl lg:text-4xl ${classname}`}>
      {children}
    </h1>
  );
};

export default Title;
