import React, { useContext } from "react";
import MenuBar from "./common/MenuBar";
import { HashLink } from "react-router-hash-link";

import { FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContextProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log (user) ; 
  return (
    <>
      {user ? (
        <div>{user?.phoneNumber}</div>
      ) : (
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
              <HashLink
                to={"/register"}
                className=" bg-slate-300 p-6 w-64 rounded-xl text-xl font-bold tracking-wider text-center"
              >
                Register
              </HashLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
