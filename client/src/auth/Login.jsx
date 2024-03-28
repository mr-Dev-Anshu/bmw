import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
export default function Login() {
  const navigate  = useNavigate();
  const [phone, setPhone] = useState("");
  const [verifyPage, setVerifyPage] = useState(true);
  const [message, setMessage] = useState("");
  const { loginWithPhone  } = useContext(AuthContext);

  const handleLogin = async (e) => {
    setMessage("");
    e.preventDefault();
    // console.log(phone);
    try {
      if (phone === "" || phone == null) {
        throw Error("Please Enter the valid  Phone number ");
      }
      const res = await loginWithPhone(phone);
      console.log("reCAPTCHA setup complete");
      navigate("/verify") ; 
      
    } catch (error) {
      console.error("Error setting up reCAPTCHA:", error);
      setMessage(error?.message);
    }
  };



  return (
    <>
        <div>
          <div className="sm:mt-32  flex justify-center items-center  gap-8">
            <input
              value={phone}
              className="border-b-2 border-slate-700 px-4 w- w-[20%] py-2  focus:outline-none"
              placeholder="Enter your Phone Number "
              onChange={(e) => setPhone(e.target.value)}
              type="text"
            />
            <div className="flex justify-center ">
              <div>
                <div id={verifyPage ? "recaptcha-container" : null}></div>
                <div className="">
                  <button
                    className="py-2 px-4 bg-slate-800 rounded text-white mt-2"
                    onClick={handleLogin}
                  >
                    Get OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:mt-12 text-red-600 font-medium">
            {message}
          </div>
        </div>
      
    </>
  );
}
