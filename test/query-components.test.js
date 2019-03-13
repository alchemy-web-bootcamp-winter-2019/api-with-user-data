const test = QUnit.test;
QUnit.module('read and write query options');

function writeQuery(searchOptions) {
    if(!searchOptions.term) {
        return '';
    }

    const searchParams = new URLSearchParams();
    searchParams.set('searchTerm', searchOptions.term);

    return '?' + searchParams.toString();

}

test('read and write query options', assert => {
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


