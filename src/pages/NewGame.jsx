import { useSearchParams } from "react-router-dom";
import "../styles/newGame.scss";
import GameContext from "../GameContext";
import { useContext } from "react";
import { updateGame } from "../../api/game";

export default function NewGame() {
  const [searchParams] = useSearchParams();
  const gameId = searchParams.get("gameId");
  const { player1, player2, updatePlayer1, updatePlayer2 } =
    useContext(GameContext);

  const handlePlayer1 = () => {
    updatePlayer1(true);
    const payload = { gameId, player1: true };
    updateGame(payload);
  };

  const handlePlayer2 = () => {
    updatePlayer2(true);
    const payload = { gameId, player2: true };
    updateGame(payload);
  };

  if (player1 && player2) {
    console.log("Start Game");
  }

  return (
    <>
      <div className="new-game-container">
        {player1 ? (
          <button>Player 1 has joined ⚔️</button>
        ) : (
          <button
            onClick={() => {
              handlePlayer1();
            }}
          >
            Join Player 1
          </button>
        )}
        {player2 ? (
          <button>Player 2 has joined 🧙‍♂️</button>
        ) : (
          <button
            onClick={() => {
              handlePlayer2();
            }}
          >
            Join Player 2
          </button>
        )}
      </div>
    </>
  );
}
