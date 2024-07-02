import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link as NavLink } from "react-router-dom";

const Banner = ({ banner, heading, subheading, btn, link }) => {
  return (
    <>
      {" "}
      <div className="rounded-xl border-b border-r dark:border-bgDark shadow-md rounded-br-[80px] md:p-12 px-4 py-8 overflow-hidden md:mt-6 mt-2">
        <div className="flex flex-col items-center gap-4 md:gap-10 md:flex-row-reverse justify-between">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={banner} alt="banner image" className="lg:h-[400px]" />
          </motion.div>
          <motion.div
            className="md:w-3/5"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="md:text-7xl text-4xl text-primary dark:text-secondary font-bold mb-6 leading-relaxed">
              {heading}
            </h2>
            <p className="text-2xl text-tertiary mb-8">{subheading}</p>

            <NavLink to={link} className="btnPrimary">
              {btn} <CiLocationArrow1 />
            </NavLink>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
