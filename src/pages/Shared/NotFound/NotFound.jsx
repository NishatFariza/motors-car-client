import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="md:py-32 mx-auto container">
      <div className="text-center">
        <h2 className="text-4xl font-bold primary-color">
          THE PAGE YOU ARE LOOKING FOR <br /> DOES NOT EXIST
        </h2>
        <p className="text-4xl font-bold text-stone-500 my-10">404</p>
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
