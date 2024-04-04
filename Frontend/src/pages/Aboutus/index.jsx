import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";


export default function AboutusPage() {
  return (
    <>
      <Helmet>
        <title>Humanity</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
      <Header1 className="flex flex-col items-center justify-center w-full gap-[25px]" />
        <div className="flex flex-col items-center justify-start w-full mt-[23px] gap-20">
          <div className="h-[600px] w-full relative">
            <Img
              src="images/img_photo_600x1440.png"
              alt="photo_one"
              className="justify-center h-[600px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="flex flex-row justify-center w-full h-full pl-[181px] pr-14 left-0 bottom-0 right-0 top-0 py-[181px] m-auto bg-gradient1 absolute">
              <div className="flex flex-col items-start justify-start w-[30%] mb-[42px] ml-[88px]">
                <Text size="3xl" as="p" className="!text-white-A700 !font-sueellenfrancisco">
                  What We Do...
                </Text>
                <Heading size="5xl" as="h1" className="w-[93%] !text-white-A700">
                  About our
                  <br />
                  Organization
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-11 max-w-[1207px]">
            <div className="flex flex-col items-center justify-start w-full gap-[266px]">
              <div className="flex flex-row justify-start items-start w-full gap-10">
                <div className="flex flex-row justify-start w-[47%]">
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row justify-start w-full">
                      <Img src="images/img_photo_502x560.png" alt="photo_three" className="w-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[51%] mt-12">
                  <div className="flex flex-col items-start justify-start w-full gap-5">
                    <div className="flex flex-col items-start justify-start">
                      <Text size="xl" as="p" className="!text-amber-700 !font-sueellenfrancisco">
                        About Us
                      </Text>
                      <Heading size="4xl" as="h2">
                        Solutions to Help People
                        <br />
                        in Need and Save
                        <br />
                        the Planet
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-4">
                      <Text as="p" className="!text-gray-600">
                        Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book.{" "}
                      </Text>
                      <Button color="white_A700" shape="square" className="w-full !text-blue_gray-500_01 font-medium">
                        Save the Children believes every child deserves a future.
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-start w-full gap-12">
                <div className="flex flex-col items-start justify-start w-[48%] gap-[35px]">
                  <div className="flex flex-col items-start justify-start w-full gap-2">
                    <Heading size="2xl" as="h3">
                      Our Goal
                    </Heading>
                    <Text as="p" className="!text-gray-600">
                      Lorem Ipsum is simply dummy text of the typesetting dummy text ever when an unknown printer took a
                      galley of type and scrambled type specimen book.{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[91%] gap-[15px]">
                    <div className="flex flex-row justify-start gap-5">
                      <Button
                        color="gray_100_04"
                        size="xl"
                        leftIcon={<Img src="images/img_icon_red_300.svg" alt="Icon" />}
                        className="gap-2 min-w-[211px] rounded-[28px]"
                      >
                        Make Donation
                      </Button>
                      <Button
                        color="gray_100_04"
                        size="xl"
                        leftIcon={<Img src="images/img_icon_red_300.svg" alt="Icon" />}
                        className="gap-2 min-w-[276px] rounded-[28px]"
                      >
                        Donation Reched 10M
                      </Button>
                    </div>
                    <div className="flex flex-row justify-start gap-5">
                      <Button
                        color="gray_100_04"
                        size="xl"
                        leftIcon={<Img src="images/img_icon_red_300.svg" alt="Icon" />}
                        className="gap-2 min-w-[232px] rounded-[28px]"
                      >
                        Education For All
                      </Button>
                      <Button
                        color="gray_100_04"
                        size="xl"
                        leftIcon={<Img src="images/img_icon_red_300.svg" alt="Icon" />}
                        className="gap-2 min-w-[263px] rounded-[28px]"
                      >
                        Become A Volunteer
                      </Button>
                    </div>
                    <Button
                      color="gray_100_04"
                      size="xl"
                      leftIcon={<Img src="images/img_icon_red_300.svg" alt="Icon" />}
                      className="gap-2 min-w-[332px] rounded-[28px]"
                    >
                      Food For Poor People dayle
                    </Button>
                  </div>
                  <Text as="p" className="!text-gray-600">
                    Lorem Ipsum is simply dummy text of the typesetting dummy text ever when an unknown printer took a
                    galley of type and scrambled type specimen book.{" "}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[49%] gap-[33px]">
                  <div className="flex flex-col items-start justify-start w-[97%] gap-px">
                    <Heading size="4xl" as="h4">
                      Our Mission
                    </Heading>
                    <Text as="p" className="!text-gray-600">
                      Lorem Ipsum is simply dummy text of the typesetting dummy text ever when an unknown printer took a
                      galley of type and scrambled type specimen book.{" "}
                    </Text>
                  </div>
                  <div className="h-[603px] w-full relative">
                    <div className="flex flex-row justify-end w-[67%] bottom-0 right-0 m-auto absolute">
                      <div className="flex flex-row justify-center w-full p-[35px] bg-teal-200">
                        <div className="flex flex-col items-center justify-start w-[90%] mb-[3px] mx-4">
                          <Heading size="8xl" as="h5">
                            20000+
                          </Heading>
                          <Text as="p" className="!font-medium">
                            Thousand People Helped
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full top-0 right-0 left-0 m-auto absolute">
                      <Img src="images/img_photo_413x585.png" alt="photo_five" className="w-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-8">
              <div className="flex flex-row justify-center w-[35%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text size="xl" as="p" className="!text-amber-700 !font-sueellenfrancisco text-center">
                    Team
                  </Text>
                  <Heading size="4xl" as="h6" className="mt-[-12px] text-center">
                    Meet Our Volunteers
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row w-full gap-[23px]">
                <div className="flex flex-col items-center justify-start w-[24%] gap-[15px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full bg-gray-400">
                      <Img src="images/img_photo_382x283_1.png" alt="becomea" className="w-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[51%] gap-[15px]">
                    <Heading size="lg" as="h5">
                      Martin Luther
                    </Heading>
                    <Img src="images/img_follow_blue_gray_800.svg" alt="martin_luther" className="h-[18px]" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[24%] gap-4">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full bg-gray-400">
                      <Img src="images/img_photo_382x283_2.png" alt="photo_one" className="w-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[58%] gap-[13px]">
                    <Heading size="lg" as="h5">
                      Keira Knightley
                    </Heading>
                    <Img src="images/img_follow_blue_gray_800.svg" alt="follow_one" className="h-[18px]" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[24%] gap-4">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full bg-gray-400">
                      <Img src="images/img_photo_382x283_3.png" alt="photo_one" className="w-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[51%] gap-[13px]">
                    <Heading size="lg" as="h5">
                      Jack Sparrow
                    </Heading>
                    <Img src="images/img_follow_blue_gray_800.svg" alt="follow_one" className="h-[18px]" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[24%] gap-[15px] p-[21px] bg-amber-700">
                  <div className="flex flex-col items-center justify-start h-[82px] w-[82px] mt-[43px] p-[18px] bg-blue_gray-800 rounded-[50%]">
                    <Img src="images/img_icon_46x46.png" alt="icon_one" className="w-[46px] object-cover" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                    <Heading as="h4" className="w-[64%] text-center">
                      Become
                      <br /> a Volunteer
                    </Heading>
                    <Text as="p" className="text-center">
                      Centuries but also the leap electtypesetting, remaining{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row justify-center w-[84%] mb-[43px]">
                    <a href="/Volunteer"><Button className="w-full uppercase font-medium">Join_Us_Today</Button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[135px] bg-black-900" />
      </div>
    </>
  );
}
