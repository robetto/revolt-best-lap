import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Login!</h1>
        <p className="py-2">
          Non hai un'account?{" "}
          <Link to="/Signup" className="underline">
            Iscriviti
          </Link>
        </p>
      </div>
      <form>
        <div className="flex flex-col py-2">
          <label htmlFor="" className="py-2 font-medium">
            Indirizzo Email
          </label>
          <input className="border p-3" type="email" />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="" className="py-2 font-medium">
            Password
          </label>
          <input className="border p-3" type="password" />
        </div>
        <div>
          <button className="border border-blue-500 bg-blue-600 hover:bg-blue-700 p-4 my-2 text-white">
            Iscriviti
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
