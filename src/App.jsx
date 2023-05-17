import { useState } from 'react'

import Game from './components/Game'

function App() {

  return (
    <>
      <header className="header">
        <h1>Tic Tac Toe</h1>
      </header>
      <Game />
    </>
  );
}

export default App
