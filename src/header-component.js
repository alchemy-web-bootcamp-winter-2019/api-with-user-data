import { auth } from './firebase.js';

export function makeHeader() {
    const html = /*html*/
    `<header>
        <h1>Not Very Funny Chuck Norris Jokes</h1>
        <img id="chuck-image" src="./assets/chuck.png">
    </header>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(user) {
    const html = /*html*/
    `<div class="profile">
        <img src="${user.photoUrl}" id="avatar">
        <span>${user.displayName}</span>
        <button>Sign Out</button>
    </div>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadHeader(options) {
    const headerContainer = document.getElementById('header-container');
    const dom = makeHeader();
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }

    const header = dom.querySelector('header');
    auth.onAuthStateChanged(user => {
        if(user) {  
            const userDom = makeProfile(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
            });
            header.appendChild(userDom);
        }
        else {
            window.location = '/auth.html';
        }
    });
}