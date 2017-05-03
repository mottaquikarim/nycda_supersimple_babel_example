import {getCurrentLocation} from './locationServices';
import {weatherByLocation} from './api/weather';
import {searchByQuery} from './api/giphy';

const getLocation = getCurrentLocation();
const getWeather = getLocation.then(results => {
    const {latitude, longitude} = results.coords || {};
    
    localStorage.setItem('savedCoords', JSON.stringify({latitude, longitude}));

    return weatherByLocation(latitude, longitude);
});
const getGiphy = getWeather.then((weatherData) => {
    const {name, weather} = weatherData;
    console.log(weatherData);
    const {description} = weather[0];

    console.log(weatherData);
    return searchByQuery(description + name);
})

Promise.all([getLocation, getWeather, getGiphy])
    .then(([location, weather, giphy]) => {
        console.log(location, weather, giphy)
    })
    .catch(e => {
        document.querySelector('#app').innerHTML = `<h1>${e}</h1>`;
    });


















