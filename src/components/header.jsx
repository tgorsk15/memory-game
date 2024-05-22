export function Header({ gameMode, scoreVisible }) {

    // possibly need to implement findBestScore function here
    // .. have the info be passed down in a new App prop

    return (
        <nav className="header-container">
            <h1 className="game-title">Harry Potter</h1>
            <div className="score-info">
                {scoreVisible && (
                    <>
                        <p className="current-score">
                            Score: {gameMode.currentScore} / {gameMode.maxScore}
                        </p>
                        <br />
                        <p className="best-score"> Best Score: 0 </p>
                    </>
                )}
                
            </div>
        </nav>
    )
}