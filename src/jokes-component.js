export function makeJokesTemplate(joke) {
    const html = /*html*/
    `<li>
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
        jokesList.appendChild(dom);
    });
}

function clearJokesList() {
    while(jokesList.firstChild) {
        jokesList.firstChild.remove();
    }
}