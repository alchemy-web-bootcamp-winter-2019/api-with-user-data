import { sliceSitesFromString, addRemoveSiteFromQuery } from '../src/url-functions.js';

const test = QUnit.test;

QUnit.module('ADD-REMOVE-SITE.TEST.JS');


test('add site to query', assert => {
    //arrange
    const query = 'format=json&sites=14092500%2C14301000%2C14302480&parameterCd=00060%2C00065%2C00010&siteType=ST&siteStatus=all';
    const newSite = 66666666;
    const expected = 'format=json&sites=14092500%2C14301000%2C14302480%2C66666666&parameterCd=00060%2C00065%2C00010&siteType=ST&siteStatus=all';
    //act
    const newQuery = addRemoveSiteFromQuery('add', newSite, query);
    //assert
    assert.deepEqual(newQuery, expected);

});

test('subtract site to query', assert => {
    //arrange
    const query = 'format=json&sites=14092500%2C14301000%2C14302480&parameterCd=00060%2C00065%2C00010&siteType=ST&siteStatus=all';
    const newSite = 14092500;
    const expected = 'format=json&sites=14301000%2C14302480&parameterCd=00060%2C00065%2C00010&siteType=ST&siteStatus=all';
    //act
    const newQuery = addRemoveSiteFromQuery('subtract', newSite, query);
    //assert
    assert.deepEqual(newQuery, expected);
});

test('slice sites', assert => {

    //arrange
    const sites = '14092500,14301000,14302480';
    const expected =
        [
            '14092500',
            '14301000',
            '14302480'
        ];
    //act
    const actual = sliceSitesFromString(sites);

    //assert
    assert.deepEqual(actual, expected);

});