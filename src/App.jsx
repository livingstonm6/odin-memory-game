import './App.css'
import {useState} from 'react'
import Card from './Card'

function App({apiResponse}) {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clicked, setClicked] = useState(new Set());

    const indices = [5, 7, 3, 1, 0, 6, 2, 4];

    // Randomize order
    for (let i = indices.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    function cardClickHandler(name){
        console.log(name);
        if (clicked.has(name)){
            alert("Game Over");
            if (score > highScore){
                setHighScore(score);
            }
            setScore(0);
            setClicked(new Set());
            return;
        }

        const newSet = new Set(clicked);
        newSet.add(name);
        setClicked(newSet);
        setScore(score+1);
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
                <p>High Score: {highScore}</p>
            </div>
        </div>
        <div className="card-container">
            <Card clickHandler={() => cardClickHandler(apiResponse[indices[0]].name)} data={apiResponse[indices[0]]}></Card>
            <Card clickHandler={() => cardClickHandler(apiResponse[indices[1]].name)} data={apiResponse[indices[1]]}></Card>
            <Card clickHandler={() => cardClickHandler(apiResponse[indices[2]].name)} data={apiResponse[indices[2]]}></Card>
            <Card clickHandler={() => cardClickHandler(apiResponse[indices[3]].name)} data={apiResponse[indices[3]]}></Card>
            <Card clickHandler={() => cardClickHandler(apiResponse[indices[4]].name)} data={apiResponse[indices[4]]}></Card>
            <Card clickHandler={() => cardClickHandler(apiResponse[indices[5]].name)} data={apiResponse[indices[5]]}></Card>
            <Card clickHandler={() => cardClickHandler(apiResponse[indices[6]].name)} data={apiResponse[indices[6]]}></Card>
            <Card clickHandler={() => cardClickHandler(apiResponse[indices[7]].name)} data={apiResponse[indices[7]]}></Card>
        </div>

    </>
  )
}

export default App
