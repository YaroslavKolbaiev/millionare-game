interface Options {
  answer: string;
  isCorrect: boolean;
}

type Props = {
  question: string;
  options: Options[];
};

function Questions({ question, options }: Props) {
  const labels = ['A ', 'B ', 'C ', 'D '];
  return (
    <div className="game_questions">
      <div className="game_question">{question}</div>
      <div className="game_options_container">
        {options.map(({ answer, isCorrect }, index) => (
          <div className="game_options_wrapper">
            <hr className="game_line" />
            <div className="game_options_shape">
              <div className="game_options_data">
                <div className="game_options_text">
                  <span>{labels[index]}</span>
                  <span>{answer}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
