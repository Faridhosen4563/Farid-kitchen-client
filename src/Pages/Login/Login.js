import React from "react";
import { FaEye, FaLock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../assets/image/login/login.png";
import googleLogo from "../../assets/image/login/icons8-google (1).svg";
import gitHubLogo from "../../assets/image/login/icons8-github.svg";
import facebookLogo from "../../assets/image/login/icons8-facebook.svg";

const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid md:grid-cols-2 gap-4">
        <div className="text-center ">
          <img src={logo} alt="Log in" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold my-6 text-center">Login now!</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="flex items-center border-2 py-2 px-3 rounded-lg">
                <HiMail />
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex justify-between items-center border-2 py-2 px-3 rounded-lg">
                <div className="flex items-center">
                  <FaLock></FaLock>
                  <input
                    type="text"
                    placeholder="password"
                    className="pl-2 outline-none border-none"
                  />
                </div>
                <FaEye />
              </div>
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <hr />
            <p className="text-center text-xl font-semibold">Or</p>
            <hr />
            <div className="flex justify-evenly">
              <button>
                <img src={googleLogo} alt="" />
              </button>
              <button>
                <img src={gitHubLogo} alt="" />
              </button>
              <button>
                <img src={facebookLogo} alt="" />
              </button>
            </div>
            <div className="text-center my-6">
              <p>
                Don't have an account? Please{" "}
                <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
