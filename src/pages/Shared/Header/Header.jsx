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
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')}  to="/">
            HOME
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to="/blogs">
            BLOGS
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')}
            to="/manageInventory"
          >
            MANAGE INVENTORY
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to="/addItem">
            ADD ITEM
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to="/myItem">
            MY ITEM
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to="/login">
            LOGIN
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to="/LogOut">
            LOG OUT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
