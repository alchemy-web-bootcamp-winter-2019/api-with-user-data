
// Initialize Firebase
const config = {
    apiKey: 'AIzaSyDYyYcevvqgN_TCGkIHmB66z1kBTkI-Sq8',
    authDomain: 'chuck-norris-jokes-a4650.firebaseapp.com',
    databaseURL: 'https://chuck-norris-jokes-a4650.firebaseio.com',
    projectId: 'chuck-norris-jokes-a4650'
};
firebase.initializeApp(config);


export const auth = firebase.auth();

const db = firebase.database(); 