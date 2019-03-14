export function writeQuery(existingQuery, searchTerm) {
    if(!searchTerm) {
        return '';
    }

    const searchParams = new URLSearchParams();
    searchParams.set('search', searchTerm);

    return searchParams.toString();

}

export function readQuery(query) {
    const searchParams = new URLSearchParams(query);
    const searchTerm = searchParams.get('search');
   const searchOptions = {
       term: searchTerm || ''
   }

   return searchOptions;
}