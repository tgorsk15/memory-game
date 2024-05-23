import { useState, useEffect } from "react"
import { GameBoard } from "./gameUI/gameBoard";
import { EndGameContent } from "./endGame";

import { easyGame, mediumGame, hardGame } from "./data";
import { randomizeOrder } from "./randomizeFunction";


export function GameStart({ 
        currentData, dataChange, 
        gameMode, changeGameMode,
        cardStorage, changeCardMemory,
        changeScoreVis, gameStarted,
        isGameStarted, gameEnded,
        isGameEnded, gameWon,
        isGameWon, setStarterData,
        onReset
    }) {
    const [boardVisible, setBoardState] = useState(false);

    function handleStartClick(chosenGameMode) {
        const tempCharacterData = [...currentData];

        adjustCharacterData(chosenGameMode, tempCharacterData);
        setBoardState(true);
        changeScoreVis(true);
        isGameStarted(true);
    }

    function adjustCharacterData(chosenGameMode, tempData) {
        const newData = randomizeOrder(tempData).slice(0, chosenGameMode.maxScore)

        dataChange(newData);
        changeGameMode(chosenGameMode);
    }


    function handleSelectData(characterData) {
        const activeCharacters = []
        for (let i = 0; i < 25; i++) {
            activeCharacters.push(characterData[i]);
        }
        dataChange(activeCharacters);
        setStarterData(activeCharacters);
        // set a new state here that holds this starting form of data
        // forever
    }


    useEffect(() => {
        let ignore = false
        const fetchData = async () => {
            try {
                const response = await fetch('https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters',
                {mode: 'cors'})

                if (!response.ok) {
                    throw new Error('Request failed');
                }

                const characterData = await response.json()
                if (!ignore) {
                    handleSelectData(characterData)
                }
                

            } catch(error) {
                console.log(error)
            }

            
        }

        fetchData();
        return () => {
            ignore = true;
        };

    }, [])


    return (
        <main className="main-game-container">
        {!gameStarted && (
            <div className="start-game-container">
                <h3 className="difficulty-message">
                    Select Game Difficulty
                </h3>
                <button
                    className="easy-button"
                    onClick={(e) => {
                        e.preventDefault()
                        handleStartClick(easyGame);
                    }}
                >
                    Easy
                </button>
                <button
                className="medium-button"
                    onClick={(e) => {
                        e.preventDefault()
                        handleStartClick(mediumGame);
                    }}
                >
                    Moderate
                </button>
                <button
                    className="hard-button"
                    onClick={(e) => {
                        e.preventDefault()
                        handleStartClick(hardGame);
                    }}
                >
                    Challenging
                </button>
            </div>
        )}
        
        {gameEnded && <EndGameContent
            gameWon = {gameWon}
            onReset = {onReset}
            setBoardState = {setBoardState}
        />}
        
        {boardVisible && <GameBoard
            currentData = {currentData}
            dataChange = {dataChange}
            gameMode = {gameMode}
            changeGameMode = {changeGameMode}
            cardStorage = {cardStorage}
            changeCardMemory = {changeCardMemory}
            gameEnded = {gameEnded}
            isGameEnded = {isGameEnded}
            gameWon = {gameWon}
            isGameWon = {isGameWon}
        />}
        </main>
    )

}




// make an array that stores each instance of a card, which is then mapped through to
// generate the initial gameboard of cards

// the API fetch should happen once, during the initial render of the webpage

// the number of cards generated on the GameBoard component will depend on what
// difficulty the user selected at the beginning of the game

// a round should run a max amount of times ... if the counter for the number
// of click events equals the max amount, then the won game mechanism is triggered

// Card clicks re-render the board, checks are done to see if game is won or lost

// App.jsx has to trigger the "Select Game Type screen"... then once the user selects
// their game, the gameApp itself will be triggered