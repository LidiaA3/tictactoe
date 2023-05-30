function Popup(props) {
    return (
        <div className="popup">
            <p>The winner was {props.winner ? 'O' : 'X'}</p>
            <button className='restart' onClick={() => {window.location.reload()}}>Restart game</button>
        </div>
    );
}

export default Popup