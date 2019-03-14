import { makeHeader, makeProfile } from '../src/header-component.js';

const test = QUnit.test;

QUnit.module('make header');

test('make header', assert => {
    const result = makeHeader();
    const expected = /*html*/
    `<header>
        <h1>Not Very Funny Chuck Norris Jokes</h1>
        <img id="chuck-image" src="./assets/chuck.png">
    </header>`;
    
    assert.htmlEqual(result, expected);
});

test('make user profile', assert => {
    const user = {
        displayName: 'Leslie Shea',
        photoUrl: 'http://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg'
    };

    const result = makeProfile(user);
    const expected = /*html*/
    `<div class="profile">
        <img src="http://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg" id="avatar">
        <span>Leslie Shea</span>
        <button>Sign Out</button>
    </div>`;

    assert.htmlEqual(result, expected);
});