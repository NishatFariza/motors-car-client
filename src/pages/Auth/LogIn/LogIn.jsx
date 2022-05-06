import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./LogIn.css";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import Loading from "../../Loading/Loading";

const LogIn = () => {
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //login error handle

  useEffect(() => {
    if (error) {
      console.log(error.code);
      if (error.code === "auth/wrong-password") {
        toast.error("Password went Wrong");
      }
      if (error.code === "auth/user-not-found") {
        toast.error("User Not Found. Please!! Sign Up");
      }
    }
    if (user) {
      toast.success("LogIn Successful");

      navigate(from);
    }
  }, [navigate, user, from, error]);

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

  //reset password
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Mail Sent!", { id: "signUp" });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode == "auth/missing-email") {
          toast.error("Please Enter Email", { id: "signUp" });
          console.log(errorCode);
        }
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="sm:w-4/12 w-11/12 mx-auto py-7 border rounded px-6 my-20 login-form">
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
          {loading && (
            <svg
              role="status"
              className="inline w-4 h-4 mr-2 ml-3 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          )}
        </button>
      </form>
      <div className="my-6">
        <p className="text-stone-700 text-sm">
          Forget Password?
          <button
            onClick={handleResetPassword}
            className="text-sm lg:ml-3 link-text"
          >
            Click Reset!
          </button>
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
