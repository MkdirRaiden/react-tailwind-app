import { Link as NavLink } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import { BiShow, BiHide } from "react-icons/bi";
import logo from "../assets/logo.png";
import { useState } from "react";
import Message from "../components/Message";
const Signup = () => {
  const [message, setMesssage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const formSubmit = (e) => {
    setMesssage("");
    e.preventDefault();
    const form = new FormData(document.getElementById("form"));
    const navLink = document.getElementById("navLink");
    var name = form.get("name");
    var email = form.get("email");
    var password = form.get("password");
    var confirmPassword = form.get("confirmPassword");

    if (name == "" || email == "" || password == "" || confirmPassword == "") {
      return setMesssage("Please fill out the form!");
    }
    if (password.length < 6) {
      return setMesssage("Password must be atleast 6 characters!");
    }
    if (password !== confirmPassword) {
      return setMesssage("Password does not match!");
    }
    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    let user = JSON.parse(localStorage.getItem(email));

    if (user) {
      return setMesssage("User already exist with this email!");
    } else {
      localStorage.setItem(email, JSON.stringify(newUser));
      localStorage.setItem("loggedIn", email);
      localStorage.setItem("userType", "male");
      navLink.click();
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col space-y-6 justify-center items-center p-4">
      {message == "" ? null : (
        <Message message={message} setMesssage={setMesssage} />
      )}

      <NavLink className="md:text-3xl text-xl " to="/">
        <img src={logo} alt="logo" width={60} />
      </NavLink>

      <form className=" md:w-1/3 w-full text-lg" id="form" method="post">
        <h1 className="mb-2 md:text-3xl text-2xl font-bold text-primary">
          SIGNUP
        </h1>

        <div className="flex flex-col gap-4 bg-white shadow-sm rounded-sm md:p-6 p-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
            <input
              className="bg-gray-100 focus:outline-none px-4 py-2 h-10 rounded-full"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              className="bg-gray-100 focus:outline-none px-4 py-2 h-10 rounded-full"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <div className="relative">
              <input
                className="bg-gray-100 w-full focus:outline-none px-4 py-2 h-10 rounded-full"
                type={!showPassword ? "password" : "text"}
                id="password"
                name="password"
              />
              <button
                type="button"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="absolute bottom-3 right-4"
              >
                {" "}
                {showPassword ? <BiHide /> : <BiShow />}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <div className="relative">
              <input
                className="bg-gray-100 w-full focus:outline-none px-4 py-2 h-10 rounded-full"
                type={!showConfirmPassword ? "password" : "text"}
                id="confirmPassword"
                name="confirmPassword"
              />
              <button
                type="button"
                onClick={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                }}
                className="absolute bottom-3 right-4"
              >
                {" "}
                {showConfirmPassword ? <BiHide /> : <BiShow />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <button
            type="submit"
            className="bg-white flex gap-1 justify-center items-center w-full p-2 shadow-sm rounded-sm hover:bg-gray-100"
            onClick={formSubmit}
          >
            submit
            <CiLocationArrow1 />
          </button>
        </div>
        <p className="mt-4">
          Already have an account?{" "}
          <NavLink className="text-blue-400 hover:opacity-5" to={"/signin"}>
            SignIn
          </NavLink>
        </p>
      </form>
      <NavLink id="navLink" className="hidden" to="/"></NavLink>
    </div>
  );
};

export default Signup;
