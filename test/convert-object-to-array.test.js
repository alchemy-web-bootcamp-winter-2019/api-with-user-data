import convertObjectToArray from '../src/convert-object-to-array.js';

const test = QUnit.test;
QUnit.module('convert object to array');

test('converts an object of objects to an array of objects', assert => {
    const object = {
        abc: { id: 'abc', name: 'object 1' },
        def: { id: 'def', name: 'object 2' },
        ghi: { id: 'ghi', name: 'object 3' }
    };
    const expected = [
        { id: 'abc', name: 'object 1' },
        { id: 'def', name: 'object 2' },
        { id: 'ghi', name: 'object 3' }
    ];
    const array = convertObjectToArray(object);
    assert.deepEqual(array, expected);
});