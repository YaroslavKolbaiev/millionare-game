import wait from './wait';

type GameEngineArgs = {
  answer: string;
  isCorrect: boolean;
  lastLevel: boolean;
  money: string;
  setLevel: (value: (prev: number) => number) => void;
  setEndOfGame: (value: boolean) => void;
  setProgress: (value: string) => void;
  setSelectAnswer: (value: string) => void;
  setDisableButtons: (value: boolean) => void;
  setCorrectAnswer: (value: string) => void;
  setWrongAnswer: (value: string) => void;
};

const gameEngine = async (args: GameEngineArgs) => {
  const {
    answer,
    isCorrect,
    lastLevel,
    money,
    setLevel,
    setEndOfGame,
    setProgress,
    setSelectAnswer,
    setDisableButtons,
    setCorrectAnswer,
    setWrongAnswer,
  } = args;

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

export default gameEngine;
