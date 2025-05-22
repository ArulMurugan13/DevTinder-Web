import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_URL } from "../utils/constants";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    const res = await axios.get(BACKEND_URL + "/requests", {
      withCredentials: true,
    });
    dispatch( addRequests(res?.data?.data));
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="">
      <div className=" flex justify-center">
        <h1 className="text-2xl my-10">Requests</h1>
      </div>
      <div className="flex flex-col items-center ">
        {requests &&
          requests.map((con) => {
            return (
              <div
                key={con?._id}
                className="my-5 p-3 flex justify-center w-1/2 bg-neutral rounded-lg shadow-2xl "
              >
                <div className="mr-10">
                  <img
                    src={con?.fromUserId?.photourl}
                    alt={con?.fromUserId?.fname}
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <h2>{con?.fromUserId?.fname}</h2>
                  <p>{con?.fromUserId?.about}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Requests;
