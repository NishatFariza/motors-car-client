import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <>
      <nav className=" shared-bg py-5 text-white">
        <div className="relative z-20 text-white">
          <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-2">
            <div className="flex items-center justify-between">
              <div className="relative z-20 flex justify-center items-center">
                <NavLink to="/" className="cursor-pointer">
                  <img src={logo} alt="" />
                </NavLink>
              </div>

              <div className="flex items-center justify-end ">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer hidden"
                />
                <label
                  htmlFor="hamburger"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                </label>

                <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] shared-bg  shadow-xl transition duration-300  lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                  <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                    <ul className="px-6 pt-24 sm:pt-32 text-white space-y-0 md:px-6 lg:space-y-0 lg:flex lg:space-x-6 lg:pt-0">
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "activeLink" : "navLink"
                          }
                          to="/"
                        >
                          HOME
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "activeLink" : "navLink"
                          }
                          to="/blogs"
                        >
                          BLOGS
                        </NavLink>
                      </li>
                      {user && (
                        <>
                          <li>
                            <NavLink
                              className={({ isActive }) =>
                                isActive ? "activeLink" : "navLink"
                              }
                              to="/manageInventory"
                            >
                              MANAGE INVENTORY
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className={({ isActive }) =>
                                isActive ? "activeLink" : "navLink"
                              }
                              to="/addItem"
                            >
                              ADD ITEM
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className={({ isActive }) =>
                                isActive ? "activeLink" : "navLink"
                              }
                              to="/myItem"
                            >
                              MY ITEM
                            </NavLink>
                          </li>
                        </>
                      )}
                      <li>
                        {user ? (
                          <NavLink
                            onClick={() => signOut(auth)}
                            to="login"
                            className={({ isActive }) =>
                              isActive ? "activeLink" : "navLink"
                            }
                          >
                            LogOut
                          </NavLink>
                        ) : (
                          <NavLink
                            className={({ isActive }) =>
                              isActive ? "activeLink" : "navLink"
                            }
                            to="/login"
                          >
                            LOGIN
                          </NavLink>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>

    // <nav className=" shared-bg py-5 text-white ">
    //   <div className="container mx-auto md:flex md:justify-between md:items-center">
    //     <NavLink to="/" className="cursor-pointer">
    //       <img src={logo} alt="" />
    //     </NavLink>
    //     <div>
    //       <NavLink
    //         className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
    //         to="/"
    //       >
    //         HOME
    //       </NavLink>
    //       <NavLink
    //         className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
    //         to="/blogs"
    //       >
    //         BLOGS
    //       </NavLink>
    //       <NavLink
    //         className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
    //         to="/manageInventory"
    //       >
    //         MANAGE INVENTORY
    //       </NavLink>
    //       <NavLink
    //         className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
    //         to="/addItem"
    //       >
    //         ADD ITEM
    //       </NavLink>
    //       <NavLink
    //         className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
    //         to="/myItem"
    //       >
    //         MY ITEM
    //       </NavLink>
    //       <NavLink
    //         className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
    //         to="/login"
    //       >
    //         LOGIN
    //       </NavLink>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Header;
