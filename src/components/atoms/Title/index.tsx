import React, { FC, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  classname?: string;
}

const Title: FC<TitleProps> = ({ children, classname }) => {
  return (
    <h1 className={`text-3xl font-medium lg:text-5xl ${classname}`}>
      {children}
    </h1>
  );
};

export default Title;
