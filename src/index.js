import { starships } from '../data.js';
import loadStarships from './starships/starship-components.js';
const query = encodeURIComponent('death');
const page = 1;

const URL = `https://swapi.co/api/starships/?search=${query}`;

console.log(URL);

fetch(URL)
.then(response => response.json())
.then(starship => {
    loadStarships(starship.results);
    console.log(starship);
});

const starshipListNode = document.getElementById('starship-list');

