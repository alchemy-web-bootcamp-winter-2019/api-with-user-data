import { writeSearchToQuery, writePageToQuery, readQuery } from '../src/starships/query-component.js';
const test = QUnit.test;
QUnit.module('read and write query options');


test('write search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'death';
    //act
    const expected = '?search=death&page=1';
    const result = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(result, expected);
});

test('write search to existing query, update search URL and reset page', assert => {
    //arrange
    const existingQuery = '?search=star&page=3';
    const searchTerm = 'rebel';
    const expected = '?search=rebel&page=1';
    //act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(result, expected);
});

test('add page to existing query', assert => {
    const existingQuery = '?search=tie&page=1';
    const page = 2;
    const result = writePageToQuery(existingQuery, page);
    const expected = '?search=tie&page=2';
    assert.equal(result, expected);
});

test('reads query options', assert => {
    //arrange
    const query = '?search=death&page=3';
    //act
    const result = readQuery(query);
    const expected = {
        searchInput: 'death',
        page: 3
    };
    //assert
    assert.deepEqual(result, expected);
});


