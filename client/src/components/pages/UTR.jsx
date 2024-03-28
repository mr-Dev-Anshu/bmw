import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContextProvider";
import { db } from "../../firebase.config";

const UTR = () => {
  const [utr , setUtr ] = useState()
  const navigate = useNavigate();
  const notify = () => {
    toast.success("UTR Submitted Successfully!");
    navigate("/");
  };

   const {user} =  useContext(AuthContext) ; 
    console.log (user) ; 

   const handleUtr =  async() => {
      
   }
  return (
    <>
      <div className="flex flex-col w-full justify-start items-center gap-16">
        <Link to={"/payment"} className=" w-full p-2">
          <p>
            <FaArrowAltCircleLeft size={36} color="blue" />
          </p>
        </Link>
        <p className="text-3xl">Submit UTR no.</p>
        <input
          type="text"
          className=" p-2 text-xl w-96 border-b-2 outline-none"
          placeholder="UTR No."
        />
        <Link
          onClick={notify}
          className="p-4 bg-blue-700 font-semibold w-44 text-center mt-6 rounded-xl hover:scale-95 text-white duration-200"
        >
          Submit
        </Link>
        <Toaster />
      </div>
    </>
  );
};

export default UTR;
