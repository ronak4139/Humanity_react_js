import {React,useState} from "react";
import { Helmet } from "react-helmet";
import { Button, TextArea, Input, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";

export default function VolunteerPage() {
  const[user,setUser]=useState({
    Name : '',
    Number: '',
    Email: '',
    Address: '',
    About:'', 
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
     const { Name, Number, Email, Address,About } = user;
     if (!Name || !Number || !Email || !Address || !About) {
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
     const {Name,Number,Email,Address,About} = user;
     e.preventDefault();
     const options = {
       method : 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body : JSON.stringify({
         Name,Number,Email,Address,About
       })
     }
     const res = fetch('https://humanity-dda00-default-rtdb.firebaseio.com/VolunteerData.json',options);
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
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
      <Header1 className="flex flex-col items-center justify-center w-full gap-[25px]" />
        <div className="flex flex-col items-center justify-start w-full mt-7 gap-[75px]">
          <div className="h-[519px] w-full relative">
            <Img
              src="images/img_photo_519x1440.png"
              alt="photo_one"
              className="justify-center h-[519px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="flex flex-row justify-center w-full h-full pl-[182px] pr-14 left-0 bottom-0 right-0 top-0 py-[182px] m-auto bg-gradient2 absolute">
              <div className="flex flex-row justify-start w-[55%] mt-[13px] ml-[87px]">
                <div className="flex flex-col items-start justify-start w-full mx-auto max-w-[503px]">
                  <Text size="3xl" as="p" className="!text-white-A700 !font-sueellenfrancisco">
                    Need Your Heartful Help...
                  </Text>
                  <Heading size="5xl" as="h1" className="mt-[10px] !text-white-A700">
                    Become a Volunteer
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[100px] max-w-[1200px]">
            <div className="flex flex-row justify-start items-center w-full gap-[41px]">
              <div className="flex flex-col items-start justify-start w-[51%] gap-[25px]">
                <div className="flex flex-row justify-start w-[63%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text size="xl" as="p" className="!text-red-300 !font-sueellenfrancisco">
                      Help First
                    </Text>
                    <Heading size="4xl" as="h2" className="mt-[-17px]">
                      Let’s help together
                    </Heading>
                  </div>
                </div>
                <Text as="p" className="!text-gray-600">
                  Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book. <br />
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining when
                  an unknown printer took a galley of type and scrambled it to make a type specimen book. essentially.
                </Text>
                <Button className="uppercase font-medium min-w-[275px]">Call : +91 6353620712</Button>
              </div>
              <div className="flex flex-row justify-start w-[47%] py-[22px]">
                <div className="flex flex-row justify-start w-full mt-5">
                  <div className="flex flex-row justify-start w-full bg-gray-400">
                    <Img src="images/img_photo_359x556.png" alt="photo_three" className="w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-[41px]">
              <div className="flex flex-row justify-start w-[51%]">
                <div className="flex flex-row justify-start w-full bg-gray-400">
                  <Img src="images/img_photo_359x603.png" alt="photo_five" className="w-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[47%] gap-[13px]">
                <Heading size="4xl" as="h3" className="w-[79%]">
                  More People More impact
                </Heading>
                <Text as="p" className="!text-gray-600">
                  Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-end w-full p-[50px] bg-gray-200">
              <div className="flex flex-row justify-start items-start w-full mt-[75px] gap-10 mx-auto max-w-[1199px]">
                <div className="flex flex-col items-start justify-start w-[51%] gap-10">
                  <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <div className="flex flex-row justify-start w-[84%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text size="xl" as="p" className="!text-red-300 !font-sueellenfrancisco">
                            Help The People With us
                          </Text>
                          <Heading size="4xl" as="h2" className="mt-[-15px]">
                            Need Your Heartful Help
                          </Heading>
                        </div>
                      </div>
                      <Text as="p" className="!text-gray-600">
                        Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. <br />
                        Bring to the table win-win survival strategies to proactive domination. is on the runway heading
                        towards a streamlined cloud solution. User gener eal-time will have multiple touch points for
                        offshoring
                      </Text>
                    </div>
                    <div className="flex flex-col w-full gap-[9px]">
                      <div className="flex flex-row justify-start items-start w-full gap-[15px]">
                        <Heading
                          as="h3"
                          className="flex justify-center items-center h-16 w-16 !text-white-A700 bg-red-300 text-center rounded-[50%]"
                        >
                          01
                        </Heading>
                        <div className="flex flex-col items-center justify-start w-[87%] pb-[33px]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Heading as="h4">Create a personal profile</Heading>
                            <Text as="p" className="!text-gray-600">
                              Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="w-px h-px bg-gray-400" />
                      <div className="flex flex-row justify-start items-start w-full gap-[15px]">
                        <Heading
                          as="h5"
                          className="flex justify-center items-center h-16 w-16 !text-white-A700 bg-red-300 text-center rounded-[50%]"
                        >
                          02
                        </Heading>
                        <div className="flex flex-col items-center justify-start w-[87%] pb-[33px]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Heading as="h6">Add your organization</Heading>
                            <Text as="p" className="!text-gray-600">
                              Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="w-px h-px bg-gray-400" />
                      <div className="flex flex-row justify-start items-start w-full gap-[15px]">
                        <Heading
                          as="h4"
                          className="flex justify-center items-center h-16 w-16 !text-white-A700 bg-red-300 text-center rounded-[50%]"
                        >
                          03
                        </Heading>
                        <div className="flex flex-col items-center justify-start w-[87%] pb-[33px]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Heading as="h4">Add volunteer opportunities</Heading>
                            <Text as="p" className="!text-gray-600">
                              Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="w-px h-px bg-gray-400" />
                      <div className="flex flex-row justify-start items-start w-full gap-[15px]">
                        <Heading
                          as="h4"
                          className="flex justify-center items-center h-16 w-16 !text-white-A700 bg-red-300 text-center rounded-[50%]"
                        >
                          04
                        </Heading>
                        <div className="flex flex-col items-start justify-start w-[87%] gap-px">
                          <Heading as="h4">You are ready to recruit!</Heading>
                          <Text as="p" className="!text-gray-600">
                            Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <Button color="white_A700" className="ml-20 uppercase font-medium min-w-[200px]">
                    Get Started
                  </Button> */}
                </div>
                <div className="flex flex-col items-start justify-start w-[47%] mt-[52px] gap-5 p-[53px] bg-white-A700">
                  <div className="flex flex-col items-start justify-start ml-[3px] gap-px">
                    <Heading as="h4">Complete the Form</Heading>
                    <Text as="p" className="!text-red-300">
                      Fill Form and Beacame Volonteer
                    </Text>
                  </div><br/>
                  {/* <form method="POST"> */}
                  <div className="flex flex-col items-start justify-start w-[99%] ml-[3px] gap-[23px]">
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
                      onChange={handleChange}
                      required
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
                      onChange={handleChange}
                      required
                    /><br/>
                    <input
                      color="gray_100_03"
                      size="sm"
                      shape="square"
                      name="Address"
                      placeholder="Address*"
                      className="w-full"
                      value={user.Address}
                      autoComplete="off"
                      onChange={handleChange}
                      required
                    /><br/>
                    <textarea 
                      name="About" 
                      placeholder="About Occupation*" 
                      className="w-full text-gray-500"
                      value={user.About}
                      autoComplete="off"
                      onChange={handleChange}
                      required

                    /><br/>
                    <Button onClick={getData} className="!text-gray-100_03 uppercase font-medium min-w-[201px]">Submit</Button>
                  </div>
                    {/* </form> */}
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
