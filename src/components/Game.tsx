import { useState } from 'react';
import data from '../data/config.json';
import Progress from './Progress';
import Questions from './Questions';
import EndOfGame from './EndOfGame';

function Game() {
  const [level, setLevel] = useState(0);
  const [endOfGame, setEndOfGame] = useState(false);
  const [progress, setProgress] = useState('0');

  return (
    <div className="game">
      {!endOfGame && (
        <>
          <Questions
            question={data[level].question}
            options={data[level].options}
            money={data[level].money}
            setLevel={setLevel}
            setEndOfGame={setEndOfGame}
            lastLevel={level === data.length - 1}
            setProgress={setProgress}
          />
          <div className="progress_container">
            <div className="progress_wrapper">
              {[...data].reverse().map(({ money }, index, array) => (
                <Progress
                  key={money}
                  money={money}
                  level={level}
                  index={array.length - 1 - index}
                />
              ))}
            </div>
          </div>
        </>
      )}
      {endOfGame && (
        <EndOfGame
          setLevel={setLevel}
          setEndOfGame={setEndOfGame}
          progress={progress}
          setProgress={setProgress}
        />
      )}
    </div>
  );
}

export default Game;
