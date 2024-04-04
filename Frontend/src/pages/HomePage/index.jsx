import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";
import { Link } from "react-router-dom";


export default function HomePagePage() {
  return (
    <>
      <Helmet>
        <title>Humanity</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Header1 className="flex flex-col items-center justify-center w-full gap-[25px]" />
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full mt-[22px]">
          <div className="flex flex-col items-center justify-start w-full overflow-auto">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="h-[605px] w-full relative">
                  <Img
                    src="images/img_photo_605x1440.png"
                    alt="photo_one"
                    className="justify-center h-[605px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-row justify-center w-full h-full pl-[146px] pr-14 left-0 bottom-0 right-0 top-0 py-[146px] m-auto bg-gradient absolute">
                    <div className="flex flex-col items-start justify-start w-[61%] mt-[37px] ml-[123px] gap-[29px]">
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-[56%]">
                            <Text size="3xl" as="p" className="!text-white-A700 !font-sueellenfrancisco">
                              Need Help...
                            </Text>
                            <Heading size="5xl" as="h1" className="mt-[26px] !text-white-A700">
                              Being Life Saver
                              <br />
                              For Someone
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start gap-[15px]">
                        <a href="/Donationnow">
                        <Button color="amber_700" className="uppercase font-medium min-w-[145px]">
                          Donate
                        </Button>
                        </a>
                        <a href="/Aboutus">
                        <Button color="white_A700" className="uppercase font-medium min-w-[145px]">
                          Discover
                        </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[56%] mt-[-71px] ml-[281px] z-[1]">
                  <div className="flex flex-row justify-center w-1/2 p-10 bg-amber-700">
                    <div className="flex flex-col items-start justify-start w-full mt-[22px] mb-7 gap-5">
                      <div className="flex flex-col items-start justify-start w-full gap-1.5">
                        <Heading size="2xl" as="h2">
                          Education
                        </Heading>
                        <Text as="p" className="!text-gray-800">
                          Below Poverty Line is enchmark used by the government of India economic disadvantage.
                        </Text>
                      </div>
                      <a href="/BlogSingle">
                      <Button color="white_A700" className="uppercase font-medium min-w-[145px]">
                        Discover
                      </Button>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-1/2 gap-[21px] p-[43px] bg-blue_gray-800">
                    <div className="flex flex-col items-start justify-start mt-10 gap-[15px]">
                      <Heading size="2xl" as="h3" className="w-[66%] !text-white-A700 !leading-[108.3%]">
                        Become
                        <br />a Volunteer
                      </Heading>
                      <Text as="p" className="!text-white-A700">
                        Below Poverty Line is enchmark used by the government
                      </Text>
                    </div>
                    <a href="/Volunteer" className="mb-[38px]">
                      <Text size="s" as="p" className="!text-white-A700 uppercase underline">
                        Join organization
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start w-full mt-[68px] gap-[47px] max-w-[1199px]">
              <div className="flex flex-col items-start justify-start w-[51%] gap-[13px]">
                <div className="flex flex-col items-start justify-start">
                  <Text size="xl" as="p" className="!text-amber-700 !font-sueellenfrancisco">
                    About Us
                  </Text>
                  <Heading size="4xl" as="h4">
                    Help People,
                    <br />
                    Our Main Goals
                  </Heading>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-8">
                  <Text as="p" className="!text-gray-600">
                    Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. <br />
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    essentially.
                  </Text>
                  <div className="flex flex-row justify-start">
                    <a href="/Aboutus">
                    <Button color="amber_700" className="w-full uppercase font-medium">
                      More About
                    </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center w-[46%] mt-[3px] gap-9 p-10 bg-blue_gray-50">
                <div className="flex flex-row w-full mt-[11px] gap-[22px]">
                  <div className="flex flex-row justify-center w-[44%]">
                    <div className="flex flex-row justify-center items-center w-full gap-3.5">
                      <div className="flex flex-col items-center justify-start w-[14%] gap-[18px]">
                        <Button color="teal_200" size="xs" className="w-[27px] rounded-[13px]">
                          <Img src="images/img_icon_teal_200.svg" />
                        </Button>
                        <Button color="teal_200" size="xs" className="w-[27px] rounded-[13px]">
                          <Img src="images/img_icon_teal_200.svg" />
                        </Button>
                        <Button color="teal_200" size="xs" className="w-[27px] rounded-[13px]">
                          <Img src="images/img_icon_teal_200.svg" />
                        </Button>
                      </div>
                      <Text as="p" className="w-[81%] !text-gray-600 !font-medium !leading-[215%]">
                        Food Donation
                        <br />
                        Money Donation
                        <br />
                        Dress Donation
                        <br />
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-[52%]">
                    <div className="flex flex-row justify-center items-center w-full gap-3.5">
                      <div className="flex flex-col items-center justify-start w-[12%] gap-[18px]">
                        <Button color="teal_200" size="xs" className="w-[27px] rounded-[13px]">
                          <Img src="images/img_icon_teal_200.svg" />
                        </Button>
                        <Button color="teal_200" size="xs" className="w-[27px] rounded-[13px]">
                          <Img src="images/img_icon_teal_200.svg" />
                        </Button>
                        <Button color="teal_200" size="xs" className="w-[27px] rounded-[13px]">
                          <Img src="images/img_icon_teal_200.svg" />
                        </Button>
                      </div>
                      <Text as="p" className="w-[83%] !text-gray-600 !font-medium !leading-[215%]">
                        Water Supplay
                        <br />
                        Education Donation
                        <br />
                        Toys Donation
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[95%] gap-[22px]">
                  <div className="flex flex-row justify-start">
                    <Heading as="h5">Total Donation</Heading>
                  </div>
                  <div className="h-1.5 w-full bg-blue_gray-100 relative">
                    <div style={{ width: "70%" }} className="h-full bg-amber-700 absolute" />
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <Heading size="lg" as="h6">
                      Collection - $5M
                    </Heading>
                    <Heading size="lg" as="h5">
                      Goal - $10M
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-row justify-start mb-[11px]">
                <a href="/Donationnow">
                  <Button color="white_A700" className="w-full uppercase font-medium">
                    Donat Now
                  </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[38%] mt-[101px]">
              <Text size="xl" as="p" className="!text-amber-700 !font-sueellenfrancisco">
                What we do
                <br />
              </Text>
              <Heading size="4xl" as="h1" className="mt-[-2px] !text-black-900">
                We do it for People in Need
              </Heading>
            </div>
            <div className="flex flex-col items-center justify-start w-full mt-12 max-w-[1148px]">
              <div className="justify-center w-full gap-[52px] grid-cols-3 grid min-h-[auto]">
                <div className="flex flex-col items-center justify-start w-full gap-2">
                  <div className="flex flex-col items-center justify-start w-[53%] gap-[15px]">
                    <Img src="images/img_icon_70x70.png" alt="medicine_help" className="w-[70px] object-cover" />
                    <Heading as="h4">Medicine Help</Heading>
                  </div>
                  <Text as="p" className="!text-gray-600 text-center">
                    Centuries but also the leap into electronic typesetting, remaining specimen book.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-2">
                  <div className="flex flex-col items-center justify-start w-[55%] gap-[15px]">
                    <Img src="images/img_oil_massage.png" alt="oilmassage_one" className="w-[70px] object-cover" />
                    <Heading as="h4" className="text-center">
                      Water Delivery
                    </Heading>
                  </div>
                  <Text as="p" className="!text-gray-600 text-center">
                    Centuries but also the leap into electronic typesetting, remaining specimen book.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-2.5">
                  <div className="flex flex-col items-center justify-start w-[55%] gap-[13px]">
                    <Img src="images/img_day_care.png" alt="daycare_one" className="w-[70px] object-cover" />
                    <Heading as="h4" className="text-center">
                      We Care About
                    </Heading>
                  </div>
                  <Text as="p" className="!text-gray-600 text-center">
                    Centuries but also the leap into electronic typesetting, remaining specimen book.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-2">
                  <div className="flex flex-col items-center justify-start w-[53%] gap-[15px]">
                    <Img src="images/img_food_bar.png" alt="foodbar_one" className="w-[70px] object-cover" />
                    <Heading as="h4" className="text-center">
                      Food Delivery
                    </Heading>
                  </div>
                  <Text as="p" className="!text-gray-600 text-center">
                    Centuries but also the leap into electronic typesetting, remaining specimen book.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-2">
                  <div className="flex flex-col items-center justify-start w-[67%] gap-[15px]">
                    <Img src="images/img_geography.png" alt="geography_one" className="w-[70px] object-cover" />
                    <Heading as="h4" className="text-center">
                      Spread The World
                    </Heading>
                  </div>
                  <Text as="p" className="!text-gray-600 text-center">
                    Centuries but also the leap into electronic typesetting, remaining specimen book.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-2.5">
                  <div className="flex flex-col items-center justify-start w-[61%] gap-[13px]">
                    <Img src="images/img_contract.png" alt="contract_one" className="w-[70px] object-cover" />
                    <Heading as="h4" className="text-center">
                      Learn Education
                    </Heading>
                  </div>
                  <Text as="p" className="!text-gray-600 text-center">
                    Centuries but also the leap into electronic typesetting, remaining specimen book.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full mt-[156px] max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full gap-[50px]">
                <div className="flex flex-row justify-between items-center w-[98%]">
                  <div className="flex flex-col items-center justify-start w-[21%]">
                    <Heading size="6xl" as="h1">
                      200k
                    </Heading>
                    <Text as="p" className="mt-[-1px] !text-gray-600 text-center">
                      Received Donations From
                      <br />
                      Our People
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[19%]">
                    <Heading size="6xl" as="h1">
                      99K
                    </Heading>
                    <Text as="p" className="mt-[-1px] !text-gray-600 text-center">
                      Projects Done With
                      <br />
                      The Help Of Donators
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[16%]">
                    <Heading size="6xl" as="h1">
                      200k
                    </Heading>
                    <Text as="p" className="mt-[-1px] !text-gray-600 text-center">
                      People We Helped
                      <br />
                      on 2020
                    </Text>
                  </div>
                  <div className="flex flex-row justify-center w-[26%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Heading size="6xl" as="h1">
                        10.7K
                      </Heading>
                      <Text as="p" className="mt-[-8px] !text-gray-600 text-center">
                        With Our Volunteers We’ve Solved Many Causes
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-px w-full bg-blue_gray-100_01" />
              </div>
            </div>
            <div className="flex flex-row justify-center w-full mt-[72px] pb-[7px] max-w-[1214px]">
              <div className="flex flex-col items-center justify-start w-[99%] gap-8">
                <div className="flex flex-row justify-center w-[35%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text size="xl" as="p" className="!text-amber-700 !font-sueellenfrancisco text-center">
                      Team
                    </Text>
                    <Heading size="4xl" as="h1" className="mt-[-12px] text-center">
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
            <div className="flex flex-row justify-center w-full mt-[102px] max-w-[2446px]">
              <div className="flex flex-col items-start justify-start w-[62%] gap-[30px] p-[55px] bg-amber-700">
                <div className="flex flex-col items-start justify-start w-4/5 ml-[38px] gap-[7px]">
                  <div className="flex flex-col items-start justify-start">
                    <Text size="xl" as="p" className="!text-white-A700 !font-sueellenfrancisco">
                      Subscribe
                    </Text>
                    <Heading size="4xl" as="h1" className="!text-white-A700">
                      Newsletter
                    </Heading>
                  </div>
                  <Text as="p" className="!text-white-A700">
                    Sign up for our monthly newsletter to get the latest news, volunteer opportunities,
                  </Text>
                </div>
                <a href="/Volunteer"><Button className="mb-[18px] ml-[38px] uppercase font-medium min-w-[122px]">Send</Button></a>
              </div>
              <div className="flex flex-row justify-center w-[70%]">
                <div className="flex flex-col items-start justify-center w-full pl-[70px] pr-14 gap-[35px] py-[70px] bg-gray-400_ed">
                  <div className="flex flex-row justify-start w-[94%] ml-[15px]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text size="xl" as="p" className="!font-sueellenfrancisco">
                        Recent Blog
                      </Text>
                      <Heading size="4xl" as="h1" className="mt-[5px]">
                        Take Look At Recent Blog
                        <br />
                        Posts
                      </Heading>
                    </div>
                  </div>
                  <a href="/BlogSingle"><Button className="mb-2.5 ml-[15px] uppercase font-medium min-w-[201px]">See Our Blogs</Button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full bg-black-900" />
      </div>
    </>
  );
}
