import { useState } from "react";
import Board from "./Board";
import Popup from './Popup';
import Undo from "./icons/Undo";
import Do from "./icons/Do";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    const [showPopup, setShowPopup] = useState(false);

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        if(nextMove >= 0 && nextMove < history.length) {
            setCurrentMove(nextMove);
        }
    }

    const winner = calculateWinner(currentSquares);
    let status;
    if (winner || !currentSquares.includes(null)) {
        status = 'Ganador: ' + winner;
    } else {
        status = 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="game">
            <div className="game__board">
                <Board xIsNext={xIsNext} squares={currentSquares} status={status} calculateWinner={calculateWinner} onPlay={handlePlay} showPopup={setShowPopup} />
            </div>

            <div className="moves">
                <button className="moves__icon"{...currentMove === 0 ? 'disabled' : ''} onClick={() => jumpTo(currentMove - 1)}><Undo /></button>
                <button className="moves__icon"{...currentMove === history.length ? 'disabled' : ''} onClick={() => jumpTo(currentMove + 1)}><Do /></button>
            </div>

            {showPopup && <Popup winner={winner} hidePopup={setShowPopup} />}

        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
  
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  
    return null;
  }