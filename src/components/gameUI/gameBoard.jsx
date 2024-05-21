export function GameBoard({ currentData, dataChange, gameMode }) {
    // here each click of a card will trigger a re-render of the board
    // re-order the cards

    // will also create the array here that keeps track of cards have 
    // been clicked already
    console.log(currentData)
    console.log(gameMode)

    // maybe trigger a function right away here that randomely shuffles the character
    // array, so that each time a card is clicked, a new order of cards is set
    function randomizeOrder(array) {
        let currentIndex = array.lnegth;

        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = 
            [array[randomIndex], array[currentIndex]];
        }
        console.log(array)

        return array
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