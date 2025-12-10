import Header from "./Header";
import bgimg from "../assets/Background.jpg";
import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    // Validation
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrMessage(message);
    if (message) return;

    // Sign In or Sign Up
    if (!isSignIn) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User created:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error:", errorCode, errorMessage);
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In functionality to be implemented
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <div className="relative">
        <Header />
        <div className="absolute">
          <img
            className="w-full h-full object-contain"
            src={bgimg}
            alt="bg-image"
          />
        </div>
        <div className="p-4 flex justify-center items-center h-screen">
          <form
            onSubmit={(e) => e.preventDefault()}
            action=""
            className="bg-black/70 relative p-15 m-5 flex flex-col w-1/3"
          >
            <h2 className="font-extrabold text-3xl my-5">
              {isSignIn ? "Sign in" : "Sign Up"}
            </h2>
            {!isSignIn && (
              <input
                className="px-2 py-3 my-3 mx- border border-gray-300 rounded-md bg-gray-900/60 text-white text-sm"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              ref={email}
              className="px-2 py-3 my-3 mx- border border-gray-300 rounded-md bg-gray-900/60 text-white text-sm"
              type="text"
              placeholder="Email"
            />
            <input
              ref={password}
              className="px-2 py-3 my-3 border border-gray-300 rounded-md bg-gray-900/60 text-white text-sm"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-600 font-bold text-sm text-center">
              {errMessage}
            </p>
            <button
              className="p-2 my-3 bg-red-600 rounded font-bold cursor-pointer hover:bg-red-500 duration-200"
              onClick={handleSubmit}
            >
              {isSignIn ? "Sign in" : "Sign Up"}
            </button>
            <span className="flex w-full items-center justify-center font-bold text-lg uppercase">
              or
            </span>
            <p className="flex w-full items-center justify-center">
              {isSignIn ? "New to Netflix?" : "Already have an account?"} &nbsp;
              <span
                className="cursor-pointer hover:text-blue-700 hover:underline duration-200"
                onClick={toggleSignInForm}
              >
                {isSignIn ? "Sign up now" : "Sign in here"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
