import { useState } from "react"
import App from "../App"
import { GameBoard } from "./gameUI/gameBoard";

export function GameStart() {
    const [boardVisible, setBoardState] = useState(false);

    function handleStartClick() {
        setBoardState(true)
    }


    return (
        <div className="start-game-container">
            Game Start
            <button
                onClick={handleStartClick}
            >
                Start Game
            </button>
            {boardVisible && <GameBoard/>}
        </div>
    )

}




// make an array that stores each instance of a card, which is then mapped through to
// generate the initial gameboard of cards

// make an array that stores the IDs of each unique card when one is clicked.
// whenever the user clicks on a card, it must get checked against the array to
// see if that card has been clicked before ... and then trigger a lose game event

// a round should run a max amount of times ... if the counter for the number
// of click events equals the max amount, then the won game mechanism is triggered

// a card click should trigger a re-render of a component

// App.jsx has to trigger the "Select Game Type screen"... then once the user selects
// their game, the gameApp itself will be triggered