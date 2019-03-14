import { writeQuery } from './query-component.js';

const searchForm= document.getElementById('search-form');
const searchInput = document.getElementById('starship');

searchForm.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(searchForm);

        const searchInput = formData.get('starship');

        const existingQuery = window.location.hash.slice(1);

        const newQuery = writeQuery(existingQuery, searchInput);

        window.location.hash = newQuery;
    });


export function updateSearchInput(searchTerm) {
    searchInput.value = searchTerm;
}