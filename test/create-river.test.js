
import { generateRiverInfo, getListOfSiteIds, createRiverLiHtml } from '../src/create-river.js';
import { fetchBody } from '../data/river.js'; //examplex of data from API

const test = QUnit.test;


QUnit.module('CREATE-RIVER.TEST.JS');
test('create a template for river', assert => {

    //arrange
    const riverInfo = ['DESCHUTES RIVER NEAR MADRAS, OR', '6.8 deg C', '4380 ft3/s', '2.94 ft'];
    const expected =
        /*html*/ `
        <li><span class="favorite-star">☆</span><div>DESCHUTES RIVER NEAR MADRAS, OR</div><div>6.8 deg C</div><div>4380 ft3/s</div><div>2.94 ft</div></li>
    `;
    //act
    const actual = createRiverLiHtml(riverInfo);
    
    //assert
    assert.htmlEqual(actual, expected);
});

test('GET LIST OF SITE IDS IN FETCH ', assert => {
    //arrange
    const expected = ['14092500', '14301000'];
    //act
    const actual = getListOfSiteIds(fetchBody);
    //assert
    assert.deepEqual(actual, expected);
});

test('using site id get all variables of interest', assert =>{
    //arrange
    const siteId = '14092500';
    const expected = ['14092500', 'DESCHUTES RIVER NEAR MADRAS, OR', '6.3 deg C', '4430 ft3/s', '2.96 ft'];
    //act
    const actual = generateRiverInfo(fetchBody, siteId);
    //assert
    assert.deepEqual(actual, expected);
});

