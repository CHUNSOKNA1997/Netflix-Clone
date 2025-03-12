import React, { useState } from "react";
import logo from "../assets/logo.png";

const Login = () => {
  const [signState, setSignStateSet] = useState("Sign In");

  return (
    <div className="relative h-screen w-full background-banner-login">
      <div className="absolute top-10 left-32 z-10">
        <img src={logo} alt="Netflix" className="w-40" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md p-8 py-16 background-login-form rounded-xl">
          <h1 className="mb-6 text-[2rem] text-white font-bold">{signState}</h1>

          <form>
            {signState === "Sign Up" ? (
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-4 background-input-field text-white rounded focus:outline-none"
                    placeholder="Username"
                  />
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-4 background-input-field text-white rounded focus:outline-none"
                  placeholder="Email or mobile number"
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-4 background-input-field text-white rounded focus:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 font-medium text-white bg-red-600 rounded hover:bg-red-700 hover:cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center justify-between mt-3 mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-1" />

              <label htmlFor="remember" className="text-sm text-gray-300">
                Remember me
              </label>
            </div>
          </div>

          {signState === "Sign In" ? (
            <div className="mt-4 text-base text-gray-400">
              New to Netflix?{" "}
              <a
                className="text-white hover:underline hover:cursor-pointer"
                onClick={() => {
                  setSignStateSet("Sign Up");
                }}
              >
                Sign Up now.
              </a>
            </div>
          ) : (
            <div className="mt-4 text-base text-gray-400">
              Already have an account?{" "}
              <a
                className="text-white hover:underline hover:cursor-pointer"
                onClick={() => {
                  setSignStateSet("Sign In");
                }}
              >
                Sign In now.
              </a>
            </div>
          )}

          <div className="mt-4 text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a href="#" className="ml-1 text-blue-500 hover:underline">
              Learn more.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
