import { useState } from "react";
import Question from "./components/Question";
import Score from "./components/Score";

export default function App() {
  const [quizactive, setQuizActive] = useState(true);
  const [score, setScore] = useState(0);

  const handleQuizSubmission = () => {
    console.log("Quiz is submitted");
    setQuizActive(false);
  };

  const handlescoreincrement = () => {
    setScore(score + 1);
  };

  return (
    <>
      {quizactive ? (
        <Question
          handleQuiz={handleQuizSubmission}
          incrementScore={handlescoreincrement}
        ></Question>
      ) : (
        <Score finalscore={score}></Score>
      )}
    </>
  );
}
