import loadJokes from './jokes-component.js';
import './search-component.js';
import { updateQueryInput } from './search-component.js';
import { readFromQuery } from './query-component.js';

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateQueryInput(queryOptions.query);

});


const query = encodeURIComponent('pain');
const url = `https://api.chucknorris.io/jokes/search?query=${query}`;

fetch(url)
    .then(response => response.json())
    .then(response => {
        loadJokes(response);

    });