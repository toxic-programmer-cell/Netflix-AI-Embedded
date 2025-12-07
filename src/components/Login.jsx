import Header from "./Header";
import bgimg from "../assets/Background.jpg";

const Login = () => {
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
            action=""
            className="bg-black/70 relative p-15 m-5 flex flex-col w-1/3"
          >
            <h2 className="font-extrabold text-3xl my-5">Sign in</h2>
            <input
              className="px-2 py-3 my-3 mx- border border-gray-300 rounded-md bg-gray-900/60 text-white text-sm"
              type="text"
              placeholder="Email or Mobile number"
            />
            <input
              className="px-2 py-3 my-3 border border-gray-300 rounded-md bg-gray-900/60 text-white text-sm"
              type="password"
              placeholder="Password"
            />
            <button className="p-2 my-3 bg-red-600 rounded font-bold cursor-pointer hover:bg-red-500 duration-200">
              Sign in
            </button>
            <span className="flex w-full items-center justify-center font-bold text-lg uppercase">
              or
            </span>
            <p className="flex w-full items-center justify-center">
              Don't have an account? &nbsp;
              <span className="cursor-pointer hover:text-blue-700 hover:underline duration-200">
                Sign up now
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
