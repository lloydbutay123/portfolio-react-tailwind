import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

function ThankyouMessage() {
  const navigate = useNavigate();
  return (
    
    <section
      className="thankyouMessage flex w-full min-h-[100vh] px-[20px] items-center justify-center"
      id="thankyouMessage"
    >
      <div className="text-center">
        <h1 className="text-[15vw] lg:text-[60px]">Thanks for reaching out!</h1>
        <p className="mb-10">
          <span>
            Your message just showed up in my inbox. Talk to you soon!
          </span>
        </p>
        <div className="flex justify-center">
        <button className="relative flex items-center font-bold text-black p-4" onClick={() => navigate("/")} aria-label="back to hme button">
          <IoMdArrowBack className="mr-3"/> Back to home
        </button>

        </div>
      </div>
    </section>
  );
}

export default ThankyouMessage;
