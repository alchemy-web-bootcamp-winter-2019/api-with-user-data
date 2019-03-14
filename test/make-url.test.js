const test = QUnit.test;
QUnit.module('make search url');

const SEARCH_JOKES_URL = 'https://api.chucknorris.io/jokes/search';

function makeUrl(queryOptions) {
    const query = queryOptions.query;
    const page = queryOptions.page;

    if(!query) {
        return '';
    }

    const url = new URL(SEARCH_JOKES_URL);
    url.searchParams.set('query', query);
    url.searchParams.set('page', page);
    
    return url.toString();
}

test('make url with query and page number', assert => {
    const queryOptions = {
        query: 'roundhouse',
        page: 3
    };

    const result = makeUrl(queryOptions);
    const expected = 'https://api.chucknorris.io/jokes/search?query=roundhouse&page=3';

    assert.equal(result, expected);
});