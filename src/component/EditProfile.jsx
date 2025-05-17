/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import FeedCard from "./FeedCard";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();

  const [fname, setfname] = useState(user.fname);
  const [lname, setlname] = useState(user.lname);
  const [gender, setgender] = useState(user.gender);
  const [age, setage] = useState(user.age);
  const [about, setabout] = useState(user.about);
  const [skills, setskills] = useState(user.skills);
  const [photourl, setphotourl] = useState(user.photourl);

  const handleSave = async () => {
    try {
      const res = await axios.patch(
        BACKEND_URL + "/profile/edit",
        { fname, lname, gender, age, about, skills, photourl },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex justify-center items-stretch gap-8 mt-10 px-6 h-3/4">
      {/* Form Section */}
      <div className="w-[400px]">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 shadow-md">
          <label className="label">First Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          />

          <label className="label mt-4">Last Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          />

          <label className="label mt-4">Age</label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={age}
            onChange={(e) => setage(e.target.value)}
          />

          <label className="label mt-4">Skills</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={skills}
            onChange={(e) => setskills(e.target.value)}
          />

          <label className="label mt-4">About</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={about}
            onChange={(e) => setabout(e.target.value)}
          />

          <label className="label mt-4">Profile Picture</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={photourl}
            onChange={(e) => setphotourl(e.target.value)}
          />

          <button className="btn bg-green-700 mt-6 w-full" onClick={handleSave}>
            Save
          </button>
        </fieldset>
      </div>

      {/* Preview Card Section */}
      <div className="w-[400px]">
        <FeedCard user={{ fname, lname, about, photourl , age }} />
      </div>
    </div>
  );
};

export default EditProfile;
