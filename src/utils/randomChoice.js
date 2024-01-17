import { choices } from "./choices";

export const getRandomChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];
