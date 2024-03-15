import handImage from '../assets/hand 1.png';

type Props = {
  setStart: (value: boolean) => void;
};

function StartingMenu({ setStart }: Props) {
  return (
    <div className="meunu">
      <img className="" src={handImage} alt="image_of_hand" />
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
