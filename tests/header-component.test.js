import './html-equal.js';
import { makeProfile, makeHeader } from '../src/header-component.js';

const test = QUnit.test;

QUnit.module('header template tests');


test('profile template will match html', assert => {
    //arrange
    const userInfo = {
        displayName: 'Emily Baier',
        photoUrl: '/assets/chuck-avatar.png'
    };

    //act

    const result = makeProfile(userInfo);
    const expected = /*html*/ `
    <div id="profile">
    <img src="/assets/chuck-avatar.png" id="avatar">
    <span>Emily Baier</span>
    <button>sign out</button>
    </div>
    `;
    //assert
    assert.htmlEqual(result, expected);

});

test('header template will match html', assert => {
    //arrange
    const html = /*html*/ `
    <header>
    <div id="static-header">
    <img src="assets/chuck.png" id="chuck-img">
    <h1>Not Very Funny Chuck Norris Jokes</h1>
    </div>
    </header>
    `;
    //act
    const result = makeHeader();
    //assert
    assert.htmlEqual(result, html);
});