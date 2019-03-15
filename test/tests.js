import { app } from '../firebase/firebase.js';
import './html-equal.js';
import './create-river.test.js';
import './url-functions.test.js';
import './create-header.test.js';
import './create-favorites.test.js';
import './add-remove-site-from-query.test.js';

QUnit.done(() => {
    app.delete();
});
