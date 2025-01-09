import './App.css'
import {useState} from 'react'
import Card from './Card'

function App({apiResponse}) {
    const [score, setScore] = useState(0);
    const indices = [5, 7, 3, 1, 0, 6, 2, 4];

    // Randomize order
    for (let i = indices.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

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
        <div className="card-container">
            <Card data={apiResponse[indices[0]]}></Card>
            <Card data={apiResponse[indices[1]]}></Card>
            <Card data={apiResponse[indices[2]]}></Card>
            <Card data={apiResponse[indices[3]]}></Card>
            <Card data={apiResponse[indices[4]]}></Card>
            <Card data={apiResponse[indices[5]]}></Card>
            <Card data={apiResponse[indices[6]]}></Card>
            <Card data={apiResponse[indices[7]]}></Card>
        </div>

    </>
  )
}

export default App
