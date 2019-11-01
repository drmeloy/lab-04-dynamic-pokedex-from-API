import HomeApp from './components/HomeApp.js';

const app = new HomeApp();
const dom = app.renderDOM();
document.body.prepend(dom);