import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../../images/logo.png";

const Footer = () => {
  return (
    <footer className="shared-bg py-12">
      <div className="mx-auto container flex justify-around items-center">
        <div className="w-4/12">
          <img className="w-3/12" src={footerLogo} alt="" />
        </div>
        <div>
          <a href="">Contact Us</a>
          <a href="">Contact Us</a>
          <a href="">Contact Us</a>
          <a href="">Contact Us</a>
        </div>
        <div>
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Cars"
                required=""
              />
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
