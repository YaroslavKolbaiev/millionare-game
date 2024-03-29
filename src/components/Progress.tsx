import classNames from 'classnames';
import { ProgressProps } from '../types';

function Progress({ money, level, index }: ProgressProps) {
  return (
    <div className="progress">
      <hr
        className={classNames('game_line', {
          current_progress: level === index,
        })}
      />
      <div className="progress_shape">
        <div
          className={classNames('progress_data', {
            current_progress: level === index,
            passed_progress: level > index,
          })}
        >
          {money}
        </div>
      </div>
    </div>
  );
}

export default Progress;
