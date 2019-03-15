const test = QUnit.test;
import { createFavoriteLi } from '../src/create-favorites.js';

QUnit.module('CREATE-FAVORITES.TEST.JS');

test('create li for fav. river', assert => {


    //arrange
    const firebaseObject = {
        locationName: 'DESCHUTES RIVER NEAR MADRAS, OR',
        siteId: '14092500'
    };
    const expected = /*html*/`
<li>
    <button class="live-data-btn">GET LIVE DATA</button>
    <span>DESCHUTES RIVER NEAR MADRAS, OR</span>
 </li>`;
    //act
    const actual = createFavoriteLi(firebaseObject);
    //assert
    assert.htmlEqual(actual, expected);

});