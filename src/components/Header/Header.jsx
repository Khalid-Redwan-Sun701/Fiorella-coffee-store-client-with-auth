import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll event
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowHeader(false);
    } else {
      // Scrolling up
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed top-0 z-50 flex justify-center transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar bg-amber-500/80 backdrop-blur-md shadow-sm border-none rounded-lg transition-opacity duration-500 w-[90%] lg:px-28">
        {/* === Navbar Start === */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden border-none text-amber-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-amber-500/80 backdrop-blur-md rounded-box border-none z-10 mt-5 w-52 p-4 shadow text-amber-100"
            >
              <li className="my-2.5">
                <NavLink
                  to="/"
                  className="navlink text-amber-700 text-md font-bold"
                >
                  Home
                </NavLink>
              </li>
              <li className="my-2.5">
                <NavLink
                  to="/addCoffee"
                  className="navlink text-amber-700 text-md font-bold"
                >
                  Add Coffee
                </NavLink>
              </li>
              <li className="my-2.5">
                <NavLink
                  to="/signUp"
                  className="navlink text-amber-700 text-md font-bold"
                >
                  Sign Up
                </NavLink>
              </li>
              <li className="my-2.5">
                <NavLink
                  to="/users"
                  className="navlink text-amber-700 text-md font-bold"
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="font-bold text-xl text-amber-100 border-none">
            Fiorella Café
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-amber-100">
            <li>
              <NavLink to="/" className="navlink text-amber-100 text-lg">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addCoffee"
                className="navlink text-amber-100 text-lg"
              >
                Add Coffee
              </NavLink>
            </li>
            <li>
              <NavLink to="/signUp" className="navlink text-amber-100 text-lg">
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className="navlink text-amber-100 text-lg">
                Users
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end mr-4">
          <Link to="/signIn">
            <p className="border-none text-amber-100 font-bold">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
