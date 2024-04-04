import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button, Input, Img } from "../../components";

export default function ForgetPasswordPage() {
  return (
    <>
      <Helmet>
        <title>Humanity</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full pt-[3 px] bg-white-A700">
        <div className="flex flex-row justify-start w-full pl-[106px] pr-14 py-[106px] bg-white-A700 rounded-[20px]">
          <div className="flex flex-row justify-start w-full mb-[91px] mx-auto max-w-[1056px]">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col items-center justify-start">
                <Img
                  src="images/img_screenshot_2024_02_23.png"
                  alt="screenshot2024"
                  className="w-80 object-cover rounded-[30px]"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[43%]">
                <div className="flex flex-row justify-center w-full">
                  <a href="#" className="ml-[86px] mr-[85px]">
                    <Heading size="3xl" as="h1" className="!text-gray-900 tracking-[-1.44px] text-center">
                      Forgot Password
                    </Heading>
                  </a>
                </div>
                <div className="flex flex-row justify-center w-full mt-[22px] pt-[15px] pb-3.5 px-[15px] border-gray-300_02 border-t border-l border-b-2 border-r border-solid bg-white-A700 rounded-[15px]">
                  <Heading size="md" as="h2" className="mb-[29px] mx-[71px] !text-black-900 text-center">
                    Please Enter your email address to <br />
                    receive a verification code
                  </Heading>
                </div>
                <div className="flex flex-col items-center justify-start w-full mt-8 gap-4">
                  <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                    <Text size="xs" as="p" className="!text-gray-900_01">
                      Email
                    </Text>
                    <Input
                      type="email"
                      name="email"
                      placeholder="you@domain.com"
                      className="w-full font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
                    />
                  </div>
                  <div className="flex flex-row justify-start w-full pt-[3px]">
                    <div className="flex flex-col items-start justify-start w-[96%] gap-[3px]">
                      <Text size="xs" as="p" className="!text-gray-900_01">
                        Otp
                      </Text>
                      <div className="flex flex-row justify-between items-center w-full">
                        <Input
                          type="password"
                          name="language"
                          placeholder="••••••••"
                          className="w-[53%] font-inter font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
                        />
                        <Button
                          color="indigo_A700"
                          size="sm"
                          className="font-semibold  outline-t-[1] outline-l-[1] outline-b-[2] outline-r-[1] outline min-w-[153px] rounded-lg"
                        >
                          Send OTP
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  color="green_900"
                  size="lg"
                  className="w-full mt-[60px] font-semibold outline-t-[1] outline-l-[1] outline-b-[2] outline-r-[1] outline rounded-lg"
                >
                <a href="/SigninPage">
                  Conform
                </a>
                </Button>
                <div className="flex flex-row justify-start w-[42%] mt-[26px] gap-1">
                  <div className="flex flex-row justify-start w-[76%]">
                    <Text size="xs" as="p" className="mt-0.5 !text-black-900 !font-normal">
                      Already an member?
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start w-[22%]">
                    <div className="flex flex-row justify-start w-full">
                      <a href="/">
                      <Heading size="xs" as="h3" className="mt-0.5 !text-indigo-A700 text-center">
                        signin
                      </Heading>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
