import { makeJokesTemplate } from '../src/jokes-component.js';

const test = QUnit.test;
QUnit.module('making template for list of jokes');

test('make jokes list template', assert => {
    const joke = {
        id: 'atfmenvtsaatnvplw_lpla',
        value: 'For undercover police work, Chuck Norris pins his badge underneath his shirt, directly into his chest.'
    };

    const result = makeJokesTemplate(joke);
    const expected = /*html*/
    `<li class="joke-card">
        <span class="favorite-heart">♥</span>
        <p id="atfmenvtsaatnvplw_lpla">For undercover police work, Chuck Norris pins his badge underneath his shirt, directly into his chest.</p>
    </li>`;

    assert.htmlEqual(result, expected);
});