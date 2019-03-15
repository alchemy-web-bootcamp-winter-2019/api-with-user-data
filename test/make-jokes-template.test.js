import './html-equal.js';
import { makeJokesTemplate } from '../src/jokes-component.js';

const test = QUnit.test;

QUnit.module('template literal html tests');


test('template matches literal html', assert => {
    //arrange
    const joke = {
        id: 'atfmenvtsaatnvplw_lpla',
        value: 'For undercover police work, Chuck Norris pins his badge underneath his shirt, directly into his chest.'   
    };
    //act
    const result = makeJokesTemplate(joke);
    const expected = /*html*/ `
    <li class="joke-card">
    <span class="favorite-heart">♥</span>
    <p id="atfmenvtsaatnvplw_lpla">For undercover police work, Chuck Norris pins his badge underneath his shirt, directly into his chest.</p>
    </li>
    `;
    //assert
    assert.htmlEqual(result, expected);
}
);