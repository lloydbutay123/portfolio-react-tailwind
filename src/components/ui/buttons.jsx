import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const buttons = ({ ariaLabel,value,navigateTo }) => {
  return (
    <button
      className="dark:text-white z-50 relative flex left-5 items-center font-bold"
      aria-label={ariaLabel}
      onClick={navigateTo}
    > {value}
      <span className="ml-3">
        <FaArrowRightLong />
      </span>
    </button>
  );
};

export default buttons;
