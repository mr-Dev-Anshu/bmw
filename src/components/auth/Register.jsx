import React  , {useState} from 'react'
import { Link } from 'react-router-dom'
import {auth} from "../../firebase.config"
import {createUserWithEmailAndPassword , sendEmailVerification} from "firebase/auth"
import {FaRegEyeSlash ,FaRegEye} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
export default function Register() {
  
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState(false);
  const [formData, setFormData] = useState();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
   const router = useNavigate() 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    setLoading(true) ;
    e.preventDefault();

    const { email, password, confirm_password } = formData;

    if (password !== confirm_password) {
      setConfirmPasswordMessage(true);
      return ;
    } else {
      setConfirmPasswordMessage(false);
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential && userCredential.user) {
        await sendEmailVerification(userCredential.user);
         router("/message")
         setLoading(false) ; 
      }

      console.log("User Created successfully :: ");
    } catch (error) {
      console.log("there is some error during creating user", error);
      setLoading(false) ; 
    }
  };
  return (
    <div>
    <div className="flex justify-center text-2xl font-bold mt-12">
      <p>Create your Account </p>
    </div>
    <div className="flex justify-center   items-center ">
      <form action="" className="flex flex-col w-[70%] sm:w-[40%] ">
        <input
          placeholder="Email"
          className="input"
          type="email"
          id="email"
          onChange={handleChange}
        />
        <input
          id="password"
          placeholder="Password"
          className="input"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
        />

        <input
          id="confirm_password"
          placeholder="Confirm Password "
          className="input"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
        />
        <div className="flex  justify-end text-2xl ">
          {" "}
          {showPassword ? (
            <FaRegEye onClick={handleShowPassword} />
          ) : (
            <FaRegEyeSlash onClick={handleShowPassword} />
          )}{" "}
        </div>
        <div>
          {confirmPasswordMessage ? (
            <p className="text-red-700 ">
              Password Mismatch: Please Ensure Your Passwords Match
            </p>
          ) : null}
        </div>
        <button
          onClick={handleSubmit}
          className="text-white bg-slate-700 py-2 px-4 rounded-md mt-10 "
        >
          {loading ? "Loading..." : "Signup"}
        </button>
        <p className="mt-2">
          All ready have an Account ?{" "}
          <Link href={"/signin"}>
            {" "}
            <span className="text-blue-400">Signin</span>
          </Link>
        </p>
      </form>
    </div>
  </div>
  )
}
