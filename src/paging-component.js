// import { writePageToQuery } from './query-component.js';

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

const PER_PAGE = 12;

export default function loadPaging(totalCount, callback) {
    const totalPageCount = Math.ceil(totalCount / PER_PAGE);
    totalPages.textContent = totalPageCount;
    
    let currentPageNumber = 1;
    updatePaging();

    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        updatePaging();
        // updatePageInUrl();
    });

    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        updatePaging();
        // updatePageInUrl();
    });

    function updatePaging() {
        currentPage.textContent = currentPageNumber;
        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };

        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;
        callback(pagingOptions);
    }

}

// function updatePageInUrl() {
//     const existingQuery = window.location.hash.slice(1);
//     const newQuery = writePageToQuery(existingQuery, currentPageNumber);
//     window.location.hash = newQuery;
// }

export function pageArray(array, pagingOptions) {
    const page = pagingOptions.page;
    const perPage = pagingOptions.perPage;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return array.slice(startIndex, endIndex);
}