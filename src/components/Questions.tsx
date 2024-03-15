import classNames from 'classnames';
import { useState } from 'react';
import wait from '../helpers/wait';

interface Options {
  answer: string;
  isCorrect: boolean;
}

type Props = {
  question: string;
  options: Options[];
  setIndex: (value: (prev: number) => number) => void;
};

function Questions({ question, options, setIndex }: Props) {
  const labels = ['A ', 'B ', 'C ', 'D '];
  const [selectAnswer, setSelectAnswer] = useState('');
  const [disableButtons, setDisableButtons] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswer, setWrongAnswer] = useState('');

  const gameEngine = async (answer: string, isCorrect: boolean) => {
    setSelectAnswer(answer);
    setDisableButtons(true);
    if (isCorrect) {
      await wait(1000);
      setSelectAnswer('');
      setCorrectAnswer(answer);
      await wait(1000);
      setIndex((prev) => prev + 1);
      setDisableButtons(false);
      setCorrectAnswer('');
    } else {
      await wait(1000);
      setSelectAnswer('');
      setWrongAnswer(answer);
    }
  };

  return (
    <div className="game_questions">
      <div className="game_question">{question}</div>
      <div className="game_options_container">
        {options.map(({ answer, isCorrect }, index) => (
          <div key={answer} className="game_options_wrapper">
            <hr
              className={classNames('game_line', {
                selected_border: selectAnswer === answer,
                correct_border: correctAnswer === answer,
                wrong_border: wrongAnswer === answer,
              })}
            />
            <div
              className={classNames('game_options_shape', {
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
                className={classNames('game_options_data', {
                  selected_bg: selectAnswer === answer,
                  correct_bg: correctAnswer === answer,
                  wrong_bg: wrongAnswer === answer,
                })}
              >
                <div className="game_options_text">
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
