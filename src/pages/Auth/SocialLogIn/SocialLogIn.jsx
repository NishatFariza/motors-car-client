import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import auth from "../../../firebase.init";

const SocialLogIn = () => {
  //get user social logIn
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="bg-slate-200 md:w-8/12 mx-auto md:py-3 py-2 px-5 md:px-6 flex justify-center items-center rounded-full google-btn md:text-lg text-sm "
      >
        <FcGoogle className="mr-4 md:text-3xl text-lg"></FcGoogle>
        Sign Up With Google
      </button>
    </div>
  );
};

export default SocialLogIn;
