import React from "react";
import {motion} from 'framer-motion'
const AboutButton = ({ selected, active, content }) => {
  const buttonClasses = active ? "fw-bold" : "text-[#ADB7BE]";

  return (
    <button onClick={selected} className="relative">
      <p className={`mr-3 font-semibold hover:text-gray-700 ${buttonClasses}`}>
        {content}
      </p>
      {active ? (
        <motion.div className="underline" layoutId="underline" />
      ) : null}
    </button>
  );
};

export default AboutButton;