export function makeListTemplate(starship) {
    const html = /*html*/
    `<li>
    <h2>Name: ${starship.name}</h2>
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
       starshipListNode.appendChild(dom);

   });
}