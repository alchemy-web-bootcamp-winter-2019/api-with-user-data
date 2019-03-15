import { makeHeader, makeProfile } from '../src/header-component.js';

const test = QUnit.test;

QUnit.module('make header');

test('make header', assert => {
    const result = makeHeader();
    const expected = /*html*/
    `<header>
        <div id="static-header">
            <h1>Not Very Funny Chuck Norris Jokes</h1>
            <img id="chuck-image" src="./assets/chuck.png">
        </div>
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
    `<div id="profile">
        <img src="http://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg" id="avatar">
        <span>Leslie Shea</span>
        <button>Sign Out</button>
        <p><a href="/favorites.html">My Favorite Jokes</a></p>
    </div>`;

    assert.htmlEqual(result, expected);
});