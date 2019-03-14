//import jokes from '../data/sample-data.js';
import loadJokes from './jokes-component.js';



const query = encodeURIComponent('pain');
const url = `https://api.chucknorris.io/jokes/search?query=${query}`;

fetch(url)
    .then(response => response.json())
    .then(response => {
        loadJokes(response);
    });//