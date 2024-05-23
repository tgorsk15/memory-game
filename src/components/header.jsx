import { useState } from "react"

export function Header({ gameMode, scoreVisible }) {
    const [bestScore, setBestScore] = useState(0)

    let dummyScore = bestScore;
    if (dummyScore < gameMode.currentScore) {
        dummyScore = gameMode.currentScore
        setBestScore(dummyScore)
    }


    return (
        <header className="header-container">
            <h1 className="game-title">Harry Potter</h1>
            <div className="score-info">
                {scoreVisible && (
                    <>
                        <p className="current-score">
                            Score: {gameMode.currentScore} / {gameMode.maxScore}
                        </p>
                        <br />
                        <p className="best-score"> Best Score: {bestScore} </p>
                    </>
                )}
                
            </div>
        </header>
    )
}