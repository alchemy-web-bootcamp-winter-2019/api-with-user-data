import { starships } from '../data.js';
import loadStarships from './starships/starship-components.js';

const starshipListNode = document.getElementById('starship-list');

loadStarships(starships);