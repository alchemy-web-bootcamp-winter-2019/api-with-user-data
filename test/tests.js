import { app } from '../src/firebase.js';
import './html-equal.js';
import './make-jokes-template.test.js';
import './query-component.test.js';
import './make-url.test.js';
import './header-component.test.js';
import './convert-object-to-array.test.js';

QUnit.done(() => {
    app.delete();
});


