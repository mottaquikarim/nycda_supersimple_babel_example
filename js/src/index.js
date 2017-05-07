import {forecastByCity} from './api/weather';
import {weatherItem} from './components/weatherItem';

forecastByCity('nyc, usa').then(data => {
    console.log(data)
    data.list.forEach((dataItem) => {
        weatherItem(dataItem, '#app');
    })
});