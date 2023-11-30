import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Adminlogin from "./components/Adminlogin";
import Userlogin from "./components/Userlogin";
import Admindashboard from "./components/Admindashboard";
import Userdashboard from "./components/Userdashboard";
import Adminrequest from "./components/Adminrequest";
import Toaster from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateNewUser from "./components/CreateNewUser";
import UserRequests from "./components/PendingInventoryRequests";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Footer from "./components/Footer";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Services from "./components/Services";
import InventoryRequest from "./components/Inventory/InventoryrequestbyUser";
import MyinventoryUser from "./components/Inventory/MyinventoryUser";
import MyRequests from "./components/Inventory/MyRequests";
import PendingInventoryRequests from "./components/PendingInventoryRequests";
import ProtectedRouteUser from "./components/ProtectedRouteUser";
import ProtectedRouteAdmin from "./components/ProtectedRoutsAdmin";
import { ShopContextProvider } from "./components/context/shop-context";
import { useState,useEffect } from "react";
import Arrow from "./components/Arrow";

import MySkeleton from "./components/MySkeleton";


function App() {


  return (
    <>
      {/* <div><Toaster/></div> */}
      <ShopContextProvider>
      {/* <MySkeleton/> */}
      <Router>
          {/* {!(
             window.location.pathname === "http://localhost:5173/adminlogin" ||
             window.location.pathname === "http://localhost:5173/userlogin"
          ) && <Navbar />} */}
              <Navbar/>
        <Routes>

             {/* Common Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
       
          {/* Protected Routes User*/}
          <Route path="/" element={<ProtectedRouteUser />} >
            <Route path="userdashboard" element={<Userdashboard />} />
            <Route path="/requestitem" element={<InventoryRequest />} />
            <Route path="/myinventory" element={<MyinventoryUser />} />
            <Route path="/myrequests" element={<MyRequests />} />
            <Route path="/pendingInventoryRequests" element={<PendingInventoryRequests />} />
         </Route>

          {/* Protected Routes Admin */}
          <Route path="/" element={<ProtectedRouteAdmin />} >
            <Route path="admindashboard" element={<Admindashboard />} />
            <Route path="/adminrequest" element={<Adminrequest />} />
            <Route path="/createNewUser" element={<CreateNewUser />} />
            <Route path="/userrequests" element={<PendingInventoryRequests />} />
            <Route path="/admin/users" element={<Users />} />
          </Route>

                 <Route path="*" element={<Home />} />
         </Routes>

         {/* {!(
          window.location.pathname === "/adminlogin" ||
          window.location.pathname === "/userlogin"
        ) && <Footer />} */}
            <Footer />
        </Router>
      <ToastContainer />
       <Arrow  />
      </ShopContextProvider>
    </>
  );
}

export default App;
