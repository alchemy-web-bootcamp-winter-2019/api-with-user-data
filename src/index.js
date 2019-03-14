import { starships } from '../data.js';
import loadStarships from './starships/starship-components.js';
import { writeQuery, readQuery } from './starships/query-component.js';
import loadSearch from './starships/search-component.js';
import { makeSearchUrl } from './make-search-url.js';
const starshipListNode = document.getElementById('starship-list');


loadSearch(searchOptions => {
    const URL = makeSearchUrl(searchOptions);
    fetch(URL)
        .then(response => response.json())
        .then(starship => {
            loadStarships(starship.results);
            console.log(starship);
        });
})


