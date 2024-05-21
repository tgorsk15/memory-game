import { randomizeOrder } from './../randomizeFunction';

export function GameBoard({ 
        currentData, dataChange, 
        gameMode, changeGameMode,
        cardStorage, changeCardMemory
    }) {
    // here each click of a card will trigger a re-render of the board
    // re-order the cards

    console.log(currentData)
    console.log(cardStorage);
    console.log(gameMode);
    

    function handleCardClick(character) {
        const isRepeat =checkForRepeat(character)
        if (isRepeat === false) (
            addPoint()
        )

        
        
        // maybe create a temp variable here to equal gameMode.
        // then I can modify the score of hat variable, and then trigger
        // the setGameMode function
    }

    function checkForRepeat(character) {
        const tempMemory = [...cardStorage]
        console.log(character)

        const repeatCheck = 
            cardStorage.some(item => JSON.stringify(item) === JSON.stringify(character))
        console.log(repeatCheck);
        //add to card Memory if not a repeat:
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
            alert('game won!!')
            return
        }
        changeGameMode(tempGame);
        console.log('point added')

    }

    function loseGame() {
        alert('Game Lost!')
    }

    

    // use another useEffect() here??
    // maybe have the Effect just be a check to see if the card that was clicked
    // was already clicked before ... and then trigger a loss

    return (
        <div className="gameboard-container">
            {currentData.map((character) => {
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
            })}
            
        </div>
    )
}

