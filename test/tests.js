import { app } from '../src/firebase.js';
import './html-equal.js';
import './make-starship-template.test.js';
import './make-search-url.test.js';
import './query-components.test.js';
import './convert-object-to-array.test.js';
import './header-component.test.js';
QUnit.done(() => {
    app.delete();
});