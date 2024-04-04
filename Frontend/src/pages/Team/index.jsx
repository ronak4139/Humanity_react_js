import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Humanity</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[25px]">          
          <Header1 className="flex flex-col items-center justify-center w-full gap-[25px]" />
        </div>
        <div className="flex flex-row justify-center w-full mt-[19px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full">
              <div className="h-[494px] w-full relative">
                <Img
                  src="images/img_photo_494x1440.png"
                  alt="photo_one"
                  className="justify-center h-[494px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="flex flex-row justify-center w-full h-full pl-[167px] pr-14 left-0 bottom-0 right-0 top-0 py-[167px] m-auto bg-gradient2 absolute">
                  <div className="flex flex-row justify-start w-[54%] mt-[19px] ml-[102px]">
                    <div className="flex flex-col items-start justify-start w-[56%]">
                      <Text size="3xl" as="p" className="!text-white-A700 !font-sueellenfrancisco">
                        Humanity Peoples...
                      </Text>
                      <Heading size="5xl" as="h1" className="mt-[20px] !text-white-A700">
                        Team Member
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center w-full mt-[118px] gap-[30px] grid-cols-3 grid min-h-[auto] max-w-[1199px]">
          <div className="flex flex-col items-center justify-start w-full gap-[21px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full bg-gray-400">
                <Img src="images/img_photo_512x379.png" alt="photo_one" className="w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[38%] gap-1.5">
              <Heading size="lg" as="h2">
                Jack Sparrow
              </Heading>
              <Img src="images/img_follow_blue_gray_800.svg" alt="jack_sparrow" className="h-[17px]" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[21px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full bg-gray-400">
                <Img src="images/img_photo_512x379.png" alt="photo_one" className="w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[38%] gap-1.5">
              <Heading size="lg" as="h2">
                Jack Sparrow
              </Heading>
              <Img src="images/img_follow_blue_gray_800.svg" alt="follow_one" className="h-[17px]" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[21px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full bg-gray-400">
                <Img src="images/img_photo_512x379.png" alt="photo_one" className="w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[38%] gap-1.5">
              <Heading size="lg" as="h2">
                Jack Sparrow
              </Heading>
              <Img src="images/img_follow_blue_gray_800.svg" alt="follow_one" className="h-[17px]" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[21px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full bg-gray-400">
                <Img src="images/img_photo_10.png" alt="photo_one" className="w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[38%] gap-1.5">
              <Heading size="lg" as="h2">
                Jack Sparrow
              </Heading>
              <Img src="images/img_follow_blue_gray_800.svg" alt="follow_one" className="h-[17px]" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[21px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full bg-gray-400">
                <Img src="images/img_photo_10.png" alt="photo_one" className="w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[38%] gap-1.5">
              <Heading size="lg" as="h2">
                Jack Sparrow
              </Heading>
              <Img src="images/img_follow_blue_gray_800.svg" alt="follow_one" className="h-[17px]" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[21px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full bg-gray-400">
                <Img src="images/img_photo_10.png" alt="photo_one" className="w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[38%] gap-1.5">
              <Heading size="lg" as="h2">
                Jack Sparrow
              </Heading>
              <Img src="images/img_follow_blue_gray_800.svg" alt="follow_one" className="h-[17px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full mt-[117px]">
          <div className="flex flex-row justify-center w-full p-6 bg-red-300">
            <div className="flex flex-col items-center justify-start w-[56%] mt-[58px] gap-[39px] mx-[309px]">
              <div className="flex flex-col items-center justify-start w-full gap-1.5">
                <div className="flex flex-row justify-center w-[58%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text size="xl" as="p" className="!text-white-A700 !font-sueellenfrancisco text-center">
                      Beacame Volonteer
                    </Text>
                    <Heading size="4xl" as="h2" className="mt-[-9px] !text-white-A700 text-center">
                      Join Our Organization
                    </Heading>
                  </div>
                </div>
                <Text as="p" className="!text-white-A700 text-center">
                  Save the Children believes every child deserves a future. In the U.S. and around the world, we give
                  children a healthy start in life.
                </Text>
              </div>
              <a href="/Volunteer"><Button className="uppercase font-medium min-w-[195px]">Join Us Now</Button></a>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full bg-black-900" />
      </div>
    </>
  );
}
