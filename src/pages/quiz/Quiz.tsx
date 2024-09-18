import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./styles.css";
import QuestionCard from "../../components/questionCard/QuestionCard";
import Modal from "../../components/modal/Modal";
import { startQuiz } from "../../features/quiz/quizSlice";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Quiz: React.FC = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, score, quizStarted } = useSelector(
    (state: RootState) => state.quiz
  );

  useEffect(() => {
    if (questions.length > 0 && !quizStarted) {
      dispatch(startQuiz());
    }
  }, [questions, quizStarted, dispatch]);

  const showModal = currentQuestionIndex > questions.length - 1;

  if (!quizStarted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz">
      {showModal ? <Modal score={score} /> : <QuestionCard />}
    </div>
  );
};
export default Quiz;
