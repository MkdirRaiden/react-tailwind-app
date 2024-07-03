import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const DarkModeButton = ({ id, theme, setTheme }) => {
  return (
    <div className="flex items-center">
      {" "}
      <label htmlFor={id} className="inline-flex items-center cursor-pointer">
        <div
          className={`w-14 h-7 ${
            theme ? "bg-bgLtDark" : "bg-gray-100"
          } rounded-full`}
        >
          <div
            className={`w-7 h-7 text-2xl bg-white  flex items-center justify-center rounded-full transition-all duration-900 ease-in-out ${
              theme ? "ml-7 bg-bgDark" : " text-bgDark"
            }`}
          >
            {theme ? <MdDarkMode /> : <MdLightMode />}
          </div>
        </div>
      </label>
      <input
        type="checkbox"
        id={id}
        checked={theme}
        className="hidden"
        onChange={() => {
          setTheme(!theme);
        }}
      />
    </div>
  );
};

export default DarkModeButton;
