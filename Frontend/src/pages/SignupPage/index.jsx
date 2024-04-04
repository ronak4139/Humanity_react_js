import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button, Input, Img } from "../../components";
import SignupPageDividers from "../../components/SignupPageDividers";
import { useNavigate } from "react-router-dom";
import {auth,provider} from "../../components/googleSignin/config";
import { signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupPagePage() {
  const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      const [error, setError] = useState("");
      const [successMessage, setSuccessMessage] = useState(""); // State for success message
    
      const handleChange = (e) => {
        // Check if event object or target is undefined
        if (!e || !e.target) {
          console.error('Event object or target is undefined:', e);
          return;
        }
      
        // Destructure 'name' and 'value' from event target
        const { name, value } = e.target;
        
        // Update the state with the new value
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          return;
        }
    
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            const user = userCredential.user;
            // Optionally, update user profile with name
            setSuccessMessage("User created successfully"); // Set success message
            navigate("/");
          })
          .catch((error) => {
            setError(error.message);
          });
      };

  const [value, setValue] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      navigate('/homepage');
    }
  }, [navigate]);

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const email = data.user.email;
        localStorage.setItem("email", email);
        setValue(email);
        navigate("/homepage");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  return (
    <>

      <Helmet>
        <title>Humanity</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full pt-[3px] bg-white-A700">
        <div className="flex flex-row justify-start w-full pl-[75px] pr-14 py-[75px] bg-white-A700 rounded-[20px]">
          <div className="flex flex-row justify-between items-start w-full mb-[77px] mx-auto max-w-[1061px]">
            <Img src="images/img_photo.png" alt="photo_one" className="w-1/2 mt-3.5 object-cover rounded-[30px]" />
            <div className="flex flex-col items-center justify-start w-[43%] gap-6">
              <div className="flex flex-col items-center justify-start w-full gap-[29px]">                
                <div className="flex flex-row justify-center w-full">
                  <a href="#" className="ml-px">
                    <Heading size="3xl" as="h1" className="!text-gray-900 tracking-[-1.44px] text-center">
                      Create an account
                    </Heading>
                  </a>
                </div>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-center items-center w-full pt-[15px] pb-3.5 gap-4 px-[15px] border-gray-300_02 border-t border-l border-b-2 border-r border-solid bg-white-A700 rounded-[15px]">
                    <Img src="images/img_rectangle_6.png" alt="image" className="w-5 ml-[113px] object-cover" />
                    <button 
                      onClick={handleClick}  className="mr-[113px]">
                      <p size="md" as="h2" className="!text-blue_gray-800_01 text-center">
                        Sign up with Google
                      </p>
                    </button>
                  </div>
                </div>
                     {error && (
                       <div className="text-red-500 text-sm mt-2">{error}</div>
                     )}
                <SignupPageDividers className="flex flex-row justify-center w-full" />
                <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                    <Text size="xs" as="p" className="!text-gray-900_01">
                      Name
                    </Text>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      name="name"                      
                      placeholder="Enter Your Full Name"
                      className="w-full font-inter font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
                    />                    
                  </div>
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
                  <div className="flex flex-row justify-start w-full">
                    <Text size="xs" as="p" className="!text-gray-400_02">
                      Must be at least 8 characters
                    </Text>
                  </div>
                
                  <div className="flex flex-col items-center justify-start w-full gap-2.5">
                <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                  <Text size="xs" as="p" className="!text-gray-900_01">
                    Conform Password
                  </Text>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                      onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full font-inter font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
                  />
                </div>
                <div className="flex flex-row justify-start w-full">
                  <Text size="xs" as="p" className="mt-0.5 !text-gray-400_02">
                    Conform password same as password
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[26px]">
                <Button
                  type="submit"
                  color="amber_700"
                  size="lg"
                  className="w-full font-semibold outline-deep_orange-900 outline-t-[1] outline-l-[1] outline-b-[2] outline-r-[1] "
                  >
                  Create account
                </Button>
                <div className="flex flex-row justify-start w-[42%] gap-1">
                  <div className="flex flex-row justify-start w-[76%]">
                    <Text size="xs" as="p" className="mt-0.5 !text-black-900 !font-normal">
                      Already an member?
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start w-[23%]">
                    <div className="flex flex-row justify-start w-full">
                      <a href="/" className="mt-0.5">
                        <Heading size="xs" as="h3" className="!text-amber-700 text-center">
                          Login
                        </Heading>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </form>
              </div>              
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { Heading, Text, Button, Input, Img } from "../../components";
// import SignupPageDividers from "../../components/SignupPageDividers";
// import { useNavigate } from "react-router-dom";
// import {auth,provider} from "../../components/googleSignin/config";
// import { signInWithPopup } from "firebase/auth";


// export default function SignupPagePage() {

//   const [value, setValue] = useState('');
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     const email = localStorage.getItem('email');
//     if (email) {
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
  
//   return (
//     <>
//       <Helmet>
//         <title>Humanity</title>
//         <meta name="description" content="Web site created using create-react-app" />
//       </Helmet>
//       <div className="flex flex-row justify-center w-full pt-[3px] bg-white-A700">
//         <div className="flex flex-row justify-start w-full pl-[75px] pr-14 py-[75px] bg-white-A700 rounded-[20px]">
//           <div className="flex flex-row justify-between items-start w-full mb-[77px] mx-auto max-w-[1061px]">
//             <Img src="images/img_photo.png" alt="photo_one" className="w-1/2 mt-3.5 object-cover rounded-[30px]" />
//             <div className="flex flex-col items-center justify-start w-[43%] gap-6">
//               <div className="flex flex-col items-center justify-start w-full gap-[29px]">                
//                 <div className="flex flex-row justify-center w-full">
//                   <a href="#" className="ml-px">
//                     <Heading size="3xl" as="h1" className="!text-gray-900 tracking-[-1.44px] text-center">
//                       Create an account
//                     </Heading>
//                   </a>
//                 </div>
//                 <div className="flex flex-row justify-center w-full">
//                   <div className="flex flex-row justify-center items-center w-full pt-[15px] pb-3.5 gap-4 px-[15px] border-gray-300_02 border-t border-l border-b-2 border-r border-solid bg-white-A700 rounded-[15px]">
//                     <Img src="images/img_rectangle_6.png" alt="image" className="w-5 ml-[113px] object-cover" />
//                     <button 
//                       onClick={handleClick}  className="mr-[113px]">
//                       <p size="md" as="h2" className="!text-blue_gray-800_01 text-center">
//                         Sign up with Google
//                       </p>
//                     </button>
//                   </div>
//                 </div>
//                 <SignupPageDividers className="flex flex-row justify-center w-full" />
//                 <div className="flex flex-col items-center justify-start w-full gap-4">

//                   <div className="flex flex-col items-start justify-start w-full gap-[5px]">
//                     <Text size="xs" as="p" className="!text-gray-900_01">
//                       Name
//                     </Text>
//                     <Input
//                       type="text"
//                       name="name"                      
//                       placeholder="Enter Your Full Name"
//                       className="w-full font-inter font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
//                     />                    
//                   </div>
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
//                   <div className="flex flex-row justify-start w-full">
//                     <Text size="xs" as="p" className="!text-gray-400_02">
//                       Must be at least 8 characters
//                     </Text>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col items-center justify-start w-full gap-2.5">
//                 <div className="flex flex-col items-start justify-start w-full gap-[5px]">
//                   <Text size="xs" as="p" className="!text-gray-900_01">
//                     Conform Password
//                   </Text>
//                   <Input
//                     type="password"
//                     name="confirmPassword"
//                     placeholder="••••••••"
//                     className="w-full font-inter font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
//                   />
//                 </div>
//                 <div className="flex flex-row justify-start w-full">
//                   <Text size="xs" as="p" className="mt-0.5 !text-gray-400_02">
//                     Conform password same as password
//                   </Text>
//                 </div>
//               </div>
//               <div className="flex flex-col items-center justify-start w-full gap-[26px]">
//                 <Button
//                   type="submit"
//                   color="amber_700"
//                   size="lg"
//                   className="w-full font-semibold outline-deep_orange-900 outline-t-[1] outline-l-[1] outline-b-[2] outline-r-[1] "
//                   >
//                   Create account
//                 </Button>
//                 <div className="flex flex-row justify-start w-[42%] gap-1">
//                   <div className="flex flex-row justify-start w-[76%]">
//                     <Text size="xs" as="p" className="mt-0.5 !text-black-900 !font-normal">
//                       Already an member?
//                     </Text>
//                   </div>
//                   <div className="flex flex-row justify-start w-[23%]">
//                     <div className="flex flex-row justify-start w-full">
//                       <a href="/" className="mt-0.5">
//                         <Heading size="xs" as="h3" className="!text-amber-700 text-center">
//                           Login
//                         </Heading>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }








// import React, { useState } from "react";
// import { Helmet } from "react-helmet";
// import { Heading, Text, Button, Input, Img } from "../../components";
// import SignupPageDividers from "../../components/SignupPageDividers";
// import { Navigate, useNavigate } from "react-router-dom";
// import { auth } from "../../components/googleSignin/config";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// export default function SignupPagePage() {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState(""); // State for success message
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     // Check if event object or target is undefined
//     if (!e || !e.target) {
//       console.error('Event object or target is undefined:', e);
//       return;
//     }
  
//     // Destructure 'name' and 'value' from event target
//     const { name, value } = e.target;
    
//     // Update the state with the new value
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     createUserWithEmailAndPassword(auth, formData.email, formData.password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         // Optionally, update user profile with name
//         setSuccessMessage("User created successfully"); // Set success message
//         navigate("/");
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

  

//   return (
//     <>
//       <Helmet>
//         <title>Humanity</title>
//         <meta name="description" content="Web site created using create-react-app" />
//       </Helmet>
//       <div className="flex flex-row justify-center w-full pt-[3px] bg-white-A700">
//         <div className="flex flex-row justify-start w-full pl-[75px] pr-14 py-[75px] bg-white-A700 rounded-[20px]">
//           <div className="flex flex-row justify-between items-start w-full mb-[77px] mx-auto max-w-[1061px]">
//             <Img src="images/img_photo.png" alt="photo_one" className="w-1/2 mt-3.5 object-cover rounded-[30px]" />
//             <div className="flex flex-col items-center justify-start w-[43%] gap-6">
//               <div className="flex flex-col items-center justify-start w-full gap-[29px]">
//                 <div className="flex flex-row justify-center w-full">
//                   <Heading size="3xl" as="h1" className="!text-gray-900 tracking-[-1.44px] text-center">
//                     Create an account
//                   </Heading>
//                 </div>
//                 <div className="flex flex-col items-center justify-start w-full gap-4">
//                   <form onSubmit={handleSubmit}>
//                     <div className="flex flex-col items-start justify-start w-full gap-[5px]">
//                       <Text size="xs" as="p" className="!text-gray-900_01">
//                         Name
//                       </Text>
//                       <input
//                         type="text"
//                         name="fullname"
//                         value={formData.fullname}
//                         onChange={(e) => handleChange(e)} // Make sure handleChange is assigned here
//                         placeholder="Enter Your Full Name"
//                         className="w-full font-inter font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
//                       />
//                     </div>
//                     <div className="flex flex-col items-start justify-start w-full gap-[5px]">
//                       <Text size="xs" as="p" className="!text-gray-900_01">
//                         Email
//                       </Text>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={(e) => handleChange(e)}
//                         placeholder="you@domain.com"
//                         className="w-full font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
//                       />
//                     </div>
//                     <div className="flex flex-col items-start justify-start w-full gap-[5px]">
//                       <Text size="xs" as="p" className="!text-gray-900_01">
//                         Password
//                       </Text>
//                       <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         placeholder="••••••••"
//                         className="w-full font-inter font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
//                       />
//                     </div>
//                     <div className="flex flex-col items-start justify-start w-full gap-[5px]">
//                       <Text size="xs" as="p" className="!text-gray-900_01">
//                         Confirm Password
//                       </Text>
//                       <input
//                         type="password"
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={(e) => handleChange(e)}
//                         placeholder="••••••••"
//                         className="w-full font-inter font-medium border-gray-300_02 border-t border-l border-b-2 border-r border-solid"
//                       />
//                     </div>
//                     <div className="flex flex-row justify-start w-full">
//                       <Text size="xs" as="p" className="!text-gray-400_02">
//                         Must be at least 8 characters
//                       </Text>
//                     </div>
//                     {error && (
//                       <div className="text-red-500 text-sm mt-2">{error}</div>
//                     )}
//                     <Button
//                       type="submit"
//                       color="amber_700"
//                       size="lg"
//                       className="w-full font-semibold outline-deep_orange-900 outline-t-[1] outline-l-[1] outline-b-[2] outline-r-[1] "
//                     >
//                       Create account
//                     </Button>
//                   </form>
//                 </div>
//               </div>
//               <SignupPageDividers className="flex flex-row justify-center w-full" />
//               <div className="flex flex-col items-center justify-start w-full gap-[26px]">
//                 <div className="flex flex-row justify-start w-[42%] gap-1">
//                   <div className="flex flex-row justify-start w-[76%]">
//                     <Text size="xs" as="p" className="mt-0.5 !text-black-900 !font-normal">
//                       Already a member?
//                     </Text>
//                   </div>
//                   <div className="flex flex-row justify-start w-[23%]">
//                     <div className="flex flex-row justify-start w-full">
//                       <a href="/" className="mt-0.5">
//                         <Heading size="xs" as="h3" className="!text-amber-700 text-center">
//                           Login
//                         </Heading>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
