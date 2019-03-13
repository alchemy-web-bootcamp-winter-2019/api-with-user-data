export function makeSearchUrl(searchOptions) {
    const query = encodeURIComponent(searchOptions.term);
    const url = `https://swapi.co/api/starships/?search=${query}`;
    return url;
}
