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
                className="dark:text-white z-50 relative flex left-5 items-center font-bold"
                aria-label="to about page button"
                onClick={() => navigate("/")}
              > <span className="mr-3">
                  <IoMdArrowBack />
                </span>
                Back to Home{" "}
              </button>
        </div>
      </div>
    </section>
  );
}

export default ThankyouMessage;
