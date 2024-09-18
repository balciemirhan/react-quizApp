import React from "react";
import { Difficulty } from "../../types";
import "./styles.css";

interface DropdownProps {
  data: Difficulty[];
  setDifficultyChange: (difficulty: Difficulty) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ data, setDifficultyChange }) => {
  return (
    <div className="dropdown">
      <select onChange={e => setDifficultyChange(e.target.value as Difficulty)}>
        {data.map((dt, i) => (
          <option key={i} value={dt}>
            {dt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
