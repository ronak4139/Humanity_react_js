// import React from "react";
// import { Helmet } from "react-helmet";
// import { Button, TextArea, Input, Img, Text, Heading } from "../../components";
// import Footer from "../../components/Footer";
// import Header1 from "../../components/Header1";

// export default function ContactUsPage() {
//   return (
//     <>
//       <Helmet>
//         <title>Humanity</title>
//         <meta name="description" content="Web site created using create-react-app" />
//       </Helmet>
//       <div className="flex flex-col items-center justify-start w-full gap-[27px] bg-white-A700">
//       <Header1 className="flex flex-col items-center justify-center w-full gap-[25px]" />
//         <div className="flex flex-col items-center justify-start w-full gap-[124px]">
//           <div className="flex flex-row justify-center w-full">
//             <div className="flex flex-row justify-center w-full">
//               <div className="flex flex-row justify-center w-full">
//                 <div className="h-[554px] w-full relative">
//                   <Img
//                     src="images/img_photo_554x1440.png"
//                     alt="photo_one"
//                     className="justify-center h-[554px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
//                   />
//                   <div className="justify-center h-[554px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
//                     <Img
//                       src="images/img_image_195.png"
//                       alt="image195_one"
//                       className="justify-center h-[554px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
//                     />
//                     <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 px-14 py-[199px] m-auto bg-gradient3 absolute">
//                       <div className="flex flex-row justify-start w-full mb-[3px] mx-[70px] max-w-[899px]">
//                         <div className="flex flex-col items-start justify-start w-[36%]">
//                           <Text size="3xl" as="p" className="!text-white-A700 !font-sueellenfrancisco">
//                             Contact
//                           </Text>
//                           <Heading size="5xl" as="h1" className="mt-[0px] !text-white-A700">
//                             Get in Touch
//                           </Heading>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-row justify-start items-center w-full gap-[37px] max-w-[1200px]">
//             <div className="flex flex-col items-start justify-start w-[48%] gap-[45px]">
//               <div className="flex flex-col items-start justify-start w-full gap-3">
//                 <div className="flex flex-col items-start justify-start gap-px">
//                   <Text size="xl" as="p" className="!text-red-300 !font-sueellenfrancisco">
//                     Contact
//                   </Text>
//                   <Heading size="4xl" as="h2">
//                     Get in Touch With Us
//                   </Heading>
//                 </div>
//                 <Text as="p" className="!text-gray-600">
//                   Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an unknown printer
//                   took a galley of type and scrambled it to make a type specimen book.{" "}
//                 </Text>
//               </div>
//               <div className="flex flex-col items-center justify-start w-3/5 gap-10">
//                 <div className="flex flex-row justify-end w-full">
//                   <div className="flex flex-row justify-start items-center w-[97%] gap-5">
//                     <div className="flex flex-col items-center justify-start h-[89px] w-[89px] p-6 bg-gray-100_04">
//                       <div className="flex flex-row justify-center w-[96%] mt-0.5 mb-2 border-red-300 border-[3px] border-solid">
//                         <Img src="images/img_vector_1_red_300.svg" alt="vectorone_three" className="h-3.5 mb-2" />
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-start justify-center w-[67%] gap-px">
//                       <a href="#" className="mt-px">
//                         <Heading size="lg" as="h3">
//                           Massege
//                         </Heading>
//                       </a>
//                       <a href="#">
//                         <Text as="p" className="!text-gray-600">
//                           support@walfare.com
//                         </Text>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-row justify-start items-center w-[97%] gap-5">
//                   <div className="flex flex-col items-start justify-center h-[89px] w-[89px] p-[25px] bg-gray-100_04">
//                     <Img src="images/img_vector_red_300.svg" alt="vector_three" className="h-[35px] w-[35px]" />
//                   </div>
//                   <div className="flex flex-col items-start justify-start w-[67%] gap-px">
//                     <a href="#">
//                       <Heading size="lg" as="h4">
//                         Contact Us
//                       </Heading>
//                     </a>
//                     <a href="#">
//                       <Text as="p" className="!text-gray-600">
//                         +01 (000) 265 458
//                       </Text>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col items-start justify-start w-[97%] gap-[35px]">
//                 <div className="flex flex-col items-start justify-start w-full gap-[9px]">
//                   <Heading as="h5">Follow us on social media</Heading>
//                   <Text as="p" className="!text-gray-600">
//                     Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.
//                   </Text>
//                 </div>
//                 <Img src="images/img_follow_blue_gray_800.svg" alt="socialmedia_one" className="h-[26px]" />
//               </div>
//             </div>
//             <div className="flex flex-col items-start justify-center w-1/2 gap-[50px] p-[54px] border-gray-300 border border-solid bg-white-A700">
//               <div className="flex flex-col items-center justify-start w-full mt-[3px] gap-5">
//                 <Input
//                   color="gray_100_03"
//                   size="sm"
//                   shape="square"
//                   type="text"
//                   name="name"
//                   placeholder="Enter Your Name*"
//                   className="w-full"
//                 />
//                 <Input
//                   color="gray_100_03"
//                   size="sm"
//                   shape="square"
//                   name="phoneNumber"
//                   placeholder="Phone Number*"
//                   className="w-full"
//                 />
//                 <Input
//                   color="gray_100_03"
//                   size="sm"
//                   shape="square"
//                   type="email"
//                   name="email"
//                   placeholder="Email Address*"
//                   className="w-full"
//                 />
//                 <TextArea name="your_message" placeholder="Your Message*" className="w-full text-gray-500" />
//               </div>
//               <Button className="mb-[3px] !text-gray-100_03 uppercase font-medium min-w-[201px]">Submit</Button>
//             </div>
//           </div>
//           <Footer className="flex justify-center items-center w-full bg-black-900" />
//         </div>
//       </div>
//     </>
//   );
// }



