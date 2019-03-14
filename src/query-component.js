export function writeSearchToQuery(existingQuery, userQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('query', userQuery);
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const queryOptions = {
        query: searchParams.get('query'),
        page: parseInt(searchParams.get('page')) || 1
    };
    console.log(queryOptions);
    return queryOptions;
}