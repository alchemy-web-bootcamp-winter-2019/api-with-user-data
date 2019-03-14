const test = QUnit.test;
QUnit.module('update url with search and page number');

function writeSearchToQuery(existingQuery, userQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('query', userQuery);
    searchParams.set('page', 1);

    return searchParams.toString();
}

test('write search to empty query', assert => {
    const existingQuery = '';
    const userQuery = 'roundhouse';

    const result = writeSearchToQuery(existingQuery, userQuery);
    const expected = 'query=roundhouse&page=1';

    assert.equal(result, expected);
});

function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);

    return searchParams.toString();
}

test('write page to existing query', assert => {
    const existingQuery = 'query=roundhouse&page=2';
    const page = 3;

    const result = writePageToQuery(existingQuery, page);
    const expected = 'query=roundhouse&page=3';

    assert.equal(result, expected);
});

function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);

    const queryOptions = {
        query: searchParams.get('query'),
        page: parseInt(searchParams.get('page')) || 1
    };
    return queryOptions;
}

test('read query from url', assert => {
    const query = 'query=roundhouse&page=3';

    const result = readFromQuery(query);
    const expected = {
        query: 'roundhouse',
        page: 3
    };
    
    assert.deepEqual(result, expected);
});