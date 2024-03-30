/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Create the context
const GameContext = createContext();

// Create a provider component
export const GameContextProvider = ({ children }) => {
  const [player1, setPlayer1] = useState(false);
  const [player2, setPlayer2] = useState(false);

  const updatePlayer1 = (input) => {
    setPlayer1(input);
  };

  const updatePlayer2 = (input) => {
    setPlayer2(input);
  };

  const gameObject = {
    player1,
    player2,
    updatePlayer1,
    updatePlayer2,
  };

  return (
    <GameContext.Provider value={gameObject}>{children}</GameContext.Provider>
  );
};

export default GameContext;
