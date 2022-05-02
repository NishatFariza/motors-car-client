import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="flex justify-around items-center shared-bg py-5 text-white ">
      <Link to="/" className="cursor-pointer">
        <img src={logo} alt="" />
      </Link>
      <div>
        <Link className=" duration-500 menu-text" to="/">
          HOME
        </Link>
        <Link className=" duration-500 ml-4 menu-text" to="/inventory">
          INVENTORY
        </Link>
        <Link className=" duration-500 ml-4 menu-text" to="/blogs">
          BLOGS
        </Link>
      </div>
      <div>
        <Link className=" duration-500 ml-4 menu-text" to="/manageInventory">
          MANAGE INVENTORY
        </Link>
        <Link className=" duration-500 ml-4 menu-text" to="/addItem">
          ADD ITEMS
        </Link>
        <Link className=" duration-500 ml-4 menu-text" to="/myItem">
          MY ITEMS
        </Link>
        <Link className=" duration-500 ml-4 menu-text" to="/login">
          LOGIN
        </Link>
        <Link className=" duration-500 ml-4 menu-text" to="/LogOut">
          LOG OUT
        </Link>
      </div>
    </nav>
  );
};

export default Header;
