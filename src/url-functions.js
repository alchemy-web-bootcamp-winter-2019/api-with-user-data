export function writeToQuery(params, currentQuery) {
    const query = new URLSearchParams(currentQuery);
    query.set('format', 'json');
    query.set('sites', params.siteId);
    query.set('siteType', 'ST');
    query.set('siteStatus', 'all');
    query.set('parameterCd', params.parameterCd ? params.parameterCd : '00060');
    return query.toString();
}

export function createURL(params) {
    const URL_BASE = 'https://waterservices.usgs.gov/nwis/iv/?';
    const ApiURL = new URL(URL_BASE);
    ApiURL.searchParams.set('format', 'json');
    ApiURL.searchParams.set('sites', params.sites);
    ApiURL.searchParams.set('parameterCd', params.parameterCd);
    ApiURL.searchParams.set('siteType', 'ST');
    ApiURL.searchParams.set('siteStatus', 'all');
    return ApiURL.toString();
}


export function universalURLSearchParams(variablesOfInterest, query){
    const results = {};
    const paramGetter = new URLSearchParams(query);
    variablesOfInterest.forEach(variable => {
        const value = paramGetter.get(variable);
    
        results[variable] = value;
    });
    return results;  
}

export function writeParameterCdToQuery(params, currentQuery) {
    const query = new URLSearchParams(currentQuery);
    query.set('parameterCd', params.parameterCd ? params.parameterCd : '00060');
    return query.toString();
}

export function sliceSitesFromString(sites) {
    const numberOfSites = Math.ceil(sites.length / 9);
    let startIndex = [];
    let endIndex = [];

    let slicedSites = [];
    for (let i = 0; i < numberOfSites; i++) {
        startIndex = (i * 9);
        endIndex = ((i * 9) + 8);
        slicedSites.push(sites.slice(startIndex, endIndex));
    }
    return slicedSites;
}

export function addRemoveSiteFromQuery(option, siteId, query) {
 
    const currentUrlParams = universalURLSearchParams(['sites', 'parameterCd'], query);
    let listOfSites = [];
    if (option === 'add') {

        if (currentUrlParams.sites) {
            listOfSites.push(currentUrlParams.sites);
        }
        listOfSites.push(siteId);
        const newParams = {
            parameterCd: currentUrlParams.parameterCd,
            siteId: listOfSites ? listOfSites : null
        };
        const newQuery = writeToQuery(newParams, query);

        return newQuery;
    }
    else if (option === 'subtract') {
        const currentSites = currentUrlParams.siteId;
        const includes = currentSites.includes(siteId);
        if (includes) {
            const slicedSites = sliceSitesFromString(currentSites);
            const newSites = slicedSites.filter(site => site !== siteId.toString());
            const newParams = {
                parameterCd: currentUrlParams.parameterCd,
                siteId: newSites.toString()
            };
            const newQuery = writeToQuery(newParams, query);
            return newQuery;
        }
        else {
            return;
        }
    }
}