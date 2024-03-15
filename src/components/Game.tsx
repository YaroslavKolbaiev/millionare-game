import data from '../data/config.json';
import Progress from './Progress';

function Game() {
  // const [index, setIndex] = useState(0);
  return (
    <div className="game">
      <div className="game_questions">Here will go questions</div>
      <div className="game_progress_container">
        <div className="game_progress_wrapper">
          {data.map(({ money }) => (
            <Progress key={money} money={money} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
