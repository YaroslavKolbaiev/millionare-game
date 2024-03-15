import './App.css';
import { useState } from 'react';
import StartingMenu from './components/StartingMenu';
import Game from './components/Game';

function App() {
  const [start, setStart] = useState(false);
  return (
    <>
      {start && <StartingMenu setStart={setStart} />}
      {!start && <Game />}
    </>
  );
}

export default App;
