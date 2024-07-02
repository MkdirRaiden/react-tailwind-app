import { ImSun } from "react-icons/im";
import { MdDarkMode } from "react-icons/md";

const DarkModeButton = ({ id, theme, setTheme }) => {
  return (
    <div className="flex items-center">
      {" "}
      <label htmlFor={id} className="inline-flex items-center cursor-pointer">
        <div
          className={`w-14 h-7 border ${
            theme ? "border-gray-700" : "border-gray-100"
          } rounded-full`}
        >
          <div
            className={`w-7 h-7 text-2xl border bg-white  flex items-center justify-center rounded-full transition-all duration-600 ease-in-out ${
              theme ? "ml-7 text-blue-400" : " text-gray-950 hover:ml-1"
            }`}
          >
            {theme ? <MdDarkMode /> : <ImSun />}
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
