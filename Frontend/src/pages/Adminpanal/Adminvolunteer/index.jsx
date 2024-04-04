import React, { useEffect, useState } from "react";
import "../css/bootstrap.min.css";
import "../css/custom.css";
import "../js/jquery-3.3.1.slim.min.js";
import "../js/jquery-3.3.1.min.js";

import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from 'firebase/database';
import {app,auth} from '../../../components/googleSignin/config';

const Dashboard = () => {
  
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        // If user is not logged in, redirect to admin login page
        navigate("/adminLogin");
        alert("this facility is for admin if you admin then please login as admin otherwise not access")
      }
      else{        
        navigate('/adminvolunteer')
      }
    });

    // Clean up the listener when component unmounts
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    // Initialize Firebase app
    const db = getDatabase(app);

    // Reference to your Firebase Realtime Database
    const dbRef = ref(db, 'VolunteerData'); // Replace 'your_database_node' with your actual node name

    // Listen for changes to the data
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      // Process the fetched data
      const processedData = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      // Update state with processed data
      setTableData(processedData);
    });
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      alert("You are logged out")
      navigate("/adminLogin");
    }).catch(error => {
      console.error('Error logging out:', error);
    });
  };

  useEffect(() => {
    const handleMenubarClick = () => {
      document.getElementById("sidebar").classList.toggle("active");
      document.getElementById("content").classList.toggle("active");
    };

    const handleOverlayClick = () => {
      document.getElementById("sidebar").classList.toggle("show-nav");
      document.querySelector(".body-overlay").classList.toggle("show-nav");
    };

    document
      .querySelector(".xp-menubar")
      .addEventListener("click", handleMenubarClick);
    document.querySelectorAll(".xp-menubar, .body-overlay").forEach((item) => {
      item.addEventListener("click", handleOverlayClick);
    });

    return () => {
      
    };
  }, []);

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <title>crud dashboard</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="wrapper">
        <div className="body-overlay" />
        {/*-----sidebar--design----------*/}
        <div id="sidebar">
          <div className="sidebar-header">
            <h3>
              <img src="adminimg/logo.svg" className="img-fluid" />
              <span>Humanity</span>
            </h3>
          </div>
          <ul className="list-unstyled component m-0">
            <li>
              <a href="/adminhome" className="dashboard">
                <i className="material-icons">dashboard</i>Dashboard (users){" "}
              </a>
            </li>
            <li>
              <a href="/admindonation" className="">
                <i className="material-icons">donate</i>Donation data{" "}
              </a>
            </li>   
            <li className="">
              <a href="/admincontactus" className="">
                <i className="material-icons">border_color</i>Contact Us{" "}
              </a>
            </li>
            <li className="active">
              <a href="/adminvolunteer" className="">
                <i className="material-icons">library_books</i>Volunteer{" "}
              </a>
            </li>
            <li className="">
              <a onClick={handleLogout} className="">
                <i className="material-icons">logout</i>Logout{" "}
              </a>
            </li>
          </ul>
        </div>
        {/*-----sidebar--design- close---------*/}
        {/*-----page-content start---------*/}
        <div id="content">
          {/*----top-navbar-start---------*/}
          <div className="top-navbar">
            <div className="xd-topbar">
              <div className="row">
                <div className="col-2 col-md-1 col-lg-1 order-2 order-md-1 align-self-center">
                  <div className="xp-menubar">
                    <span className="material-icons text-white">
                      signal_cellular_alt
                    </span>
                  </div>
                </div>
                <div className="col-md-5 col-lg-3 order-3 order-md-2">
                  <div className="xp-searchbar">
                    <form>
                      <div className="input-group">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn"
                            type="submit"
                            id="button-addon2"
                          >
                            Go
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="xp-breadcrumbbar text-center">
                <h4 className="page-title">Volunteer</h4>
              </div>
            </div>
          </div>
          {/*----top-navbar-end---------*/}
          {/*----main-content-start---------*/}
          <div className="main-content">
            <div className="row">
              <div className="col-md-12">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-sm-6 p-0 flex justify-content-lg-start justify-content-center">
                        <h2 className="ml-lg-2">Volunteers</h2>
                      </div>
                      <div className="col-sm-6 p-0 flex justify-content-lg-end justify-content-center">
                        
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>    
                        <th>id</th>                    
                        <th>About</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Number</th>
                      </tr>
                    </thead>

                    <tbody>
                      {tableData.map((item) => (
                        <tr key={item.id}>
                          <th>{item.id}</th>
                          <th>{item.About}</th>
                          <th>{item.Address}</th>
                          <th>{item.Email}</th>
                          <th>{item.Name}</th>
                          <th>{item.Number}</th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>             
            </div>
          </div>
          {/*----main-content-end---------*/}
        </div>
      </div>

      {/*-----complete html---------*/}
    </>
  );
};

export default Dashboard;
