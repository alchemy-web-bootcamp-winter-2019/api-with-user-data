import { writeSearchToQuery } from './query-component.js';

const searchForm = document.getElementById('search-form');
const queryInput = searchForm.querySelector('input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const query = queryInput.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, query);
    window.location.hash = newQuery;
});

export function updateQueryInput(query) {
    queryInput.value = query;
}