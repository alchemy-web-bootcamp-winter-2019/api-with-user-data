import { writeQuery, readQuery } from '../src/starships/query-component.js';
const test = QUnit.test;
QUnit.module('read and write query options');


test('write search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'death';
    //act
    const expected = 'search=death';
    const result = writeQuery(existingQuery, searchTerm);
    //assert
    assert.equal(result, expected);
});

// test('write search to existing query', assert => {

// })

test('reads query options', assert => {
    //arrange
    const query = 'search=death';
    //act
    const result = readQuery(query);
    const expected = {
        term: 'death'
    }
    //assert
    assert.deepEqual(result, expected);
})


