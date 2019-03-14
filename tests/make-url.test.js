import makeUrl from '../src/make-url.js';
const test = QUnit.test;

QUnit.module('url from api tests');



test('make url with query and page number from api', assert => {
    //arrange
    const queryOptions = {
        query: 'roundhouse',
        page: 3
    };

    const expected = 'https://api.chucknorris.io/jokes/search?query=roundhouse&page=3';
    //act

    const url = makeUrl(queryOptions);
    //assert
    assert.equal(url, expected);
});