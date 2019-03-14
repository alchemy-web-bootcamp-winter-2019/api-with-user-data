import makeUrl from '../src/make-url.js';

const test = QUnit.test;
QUnit.module('make search url');

test('make url with query and page number', assert => {
    const queryOptions = {
        query: 'roundhouse',
        page: 3
    };

    const result = makeUrl(queryOptions);
    const expected = 'https://api.chucknorris.io/jokes/search?query=roundhouse&page=3';

    assert.equal(result, expected);
});