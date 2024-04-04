// import React from "react";
// import { Helmet } from "react-helmet";
// import { Button, Input, Text, Heading, Img } from "../../components";
// import { Link } from "react-router-dom";

// export default function AdminLoginPage() {
//   return (
//     <>
//       <Helmet>
//         <title>Humanity</title>
//         <meta name="description" content="Web site created using create-react-app" />
//       </Helmet>
//       <div className="flex flex-row justify-start w-full pb-10 bg-white-A700">
//         <div className="flex flex-row justify-end w-[98%] mb-[55px] pl-14 pr-[68px] py-[68px] bg-white-A700 rounded-[20px]">
//           <div className="flex flex-row justify-between items-center w-full mt-9 mx-auto max-w-[1122px]">
//             <div className="flex flex-col items-center justify-start bg-gray-400 rounded-[30px] ">
//               <Img src="images/img_photo_755x560.png" alt="photo_one" className=" w-80  object-contain rounded-[30px]" />
//             </div>
//             <div className="flex flex-col items-end justify-start w-[41%] gap-[43px]">
//               <div className="flex flex-col items-center justify-start w-full gap-[22px]">
//                 <div className="flex flex-row justify-center w-full">
//                   <Heading size="3xl" as="h1" className="mx-[115px] !text-gray-900 tracking-[-1.44px] text-center">
//                     Admin Login
//                   </Heading>
//                 </div>
//                 <div className="flex flex-col items-center justify-start w-full pb-9 gap-4">
//                   <div className="flex flex-col items-start justify-start w-full gap-[5px]">
//                     <Text size="xs" as="p" className="!text-gray-900_01">
//                       Email
//                     </Text>
//                     <Input
//                       type="email"
//                       name="email"
//                       placeholder="you@domain.com"
//                       className="w-full font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
//                     />
//                   </div>
//                   <div className="flex flex-col items-start justify-start w-full gap-[5px]">
//                     <Text size="xs" as="p" className="!text-gray-900_01">
//                       Password
//                     </Text>
//                     <Input
//                       type="password"
//                       name="password"
//                       placeholder="••••••••"
//                       className="w-full font-inter font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
//                     />
//                   </div>
//                 </div>
//               </div>
//              <Button color="amber_700" size="lg" className="w-full font-semibold rounded-lg">
//              <a href='/adminhome'> Log in </a>
//               </Button>              
//               <a href="/">
//               <Button color="green_900" size="lg" className="font-semibold min-w-[147px] rounded-lg">
//                 user login
//               </Button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text, Input } from "../../components";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../components/googleSignin/config"; // Assuming you have a Firebase auth instance

// Define the specific admin email and password
const ADMIN_EMAIL = "adminronak@gmail.com";
const ADMIN_PASSWORD = "admin123456";

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/adminhome"); // Redirect if user is already logged in
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Admin login successful")
        navigate("/adminhome");
      } catch (error) {
        setError(error.message);
      }
    } else {
      alert("No admin found with provided credentials.");
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Humanity</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-start w-full pb-10 bg-white-A700">
        <div className="flex flex-row justify-end w-[98%] mb-[55px] pl-14 pr-[68px] py-[68px] bg-white-A700 rounded-[20px]">
          <div className="flex flex-row justify-between items-center w-full mt-9 mx-auto max-w-[1122px]">
            <div className="flex flex-col items-center justify-start bg-gray-400 rounded-[30px] ">
              <Img src="images/img_photo_755x560.png" alt="photo_one" className=" w-80  object-contain rounded-[30px]" />
            </div>
            <div className="flex flex-col items-end justify-start w-[41%] gap-[43px]">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center justify-start w-full gap-[22px]">
                <div className="flex flex-row justify-center w-full">
                  <Heading size="3xl" as="h1" className="mx-[115px] !text-gray-900 tracking-[-1.44px] text-center">
                    Admin Login
                  </Heading>
                </div><br />
                <div className="flex flex-col items-center justify-start w-full pb-9 gap-4">
                  <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                    <Text size="xs" as="p" className="!text-gray-900_01">
                      Email
                    </Text>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className="w-full font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
                      /><br />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                    <Text size="xs" as="p" className="!text-gray-900_01">
                      Password
                    </Text>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="w-full font-inter font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
                      />
                  </div>
                </div>
              </div>
             <Button type="submit" color="amber_700" size="lg" className="w-full font-semibold rounded-lg">
              Log in 
              </Button>              
            </form>
              <a href="/">
              <Button color="green_900" size="lg" className="font-semibold min-w-[147px] rounded-lg">
                user login
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
