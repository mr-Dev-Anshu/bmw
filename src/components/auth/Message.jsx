import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { userContext } from "../../context/user.context";
import { useNavigate } from "react-router-dom";
export default function Message() {
  const { user } = useContext(userContext);
  const router = useNavigate();
  useEffect(()=> {
     router("/")
  } , [user])
  return (
    <div className="text-xl sm:text-2xl text-green-700 flex justify-center  h-screen items-center ">
      we have send you an Email please check for verification
    </div>
  );
}
