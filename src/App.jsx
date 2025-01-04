import './App.css'
import { useState } from 'react'

function App() {
    const [score, setScore] = useState(0)


  return (
    <>
        <div className="header">
            <div className="header-left">
                <h4>Memory Game</h4>
                <p>Earn points by clicking on a Pokemon, but don&#39;t click on the same one twice!</p>
            </div>
            <div className="header-right">
                <p>Score: {score}</p>
            </div>
        </div>

    </>
  )
}

export default App
