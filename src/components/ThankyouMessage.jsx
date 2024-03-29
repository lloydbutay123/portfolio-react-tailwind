import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

function ThankyouMessage() {
  const navigate = useNavigate();
  return (
    <section
      className="thankyouMessage dark:bg-black flex w-full min-h-[100vh] px-[20px] items-center justify-center"
      id="thankyouMessage"
    >
      <div className="dark:text-white text-center">
        <h1 className="text-[15vw] lg:text-[90px] font-bold">
          Thanks for reaching out!
        </h1>
        <p className="mb-10">
          <span>
            Your message just showed up in my inbox. Talk to you soon!
          </span>
        </p>
        <div className="flex justify-center">
          <button
            className="relative dark:text-white text-default z-50 flex items-center font-bold text-black p-4"
            onClick={() => navigate("/")}
            aria-label="back to hme button"
          >
            <IoMdArrowBack className="mr-3" /> Back to home
          </button>
        </div>
      </div>
    </section>
  );
}

export default ThankyouMessage;
