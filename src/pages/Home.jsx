import Banner from "../shared/Banner";
import banner from "../assets/banner.png";
import Features from "../components/Features";
import About from "../components/About";
import Pricing from "../components/Pricing";
import NewsLetter from "../components/NewsLetter";
import { useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [setHome] = useOutletContext();
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    setHome(true);

    return () => {
      mounted.current = false;
      setHome(false);
    };
  }, []);
  return (
    <>
      <div className="md:py-16 py-16 relative" data-section id="home">
        <Banner
          banner={banner}
          heading={"Develope Your Skills Without Diligence"}
          subheading={
            "Welcome to our website. Explore amazing contents and discover more!"
          }
          btn={"Get Started"}
          link={"/getStarted"}
        />
      </div>
      <Features />
      <About />
      <Pricing />
      <NewsLetter />
    </>
  );
};

export default Home;
