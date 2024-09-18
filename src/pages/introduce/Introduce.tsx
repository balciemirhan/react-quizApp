import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Dropdown from "../../components/dropdown/Dropdown";
import { fetchQuizQuestions } from "../../features/quiz/quizThunks";
import { Difficulty } from "../../types";
import "./styles.css";

const Introduce: React.FC = () => {
  const difficulties: Difficulty[] = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState<Difficulty>("easy");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const TOTAL_QUESTIONS = 10;

  const startQuiz = async () => {
    if (difficultyChange) {
      await dispatch(
        fetchQuizQuestions({
          difficulty: difficultyChange,
          amount: TOTAL_QUESTIONS,
        })
      );
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
    }
  };

  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Bkx-bV8Y7oosGWM6rxIzAZdNyqNw1QaZKw&usqp=CAU"
          alt="Quiz Logo"
        />
        <Dropdown
          data={difficulties}
          setDifficultyChange={setDifficultyChange}
        />
        <div onClick={startQuiz} className="introduce-btn">
          Quiz'e Başla
        </div>
      </div>
    </div>
  );
};

export default Introduce;

// Bu değişiklikler, Quiz'e Başla butonuna basıldığında önce soruların yüklenmesini ve ardından Quiz sayfasına yönlendirilmeyi sağlayacaktır. Quiz sayfası, sorular yüklenene kadar bir yükleme mesajı gösterecek ve sorular hazır olduğunda ilk soruyu gösterecektir.