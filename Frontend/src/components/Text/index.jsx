import React from "react";

const sizes = {
  xs: "text-sm font-medium leading-[145%]",
  lg: "text-3xl font-normal leading-[130%]",
  s: "text-lg font-medium",
  "2xl": "text-[40px] font-normal leading-[130%]",
  "3xl": "text-[50px] font-normal leading-[108.3%]",
  xl: "text-[35px] font-normal leading-[108.3%]",
  md: "text-xl font-normal leading-[130%]",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-800 font-worksans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
