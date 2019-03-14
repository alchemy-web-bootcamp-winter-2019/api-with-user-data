const config = {
    apiKey: "AIzaSyBWb3kTFgU0jyGllo654O19ESnW712ifGs",
    authDomain: "starship-sales.firebaseapp.com",
    databaseURL: "https://starship-sales.firebaseio.com",
    projectId: "starship-sales"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();
export const favoritesByUserRef = db.ref('favorites-by-user');