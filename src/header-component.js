import { auth } from './firebase.js';

let headerText = null;

if(window.location.pathname === '/favorites.html') {
    headerText = 'My Favorite Chuck Norris Jokes';
}
else {
    headerText = 'Not Very Funny Chuck Norris Jokes';
}

export function makeHeader() {
    const html = /*html*/ `
    <header>
    <div id="static-header">
    <img src="assets/chuck.png" id="chuck-img">
    <h1>${headerText}</h1>
    </div>
    </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

let link = null;
let linkText = null;

if(window.location.pathname === '/favorites.html') {
    link = '/';
    linkText = 'Search';
}
else {
    link = '/favorites.html';
    linkText = 'My Favorite Jokes';
}

export function makeProfile(userInfo) {
    const avatar = userInfo.photoURL || '/assets/chuck-avatar.png';
    const html = /*html*/ `
    <div id="profile">
    <img src="${avatar}" id="avatar">
        <div id="user-info">
        <span>${userInfo.displayName}</span>
        <button>sign out</button>
       <p><a href="${link}">${linkText}</a></p>
        </div>
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