import {React,useState} from "react";
import { Helmet } from "react-helmet";
import { Button, TextArea, Input, Img, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";

export default function ContactUsPage() {
  const[user,setUser]=useState({
   Name : '',
   Number: '',
   Email: '',
   Message: '', 
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    // Basic email validation using regular expression
    const re =
      // eslint-disable-next-line no-useless-escape
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const { Name, Number, Email, Message } = user;
    if (!Name || !Number || !Email || !Message) {
      alert("All fields are required");
      return false;
    }
    if (!validateEmail(Email)) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const getData = (e) => {
    if(validateForm()){
    const {Name,Number,Email,Message} = user;
    e.preventDefault();
    const options = {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        Name,Number,Email,Message
      })
    }
    const res = fetch('https://humanity-dda00-default-rtdb.firebaseio.com/ContactUserData.json',options);
    if (res){
      alert('Message sent Successfully')
    }
    else{
      alert("Error occurred while sending")
    }
  }
  }
  return (
    <>    
      <Helmet>
        <title>Humanity</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[27px] bg-white-A700">
      <Header1 className="flex flex-col items-center justify-center w-full gap-[25px]" />
        <div className="flex flex-col items-center justify-start w-full gap-[124px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-center w-full">
                <div className="h-[554px] w-full relative">
                  <Img
                    src="images/img_photo_554x1440.png"
                    alt="photo_one"
                    className="justify-center h-[554px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="justify-center h-[554px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img
                      src="images/img_image_195.png"
                      alt="image195_one"
                      className="justify-center h-[554px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 px-14 py-[199px] m-auto bg-gradient3 absolute">
                      <div className="flex flex-row justify-start w-full mb-[3px] mx-[70px] max-w-[899px]">
                        <div className="flex flex-col items-start justify-start w-[36%]">
                          <Text size="3xl" as="p" className="!text-white-A700 !font-sueellenfrancisco">
                            Contact
                          </Text>
                          <Heading size="5xl" as="h1" className="mt-[0px] !text-white-A700">
                            Get in Touch
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center w-full gap-[37px] max-w-[1200px]">
            <div className="flex flex-col items-start justify-start w-[48%] gap-[45px]">
              <div className="flex flex-col items-start justify-start w-full gap-3">
                <div className="flex flex-col items-start justify-start gap-px">
                  <Text size="xl" as="p" className="!text-red-300 !font-sueellenfrancisco">
                    Contact
                  </Text>
                  <Heading size="4xl" as="h2">
                    Get in Touch With Us
                  </Heading>
                </div>
                <Text as="p" className="!text-gray-600">
                  Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.{" "}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-3/5 gap-10">
                <div className="flex flex-row justify-end w-full">
                  <div className="flex flex-row justify-start items-center w-[97%] gap-5">
                    <div className="flex flex-col items-center justify-start h-[89px] w-[89px] p-6 bg-gray-100_04">
                      <div className="flex flex-row justify-center w-[96%] mt-0.5 mb-2 border-red-300 border-[3px] border-solid">
                        <Img src="images/img_vector_1_red_300.svg" alt="vectorone_three" className="h-3.5 mb-2" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center w-[67%] gap-px">
                      <a href="#" className="mt-px">
                        <Heading size="lg" as="h3">
                          Massege
                        </Heading>
                      </a>
                      <a href="#">
                        <Text as="p" className="!text-gray-600">
                          support@walfare.com
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-[97%] gap-5">
                  <div className="flex flex-col items-start justify-center h-[89px] w-[89px] p-[25px] bg-gray-100_04">
                    <Img src="images/img_vector_red_300.svg" alt="vector_three" className="h-[35px] w-[35px]" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[67%] gap-px">
                    <a href="#">
                      <Heading size="lg" as="h4">
                        Contact Us
                      </Heading>
                    </a>
                    <a href="#">
                      <Text as="p" className="!text-gray-600">
                        +01 (000) 265 458
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[97%] gap-[35px]">
                <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                  <Heading as="h5">Follow us on social media</Heading>
                  <Text as="p" className="!text-gray-600">
                    Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.
                  </Text>
                </div>
                <Img src="images/img_follow_blue_gray_800.svg" alt="socialmedia_one" className="h-[26px]" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-1/2 gap-[50px] p-[54px] border-gray-300 border border-solid bg-white-A700">
        <form method="POST">
              <div className="flex flex-col items-center justify-start w-full mt-[3px] gap-5">
              <input
                color="gray_100_03"
                size="sm"
                shape="square"
                type="text"
                name="Name"
                placeholder="Enter Your Name*"
                className="w-full"
                value={user.Name}
                autoComplete="off"
                onChange={handleChange}
                required
              /><br/>
              <input
                color="gray_100_03"
                size="sm"
                shape="square"
                name="Number"
                placeholder="Phone Number*"
                className="w-full"
                value={user.Number}
                autoComplete="off"
                required
                onChange={handleChange}
              /><br/>
              <input
                color="gray_100_03"
                size="sm"
                shape="square"
                type="email"
                name="Email"
                placeholder="Email Address*"
                className="w-full"
                value={user.Email}
                autoComplete="off"
                required
                onChange={handleChange}
              /><br/>
              <textarea
                name="Message"
                placeholder="Your Message*"
                className="w-full text-gray-500"
                value={user.Message}
                autoComplete="off"
                required
                onChange={handleChange}
              /><br/>

              </div>
              <Button onClick={getData} className="mb-[3px] !text-gray-100_03 uppercase font-medium min-w-[201px]">Submit</Button>
          </form>
            </div>
          </div>
          <Footer className="flex justify-center items-center w-full bg-black-900" />
        </div>
      </div>
    </>
  );
}
