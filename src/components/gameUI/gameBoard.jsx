export function GameBoard({ currentData, dataChange, gameMode }) {
    // here each click of a card will trigger a re-render of the board
    // re-order the cards

    // will also create the array here that keeps track of cards have 
    // been clicked already
    console.log(currentData)
    console.log(gameMode)
    
    // NOT WORKING:
    const newArray = randomizeOrder([45, 6, 23, 5, 80, 9, 11, 32, 28, 3])
    console.log(newArray)

    function randomizeOrder(array) {
        // let currentIndex = array.lnegth;

        // while (currentIndex !== 0) {
        //     let randomIndex = Math.floor(Math.random() * currentIndex);
        //     currentIndex--;

        //     [array[currentIndex], array[randomIndex]] = 
        //     [array[randomIndex], array[currentIndex]];
        // }
        // console.log(array)

        // return array

        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp
        }

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