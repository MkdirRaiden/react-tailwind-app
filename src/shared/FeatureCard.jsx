import { BsArrowRightCircle } from "react-icons/bs";
import { Link as NavLink } from "react-router-dom";

const FeatureCard = ({ image, text, cls = "" }) => {
  return (
    <NavLink
      to={"/noPage"}
      className={`bg-white dark:bg-bgDark relative flex flex-col justify-between items-center gap-4 rounded-[35px] px-6 py-8 md:h-[400px] h-auto shadow-3xl dark:shadow-dark3xl  hover:-translate-y-4 transition-all duration-300 cursor-pointer ${cls}`}
    >
      <div className="overflow-hidden ">
        <img src={image} alt="feature image" />
      </div>
      <h5 className="text-xl font-semibold">{text}</h5>
      <span className="absolute bottom-4 right-4 text-3xl shadow-lg bg-gray-100 dark:bg-gray-900 rounded-full">
        {" "}
        <BsArrowRightCircle />
      </span>
    </NavLink>
  );
};

export default FeatureCard;
