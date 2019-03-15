import { makeHeader } from '../src/shared/header-component.js';
const test = QUnit.test;

QUnit.module('header and footer');


test('makes header template', assert => {
    const result = makeHeader();
    const expected = /*html*/
        ` <section>
        <h1>Sy Twomblee's Used Starship Sales</h1>
        <h3>Financing Available, Zero Down</h3>
        </section>`;
    assert.htmlEqual(result, expected);
})