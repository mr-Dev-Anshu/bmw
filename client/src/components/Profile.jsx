import React from "react";
import MenuBar from "./common/MenuBar";
import { HashLink } from "react-router-hash-link";
import { FaUser } from "react-icons/fa";

const Profile = () => {

  return (
    <div className=" relative w-full h-[100vh] flex justify-center items-center bg-blue-600">
      <MenuBar />
      <div className=" flex flex-col gap-16">
        <div className="w-full grid place-items-center">
          <FaUser size={96} />
        </div>
        <div className=" flex gap-16">
          <HashLink
            to={"/login"}
            className=" bg-slate-300 p-6 w-64 rounded-xl text-xl font-bold tracking-wider text-center"
          >
            Login
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Profile;
