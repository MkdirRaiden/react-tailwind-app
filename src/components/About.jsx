import aboutImg1 from "../assets/aboutImg1.png";
import aboutImg2 from "../assets/aboutImg2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link as NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="space-y-6 py-16" data-section id="about">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={aboutImg1} alt="about image" />
          </motion.div>
          <motion.div
            className="md:w-2/5"
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="md:text-5xl text-3xl font-bold text-primary dark:text-secondary mb-5 leading-relaxed">
              We have been improving our product{" "}
              <span className="text-tertiary font-semibold">
                for better user experience.
              </span>
            </h2>
            <p className="text-tertiary text-lg mb-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              quo exercitationem tempore recusandae, aspernatur voluptates.
            </p>
            <NavLink to={"/getStarted#start"} className="btnPrimary">
              Get Started <FaArrowRightLong />
            </NavLink>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={aboutImg2} alt="about image" />
          </motion.div>
          <motion.div
            className="md:w-2/5"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="md:text-5xl text-3xl font-bold text-primary dark:text-secondary mb-5 leading-relaxed">
              You can practice at any time{" "}
              <span className="text-tertiary font-semibold">
                convenient for you.
              </span>
            </h2>
            <p className="text-tertiary text-lg mb-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              quo exercitationem tempore recusandae, aspernatur voluptates.
            </p>
            <NavLink to={"/signup"} className="btnPrimary">
              Sign Up
              <FaArrowRightLong />
            </NavLink>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
