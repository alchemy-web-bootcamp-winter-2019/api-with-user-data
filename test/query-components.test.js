import { writeQuery, readQuery } from '../src/starships/query-component.js';
const test = QUnit.test;
QUnit.module('read and write query options');


test('write query options', assert => {
    //arrange
    const searchOptions = {
        term: 'death'
    };
    //act
    const expected = '?searchTerm=death';
    const result = writeQuery(searchOptions);
    //assert
    assert.equal(result, expected);
});

test('reads query options', assert => {
    //arrange
    const query = '?searchTerm=death';
    //act
    const result = readQuery(query);
    const expected = {
        term: 'death'
    }
    //assert
    assert.deepEqual(result, expected);
})


