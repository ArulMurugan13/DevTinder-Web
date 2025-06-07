/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_URL } from "../utils/constants";
import { addRequests, removeRequests } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    const res = await axios.get(BACKEND_URL + "/requests", {
      withCredentials: true,
    });
    dispatch(addRequests(res?.data?.data));
  };

  const handleRequestReview = async (status, _id) => {
    const res = await axios.post(
      BACKEND_URL + "/request/review/" + status + "/" + _id,
      {},
      { withCredentials: true }
    );

    dispatch(removeRequests(_id));
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (requests && requests.length === 0) {
    return (
      <h1 className="flex justify-center mt-10 font-bold text-2xl">
        No Connection Request Found
      </h1>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl my-10">Requests</h1>
      {requests &&
        requests.map((request) => {
          const { fromUserId } = request;
          const { _id, fname, lname, photourl, age } = fromUserId;

          return (
            <div
              key={_id}
              className="my-5 p-3  flex items-center justify-between w-1/2 mx-auto  bg-neutral rounded-lg shadow-2xl"
            >
              <div className="mx-5">
                <img src={photourl} alt={fname} className="w-16 h-16" />
              </div>
              <div className="text-left mx-10">
                <h2 className="">{fname + " " + lname}</h2>
                <h2>{age && age}</h2>
              </div>
              <div className="flex items-center mx-10">
                <button
                  className="btn btn-primary mr-5"
                  onClick={() => handleRequestReview("accepted", _id)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleRequestReview("rejected", _id)}
                >
                  Reject
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Requests;
