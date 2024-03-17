interface Options {
  answer: string;
  isCorrect: boolean;
}

type QuestionsProps = {
  lastLevel: boolean;
  question: string;
  options: Options[];
  money: string;
  setLevel: (value: (prev: number) => number) => void;
  setEndOfGame: (value: boolean) => void;
  setProgress: (value: string) => void;
};

type ProgressProps = {
  money: string;
  level: number;
  index: number;
};

type EndOfGameProps = {
  progress: string;
  setEndOfGame: (value: boolean) => void;
  setLevel: (value: number) => void;
  setProgress: (value: string) => void;
};

type MenuButtonProps = {
  classSelector: string;
  setProgressActive: () => void;
};

export {
  QuestionsProps, ProgressProps, EndOfGameProps, MenuButtonProps,
};
