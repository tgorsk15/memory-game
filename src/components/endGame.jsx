

export function EndGameContent({ 
    gameWon, onReset, setBoardState 
    }) {
    // this component appears when either a game has been WON or LOST
    // on a final cardCLick by the user

    // gives user a Play Again option


    return (
        <div className="reset-game-container">
            {gameWon && (
                <p className="won-message">
                    You have mastered the Room of Requirement !!
                </p>  
            )}
            
            {!gameWon && (
                <p className="lose-message">
                    You have failed the challenge ...
                </p> 
            )}
            
            <button 
                className="play-again-button"
                onClick={(e) => {
                    e.preventDefault()
                    console.log('reseting');
                    setBoardState(false);
                    onReset();
                }}
            >
                Play Again?
            </button>
        </div>
    )
}