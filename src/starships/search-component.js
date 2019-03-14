const searchForm= document.getElementById('search-form');

export default function loadSearch(callback) {
    searchForm.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(searchForm);

        const searchTerm = formData.get('starship');
        console.log(searchTerm);
        if(searchTerm.trim() === '') {
            return;
        }

        const searchOptions = {
            term: searchTerm
        }

        callback(searchOptions);
    });
}