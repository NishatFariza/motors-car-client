import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="flex justify-around items-center nav py-5 text-white ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <Link className="hover:text-blue-600 duration-500 font-semibold" to="/">
          HOME
        </Link>
        <Link className="hover:text-blue-600 duration-500 ml-4 font-semibold" to="/">
          INVENTORY
        </Link>
        <Link className="hover:text-blue-600 duration-500 ml-4 font-semibold" to="/">
          BLOGS
        </Link>
      </div>
      <div>
        <Link
          className="hover:text-blue-600 duration-500 ml-4 font-semibold"
          to="/manageItem"
        >
          Mange Items
        </Link>
        <Link className="hover:text-blue-600 duration-500 ml-4 font-semibold" to="/addItem">
          Add Item
        </Link>
        <Link className="hover:text-blue-600 duration-500 ml-4 font-semibold" to="/myItem">
          My Item
        </Link>
        <Link className="hover:text-blue-600 duration-500 ml-4 font-semibold" to="/blogs">
          Blogs
        </Link>
        <Link className="hover:text-blue-600 duration-500 ml-4 font-semibold" to="/login">
          LogIn
        </Link>
        <Link className="hover:text-blue-600 duration-500 ml-4 font-semibold" to="/signUp">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
