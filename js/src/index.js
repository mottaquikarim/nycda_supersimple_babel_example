import Compose from "./compose.js";
import List from "./list.js";

const Main = document.querySelector('#app');

window.addEventListener("hashchange", function() {
  let locationHash = location.hash;
  if (locationHash.indexOf('#/') === 0) {
    locationHash = locationHash.slice(2);
  }

  const route = locationHash.toLowerCase();

  if (route === 'compose') {
    Compose(Main);
  }
  else if (route === 'list') {
    List(Main);
  }

}, false);

location.hash = '#/compose';