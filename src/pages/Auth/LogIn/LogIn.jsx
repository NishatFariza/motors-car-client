import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //login user data email and password
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleLogInUser = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
  };

  //reset password use google
  const [sendPasswordResetEmail, sending, passError] =
    useSendPasswordResetEmail(auth);

  return (
    <div className="lg:w-4/12 w-10/12 mx-auto py-7 border rounded px-6 my-20 login-form">
      <h3 className="mb-7 text-3xl font-medium text-center text-slate-700">
        LogIn Form
      </h3>
      <form onSubmit={handleLogInUser}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            onBlur={handleEmailBlur}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            onBlur={handlePasswordBlur}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center form-btn"
        >
          Log In
        </button>
      </form>
      <div className="my-6">
        <p className="text-stone-700 text-sm">
          Forget Password?
          <Link to="/signUp" className="text-sm lg:ml-3 link-text">
            Click Reset!
          </Link>
        </p>
        <p className="mt-1 text-stone-700 text-sm ">
          Create a new Account?
          <Link to="/signUp" className="text-sm lg:ml-3 link-text">
            SignUp!
          </Link>
        </p>
      </div>
      <div className="flex justify-center items-center my-6">
        <div className="form-divider w-3/12"></div>
        <p className="md:mx-4 mx-2">or</p>
        <div className="form-divider w-3/12"></div>
      </div>
      <SocialLogIn />
    </div>
  );
};

export default LogIn;
