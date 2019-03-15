const config = {
    apiKey: 'AIzaSyCa8hLfYIVwRjhFt4dfOKrGSPhkDKexRiw',
    authDomain: 'usgs-282a6.firebaseapp.com',
    databaseURL: 'https://usgs-282a6.firebaseio.com',
    projectId: 'usgs-282a6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();

export const usersRef = db.ref('users');

export const favoritesByUserRef = db.ref('favorites-by-user');