import React, { useContext } from "react";
import MenuBar from "./common/MenuBar";
import { HashLink } from "react-router-hash-link";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContextProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      {user ? (
        <div>{user?.phoneNumber}</div>
      ) : (
        <div>
          <MenuBar />
        </div>
      )}
    </div>
  );
};

export default Profile;
