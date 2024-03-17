import React, { Suspense } from 'react';

const FingerUp = React.lazy(() => import('./FingerUp'));

type Props = {
  setStart: (value: boolean) => void;
};

function StartingMenu({ setStart }: Props) {
  return (
    <div className="menu">
      <Suspense fallback={<div className="finger_up_skeleton" />}>
        <FingerUp />
      </Suspense>
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
