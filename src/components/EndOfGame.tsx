import FingerUp from './FingerUp';

type Props = {
  progress: string;
  setEndOfGame: (value: boolean) => void;
  setLevel: (value: number) => void;
  setProgress: (value: string) => void;
};

function EndOfGame({ progress, setEndOfGame, setLevel, setProgress }: Props) {
  return (
    <div className="end_of_game">
      <div>
        <FingerUp />
      </div>
      <div>
        <p>Total Score</p>
        <h1>{progress}</h1>
        <button
          onClick={() => {
            setLevel(0);
            setProgress('0');
            setEndOfGame(false);
          }}
          type="button"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default EndOfGame;
