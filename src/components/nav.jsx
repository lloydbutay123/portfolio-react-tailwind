import logo from "../assets/logo/main-logo.svg";
import { useState } from "react";

const Nav = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false); // Close menu after click
    }
  };

  return (
    <header className="flex fixed w-full z-50 pl-[24px] justify-between">
      <nav className="flex justify-between w-full lg:p-[72px] xl:pb-0">
        <div className="flex items-center">
          <a href="#hero" className="dark:text-white">
            HOME
          </a>
        </div>
        <div className="flex items-center bg-white w-[96px] lg:w-[112px] p-[16px] rounded-tl-[30px] rounded-b-[30px] lg:rounded-[30px]">
          <img
            src="/assets/36cb5d43-b2e6-42f8-939c-606e63706573.png"
            className="w-full"
            alt=""
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
