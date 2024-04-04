import React from "react";
import { Button, Text, Img } from "..";
import { useEffect, useState } from "react";
import { auth } from "../../components/googleSignin/config";
import { useNavigate } from "react-router-dom";

export default function Header1({ ...props }) {
  const navigate = useNavigate();

  useEffect(() => {    
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail('');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUserEmail('');
      navigate("/");
    }).catch(error => {
      console.error('Error logging out:', error);
    });
    localStorage.clear();
  };
  const logout = () => {
    localStorage.clear();
  }
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {    
    const email = localStorage.getItem('email');
    setUserEmail(email);
  }, []);

  return (
    <header {...props}>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex flex-row justify-start w-full p-[23px] bg-blue_gray-800">
            <div className="flex flex-row justify-between w-[31%] mt-0.5 ml-[72px]">
              <div className="flex flex-row justify-start items-center gap-[7px]">
                <Img src="images/img_vector.svg" alt="vector_one" className="h-3.5 w-3.5" />
                <Text size="s" as="p" className="!text-white-A700 !font-normal">
                  +916353620712
                </Text>
              </div>
              <div className="flex flex-row justify-start items-start gap-2">
                <Img src="images/img_icon.svg" alt="icon_one" className="h-3 mt-1" />
                <Text size="s" as="p" className="!text-white-A700 !font-normal">
                  humanity@charity.com
                </Text>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-row justify-center w-[14%] mt-[-90px] mr-[145px] p-[27px] ">
            <Img src="images/donate_button.png" alt="follow_one" className="h-[60px] w-[110px] " />
          </div> */}
        </div>
      </div>
      <div className="flex flex-row justify-start items-center w-full gap-[9px] mx-auto max-w-[1305px]">
        <div className="flex flex-row justify-start items-start w-[92%] pt-0.5">
          <div className="flex flex-row justify-start items-center w-[15%] gap-1.5">
            <div className="h-11 w-[12%] relative">
              <Img
                src="images/img_vector_1.svg"
                alt="vectorone_one"
                className="justify-center h-11 left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[1px]"
              />
              <div className="h-[9px] w-[9px] left-[24%] top-[9%] m-auto bg-black-900 absolute rounded" />
            </div>
            <Text size="xl" as="p" className="!font-shanti">
              Humanity
            </Text>
          </div>
          <div className="flex flex-row justify-end items-center w-[66%] mt-[9px] ml-8 px-11">
            <a href="/HomePage">
              <div className="flex flex-row justify-start items-center w-[10%] gap-4">
                <Text size="s" as="p">
                  Home{" "}
                </Text>
                <div className="h-6 w-px bg-blue_gray-100_01" />
              </div>
            </a>
            <a href="/Aboutus" className="ml-[29px]">
              <Text size="s" as="p">
                About Us{" "}
              </Text>
            </a>
            <div className="h-6 w-px ml-[27px] bg-white" />
            <a href="/BlogSingle" className="ml-[29px]">
              <Text size="s" as="p">
                Blog{" "}
              </Text>
            </a>
            <div className="h-6 w-px ml-[30px] bg-white" />
            <a href="/Team" className="ml-[29px]">
              <Text size="s" as="p">
                Team{" "}
              </Text>
            </a>
            <div className="h-6 w-px ml-6 bg-white" />
            <a href="/ContactUs" className="ml-[22px]">
              <Text size="s" as="p">
                Contact
              </Text>
            </a>
          </div>
          <Img src="images/img_user.png" alt="user_one" className="w-[43px] ml-8 object-cover" />
          <a href="#" className="mt-[13px]">
            <Text size="s" as="p" className="!text-black-900 uppercase">
              {userEmail}
            </Text>
          </a>
        </div>
        <a href="/">
        <Button onClick={handleLogout} color="green_900" size="md" className="uppercase font-medium min-w-[97px] rounded-[25px]">
          Logout
        </Button>
        </a>
      </div>
    </header>
  );
}
