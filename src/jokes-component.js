export default function makeJokesTemplate(joke) {
    const html = /*html*/ `
    <li>
    <span class="favorite-heart">♥</span>
    <p id="${joke.id}">${joke.value}</p>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
