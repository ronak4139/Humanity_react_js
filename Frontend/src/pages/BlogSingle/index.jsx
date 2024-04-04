import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header1";

export default function BlogSinglePage() {
  return (
    <>
      <Helmet>
        <title>Humanity</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header className="flex flex-col items-center justify-center w-full gap-[25px]" />
        <div className="flex flex-col items-center justify-start w-full mt-[23px] gap-[77px]">
          <div className="h-[529px] w-full bg-gray-400 relative">
            <Img
              src="images/img_photo_529x1440.png"
              alt="photo_one"
              className="justify-center h-[529px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="flex flex-row justify-start w-[46%] h-max left-[19%] bottom-0 top-0 m-auto absolute">
              <div className="flex flex-col items-start justify-start w-full">
                <Text size="3xl" as="p" className="!text-white-A700 !font-sueellenfrancisco">
                  July 05, 2023 | Rohit
                </Text>
                <Heading size="5xl" as="h1" className="mt-[35px] !text-white-A700">
                  We’ve reached 1 million in
                  <br />
                  donations & counting
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[50px] max-w-[886px]">
            <Text as="p" className="!text-gray-600">
              Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully
              researched data and enterprise process improvements. Collaboratively expedite quality manufactured
              products via client-focused results quickly communicate enabled technology and turnkey leadership skills.
              Uniquely enable accurate supply chains rather than friction technology.
            </Text>
            <div className="flex flex-col items-start justify-start w-full gap-[13px]">
              <Heading size="4xl" as="h2">
                We Are Need Your Help
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[30px]">
                <Text as="p" className="!text-gray-600">
                  Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae vel magnam
                  repudiandae ipsum repellat repudiandae. Voluptate at dolores dolor sint occaecati similique. Velit
                  eius ab delectus temporibus.
                </Text>
                <Text as="p" className="w-[84%] !text-gray-600">
                  Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor.
                  <br />
                  Nostrum facere repellendus minus quod aut aliquam neque reiciendis.
                  <br />A rich text element can be used with static or dynamic content.
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[21px] px-14 py-[72px] bg-red-300">
              <div className="flex flex-col items-start justify-start h-[103px] w-[103px] p-[25px] bg-white-A700 rounded-[51px]">
                <Img src="images/img_.svg" alt="image" className="h-[35px] mt-[5px] mb-[11px]" />
              </div>
              <Text size="lg" as="p" className="w-[76%] !text-white-A700 text-center italic">
                “In the end, maybe it&#39;s wiser to surrender before the miraculous scope of human generosity and to
                just keep saying thank you, forever and sincerely, for as long as we have voices”
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[21px]">
              <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                <Heading as="h3">Donate your time and skills</Heading>
                <Text as="p" className="!text-gray-600">
                  Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae vel magnam
                  repudiandae ipsum repellat repudiandae. Voluptate at dolores ut dolo sint occaecati similique. Velit
                  eius ab delectus temporibus.
                </Text>
              </div>
              <Text as="p" className="w-[67%] !text-gray-600 !leading-[259%]">
                Efficiently myocardinate market-driven innovation.
                <br />
                Idea-sharing with back end products.
                <br />
                Ballpark value added activity to beta test.
                <br />
                Voluptate at dolores ut dolor{" "}
              </Text>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-5 p-[53px] bg-gray-100_01">
              <div className="flex flex-col items-center justify-start h-36 w-36">
                <Img src="images/img_photo_144x144.png" alt="photo_three" className="h-36 w-36 rounded-[50%]" />
              </div>
              <div className="flex flex-col items-start justify-start w-[79%] gap-2.5">
                <div className="flex flex-col items-start justify-center">
                  <Heading as="h4" className="mt-[3px] !font-bold">
                    Cincinatty
                  </Heading>
                  <Text as="p" className="!text-gray-600">
                    Donator
                  </Text>
                </div>
                <Text as="p" className="!text-gray-600">
                  Centuries but alsoleapintelectronitypesetting,established fact that a reader will bdistracted
                  content.beatae vel magnam repudiandae repudiandae.{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[50px] bg-black-900" />
      </div>
    </>
  );
}
