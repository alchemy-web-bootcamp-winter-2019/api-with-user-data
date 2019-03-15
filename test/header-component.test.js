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
function makeUserProfile(user) {
    let link = null;
    let linkText = null;
    if(window.location.pathname === '/favorites.html') {
        link = '/';
        linkText = 'Back to Starship Inventory';
    }
    else {
        link = '/favorites.html';
        linkText = 'My Selected Starships';
    }
    const html = /*html*/`
    <section id="profile">
            <p>Name: ${user.displayName} </p>
            <img src="${user.photoURL}">
            <button>Sign Out</button>
            <a href="favorites.html">link</a>
        </section>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

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
            <a href="favorites.html">link</a>
        </section>`;
    const result = makeUserProfile(user);

    assert.htmlEqual(result, expected);

})