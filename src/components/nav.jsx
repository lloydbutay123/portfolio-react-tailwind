import logo from "../assets/logo/main-logo.png";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries, CiLight } from "react-icons/ci";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const nav = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <>
      <div className="md:hidden -z-50 block absolute top-16 w-full min-h-[100vh] left-0 right-0 bg-white">
        <div className="flex flex-col min-h-[100vh] place-content-between">
          <div className="flex justify-center">
            <ul className="text-center text-xl py-5 px-10">
              <a onClick={() => navigate("/")}>
                <li
                  className="text-5xl my-4 py-4 font-bold"
                  onClick={handleClick}
                >
                  home
                </li>
              </a>
              <a onClick={() => navigate("/about")}>
                <li
                  className="text-5xl my-4 py-4 font-bold"
                  onClick={handleClick}
                >
                  about
                </li>
              </a>
              <a onClick={() => navigate("/projects")}>
                <li
                  className="text-5xl my-4 py-4 font-bold"
                  onClick={handleClick}
                >
                  projects
                </li>
              </a>
              <a onClick={() => navigate("/contact")}>
                <li
                  className="text-5xl my-4 py-4 font-bold"
                  onClick={handleClick}
                >
                  contact
                </li>
              </a>
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );

  return (
    <nav className="sticky z-50 px-[20px]">
      <div className="h-10vh flex justify-between text-black lg:py-5 py-4 flex-1">
        <div className="flex items-center">
          <a onClick={() => navigate("/")}>
            <img src={logo} className="w-auto h-12 md:h-20 cursor-pointer" />
          </a>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-between font-normal hidden">
          <div className="m-auto ">
            <ul className="flex gap-10 mr-16 textt=[18px]">
              <a onClick={() => navigate("/")}>
                <li className="cursor-pointer">Home</li>
              </a>
              <a onClick={() => navigate("/about")}>
                <li className="cursor-pointer">About</li>
              </a>
              <a onClick={() => navigate("/projects")}>
                <li className="cursor-pointer">Projects</li>
              </a>
              <a onClick={() => navigate("/contact")}>
                <li className="cursor-pointer">Drop me a line</li>
              </a>
            </ul>
          </div>
        </div>
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
