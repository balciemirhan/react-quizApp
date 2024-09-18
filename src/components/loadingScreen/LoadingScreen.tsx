import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const LoadingScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000); // 2 saniye sonra ana sayfaya yönlendir

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-screen">
      <h1>Quiz Yeniden Başlatılıyor...</h1>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingScreen;
