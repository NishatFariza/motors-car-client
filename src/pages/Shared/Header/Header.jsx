import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className=" shared-bg py-5 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="cursor-pointer">
          <img src={logo} alt="" />
        </NavLink>
        <div>
          <NavLink className=" duration-500 menu-text" to="/">
            HOME
          </NavLink>
          <NavLink className=" duration-500 ml-4 menu-text" to="/blogs">
            BLOGS
          </NavLink>
          <NavLink
            className=" duration-500 ml-4 menu-text"
            to="/manageInventory"
          >
            MANAGE INVENTORY
          </NavLink>
          <NavLink className=" duration-500 ml-4 menu-text" to="/addItem">
            ADD ITEM
          </NavLink>
          <NavLink className=" duration-500 ml-4 menu-text" to="/myItem">
            MY ITEM
          </NavLink>
          <NavLink className=" duration-500 ml-4 menu-text" to="/login">
            LOGIN
          </NavLink>
          <NavLink className=" duration-500 ml-4 menu-text" to="/LogOut">
            LOG OUT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
