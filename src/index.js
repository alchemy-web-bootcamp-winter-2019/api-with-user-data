
import loadStarships from './starships/starship-components.js';
import { writeQuery, readQuery } from './starships/query-component.js';
import loadSearch from './starships/search-component.js';
import { makeSearchUrl } from './make-search-url.js';
const starshipListNode = document.getElementById('starship-list');

let searchOptions = null;

loadSearch(newSearchOptions => {
   searchOptions = newSearchOptions;
   const queryOptions = {
       search: searchOptions
    };
    const query = writeQuery(queryOptions);
    window.location.hash = query;
});

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readQuery(query);
    const url = makeSearchUrl(queryOptions);
    fetch(url)
    .then(response => response.json())
    .then(starship => {
        loadStarships(starship.results);
    });
    });
   


