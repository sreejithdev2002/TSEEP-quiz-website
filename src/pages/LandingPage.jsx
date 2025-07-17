import { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[80vh] lg:min-h-[70vh] -mt-20 lg:-mt-16 px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold relative text-center leading-tight">
          Welcome to{" "}
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-2 lg:bottom-1 h-3 lg:h-4 bg-[#fac167] -z-10"></span>
            TSEEP Mastery Box
          </span>
        </h1>
        <h3 className="text-[#313131] text-lg sm:text-xl lg:text-2xl text-center mt-6">
          Unlock your potential with{" "}
          <span className="font-semibold">AI inspired tool</span>
        </h3>
      </div>

      <hr className="w-[90%] mx-auto border-gray-300 my-2 lg:my-8" />

      <div className="flex items-center justify-between px-10 lg:px-30 lg:pb-12">
        <div className="flex items-start gap-3 max-w-lg">
          <input
            type="checkbox"
            id="terms"
            className="mt-1"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="terms" className="text-sm sm:text-base font-semibold">
            I confirm that I have read and accept the terms and conditions and
            privacy policy .
          </label>
        </div>

        <button
          disabled={!isChecked}
          onClick={() => navigate("/login")}
          className={`mt-6 px-8 py-2 text-xs font-semibold rounded-sm transition-all duration-300 ${
            isChecked
              ? "bg-[#2A586F] text-white hover:bg-[#1c4457] cursor-pointer"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
