import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import axios from "axios";
import { BACKEND_URL } from "../utils/constants";
import { deleteConnections } from "../utils/connectionSlice";
import { deleteFeed } from "../utils/feedSlice";
import { deleteRequests } from "../utils/requestSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const {photourl}=user || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async ()=>{
    try{
      await axios.post(BACKEND_URL+"/logout",{},{withCredentials:true});
      dispatch(removeUser());
      dispatch(deleteConnections());
      dispatch(deleteFeed());
      dispatch(deleteRequests());
      navigate("/login");
      
    }
    catch(err)
    {
      console.log(err);
    }
  }

  return (
    <div className="navbar bg-neutral shadow-sm ">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          🧑🏻‍💻DevTinder
        </Link>
      </div>
      <div className="flex gap-2 mr-10">
        {user && (
          <div className="dropdown dropdown-end ml-9 flex">
            <h3 className="flex  items-center justify-center mr-5">{user.fname+" "+ user.lname}</h3>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={photourl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/" className="text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-base">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/connections" className="text-base">
                  Connections
                </Link>
              </li>
              <li>
                <Link to="/requests" className="text-base">
                  Requests
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-base" onClick={handleLogout}>
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
