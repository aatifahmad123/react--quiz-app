import { useState } from "react";
import { questions } from "../data/questions";
import Navigation from "./Navigation";

export default function Question({ handleQuiz, incrementScore }) {
  const [quesnum, setQuesnum] = useState(0);
  const [select, setSelect] = useState("");

  const handlenext = () => {
    setSelect("");
    setQuesnum(quesnum + 1);
  };

  const handleselect = (e) => {
    const { value } = e.target;
    setSelect(value);
  };

  const handleresponse = () => {
    if (questions[quesnum].answer === select) {
      console.log("Successful!");
      incrementScore();
    }
  };

  const handlequizSubmit = () => {
    handleQuiz();
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
          <Navigation
            currques={quesnum}
            totalques={questions.length}
            handlenext={handlenext}
            saveresponse={handleresponse}
            handlesub={handlequizSubmit}
          />
          <div className="mt-4">
            <p className="text-lg font-semibold text-blue-700 mb-4">
              {questions[quesnum].question}
            </p>
            <ul>
              {questions[quesnum].options.map((option, index) => (
                <li key={index}>
                  <button
                    value={option}
                    className={`m-2 rounded-sm p-2 w-52 ${
                      select === option
                        ? "bg-blue-500 text-white"
                        : "bg-blue-200 hover:bg-blue-300"
                    }`}
                    onClick={handleselect}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
