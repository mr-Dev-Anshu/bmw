import React, { useContext, useEffect, useState } from "react";
import MenuBar from "./common/MenuBar";
import { FaArrowAltCircleLeft, FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContextProvider";
import { Link } from "react-router-dom";

const TransactionCard = () => {
  const { transactions } = useContext(AuthContext);

  return (
    <>
      {transactions?.map((item) => (
        <div className="flex items-center shadow-md shadow-green-500 p-3 rounded-xl gap-12 ">
          <div className="h-16 w-16 rounded-full grid place-items-center bg-green-400">
            <p className="text-3xl font-extrabold text-white">₹</p>
          </div>
          <p className="text-xl font-bold">UTR Number -- {item?.utr} </p>
          <p>{item?.time}</p>
        </div>
      ))}
    </>
  );
};

const Profile = () => {
  const { user, transactions } = useContext(AuthContext);
  console.log(transactions);
  return (
    <>
      <MenuBar />
      <>
        {user ? (
          <div className="p-3">
            <div className="h-[100px] flex gap-12 items-center shadow-lg shadow-blue-500 rounded-xl p-4">
              <Link to={"/"}>
                <p className="px-6">
                  <FaArrowAltCircleLeft size={36} color="blue" />
                </p>
              </Link>
              <div className="h-full w-[75px] flex justify-center items-center">
                <FaUser size={48} />
              </div>
              <p className="text-2xl font-bold">{user.phoneNumber}</p>
            </div>
            <p className="text-center mt-12 text-3xl font-bold ">
              Your Transactions
            </p>
            <div className="mt-6 mb-24 flex flex-col gap-8">
              <TransactionCard />
              {/* <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard /> */}
            </div>
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
