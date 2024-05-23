import { randomizeOrder } from './../randomizeFunction';

export function GameBoard({ 
        currentData, dataChange, 
        gameMode, changeGameMode,
        cardStorage, changeCardMemory,
        gameEnded, isGameEnded,
        gameWon, isGameWon
    }) {
    // here each click of a card will trigger a re-render of the board
    // and re-order the cards

    console.log(currentData)
    console.log(cardStorage);
    

    function handleCardClick(character) {
        const isRepeat = checkForRepeat(character)
        if (isRepeat === false) {
            const pointAdd = addPoint();
            if (pointAdd === true) {
                const oldData = [...currentData]
                const newData = randomizeOrder(oldData)
                dataChange(newData);
            }
        }

    }

    function checkForRepeat(character) {
        const tempMemory = [...cardStorage]
        console.log(character)

        const repeatCheck = 
            cardStorage.some(item => JSON.stringify(item) === JSON.stringify(character))
        console.log(repeatCheck);

        //  add to card Memory and change state if not a repeat:
        if (repeatCheck === false) {
            tempMemory.push(character);
            changeCardMemory(tempMemory)
            return false

        } else if (repeatCheck === true) {
            loseGame()
        }

    }

    function addPoint() {
        const tempGame = gameMode;
        // check for win here as well
        console.log(tempGame)
        tempGame.currentScore++
        if (tempGame.currentScore === tempGame.maxScore) {
            winGame();
            return false
        }
        changeGameMode(tempGame);
        return true

    }

    function loseGame() {
        isGameEnded(true)
        alert('Game Lost!')
    }

    function winGame() {
        isGameEnded(true)
        isGameWon(true);
        alert('game won!!')
    }

    

    return (
        <div className="gameboard-container">
            {!gameEnded && (
                currentData.map((character) => {
                    return (
                        <div
                            key={character.id}
                            className="card-container"
                            onClick={(e) => {
                                e.preventDefault()
                                handleCardClick(character);
                            }}
                        >
                            <img src={character.image} alt="character" className="card-portrait" />
                            <h3 className="character-title">{character.name}</h3> 
                        </div>
                        
                    )
                })

            )}
            
            
        </div>
    )
}

