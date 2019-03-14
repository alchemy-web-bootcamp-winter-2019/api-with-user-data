export function makeSearchUrl(searchOptions) {
    const searchTerm = encodeURIComponent(searchOptions.searchTerm);
    if(!searchTerm) {
        return '';
    }
    const url = `https://swapi.co/api/starships/?search=${searchTerm}`;
    return url;
}
