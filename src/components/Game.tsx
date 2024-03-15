import { useState } from 'react';
import data from '../data/config.json';
import Progress from './Progress';
import Questions from './Questions';

function Game() {
  const [index, setIndex] = useState(0);
  return (
    <div className="game">
      <Questions
        question={data[index].question}
        options={data[index].options}
        setIndex={setIndex}
      />
      <div className="game_progress_container">
        <div className="game_progress_wrapper">
          {[...data].reverse().map(({ money }) => (
            <Progress key={money} money={money} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
