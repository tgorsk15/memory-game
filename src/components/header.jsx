export function Header({ gameMode }) {

    console.log(gameMode)

    return (
        <nav className="header-container">
            <h1 className="game-title">Harry Potter</h1>
            <div className="score-info">
                <p className="current-score">
                    Score: {gameMode.currentScore} / {gameMode.maxScore}
                </p>
                <br />
                <p className="best-score"> Best Score: </p>
            </div>
        </nav>
    )
}