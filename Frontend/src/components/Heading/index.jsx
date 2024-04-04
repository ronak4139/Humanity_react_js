import React from "react";

const sizes = {
  "3xl": "text-4xl font-semibold leading-[120%]",
  "2xl": "text-[35px] font-extrabold leading-[120%]",
  xl: "text-[25px] font-extrabold leading-[120%]",
  "5xl": "text-[50px] font-extrabold leading-[108.3%]",
  "4xl": "text-[40px] font-extrabold leading-[120%]",
  "7xl": "text-[64px] font-semibold leading-[130%]",
  s: "text-[15px] font-semibold leading-[145%]",
  md: "text-base font-semibold leading-[145%]",
  "6xl": "text-6xl font-extrabold leading-[120%]",
  "8xl": "text-[73px] font-extrabold leading-[120%]",
  xs: "text-sm font-semibold leading-[145%]",
  lg: "text-xl font-extrabold",
};

const Heading = ({ children, className = "", size = "xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-800 font-shipporimincho ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
