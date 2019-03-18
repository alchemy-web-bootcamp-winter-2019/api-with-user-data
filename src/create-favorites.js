import { addRemoveSiteFromQuery } from './url-functions.js';


export function createFavoriteLi(firebaseObject){
    const html = /*html*/`
    <li>
        <button class="live-data-btn">GET LIVE DATA</button>
        <span>${firebaseObject.locationName}</span>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadFavorites(firebaseFavorites)
{
    const favoritesNode = document.getElementById('favorites-ul');


    while(favoritesNode.children.length > 0){

        favoritesNode.firstChild.remove();
    }

    const favorites = Object.values(firebaseFavorites);
    favorites.forEach(favorite =>{
 
        const dom = createFavoriteLi(favorite);
        const buttonNode = dom.querySelector('.live-data-btn');
        buttonNode.addEventListener('click', ()=>{
            const currentQuery = window.location.hash.slice(1);
            const newQuery = addRemoveSiteFromQuery('add', favorite.siteId, currentQuery);   
            window.location.hash = newQuery;
        });
        favoritesNode.appendChild(dom);
    });
}