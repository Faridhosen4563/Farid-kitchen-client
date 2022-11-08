import React, { useContext, useState } from "react";
import { FaEye, FaLock, FaUser } from "react-icons/fa";
import { HiMail, HiPhotograph } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/login/register.png";
import googleLogo from "../../../assets/image/login/icons8-google (1).svg";
import gitHubLogo from "../../../assets/image/login/icons8-github.svg";
import facebookLogo from "../../../assets/image/login/icons8-facebook.svg";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState(null);
  const { createUser, googleSigIn, gitHubSignIn, facebookSignIn } =
    useContext(AuthContext);
  const handleSubmit = (event) => {
    setError(" ");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, photoUrl, email, password, confirm);

    if (password !== confirm) {
      return setError("Password does not match");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Success",
          showConfirmButton: false,
          timer: 1000,
        });
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };

  const handleGoogle = () => {
    googleSigIn()
      .then((result) => {
        const user = result.user;
        setError(" ");
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign Up Success",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };

  const handleGitHub = () => {
    gitHubSignIn()
      .then((result) => {
        const user = result.user;
        setError(" ");
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign Up Success",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };

  const handleFacebook = () => {
    facebookSignIn()
      .then((result) => {
        const user = result.user;
        setError(" ");
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign Up Success",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };

  return (
    <div className="hero my-20">
      <div className="hero-content grid md:grid-cols-2 gap-4">
        <div className="text-center ">
          <img src={logo} alt="Log in" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold my-6 text-center">Register!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <div className="flex items-center border-2 py-2 px-3 rounded-lg">
                <FaUser />
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <div className="flex items-center border-2 py-2 px-3 rounded-lg">
                <HiPhotograph />
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  name="photo"
                  placeholder="Enter your photoUrl"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="flex items-center border-2 py-2 px-3 rounded-lg">
                <HiMail />
                <input
                  className="pl-2 outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
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
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="pl-2 outline-none border-none"
                    required
                  />
                </div>
                <FaEye />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="flex justify-between items-center border-2 py-2 px-3 rounded-lg">
                <div className="flex items-center">
                  <FaLock></FaLock>
                  <input
                    type="password"
                    name="confirm"
                    placeholder="Confirm your password"
                    className="pl-2 outline-none border-none"
                    required
                  />
                </div>
                <FaEye />
              </div>
              <label className="label text-red-500">{error}</label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <hr />
            <p className="text-center text-xl font-semibold">Or</p>
            <hr />
            <div className="flex justify-evenly">
              <button onClick={handleGoogle}>
                <img src={googleLogo} alt="" />
              </button>
              <button onClick={handleGitHub}>
                <img src={gitHubLogo} alt="" />
              </button>
              <button onClick={handleFacebook}>
                <img src={facebookLogo} alt="" />
              </button>
            </div>
            <div className="text-center my-6">
              <p>
                Already have an account? Please{" "}
                <Link to="/login" className="text-orange-400">
                  LogIn
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
