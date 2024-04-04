import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";

export default function CausesPage() {
  return (
    <>
      <Helmet>
        <title>Humanity</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[27px] bg-white-A700">
        <Header1 className="flex flex-col items-center justify-center w-full gap-[25px]" />
        <div className="flex flex-col items-center justify-start w-full gap-[90px]">
          <div className="h-[580px] w-full relative">
            <Img
              src="images/img_photo_580x1440.png"
              alt="photo_one"
              className="justify-center h-[580px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="flex flex-row justify-center w-full h-full pl-[210px] pr-14 left-0 bottom-0 right-0 top-0 py-[210px] m-auto bg-gradient absolute">
              <div className="flex flex-row justify-start w-[34%] mb-2 ml-[58px]">
                <div className="flex flex-col items-start justify-start w-full mx-auto max-w-[287px]">
                  <Text size="3xl" as="p" className="!text-white-A700 !font-sueellenfrancisco">
                    Donation
                  </Text>
                  <Heading size="5xl" as="h1" className="mt-[0px] !text-white-A700">
                    Our Causes
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center w-full gap-8 grid-cols-2 grid min-h-[auto] max-w-[1200px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center w-full bg-gray-400">
                  <Img src="images/img_photo_387x584.png" alt="image" className="w-full object-cover" />
                </div>
              </div>
              <div className="flex flex-row justify-center w-full p-[38px] bg-white-A700">
                <div className="flex flex-col items-center justify-start w-full gap-7 my-[5px]">
                  <Heading as="h2">Big charity: build school for poor children</Heading>
                  <div className="flex flex-row justify-start w-full gap-[30px]">
                    <Button color="gray_200_01" className="font-shipporimincho font-extrabold min-w-[333px]">
                      Donation : $5,000/$12,000
                    </Button>
                    <a href="/CausesSingle"><Button className="uppercase font-medium min-w-[145px]">Donate</Button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center w-full bg-gray-400">
                  <Img src="images/img_photo_3.png" alt="photo_one" className="w-full object-cover" />
                </div>
              </div>
              <div className="flex flex-row justify-center w-full p-[38px] bg-white-A700">
                <div className="flex flex-col items-center justify-start w-full gap-7 my-[5px]">
                  <Heading as="h3">
                    First charity activity of this
                    <br />
                    summer today
                  </Heading>
                  <div className="flex flex-row justify-start w-full gap-[30px]">
                    <Button color="gray_200_01" className="font-shipporimincho font-extrabold min-w-[333px]">
                      Donation : $5,000/$12,000
                    </Button>
                    <a href="/CausesSingle"><Button className="uppercase font-medium min-w-[145px]">Donate</Button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center w-full bg-gray-400">
                  <Img src="images/img_photo_4.png" alt="photo_one" className="w-full object-cover" />
                </div>
              </div>
              <div className="flex flex-row justify-center w-full p-[38px] bg-white-A700">
                <div className="flex flex-col items-center justify-start w-full gap-7 my-[5px]">
                  <Heading as="h4">Helping the Homeless During the Holidays</Heading>
                  <div className="flex flex-row justify-start w-full gap-[30px]">
                    <Button color="gray_200_01" className="font-shipporimincho font-extrabold min-w-[333px]">
                      Donation : $5,000/$12,000
                    </Button>
                    <a href="/CausesSingle"><Button className="uppercase font-medium min-w-[145px]">Donate</Button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center w-full bg-gray-400">
                  <Img src="images/img_photo_5.png" alt="photo_one" className="w-full object-cover" />
                </div>
              </div>
              <div className="flex flex-row justify-center w-full p-[38px] bg-white-A700">
                <div className="flex flex-col items-center justify-start w-full gap-7 my-[5px]">
                  <Heading as="h5">Providing access to safe water, sanitation, and hygiene</Heading>
                  <div className="flex flex-row justify-start w-full gap-[30px]">
                    <Button color="gray_200_01" className="font-shipporimincho font-extrabold min-w-[333px]">
                      Donation : $5,000/$12,000
                    </Button>
                    <a href="/CausesSingle"><Button className="uppercase font-medium min-w-[145px]">Donate</Button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center w-full bg-gray-400">
                  <Img src="images/img_photo_6.png" alt="photo_one" className="w-full object-cover" />
                </div>
              </div>
              <div className="flex flex-row justify-center w-full p-[38px] bg-white-A700">
                <div className="flex flex-col items-center justify-start w-full gap-7 my-[5px]">
                  <Heading as="h6">San Francisco is officially the first city to ban plastic</Heading>
                  <div className="flex flex-row justify-start w-full gap-[30px]">
                    <Button color="gray_200_01" className="font-shipporimincho font-extrabold min-w-[333px]">
                      Donation : $5,000/$12,000
                    </Button>
                    <a href="/CausesSingle"><Button className="uppercase font-medium min-w-[145px]">Donate</Button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center w-full bg-gray-400">
                  <Img src="images/img_photo_7.png" alt="photo_one" className="w-full object-cover" />
                </div>
              </div>
              <div className="flex flex-row justify-center w-full p-[38px] bg-white-A700">
                <div className="flex flex-col items-center justify-start w-full gap-7 my-[5px]">
                  <Heading as="h4">Big charity: build school for poor children</Heading>
                  <div className="flex flex-row justify-start w-full gap-[30px]">
                    <Button color="gray_200_01" className="font-shipporimincho font-extrabold min-w-[333px]">
                      Donation : $5,000/$12,000
                    </Button>
                    <a href="/CausesSingle"><Button className="uppercase font-medium min-w-[145px]">Donate</Button></a>
                  </div>
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
