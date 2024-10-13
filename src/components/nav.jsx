import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <header className="flex fixed w-full z-50 pl-[24px] justify-between">
      <nav className="flex justify-between w-full lg:p-[72px] xl:pb-0">
        <div className="flex items-center">
          <button
            className="dark:text-white font-medium"
            onClick={() => navigate("/")}
          >
            HOME
          </button>
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
