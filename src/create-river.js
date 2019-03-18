import { auth, favoritesByUserRef } from '../firebase/firebase.js';
import loadFavorites from './create-favorites.js';


export function generateRiverInfo(body, siteId) {
    const variablesOfInterest = [];
    const arrayOfInfo = body.value.timeSeries;
    const filteredBody = arrayOfInfo.filter(array => array.sourceInfo.siteCode[0].value === siteId);
 
    variablesOfInterest.push(filteredBody[0].sourceInfo.siteCode[0].value);
    variablesOfInterest.push(filteredBody[0].sourceInfo.siteName);
  
    filteredBody.forEach(object => {
          
        variablesOfInterest.push(`${object.values[0].value[0].value} ${object.variable.unit.unitCode}`);
    });
    return variablesOfInterest;
}

export function getListOfSiteIds(fetchBody) {
    let siteCodes = [];
    const arrayOfInfo = fetchBody.value.timeSeries;
    arrayOfInfo.forEach(riverObject => {
        siteCodes.push(riverObject.sourceInfo.siteCode[0].value);
    });
    const listOfIds = siteCodes.filter((a, b) => {
        return siteCodes.indexOf(a) === b;
    });
    return listOfIds;
}

export function createRiverLiHtml(river) {
    let innerHtml = '';
    river.forEach(item => {
        innerHtml = innerHtml + `<div>${item}</div>`;
    });
    const html = /*html*/`<li><span class='favorite-star'>☆</span>${innerHtml}</li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}



const riverTableNode = document.getElementById('river-table');

export default function renderRiverLi(riverInfo, listOfSites) {
    while(riverTableNode.children.length >= listOfSites.length) {
        riverTableNode.firstElementChild.remove();
    }

    const dom = createRiverLiHtml(riverInfo);
    const favoriteStar = dom.querySelector('.favorite-star');

    const userId = auth.currentUser.uid;
    const userFavoritesRef = favoritesByUserRef.child(userId);
    const userFavoriteRiverRef = userFavoritesRef.child(riverInfo[0]);
    userFavoriteRiverRef.once('value')
        .then(snapshot => {
            const value = snapshot.val();
            let isFavorite = false;
            if(value) {
                userFavoritesRef.once('value')
                    .then(snapshot =>{
                        const allFavorites = snapshot.val();
                        loadFavorites(allFavorites);
                    });
                addFavorite();
            } else {
                removeFavorite();
            }
            function addFavorite(){
                isFavorite = true;
                favoriteStar.textContent = '★';
                favoriteStar.classList.add('favorite');
            }
            function removeFavorite(){
                isFavorite = false;
                favoriteStar.textContent = '☆';
                favoriteStar.classList.remove('favorite');
            }
            favoriteStar.addEventListener('click', ()=>{
                if(isFavorite) {        
                    userFavoriteRiverRef.remove();
                    removeFavorite();
                    location.reload();
                } else {
                    userFavoriteRiverRef.set({
                        siteId: riverInfo[0],
                        locationName : riverInfo[1]
                    });
                    addFavorite();
                    location.reload();
                }
            });
        });



    riverTableNode.appendChild(dom);//dom may change to modified var


}



