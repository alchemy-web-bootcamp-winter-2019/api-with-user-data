import { auth } from './firebase.js';
import createHeader from '../src/shared/create-header.js';


const options = { skipAuth : true };
createHeader(options);

const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#firebaseui-auth-container', {
    // "providers" - how is user allowed to log in?
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // where do we go on success?
    signInSuccessUrl: '../',
    // don't show google account chooser
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
});

