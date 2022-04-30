import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="lg:w-4/12 w-10/12 mx-auto py-7 border rounded px-6 my-20 login-form">
      <h3 className="mb-7 text-3xl font-medium text-center text-slate-700">
        LogIn Form
      </h3>
      <form>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        
        <button
          type="submit"
          class="text-white  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center form-btn"
        >
          Log In
        </button>
      </form>
      <div className="my-8">
        <p className="text-stone-700">
          Forget Password?
          <Link to="/signUp" className="text-sm lg:ml-3 link-text">
            Click Reset!
          </Link>
        </p>
        <p className="mt-1 text-stone-700">
          Create a new Account?
          <Link to="/signUp" className="text-sm lg:ml-3 link-text">
            SignUp!
          </Link>
        </p>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default LogIn;
