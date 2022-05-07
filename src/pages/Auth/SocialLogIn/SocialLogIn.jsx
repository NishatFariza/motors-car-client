import React, { useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const SocialLogIn = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  //get user social logIn
  const [signInWithGoogle, userGoogle, loading, error] =
    useSignInWithGoogle(auth);

  if (error) {
    toast.error("Something Error");
    console.log(error);
  }
  useEffect(() => {
    if (userGoogle) {
      toast.success("LogIn Successful");

      navigate(from);
    }
  }, [userGoogle, from, navigate]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="bg-slate-200 md:w-8/12 mx-auto md:py-3 py-2 px-5 md:px-6 flex justify-center items-center rounded-full google-btn md:text-lg text-sm "
      >
        <FcGoogle className="mr-4 md:text-3xl text-lg"></FcGoogle>
        LogIn With Google
      </button>
    </div>
  );
};

export default SocialLogIn;
