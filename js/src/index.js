import {forecastByCity} from './api/weather';
import {weatherItem} from './components/weatherItem';

forecastByCity('nyc, usa').then(data => {
    console.log(data)

    weatherItem(data.list[0], '#app');
});