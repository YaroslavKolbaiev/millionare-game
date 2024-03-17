import { MenuButtonProps } from '../types';

function MenuButton({ setProgressActive, classSelector }: MenuButtonProps) {
  return (
    <button
      onClick={setProgressActive}
      type="button"
      className={`game_menu ${classSelector}`}
    >
      burger
    </button>
  );
}

export default MenuButton;
