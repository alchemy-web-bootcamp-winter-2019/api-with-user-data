export function writeSearchToQuery(existingQuery, searchTerm) {
    if(!searchTerm) {
        return '';
    }
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('search', searchTerm);
    searchParams.set('page', 1)
    return '?' + searchParams.toString();

}

export function writePageToQuery(existingQuery, page){
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return '?' + searchParams.toString();
}

export function readQuery(query) {
    const searchParams = new URLSearchParams(query);
    const pageString = searchParams.get('page');
    let page = 1;
    if(pageString) {
        page = parseInt(pageString);
    }
    const queryOptions = {
       searchInput: searchParams.get('search'),
       page: page
    }

   return queryOptions;
}