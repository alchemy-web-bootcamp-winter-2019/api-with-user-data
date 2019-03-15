import { auth } from '../firebase.js';

export function makeHeader() {
    let headerText = null;
    let subHeaderText = null;
    if(window.location.pathname === '/favorites.html') {
        headerText = 'Your Favorite Starships are in Stock!';
        subHeaderText = 'Act now before these deals are gone!!!';
    }
    else {
        headerText = 'Sy Twomblee\'s Used Starship Sales';
        subHeaderText = 'Financing Available, Zero Down';
    }
    const html = /*html*/
    ` <header>
    <h1>${headerText}</h1>
    <h3>${subHeaderText}</h3>
    </header>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeUserProfile(user) {
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
    const profilePic = user.photoURL || '../assets/profile-pic.png';
    const html = /*html*/`
    <section id="profile">
            <p>Name: ${user.displayName} </p>
            <img src="${profilePic}">
            <button>Sign Out</button>
            <a href="${link}">${linkText}</a>
        </section>`;
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
            const userDom = makeUserProfile(user);
          
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