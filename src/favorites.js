import loadHeader from './header-component.js';
import { auth, favoritesByUserRef } from './firebase.js';
import convertObjectToArray from './convert-object-to-array.js';
import loadJokes from './jokes-component.js';

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