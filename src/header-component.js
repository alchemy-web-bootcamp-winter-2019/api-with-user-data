import { auth } from './firebase.js';

export function makeHeader() {
    const html = /*html*/ `
    <header>
    <div id="static-header">
    <img src="assets/chuck.png" id="chuck-img">
    <h1>Not Very Funny Chuck Norris Jokes</h1>
    </div>
    </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(userInfo) {
    const avatar = userInfo.photoURL || '../assets/banana-icon.jpg';
    const html = /*html*/ `
    <div id="profile">
    <img src="${avatar}" id="avatar">
    <span>${userInfo.displayName}</span>
    <button>sign out</button>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader(options) {
    
    const dom = makeHeader();
    const header = dom.querySelector('header');
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }

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