import { useState } from "react";
import { Link as NavLink } from "react-router-dom";
import Search from "../components/Search";
import { FiUser } from "react-icons/fi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import DarkModeButton from "./DarkModeButton";
import userMale from "../assets/userMale.png";
import userFemale from "../assets/userFemal.png";
import Dropdown from "../components/Dropdown";

const NavbarItems = ({
  id,
  toggleSearch,
  showSearch,
  theme,
  setTheme,
  userType,
  setUserType,
  isLoggedIn,
  setIsLoggedIn,
  user,
  setMesssage,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [showOption, setShowOption] = useState(false);
  return (
    <div className="flex justify-center items-center space-x-4 relative">
      {showSearch ? (
        <Search toggleSearch={toggleSearch} />
      ) : (
        <>
          {" "}
          <DarkModeButton id={id} theme={theme} setTheme={setTheme} />
          <div className="flex space-x-2">
            <button
              onClick={toggleSearch}
              className={`text-2xl hover:bg-gray-100 ${
                isLoggedIn ? "px-2 py-1" : {}
              } dark:hover:bg-bgLtDark p-1 rounded-full`}
            >
              <HiMiniMagnifyingGlass />
            </button>
            {isLoggedIn ? (
              <div className="relative inline">
                <div
                  className="flex items-center p-1 rounded-full hover:cursor-pointer"
                  onClick={() => {
                    setDropdownOpen(!dropdownOpen);
                  }}
                >
                  <img
                    type="button"
                    src={userType == "male" ? userMale : userFemale}
                    alt="user image"
                    width={40}
                    height={40}
                    className={`rounded-full ${
                      dropdownOpen ? " border-2" : {}
                    } border dark:border-gray-700 overflow-hidden`}
                  />
                  {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>

                {dropdownOpen ? (
                  <Dropdown
                    user={user}
                    userType={userType}
                    setUserType={setUserType}
                    showOption={showOption}
                    setShowOption={setShowOption}
                    userMale={userMale}
                    userFemale={userFemale}
                    setIsLoggedIn={setIsLoggedIn}
                    setMesssage={setMesssage}
                  />
                ) : null}
              </div>
            ) : (
              <NavLink
                to={"/signin"}
                className="text-2xl hover:bg-gray-100 dark:hover:bg-bgLtDark p-1 rounded-full"
              >
                <FiUser />
              </NavLink>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarItems;
