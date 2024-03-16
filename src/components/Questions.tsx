import classNames from 'classnames';
import { useState } from 'react';
import gameEngine from '../helpers/gameEngine';
import labels from '../constants/constants';
import { QuestionsProps } from '../types';

function Questions({
  lastLevel,
  question,
  options,
  money,
  setLevel,
  setEndOfGame,
  setProgress,
}: QuestionsProps) {
  const [selectAnswer, setSelectAnswer] = useState('');
  const [disableButtons, setDisableButtons] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswer, setWrongAnswer] = useState('');

  const runGameEngine = (answer: string, isCorrect: boolean) => gameEngine({
    answer,
    isCorrect,
    lastLevel,
    money,
    setCorrectAnswer,
    setDisableButtons,
    setEndOfGame,
    setLevel,
    setProgress,
    setSelectAnswer,
    setWrongAnswer,
  });

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
                  runGameEngine(answer, isCorrect);
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
