const SEARCH_JOKES_URL = 'https://api.chucknorris.io/jokes/search';

export default function makeUrl(queryOptions) {
    const query = queryOptions.query;
    if(!query) {
        return '';
    }
    const url = new URL(SEARCH_JOKES_URL);
    url.searchParams.set('query', query);
    return url.toString();
}