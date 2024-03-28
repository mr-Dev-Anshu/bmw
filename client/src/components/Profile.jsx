import React, { useContext } from "react";
import MenuBar from "./common/MenuBar";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContextProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <MenuBar />
      <div className=" h-[100vh] w-full flex justify-center items-center ">
        {user ? (
          <div>{user.phoneNumber}</div>
        ) : (
          <div className=" flex flex-col justify-center items-center h-fit">
            <FaUser size={64} />
            <div className="text-center mt-8">
              <Link
                to={"/login"}
                className=" p-4 px-24 bg-blue-700 rounded-xl text-white font-semibold text-xl"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
