export function writeQuery(existingQuery, searchTerm) {
    if(!searchTerm) {
        return '';
    }
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('search', searchTerm);
    return '?' + searchParams.toString();

}

export function readQuery(query) {
    const searchParams = new URLSearchParams(query);
   const queryOptions = {
       searchInput: searchParams.get('search')
   }

   return queryOptions;
}