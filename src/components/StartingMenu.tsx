import handImage from '../assets/hand 1.png';

function StartingMenu() {
  return (
    <div className="game">
      <img className="hand_image" src={handImage} alt="image_of_hand" />
      <div>
        <h1 className="title">
          Who whants to be
          <br />
          {' '}
          a millionere
        </h1>
        <button className="start_btn" type="button">
          Start
        </button>
      </div>
    </div>
  );
}

export default StartingMenu;
