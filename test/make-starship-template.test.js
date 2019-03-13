const test = QUnit.test;
QUnit.module('make starship list')
import { starship } from '../data.js';

function makeListTemplate(starship) {
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

test('make starship template', assert => {
    //arrange
    const expected = /*html*/
    `<li>
    <h2>Name: CR90 corvette</h2>
    <h3>Model: CR90 corvette</h3>
    <h3>Manufacturer: Corellian Engineering Corporation</h3>
    <h3>Cost: 3500000</h3>
    </li>`;

    //act
    const result = makeListTemplate(starship);

    //assert
    assert.htmlEqual(result, expected)

})