import { makeHeader, makeUserProfile } from '../src/shared/header-component.js';
const test = QUnit.test;

QUnit.module('header and footer');


test('makes header template', assert => {
    const result = makeHeader();
    const expected = /*html*/
        ` <header>
        <h1>Sy Twomblee's Used Starship Sales</h1>
        <h3>Financing Available, Zero Down</h3>
        </header>`;
    assert.htmlEqual(result, expected);
})

test('make user profile', assert => {
    const user = {
        displayName: 'Bob Smith',
        photoURL: 'http://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg'
    };
    const expected = /*html*/`
    <section id="profile">
            <p>Name: Bob Smith </p>
            <img src="http://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg">
            <button>Sign Out</button>
            <a href="/favorites.html">My Selected Starships</a>
        </section>`;
    const result = makeUserProfile(user);

    assert.htmlEqual(result, expected);

})