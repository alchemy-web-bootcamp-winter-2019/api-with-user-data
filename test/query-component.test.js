import { writeSearchToQuery, writePageToQuery, readFromQuery } from '../src/query-component.js';
const test = QUnit.test;

QUnit.module('query component tests');

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

test('read query from url', assert => {
    //arrange
    const query = 'query=roundhouse&page=3';
    const expected = {
        query: 'roundhouse',
        page: 3
    };
    //act
    const queryOptions = readFromQuery(query);
    //assert
    assert.deepEqual(queryOptions, expected);

});
