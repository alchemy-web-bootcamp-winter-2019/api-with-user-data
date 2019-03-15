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
    ` <section>
    <h1>${headerText}</h1>
    <h3>${subHeaderText}</h3>
    </section>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader() {
    const dom = makeHeader();
    headerContainer.appendChild(dom);
}