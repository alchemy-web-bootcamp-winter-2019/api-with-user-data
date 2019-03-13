export function writeQuery(searchOptions) {
    if(!searchOptions.term) {
        return '';
    }

    const searchParams = new URLSearchParams();
    searchParams.set('searchTerm', searchOptions.term);

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