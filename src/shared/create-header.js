

import { auth } from '../../firebase/firebase.js';

export function createAuthHeaderComponent(user) {
    const template = document.createElement('template');
    const html = `
    <div class="profile">
        <span>Welcome ${user.displayName}</span>
        <button>Sign Out</button>
    </div>
    `;
    template.innerHTML = html;
    return template.content;
}

export function createNoUserHeader(src) {
    const template = document.createElement('template');
    const html = /*html*/`
    <header>
        <img src=${src}>
        <h1>My River Info</h1>
    </header>
    `;
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');
export default function createHeader(options) {
    const src = 'data:image/png;base64,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';
    const dom = createNoUserHeader(src);
    const header = dom.querySelector('header');
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }

    auth.onAuthStateChanged(user => {
        if(user){
            const userDom = createAuthHeaderComponent(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', ()=> {
                auth.signOut();
                window.location.hash = '';
            });
            header.appendChild(userDom);      
        }
        else {
            window.location = './auth.html' + window.location.hash;
        }
    });

}
