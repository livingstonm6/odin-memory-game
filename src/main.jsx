import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

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
    ]).then(res => createRoot(document.getElementById('root')).render(
        <StrictMode>
            <App apiResponse={res}/>
        </StrictMode>,
    )
    )
    .catch(err => console.log(err));

