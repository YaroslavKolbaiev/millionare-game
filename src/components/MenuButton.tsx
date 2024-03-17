import { MenuButtonProps } from '../types';

function MenuButton({ setProgressActive, classSelector }: MenuButtonProps) {
  return (
    <button
      onClick={setProgressActive}
      type="button"
      className={`mobile_menu_button ${classSelector}`}
    >
      burger
    </button>
  );
}

export default MenuButton;
