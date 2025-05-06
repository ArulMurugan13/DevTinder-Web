/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setemailId] = useState("Arul@gmail.com");
  const [password, setpassword] = useState("ArulMurugan@13");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 justify-center">
      <legend className="fieldset-legend">Login</legend>

      <label className="label">Email</label>
      <input
        type="email"
        className="input"
        placeholder="Email"
        onChange={(e) => setemailId(e.target.value)}
      />

      <label className="label">Password</label>
      <input
        type="password"
        className="input"
        placeholder="Password"
        onChange={(e) => setpassword(e.target.value)}
      />

      <button className="btn btn-neutral mt-4" onClick={handleLogin}>
        Login
      </button>
    </fieldset>
  );
};

export default Login;
