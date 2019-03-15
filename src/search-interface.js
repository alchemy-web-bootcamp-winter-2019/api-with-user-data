import { writeParameterCdToQuery, addRemoveSiteFromQuery } from './url-functions.js';

const heightNode = document.getElementById('checkbox-height');
const tempNode = document.getElementById('checkbox-temp');
const siteInputNode = document.getElementById('site-id');
const submitSiteIdNode = document.getElementById('submit-site-id');
let currenQuery;


function updateQuery(){
    currenQuery = window.location.hash.slice(1);
}


let waterParams = ['00060'];
let filteredWaterParams;


function filterWaterParams(){
    filteredWaterParams = waterParams.filter(param => param.length > 1);
}



submitSiteIdNode.addEventListener('click', event => {
    event.preventDefault();
    updateQuery();
    const siteId = siteInputNode.value;
    const newQuery = addRemoveSiteFromQuery('add', siteId, currenQuery);
    window.location.hash = newQuery;
});




heightNode.addEventListener('change', () => {
    updateQuery();
    heightNode.checked ? waterParams[1] = '00065' : waterParams[1] = '';
    filterWaterParams();
    const params = { parameterCd : filteredWaterParams.toString() };
    const newQuery = writeParameterCdToQuery(params, currenQuery);
    window.location.hash = newQuery;
});     

tempNode.addEventListener('change', () => {
    updateQuery();
    tempNode.checked ? waterParams[2] = '00010' : waterParams[2] = '';
    filterWaterParams();
    const params = { parameterCd : filteredWaterParams.toString() };
    const newQuery = writeParameterCdToQuery(params, currenQuery);
    window.location.hash = newQuery;
});



