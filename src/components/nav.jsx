import logo from "../assets/logo/main-logo.svg";
import { useState } from "react";
import { FaTimes, FaRegCopyright } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const navLinks = [
  { id: 1, title: "Home", label: "home", href: "/" },
  { id: 2, title: "About", label: "about", href: "/about" },
  { id: 3, title: "Projects", label: "projects", href: "/projects" },
  { id: 4, title: "Contact", label: "contact", href: "/contact" },
];

const nav = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const navigate = useNavigate();
  const date = new Date().getFullYear();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const menuVar = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVar = {
    initial: {
      transition: {
        staggerChildren: 0.09,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <header>
      <nav className="dark:bg-black flex justify-between px-[20px] py-5">
        <div className="flex items-center">
          {darkMode ? (
            <img
              src={logo}
              className="darkmodeLogo w-[60px] h-full cursor-pointer"
              onClick={() => navigate("/")}
              alt="logo"
            />
          ) : (
            <img
              src={logo}
              className="w-[60px] cursor-pointer"
              onClick={() => navigate("/")}
              alt="logo"
            />
          )}
        </div>
        <div className="hidden md:flex lg:flex-1">
          <div className="m-auto ">
            <div className="flex gap-10 mr-16 text=[18px] font-bold text-gray-500">
              {navLinks.map((navlink, index) => {
                return (
                  <div
                    className="relative flex justify-center cursor-pointer"
                    onClick={toggleMenu}
                    key={index}
                  >
                    <a
                      aria-label={navlink.label}
                      onClick={() => navigate(navlink.href)}
                      className={`${
                        navlink.href === pathname
                          ? "font-extrabold text-black dark:text-white"
                          : ""
                      }`}
                    >
                      {navlink.title}
                    </a>
                    {navlink.href === pathname ? <div className="absolute -bottom-2 h-2 w-2 rounded-full bg-black dark:bg-white"></div> : ""}
                  </div>
                  
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="block text-3xl"
            aria-label="darkmode button"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <MdLightMode className="dark:text-white font-bold" />
            ) : (
              <MdDarkMode className="dark:text-white font-bold" />
            )}
          </button>
          <button
            className="block md:hidden text-3xl"
            aria-label="menubar button"
            onClick={toggleMenu}
          >
            <CiMenuFries className="dark:text-white font-bold" />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed dark:bg-black md:hidden z-[99999] w-full left-0 top-0 origin-top bg-white py-3 md:px-[40px]"
            variants={menuVar}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="fixed w-full">
              <div className="flex justify-between px-[20px] py-5">
                <div className="flex items-center">
                  {darkMode ? (
                    <img
                      src={logo}
                      className="darkmodeLogo w-auto h-12 md:h-20 cursor-pointer"
                      onClick={() => navigate("/")}
                      alt="logo"
                    />
                  ) : (
                    <img
                      src={logo}
                      className="w-auto h-12 md:h-20 cursor-pointer"
                      onClick={() => navigate("/")}
                      alt="logo"
                    />
                  )}
                </div>
                <div>
                  <button
                    className="block md:hidden text-3xl"
                    aria-label="menubar button"
                    onClick={toggleMenu}
                  >
                    <FaTimes className="dark:text-white" />
                  </button>
                </div>
              </div>
            </div>

            <motion.div
              variants={containerVar}
              initial="initial"
              animate="open"
              className="flex flex-col min-h-[100vh] w-full place-content-evenly"
            >
              <div className="flex justify-center">
                <div className="text-center text-5xl gap-5 font-bold text-gray-500">
                  {navLinks.map((navlink, index) => {
                    return (
                      <div className="overflow-hidden" key={index}>
                        <motion.div
                          variants={mobileLinkVars}
                          className="relative py-8 flex justify-center items-center cursor-pointer"
                          onClick={toggleMenu}
                        >
                          <a
                            aria-label={navlink.label}
                            onClick={() => navigate(navlink.href)}
                            className={`${
                              navlink.href === pathname
                                ? "text-black dark:text-white"
                                : ""
                            }`}
                          >
                            {navlink.title}
                          </a>

                          <p className="absolute -z-50 text-8xl">
                            {navlink.href === pathname ? "0" + navlink.id : ""}
                          </p>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="dark:text-white flex items-center justify-center">
                <FaRegCopyright size={16} />
                <p className="font-bold text-base ml-2">
                  JOHN LLOYD BUTAY <span>{date}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default nav;
