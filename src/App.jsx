import './App.css'
import {useState} from 'react'
import Card from './Card'

function App({pokemonData}) {
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
        <div className="card-container">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>

    </>
  )
}

export default App
