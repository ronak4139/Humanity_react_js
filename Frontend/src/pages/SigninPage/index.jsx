// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { Button, Img, Heading, Text, Input } from "../../components";
// import SignupPageDividers from "../../components/SignupPageDividers";
// import {auth,provider} from "../../components/googleSignin/config";
// import { signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// //import { useHistory } from 'react-router-dom';

// export default function SigninPagePage() {
//   const [value, setValue] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const email = localStorage.getItem('email');
//     if (email) {
//       // Redirect to homepage if email exists in localStorage
//       navigate('/homepage');
//     }
//   }, [navigate]);

//   const handleClick = () => {
//     signInWithPopup(auth, provider)
//       .then((data) => {
//         const email = data.user.email;
//         localStorage.setItem("email", email);
//         setValue(email);
//         navigate("/homepage");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   // const [value,setValue]=useState('')
//   // const handleClick = () => {
//   //   signInWithPopup(auth, provider).then((data) => {
//   //         setValue(data.user.email)
//   //         localStorage.setItem("email",data.user.email)
//   //   })
//   // }
//   // useEffect(() => {
//   //   setValue(localStorage.getItem('email'));
//   // })
//   return (
//     <>
      
//       <Helmet>
//         <title>Humanity</title>
//         <meta name="description" content="Web site created using create-react-app" />
//       </Helmet>
//       <div className="flex flex-row justify-start w-full pb-[81px] bg-white-A700">
//         <div className="flex flex-row justify-end w-full pl-14 pr-[57px] py-[57px] mx-auto bg-white-A700 max-w-[1337px] rounded-[20px]">
//           <div className="flex flex-row justify-between items-center w-[91%] mt-[27px] mb-[55px]">
//             <Img src="images/img_photo_747x484.png" alt="photo_one" className="w-[44%] object-cover rounded-[30px]" />
//             <div className="flex flex-col items-start justify-start w-[48%]">
//               <div className="flex flex-col items-center justify-start w-[86%] gap-[22px]">
//                 <div className="flex flex-row justify-center w-full">
//                   <a href="#" className="mx-[167px]">
//                     <Heading size="3xl" as="h1" className="!text-gray-900 tracking-[-1.44px] text-center">
//                       Sign in
//                     </Heading>
//                   </a>
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
//               <a href="/ForgetPassword">
//               <Heading size="s" as="h2" className="mt-0.5 ml-[301px] !text-black-900 text-center">
//                 Forget Password ?
//               </Heading>
//               </a>
//               <a href="/HomePage">
//               <Button
//                 color="green_900"
//                 size="lg"
//                 className="mt-4 font-semibold outline-deep_orange-900 outline-t-[1] outline-l-[1] outline-b-[2] outline-r-[1] outline min-w-[454px] rounded-lg"
//               >
//                 Log in
//               </Button>
//                 </a>
//               <div className="flex flex-row justify-center w-[86%] mt-[30px]">
//                 <div className="flex flex-row justify-start w-[44%] gap-1">
//                   <div className="flex flex-row justify-start w-[73%]">
//                     <Text size="xs" as="p" className="mt-0.5 !text-black-900 !font-normal">
//                       Already an member?
//                     </Text>
//                   </div>
//                   <div className="flex flex-row justify-start w-[26%]">
//                     <div className="flex flex-row justify-start w-full">
//                       <a href="/signuppage" className="mt-0.5">
//                         <Heading size="xs" as="h3" className="!text-green-900 text-center">
//                           sign_up
//                         </Heading>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col items-center justify-start w-[86%] mt-[31px] gap-4">
//                 <SignupPageDividers className="flex flex-row justify-center w-full" />
//                 {/* {value?<HomePage/>: */}
//                 <Button
//                 type="submit"
//                   onClick={handleClick}
//                   color="white_A700"
//                   size="lg"
//                   leftIcon={<Img src="images/img_rectangle_6.png" alt="Rectangle 6" className="w-5 h-5" />}
//                   className="w-full gap-4 !text-blue_gray-800_01 font-semibold border-gray-300_02 border-t border-l border-b-2 border-r border-solid rounded-[15px]"
//                 >
//                   Sign up with Google
//                 </Button>
//                 {/* } */}
//               </div>
//               <a href="/AdminLogin">
//               <Button
//                 color="amber_700"
//                 size="lg"
//                 className="mt-[57px] ml-[381px] font-semibold min-w-[147px] rounded-lg"
//               >
//                 Admin_Login
//               </Button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState,useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text, Input } from "../../components";
import SignupPageDividers from "../../components/SignupPageDividers";
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth,provider } from "../../components/googleSignin/config";

