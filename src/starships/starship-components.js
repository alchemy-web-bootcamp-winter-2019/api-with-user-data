import { auth, favoritesByUserRef } from '../firebase.js';
export function makeListTemplate(starship) {
    const html = /*html*/
    `<li>
    <h2>Name: ${starship.name}</h2>
    <span class="favorite-symbol">⊛</span>
    <h3>Model: ${starship.model}</h3>
    <h3>Manufacturer: ${starship.manufacturer}</h3>
    <h3>Cost: ${starship.cost_in_credits}</h3>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const starshipListNode = document.getElementById('starship-list');

let selectCallback = null;

export default  function loadStarships(callback) {
    selectCallback = callback;
}

export function updateStarships(starships) {
   while(starshipListNode.firstChild) {
       starshipListNode.firstChild.remove();
   }
   starships.forEach(starship => {
       const dom = makeListTemplate(starship);
       const favoriteSymbol = dom.querySelector('.favorite-symbol');
       favoriteSymbol.addEventListener('click', () => {
           const userId = auth.currentUser.uid;
           const userFavoritesRef = favoritesByUserRef.child(userId);
           const userFavoriteStarshipRef = userFavoritesRef.child(starship.name);
           userFavoriteStarshipRef.set({
             name: starship.name,
             model: starship.model, 
             manufacturer: starship.manufacturer,
             cost_in_credits: starship.cost_in_credits 
           });
       });
    
       starshipListNode.appendChild(dom);

   });
}