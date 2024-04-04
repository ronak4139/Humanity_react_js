import React from "react";
import { Text, Heading, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-col items-center justify-center w-[85%] mt-[102px] mr-8 gap-[60px]">
        <div className="flex flex-row justify-start items-start w-full gap-[34px]">
          <div className="flex flex-col items-start justify-start w-[28%] gap-[30px]">
            <div className="flex flex-col items-start justify-start w-full pt-1 gap-[17px]">
              <div className="flex flex-row justify-start items-start w-[57%] gap-1.5">
                <div className="h-11 w-[11%] relative">
                  <Img
                    src="images/img_vector_1.svg"
                    alt="vector_three"
                    className="justify-center h-11 left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[1px]"
                  />
                  <div className="h-[9px] w-[9px] left-[24%] top-[9%] m-auto bg-white-A700 absolute rounded" />
                </div>
                <Heading size="2xl" as="h2" className="mt-0.5 !text-white-A700">
                  Humanity
                </Heading>
              </div>
              <Text as="p" className="!text-white-A700">
                Care about people to transforming their lives
                <br />
                and exudes a positives Impressiono believe.
                <br />
              </Text>
            </div>
            {/* <Img src="images/defaultNoData.png" alt="follow_three" className="h-[60px]" /> */}
          </div>
          <div className="flex flex-col items-start justify-start w-[71%] gap-[9px] p-7 bg-blue_gray-800_02">
            <Heading as="h4" className="ml-[61px] !text-white-A700 !font-bold">
              Get Involved
            </Heading>
            <div className="flex flex-row justify-center items-center w-[91%] mb-[46px] ml-[61px]">
              <ul className="flex flex-col items-start justify-start w-[23%]">
                <li>
                  <a href="/Aboutus">
                    <Text as="p" className="!text-white-A700">
                      About Us
                      <br />
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="/Volunteer" className="mt-2.5">
                    <Text as="p" className="!text-white-A700">
                      Volunteer
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="/Causes" className="mt-[7px]">
                    <Text as="p" className="!text-red-300">
                      Causes
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="/BlogSingle" className="mt-[11px]">
                    <Text as="p" className="!text-white-A700">
                      Blog
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="/Team" className="mt-2">
                    <Text as="p" className="!text-white-A700">
                      Team
                    </Text>
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col items-start justify-start w-[26%] ml-[113px] gap-[15px]">
                <li>
                  <a href="/SigninPage">
                    <Text as="p" className="!text-white-A700">
                      Login
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="/" className="ml-px">
                    <Text as="p" className="!text-white-A700">
                      Registration
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="/AdminLogin" className="ml-px">
                    <Text as="p" className="!text-white-A700">
                      Admin Login
                    </Text>
                  </a>
                </li>
              </ul>
              <div className="flex flex-col items-start justify-start w-[48%] ml-[82px] gap-[22px]">
                <div className="flex flex-row justify-start">
                  <a href="#">
                    <Heading as="h4" className="!text-white-A700 !font-bold">
                      Contact Us
                    </Heading>
                  </a>
                </div>
                <Text as="p" className="!text-white-A700 !leading-[186%]">
                  Rk University, kashturbadham , Rajkot - 360002
                  <br />
                  help humanity@charity.com
                  <br />
                  222 888 0000
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[120%] mb-[-40px] border-t border-white border-solid border-2"></div>
        <div className="flex flex-row justify-starth-[90%] w-[47%] ml-[100px] mb-[20px]">
          <a href="#">
            <Text size="s" as="p" className="!text-white-A700 !font-inter !font-normal">
              Copyright © 2024 Ronak Sarvaiya | Rohit Bhadaliya - All rights reserved
            </Text>
          </a>
        </div>
      </div>
    </footer>
  );
}
