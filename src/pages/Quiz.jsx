import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { IoMdTime } from "react-icons/io";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import CheckImage from "../assets/checkImage.png";
import { GrHomeRounded } from "react-icons/gr";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "Which of the following words is a synonym for 'exhilarating'?",
    options: ["Exciting", "Boring", "Tiresome", "Frightening", "Confusing"],
    correctAnswer: "Exciting",
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "8", "7", "9", "10"],
    correctAnswer: "8",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen", "Helium"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
      "Raphael",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Jupiter", "Mars", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    options: ["50°C", "90°C", "100°C", "120°C", "80°C"],
    correctAnswer: "100°C",
  },
  {
    question: "Which language is primarily spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "English", "German"],
    correctAnswer: "Portuguese",
  },
  {
    question: "What is H2O commonly known as?",
    options: ["Hydrogen", "Oxygen", "Salt", "Water", "Acid"],
    correctAnswer: "Water",
  },
  {
    question: "Which number comes after 999?",
    options: ["1000", "9999", "1010", "1001", "9990"],
    correctAnswer: "1000",
  },
];

function Quiz() {
  const [currentQn, setCurrentQn] = useState(0);
  const [selected, setSelected] = useState({});
  const [locked, setLocked] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          handleLockAndNext();
          return 300;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQn]);

  const handleSelect = (value) => {
    if (!locked[currentQn]) {
      setSelected((prev) => ({ ...prev, [currentQn]: value }));
    }
  };

  const handleLockAndNext = () => {
    if (!selected[currentQn]) return;
    setLocked((prev) => ({ ...prev, [currentQn]: true }));
    if (currentQn < questions.length - 1) {
      setCurrentQn(currentQn + 1);
      setTimer(300);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQn > 0) {
      setCurrentQn(currentQn - 1);
      setTimer(300);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selected[index] === q.correctAnswer) {
        score += 5;
      }
    });
    return score;
  };

  if (showResult) {
    return (
      <div>
        <Header />
        <div className="flex flex-col items-center w-full justify-center text-center mt-20">
          <img src={CheckImage} alt="" className="w-15" />
          <h2 className="text-2xl">
            Congratulations you have Succesfully Completed The Test
          </h2>
          <p className="text-xl mt-5 font-semibold">
            Score :{" "}
            <span className="bg-[#FAC167] py-1 px-5 rounded-4xl">
              {calculateScore()} / 50
            </span>
          </p>
          <h3 className="bg-[#2A586F] py-2 px-5 text-2xl text-white font-semibold rounded-md my-5">
            Your ID : 123456
          </h3>
          <div className="w-1/2 rounded-md shadow-md text-start py-2 px-5">
            <h2 className="font-bold my-2">Feedback</h2>
            <hr className="text-gray-200" />
            <h3 className="font-semibold text-xl mt-2">Give us a feedback!</h3>
            <p className="text-xs">
              Your input is important for us. We take customer feedback very
              seriously.
            </p>
            <div className="flex items-center space-x-2 text-xl my-5">
              <span className="p-2 bg-gray-300 rounded-full">🥵</span>
              <span className="p-2 bg-gray-300 rounded-full">😔</span>
              <span className="p-2 bg-gray-300 rounded-full">😑</span>
              <span className="p-2 bg-gray-300 rounded-full">😌</span>
              <span className="p-2 bg-gray-300 rounded-full">🥰</span>
            </div>
            <textarea
              name=""
              id=""
              placeholder="Add a comment"
              className="border h-[10vh] border-gray-200 w-full rounded-md p-2 text-xs"
            />
            <button className="bg-[#2A586F] text-white w-1/2 py-2 font-semibold rounded-md my-1 text-sm">
              Submit Feedback
            </button>
          </div>
          <Link
            to="/"
            className="flex items-center gap-x-2 my-2 hover:underline"
          >
            <GrHomeRounded /> Back to home
          </Link>
        </div>
      </div>
    );
  }

  const question = questions[currentQn];

  return (
    <div>
      <Header />
      <div className="flex flex-col-reverse lg:flex-row w-full">
        <div className="flex flex-col lg:justify-between w-full lg:w-1/4 p-4 border-r lg:h-[87vh] border-gray-200">
          <div className="grid grid-cols-5 gap-2 mb-4">
            {questions.map((_, index) => {
              const isLocked = locked[index];
              const isCurrent = index === currentQn;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentQn(index)}
                  className={`
            lg:w-15 h-10 flex items-center justify-center rounded-md font-semibold cursor-pointer
            ${isCurrent ? "bg-[#2A586F] text-white" : ""}
            ${isLocked && !isCurrent ? "bg-green-300 text-black" : ""}
            ${
              !isLocked && !isCurrent
                ? "bg-white text-black border border-gray-400"
                : ""
            }
          `}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col text-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-[#2A586F] rounded-md inline-block"></span>
              <span>Current Question</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-green-300 rounded-md inline-block"></span>
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-white border border-gray-400 rounded-md inline-block"></span>
              <span>Not Answered</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full lg:w-3/4 px-6 lg:px-40 py-10">
          <h2 className="text-center text-4xl text-[#2A586F] font-semibold mb-5">
            Assess Your{" "}
            <span className="relative inline-block">
              Intelligence
              <span className="absolute inset-x-0 bottom-0 h-[6px] bg-[#fac167] -z-10"></span>
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
            <div className="w-full sm:w-3/4 flex items-center gap-4">
              <input
                type="range"
                min="0"
                max={questions.length}
                value={Object.keys(locked).length}
                readOnly
                className="w-full accent-[#2A586F]"
              />
              <span className="font-semibold text-lg whitespace-nowrap">
                {currentQn + 1} / {questions.length}
              </span>
            </div>

            <span className="flex items-center gap-x-2 bg-[#FAC167] px-3 py-1 rounded-md font-medium">
              <IoMdTime size={20} /> {Math.floor(timer / 60)}:
              {String(timer % 60).padStart(2, "0")}
            </span>
          </div>

          <div className="bg-[#F4F4F4] rounded-md shadow-md p-5 space-y-4">
            <h3 className="flex items-center gap-x-3 text-lg font-semibold leading-snug mb-2">
              <span className="flex items-center justify-center bg-[#2A586F] h-9 w-14 lg:h-10 lg:w-10 text-white font-semibold text-xl rounded-full">
                {currentQn + 1}
              </span>
              {question.question}
            </h3>
            <div className="grid grid-cols-1 gap-2 py-5 px-4 bg-white rounded-lg mt-5">
              {question.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex w-1/3 items-center gap-x-2 border border-gray-200 px-4 py-2 text-base rounded-md cursor-pointer
                    ${
                      selected[currentQn] === option
                        ? "bg-[#E7FFD9] border-green-500"
                        : "bg-[#FAFAFA] hover:bg-[#E7FFD9]"
                    }
                    ${locked[currentQn] ? "cursor-not-allowed" : ""}
                  `}
                >
                  <input
                    type="radio"
                    name={`q${currentQn}`}
                    value={option}
                    checked={selected[currentQn] === option}
                    onChange={() => handleSelect(option)}
                    disabled={locked[currentQn]}
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className="flex justify-end gap-x-2">
              {currentQn !== 0 && (
                <button
                  onClick={handlePrevious}
                  className="flex gap-x-2 items-center py-2 px-4 bg-[#2A586F] text-white rounded-sm"
                >
                  <MdArrowBack size={20} /> Previous
                </button>
              )}
              <button
                onClick={handleLockAndNext}
                className="flex gap-x-2 items-center py-2 px-4 bg-[#2A586F] text-white rounded-sm"
              >
                {currentQn === questions.length - 1 ? "Submit" : "Next"}{" "}
                <MdArrowForward size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
