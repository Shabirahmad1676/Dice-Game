import { useState } from 'react';
import HomeDicePage from './components/HomeDicePage';
import './index.css'
import GameStarted from './components/GameStarted';


function App() {

  const [Isgamestarted, setIsgamestarted] = useState(false)

  const toggleGame = ()=>{
    setIsgamestarted(prevGame=> !prevGame)
  }

  return (
    <>
      { Isgamestarted ? <GameStarted/>:  <HomeDicePage toggle={toggleGame} /> }
    </>
  )
}

export default App
