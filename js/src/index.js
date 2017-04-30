import {getCurrentLocation} from './locationServices';
import {weatherByLocation} from './api/weather';
import {searchByQuery} from './api/giphy';

getCurrentLocation()
    .then(results => {
        const {latitude, longitude} = results.coords;
        localStorage.setItem('savedCoords', JSON.stringify({latitude, longitude}));

        return weatherByLocation(latitude, longitude);
    })
    .then((weatherData) => {
        const {name, weather} = weatherData;
        console.log(weatherData);
        const {description} = weather[0];

        console.log(weatherData);
        return searchByQuery(description + name);
    })
    .then((giphyData) => {
        console.log(giphyData)
    })
    .catch(e => {
        document.querySelector('#app').innerHTML = `<h1>${e}</h1>`;
    });


















