import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../css/bootstrap.min.css";
import "../css/custom.css";
import "../js/jquery-3.3.1.slim.min.js";
import "../js/jquery-3.3.1.min.js";
import { auth } from "../../../components/googleSignin/config"; // Assuming you have a Firebase auth instance
import { useNavigate } from "react-router-dom";

// import "../js/popper.min.js";
// import "../js/bootstrap.min.js";

const Dashboard = () => {
  
  const [users, setUsers] = useState([]);
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
        navigate('/adminhome')
      }
    });

    // Clean up the listener when component unmounts
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
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
              <h3>Humanity</h3>
            </h3>
          </div>
          <ul className="list-unstyled component m-0">
            <li className="active">
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
            <li className="">
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
                <h4 className="page-title">Dashboard</h4>
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
                        <h2 className="ml-lg-2">Authentication Users</h2>
                      </div>
                      <div className="col-sm-6 p-0 flex justify-content-lg-end justify-content-center">
                        
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                          <th>User ID</th>
                          <th>Email</th>
                          <th>Name</th>
                          <th>Created At</th>
                          <th>Last Login At</th>
                      </tr>
                    </thead>
                    <tbody>
                              {users.map((user) => (
                              <tr key={user.uid}>
                                <th>{user.uid}</th>
                                <th>{user.email}</th>
                                <th>{user.displayName}</th>
                                <th>{user.createdAt}</th>
                                <th>{user.lastLoginAt}</th>
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


// import React, { useEffect, useState } from "react";
// import "../css/bootstrap.min.css";
// import "../css/custom.css";
// import "../js/jquery-3.3.1.slim.min.js";
// import "../js/jquery-3.3.1.min.js";
// import { auth } from "../../../components/googleSignin/config"; // Assuming you have a Firebase auth instance
// import { useNavigate } from "react-router-dom";

// // import "../js/popper.min.js";
// // import "../js/bootstrap.min.js";

// const Dashboard = () => {
  
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     auth.signOut().then(() => {
//       alert("You are logged out")
//       navigate("/adminLogin");
//     }).catch(error => {
//       console.error('Error logging out:', error);
//     });
//   };

//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };
//   const [showdeleteModal, setdeleteShowModal] = useState(false);

//   const opendeleteModal = () => {
//     setdeleteShowModal(true);
//   };

//   const closedeleteModal = () => {
//     setdeleteShowModal(false);
//   };
//   const [showeditModal, seteditShowModal] = useState(false);

//   const openeditModal = () => {
//     seteditShowModal(true);
//   };

//   const closeeditModal = () => {
//     seteditShowModal(false);
//   };

//   useEffect(() => {
//     const handleMenubarClick = () => {
//       document.getElementById("sidebar").classList.toggle("active");
//       document.getElementById("content").classList.toggle("active");
//     };

//     const handleOverlayClick = () => {
//       document.getElementById("sidebar").classList.toggle("show-nav");
//       document.querySelector(".body-overlay").classList.toggle("show-nav");
//     };

//     document
//       .querySelector(".xp-menubar")
//       .addEventListener("click", handleMenubarClick);
//     document.querySelectorAll(".xp-menubar, .body-overlay").forEach((item) => {
//       item.addEventListener("click", handleOverlayClick);
//     });

//     return () => {
//       document
//         .querySelector(".xp-menubar")
//         .removeEventListener("click", handleMenubarClick);
//       document
//         .querySelectorAll(".xp-menubar, .body-overlay")
//         .forEach((item) => {
//           item.removeEventListener("click", handleOverlayClick);
//         });
//     };
//   }, []);

//   return (
//     <>
//       <meta charSet="utf-8" />
//       <meta
//         name="viewport"
//         content="width=device-width, initial-scale=1, shrink-to-fit=no"
//       />
//       <meta
//         name="viewport"
//         content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
//       />
//       <title>crud dashboard</title>
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
//         rel="stylesheet"
//       />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Material+Icons"
//         rel="stylesheet"
//       />
//       <div className="wrapper">
//         <div className="body-overlay" />
//         {/*-----sidebar--design----------*/}
//         <div id="sidebar">
//           <div className="sidebar-header">
//             <h3>
//               <img src="adminimg/logo.svg" className="img-fluid" />
//               <h3>Humanity</h3>
//             </h3>
//           </div>
//           <ul className="list-unstyled component m-0">
//             <li className="active">
//               <a href="/adminhome" className="dashboard">
//                 <i className="material-icons">dashboard</i>Dashboard (users){" "}
//               </a>
//             </li>
//             <li className="">
//               <a href="/admincontactus" className="">
//                 <i className="material-icons">border_color</i>Contact Us{" "}
//               </a>
//             </li>
//             <li className="">
//               <a href="/adminvolunteer" className="">
//                 <i className="material-icons">library_books</i>Volunteer{" "}
//               </a>
//             </li>
//             <li className="">
//               <a onClick={handleLogout} className="">
//                 <i className="material-icons">logout</i>Logout{" "}
//               </a>
//             </li>
//           </ul>
//         </div>
//         {/*-----sidebar--design- close---------*/}
//         {/*-----page-content start---------*/}
//         <div id="content">
//           {/*----top-navbar-start---------*/}
//           <div className="top-navbar">
//             <div className="xd-topbar">
//               <div className="row">
//                 <div className="col-2 col-md-1 col-lg-1 order-2 order-md-1 align-self-center">
//                   <div className="xp-menubar">
//                     <span className="material-icons text-white">
//                       signal_cellular_alt
//                     </span>
//                   </div>
//                 </div>
//                 <div className="col-md-5 col-lg-3 order-3 order-md-2">
//                   <div className="xp-searchbar">
//                     <form>
//                       <div className="input-group">
//                         <input
//                           type="search"
//                           className="form-control"
//                           placeholder="Search"
//                         />
//                         <div className="input-group-append">
//                           <button
//                             className="btn"
//                             type="submit"
//                             id="button-addon2"
//                           >
//                             Go
//                           </button>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//               <div className="xp-breadcrumbbar text-center">
//                 <h4 className="page-title">Dashboard</h4>
//               </div>
//             </div>
//           </div>
//           {/*----top-navbar-end---------*/}
//           {/*----main-content-start---------*/}
//           <div className="main-content">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="table-wrapper">
//                   <div className="table-title">
//                     <div className="row">
//                       <div className="col-sm-6 p-0 flex justify-content-lg-start justify-content-center">
//                         <h2 className="ml-lg-2">Manage Users</h2>
//                       </div>
//                       <div className="col-sm-6 p-0 flex justify-content-lg-end justify-content-center">
//                         <a
//                           href="#addEmployeeModal"
//                           className="btn btn-success"
//                           data-toggle="modal"
//                           onClick={openModal}
//                         >
//                           <i className="material-icons"></i>
//                           <span>Add New Employees</span>
//                         </a>
//                         <a
//                           href="#deleteEmployeeModal"
//                           className="btn btn-danger"
//                           data-toggle="modal"
//                           onClick={opendeleteModal}
//                         >
//                           <i className="material-icons"></i>
//                           <span>Delete</span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   <table className="table table-striped table-hover">
//                     <thead>
//                       <tr>
//                         <th>
//                           <span className="custom-checkbox">
//                             <input type="checkbox" id="selectAll" />
//                             <label htmlFor="selectAll" />
//                           </span>
//                         </th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Password</th>
//                         <th>Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <th>
//                           <span className="custom-checkbox">
//                             <input
//                               type="checkbox"
//                               id="checkbox1"
//                               name="option[]"
//                               defaultValue={1}
//                             />
//                             <label htmlFor="checkbox1" />
//                           </span>
//                         </th>
//                         <th>Thomas Hardy</th>
//                         <th>ThomasHardy@gmail.com</th>
//                         <th>erf23hnaskjhf2342kjnncjasc</th>
//                         <th>
//                           <a
//                             href="#editEmployeeModal"
//                             className="edit"
//                             data-toggle="modal"
//                           >
//                             <i
//                               className="material-icons"
//                               data-toggle="tooltip"
//                               title="Edit"
//                               onClick={openeditModal}
//                             >
//                               
//                             </i>
//                           </a>
//                           </th>
//                           <th>
//                           <a
//                             href="#deleteEmployeeModal"
//                             className="delete"
//                             data-toggle="modal"
//                           >
//                             <i
//                               className="material-icons"
//                               data-toggle="tooltip"
//                               title="Delete"
//                               onClick={opendeleteModal}
//                             >
//                               
//                             </i>
//                           </a>
//                         </th>
//                       </tr>                        
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               {/*--add-modal start-------*/}              
//       <div className={`modal fade ${showModal ? 'show' : ''}`} id="addEmployeeModal" tabIndex={-1} role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Add Employees</h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//                 onClick={closeModal}
//               >
//                 <span aria-hidden="true">×</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="form-group">
//                 <label>Name</label>
//                 <input className="form-control" required="" />
//               </div>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input className="form-control" required=""  />
//               </div>
//               <div className="form-group">
//                 <label>Address</label>
//                 <textarea
//                   className="form-control"
//                   required=""
//                   defaultValue={""}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Phone</label>
//                 <input className="form-control" required="" />
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"    
//                 className="btn btn-secondary"
//                 data-dismiss="modal"
//                 onClick={closeModal}
//               >
//                 Cancel
//               </button>
//               <button type="button" className="btn btn-success">
//                 Add
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//               {/*--edit-modal end-------*/}
//               {/*--edit-modal start-------*/}
//             <div className={`modal fade ${showeditModal ? 'show' : ''}`} id="editEmployeeModal" tabIndex={-1} role="dialog" style={{ display: showeditModal ? 'block' : 'none' }}>

//                 <div className="modal-dialog" role="document">
//                   <div className="modal-content">
//                     <div className="modal-header">
//                       <h5 className="modal-title">Edit Employees</h5>
//                       <button
//                         type="button"
//                         className="close"
//                         data-dismiss="modal"
//                         aria-label="Close"
//                         onClick={closeeditModal}
//                       >
//                         <span aria-hidden="true">×</span>
//                       </button>
//                     </div>
//                     <div className="modal-body">
//                       <div className="form-group">
//                         <label>Name</label>
//                         <input
//                           className="form-control"
//                           required=""
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label>Email</label>
//                         <input
//                           type="emil"
//                           className="form-control"
//                           required=""
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label>Address</label>
//                         <textarea
//                           className="form-control"
//                           required=""
//                           defaultValue={""}
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label>Phone</label>
//                         <input
//                           className="form-control"
//                           required=""
//                         />
//                       </div>
//                     </div>
//                     <div className="modal-footer">
//                       <button
//                         type="button"
//                         className="btn btn-secondary"
//                         data-dismiss="modal"
//                         onClick={closeeditModal}
//                       >
//                         Cancel
//                       </button>
//                       <button type="button" className="btn btn-success">
//                         Save
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/*--edit-modal end-------*/}
//               {/*--delete-modal start-------*/}
              
//                 <div className={`modal fade ${showdeleteModal ? 'show' : ''}`} id="deleteEmployeeModal" tabIndex={-1} role="dialog" style={{ display: showdeleteModal ? 'block' : 'none' }}>

//                 <div className="modal-dialog" role="document">
//                   <div className="modal-content">
//                     <div className="modal-header">
//                       <h5 className="modal-title">Delete Employees</h5>
//                       <button
//                         type="button"
//                         className="close"
//                         data-dismiss="modal"
//                         aria-label="Close"
//                         onClick={closedeleteModal}
//                       >
//                         <span aria-hidden="true">×</span>
//                       </button>
//                     </div>
//                     <div className="modal-body">
//                       <p>Are you sure you want to delete this Records</p>
//                       <p className="text-warning">
//                         <small>this action Cannot be Undone,</small>
//                       </p>
//                     </div>
//                     <div className="modal-footer">
//                       <button
//                         type="button"
//                         className="btn btn-secondary"
//                         data-dismiss="modal"
//                         onClick={closedeleteModal}
//                       >
//                         Cancel
//                       </button>
//                       <button type="button" className="btn btn-success">
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/*--edit-modal end-------*/}
//             </div>
//           </div>
//           {/*----main-content-end---------*/}
//         </div>
//       </div>

//       {/*-----complete html---------*/}
//     </>
//   );
// };

// export default Dashboard;