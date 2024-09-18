import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./pages/quiz/Quiz";
import Introduce from "./pages/introduce/Introduce";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/quiz/:difficulty/:amount" element={<Quiz />} />
        <Route path="/loading" element={<LoadingScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
