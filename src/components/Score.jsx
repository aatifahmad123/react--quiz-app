import { questions } from "../data/questions";

export default function Score({ finalscore }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl text-center">
        <p className="text-2xl font-semibold text-blue-700 mb-4">Quiz Over</p>
        <p className="text-lg text-blue-600 mb-8">
          Your score is: {finalscore}
        </p>
        <div className="text-left">
          <p className="text-xl font-semibold text-blue-700 mb-4">
            Let's see the correct answers:
          </p>
          {questions.map((q, idx) => (
            <div
              key={idx}
              className="mb-4 p-4 bg-blue-100 rounded-md shadow-sm"
            >
              <p className="text-blue-800 font-medium">{q.question}</p>
              <p className="text-blue-600">{q.answer}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-blue-600 mb-8">Made By <a href="https://github.com/aatifahmad123" target="_blank"><span className="hover:text-blue-900">Aatif</span></a></p>
      </div>
    </div>
  );
}
