import { useState } from 'react'

import { Footer } from './components/footer';
import { GameStart } from './components/gameBody';
import { Header } from './components/header';
// import { easyGame, mediumGame, hardGame } from './components/data';

import './App.css'
import './styles/gameBoard.css'
import './styles/pageStructure.css'

function App() {
  // this will set the number of cards of the game
  // const [cardCount, setCards] = useState(0);

  const [characterData, setData] = useState([])
  const [gameMode, setGameMode] = useState({});
  const [cardStorage, setCardMemory] = useState([]);

  return (
    <div className='main-container'>
      <Header
        
      />

      <GameStart
        currentData = {characterData}
        dataChange = {setData}
        gameMode = {gameMode}
        changeGameMode = {setGameMode}
        cardStorage = {cardStorage}
        changeCardMemory = {setCardMemory}
      />

      <Footer

      />
      {console.log(characterData)}

    </div>
    
  )
}

export default App
