import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import axios from "axios";
import { BACKEND_URL } from "../utils/constants";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const {photourl}=user || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async ()=>{
    try{
      await axios.post(BACKEND_URL+"/logout",{},{withCredentials:true});
      dispatch(removeUser());
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
      <div className="flex gap-2">
        {user && (
            <div className="dropdown dropdown-end ml-9">
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
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link to="/login" onClick={handleLogout}>
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
