import {forecastByCity} from './api/weather';
import {weatherForecast} from './components/WeatherForecast';

forecastByCity('nyc, usa').then(data => {
    console.log(data)
    const dataToDisplay = data.list.filter((dataItem, index) => {
    	return index % 8 === 0;
    });

    weatherForecast(dataToDisplay, '#app');
    // console.log(dataToDisplay)
});

forecastByCity('atlanta, usa').then(data => {
    console.log(data)
    const dataToDisplay = data.list.filter((dataItem, index) => {
    	return index % 8 === 0;
    });

    weatherForecast(dataToDisplay, '#app');
    // console.log(dataToDisplay)
});