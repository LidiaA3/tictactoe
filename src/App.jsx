import { useState } from 'react'

import Game from './components/Game'

function App() {

  return (
    <>
      <h1>This is a TicTacToe game</h1>
      <Game />
      <button className='restart' onClick={() => {window.location.reload()}}>Restart game</button>
    </>
  );
}

export default App
