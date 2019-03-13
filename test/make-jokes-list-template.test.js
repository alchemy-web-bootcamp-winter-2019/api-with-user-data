import { makeJokesTemplate } from '../src/jokes-component.js';

const test = QUnit.test;
QUnit.module('making template for list of jokes');

test('make jokes list template', assert => {
    // arrange
    const joke = {
        result: [
            {
                id: 'atfmenvtsaatnvplw_lpla',
                value: 'For undercover police work, Chuck Norris pins his badge underneath his shirt, directly into his chest.'
            }
        ]
    };

    // act
    const result = makeJokesTemplate(joke);
    const expected = /*html*/
    `<li>
        <span class="favorite-heart">♥</span>
        <p id="atfmenvtsaatnvplw_lpla">For undercover police work, Chuck Norris pins his badge underneath his shirt, directly into his chest.</p>
    </li>`;

    // assert
    assert.htmlEqual(result, expected);
});