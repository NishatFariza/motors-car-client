import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="sm:py-32 py-16 mx-auto container">
      <div className="text-center">
        <h2 className="sm:text-4xl text-xl font-bold primary-color sm:w-6/12 w-8/12 mx-auto">
          THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST
        </h2>
        <p className="sm:text-4xl text-xl font-bold text-stone-500 sm:my-10 my-5">404</p>
        <img src="" alt="" />
        <Link
          to="/"
          className=" bg-blue-500 px-6 py-3 rounded hover:bg-yellow-400 hover:text-white duration-500 font-semibold text-white my-6"
        >
          HOME PAGE
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
