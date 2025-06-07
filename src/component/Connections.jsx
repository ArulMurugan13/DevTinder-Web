import React, { useEffect } from "react";
import { BACKEND_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    const res = await axios.get(BACKEND_URL + "/connections", {
      withCredentials: true,
    });
    dispatch(addConnections(res?.data?.data));
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (connections && connections.length === 0) {
    return (
      <h1 className="flex justify-center mt-10 font-bold text-2xl">
        No Connections! Add Some <Link to="/">Friends</Link>
      </h1>
    );
  }

  return (
    <div className="text-center justify-between">
      <h1 className="text-3xl my-10">Connections</h1>
      <div className="h-96 overflow-y-auto">
        {connections &&
          connections.map((connection) => {
            const { _id, fname, lname, photourl, age, about, gender } =
              connection;

            return (
              <div
                key={_id}
                className="my-5 p-3  flex items-center w-1/3 mx-auto  bg-neutral rounded-lg shadow-2xl"
              >
                <div className="mx-5">
                  <img src={photourl} alt={fname} className="w-16 h-16" />
                </div>
                <div className="text-left mx-10">
                  <h2 className="font-bold text-xl">{fname + " " + lname}</h2>
                  <h2>{age && gender && age + " , " + gender}</h2>
                  <p>{about}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Connections;
