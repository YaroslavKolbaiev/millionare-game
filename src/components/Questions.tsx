import classNames from 'classnames';
import { useState } from 'react';
import wait from '../helpers/wait';

interface Options {
  answer: string;
  isCorrect: boolean;
}

type Props = {
  lastLevel: boolean;
  question: string;
  options: Options[];
  money: string;
  setLevel: (value: (prev: number) => number) => void;
  setEndOfGame: (value: boolean) => void;
  setProgress: (value: string) => void;
};

function Questions({
  lastLevel,
  question,
  options,
  money,
  setLevel,
  setEndOfGame,
  setProgress,
}: Props) {
  const labels = ['A ', 'B ', 'C ', 'D '];
  const [selectAnswer, setSelectAnswer] = useState('');
  const [disableButtons, setDisableButtons] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswer, setWrongAnswer] = useState('');

  const gameEngine = async (answer: string, isCorrect: boolean) => {
    setSelectAnswer(answer);
    setDisableButtons(true);
    if (isCorrect && lastLevel) {
      setProgress(money);
      await wait(1000);
      setSelectAnswer('');
      setCorrectAnswer(answer);
      await wait(1000);
      setEndOfGame(true);
      setCorrectAnswer('');
      setDisableButtons(false);
    } else if (isCorrect) {
      setProgress(money);
      await wait(1000);
      setSelectAnswer('');
      setCorrectAnswer(answer);
      await wait(1000);
      setLevel((prev) => prev + 1);
      setCorrectAnswer('');
      setDisableButtons(false);
    } else {
      await wait(1000);
      setSelectAnswer('');
      setWrongAnswer(answer);
      await wait(1000);
      setEndOfGame(true);
      setCorrectAnswer('');
      setDisableButtons(false);
      setWrongAnswer('');
    }
  };

  return (
    <div className="game_questions">
      <div className="game_question">{question}</div>
      <div className="options_container">
        {options.map(({ answer, isCorrect }, index) => (
          <div key={answer} className="options_wrapper">
            <hr
              className={classNames('game_line', {
                selected_border: selectAnswer === answer,
                correct_border: correctAnswer === answer,
                wrong_border: wrongAnswer === answer,
              })}
            />
            <div
              className={classNames('options_shape', {
                selected_border: selectAnswer === answer,
                correct_border: correctAnswer === answer,
                wrong_border: wrongAnswer === answer,
              })}
            >
              <button
                disabled={disableButtons}
                onClick={() => {
                  gameEngine(answer, isCorrect);
                }}
                type="button"
                className={classNames('options_data', {
                  selected_bg: selectAnswer === answer,
                  correct_bg: correctAnswer === answer,
                  wrong_bg: wrongAnswer === answer,
                })}
              >
                <div className="options_text">
                  <span>{labels[index]}</span>
                  <span>{answer}</span>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
