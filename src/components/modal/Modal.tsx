import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../../features/quiz/quizSlice";
import "./styles.css";

interface ModalProps {
  score: number;
}

const Modal: React.FC<ModalProps> = ({ score }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRestart = () => {
    dispatch(resetQuiz());
    navigate("/loading"); // LoadingScreen'e yönlendir
  };

  return (
    <div className="modal">
      <div className="modal-title">Score: {score}</div>
      <div onClick={handleRestart} className="modal-btn">
        Yeniden Başla
      </div>
    </div>
  );
};

export default Modal;
