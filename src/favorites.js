import loadHeader from '../src/header-component.js';
import { auth, favoritesByUserRef } from '../src/firebase.js';
import convertObjectToArray from '../src/convert-object-to-array.js';
import loadJokes from '../src/jokes-component.js';

loadHeader();

auth.onAuthStateChanged(user => {
    const userId = user.uid;
    const userFavoritesRef = favoritesByUserRef.child(userId);

    userFavoritesRef.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            const favoriteJokes = convertObjectToArray(data);
            loadJokes(favoriteJokes);
        });
});