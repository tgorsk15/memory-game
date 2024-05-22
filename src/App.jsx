import { useState } from 'react'

import { Footer } from './components/footer';
import { GameStart } from './components/gameBody';
import { Header } from './components/header';
// import { easyGame, mediumGame, hardGame } from './components/data';

import './App.css'
import './styles/gameBoard.css'
import './styles/pageStructure.css'
import './styles/header.css'

function App() {
  // this will set the number of cards of the game
  // const [cardCount, setCards] = useState(0);

  const [characterData, setData] = useState([])
  const [gameMode, setGameMode] = useState({});
  const [cardStorage, setCardMemory] = useState([]);

  // visibility states:
  const [scoreVisible, setScoreVis] = useState(false)
  const [gameStarted, isGameStarted] = useState(false)

  return (
    <div className='main-container'>
      <Header
        gameMode = {gameMode}
        scoreVisible = {scoreVisible}
      />

      <GameStart
        currentData = {characterData}
        dataChange = {setData}
        gameMode = {gameMode}
        changeGameMode = {setGameMode}
        cardStorage = {cardStorage}
        changeCardMemory = {setCardMemory}
        changeScoreVis = {setScoreVis}
        gameStarted = {gameStarted}
        isGameStarted = {isGameStarted}
      />

      <Footer

      />
      {console.log(characterData)}

    </div>
    
  )
}

export default App
