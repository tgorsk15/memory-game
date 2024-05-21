import { useState, useEffect } from "react"
import { GameBoard } from "./gameUI/gameBoard";
import { easyGame, mediumGame, hardGame } from "./data";


export function GameStart({ currentData, dataChange, gameMode, changeGameMode }) {
    const [boardVisible, setBoardState] = useState(false);

    function handleStartClick(chosenGameMode) {
        setBoardState(true);
        changeGameMode(chosenGameMode);
    }

    function handleSelectData(characterData) {
        const activeCharacters = []
        for (let i = 0; i < 18; i++) {
            activeCharacters.push(characterData[i]);
        }
        console.log(activeCharacters)
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

                const characterData = await response.json()
                // console.log(characterData)

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


    console.log('running now')

    return (
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

            {boardVisible && <GameBoard
                currentData = {currentData}
                gameMode = {gameMode}
            />}
        </div>
    )

}




// make an array that stores each instance of a card, which is then mapped through to
// generate the initial gameboard of cards

// the API fetch should happen once, when a Game Difficulty button has been clicked... OR
// this couldhappen as soon as the page loads, to cut back on time, and preload 
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