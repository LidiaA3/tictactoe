function Popup(props) {
    return (
        <div className="popup">
            <span className="popup__btn" onClick={(e) => e.currentTarget.parentNode.style.display='none'}>&times;</span>
            <p>The winner was {props.winner === 'O' ? 'O' : (props.winner === 'X' ? 'X' : 'null')}</p>
            <button className='restart' onClick={() => {window.location.reload()}}>Restart game</button>
        </div>
    );
}

export default Popup