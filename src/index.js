
import loadStarships, { updateStarships } from './starships/starship-components.js';
import { writeQuery, readQuery } from './starships/query-component.js';
import './starships/search-component.js';
import { updateSearchInput } from './starships/search-component.js';
import { makeSearchUrl } from './make-search-url.js';
const starshipListNode = document.getElementById('starship-list');

let queryOptions = null;

window.addEventListener('hashchange', loadQuery);

loadQuery();

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readQuery(query);
    updateSearchInput(queryOptions.searchInput);
    const url = makeSearchUrl(queryOptions);
    fetch(url)
        .then(response => response.json())
        .then(starships => {
            updateStarships(starships.results);
        })
        .catch(err => {
            /* eslint-disable-next-line*/
            console.error('Fetch error:', err);
        });
};

   


