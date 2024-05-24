

export function EndGameContent({ 
    gameWon, onReset, setBoardState 
    }) {
    // this component appears when either a game has been WON or LOST
    // on a final cardCLick by the user

    // gives user a Play Again option

    return (
        <div className="reset-game-container">
            {gameWon && (
                <>
                    <p className="won-message">
                        You have mastered the Room of Requirement !!
                    </p>
                    <iframe src="https://giphy.com/embed/zC99Tr1riCeB1vv9ec" width="466" height="480" frameBorder="0" className="win-gif">
                    </iframe>
                </>
            )}
            
            {!gameWon && (
                <>
                    <p className="lose-message">
                        You have failed the challenge ...
                    </p>
                    <iframe src="https://giphy.com/embed/3o7bu8wHMiBqpCdmo0" width="200" height="200" className="lose-gif">
                    </iframe>
                 </>
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