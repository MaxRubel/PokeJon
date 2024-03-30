import { useNavigate } from "react-router";
import "../styles/global.scss";
import "../styles/App.css";
import { createNewGame, updateGame } from "../../api/game";

export default function Home() {
  const navigate = useNavigate();

  const handleNewGame = () => {
    createNewGame({}).then(({ name }) => {
      updateGame({ gameId: name });
      navigate(`/NewGame?gameId=${name}`);
    });
  };

  return (
    <>
      <div className="home-container">
        <div className="big-shrimp">🍤🍤🍤🍤</div>
        <div id="button div">
          <button
            type="button"
            onClick={() => {
              handleNewGame();
            }}
          >
            Create A New Game
          </button>
        </div>
      </div>
    </>
  );
}
