const config = {
    apiKey: 'AIzaSyCklL2pU3fZ1ln6t9TMvKPm2hIfQKoAMek',
    authDomain: 'chuck-norris-jokes-8b27e.firebaseapp.com',
    databaseURL: 'https://chuck-norris-jokes-8b27e.firebaseio.com',
    projectId: 'chuck-norris-jokes-8b27e'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
const db = firebase.database();
export const usersRef = db.ref('users');
export const favoritesByUserRef = db.ref('favorites-by-user');