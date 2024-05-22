import { useState, useEffect } from "react"
import { GameBoard } from "./gameUI/gameBoard";
import { easyGame, mediumGame, hardGame } from "./data";
import { randomizeOrder } from "./randomizeFunction";


export function GameStart({ 
        currentData, dataChange, 
        gameMode, changeGameMode,
        cardStorage, changeCardMemory,
        changeScoreVis, gameStarted,
        isGameStarted
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
        // console.log(newData);

        dataChange(newData);
        changeGameMode(chosenGameMode);
    }


    function handleSelectData(characterData) {
        const activeCharacters = []
        for (let i = 0; i < 25; i++) {
            activeCharacters.push(characterData[i]);
        }
        dataChange(activeCharacters);
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

                // potentially store this in a state variable, to use on game reset
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
            // style this tomorrow!! - 5/22
            <div className="start-game-container">
                Game Start
                <button

                    onClick={(e) => {
                        e.preventDefault()
                        handleStartClick(easyGame);
                    }}
                >
                    Easy
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        handleStartClick(mediumGame);
                    }}
                >
                    Moderate
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        handleStartClick(hardGame);
                    }}
                >
                    Challenging
                </button>
            </div>
        )}
        
            {boardVisible && <GameBoard
                currentData = {currentData}
                dataChange = {dataChange}
                gameMode = {gameMode}
                changeGameMode = {changeGameMode}
                cardStorage = {cardStorage}
                changeCardMemory = {changeCardMemory}
            />}
        </main>
    )

}




// make an array that stores each instance of a card, which is then mapped through to
// generate the initial gameboard of cards

// the API fetch should happen once, when a Game Difficulty button has been clicked... OR
// this could happen as soon as the page loads, to cut back on time, and preload 
// all characters.
// the number of cards should be passed to the GameBoard component, and the cards should
// be generated

// make an array that stores the IDs of each unique card when one is clicked.
// whenever the user clicks on a card, it must get checked against the array to
// see if that card has been clicked before ... and then trigger a lose game event

// a round should run a max amount of times ... if the counter for the number
// of click events equals the max amount, then the won game mechanism is triggered

// a card click should trigger a re-render of a component

// App.jsx has to trigger the "Select Game Type screen"... then once the user selects
// their game, the gameApp itself will be triggered