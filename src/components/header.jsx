import { useState } from "react"
import logo from './../assets/logo2.png'


export function Header({ gameMode, scoreVisible }) {
    const [bestScore, setBestScore] = useState(0)

    let dummyScore = bestScore;
    if (dummyScore < gameMode.currentScore) {
        dummyScore = gameMode.currentScore
        setBestScore(dummyScore)
    }


    return (
        <header className="header-container">
            <div className="title-container">
                <img src={logo} alt="logo" className="logo-pic" />
                <h1 className="game-title">The Room of Requirement</h1> 
            </div>
            
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