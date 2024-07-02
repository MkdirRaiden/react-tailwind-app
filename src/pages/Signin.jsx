import { Link as NavLink } from "react-router-dom";
import { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { BiShow, BiHide } from "react-icons/bi";
import logo from "../assets/logo.png";
import Message from "../components/Message";
const Signin = () => {
  const [message, setMesssage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const formSubmit = (e) => {
    setMesssage("");
    e.preventDefault();
    const myForm = document.getElementById("form");
    const navLink = document.getElementById("navLink");
    const form = new FormData(myForm);
    var email = form.get("email");
    var password = form.get("password");

    if (email == "" || password == "") {
      return setMesssage("Please fill out the form!");
    }

    let user = JSON.parse(localStorage.getItem(email));
    if (!user) {
      myForm.reset();
      return setMesssage("Invalid credentials! Try again.");
    }
    if (user.password !== password) {
      myForm.reset();
      return setMesssage("Invalid credentials! Try again.");
    } else {
      localStorage.setItem("loggedIn", email);
      navLink.click();
    }
  };
  return (
    <div className="bg-gray-100 relative min-h-screen flex flex-col space-y-6 justify-center items-center p-4">
      {message == "" ? null : (
        <Message message={message} setMesssage={setMesssage} />
      )}

      <NavLink className="md:text-3xl text-xl " to="/">
        <img src={logo} alt="logo" width={60} />
      </NavLink>
      <form className=" md:w-1/3 w-full text-lg" id="form" method="post">
        <h1 className="mb-4 md:text-3xl text-2xl font-bold text-primary">
          LOGIN
        </h1>

        <div className="flex flex-col gap-4 bg-white shadow-sm rounded-sm md:p-8 p-4">
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
        <p className="mt-6">
          Don't have an account?{" "}
          <NavLink className="text-blue-400 hover:opacity-5" to={"/signup"}>
            SignUp
          </NavLink>
        </p>
      </form>
      <NavLink id="navLink" className="hidden" to="/"></NavLink>
    </div>
  );
};

export default Signin;
