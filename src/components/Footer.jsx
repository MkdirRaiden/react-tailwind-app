import logo from "../assets/logo.png";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import {
  CiLocationOn,
  CiFacebook,
  CiInstagram,
  CiTwitter,
  CiLinkedin,
} from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="md:px-10 p-3 bg-[#010851] max-w-screen-2xl mx-auto py-12 text-white">
        <div className="my-12 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 space-y-8">
            <img src={logo} alt="logo" width={100} />
            <p className="md:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quas consequuntur, molestiae nisi quam odio.
            </p>{" "}
            <form action="">
              <input
                className="bg-[#9a7af159] py-2 px-4 focus:outline-none rounded-md"
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
              />
              <input
                type="submit"
                value="Subscribe"
                name="submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="py-2 px-4 bg-blue-400 rounded-md -ml-2 hover:bg-white hover:text-primary cursor-pointer transition-all duration-300"
              />
            </form>
          </div>
          <div className="md:w-2/3 flex flex-col md:flex-row justify-between items-start gap-4 flex-wrap">
            <div className="mt-5 space-y-4">
              <h4 className="text-2xl">Platform</h4>
              <ul className="space-y-3">
                <li className="hover:text-gray-300 block">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    className="hover:cursor-pointer"
                    to={"home"}
                  >
                    Overview
                  </Link>
                </li>
                <li className="hover:text-gray-300 block">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    className="hover:cursor-pointer"
                    to={"feature"}
                  >
                    Feature
                  </Link>
                </li>
                <li className="hover:text-gray-300 block">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    className="hover:cursor-pointer"
                    to={"about"}
                  >
                    About
                  </Link>
                </li>
                <li className="hover:text-gray-300 block">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    className="hover:cursor-pointer"
                    to={"pricing"}
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-5 space-y-4">
              <h4 className="text-2xl">Help</h4>
              <ul className="space-y-3">
                <li className="hover:text-gray-300 block">
                  <NavLink className="hover:cursor-pointer" to={"/noPage"}>
                    How does it works?
                  </NavLink>
                </li>
                <li className="hover:text-gray-300 block">
                  <NavLink className="hover:cursor-pointer" to={"/noPage"}>
                    Where to ask question?
                  </NavLink>
                </li>
                <li className="hover:text-gray-300 block">
                  <NavLink className="hover:cursor-pointer" to={"/noPage"}>
                    How to play?
                  </NavLink>
                </li>
                <li className="hover:text-gray-300 block">
                  <NavLink className="hover:cursor-pointer" to={"/noPage"}>
                    What is needed for this?
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="mt-5 space-y-4">
              <h4 className="text-2xl">Contacts</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <AiOutlineMail /> 1996raiden27@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <CiLocationOn /> Lakhipur, Goalpara, Assam
                </li>
                <li className="flex items-center gap-2">
                  <IoIosPhonePortrait /> 6002520524
                </li>

                <li>
                  <ul className="flex flex-row gap-2 text-3xl">
                    <li className="hover:text-blue-300">
                      <a href="https://www.facebook.com/muktadir.ahmed.315">
                        <CiFacebook />
                      </a>
                    </li>
                    <li className="hover:text-blue-300">
                      <a href="https://www.instagram.com/muktadir1996ahmed/">
                        <CiInstagram />
                      </a>
                    </li>
                    <li className="hover:text-blue-300">
                      <a href="https://github.com/MkdirRaiden">
                        <FaGithub />
                      </a>
                    </li>
                    <li className="hover:text-blue-300">
                      <a href="https://www.linkedin.com/in/muktadir-ahmed-arsalan/">
                        <CiLinkedin />
                      </a>
                    </li>
                    <li className="hover:text-blue-300">
                      <a href="https://x.com/mukta_ahme46826">
                        <CiTwitter />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center dark:bg-black py-4">
        <p>
          <span className="text-red">&#169;</span> Ahmed Mukta 2024. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
