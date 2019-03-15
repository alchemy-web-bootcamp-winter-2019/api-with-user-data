
import  updateStarships from './starships/starship-components.js';
import { writeSearchToQuery, readQuery } from './starships/query-component.js';
import './starships/search-component.js';
import { updateSearchInput } from './starships/search-component.js';
import { updatePagingInfo } from '../src/starships/paging-component.js';
import { makeSearchUrl } from './make-search-url.js';
import { auth } from './firebase.js';
import loadHeader from './shared/header-component.js';

const starshipListNode = document.getElementById('starship-list');
const headerContainer = document.getElementById('header-container');

loadHeader();

let queryOptions = null;

window.addEventListener('hashchange', loadQuery);

auth.onAuthStateChanged(() => {
    loadQuery();
});

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readQuery(query);
    updateSearchInput(queryOptions.searchInput);
    const url = makeSearchUrl(queryOptions);
    fetch(url)
        .then(response => response.json())
        .then(starships => {
            updateStarships(starships.results);
            let totalPages = Math.ceil(starships.count / 10);
            let page = queryOptions.page;
            const pagingInfo = {
                totalPages: totalPages,
                page: page
            };
            updatePagingInfo(pagingInfo);
        })
        .catch(err => {
            /* eslint-disable-next-line*/
            console.error('Fetch error:', err);
        });
};

   


