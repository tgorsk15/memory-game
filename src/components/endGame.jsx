

export function EndGameContent({ gameWon, onReset, setBoardState }) {
    // this component appears when either a game has been WON or LOST
    // on a final cardCLick by the user

    // this cntainer will have a a play again button, that will reset all states
    // and bring user back to the select difficulty container


    return (
        <div className="reset-game-container">
            Reset
            {/* will telluser if they won or lost */}
            <p>

            </p>
            <button 
                className="play-again-button"
                onClick={(e) => {
                    e.preventDefault()
                    console.log('reseting')
                    setBoardState(false)
                    onReset();
                }}
            >
                Play Again?
            </button>
        </div>
    )
}