/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./component/Footer";
import axios from "axios";
import { BACKEND_URL } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=> store.user);


  const fetchUser = async () => {
    try {
      if(userData)
      {
        return;
      }
      const res = await axios.get(BACKEND_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res?.data?.data));
    } catch (err) {
      navigate("/login");
    }
  };

  useEffect(() => {
      fetchUser();
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
