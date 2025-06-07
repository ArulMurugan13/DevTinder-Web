/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/constants";

const Login = () => {
  const loggedInUser = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("Arul@gmail.com");
  const [password, setpassword] = useState("ArulMurugan@13");
  const [error, SetError] = useState("");
  const [isSignup, setisSignup] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BACKEND_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/");
    } catch (err) {
      SetError(err?.data);
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BACKEND_URL + "/signup",
        { fname, lname, email, password },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (loggedInUser && !isSignup) {
      navigate("/"); // Change this to your feed page path
    }
  }, [loggedInUser, navigate , isSignup]);
  return (
    <div className="flex  justify-center pt-24">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/4  border p-5 justify-center">
        <legend className="fieldset-legend text-xl ">
          {isSignup ? "Sign Up" : "Sign In"}
        </legend>

        {isSignup && (
          <>
            <label className="label">First Name</label>
            <input
              type="text"
              className="input"
              placeholder=""
              onChange={(e) => setfname(e.target.value)}
            />

            <label className="label">Last Name</label>
            <input
              type="text"
              className="input"
              placeholder=""
              onChange={(e) => setlname(e.target.value)}
            />
          </>
        )}
        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder=""
          onChange={(e) => setemail(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder=""
          onChange={(e) => setpassword(e.target.value)}
        />

        <p className="bg-red-500">{error}</p>
        <button
          className="btn btn-neutral mt-4 w-full text-sm "
          onClick={isSignup ? handleSignUp : handleLogin}
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-sm mt-5">
          {isSignup ? "Existing User!! " : "New to DevTinder? "}

          <button
            onClick={() => setisSignup((val) => !val)}
            className="text-opacity-50"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </fieldset>
    </div>
  );
};

export default Login;
