import loadJokes from './jokes-component.js';
import './search-component.js';
import { updateQueryInput } from './search-component.js';
import { readFromQuery } from './query-component.js';
import makeUrl from './make-url.js';
import loadPaging from './paging-component.js';
import { pageArray } from './paging-component.js';

window.addEventListener('hashchange', loadQuery);

function loadQuery() {
    
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateQueryInput(queryOptions.query);

    const url = makeUrl(queryOptions);

    fetch(url)
        .then(response => response.json())
        .then(jokes => {
            loadPaging(jokes.result.length, pagingOptions => {
                const pagedJokes = pageArray(jokes.result, pagingOptions);
                
                loadJokes(pagedJokes);
            });
        })
        .catch(err => {
            /* eslint-disable-next-line */
            console.error('Fetch error:', err);
        });
    
}


