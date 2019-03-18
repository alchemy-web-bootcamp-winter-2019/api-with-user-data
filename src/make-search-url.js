
const SEARCH_STARSHIP_URL = 'https://swapi.co/api/starships/';

export function makeSearchUrl(queryOptions) {
    const searchInput = queryOptions.searchInput;
    if(!searchInput) {
        return '';
    }
    const url = new URL(SEARCH_STARSHIP_URL);
    url.searchParams.set('search', searchInput);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}
