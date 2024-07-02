import { useState } from "react";
import PricingCardListItem from "../shared/PricingCardListItem";
import { CiLocationArrow1 } from "react-icons/ci";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";
import { Link as NavLink } from "react-router-dom";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const packages = [
    {
      name: "Start",
      monthlyPrice: 0,
      yearlyPrice: 0,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae architecto natus sequi doloremque ipsa illum.",
    },
    {
      name: "Advanced",
      monthlyPrice: 45,
      yearlyPrice: 399,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae architecto natus sequi doloremque ipsa illum.",
    },
    {
      name: "Premium",
      monthlyPrice: 65,
      yearlyPrice: 599,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae architecto natus sequi doloremque ipsa illum.",
    },
  ];
  return (
    <>
      <div className="py-16" data-section id="pricing">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary dark:text-secondary mb-2">
            Here are all our plans.
          </h2>
          <p className="md:w-1/3 px-4 text-tertiary mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eum
            fugit, iure officiis quas nobis.
          </p>
          <div className="mt-10">
            <label
              htmlFor="toggle"
              className="inline-flex items-center cursor-pointer"
            >
              <span className="mr-8 text-2xl font-semibold">Monthly</span>
              <div className="w-14 h-6 border-2 dark:border-gray-700 rounded-full flex items-center">
                <div
                  className={`w-6 h-6 flex items-center justify-center text-2xl rounded-full transition-all duration-200 ease-in-out ${
                    isYearly ? "ml-8 text-blue-400" : ""
                  }`}
                >
                  {isYearly ? (
                    <MdOutlineRadioButtonChecked />
                  ) : (
                    <MdOutlineRadioButtonUnchecked />
                  )}
                </div>
              </div>
              <span className="ml-8 text-2xl font-semibold">Yearly</span>
            </label>
            <input
              type="checkbox"
              id="toggle"
              checked={isYearly}
              className="hidden"
              onChange={() => {
                setIsYearly(!isYearly);
              }}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-10 mt-16 md:w-11/12 mx-auto">
          {packages.map((pkg, index) => {
            return (
              <div
                key={index}
                className={`bg-white dark:bg-bgDark text-center py-10 rounded-lg shadow-3xl dark:shadow-dark3xl dark:border-gray-900 md:px-6 px-4 cursor-default border-2 hover:border-blue-400 ${
                  pkg.name == "Advanced"
                    ? "border-2 border-blue-400 dark:border-blue-400"
                    : ""
                }`}
              >
                <h3 className="text-3xl font-bold text-center text-primary dark:text-secondary">
                  {pkg.name}
                </h3>
                <p className="text-tertiary my-5 text-center">
                  {pkg.description}
                </p>
                <p className="text-4xl text-blue-400 font-bold mt-5">
                  ${isYearly ? `${pkg.yearlyPrice}` : `${pkg.monthlyPrice}`}
                  <span className="text-tertiary font-mediun text-base">
                    /{isYearly ? "year" : "month"}
                  </span>
                </p>
                <PricingCardListItem nme={pkg.name} />
                <div className="mt-10 mx-auto w-fit">
                  <NavLink
                    to={"/buyPackage"}
                    className={`${
                      pkg.name == "Advanced" ? "btnPrimary" : "btnSecondary"
                    }`}
                  >
                    Get Started <CiLocationArrow1 />
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pricing;
