import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContextProvider";
import { realTimeDb } from "../../firebase.config";
import { push, ref } from "firebase/database";
const UTR = () => {
  const [utr, setUtr] = useState();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const notify = () => {
    toast.success("UTR Submitted Successfully!");
  };

  const dbRef = ref(realTimeDb, "transactions");

  const { user } = useContext(AuthContext);
  // console.log(user);

  const handleUtr = async () => {
    try {
      const timestamps = Date.now();
      const realTime = new Date(timestamps);

      const hour = realTime.getHours();
      const minute = realTime.getMinutes();
      const time = `${hour}:${minute}`;

      data.utr = utr;
      data.time = time;
      data.UserID = user.uid;

      await push(dbRef, data);
      console.log("Data added Successfully :: ");
      // navigate("/")
      // notify()  ;
    } catch (error) {
      console.log("there is error ", error);
    }
  };
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
          onChange={(e) => setUtr(e.target.value)}
        />
        <Link>
          <button
            onClick={handleUtr}
            className="p-4 bg-blue-700 font-semibold w-44 text-center mt-6 rounded-xl hover:scale-95 text-white duration-200"
          >
            submit
          </button>
        </Link>
        <Toaster />
      </div>
    </>
  );
};

export default UTR;
