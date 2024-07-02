import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Search = ({ toggleSearch }) => {
  return (
    <>
      <form className="relative w-full" action="">
        <button
          className="absolute top-2 left-2 cursor-default text-2xl"
          type="submit"
        >
          <HiMiniMagnifyingGlass />
        </button>
        <input
          className="bg-gray-100 px-10 py-1 w-full h-10 dark:bg-bgLtDark rounded-full border-none focus:outline-none"
          type="text"
          placeholder="Search..."
          autoComplete="true"
        />
        <button
          className="absolute top-2 right-2 cursor-pointer text-2xl hover:opacity-75"
          onClick={toggleSearch}
        >
          <IoIosCloseCircleOutline />
        </button>
      </form>
    </>
  );
};

export default Search;
