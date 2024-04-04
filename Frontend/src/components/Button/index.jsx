import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[32px]",
};
const variants = {
  fill: {
    amber_700: "bg-amber-700 text-white-A700",
    light_blue_A700: "bg-light_blue-A700 text-white-A700",
    white_A700: "bg-white-A700 text-blue_gray-800",
    indigo_A700: "bg-indigo-A700 text-white-A700",
    green_900: "bg-green-900 text-white-A700",
    gray_100_04: "bg-gray-100_04 text-gray-600",
    teal_200: "bg-teal-200",
    gray_200_01: "bg-gray-200_01 text-blue_gray-800",
    blue_gray_800: "bg-blue_gray-800 text-white-A700",
  },
};
const sizes = {
  "3xl": "h-[67px] px-[35px] text-4xl",
  sm: "h-10 px-[35px] text-base",
  xl: "h-14 px-[15px] text-xl",
  md: "h-[51px] px-[25px] text-[15px]",
  xs: "h-[27px] px-2",
  lg: "h-[55px] px-[35px] text-base",
  "2xl": "h-[65px] px-[35px] text-lg",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "2xl",
  color = "blue_gray_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["3xl", "sm", "xl", "md", "xs", "lg", "2xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "amber_700",
    "light_blue_A700",
    "white_A700",
    "indigo_A700",
    "green_900",
    "gray_100_04",
    "teal_200",
    "gray_200_01",
    "blue_gray_800",
  ]),
};

export { Button };
