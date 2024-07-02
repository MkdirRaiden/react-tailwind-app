import FeatureCard from "../shared/FeatureCard";
import featureImg1 from "../assets/feature1.png";
import featureImg2 from "../assets/feature2.png";
import featureImg3 from "../assets/feature3.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Features = () => {
  return (
    <>
      <div className="py-16" data-section id="feature">
        <div className="flex lg:flex-row flex-col justify-between items-start gap-10">
          <motion.div
            className="lg:w-1/4"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h5 className="text-3xl font-bold text-primary dark:text-secondary lg:w-1/2 mb-3">
              Why we are better than others?
            </h5>
            <p className="text-base">
              Be among us, explore and gain knowledge. Indeed consistency is the
              key to success.
            </p>
          </motion.div>
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:gap-12 gap-8">
              <FeatureCard
                image={featureImg1}
                text={
                  "Be Consistent and read books, for they gives you wisdom."
                }
                dir={"up"}
                delay={0.3}
              />
              <FeatureCard
                image={featureImg2}
                text={
                  "A Knowledge without application is worthless, Start building."
                }
                cls="md:mt-14"
                dir={"down"}
                delay={0.4}
              />
              <FeatureCard
                image={featureImg3}
                text={
                  "Chill and relax for they keeps you healthy and productive."
                }
                dir={"up"}
                delay={0.5}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
