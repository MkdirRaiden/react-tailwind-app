import { AiOutlineLogout } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link as NavLink } from "react-router-dom";

const Dropdown = ({
  user,
  showOption,
  setShowOption,
  userType,
  setUserType,
  userMale,
  userFemale,
  setIsLoggedIn,
  setMesssage,
}) => {
  return (
    <>
      {" "}
      <ul className="absolute w-52 flex flex-col items-center md:top-[130%] top-[130%] right-0 dark:bg-bgDark bg-white shadow-3xl dark:shadow-dark3xl rounded-sm px-6 py-8 font-light text-sm  border-gray-200 dark:border-gray-800 border">
        <li>
          <ul>
            {showOption ? (
              <>
                <li className="text-center">Chose a picture</li>
                <li className="flex gap-4 items-end justify-center py-4">
                  <img
                    onClick={() => {
                      setUserType("male");
                      setShowOption(!showOption);
                      localStorage.setItem("userType", "male");
                    }}
                    className={`rounded-full hover:cursor-pointer ${
                      userType == "male"
                        ? "border-2 border-green-500"
                        : "border hover:border-green-500"
                    }`}
                    src={userMale}
                    alt=""
                    width={50}
                  />
                  <img
                    onClick={() => {
                      setUserType("female");
                      setShowOption(!showOption);
                      localStorage.setItem("userType", "female");
                    }}
                    className={`rounded-full hover:cursor-pointer ${
                      userType == "female"
                        ? "border-2 border-green-500"
                        : "border hover:border-green-500"
                    }`}
                    src={userFemale}
                    alt=""
                    width={50}
                  />
                </li>
              </>
            ) : (
              <>
                <li className="relative flex items-center justify-center mb-2">
                  <img
                    type="button"
                    onClick={() => {
                      setShowOption(!showOption);
                    }}
                    src={userType == "male" ? userMale : userFemale}
                    alt="user image"
                    width={100}
                    height={100}
                    className="rounded-full overflow-hidden border hover:cursor-pointer hover:opacity-75"
                  />
                  <span className="absolute right-6 bottom-1 opacity-75">
                    <FaRegEdit />
                  </span>
                </li>
              </>
            )}
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
        </li>
        <li className="w-full mt-4 mb-2">
          <NavLink
            to={"/profile"}
            className="flex items-center gap-1 hover:bg-gray-100 hover:dark:bg-bgLtDark w-full rounded-full px-4 py-1 text-lg border dark:border-bgLtDark"
          >
            <CgProfile />
            Profile
          </NavLink>
        </li>
        <li className="w-full">
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setMesssage("Logged out successfully!");
              localStorage.removeItem("loggedIn");
            }}
            type="button"
            className="flex items-center gap-1 hover:bg-gray-100 hover:dark:bg-bgLtDark w-full rounded-full px-4 py-1 text-lg border dark:border-bgLtDark"
          >
            <AiOutlineLogout />
            Logout
          </button>
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
