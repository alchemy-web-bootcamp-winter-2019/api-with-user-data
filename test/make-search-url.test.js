import { makeSearchUrl } from '../src/make-search-url.js';
const test = QUnit.test;
QUnit.module('make URL');


test('includes search term and page in URL', assert => {
    //arrange
    const queryOptions = {
        searchInput: 'death',
        page: 1
    };

    const expected = 'https://swapi.co/api/starships/?search=death&page=1';
    //act
    const result = makeSearchUrl(queryOptions);

    //assert
    assert.equal(result, expected);
});

test('search returns empty url if no search term', assert => {
      //arrange
    const queryOptions = {
        term: ''
    };

    const expected = '';
    //act
    const result = makeSearchUrl(queryOptions);

    //assert
    assert.equal(result, expected);
});
