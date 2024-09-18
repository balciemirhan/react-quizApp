import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { nextQuestion, updateScore } from "../../features/quiz/quizSlice";
import "./styles.css";

const QuestionCard: React.FC = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, score } = useSelector(
    (state: RootState) => state.quiz
  );
  const [timer, setTimer] = useState(30);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0) {
        handleNextQuestion();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleNextQuestion = () => {
    // Değişiklik burada
    if (currentQuestionIndex < questions.length - 1) {
      dispatch(nextQuestion());
      setTimer(30);
    } else {
      // Son soruya gelindiğinde
      dispatch(nextQuestion());
    }
  };

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === currentQuestion.correct_answer;
    if (isCorrect) {
      dispatch(updateScore(100));
    }
    handleNextQuestion();
  };

  if (!currentQuestion) return null;

  return (
    <div className="questionCard">
      <div className="questionCard-timer">{timer}</div>
      <div className="questionCard-title">
        {currentQuestionIndex + 1}/{questions.length} {currentQuestion.question}
      </div>
      {currentQuestion.answers.map((answer, i) => (
        <button onClick={() => handleAnswer(answer)} key={i}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