export default function SigninPagePage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail("");
      }
    });

    // Cleanup function to unsubscribe from auth state listener
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login successful");
      navigate("/homepage");
    } catch (error) {
      setError(error.message);
    }
  };

  const [value, setValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      // Redirect to homepage if email exists in localStorage
      navigate('/homepage');
    }
  }, [navigate]);

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const email = data.user.email;
        localStorage.setItem("email", email);
        setValue(email);
        alert("Login success!");
        navigate("/homepage");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const [value,setValue]=useState('')
  // const handleClick = () => {
  //   signInWithPopup(auth, provider).then((data) => {
  //         setValue(data.user.email)
  //         localStorage.setItem("email",data.user.email)
  //   })
  // }
  // useEffect(() => {
  //   setValue(localStorage.getItem('email'));
  // })

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login to your account" />
      </Helmet>
      <div className="flex flex-row justify-start w-full pb-[81px] bg-white-A700">
        <div className="flex flex-row justify-end w-full pl-14 pr-[57px] py-[57px] mx-auto bg-white-A700 max-w-[1337px] rounded-[20px]">
          <div className="flex flex-row justify-between items-center w-[91%] mt-[27px] mb-[55px]">
            <Img src="images/img_photo_747x484.png" alt="photo_one" className="w-[44%] object-cover rounded-[30px]" />
            <div className="flex flex-col items-start justify-start w-[48%]">
              <div className="flex flex-col items-center justify-start w-[86%] gap-[22px]">
                <div className="flex flex-row justify-center w-full">
                  <Heading size="3xl" as="h1" className="!text-gray-900 tracking-[-1.44px] text-center">
                    Sign in
                  </Heading>
                </div>
                <div className="flex flex-col items-center justify-start w-full pb-9 gap-4">
                  <form onSubmit={handleSubmit}>
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
                      />
                    </div>
                    <br></br>
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
                    {error && (
                      <div className="text-red-500 text-sm mt-2">{error}</div>
                    )}
                    <Button
                      type="submit"
                      color="green_900"
                      size="lg"
                      className="mt-4 font-semibold min-w-[454px] rounded-lg"
                    >
                      Log in
                    </Button>
                  </form>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[86%] mt-[30px]">
                <div className="flex flex-row justify-start w-[44%] gap-1">
                  <div className="flex flex-row justify-start w-[73%]">
                    <Text size="xs" as="p" className="mt-0.5 !text-black-900 !font-normal">
                      Already a member?
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start w-[26%]">
                    <div className="flex flex-row justify-start w-full">
                      <a href="/signuppage" className="mt-0.5">
                        <Heading size="xs" as="h3" className="!text-green-900 text-center">
                          Sign up
                        </Heading>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[86%] mt-[31px] gap-4">
               <SignupPageDividers className="flex flex-row justify-center w-full" />                 
               {/* {value?<HomePage/>: */}
                <Button
                type="submit"
                onClick={handleClick}
                  color="white_A700"
                  size="lg"
                  leftIcon={<Img src="images/img_rectangle_6.png" alt="Rectangle 6" className="w-5 h-5" />}
                  className="w-full gap-4 !text-blue_gray-800_01 font-semibold border-gray-300_02 border-t border-l border-b-2 border-r border-solid rounded-[15px]"
                >
                  Sign up with Google
                </Button>
                {/* } */}
              </div>
              <a href="/AdminLogin">
              <Button
                color="amber_700"
                size="lg"
                className="mt-[57px] ml-[381px] font-semibold min-w-[147px] rounded-lg"
              >
                Admin_Login
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}