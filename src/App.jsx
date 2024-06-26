import { useState } from 'react'

import { GameStart } from './components/gameBody';
import { Header } from './components/header';

import './styles/gameBoard.css'
import './styles/pageStructure.css'
import './styles/header.css'

function App() {
  const [characterData, setData] = useState([])
  const [starterData, setStarterData] = useState([]);
  const [gameMode, setGameMode] = useState({});
  const [cardStorage, setCardMemory] = useState([]);

  // visibility states:
  const [scoreVisible, setScoreVis] = useState(false)
  const [gameStarted, isGameStarted] = useState(false)
  const [gameEnded, isGameEnded] = useState(false)
  const [gameWon, isGameWon] = useState(false)

  function resetGame() {
    const dummyData = starterData
    setData(dummyData)
    gameMode.currentScore = 0;
    setGameMode({})
    isGameEnded(false)
    isGameWon(false)
    isGameStarted(false)
    setCardMemory([])
    setScoreVis(false)
  }


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
        gameEnded = {gameEnded}
        isGameEnded = {isGameEnded}
        gameWon = {gameWon}
        isGameWon = {isGameWon}
        setStarterData = {setStarterData}
        onReset = {resetGame}
      />

    </div>
    
  )
}

export default App
