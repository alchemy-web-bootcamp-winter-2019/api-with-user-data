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

        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteJokesRef = userFavoritesRef.child(joke.id);
        userFavoriteJokesRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                let isFavorite = false;
                if(value) {
                    addFavorite();
                }
                else {
                    removeFavorite();
                }

                function addFavorite() {
                    isFavorite = true;
                    favoriteHeart.classList.add('favorite');
                }

                function removeFavorite() {
                    isFavorite = false;
                    favoriteHeart.classList.remove('favorite');
                }

                favoriteHeart.addEventListener('click', () => {
                    if(isFavorite) {
                        userFavoriteJokesRef.remove();
                        removeFavorite();
                    }
                    else {
                        userFavoriteJokesRef.set({
                            id: joke.id,
                            value: joke.value
                        });
                        addFavorite();
                    }
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