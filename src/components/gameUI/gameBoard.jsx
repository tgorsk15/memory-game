import { randomizeOrder } from './../randomizeFunction';

export function GameBoard({ currentData, dataChange, gameMode, changeGameMode }) {
    // here each click of a card will trigger a re-render of the board
    // re-order the cards

    // will also create the array here that keeps track of cards have 
    // been clicked already
    console.log(currentData)
    console.log(gameMode)
    
    // test:
    // const newArray = randomizeOrder([45, 6, 23, 5, 80, 9, 11, 32, 28, 3])
    // console.log(newArray)

    

    function handleCardClick(currentGameState) {
        // maybe create a temp variable here to equal gameMode.
        // then I can modify the score of hat variable, and then trigger
        // the setGameMode function
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
                >
                    <img src={character.image} alt="character" className="card-portrait" />
                    <h3 className="character-title">{character.name}</h3> 
                </div>
                
               )
            })}
            
        </div>
    )
}

