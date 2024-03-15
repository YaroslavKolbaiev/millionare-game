type Props = {
  money: string;
};

function Progress({ money }: Props) {
  return (
    <div className="game_progress">
      <hr className="game_progress_line" />
      <div className="game_progress_shape">
        <div className="game_progress_data">{money}</div>
      </div>
    </div>
  );
}

export default Progress;
