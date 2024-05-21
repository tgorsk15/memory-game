import { randomizeOrder } from './../randomizeFunction';

export function GameBoard({ currentData, dataChange, gameMode, changeGameMode }) {
    // here each click of a card will trigger a re-render of the board
    // re-order the cards

    // will also create the array here that keeps track of cards have 
    // been clicked already
    console.log(currentData)
    console.log(gameMode)

    

    function handleCardClick(character) {
        // maybe create a temp variable here to equal gameMode.
        // then I can modify the score of hat variable, and then trigger
        // the setGameMode function
        console.log(character)
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

