import { Outlet } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const Layout = () => {
  const [home, setHome] = useState(false);
  const { scrollYProgress } = useScroll();
  const [theme, setTheme] = useState(
    localStorage.theme ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false
  );
  useEffect(() => {
    if (theme) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="bg-gray-100 dark:bg-bgLtDark text-primary dark:text-gray-100 ">
      <motion.div
        className="h-[3px] bg-blue-300 fixed top-0 left-0 right-0"
        style={{ scaleX: scrollYProgress, transformOrigin: 0, zIndex: 100 }}
      />

      <Navbar theme={theme} setTheme={setTheme} home={home} />
      <div className=" md:px-10 p-4 max-w-screen-2xl mx-auto ">
        <Outlet context={[setHome]} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
