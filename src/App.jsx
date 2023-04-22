import { useState } from 'react'

import Board from './components/Board'

function App() {

  return (
    <>
      <h1>This is a TicTacToe game</h1>
      <Board />
      {/* <button className='restart' onClick={console.log('pressbutton')}>Restart game</button> */}
    </>
  )
}

export default App
