import { EndOfGameProps } from '../types';
import FingerUp from './FingerUp';

function EndOfGame({
  progress,
  setEndOfGame,
  setLevel,
  setProgress,
}: EndOfGameProps) {
  return (
    <div className="end_of_game">
      <div>
        <FingerUp />
      </div>
      <div>
        <p className="end_of_game_text">Total Score</p>
        <h1 className="end_of_game_score">
          $
          {progress}
          {' '}
          earned
        </h1>
        <button
          onClick={() => {
            setLevel(0);
            setProgress('0');
            setEndOfGame(false);
          }}
          type="button"
          className="end_of_game_btn"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default EndOfGame;
