import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";

export default function CausesSinglePage() {
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
        <div className="h-[574px] w-full mt-[25px] relative">
          <Img
            src="images/img_photo_574x1440.png"
            alt="photo_one"
            className="justify-center h-[574px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <div className="flex flex-row justify-center w-full h-full pl-[174px] pr-14 left-0 bottom-0 right-0 top-0 py-[174px] m-auto bg-gradient2 absolute">
            <div className="flex flex-col items-start justify-start w-3/5 mt-[34px] ml-[95px]">
              <Text size="3xl" as="p" className="!text-white-A700 !font-sueellenfrancisco">
                Donation
              </Text>
              <Heading size="5xl" as="h1" className="!text-white-A700">
                First charity activity of this
                <br />
                summer today
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-[118px] gap-[97px] max-w-[1200px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full bg-gray-400">
              <Img src="images/img_photo_617x1200.png" alt="photo_three" className="w-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-3/4 gap-[18px]">
            <div className="flex flex-col items-start justify-start w-full gap-[47px]">
              <Heading size="2xl" as="h2">
                Donation : $5,000/$12,000
              </Heading>
              <div className="h-px w-full bg-gray-400_01" />
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[34px]">
              <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                <Heading size="2xl" as="h3">
                  Our Goal
                </Heading>
                <Text as="p" className="!text-gray-600">
                  Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae vel magnam
                  repudiandae ipsum repellat repudiandae. Voluptate at dolores ut dolor sint occaecati similique. Velit
                  eius ab delectus temporibus.
                  <br />
                  For dynamic content, add a rich text field to any collection and then connect a rich text element to
                  that field in the settings panel. Headings, paragraphs, block-quotes, figures, images, and figure
                  captions can all be styled.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                <Heading as="h4">We love design beautiful things.</Heading>
                <Text as="p" className="!text-gray-600">
                  Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae vel magnam
                  repudiandae ipsum repellat repudiandae. Voluptate at dolores ut dolor sint occaecati similique. Velit
                  eius ab delectus temporibus.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                <Heading as="h5">Details about the cause</Heading>
                <Text as="p" className="!text-gray-600">
                  Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae vel magnam
                  repudiandae ipsum repellat repudiandae. Voluptate at dolores ut dolor sint occaecati similique. Velit
                  eius ab delectus temporibus.
                  <br />
                  Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after A rich
                  text element can be used with static or dynamic content. For static content, just drop it into any
                  page and begin editing.
                  <br />‍<br />
                  The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and
                  video all in one place instead of having to add and format them individually. Just double-click and
                  easily create content.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex flex-col items-center justify-center w-full mt-[119px]">
          <div className="flex flex-row justify-between items-center w-full p-20 mx-auto bg-blue_gray-50_01 max-w-[1200px]">
            <div className="flex flex-col items-start justify-start w-[42%] mb-0.5 ml-[21px] gap-5">
              <div className="flex flex-col items-start justify-start gap-2">
                <Heading size="2xl" as="h2">
                  Donate Here
                </Heading>
                <Text as="p" className="!text-gray-600">
                  Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque.
                </Text>
              </div>
              <div className="flex flex-row justify-start w-[94%]">
                <div className="flex flex-row justify-start items-start w-full gap-[21px] p-[15px] bg-white-A700 rounded-[28px]">
                  <Img src="images/img_qr_code.svg" alt="qrcode_one" className="h-[109px] w-[109px] mb-0.5" />
                  <div className="flex flex-row justify-start w-[49%] mt-6">
                    <Text as="p" className="!font-medium !leading-[128%]">
                      Scan this QR code
                      <br />
                      to Donate
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-3.5">
                <Heading as="h4">Accepted Payment Methods</Heading>
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-row justify-evenly w-full py-3 border-gray-300_01 border border-solid bg-gray-100_02 rounded-[45px]">
                    <Img src="images/img_photo_53x93.png" alt="photo_five" className="w-[22%] my-1.5 object-cover" />
                    <Img src="images/img_photo_8.png" alt="photo_seven" className="w-[22%] object-cover" />
                    <Img src="images/img_photo_53x92.png" alt="photo_nine" className="w-[22%] object-cover" />
                    <Img src="images/img_photo_9.png" alt="photo_eleven" className="w-[22%] object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[43%] mr-[21px] gap-11">
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <Heading size="2xl" as="h2">
                  Bank Details
                </Heading>
                <Text as="p" className="!text-gray-600">
                  Create and format headings, paragraphs, blockquotes images and video all in one place instead{" "}
                </Text>
              </div>
              <div className="flex flex-row justify-start gap-[46px]">
                <Text as="p" className="w-[42%]">
                  <span className="text-blue_gray-800">
                    Account Number <br />
                  </span>
                  <span className="text-blue_gray-800 font-medium">
                    <br />
                  </span>
                  <span className="text-blue_gray-800">
                    Beneficiar Name <br />
                  </span>
                  <span className="text-blue_gray-800 font-medium">
                    <br />
                  </span>
                  <span className="text-blue_gray-800">IFSC Code </span>
                </Text>
                <Text as="p" className="w-[48%] !font-medium">
                  2223330000456987
                  <br />
                  Walfare Organization
                  <br />
                  WRDSBI0BNKPIS
                </Text>
              </div>
              <Button className="uppercase font-medium min-w-[296px]">Copy Account Details</Button>
            </div>
          </div>
          <Footer className="flex justify-center items-center w-full bg-black-900" />
        </footer>
      </div>
    </>
  );
}
