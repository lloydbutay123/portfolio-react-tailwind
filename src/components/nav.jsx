import logo from "../assets/logo/main-logo.png";
import { useState } from "react";
import { FaTimes, FaRegCopyright } from "react-icons/fa";
import { CiMenuFries, CiLight } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import MenuBar from "../assets/icons/menubar.svg";

const nav = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const date = new Date().getFullYear();

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <>
      <div className="md:hidden -z-50 block absolute w-full min-h-[100vh] left-0 right-0 bg-white">
        <div className="flex flex-col min-h-[100vh] place-content-evenly">
          <div className="flex justify-center">
            <ul className="text-center text-xl py-5 px-10 font-bold text-gray-500">
              <a aria-label="home" onClick={() => navigate("/")}>
                <li
                  className="text-5xl my-4 py-4 font-bold"
                  onClick={handleClick}
                >
                  home
                </li>
              </a>
              <a aria-label="about" onClick={() => navigate("/about")}>
                <li
                  className="text-5xl my-4 py-4 font-bold"
                  onClick={handleClick}
                >
                  about
                </li>
              </a>
              <a aria-label="projects" onClick={() => navigate("/projects")}>
                <li
                  className="text-5xl my-4 py-4 font-bold"
                  onClick={handleClick}
                >
                  projects
                </li>
              </a>
              <a aria-label="contact" onClick={() => navigate("/contact")}>
                <li
                  className="text-5xl my-4 py-4 font-bold"
                  onClick={handleClick}
                >
                  contact
                </li>
              </a>
            </ul>
          </div>
          <div className="flex items-center justify-center text-black">
            <FaRegCopyright size={12} />
            <p className="ml-2 font-bold text-xs">
              JOHN LLOYD BUTAY <span>{date}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <nav className="sticky z-50 px-[20px]">
      <div className="h-10vh flex justify-between  lg:py-5 py-4 flex-1">
        <div className="flex items-center">
          <a aria-label="logo" onClick={() => navigate("/")}>
            <img src={logo} className="w-auto h-12 md:h-20 cursor-pointer" alt="logo" />
          </a>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-between font-normal hidden">
          <div className="m-auto ">
            <ul className="flex gap-10 mr-16 textt=[18px] font-bold text-gray-500">
              <a aria-label="home" onClick={() => navigate("/")}>
                <li className="cursor-pointer">Home</li>
              </a>
              <a aria-label="about" onClick={() => navigate("/about")}>
                <li className="cursor-pointer">About</li>
              </a>
              <a aria-label="projects" onClick={() => navigate("/projects")}>
                <li className="cursor-pointer">Projects</li>
              </a>
              <a aria-label="contact" onClick={() => navigate("/contact")}>
                <li className="cursor-pointer">Drop me a line</li>
              </a>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <div className="flex gap-4">
        <button className="flex items-center font-bold" aria-label="light theme">
          <CiLight size={30} />
          <span className="hidden md:block">Light</span>
        </button>
        <button
          className="block md:hidden text-3xl transition-transform duration-150ms" aria-label="menubar button"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <img src={MenuBar} className="w-10" alt="svg navbar" />}
        </button>

        </div>
      </div>
    </nav>
  );
};

export default nav;
