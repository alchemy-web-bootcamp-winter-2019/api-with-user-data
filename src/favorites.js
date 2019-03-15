import { auth, favoritesByUserRef } from '../src/firebase.js';
import convertObjectToArray from './convert-object-to-array.js';
import updateStarships from './starships/starship-components.js';

auth.onAuthStateChanged(user => {
    const userId = user.uid;
    const userFavoritesRef = 
    favoritesByUserRef.child(user.uid);

    userFavoritesRef.once('value')
    .then(snapshot => {
        const data = snapshot.val();
        const favoriteStarships = convertObjectToArray(data);
        updateStarships(favoriteStarships);
    });
});