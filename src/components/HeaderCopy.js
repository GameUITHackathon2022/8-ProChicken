import React from "react";
import { NavLink } from "react-router-dom";

const HeaderCopy = () => {
  return (
    <div className="flex items-center justify-between p-10">
      <div className="flex items-center left gap-x-5">
        <div className="flex items-center w-10 h-10 border-2 border-white rounded-full logo gap-x-5">
          <img
            src="https://images.unsplash.com/photo-1669394962540-eb2253ec5572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex px-20 gap-x-5">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/"}>Events</NavLink>
          <NavLink to={"/"}>Joined Events</NavLink>
        </div>
      </div>
      <div className="flex items-center right gap-x-5">
        <span>Log out</span>
        <span className="p-5 py-3 border-2 border-black rounded-3xl">
          Profile
        </span>
      </div>
    </div>
  );
};

export default HeaderCopy;
