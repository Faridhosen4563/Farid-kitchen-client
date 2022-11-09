import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import logo from "../../assets/logo.png";

const Headers = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const menuItem = (
    <>
      <li className="text-xl font-normal">
        <Link to="/">Home</Link>
      </li>
      <li className="text-xl font-normal">
        <Link to="/blog">Blog</Link>
      </li>
      {user?.email ? (
        <>
          <li className="text-xl font-normal">
            <Link to="/myreview">My Reviews</Link>
          </li>
          <li className="text-xl font-normal">
            <Link to="/addservice">Add service</Link>
          </li>
          <li className="text-xl font-normal">
            <Link onClick={handleLogOut}>Log Out</Link>
          </li>
        </>
      ) : (
        <li className="text-xl font-normal">
          <Link to="/login">Log In</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 h-20 py-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link>
          <div className="flex justify-center items-center">
            <img src={logo} alt="logo" className="h-20 w-20" />
            <p className="font-medium text-2xl">Farid Kitchen</p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt=""
            referrerPolicy="no-referrer"
            className="h-12 w-12 rounded-full"
          />
        ) : (
          <FaUser></FaUser>
        )}
      </div>
    </div>
  );
};

export default Headers;
