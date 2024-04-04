import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import SignupPage from "pages/SignupPage";
import HomePage from "pages/HomePage";
import Aboutus from "pages/Aboutus";
import Causes from "pages/Causes";
import CausesSingle from "pages/CausesSingle";
import Donationnow from "pages/Donationnow";
import Team from "pages/Team";
import Volunteer from "pages/Volunteer";
import BlogSingle from "pages/BlogSingle";
import ContactUs from "pages/ContactUs";
import SigninPage from "pages/SigninPage";
import AdminLogin from "pages/AdminLogin";
import ForgetPassword from "pages/ForgetPassword";

import Pymentsuccess from "pages/pymentsuccess";
import Adminhome from "pages/Adminpanal/Adminhome";
import Admindonation from "pages/Adminpanal/AdminDonation";
import Admincontactus from "pages/Adminpanal/Admincontactus";
import Adminvolunteer from "pages/Adminpanal/Adminvolunteer";

const ProjectRoutes = () => {
  let element = useRoutes([
    // { path: "*", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <SigninPage />,
    },    
    {
      path: "/signuppage",
      element: <SignupPage />,
    },
    {
      path: "homepage",
      element: <HomePage />,
    },
    {
      path: "aboutus",
      element: <Aboutus />,
    },
    {
      path: "causes",
      element: <Causes />,
    },
    {
      path: "causessingle",
      element: <CausesSingle />,
    },
    {
      path: "donationnow",
      element: <Donationnow />,
    },
    {
      path: "team",
      element: <Team />,
    },
    {
      path: "volunteer",
      element: <Volunteer />,
    },
    {
      path: "blogsingle",
      element: <BlogSingle />,
    },
    {
      path: "contactus",
      element: <ContactUs />,
    },    
    {
      path: "adminlogin",
      element: <AdminLogin />,
    },
    {
      path: "forgetpassword",
      element: <ForgetPassword />,
    },
    {
      path: "adminhome",
      element: <Adminhome />,
    },
    {
      path: "admindonation",
      element: <Admindonation />,
    },
    {
      path: "admincontactus",
      element: <Admincontactus />,
    },
    {
      path: "adminvolunteer",
      element: <Adminvolunteer />,
    },    
    {
      path: "pymentsuccess",
      element: <Pymentsuccess />,
    },    
  ]);

  return element;
};

export default ProjectRoutes;
