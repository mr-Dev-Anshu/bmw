import React, { useContext } from "react";
import MenuBar from "./common/MenuBar";
import { FaArrowAltCircleLeft, FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContextProvider";
import { Link } from "react-router-dom";


const Profile = () => {
  const { user, transactions } = useContext(AuthContext);
  console.log(transactions);
  return (
    <>
      <MenuBar />
      <>
        {user ? (
          <div className="p-3">
            <Link to={"/"}>
              <p className="px-6">
                <FaArrowAltCircleLeft size={36} color="blue" />
              </p>
            </Link>
            <div className="h-fit flex flex-col gap-12 items-center shadow-lg shadow-blue-500 rounded-xl p-4">
              <div className="flex justify-between items-center w-full pr-24 h-full">
                <div className="h-full w-fit flex gap-6 justify-center">
                  <FaUser size={64} />
                  <div>
                    {" "}
                    <p className="text-2xl font-bold">
                      User: {user.phoneNumber}
                    </p>
                  </div>
                </div>
                <div className="h-full outline w-48 py-4 flex justify-center items-center flex-col rounded-xl">
                  <p className="text-xl font-semibold">Balance</p>
                  <p className="text-4xl font-bold mt-6">Rs: 500</p>
                </div>
              </div>
              <Link to={"/payment"}>
                <p className="bg-blue-700 text-white font-bold rounded-xl p-4 px-24">
                  Deposit Money
                </p>
              </Link>
            </div>
            <p className="text-center mt-12 text-3xl font-bold ">
              Your Products
            </p>
            <p className="text-center font-bold mt-6 text-red-500">
              No Product Available!
            </p>
            <div></div>
            <p className="text-center mt-12 text-3xl font-bold  ">
              Your Transactions
            </p>
            <div className="mt-6 mb-24 flex flex-col gap-8"></div>
          </div>
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
      </>
    </>
  );
};

export default Profile;
