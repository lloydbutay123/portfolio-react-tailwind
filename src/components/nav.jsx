import logo from "../assets/logo/main-logo.png";
import { useState } from "react";
import { FaTimes, FaRegCopyright } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MenuBar from "../assets/icons/menubar.svg";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "home", label: "home", href: "/" },
  { title: "about", label: "about", href: "/about" },
  { title: "projects", label: "projects", href: "/projects" },
  { title: "contact", label: "contact", href: "/contact" },
];

const nav = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const navigate = useNavigate();
  const date = new Date().getFullYear();

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
      <nav className="flex justify-between px-5 py-5">
        <div className="flex items-center">
          <a aria-label="logo" onClick={() => navigate("/")}>
            <img
              src={logo}
              className="w-auto h-12 md:h-20 cursor-pointer"
              alt="logo"
            />
          </a>
        </div>
        <div className="hidden md:flex lg:flex-1">
          <div className="m-auto ">
            <ul className="flex gap-10 mr-16 textt=[18px] font-bold text-gray-500">
              {navLinks.map((navlink) => {
                return (
                  <li className="cursor-pointer" onClick={toggleMenu}>
                    <a
                      aria-label={navlink.label}
                      onClick={() => navigate(navlink.href)}
                    >
                      {navlink.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className="block md:hidden text-3xl"
            aria-label="menubar button"
            onClick={toggleMenu}
          >
            <img src={MenuBar} className="w-10" alt="svg navbar" />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed md:hidden z-[99999] w-full left-0 top-0 origin-top bg-white py-3 md:px-[40px]"
            variants={menuVar}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex justify-between px-5 py-5">
              <div className="flex items-center">
                <a aria-label="logo" onClick={() => navigate("/")}>
                  <img
                    src={logo}
                    className="w-auto h-12 md:h-20 cursor-pointer"
                    alt="logo"
                  />
                </a>
              </div>
              <div>
                <button
                  className="block md:hidden text-3xl"
                  aria-label="menubar button"
                  onClick={toggleMenu}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <motion.div
              variants={containerVar}
              initial="initial"
              animate="open"
              className="flex flex-col min-h-[90vh] place-content-evenly"
            >
              <div className="flex justify-center">
                <div className="text-center text-6xl font-bold text-gray-500">
                  {navLinks.map((navlink, index) => {
                    return (
                      <div className="overflow-hidden">
                        <motion.div
                          variants={mobileLinkVars}
                          className="py-5 cursor-pointer"
                          onClick={toggleMenu}
                        >
                          <a
                            aria-label={navlink.label}
                            onClick={() => navigate(navlink.href)}
                          >
                            {navlink.title}
                          </a>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center justify-center text-black">
                <FaRegCopyright size={12} />
                <p className="ml-2 font-bold text-xs">
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

