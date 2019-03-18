import { auth } from './firebase.js';

export function makeHeader() {
    let headerText = null;

    if(window.location.pathname === '/favorites.html') {
        headerText = 'My Favorite Jokes';
    }
    else {
        headerText = 'Not Very Funny Chuck Norris Jokes';
    }

    const html = /*html*/
    `<header>
        <div id="static-header">
            <img id="chuck-image" src="./assets/chuck.png">
            <h1>${headerText}</h1>
        </div>
    </header>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(user) {
    let link = null;
    let linkText = null;

    if(window.location.pathname === '/favorites.html') {
        link = '/';
        linkText = 'Back to Search';
    }
    else {
        link = '/favorites.html';
        linkText = 'My Favorite Jokes';
    }
    const avatar = user.photoURL || '../assets/chuck-profile.png';

    const html = /*html*/
    `<div id="profile">
        <img src="${avatar}" id="avatar">
        <span id="display-name">${user.displayName}</span>
        <button>Sign Out</button>
        <p><a href="${link}">${linkText}</a></p>
    </div>`;

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