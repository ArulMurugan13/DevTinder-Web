import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/constants";


const Login = () => {

  
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [email, setemail] = useState("Arul@gmail.com");
  const [password, setpassword] = useState("ArulMurugan@13");
  
  
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BACKEND_URL+"/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(res.data);
      dispatch( addUser(res.data));
      navigate("/");
      
     
    } catch (err) {
      console.error(err);
    }
  };

  
 

  return (
    <div className="flex  justify-center pt-24">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/4 border p-4 justify-center">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />

        <button className="btn btn-neutral mt-4 w-full " onClick={handleLogin}>
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
