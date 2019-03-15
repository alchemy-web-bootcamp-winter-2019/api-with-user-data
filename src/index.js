import loadJokes from './jokes-component.js';
import './search-component.js';
import { updateQueryInput } from './search-component.js';
import { readFromQuery } from './query-component.js';
import makeUrl from './make-url.js';
import loadPaging from './paging-component.js';
import { pageArray } from './paging-component.js';
import loadHeader from './header-component.js';

loadHeader();

window.addEventListener('hashchange', loadQuery);


const searchPrompt = document.getElementById('search-prompt');
const jokesSection = document.getElementById('jokes-section');

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateQueryInput(queryOptions.query);
    
    const url = makeUrl(queryOptions);

    if(!url) {
        searchPrompt.classList.remove('hidden');
        jokesSection.classList.add('hidden');
        return;
    }
    else {
        searchPrompt.classList.add('hidden');
        jokesSection.classList.remove('hidden');
    }
    
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