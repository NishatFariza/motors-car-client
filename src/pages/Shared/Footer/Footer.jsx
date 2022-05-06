import React from "react";
import footerLogo from "../../../images/logo.png";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaGooglePlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="shared-bg py-12">
      <div className="w-10/12 mx-auto container flex justify-between items-center footer-divider pb-6">
        <div className="w-4/12">
          <img className="" src={footerLogo} alt="" />
        </div>

        <div className="flex justify-center items-center">
          <div className="mr-10">
            <Link
              to="/"
              className="footer-text duration-500 text-sm mr-3 hover:text-white"
              href=""
            >
              Inventory
            </Link>
            <Link
              to="/"
              className="footer-text duration-500 text-sm mr-3 hover:text-white"
              href=""
            >
              Prices
            </Link>
            <Link
              to="/"
              className="footer-text duration-500 text-sm  hover:text-white"
              href=""
            >
              Dealers
            </Link>
          </div>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Car"
              required=""
            />
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto container flex justify-between items-center pb-4 mt-4">
        <div className="w-4/12">
          <small className="footer-text">Copyright &copy; {year}. Motors</small>
        </div>
        <div className="flex">
          <BsFacebook className="mr-4 text-xl footer-icon duration-500 cursor-pointer" />
          <BsTwitter className="mr-4 text-xl footer-icon duration-500 cursor-pointer" />
          <BsInstagram className="mr-4 text-xl footer-icon duration-500 cursor-pointer" />
          <FaGooglePlus className="mr-4 text-xl footer-icon duration-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
