import './App.css'
import {useEffect, useState} from 'react'

function App() {
    const [score, setScore] = useState(0)

    useEffect(() => {
        const urls = [
            'https://pokeapi.co/api/v2/pokemon/1',
            'https://pokeapi.co/api/v2/pokemon/2',
            'https://pokeapi.co/api/v2/pokemon/3',
            'https://pokeapi.co/api/v2/pokemon/4',
            'https://pokeapi.co/api/v2/pokemon/5',
            'https://pokeapi.co/api/v2/pokemon/6',
            'https://pokeapi.co/api/v2/pokemon/7',
            'https://pokeapi.co/api/v2/pokemon/8',
        ];

        Promise.all(
            [fetch(urls[0]).then(res => res.json()),
                fetch(urls[1]).then(res => res.json()),
                fetch(urls[2]).then(res => res.json()),
                fetch(urls[3]).then(res => res.json()),
                fetch(urls[4]).then(res => res.json()),
                fetch(urls[5]).then(res => res.json()),
                fetch(urls[6]).then(res => res.json()),
                fetch(urls[7]).then(res => res.json()),
            ]).then(res => console.log(res))
            .catch(err => console.log(err));
    }, []);


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
