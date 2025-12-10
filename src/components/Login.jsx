import Header from "./Header";
import bgimg from "../assets/Background.jpg";
import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";

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
        {/* Login Form */}
        <div className="p-4 flex justify-center items-center h-screen">
          <form
            onSubmit={(e) => e.preventDefault()}
            action=""
            className="bg-black/70 relative p-15 m-5 flex flex-col w-1/3 max-w-[500px]"
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
              className="px-2 py-3 my-3 mx- border border-gray-300 rounded-md bg-gray-900/40 text-white text-sm"
              type="text"
              placeholder="Email"
            />
            <input
              className="px-2 py-3 my-3 mx- border border-gray-300 rounded-md bg-gray-900/40 text-white text-sm"
              type="password"
              placeholder="Password"
            />
            <button
              className="p-2 my-3 bg-red-600 rounded font-bold cursor-pointer hover:bg-red-400 ease-in-out duration-300"
              onClick={handleSubmit}
            >
              Sign in
            </button>
            <span className="flex w-full items-center justify-center font-bold text-lg uppercase">
              or
            </span>
            <p className="flex w-full items-center justify-center">
              Don't have an account?
            </p>
            <button
              className="p-2 my-2 bg-gray-600 rounded font-bold cursor-pointer hover:bg-gray-400 ease-in-out duration-300"
              onClick={toggleSignInForm}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
