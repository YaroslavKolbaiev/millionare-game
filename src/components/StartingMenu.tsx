import FingerUp from './FingerUp';

type Props = {
  setStart: (value: boolean) => void;
};

function StartingMenu({ setStart }: Props) {
  return (
    <div className="meunu">
      <FingerUp />
      <div>
        <h1 className="menu_title">
          Who whants to be
          <br />
          {' '}
          a millionere
        </h1>
        <button
          onClick={() => {
            setStart(true);
          }}
          className="menu_start_btn"
          type="button"
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default StartingMenu;
