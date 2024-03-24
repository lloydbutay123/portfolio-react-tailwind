import logo from "../assets/logo/main-logo.png";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries, CiLight } from "react-icons/ci";

const nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <>
      <div className="md:hidden -z-50 block absolute top-16 w-full min-h-[100vh] left-0 right-0 bg-white">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="hero">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded" onClick={handleClick}>
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="about">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded" onClick={handleClick}>
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded" onClick={handleClick}>
              Services
            </li>
          </Link>
          <Link spy={true} smooth={true} to="projects">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded" onClick={handleClick}>
              Projects
            </li>
          </Link>
          <Link spy={true} smooth={true} to="contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded" onClick={handleClick}>
              Drop me a line
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="sticky z-50 px-[20px]">
      <div className="h-10vh flex justify-between text-black lg:py-5 py-4 flex-1">
        <div className="flex items-center">
          <Link to="Home">
            <img src={logo} className="w-auto h-20 cursor-pointer" />
          </Link>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-between font-normal hidden">
          <div className="m-auto ">
            <ul className="flex gap-10 mr-16 textt=[18px]">
              <Link spy={true} smooth={true} to="hero">
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="bbout">
                <li className="cursor-pointer">About</li>
              </Link>
              <Link spy={true} smooth={true} to="services">
                <li className="cursor-pointer">Services</li>
              </Link>
              <Link spy={true} smooth={true} to="projects">
                <li className="cursor-pointer">Projects</li>
              </Link>
              <Link spy={true} smooth={true} to="contact">
                <li className="cursor-pointer">Drop me a line</li>
              </Link>
            </ul>
          </div>
        </div>
        <div></div> 
        <div>{click && content}</div>
        <button className="flex items-center">
            <CiLight size={23} />
            <span className="hidden md:block">Light</span>
          </button>
        <button
          className="block md:hidden text-3xl transition-transform duration-150ms"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default nav;
