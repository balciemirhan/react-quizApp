import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuizData } from "../../services/api";
import { Difficulty } from "../../types";

export const fetchQuizQuestions = createAsyncThunk(
  "quiz/fetchQuizQuestions",
  async ({
    difficulty,
    amount,
  }: {
    difficulty: Difficulty;
    amount: number;
  }) => {
    const data = await fetchQuizData(difficulty, amount);
    return data;
  }
);
