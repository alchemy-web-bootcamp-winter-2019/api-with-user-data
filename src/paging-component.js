import { writePageToQuery } from './query-component.js';

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPageDisplay = document.getElementById('page-number');
const totalPageDisplay = document.getElementById('total-pages');

let PER_PAGE = 12;

const existingQuery = window.location.hash.slice(1);
//const searchParams = new URLSearchParams(existingQuery);
let currentPage = 1;
previousButton.disabled = currentPage === 1;


export default function loadPaging(page, totalJokeCount) {
    const currentPage = page;
    const totalPages = Math.ceil(totalJokeCount / PER_PAGE);
    currentPageDisplay.textContent = currentPage;
    totalPageDisplay.textContent = totalPages;
}


previousButton.addEventListener('click', () => {
    const totalPages = totalPageDisplay.textContent;
    const existingQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(existingQuery);
    let currentPage = searchParams.get('page');
    currentPage--;
    previousButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    const newQuery = writePageToQuery(existingQuery, currentPage);
    window.location.hash = newQuery; 
});

nextButton.addEventListener('click', () => {
    const totalPages = totalPageDisplay.textContent;
    const existingQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(existingQuery);
    let currentPage = searchParams.get('page');
    currentPage++;
    previousButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    const newQuery = writePageToQuery(existingQuery, currentPage);
    window.location.hash = newQuery; 
});


//go through line by line to double check the logic on this.
//Console log that our numbers are correct at every line.

export function pageArray(array) {
    const searchParams = new URLSearchParams(existingQuery);
    let page = searchParams.get('page');
    const perPage = PER_PAGE;

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    //console.log(page, startIndex);


    return array.slice(startIndex, endIndex);
}


