import { writeSearchToQuery } from '../src/query-component.js';
import { writePageToQuery } from '../src/query-component.js';
import { readFromQuery } from '../src/query-component.js';

const test = QUnit.test;
QUnit.module('update url with search and page number');

test('write search to empty query', assert => {
    const existingQuery = '';
    const userQuery = 'roundhouse';

    const result = writeSearchToQuery(existingQuery, userQuery);
    const expected = 'query=roundhouse&page=1';

    assert.equal(result, expected);
});

test('write page to existing query', assert => {
    const existingQuery = 'query=roundhouse&page=2';
    const page = 3;

    const result = writePageToQuery(existingQuery, page);
    const expected = 'query=roundhouse&page=3';

    assert.equal(result, expected);
});

test('read query from url', assert => {
    const query = 'query=roundhouse&page=3';

    const result = readFromQuery(query);
    const expected = {
        query: 'roundhouse',
        page: 3
    };
    
    assert.deepEqual(result, expected);
});