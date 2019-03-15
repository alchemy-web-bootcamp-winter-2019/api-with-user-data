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
    <span>DESCHUTES RIVER NEAR MADRAS, OR</span>
    <button>GET LIVE DATA</button>
    <button>REMOVE FROM FAVORITES</button>
 </li>`;
    //act
    const actual = createFavoriteLi(firebaseObject);
    //assert
    assert.htmlEqual(actual, expected);

});