import loadJokes from './jokes-component.js';
import './search-component.js';
import { updateQueryInput } from './search-component.js';
import { readFromQuery } from './query-component.js';
import makeUrl from './make-url.js';

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateQueryInput(queryOptions.query);

    const url = makeUrl(queryOptions);
    fetch(url)
        .then(response => response.json())
        .then(jokes => {
            loadJokes(jokes);
        })
        .catch(err => {
            /* eslint-disable-next-line */
            console.error('Fetch error:', err);
        });
});