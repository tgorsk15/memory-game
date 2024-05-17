import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Footer } from './components/footer';
import { GameStart } from './components/gameBody';
import { Header } from './components/header';
import { easyGame, mediumGame, hardGame } from './components/data';

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <Header
        
      />

      <GameStart
      
      />

      <Footer

      />
    </div>
    
  )
}

export default App
