import { useState } from "react";
import { Link } from "react-scroll";
import { Link as NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdMenu, MdClose } from "react-icons/md";
import NavbarItems from "../shared/NavbarItems";
import Message from "../components/Message";

const Navbar = ({ theme, setTheme, home }) => {
  const [message, setMesssage] = useState("");
  const pathName = window.location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const userEmail = localStorage.getItem("loggedIn");
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  let user = false;
  if (userEmail) {
    user = JSON.parse(localStorage.getItem(userEmail));
  }
  const [isLoggedIn, setIsLoggedIn] = useState(userEmail ? true : false);
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      <nav className="bg-white dark:bg-bgDark md:px-10 px-3 max-w-screen-2xl mx-auto border-b border-gray-200 dark:border-gray-800 fixed top-0 left-0 right-0">
        {message == "" ? null : (
          <div className="absolute w-full flex top-20 left-0 md:justify-center">
            <Message message={message} setMesssage={setMesssage} />
          </div>
        )}

        <div className="text-lg flex items-center justify-between font-medium">
          <div className="flex items-center space-x-12">
            <NavLink
              className="flex h-20 items-center gap-1 md:text-3xl text-xl font-bold"
              to="/"
            >
              <img src={logo} alt="logo" width={60} />
              <div className="flex flex-col p-2 text-2xl">
                <span>AHMED</span>
                <span className="text-xs">mukta</span>
              </div>
            </NavLink>
            <ul className="md:flex hidden h-20 space-x-6">
              {home ? (
                <>
                  {" "}
                  {navItems.map(({ link, path }) => {
                    return (
                      <Link
                        className="flex items-center hover:cursor-pointer hover:border-blue-300 hover:border-b hover:bg-gray-50 dark:hover:bg-bgLtDark px-1"
                        key={link}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-75}
                        to={path}
                      >
                        {link}
                      </Link>
                    );
                  })}
                </>
              ) : (
                <>
                  <NavLink
                    to={"/"}
                    className={`${
                      pathName == "/" ? "active" : {}
                    } flex items-center hover:cursor-pointer hover:border-blue-300 hover:border-b hover:bg-gray-50 dark:hover:bg-bgLtDark px-1`}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"/getStarted"}
                    className={`${
                      pathName == "/getStarted" ? "active" : {}
                    } flex items-center hover:cursor-pointer hover:border-blue-300 hover:border-b hover:bg-gray-50 dark:hover:bg-bgLtDark px-1`}
                  >
                    Get Started
                  </NavLink>
                </>
              )}
            </ul>
          </div>

          <div className="md:flex hidden">
            <NavbarItems
              id={"toggle1"}
              toggleSearch={toggleSearch}
              showSearch={showSearch}
              theme={theme}
              setTheme={setTheme}
              userType={userType}
              setUserType={setUserType}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
              message={message}
              setMesssage={setMesssage}
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              className="dark:text-gray-100 text-4xl focus:outline-none focus:outline-gray-300"
            >
              {isMenuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden navDropdown dark:bg-bgDark ${
          isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"
        }`}
      >
        <ul className="space-y-4 pt-24 pb-5 bg-white dark:bg-bgDark">
          {home ? (
            <>
              {" "}
              {navItems.map(({ link, path }) => {
                return (
                  <li className="block cursor-pointer w-fit" key={link}>
                    <Link
                      className="px-4"
                      activeClass="activeMob"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      to={path}
                      onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                      }}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </>
          ) : (
            <>
              <NavLink
                to={"/"}
                className={`${
                  pathName == "/" ? "activeMob" : {}
                } flex items-center px-4`}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Home
              </NavLink>
              <NavLink
                to={"/getStarted"}
                className={`${
                  pathName == "/getStarted" ? "activeMob" : {}
                } flex items-center px-4`}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Get Started
              </NavLink>
            </>
          )}
        </ul>
        <div className="bg-white dark:bg-bgDark py-4 w-full px-4">
          <NavbarItems
            id={"toggle2"}
            showSearch={showSearch}
            toggleSearch={toggleSearch}
            theme={theme}
            setTheme={setTheme}
            userType={userType}
            setUserType={setUserType}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            user={user}
            setMesssage={setMesssage}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
