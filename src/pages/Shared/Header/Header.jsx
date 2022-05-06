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
          <div class="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-2">
            <div class="flex items-center justify-between">
              <div class="relative z-20 flex justify-center items-center">
                <NavLink to="/" className="cursor-pointer">
                  <img src={logo} alt="" />
                </NavLink>
              </div>

              <div class="flex items-center justify-end ">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  class="peer hidden"
                />
                <label
                  for="hamburger"
                  class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                </label>

                <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] shared-bg border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                  <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                    <ul class=" pt-32 text-white space-y-8 lg:space-y-0 lg:flex lg:pt-0">
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
                    </ul>

                    <div class=" py-8 md:py-16  lg:py-0 lg:pr-0">
                      {user ? (
                        <div className="flex justify-center items-center">
                          <NavLink
                            onClick={() => signOut(auth)}
                            to="login"
                            className={({ isActive }) =>
                              isActive ? "activeLink" : "navLink"
                            }
                          >
                            LogOut
                          </NavLink>
                        </div>
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
                    </div>
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
