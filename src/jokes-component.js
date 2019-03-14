import { auth, favoritesByUserRef } from './firebase.js';

export function makeJokesTemplate(joke) {
    const html = /*html*/
    `<li class="joke-card">
        <span class="favorite-heart">♥</span>
        <p id="${joke.id}">${joke.value}</p>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const jokesList = document.getElementById('jokes-list');

export default function loadJokes(jokes) {
    clearJokesList();
    
    jokes.forEach(joke => {
        const dom = makeJokesTemplate(joke);
        const favoriteHeart = dom.querySelector('.favorite-heart');
        favoriteHeart.addEventListener('click', () => {
            const userId = auth.currentUser.iud;
            const userFavoritesRef = favoritesByUserRef.child(userId);
            const userFavoriteJokesRef = userFavoritesRef.child(joke.id);
            userFavoriteJokesRef.set({
                id: joke.id,
                value: joke.value
            });
        });
        jokesList.appendChild(dom);
    });
}

function clearJokesList() {
    while(jokesList.firstChild) {
        jokesList.firstChild.remove();
    }
}