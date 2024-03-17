import { useState } from 'react';
import classNames from 'classnames';
import data from '../data/config.json';
import Progress from './Progress';
import Questions from './Questions';
import EndOfGame from './EndOfGame';
import MenuButton from './MenuButton';

function Game() {
  const [level, setLevel] = useState(0);
  const [endOfGame, setEndOfGame] = useState(false);
  const [progress, setProgress] = useState('0');
  const [progressActive, setProgressActive] = useState(false);

  return (
    <div className="game">
      <MenuButton
        classSelector="burger"
        setProgressActive={() => setProgressActive(true)}
      />
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
          <div
            className={classNames('progress_container', {
              progress_container_active: progressActive,
            })}
          >
            <MenuButton
              classSelector="close"
              setProgressActive={() => setProgressActive(false)}
            />
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
