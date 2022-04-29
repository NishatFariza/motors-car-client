import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/manageItem">Mange Items</Link>
        <Link to="/addItem">Add Item</Link>
        <Link to="/myItem">My Item</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/login">LogIn</Link>
      </div>
    </nav>
  );
};

export default Header;
