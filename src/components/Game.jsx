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

    return (
        <div className="game">
            <div className="game__board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} defineWinner={setShowPopup} />
            </div>

            <div className="moves">
                <button className="moves__icon"{...currentMove === 0 ? 'disabled' : ''} onClick={() => jumpTo(currentMove - 1)}><Undo /></button>
                <button className="moves__icon"{...currentMove === history.length ? 'disabled' : ''} onClick={() => jumpTo(currentMove + 1)}><Do /></button>
            </div>

            {showPopup && <Popup winner={xIsNext} />}

        </div>
    );
}