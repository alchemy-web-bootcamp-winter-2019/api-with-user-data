export function writeQuery(existingQuery, searchTerm) {
    if(!searchTerm) {
        return '';
    }

    const searchParams = new URLSearchParams();
    searchParams.set('searchTerm', searchTerm);

    return '?' + searchParams.toString();

}

export function readQuery(query) {
    const searchParams = new URLSearchParams(query);
    const searchTerm = searchParams.get('searchTerm');
   const searchOptions = {
       term: searchTerm || ''
   }

   return searchOptions;
}