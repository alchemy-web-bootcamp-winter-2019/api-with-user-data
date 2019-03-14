const test = QUnit.test;

QUnit.module('query component tests');

function writeSearchToQuery(existingQuery, userQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('query', userQuery);
    searchParams.set('page', 1);
    return searchParams.toString();
}

function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

test('write search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const userQuery = 'roundhouse';

    //act
    const expected = 'query=roundhouse&page=1';

    const query = writeSearchToQuery(existingQuery, userQuery);
    
    //assert

    assert.equal(query, expected);
});

test('write page to existing query', assert => {
    //arrange
    const existingQuery = 'query=roundhouse&page=2';
    const page = 3;

    //act
    const expected = 'query=roundhouse&page=3';

    const query = writePageToQuery(existingQuery, page);
    
    //assert

    assert.equal(query, expected);
});
