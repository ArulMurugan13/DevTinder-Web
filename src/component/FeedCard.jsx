/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_URL } from "../utils/constants";
import { removeFeed } from "../utils/feedSlice";

const FeedCard = ({ user }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((store) => store.user._id);
  const { fname, lname, photourl, about, age, _id } = user;

  const handleConnection = async (status, _id) => {
    if (loggedInUser?.toString() !== _id?.toString()) {
      const res = await axios.post(
        BACKEND_URL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(_id));
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={photourl} alt={fname} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{fname + " " + lname}</h2>
        <h3>{age}</h3>
        <p>{about}</p>
        <div className="card-actions justify-evenly mt-10">
          <button
            className="btn bg-red-500"
            onClick={() => handleConnection("ignore", _id)}
          >
            Ignore
          </button>
          <button
            className="btn bg-green-500"
            onClick={() => handleConnection("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
